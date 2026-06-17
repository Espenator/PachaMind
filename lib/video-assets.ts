import "server-only";

import { existsSync } from "node:fs";
import path from "node:path";

function assetExists(relativePath: string) {
  return existsSync(path.join(process.cwd(), "public", relativePath));
}

export function getHeroVideoSources() {
  const mp4Path = "video/andes-hero.mp4";
  const webmPath = "video/andes-hero.webm";

  return {
    mp4Src: assetExists(mp4Path) ? `/${mp4Path}` : undefined,
    webmSrc: assetExists(webmPath) ? `/${webmPath}` : undefined,
  };
}
