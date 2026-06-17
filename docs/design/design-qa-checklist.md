# Design QA Checklist — Flow A (Free Learning Membership)

Run this checklist on every Figma frame and every implemented screen before merge. All items must pass.

## DO NOT (Locked Canon — must never appear)
- [ ] No paid memberships, paid tiers, or premium plans
- [ ] No pricing, price tags, or cost language
- [ ] No checkout, cart, payment, or billing UI
- [ ] No "upgrade" CTAs or upsell prompts
- [ ] No donation or "support us with money" asks
- [ ] No booking, scheduling, or appointment flows
- [ ] No ceremony pathways or ceremony booking
- [ ] No travel/lodging/transport offers (Peru travel, etc.)
- [ ] No Embodier.ai opt-in or cross-promotion
- [ ] No health, medical, or outcome claims
- [ ] No commerce or applications flows

## Allowed Language Only
- [ ] CTAs use approved phrasing: "Start Learning free", "Create free PachaMind learning membership", "Free learning membership"
- [ ] Supporting copy uses: "Save your progress", "Complete reflections", "Earn learning badges", "Learn Andean cosmovision", "Cultural preservation"
- [ ] No forbidden words present (price, pay, buy, subscribe-to-paid, upgrade, checkout, donate, book, ceremony)

## Membership Model
- [ ] Only the free PachaMind learning membership is offered
- [ ] Signup creates a free learning account that saves progress
- [ ] No path leads to a paid state

## Visual Direction
- [ ] Earthy, Andes-inspired, calm, editorial palette (paper-white, deep-earth, terracotta, clay, sage, sky, stone, charcoal, soft-sand, mist)
- [ ] Warm editorial serif for headings, clean sans for UI/body
- [ ] No startup SaaS look, no neon, no purple/blue gradients
- [ ] Documentary, earth-toned imagery only

## Tokens & Consistency
- [ ] Colors, type, spacing, radius, and shadow match `pachamind-design-tokens.md`
- [ ] No hard-coded hex outside token definitions
- [ ] New tokens are additive; existing globals not overwritten

## Accessibility & Contrast
- [ ] WCAG AA contrast: >= 4.5:1 body text, >= 3:1 large text and UI
- [ ] Visible terracotta focus ring on all interactive elements
- [ ] Tap targets >= 44x44px
- [ ] Body text >= 16px; respects user font scaling
- [ ] All inputs have associated labels
- [ ] Consent checkboxes individually labeled and unchecked by default
- [ ] Lesson videos have a transcript
- [ ] Images have descriptive alt text
- [ ] Status/progress not conveyed by color alone
- [ ] Logical heading order and landmarks

## Mobile-First
- [ ] Designed at 390px first; scales cleanly to 1440px
- [ ] Single-column layouts; sticky MobileNav
- [ ] Primary action within thumb reach

## Sign-off
- [ ] Frame/screen reviewed against this checklist
- [ ] Any deviation logged as a NEEDS COUNSEL item
