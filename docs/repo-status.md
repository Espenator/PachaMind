# Repo Status — June 17, 2026

> **Canon amendment:** June 17, 2026. This is a factual snapshot of the
> repository state at the time of the free-membership canon refinement. It
> exists to replace any stale "empty / unseeded repo" notes with the actual
> finding. **Not legal advice.**

## Finding: the repo is seeded and already contains a working app

The repository is **not empty and not merely a docs scaffold**. `main` carries a
real **Next.js (App Router, TypeScript) application** with internationalized
(`[lang]`) routing, plus the strategy/compliance/curriculum docs in `docs/`. PR
#21 (integration) and prior research/canon PRs have already been merged.

This was verified directly against the git tree on the
`docs/june17-free-membership-canon` branch (the PR #23 branch), not from older
notes. The local checkout is a **sparse checkout**, so not every tracked file is
materialized locally; the inventory below comes from `git ls-tree -r HEAD`.

## What is present

- **App shell / tooling:** `package.json`, `package-lock.json`, `next.config.ts`,
  `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`, `vitest.config.ts`,
  `vitest.setup.ts`, `public/`.
- **CI:** `.github/workflows/ci.yml`.
- **Routes (`app/[lang]/...`):** home, `about`, `conservation`, `contact`,
  `dashboard`, `lesson/[slug]`, `library`, `puma-path`, `reflections`, plus
  `layout.tsx`, root `layout.tsx`/`page.tsx`, `robots.ts`, `sitemap.ts`,
  `globals.css`.
- **Components:** `certificate-view`, `contact-form`, `dashboard-progress`,
  `lesson-progress-button`, `library-search`, `mobile-nav`,
  `puma-path-journey`, `reflections-notes`, `site-shell`, `youtube-embed`.
- **Lib:** `content/{en,es,index}.ts`, `progress.ts`, `reflections.ts`,
  `site.ts`, `types.ts`.
- **Tests (`__tests__/`):** `content.test.ts`, `progress.test.ts`,
  `smoke.test.ts`.
- **Docs (`docs/`):** strategy, site, content, curriculum, compliance,
  legal-counsel, and research artifacts (this PR refines them).

Approximate scale at snapshot time: ~73 tracked files, ~37 TypeScript/JavaScript
source files.

## How this relates to the membership canon

The existing app already implements much of the **real educational product** the
[Operating Architecture](strategy/pachamind-operating-architecture.md#development-implication)
requires to justify collecting membership coordinates: a learner dashboard,
Puma Path progression, lesson and library views, reflections, progress tracking
(`lib/progress.ts`), and reflections storage (`lib/reflections.ts`).

Remaining product depth implied by the June 17 canon — full membership account,
consent logging, per-channel communication preferences, quizzes/badges wiring,
and video watch state — should be built into this existing app rather than a new
scaffold.

## Scope note for this PR

This PR (#23) is **docs-only**. No application code was modified. The app
inventory above is reported for accuracy and to ground the development
implication in the canon; it does not represent code changes in this PR.

## Update — Flow A free-membership prototype build

> Added when the free-learning-membership prototype was implemented on
> `feat/flow-a-free-learning-membership-prototype` (supersedes the "docs-only"
> scope note above for that later branch).

The free PachaMind learning membership prototype is now implemented in code:

- **New member-facing routes (`app/[lang]/...`):** `learn`, `mallku`, `signup`,
  `privacy`, `terms`, `accessibility`, and `account/preferences`. All prerender
  in both locales (`/en/...`, `/es/...`).
- **Membership model (`lib/membership/`):** `types.ts` (profile + consent
  records) and `consent.ts` (auditable `ConsentRecord` builder with consent /
  privacy / terms versions, localStorage-only persistence — no network, no
  message send, no Embodier.ai handoff).
- **Analytics placeholders (`lib/analytics/events.ts`):** educational-only
  `ALLOWED_EVENTS`; `FORBIDDEN_EVENTS` now also blocks `payment_interest` and
  `contribution_interest`. `trackEvent` throws on any forbidden event.
- **Learning scaffolding (`lib/learning/puma-path.ts`):** Puma Path stage keys
  (`semilla`, `raiz`, `tallo`, `flor`, `puma`).
- **Components:** `free-membership-signup-form`, `communication-preferences-form`,
  `consent-checkbox`, `consent-record-debug-panel` (dev-only), `quiz-card`,
  `badge-card`. The signup form keeps all communication permissions opt-in
  (unchecked by default) and renders the Embodier.ai item as an informational
  acknowledgement, not a grantable opt-in.
- **Lesson page** now renders the optional transcript, knowledge-check quiz, and
  the lesson's learning badge. **Dashboard** now shows a learner greeting from the
  stored profile and an earned/locked learning-badge grid.
- **Tests:** added `__tests__/membership.test.ts` (consent + analytics guard +
  storage round-trip) and `__tests__/canon-language.test.ts` (scans all public
  copy for fundraising/contribution/upgrade language and checks badge / Puma Path
  parity across locales).

**Free-membership canon enforced:** Flow A offers a free PachaMind learning
membership only. No pricing, checkout, payment, contribution, fundraising,
booking, travel, screening, or Embodier.ai commercial opt-in appears anywhere in
the prototype. A free learning membership does not create any Embodier.ai
commercial relationship.

Validation at build time: `npm run lint`, `npm run typecheck`, `npm run build`,
and `npm test` (52 tests) all pass.

## Counsel/verification flags

- [NEEDS COUNSEL/VERIFICATION] Whether the existing membership/account data model
  and any persisted learner data already align with the approved membership
  coordinates and consent-logging requirements.
- [NEEDS COUNSEL/VERIFICATION] Data handling, retention, and data-sharing
  boundaries for any learner data the current app stores.

## Related canon

- [Operating Architecture](strategy/pachamind-operating-architecture.md)
- [Flow A Site Requirements](site/pachamind-flow-a-site-requirements.md)
- [Content Classification Matrix](content/pachamind-content-classification-matrix.md)
- [Counsel Packet](legal-counsel/pachamind-embodier-counsel-packet.md)
- [Flow A No-Commerce Checklist](compliance/flow-a-no-commerce-checklist.md)
- [Strategy Canon index](strategy/README.md)
