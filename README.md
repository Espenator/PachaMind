# PachaMind

**Free educational platform rooted in Andean cosmovision** — taught by tradition-holder Mallku Aribalo (James Arevalo Merejildo).

## About

PachaMind is a 100% free, mobile-first, video-first educational website and learning platform. It shares the teachings of Andean cosmovision, the Three Pachas, the Five Andean Values, archaeo-astronomy, and conservation.

**Mission rules:**
- 100% free, no ads, no paywalls
- Educational and nonprofit in tone
- Mobile-first, video-first
- All teachings attributed to Mallku Aribalo

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- Static-first content (CMS-ready architecture)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/
├── app/                     # Next.js App Router pages
│   ├── page.tsx             # Homepage (13 sections)
│   ├── layout.tsx           # Root layout (header, footer, fonts)
│   ├── learn/               # Start Learning Free
│   ├── signup/              # Free signup (first name + email)
│   ├── dashboard/           # Learning dashboard
│   ├── videos/              # Video library
│   ├── lessons/[slug]/      # Individual lesson pages
│   ├── andean-cosmovision/  # Topic page
│   ├── the-three-pachas/    # Topic page
│   ├── the-five-andean-values/ # Topic page
│   ├── archaeo-astronomy/   # Topic page
│   ├── conservation/        # Topic page
│   ├── field-notes/         # Field notes index + [slug]
│   ├── cultural-calendar/   # Andean calendar
│   ├── about/               # About PachaMind
│   ├── about-mallku/        # About Mallku Aribalo
│   ├── glossary/            # Andean terms glossary
│   ├── faq/                 # Frequently asked questions
│   ├── contact/             # Contact page
│   ├── privacy/             # Privacy policy
│   └── terms/               # Terms of use
├── components/
│   ├── layout/              # SiteHeader, SiteFooter
│   ├── home/                # 13 homepage section components
│   ├── ui/                  # VideoCard, BadgeCard, ProgressRing, etc.
│   └── lesson/              # VideoPlayer, ReflectionPrompt, NextLessonCard
├── lib/
│   ├── types.ts             # TypeScript domain types
│   ├── seed-data.ts         # 10 lessons, 10 badges, glossary, field notes
│   └── utils.ts             # Formatting and utility functions
└── content/
    ├── lessons/             # MDX/JSON templates for lessons
    ├── glossary/            # JSON template for glossary terms
    └── field-notes/         # JSON template for field notes
```

## Design System

Earth-tone palette with Three Pachas visual rhythm:
- **Uku Pacha sections** — dark stone background (deep earth)
- **Kay Pacha sections** — mid-tone earthy (present world)
- **Hanaq Pacha sections** — light sky blue (upper world)

Typography: Lora (serif headings) + Inter (UI sans)

## Puma Path Stages

1. **Semilla** — The Seed
2. **Raíz** — The Root
3. **Tallo** — The Stem
4. **Flor** — The Flower
5. **Puma** — The Puma

## Content Guidelines

- All teachings attributed to Mallku Aribalo (James Arevalo Merejildo)
- AI may assist with drafts — **never publish without human editorial review**
- No health, therapy, medical, or transformation claims
- No retreat sales, booking flows, or commercial content
- See `content/lessons/_template.mdx` for the content authoring template

## Build & Deploy

```bash
npm run build    # Production build
npm run lint     # Run ESLint
```

---

*PachaMind — Rooted in the Sacred Valley · Shared with the world*
