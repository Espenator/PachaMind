# Flow A No-Commerce Checklist

> **Canon amendment:** June 17, 2026. Enforces the
> [PachaMind Operating Architecture](../strategy/pachamind-operating-architecture.md).
> Every public PachaMind.org page, lesson, email, and optional WhatsApp message
> must pass this gate before launch and on each content change. Flow A offers
> **free PachaMind learning memberships only** — no donations, no pricing, no
> payments, no paid SMS.
>
> **Not legal advice.** `[NEEDS COUNSEL/VERIFICATION]` items are open questions
> for qualified advisors.

## How to use

Run this checklist before launch and before publishing or changing any public
surface. Any failed item blocks publication until fixed. Pair with the
[content classification matrix](../content/pachamind-content-classification-matrix.md)
and the [public copy style guide](../content/pachamind-public-copy-style-guide.md).

> **Prototype verification (free-membership build):** the items checked below
> were verified against the implemented `feat/flow-a-free-learning-membership-prototype`
> code. The automated guard in `__tests__/canon-language.test.ts` scans all public
> copy for fundraising/contribution/upgrade language on every test run.

## No-commerce gate

Every public page must pass all of these:

- [x] No pricing anywhere
- [x] No checkout
- [x] No donation checkout, donor ask, or "support us" giving language
- [x] No conservation contribution funnel or donation-for-access mechanic
- [x] No paid membership, paid membership level, or paid upgrade
- [x] No payment forms or payment fields
- [x] No sales CTA
- [x] No booking, application, deposit, or travel-sales CTA
- [x] No ceremony or in-person Peru access CTA
- [x] No Embodier.ai branding, sales page, or commercial opt-in
- [x] No paid SMS or SMS-marketing capture
- [x] No commercial lead-generation language

## Mission and attribution gate

- [ ] PachaMind educational mission is clear
- [ ] Free PachaMind learning membership is the only membership offered
- [ ] Future revenue (where mentioned at all) is framed as membership / membership levels, never donations
- [ ] Mallku Aribalo / James Arévalo Merejildo is credited where the tradition is taught
- [ ] No unverified biography or sensational imagery

## Safety gate (claims)

- [ ] No health, medical, therapeutic, trauma, addiction, anxiety, depression, PTSD, cure, treatment, or diagnosis claims
- [ ] No guaranteed-outcome or transformation claims
- [ ] No public Huachuma/San Pedro conversion hook or consumption framing
- [ ] No drug-tourism, psychedelic-retreat, or public ceremony-access framing

## Membership signup gate

- [x] Signup is framed as a free, gamified, two-way learning membership — not a passive newsletter or hidden commercial lead funnel
- [x] Approved membership coordinates: first name, last name, email, country/region, country code, cell/WhatsApp number, preferred language, separate communication permissions
- [x] Communication permissions are separate per channel (account messages, optional email, optional WhatsApp, optional later SMS), not bundled
- [x] No payment, pricing, or upgrade fields
- [x] Signup does not imply or capture Embodier.ai commercial consent (Embodier item is an informational acknowledgement, not an opt-in)
- [x] Membership coordinates used only for educational membership administration — never for undisclosed commercial marketing before Flow B
- [x] Membership is backed by a real educational product (dashboard, progress, lesson completion, reflections, quizzes, badges, preferences, consent logging)
- [ ] [NEEDS COUNSEL/VERIFICATION] Consent wording, consent-logging schema, data-sharing boundary, and channel consent reviewed by counsel

## Communication gate

- [ ] Email is the primary educational channel; no sales/donor/upgrade content
- [ ] WhatsApp educational communication is optional and separately opted-in; educational only
- [ ] No paid SMS in Flow A
- [ ] [NEEDS COUNSEL/VERIFICATION] WhatsApp educational consent and policy obligations reviewed

## Analytics / Ad Grants gate

- [x] Conversions limited to free educational actions: free membership created, lesson started, lesson completed, video watched, quiz completed, reflection submitted, module completed, badge earned (see `lib/analytics/events.ts` `ALLOWED_EVENTS`)
- [x] No tracking of paid membership interest, upgrade interest, Embodier.ai commercial contact, screening interest, travel interest, Peru pathway interest, payment interest, or contribution interest as conversions (`FORBIDDEN_EVENTS`; `trackEvent` throws if any is emitted)
- [x] Nonprofit educational events kept separate from any future Embodier.ai commercial events

## Trust baseline gate

- [x] Footer links live (Privacy, Terms, Accessibility; Cultural Attribution via the Mallku page)
- [ ] HTTPS active
- [ ] Mobile speed and low-bandwidth performance acceptable
- [ ] WCAG AA accessibility target met
- [ ] No broken or placeholder links

## Sign-off

- Reviewer: ____________________  Date: ____________
- [ ] All gates above pass, or failed items are documented and blocked from launch.
