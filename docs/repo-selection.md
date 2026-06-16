# PachaMind.org — Repo Selection

## Decision
**Primary seed:** LearnHouse — https://github.com/learnhouse/learnhouse
**Fallback:** mux/video-course-starter-kit (video/lesson architecture only)
**Rejected:** SaaS/Stripe-first starters (e.g. adrianhajdin/saas-app) — too commercially opinionated.

Approach: keep LearnHouse code as-is (including paid/enterprise features) but run it **free for now** via config / unset payment keys. No code removal required.

## Ranked Shortlist

| Rank | Repo | Score /100 | Category | Strength | Risk |
|------|------|-----------|----------|----------|------|
| 1 | learnhouse/learnhouse | 74 | Educational LMS | Education-first, video+docs, open source | AGPL license; some course-selling patterns |
| 2 | mux/video-course-starter-kit | 62 | Video-course | Strong video/lesson architecture | Mux vendor lock-in |
| 3 | devAbdulsalam/learncha | 55 | Gamified learning | Mission-aligned, gamification primitives | Immature codebase |
| 4 | btholt/next-course-starter | 48 | Simple course | Easy to adapt | No dashboard/progress/gamification |
| 5 | RiP3rQ/Learning-Platform-NextJS | 40 | Full LMS | Progress + dashboards | Heavy Stripe dependency |

## Rubric
25 educational/gamification fit | 20 mobile-first UX | 15 video/lesson architecture | 10 nonprofit/mission-safe fit | 10 ease of removing commercial patterns | 10 dashboard/progress | 5 performance/accessibility | 5 bilingual flexibility

## Why LearnHouse Wins
A more "complete" commercial repo bundles Stripe, subscriptions, and checkout that all work against PachaMind's free nonprofit mission. LearnHouse is education-first, so building Puma Path gamification on top is less work than stripping commercial DNA out of a SaaS template.

## Warnings / Cleanup Concerns
- **License [NEEDS COUNSEL/VERIFICATION]:** LearnHouse is **AGPL v3.0** — publicly deploying a modified version typically requires source disclosure. Verify before launch.
- Disable/hide any enrollment, pricing, or premium-tier UI on the public domain.
- Do not commit to Mux for video; keep provider-agnostic.
- Simplify auth to first name + email for MVP.

## [NEEDS COUNSEL/VERIFICATION]
- AGPL compliance for a public nonprofit deployment
- Google Ad Grants eligibility
- Privacy/consent for member signup (first name + email)
- Nonprofit governance of the domain
- Any data-sharing with Embodier.ai
