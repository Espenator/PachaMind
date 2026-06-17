# Media still needed

This file tracks required production media assets that are still placeholders.

## Video placeholders

All lessons currently use explicit `mediaStatus: NEEDS_REAL_VIDEO` metadata in bilingual content files:

- `/home/runner/work/PachaMind/PachaMind/lib/content/en.ts`
- `/home/runner/work/PachaMind/PachaMind/lib/content/es.ts`

Each lesson includes a `mediaNote` describing what needs to be produced.

## Image placeholders

Current app routes only reference existing local image files in `/public/images/andes`, so there are no unresolved **NEEDS_REAL_IMAGE** placeholders in active code paths right now.

If any new image placeholder path is added without an existing local file, add it here as **NEEDS_REAL_IMAGE**.
