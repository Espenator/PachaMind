import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const repoRoot = process.cwd();
const manifestPath = path.join(repoRoot, "public", "ASSETS.md");
const generatedBlurPath = path.join(repoRoot, "lib", "generated", "asset-blurs.ts");

const IMAGE_MAX_EDGE = 2400;
const IMAGE_TARGET_BYTES = 500 * 1024;

function parseTable(lines) {
  const [headerLine, dividerLine, ...rowLines] = lines.filter((line) => line.trim());
  if (!headerLine || !dividerLine) return [];

  const headers = headerLine
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);

  return rowLines
    .filter((line) => line.startsWith("|"))
    .map((line) =>
      line
        .split("|")
        .map((part) => part.trim())
        .filter(Boolean),
    )
    .filter((cells) => cells.length === headers.length)
    .map((cells) =>
      Object.fromEntries(headers.map((header, index) => [header, cells[index]])),
    );
}

async function readManifest() {
  const markdown = await fs.readFile(manifestPath, "utf8");
  const lines = markdown.split(/\r?\n/);

  function sectionTable(titlePrefix) {
    const start = lines.findIndex((line) => line.trim().startsWith(titlePrefix));
    if (start === -1) return [];
    const tableStart = lines.slice(start + 1).findIndex((line) => line.trim().startsWith("|"));
    if (tableStart === -1) return [];
    const sectionLines = lines.slice(start + 1 + tableStart);
    const tableLines = [];
    for (const line of sectionLines) {
      if (!line.trim().startsWith("|")) break;
      tableLines.push(line);
    }
    return parseTable(tableLines);
  }

  return {
    images: sectionTable("## Images"),
    videos: sectionTable("## Video"),
  };
}

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

function placeholderSvg(title, width = 1600, height = 1000) {
  const safeTitle = title.replace(/[<&>]/g, "");
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#241915"/>
          <stop offset="45%" stop-color="#6e8ca0"/>
          <stop offset="100%" stop-color="#c9a353"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#bg)"/>
      <rect x="56" y="56" width="${width - 112}" height="${height - 112}" rx="40" fill="rgba(247,242,234,0.08)" stroke="rgba(247,242,234,0.18)"/>
      <text x="80" y="${height - 140}" fill="#fbf8f3" font-size="44" font-family="Inter, Arial, sans-serif" letter-spacing="3">PachaMind</text>
      <text x="80" y="${height - 80}" fill="#f3ece2" font-size="64" font-family="Georgia, serif">${safeTitle}</text>
    </svg>
  `;
}

async function fetchBinary(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "PachaMind asset sync" },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

async function optimizeImage(sourceBuffer, outputPath) {
  const extension = path.extname(outputPath).toLowerCase();
  let pipeline = sharp(sourceBuffer).rotate().resize({
    width: IMAGE_MAX_EDGE,
    height: IMAGE_MAX_EDGE,
    fit: "inside",
    withoutEnlargement: true,
  });

  if (extension === ".png") {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true });
  } else {
    pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
  }

  let output = await pipeline.toBuffer();

  if (extension !== ".png" && output.byteLength > IMAGE_TARGET_BYTES) {
    output = await sharp(sourceBuffer)
      .rotate()
      .resize({
        width: IMAGE_MAX_EDGE,
        height: IMAGE_MAX_EDGE,
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({ quality: 74, mozjpeg: true })
      .toBuffer();
  }

  await ensureDir(outputPath);
  await fs.writeFile(outputPath, output);
}

async function writePlaceholder(outputPath, title) {
  const svg = placeholderSvg(title);
  const extension = path.extname(outputPath).toLowerCase();
  const image = sharp(Buffer.from(svg));
  const buffer =
    extension === ".png"
      ? await image.png({ compressionLevel: 9, palette: true }).toBuffer()
      : await image.jpeg({ quality: 86, mozjpeg: true }).toBuffer();
  await ensureDir(outputPath);
  await fs.writeFile(outputPath, buffer);
}

async function generateBlurMap(paths) {
  const entries = [];

  for (const assetPath of paths) {
    const absolutePath = path.join(repoRoot, assetPath);
    try {
      const blurDataURL = `data:image/jpeg;base64,${await sharp(absolutePath)
        .resize(20)
        .jpeg({ quality: 40 })
        .toBuffer()
        .then((buffer) => buffer.toString("base64"))}`;
      entries.push([assetPath.replace(/^public/, ""), blurDataURL]);
    } catch (error) {
      console.warn(`Skipping blur placeholder for ${assetPath}: ${error.message}`);
    }
  }

  await ensureDir(generatedBlurPath);
  await fs.writeFile(
    generatedBlurPath,
    `export const assetBlurData: Record<string, string> = ${JSON.stringify(
      Object.fromEntries(entries),
      null,
      2,
    )} as const;\n`,
  );
}

async function materializeImages(imageEntries) {
  const writtenPaths = [];

  for (const entry of imageEntries) {
    const outputPath = path.join(repoRoot, entry.path);
    try {
      const buffer = await fetchBinary(entry.source_url);
      await optimizeImage(buffer, outputPath);
      console.log(`Fetched ${entry.path}`);
    } catch (error) {
      console.warn(`Fetch failed for ${entry.path}: ${error.message}`);
      await writePlaceholder(outputPath, entry.subject);
      console.log(`Placeholder kept for ${entry.path}`);
    }
    writtenPaths.push(entry.path);
  }

  return writtenPaths;
}

async function materializeVideoPoster(videoEntries) {
  const posterEntry = videoEntries.find((entry) => /\.(png|jpe?g)$/i.test(entry.path));
  if (!posterEntry) return [];
  const outputPath = path.join(repoRoot, posterEntry.path);
  const sourceImage = path.join(repoRoot, "public", "images", "andes", "machu-picchu-inti-punku.jpg");

  try {
    const posterBuffer = await sharp(sourceImage)
      .resize({ width: 2000, height: 1200, fit: "cover" })
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer();
    await ensureDir(outputPath);
    await fs.writeFile(outputPath, posterBuffer);
  } catch {
    await writePlaceholder(outputPath, posterEntry.subject);
  }

  return [posterEntry.path];
}

async function main() {
  const { images, videos } = await readManifest();
  const imagePaths = await materializeImages(images);
  const posterPaths = await materializeVideoPoster(videos);
  await generateBlurMap([...imagePaths, ...posterPaths]);

  if (videos.some((entry) => /\.(mp4|webm)$/i.test(entry.path))) {
    console.log(
      "Video binaries remain manual: selected Pexels clip URLs are recorded in public/ASSETS.md and the hero will fall back to the poster until MP4/WebM files are added.",
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
