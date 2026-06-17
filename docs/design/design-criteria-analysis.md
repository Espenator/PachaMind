# Design Criteria Analysis — Apple-grade Modern Design x Andean Wisdom

A deep analysis of the design criteria for PachaMind.org Flow A (free learning membership), mapping Apple's published design principles and modern web-design conventions onto PachaMind's earthy, Andes-inspired theme. Goal: an interface that feels as clear, calm, and crafted as Apple's, while staying rooted in Andean cosmovision rather than imitating a tech-product look.

This document complements: figma-flow-a-design-brief.md, pachamind-design-tokens.md, mobile-screen-specs.md, design-qa-checklist.md.

## Sources Consulted
- Apple Human Interface Guidelines — Design principles (Purpose, Agency, Responsibility, Familiarity, Flexibility, Simplicity, Craft, Delight) and the foundational trio Clarity / Deference / Depth (developer.apple.com/design/human-interface-guidelines).
- Apple HIG — Hierarchy, Harmony, Consistency guidance.
- Apple HIG typography guidance (system type, optical sizing, tracking, line-height ranges, 44pt minimum touch target).
- Industry write-ups on Apple web-design practice: generous white space, "marketing moments," strategic video/motion, narrative scroll, grid-with-creative-layout balance.

## Apple's Principles -> PachaMind Translation

### 1. Clarity
Apple: legible type, precise meaning, every element has a purpose. 
PachaMind: One primary action per screen ("Start Learning free" / "Create free PachaMind learning membership"). Body text >= 16px, generous line-height (1.5). Lessons read like an editorial article, not a dashboard. No jargon, no upsell noise.

### 2. Deference (content first)
Apple: the UI recedes so content leads. 
PachaMind: Andean imagery, video lessons, and reflective writing are the heroes. Chrome is quiet — cloudwhite surfaces, restrained terracotta accents, no competing gradients or neon. The interface frames the wisdom; it does not perform.

### 3. Depth & Hierarchy
Apple: layers and motion convey structure. 
PachaMind: Depth comes from soft, earth-toned shadows (--shadow-sm/md/lg tuned to deepearth) and clear type scale (display 32->48px, h1 28->36px), not heavy borders or glassy chrome. ProgressRing and stage cards use elevation to signal "where you are" on the Puma Path.

### 4. Simplicity
Apple: clear, direct, logically organized. 
PachaMind: Single-column, mobile-first (390px base). Linear journey: Home -> Learn -> Lesson -> Signup -> Dashboard. No dead-ends, no modal mazes, no paid forks.

### 5. Familiarity
Apple: build on patterns people already know. 
PachaMind: Conventional sticky header, thumb-reachable bottom nav, standard form controls and labels — so the novelty lives in the content and storytelling, not in re-learning the UI.

### 6. Craft & Delight
Apple: care about every detail; make it human. 
PachaMind: Editorial serif headings (Playfair Display) paired with a clean sans (Inter) give a dignified, documentary feel. Delight is calm, not flashy: gentle reveal of imagery, warm palette, badges that celebrate learning milestones rather than gamified pressure.

### 7. Responsibility (and our locked canon)
Apple: act in people's best interest; be transparent. 
PachaMind: This is where modern design meets ethics. Free learning membership only. Consent checkboxes are unchecked by default and individually labeled. No dark patterns, no manufactured urgency, no pricing/upgrade/booking/ceremony/health claims. Trust is the product.

## Modern Web-Design Conventions Applied
- **Generous white space** as the primary layout tool (the "make it more Apple" instinct) — expressed here as breathing room around documentary imagery and quotes.
- **Marketing moments / narrative scroll**: Home and About Mallku use full-bleed earth-toned imagery and a story-led scroll, mirroring Apple product-page pacing without commerce.
- **Strategic motion**: subtle, purposeful transitions only; respects prefers-reduced-motion; never decorative for its own sake.
- **Grid discipline with creative moments**: a consistent baseline grid, with occasional full-bleed image breaks for emotional beats.
- **High-contrast, accessible color**: WCAG AA (>= 4.5:1 body, >= 3:1 large/UI), terracotta focus ring on every interactive element.

## Where We Intentionally Diverge from Apple
- **Palette**: Apple leans neutral gray/silver/white; PachaMind is warm and earthy (cloudwhite, deepearth, terracotta, goldmoon, skyblue, stonegray). Andean warmth over tech minimalism.
- **Typeface**: Apple uses San Francisco (system). PachaMind deliberately uses an editorial serif (Playfair Display) for headings to evoke heritage, scholarship, and cultural preservation — a documentary voice, not a product voice.
- **Tone**: Apple sells aspiration; PachaMind invites reflection and learning. No "buy now" energy anywhere.

## Confirmed Type & Color Decisions (canon)
These are the live, confirmed choices defined in `app/globals.css` and aliased (not duplicated) by `app/tokens.css`:
- **Headings / display:** Playfair Display (serif), with Georgia / Times New Roman fallbacks — `--font-display`.
- **Body / UI:** Inter (sans), with Helvetica Neue / Arial fallbacks — `--font-body`.
- **Core palette:** deepearth #241915, terracotta #a7583b, goldmoon #c9a353, stonegray #6e6a63, skyblue #3d6b82, cloudwhite #f7f2ea.
- **Focus:** global terracotta `:focus-visible` ring (2px) already implemented in globals.css.

Note: the earlier draft tokens (e.g. terracotta #B7653F, "Source Serif 4") were superseded to match the existing canonical system so design and code never drift. `tokens.css` now only aliases the canonical variables and adds spacing/radius/shadow/type-scale.

## Acceptance Criteria (design review gate)
A screen passes the "Apple-grade x Andean" bar when:
1. There is one obvious primary action and the content (not the UI) is the focal point.
2. Type hierarchy is unmistakable using only the confirmed serif/sans + scale.
3. Spacing feels generous; nothing is cramped at 390px or stretched awkwardly at 1440px.
4. Color is warm, calm, and AA-contrast; terracotta is the single accent for action.
5. Motion is subtle and respects reduced-motion.
6. Nothing violates the locked canon (see design-qa-checklist.md).
