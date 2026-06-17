# PachaMind Media Assets Manifest

Verified license-clean Andean media for /public. Each entry was checked on its
source page on 2026-06-16. Only Public Domain (PD) and CC0 assets are listed
here; do NOT add CC-BY / CC-BY-SA assets to this manifest.

## How to use

These files are referenced by URL until the binaries are fetched into the repo.
To materialize them locally, run a fetch step (e.g. a script that curls each
`source_url` into the given `path`), then optimize to <=2400px / <500KB stills.
Historic Bingham photos are PD by age; NASA images are PD as US-gov works.

## Images

| path | subject | source_url | author | license |
|------|---------|-----------|--------|---------|
| public/images/andes/machu-picchu-inti-punku.jpg | Inti Punku Sun Gate, Machu Picchu | https://upload.wikimedia.org/wikipedia/commons/9/96/Tourists_at_Inti_Punku.jpg | Mx. Granger | CC0 1.0 |
| public/images/andes/machu-picchu-general.png | Machu Picchu general view (1912) | https://upload.wikimedia.org/wikipedia/commons/8/88/Machu_Picchu.png | Hiram Bingham III | Public domain |
| public/images/andes/machu-picchu-hb10.jpg | Machu Picchu after clearing (1912) | https://upload.wikimedia.org/wikipedia/commons/8/86/Machupicchu_hb10.jpg | Hiram Bingham III | Public domain |
| public/images/andes/machu-picchu-urubamba-canyon.jpg | Machu Picchu & Urubamba Canyon | https://upload.wikimedia.org/wikipedia/commons/6/67/Machu_Picchu_and_the_Urubamba_Canyon.jpg | Hiram Bingham III | Public domain |
| public/images/andes/machu-picchu-partial-1911.jpg | Partial view of Machu Picchu (1911) | https://upload.wikimedia.org/wikipedia/commons/b/bc/Partial_view_of_Machu_Picchu_in_1911.jpg | H. L. Tucker | Public domain |
| public/images/andes/machu-picchu-aster-nasa.jpg | Machu Picchu ASTER satellite color | https://upload.wikimedia.org/wikipedia/commons/4/47/Released_to_Public_Machu-Picchu%2C_Peru_%28ASTER_NASA%29_%282075461768%29.jpg | NASA/pingnews | Public domain |
| public/images/andes/andes-iss47-mountain-road.jpg | Andes mountain road from ISS | https://upload.wikimedia.org/wikipedia/commons/5/56/ISS-47_Andes%2C_Peru%2C_Mountain_road.jpg | NASA / Tim Kopra | Public domain |
| public/images/andes/andes-iss59-range.jpg | Snow-capped Andes range from ISS | https://upload.wikimedia.org/wikipedia/commons/a/a3/ISS-59_Andes_mountain_range%2C_Peru.jpg | NASA | Public domain |
| public/images/andes/andes-iss64-range.jpg | Andes range, Lagunas Ajuachaya | https://upload.wikimedia.org/wikipedia/commons/9/95/ISS-64_Andes_Mountain_range%2C_Peru.jpg | NASA | Public domain |
| public/images/andes/andes-western-slope-aster.jpg | Western slope of the Andes (ASTER) | https://upload.wikimedia.org/wikipedia/commons/1/16/Western_slope_of_Andes%2C_Peru_%28ASTER%29.jpg | NASA/METI/AIST/Japan ASTER | Public domain |

## Video (to source from Pexels - free, no attribution, commercial OK)

Pexels footage is License-free for commercial use without attribution. Pick
clips on pexels.com/search/videos and record the chosen clip URL + id here
before committing:

| path | subject | source | license |
|------|---------|--------|---------|
| public/video/andes-hero.mp4 | Andes sunrise cinematic hero | https://www.pexels.com/video/scenic-sunrise-at-the-andes-mountains-2775516/ | Pexels License (no attribution) |
| public/video/andes-hero.webm | WebM transcode of the chosen hero clip | https://www.pexels.com/video/scenic-sunrise-at-the-andes-mountains-2775516/ | Pexels License (derived transcode) |
| public/video/machu-picchu.mp4 | Machu Picchu aerial scenic cutaway | https://www.pexels.com/video/aerial-view-of-mountainous-landscape-in-machu-picchu-peru-1759824/ | Pexels License (no attribution) |
| public/video/andes-hero-poster.jpg | Poster still for andes-hero.mp4 | derived from hero frame | n/a |

## Notes / TODO

- Historic Bingham (1911-1912) Machu Picchu photos are striking black-and-white;
  good for documentary texture sections. Use a NASA/ISS color shot or a Pexels
  clip for the full-color cinematic hero.
- Still need a CC0/PD color Sacred Valley, Andean textiles, condor, and llama
  still; add here only after verifying each on its Commons/Pexels page.
- `npm run assets:download` reads this manifest, fetches every image row when
  outbound network is available, optimizes to <=2400px / <500KB, and writes blur
  placeholders to `lib/generated/asset-blurs.ts`.
- When outbound access is blocked, the script keeps deterministic documentary
  gradient placeholders in place so image paths stay valid and the site remains
  buildable. Pexels MP4/WebM downloads remain manual until network access is
  available in the environment.
