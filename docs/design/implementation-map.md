# PachaMind – Flow A Implementation Map

Maps the Figma "Mobile Screens" frames (PachaMind – Flow A: Free Learning Membership) to app routes and components. Generated via the UX Pilot AI plugin and reconciled to Flow A canon.

**Canon:** Free learning membership only. No pricing, payment, checkout, upgrade, donation, or booking language anywhere.

## Screen → Route → Components

| Screen | Route | Key Sections / Components |
|---|---|---|
| Home | `/` | Hero, FeaturedVideoCard, "Why learn" value row, LessonCard grid, SiteFooter |
| Learn | `/learn` | Page title, intro, LessonCard list, ProgressRing |
| Lesson Detail | `/learn/[lessonId]` | Title, video player, body, ReflectionCard, complete-reflection action, next-lesson link |
| Puma Path | `/puma-path` | Intro, PumaPathStageCard list, BadgeCard row, ProgressRing |
| Signup | `/signup` | Title, reassurance copy, form, ConsentCheckbox, PrimaryButton |
| Dashboard | `/dashboard` | Greeting, ProgressRing summary, "Continue learning" LessonCard, BadgeCard row, ReflectionCard |
| Account | `/account` | Profile fields, notification toggles, language SelectInput, save action |
| About Mallku | `/about` | Mission narrative, preservation note, documentary imagery, link to Learn |

## Shared elements
SiteHeader (logo + menu), sticky MobileNav, SiteFooter — present on all screens.

## Design tokens (Figma color styles)
Paper White #F7F1E7 (surface), Soft Sand #E6D7C3, Mist #EEF3F1, Deep Earth #2F261F, Terracotta #B7653F (accent + focus ring), Clay #8E4E35, Sage #7D8B6F, Sky #8FB6C9, Stone #8C8578, Charcoal #1D1A17. White cards #FFFFFF. Lora serif headings, sans UI, body ≥ 16px.

## Accessibility
WCAG AA contrast (≥ 4.5:1 body, ≥ 3:1 large/UI), tap targets ≥ 44×44px, visible terracotta focus rings, 390px mobile-first scaling to 1440px.

## Status (2026-06-18)
- All 8 screens generated and reconciled to canon.
- Open (manual): tidy frames into grid, wire raw auto-layout frames to master components.

## Production roadmap
1. Tidy frames into a 4×2 grid (manual in Figma editor).
2. Wire components (LessonCard, ProgressRing, BadgeCard, ReflectionCard, MobileNav, SiteHeader/Footer, PrimaryButton) to the Design System page.
3. Prototype links matching route flow (Home → Learn → Lesson Detail; nav to Dashboard/Account/About; Signup → Dashboard).
4. Engineering: build 4 anonymous routes first (Home, Learn, Lesson Detail, About), then Signup → Dashboard → Puma Path → Account once auth/data layer exists.
5. Dev handoff: map tokens to code variables (tokens.css), export specs.
