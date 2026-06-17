#!/usr/bin/env python3
"""
Download and optimize CC0/Public Domain Andean media assets for PachaMind.

Usage:
    python3 scripts/download-assets.py

Requirements:
    pip install Pillow requests

Each image is downloaded from its verified CC0/PD source, downscaled to a
maximum of 2400 px on the long edge, and saved as an optimized JPEG (<500 KB
target) in public/images/andes/.

See public/ASSETS.md for full license provenance of every asset.
"""

import os
import sys
import urllib.request
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("ERROR: Pillow is required.  Run: pip install Pillow")
    sys.exit(1)

# ---------------------------------------------------------------------------
# Asset manifest
# ---------------------------------------------------------------------------

ANDES_DIR = Path(__file__).parent.parent / "public" / "images" / "andes"
VIDEO_DIR = Path(__file__).parent.parent / "public" / "video"

STILLS: list[dict] = [
    {
        "filename": "hero-machu-picchu.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
        "license": "Public Domain",
        "author": "Wikimedia Commons contributors",
    },
    {
        "filename": "machu-picchu-sunrise.jpg",
        "url": (
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/"
            "Machu_Picchu%2C_Peru.jpg/2048px-Machu_Picchu%2C_Peru.jpg"
        ),
        "license": "Public Domain",
        "author": "Wikimedia Commons contributors",
    },
    {
        "filename": "andes-mountains-1.jpg",
        "url": (
            "https://upload.wikimedia.org/wikipedia/commons/5/5c/"
            "Andes_mountains_-_Peru_%2830534266461%29.jpg"
        ),
        "license": "Public Domain",
        "author": "Wikimedia Commons contributors",
    },
    {
        "filename": "sacred-valley-1.jpg",
        "url": (
            "https://upload.wikimedia.org/wikipedia/commons/c/c2/"
            "2013_Peru_-_Sacred_Valley_%289561018788%29.jpg"
        ),
        "license": "CC0 1.0 Universal",
        "author": "Wikimedia Commons contributors",
    },
    {
        "filename": "andean-terraces-1.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/01/Pisac_Peru_0908.jpg",
        "license": "Public Domain",
        "author": "Bernard Gagnon / Wikimedia Commons",
    },
    {
        "filename": "textiles-ychsma.jpg",
        "url": (
            "https://upload.wikimedia.org/wikipedia/commons/6/67/"
            "15th_century_Ychsma_textile%2C_Peru.jpg"
        ),
        "license": "Public Domain",
        "author": "Wikimedia Commons contributors",
    },
    {
        "filename": "llama-machu-picchu.jpg",
        "url": (
            "https://upload.wikimedia.org/wikipedia/commons/7/79/"
            "Llama_near_Machu_Picchu%2C_Peru.jpg"
        ),
        "license": "Public Domain",
        "author": "Wikimedia Commons contributors",
    },
    {
        "filename": "andes-sky-clouds.jpg",
        "url": (
            "https://upload.wikimedia.org/wikipedia/commons/d/dc/"
            "Huascar%C3%A1n_panorama.jpg"
        ),
        "license": "CC0 1.0 Universal",
        "author": "Martin St-Amant / Wikimedia Commons",
    },
    {
        "filename": "huascaran-panorama.jpg",
        "url": (
            "https://upload.wikimedia.org/wikipedia/commons/d/dc/"
            "Huascar%C3%A1n_panorama.jpg"
        ),
        "license": "CC0 1.0 Universal",
        "author": "Martin St-Amant / Wikimedia Commons",
    },
    {
        "filename": "urubamba-river.jpg",
        "url": (
            "https://upload.wikimedia.org/wikipedia/commons/3/32/"
            "Urubamba_-_Valle_Sagrado_3.JPG"
        ),
        "license": "Public Domain",
        "author": "Charles Gadbois / Wikimedia Commons",
    },
    {
        "filename": "condor-colca.jpg",
        "url": (
            "https://upload.wikimedia.org/wikipedia/commons/3/37/"
            "Vultur_gryphus_-Colca_Canyon%2C_Peru-8.jpg"
        ),
        "license": "Public Domain",
        "author": "Wikimedia Commons contributors",
    },
    {
        "filename": "inca-citadel-1.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
        "license": "Public Domain",
        "author": "Wikimedia Commons contributors",
    },
]

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

MAX_LONG_EDGE = 2400
JPEG_QUALITY = 82
TARGET_KB = 500


def download(url: str, dest: Path) -> bool:
    """Download url to dest. Returns True on success."""
    headers = {"User-Agent": "PachaMind-asset-downloader/1.0 (open-source)"}
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            dest.write_bytes(resp.read())
        return True
    except Exception as exc:  # noqa: BLE001
        print(f"    WARN: download failed — {exc}")
        return False


def optimize(src: Path, dest: Path, max_edge: int = MAX_LONG_EDGE) -> None:
    """Load src, downscale if needed, save as JPEG to dest."""
    img = Image.open(src)
    if img.mode not in ("RGB",):
        img = img.convert("RGB")

    w, h = img.size
    if max(w, h) > max_edge:
        scale = max_edge / max(w, h)
        img = img.resize((int(w * scale), int(h * scale)), Image.LANCZOS)

    img.save(dest, "JPEG", quality=JPEG_QUALITY, optimize=True)

    kb = dest.stat().st_size // 1024
    flag = " ⚠ OVERSIZED" if kb > TARGET_KB else ""
    print(f"    → {dest.name}  {kb} KB  {img.size}{flag}")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    ANDES_DIR.mkdir(parents=True, exist_ok=True)
    VIDEO_DIR.mkdir(parents=True, exist_ok=True)

    print(f"\nDownloading {len(STILLS)} still(s) into {ANDES_DIR}\n")

    ok = 0
    fail = 0

    for asset in STILLS:
        fname = asset["filename"]
        url = asset["url"]
        dest = ANDES_DIR / fname
        tmp = dest.with_suffix(".tmp")

        print(f"  {fname}")
        print(f"    source: {url}")
        print(f"    license: {asset['license']}  author: {asset['author']}")

        if download(url, tmp):
            try:
                optimize(tmp, dest)
                tmp.unlink(missing_ok=True)
                ok += 1
            except Exception as exc:  # noqa: BLE001
                print(f"    WARN: optimize failed — {exc}")
                tmp.rename(dest)  # keep raw download as fallback
                ok += 1
        else:
            tmp.unlink(missing_ok=True)
            fail += 1

        print()

    print(f"Done. {ok} succeeded, {fail} failed.")

    if fail:
        print(
            "\nFailed assets remain as gradient placeholders. "
            "Verify the source URLs in public/ASSETS.md and retry."
        )

    print(
        "\n⚠ VIDEO clips are not downloaded automatically.\n"
        "  Browse https://www.pexels.com/search/videos/andes+mountains/\n"
        "  Download an mp4 → public/video/andes-hero.mp4\n"
        "  Re-encode to WebM:\n"
        "    ffmpeg -i public/video/andes-hero.mp4 \\\n"
        "           -c:v libvpx-vp9 -crf 33 -b:v 0 -c:a libopus \\\n"
        "           public/video/andes-hero.webm\n"
        "  Capture a poster frame:\n"
        "    ffmpeg -i public/video/andes-hero.mp4 -ss 00:00:03 -vframes 1 \\\n"
        "           public/video/andes-hero-poster.jpg\n"
    )


if __name__ == "__main__":
    main()
