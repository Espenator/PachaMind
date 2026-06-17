# PachaMind

Free bilingual Next.js learning platform for sacred documentary-style lessons.

## Core commitments

- 100% free and nonprofit
- No pricing, donations, checkout, or sales funnel language
- No medical or therapeutic claims
- Tradition-holder credit for Mallku Aribalo throughout the experience
- Recurring message: `No cost, no sales — only learning`

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run typecheck
npm run build
npm test
```

## Supabase backend setup

- Supabase setup guide: `/home/runner/work/PachaMind/PachaMind/docs/SUPABASE_SETUP.md`
- Supabase migration docs: `/home/runner/work/PachaMind/PachaMind/supabase/README.md`
- Media placeholders to replace: `/home/runner/work/PachaMind/PachaMind/docs/MEDIA_NEEDED.md`

## Content architecture

- English content: `/home/runner/work/PachaMind/PachaMind/lib/content/en.ts`
- Spanish content: `/home/runner/work/PachaMind/PachaMind/lib/content/es.ts`
- Browser progress storage: `/home/runner/work/PachaMind/PachaMind/lib/progress.ts`
