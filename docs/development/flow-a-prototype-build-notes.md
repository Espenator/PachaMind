# Flow A Prototype — Build Notes

> **Status:** prototype build notes, June 17, 2026. Engineering reference for the
> free learning membership prototype. **Not legal advice.** Anything that touches
> real messaging, payments, data retention, or Embodier.ai must be reviewed by
> counsel before launch — see
> [Counsel Packet](../legal-counsel/pachamind-embodier-counsel-packet.md).

## What Flow A is

A free, educational, mission-first, commercial-free, mobile-first, video-first,
bilingual (EN/ES) learning membership. The initial rollout offers **free
PachaMind learning memberships only**. There is no cost, no checkout, no paid
upgrade, no booking, no travel offer, and no Embodier.ai commercial opt-in.

**Boundary:** a PachaMind free learning membership does **not** create
Embodier.ai commercial consent.

## Architecture

- **Next.js (App Router, TypeScript)** with locale-prefixed routing under
  `app/[lang]/` (`en`, `es`). Content lives in `lib/content/{en,es}.ts`, both
  conforming to the `SiteContent` interface in `lib/types.ts`.
- **All membership/consent/progress state is client-side mock only**
  (localStorage). Nothing is transmitted to a server and no real messages are
  ever sent.

### Key modules

- `lib/types.ts` — shared types: `MembershipProfile`, `CommunicationPermission`,
  `ConsentRecord`, `ConsentChannel`, `ConsentPurpose`, `Lesson`, `QuizQuestion`,
  `Badge`, `PumaPathStage`, `UserProgress`.
- `lib/membership.ts` — mock store for the membership profile, per-channel
  permissions, and an **append-only consent audit trail**. Consent text/privacy/
  terms version constants live here so records stay auditable when copy changes.
- `lib/progress.ts` — lesson completion + earned badge tracking (badges are not
  revoked when a lesson is marked incomplete).
- `lib/analytics.ts` — educational event taxonomy and a **no-op** `track`
  helper. Allowed events only; conversion/commercial events are explicitly
  forbidden and listed so accidental use is easy to grep for.

## Consent model

Signup presents five **separate, unchecked** consent checkboxes:

1. Account/membership (may be required to create the account).
2. Educational email (optional).
3. Educational WhatsApp (optional).
4. Educational SMS, if the channel becomes available (optional).
5. An acknowledgement that the membership does **not** enroll the learner in
   Embodier.ai commercial communications (boundary acknowledgement).

Each submission produces immutable `ConsentRecord`s capturing the channel,
purpose, consent-text version, checkbox state, timestamp, source URL, and
privacy/terms versions. `ipAddress` is a placeholder only and is never populated
client-side. The preferences page appends new records rather than mutating old
ones.

## Curriculum + gamification

- The **Puma Path** has five stages: Semilla, Raíz, Tallo, Flor, Puma. It is a
  learning progression only — never an initiation, qualification, ceremony
  access, paid priority, discount, travel, or approval gate.
- Lessons carry a stage, an optional quiz, and an optional badge trigger.
  Completing a lesson can award a cosmetic learning badge.
- The dashboard shows a greeting (or guest prompt), a progress ring, the current
  stage, earned/locked badges, and a link to private reflections.

## Forbidden language

Do not add public-facing copy for: paid memberships, pricing, checkout, payment,
contribution/fundraising, booking/applications, Peru travel/lodging/transport,
ceremony pathways, Embodier.ai commercial opt-in, real SMS/WhatsApp sending,
public Huachuma/San Pedro conversion hooks, or health/healing/therapy/outcome
claims. Negative/disclaimer phrasings ("no cost, no payment", "does not replace
therapeutic guidance") and quiz distractors that learners must reject are fine.

## Validation

Run from the repo root:

- Typecheck: `./node_modules/.bin/tsc --noEmit`
- Lint: `./node_modules/.bin/eslint .`
- Tests: `./node_modules/.bin/vitest run`
- Build: `./node_modules/.bin/next build`

## NEEDS COUNSEL / VERIFICATION before launch

- Replacing the mock store with a real backend (membership, consent logging,
  privacy, data retention, channel consent wording).
- Any real email/WhatsApp/SMS sending (Twilio etc. is intentionally not wired).
- Wiring a real analytics provider behind counsel-reviewed configuration.
- Final privacy, terms, and accessibility wording.
- Biographical details about Mallku Aribalo (verify against authorised sources).
