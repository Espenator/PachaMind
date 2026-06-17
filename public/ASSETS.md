# PachaMind Media Assets Manifest

Verified license-clean Andean media for /public. Only Public Domain (PD) and CC0
assets are listed here; do NOT add CC-BY / CC-BY-SA assets to this manifest or to
production paths.

All stills in the table below are **committed to the repo** under
`public/images/andes/` and wired into the site. Each license was re-verified
against the Wikimedia Commons API (`prop=imageinfo`, field `LicenseShortName`) on
2026-06-17. Historic Bingham photos are PD by age; NASA / ASTER images are PD as
US-government works.

## How to re-fetch

To re-materialize the binaries (e.g. after a clean checkout), run:

```bash
python3 scripts/fetch-assets.py
```

The script re-verifies each source's license via the Commons API before download
and refuses any source that is not CC0 / PD, then optimizes to <= 2400 px / < 500 KB
JPEG stills (the one PNG is a grayscale historic archival scan).

## Images (committed, verified CC0/PD)

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

## License-needs-verification — DO NOT wire into production

Sources that appeared in an earlier draft asset registry with a "Public Domain"
label that the Commons API contradicts. Recorded here only to prevent accidental
reuse. Do not add to production paths without re-verifying and satisfying their
attribution / share-alike terms:

| Commons file | actual license (API, 2026-06-17) | note |
|---|---|---|
| File:Machu Picchu, Peru.jpg | CC BY-SA 2.0 | NOT public domain — attribution + share-alike |
| File:Urubamba - Valle Sagrado 3.JPG | CC BY 3.0 | NOT public domain — attribution required |
| File:Andes mountains - Peru (30534266461).jpg | title not found | provenance unverified |
| File:2013 Peru - Sacred Valley (9561018788).jpg | title not found | provenance unverified |
| File:Pisac Peru 0908.jpg | title not found | provenance unverified |

## Video

No video is committed. The site currently uses imagery, not a video file. If a
clip is added later, source from Pexels (Pexels License — free for commercial use,
no attribution) and record the chosen clip URL + id and license here before
committing. Verify the clip page license at the time of download.

## Notes

- Historic Bingham (1911-1912) Machu Picchu photos are striking black-and-white;
  `machu-picchu-general.png` is kept as a grayscale archival scan for documentary
  texture. NASA/ISS color shots provide full-color range and citadel views.
- Although CC0 / PD do not legally require attribution, the author column above is
  retained as good practice.
- Re-verification command (per file):
  `https://commons.wikimedia.org/w/api.php?action=query&format=json&titles=<File:...>&prop=imageinfo&iiprop=extmetadata&iiextmetadatafilter=LicenseShortName`
