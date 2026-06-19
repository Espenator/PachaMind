# Flow A Prototype — Build Notes

> Implementation notes for the free PachaMind learning membership prototype on
> `feat/flow-a-free-learning-membership-prototype`. **Not legal advice.**
> `[NEEDS COUNSEL/VERIFICATION]` items are open questions for qualified advisors.

## Canon enforced

Flow A offers a **free PachaMind learning membership only**. The prototype
contains no pricing, checkout, payment, contribution, fundraising, donation,
booking, travel, screening, ceremony-access, or Embodier.ai commercial opt-in.
A free learning membership does **not** create any Embodier.ai commercial
relationship.

## Architecture

The repo is a Next.js (App Router, TypeScript) app with internationalized
`[lang]` routing. All UI copy lives in `lib/content/{en,es}.ts`, typed by
`SiteContent` in `lib/types.ts`. Pages read copy via `getContent(lang)`.

## What this build added

### Routes (`app/[lang]/...`)
- `learn` — calm learning hub linking the library and the Puma Path.
- `mallku` — Mallku Aribalo cultural attribution page.
- `signup` — free learning membership signup (renders `FreeMembershipSignupForm`).
- `account/preferences` — per-channel communication preferences
  (`CommunicationPreferencesForm`).
- `privacy`, `terms`, `accessibility` — prose legal/accessibility pages.

### Membership data model (`lib/membership/`)
- `types.ts` — `MembershipProfile`, `ConsentChannel`/`ConsentPurpose`,
  `ConsentRecord`, `MembershipSubmission`.
- `consent.ts` — auditable `ConsentRecord` builder stamped with
  consent-text / privacy / terms versions and a `PachaMind.org` sender; mock
  persistence to localStorage only (no network, no message send).

### Consent UX
- All communication permissions are **opt-in** (unchecked by default).
- Account consent is the only required checkbox (needed to create the account).
- The Embodier.ai line is an **informational acknowledgement**, not a grantable
  opt-in — it has no channel or purpose that could send commercial messages.

### Analytics placeholders (`lib/analytics/events.ts`)
- `ALLOWED_EVENTS`: educational-only conversions.
- `FORBIDDEN_EVENTS`: commercial events including `payment_interest` and
  `contribution_interest`. `trackEvent` throws if a forbidden event is emitted.
- No real analytics provider is wired up; dev builds log to the console only.

### Learning experience
- Lesson pages render the optional transcript (`<details>`), the knowledge-check
  quiz (`QuizCard`), and the lesson's learning badge (`BadgeCard`, shown locked).
- The dashboard greets the learner by stored first name and shows an
  earned/locked learning-badge grid (a badge is earned when the lesson carrying
  its key is completed).

## Validation

`npm run lint`, `npm run typecheck`, `npm run build`, and `npm test` all pass
(52 tests). New tests: `__tests__/membership.test.ts` and
`__tests__/canon-language.test.ts` (the latter scans all public copy for
forbidden fundraising/contribution/upgrade language and checks badge / Puma Path
parity across locales).

## Prototype boundaries (intentional)

- No real authentication or backend; all learner state is localStorage-only.
- No messages are sent on any channel; consent is recorded as mock data.
- Video watch state is not yet persisted; lesson completion is tracked via the
  existing progress store.

## Open items

- [NEEDS COUNSEL/VERIFICATION] Consent wording, consent-logging schema, data
  retention, and data-sharing boundary.
- [NEEDS COUNSEL/VERIFICATION] WhatsApp educational consent and policy
  obligations before any real channel is enabled.
- [NEEDS REAL VIDEO] Lessons flagged `mediaStatus: "NEEDS_REAL_VIDEO"` still use
  placeholder media.
