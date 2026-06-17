# PachaMind Operating Architecture

> **Canon amendment:** June 17, 2026.
> **Supersedes earlier language wherever this document conflicts with it.** The
> June 17, 2026 amendment reframes future PachaMind revenue as **membership and
> membership levels**, not donations, and removes donations, donor funnels, and
> conservation contribution funnels from PachaMind.org Flow A entirely. Where
> older docs still reference "donation checkout," "conservation contribution,"
> or "donor" mechanics, treat this document as the controlling canon and read
> those references as deprecated.
>
> **Not legal advice.** Items tagged `[NEEDS COUNSEL/VERIFICATION]` are open
> questions for qualified U.S. counsel, Peru counsel, nonprofit/tax advisors,
> and SMS/WhatsApp/Twilio compliance reviewers.

## Purpose

This document locks the operating architecture that every funnel, page,
consent, conversion, and payment decision must support. It defines the role of
each entity, the two-track launch sequence (Flow A then Flow B), the revenue
framing, and the hard guardrails that protect PachaMind.org's free,
educational, mission-first, commercial-free, Google Ad Grants–safe posture.

It is the companion canon to:

- [pachamind-embodier-next-steps-roadmap.md](pachamind-embodier-next-steps-roadmap.md)
- [pachamind-flow-a-launch-spec.md](pachamind-flow-a-launch-spec.md)
- [../site/pachamind-flow-a-site-requirements.md](../site/pachamind-flow-a-site-requirements.md)
- [../content/pachamind-public-copy-style-guide.md](../content/pachamind-public-copy-style-guide.md)
- [../content/pachamind-content-classification-matrix.md](../content/pachamind-content-classification-matrix.md)
- [../compliance/flow-a-no-commerce-checklist.md](../compliance/flow-a-no-commerce-checklist.md)
- [../legal-counsel/pachamind-embodier-counsel-packet.md](../legal-counsel/pachamind-embodier-counsel-packet.md)

## Entity map

| Entity | Role | Public posture | Owns the mission? | Public educational provider? |
|---|---|---|---|---|
| **PachaMind / PachaMind.org** | Free Andean wisdom education, cultural preservation, conservation education, free learning membership, Puma Path learning progression | Nonprofit, mission-first, commercial-free | Yes | Yes |
| **Embodier.ai** | Contractor/operator that manages PachaMind memberships, payment systems, CRM, communications, marketing, and sales under counsel-approved agreements | Separate commercial operator layer; activated in Flow B | **No** | **No** |
| **Mallku Aribalo / James Arévalo Merejildo (Chaski)** | Tradition-holder and Andean shamanic teacher; cultural anchor and source of attribution | Credited wherever the tradition is taught | Cultural authority | Tradition-holder, not the platform |
| **PachaMind Peru / local contractors** | Peru-only cultural education and in-person delivery, after all gates | Tradition-holder-led, screened, local | No | Peru-side delivery only |

**Embodier.ai is the contractor/operator, not the owner of the PachaMind
mission and not the public educational provider.** Embodier.ai manages
membership administration, payment systems, CRM, communications, marketing, and
sales **under counsel-approved agreements only**. Nothing in this architecture
permits Embodier.ai branding, sales language, or commercial contact on
PachaMind.org during Flow A.

- [NEEDS COUNSEL/VERIFICATION] Exact entity ownership of PachaMind.org and Google for Nonprofits / Ad Grants eligibility.
- [NEEDS COUNSEL/VERIFICATION] Contractor/operator agreement scope between PachaMind and Embodier.ai, including private-benefit and inurement controls.
- [NEEDS COUNSEL/VERIFICATION] Data-sharing, payment-routing, and operator-liability boundaries between the entities.

## Revenue framing: membership, not donations

Future PachaMind revenue should be framed as **PachaMind membership and
membership levels**, not donations. There are **no donations, donation
checkout, donor funnel, conservation contribution funnel, paid upgrades,
pricing, or payment forms on PachaMind.org during Flow A.**

| Concept | Flow A (now) | Later (gated) |
|---|---|---|
| Free PachaMind learning membership | Yes — the only membership offered | Continues |
| Donations / donor funnel | **Never** — removed from canon | Not the framing; use membership levels instead |
| Conservation contribution funnel | **Never** on PachaMind.org Flow A | Reframe as membership benefit/level if introduced |
| Paid membership levels | **No** | Only after all Flow B gates clear (see below) |
| Pricing / checkout / payment forms | **No** | Embodier.ai-operated surfaces only, after gates |

Paid PachaMind membership levels are introduced **only after all** of the
following are true:

1. Google Ad Grants are approved, running, and stable.
2. Counsel confirms the entity, data, payment, consent, private-benefit, and contractor structure.
3. Flow B communication and payment systems are approved.

- [NEEDS COUNSEL/VERIFICATION] Whether and how membership levels can be introduced without creating private-benefit, inurement, commerciality, or Ad Grants contamination risk.
- [NEEDS COUNSEL/VERIFICATION] Whether any conservation-related giving can ever exist, and if so, how to avoid donation-for-access mechanics.

## Two-track launch sequence

1. **Flow A — PachaMind.org free education first.** Free PachaMind learning
   memberships only. Commercial-free. Built for Google Ad Grants readiness.
2. **Flow B — Embodier.ai commercial bridge second.** Mobile-first marketing,
   sales, payments, CRM, and paid membership levels — activated **only after**
   the gates above and only on Embodier.ai-operated surfaces with separate,
   commercial consent.
3. **Peru-only screened pathway third.** After operational, legal, payment, and
   consent gates.

Entity separation between PachaMind (nonprofit education), Embodier.ai
(commercial operator), Mallku (tradition-holder), and Peru contractors is a
hard guardrail across all tracks.

## Communication architecture

### Flow A (PachaMind.org) — email-first, optional WhatsApp

During Flow A, PachaMind.org may collect free membership signup information for
**educational membership administration only**, subject to counsel review.

- Prefer **email** and **optional WhatsApp** educational communication.
- **Do not** use paid SMS during Flow A.
- Preferred free membership fields: first name, last name, email, country code,
  cell/WhatsApp number, and **separate communication permissions** (do not
  bundle consents).

### Flow B (Embodier.ai) — later, mobile-first commercial

Embodier.ai Flow B is later and mobile-first: **WhatsApp and cell SMS before
email** for marketing and sales — **only after separate commercial consent and
counsel-approved launch gates.**

### Consent firewall

**Never treat a PachaMind.org free membership signup as automatic Embodier.ai
commercial consent.** Educational membership administration consent and
commercial marketing/sales consent are separate products. Commercial consent is
collected separately, in Flow B, on Embodier.ai-operated surfaces.

- [NEEDS COUNSEL/VERIFICATION] Whether optional WhatsApp educational communication can run during Flow A, and the exact consent language required.
- [NEEDS COUNSEL/VERIFICATION] Consent-log schema, re-consent plan, and whether any consent may ever be shared between entities (default assumption: no).
- [NEEDS COUNSEL/VERIFICATION] Twilio/A2P and WhatsApp Business policy obligations for any Flow B messaging.

## Google Ad Grants conversion canon (Flow A)

Count these as Flow A Ad Grants conversions (all are free, educational actions):

- Free PachaMind learning membership created
- Lesson started
- Lesson completed
- Video watched
- Quiz completed
- Reflection submitted
- Module completed
- Badge earned

**Do not** track any of these as Ad Grants conversions during Flow A:

- Paid membership interest
- Upgrade interest
- Embodier.ai commercial contact
- Screening interest
- Travel interest
- Peru pathway interest

## Hard guardrails (all tracks)

- PachaMind.org Flow A stays free, educational, mission-first, commercial-free, and Google Ad Grants safe.
- No health, medical, cure, treatment, diagnosis, therapy, or outcome claims.
- No drug-tourism, psychedelic-retreat, Huachuma/San Pedro conversion hooks, or public ceremony-access framing.
- Always credit Mallku Aribalo / James Arévalo Merejildo as tradition-holder and Andean shamanic teacher where relevant.
- Mark every legal, tax, Ad Grants, SMS, WhatsApp, payment, private-benefit, data-sharing, and operator-liability point as `[NEEDS COUNSEL/VERIFICATION]`.
