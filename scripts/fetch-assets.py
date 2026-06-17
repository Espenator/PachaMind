#!/usr/bin/env python3
"""Fetch and optimize the verified CC0 / Public-Domain Andean stills referenced by
the site into public/images/andes/.

Only CC0 / PD sources are listed here, mirroring public/ASSETS.md. The script
re-verifies each file's license via the Wikimedia Commons API before downloading,
so it refuses to write anything that is not CC0 or Public Domain. JPEG output is
downscaled to <= 2400 px on the long edge and re-encoded targeting < 500 KB; the
single PNG is a grayscale historic archival scan.

Usage:
    python3 scripts/fetch-assets.py            # fetch any missing assets

Requires Pillow (pip install Pillow). Commons throttles aggressively; the script
sleeps between requests and retries on HTTP 429.
"""
from __future__ import annotations

import io
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

try:
    from PIL import Image
except ImportError:  # pragma: no cover
    sys.exit("Pillow is required: pip install Pillow")

API = "https://commons.wikimedia.org/w/api.php"
UA = {"User-Agent": "PachaMind-asset-fetch/1.0 (educational nonprofit)"}
OUT_DIR = os.path.join("public", "images", "andes")
MAX_EDGE = 2400
TARGET_BYTES = 500 * 1024
OK_LICENSES = ("cc0", "public domain", "no restrictions")

# filename -> Commons "File:..." title. Mirror of public/ASSETS.md committed set.
COMMITTED = {
    "machu-picchu-inti-punku.jpg": "File:Tourists at Inti Punku.jpg",
    "machu-picchu-general.png": "File:Machu Picchu.png",
    "machu-picchu-hb10.jpg": "File:Machupicchu hb10.jpg",
    "machu-picchu-urubamba-canyon.jpg": "File:Machu Picchu and the Urubamba Canyon.jpg",
    "machu-picchu-partial-1911.jpg": "File:Partial view of Machu Picchu in 1911.jpg",
    "machu-picchu-aster-nasa.jpg": "File:Released to Public Machu-Picchu, Peru (ASTER NASA) (2075461768).jpg",
    "andes-iss47-mountain-road.jpg": "File:ISS-47 Andes, Peru, Mountain road.jpg",
    "andes-iss59-range.jpg": "File:ISS-59 Andes mountain range, Peru.jpg",
    "andes-iss64-range.jpg": "File:ISS-64 Andes Mountain range, Peru.jpg",
    "andes-western-slope-aster.jpg": "File:Western slope of Andes, Peru (ASTER).jpg",
}


def api_license(title: str) -> str:
    params = {
        "action": "query", "format": "json", "titles": title,
        "prop": "imageinfo", "iiprop": "extmetadata",
        "iiextmetadatafilter": "LicenseShortName",
    }
    url = API + "?" + urllib.parse.urlencode(params)
    data = json.load(urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30))
    page = next(iter(data["query"]["pages"].values()))
    if "imageinfo" not in page:
        return ""
    return page["imageinfo"][0].get("extmetadata", {}).get("LicenseShortName", {}).get("value", "")


def thumb_url(title: str, width: int = 2200) -> str:
    fname = title.split("File:", 1)[1]
    return ("https://commons.wikimedia.org/wiki/Special:FilePath/"
            + urllib.parse.quote(fname) + f"?width={width}")


def fetch_bytes(url: str, retries: int = 4) -> bytes:
    for attempt in range(retries):
        try:
            return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=90).read()
        except urllib.error.HTTPError as exc:
            if exc.code == 429 and attempt < retries - 1:
                wait = 30 * (attempt + 1)
                print(f"    429; backing off {wait}s")
                time.sleep(wait)
                continue
            raise
    raise RuntimeError("unreachable")


def optimize_and_save(raw: bytes, path: str) -> tuple[tuple[int, int], int]:
    is_png = path.lower().endswith(".png")
    im = Image.open(io.BytesIO(raw))
    if is_png:
        im = im.convert("L")  # historic archival scan -> grayscale PNG
        w, h = im.size
        if max(w, h) > 1500:
            scale = 1500 / max(w, h)
            im = im.resize((int(w * scale), int(h * scale)), Image.LANCZOS)
        im.save(path, "PNG", optimize=True)
        return im.size, os.path.getsize(path)
    im = im.convert("RGB")
    w, h = im.size
    if max(w, h) > MAX_EDGE:
        scale = MAX_EDGE / max(w, h)
        im = im.resize((int(w * scale), int(h * scale)), Image.LANCZOS)
    quality = 82
    im.save(path, "JPEG", quality=quality, optimize=True, progressive=True)
    size = os.path.getsize(path)
    while size > TARGET_BYTES and quality > 45:
        quality -= 5
        im.save(path, "JPEG", quality=quality, optimize=True, progressive=True)
        size = os.path.getsize(path)
    return im.size, size


def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)
    failures = 0
    for fn, title in COMMITTED.items():
        path = os.path.join(OUT_DIR, fn)
        if os.path.exists(path):
            print(f"  skip {fn} (already present)")
            continue
        try:
            lic = api_license(title)
            time.sleep(6)
            if not any(ok in lic.lower() for ok in OK_LICENSES):
                print(f"  REFUSE {fn}: license '{lic}' is not CC0/PD")
                failures += 1
                continue
            raw = fetch_bytes(thumb_url(title))
            dims, size = optimize_and_save(raw, path)
            print(f"  OK {fn:34} {dims[0]}x{dims[1]} {size // 1024}KB [{lic}]")
        except Exception as exc:  # noqa: BLE001
            print(f"  ERR {fn}: {exc}")
            failures += 1
        time.sleep(12)
    if failures:
        sys.exit(f"{failures} asset(s) failed; see messages above")


if __name__ == "__main__":
    main()
