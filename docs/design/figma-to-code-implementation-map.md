# Figma -> Code Implementation Map — Flow A (Free Learning Membership)

Maps Figma frames to Next.js App Router routes and React components to their code paths. Scope is the free learning onboarding/engagement flow only. No commerce, pricing, booking, or ceremony routes.

Figma file: https://www.figma.com/design/XtVdRDlRPT0uRtPkP89hnx/PachaMind-%E2%80%93-Flow-A--Free-Learning-Membership-

## Frame -> Route

| Figma frame | Route | Code path |
|---|---|---|
| Home | `/` | `app/page.tsx` |
| Learn | `/learn` | `app/learn/page.tsx` |
| Lesson Detail (Three Pachas) | `/learn/[lessonId]` | `app/learn/[lessonId]/page.tsx` |
| Puma Path | `/puma-path` | `app/puma-path/page.tsx` |
| Signup (Create free learning membership) | `/signup` | `app/signup/page.tsx` |
| Dashboard (mock logged-in) | `/dashboard` | `app/dashboard/page.tsx` |
| Account Preferences | `/account` | `app/account/page.tsx` |
| About Mallku | `/about` | `app/about/page.tsx` |

## Component -> Code Path

| Figma component | React component | Code path |
|---|---|---|
| SiteHeader | `SiteHeader` | `components/layout/SiteHeader.tsx` |
| MobileNav | `MobileNav` | `components/layout/MobileNav.tsx` |
| SiteFooter | `SiteFooter` | `components/layout/SiteFooter.tsx` |
| PrimaryButton (Start Learning free) | `PrimaryButton` | `components/ui/PrimaryButton.tsx` |
| SecondaryButton | `SecondaryButton` | `components/ui/SecondaryButton.tsx` |
| FeaturedVideoCard | `FeaturedVideoCard` | `components/cards/FeaturedVideoCard.tsx` |
| LessonCard | `LessonCard` | `components/cards/LessonCard.tsx` |
| BadgeCard | `BadgeCard` | `components/cards/BadgeCard.tsx` |
| ReflectionCard | `ReflectionCard` | `components/cards/ReflectionCard.tsx` |
| PumaPathStageCard | `PumaPathStageCard` | `components/cards/PumaPathStageCard.tsx` |
| ProgressRing | `ProgressRing` | `components/ui/ProgressRing.tsx` |
| TextInput | `TextInput` | `components/forms/TextInput.tsx` |
| SelectInput | `SelectInput` | `components/forms/SelectInput.tsx` |
| ConsentCheckbox (unchecked by default) | `ConsentCheckbox` | `components/forms/ConsentCheckbox.tsx` |

## Token Wiring

- Color/type/spacing tokens defined in `docs/design/pachamind-design-tokens.md`.
- Additive CSS custom properties belong in a dedicated tokens layer (e.g. `app/tokens.css`) imported by `app/globals.css`; do not overwrite existing globals.
- Tailwind utilities are extended in `tailwind.config` per the Tailwind Mapping section of the tokens doc.

## Prototype Flow

Home -> (Start Learning free) -> Learn -> Lesson Detail -> (Create free learning membership) -> Signup -> Dashboard -> Account Preferences. About Mallku is reachable from SiteHeader/SiteFooter.

## Guardrails

- No checkout, payment, upgrade, pricing, donation, or booking routes/components.
- CTAs use only allowed language: "Start Learning free", "Create free PachaMind learning membership".
- No Embodier.ai opt-in, no ceremony pathways, no health/outcome claims.
