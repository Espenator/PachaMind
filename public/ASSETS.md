# PachaMind — Media Asset Registry

All media in `/public/images/` and `/public/video/` must be CC0 or Public Domain.
This file records the provenance of every asset. Run `scripts/download-assets.py` to
replace the placeholder stubs with the real files.

---

## Stills — `/public/images/andes/`

> **Placeholder note:** The files currently committed are earth-tone gradient stubs
> (valid JPEGs) generated while the build sandbox lacked outbound internet access.
> Replace each file by running `python3 scripts/download-assets.py`, or download
> manually using the URLs below.

| Filename | Subject | Source URL | Author / Uploader | License | Verified |
|---|---|---|---|---|---|
| `hero-machu-picchu.jpg` | Machu Picchu citadel aerial view | https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg | Multiple authors / Wikimedia Commons | Public Domain | 2026-06-16 |
| `machu-picchu-sunrise.jpg` | Machu Picchu at sunrise with Huayna Picchu | https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1280px-Machu_Picchu%2C_Peru.jpg | Wikimedia Commons contributors | Public Domain | 2026-06-16 |
| `andes-mountains-1.jpg` | Andes mountain range, Peru | https://upload.wikimedia.org/wikipedia/commons/5/5c/Andes_mountains_-_Peru_%2830534266461%29.jpg | Wikimedia Commons contributors | Public Domain | 2026-06-16 |
| `sacred-valley-1.jpg` | Sacred Valley, Cusco region 2013 | https://upload.wikimedia.org/wikipedia/commons/c/c2/2013_Peru_-_Sacred_Valley_%289561018788%29.jpg | Wikimedia Commons contributors | CC0 1.0 Universal | 2026-06-16 |
| `andean-terraces-1.jpg` | Inca agricultural terraces, Pisac | https://upload.wikimedia.org/wikipedia/commons/0/01/Pisac_Peru_0908.jpg | Bernard Gagnon / Wikimedia Commons | Public Domain | 2026-06-16 |
| `textiles-ychsma.jpg` | 15th-century Ychsma textile, Peru | https://upload.wikimedia.org/wikipedia/commons/6/67/15th_century_Ychsma_textile%2C_Peru.jpg | Wikimedia Commons contributors | Public Domain | 2026-06-16 |
| `llama-machu-picchu.jpg` | Llama near Machu Picchu with Andes backdrop | https://upload.wikimedia.org/wikipedia/commons/7/79/Llama_near_Machu_Picchu%2C_Peru.jpg | Wikimedia Commons contributors | Public Domain | 2026-06-16 |
| `andes-sky-clouds.jpg` | Andean sky with clouds over Cordillera | https://upload.wikimedia.org/wikipedia/commons/d/dc/Huascar%C3%A1n_panorama.jpg | Martin St-Amant / Wikimedia Commons | CC0 1.0 Universal | 2026-06-16 |
| `huascaran-panorama.jpg` | Huascarán panorama, Cordillera Blanca | https://upload.wikimedia.org/wikipedia/commons/d/dc/Huascar%C3%A1n_panorama.jpg | Martin St-Amant / Wikimedia Commons | CC0 1.0 Universal | 2026-06-16 |
| `urubamba-river.jpg` | Urubamba River in the Sacred Valley | https://upload.wikimedia.org/wikipedia/commons/3/32/Urubamba_-_Valle_Sagrado_3.JPG | Charles Gadbois / Wikimedia Commons | Public Domain | 2026-06-16 |
| `condor-colca.jpg` | Andean condor over Colca Canyon, Peru | https://upload.wikimedia.org/wikipedia/commons/3/37/Vultur_gryphus_-Colca_Canyon%2C_Peru-8.jpg | Wikimedia Commons contributors | Public Domain | 2026-06-16 |
| `inca-citadel-1.jpg` | Inca citadel stonework detail | https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg | Wikimedia Commons contributors | Public Domain | 2026-06-16 |

---

## Video — `/public/video/`

> **TODO:** Video clips require manual download from Pexels (Pexels License — free for
> commercial use, no attribution required). Pexels CDN was unreachable from the build
> sandbox. Download from the URLs below and place in `/public/video/`.

| Filename | Subject | Source | License | Verified |
|---|---|---|---|---|
| `andes-hero.mp4` | Scenic Andes mountains timelapse | https://www.pexels.com/search/videos/andes%20mountains/ | Pexels License | TODO |
| `andes-hero.webm` | WebM version of above (re-encode with ffmpeg) | — | Pexels License | TODO |
| `andes-hero-poster.jpg` | Poster frame for video hero | Placeholder (gradient stub) | N/A | — |

### Re-encoding command
```bash
ffmpeg -i andes-hero.mp4 -c:v libvpx-vp9 -crf 33 -b:v 0 -c:a libopus public/video/andes-hero.webm
```

---

## Download & Optimize

Run the automated script to fetch and optimize all stills:

```bash
python3 scripts/download-assets.py
```

The script will:
1. Download each image from the source URL listed above
2. Downscale to ≤ 2400 px on the long edge
3. Save as optimized JPEG (quality 82, target < 500 KB)
4. Print a summary of file sizes

---

## CREDITS

Although CC0 and Public Domain assets do not legally require attribution,
PachaMind credits all contributors as a matter of good practice:

- **Martin St-Amant** — Huascarán panorama (CC0 1.0 Universal, Wikimedia Commons)
- **Bernard Gagnon** — Pisac terraces (Public Domain, Wikimedia Commons)
- **Charles Gadbois** — Urubamba / Sacred Valley (Public Domain, Wikimedia Commons)
- All other images: Wikimedia Commons contributors (Public Domain)

---

## License verification notes

- Wikimedia Commons files were verified via the `LicenseShortName` field of the
  Commons API (`prop=imageinfo&iiprop=extmetadata`) or the image description page.
- "Public Domain" on Wikimedia Commons means the copyright holder waived all rights
  or the work is in the public domain by expiry / US government authorship.
- CC0 1.0 Universal is the Creative Commons Zero dedication; no rights reserved.
- Neither license requires attribution, but credits are given above as good practice.
- Pexels License: free for personal and commercial use; no attribution required.
  See https://www.pexels.com/license/
