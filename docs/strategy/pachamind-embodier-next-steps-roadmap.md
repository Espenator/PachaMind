# PachaMind and Embodier.ai Next-Steps Roadmap

## Executive summary

The next move is not to push harder on sales; it is to lock the operating architecture so every future funnel decision supports the nonprofit, for-profit, and Peru-delivery boundaries. The strongest current strategy is a two-track launch: first, publish PachaMind.org as a free, commercial-free educational site built for Google Ad Grants readiness; second, build Embodier.ai as a separate commercial education, SMS, screening, and membership stack that remains dormant or unlinked until counsel and Ad Grants conditions are satisfied. This protects the most valuable strategic asset, which is not a single retreat offer but a trusted educational institution that can earn search demand, cultural credibility, and long-term learner relationships.

The older business-build plan contains useful positioning, personas, operations, and risk work, but its huachuma-forward funnel assumptions should be quarantined from the public nonprofit launch. The current locked canon is safer: PachaMind.org should educate around Andean cosmovision, Mallku Aribalo, the Three Pachas, the Five Andean Values, archaeo-astronomy, conservation, and cultural preservation, while huachuma/San Pedro-adjacent content stays gated, counsel-reviewed, and never presented as the front-door acquisition hook. Google’s Ad Grants website policy requires a nonprofit-controlled domain with substantial mission-related content, clear mission/activity descriptions, easy navigation, fast mobile performance, HTTPS, and restrictions on commercial activity as the purpose of the site ([Google Ad Grants website policy](https://support.google.com/grants/answer/1657899)).

The immediate decision is therefore sequencing: build the nonprofit education platform first, build but do not activate the Embodier.ai commercial bridge second, and only later expose Peru-only screening/coordination flows after counsel, operational SOPs, insurance, consent logging, and payment separation are real. Twilio requires consent to be freely given, informed, unambiguous, tied to each sender and message subject, retained as proof, and revocable by a standard opt-out keyword such as STOP, so SMS architecture must be designed before traffic is driven into it ([Twilio Messaging Policy](https://www.twilio.com/en-us/legal/messaging-policy)).

## Strategic north star

PachaMind should become the trusted free educational layer for Andean wisdom, not the sales page for a sensitive experience. Its job is to build cultural literacy, honor Mallku as tradition-holder and Andean shamanic teacher, preserve mission-first credibility, and create a clean Google Ad Grants posture. Embodier.ai should become the commercial operating layer for marketing, CRM, SMS, paid education, screening workflow, and membership economics, but it should not blur into PachaMind.org during the initial grant-approval window.

The business model should be judged by whether each layer can stand alone:

| Layer | Primary job | Public posture | Revenue posture | Next-step implication |
|---|---|---|---|---|
| PachaMind.org | Free education, cultural preservation, conservation, learner account, Puma Path progress | Nonprofit, mission-first, commercial-free | No checkout, no donation checkout, no pricing, no sales CTAs during Flow A | Build first; optimize for Ad Grants and trust |
| Embodier.ai | Marketing, SMS, CRM, paid education, screening, sales operations | Separate for-profit commercial layer | Membership/payment only on Embodier surfaces | Build in parallel, but activate later |
| PachaMind Peru / Mallku delivery | Peru-only cultural education and in-person experiences | Tradition-holder-led, screened, local delivery | Separate Peru-side agreements and fees, if counsel-approved | Do not front-door sell; operationalize after boundaries |

## Immediate strategic call

The most important next step is to create a hard content firewall between “public education” and “sensitive/gated Peru pathway.” Google states that Ad Grants websites need substantial, unique mission content and that commercial activity must not be the purpose of the website ([Google Ad Grants website policy](https://support.google.com/grants/answer/1657899)). That means PachaMind.org should not host pricing, paid memberships, booking applications, sales pages, donation-for-access mechanics, commercial lead-gen language, Embodier sales CTAs, or public huachuma conversion assets during Flow A.

The second most important step is to treat SMS consent as infrastructure, not copywriting. Twilio requires prior express consent before messaging, proof of consent retention, sender identification, and a simple opt-out mechanism; it also warns that consent is limited to the subject matter for which it was obtained ([Twilio Messaging Policy](https://www.twilio.com/en-us/legal/messaging-policy)). This makes the Phase 2 Embodier opt-in checkbox a separate legal product, not a small UX change.

The third most important step is to keep U.S. operator liability out of the funnel language. Counsel should review whether Embodier.ai’s screening, referral, payment, and coordination roles could be recharacterized as selling or operating a foreign ceremony pathway. A March 2026 Harris Sliwoski analysis warns that foreign retreats can still create U.S. civil liability exposure, that local legality does not eliminate U.S. risk, and that waivers and payment separation do not replace participant evaluation, risk disclosure, and safe operations ([Harris Sliwoski](https://harris-sliwoski.com/psychlawblog/operating-a-psychedelic-or-cannabis-retreat-abroad-legal-liability-risks-for-u-s-operators/)).

## Workstream roadmap

### Workstream A: Counsel and governance packet

This is the first workstream because every other system depends on the entity and consent boundaries. The deliverable should be a concise “counsel packet” that shows the actual operating model, copy examples, data flows, payment flows, and launch sequence rather than asking counsel abstract questions.

| Action | Owner | Output | Status |
|---|---|---|---|
| Define entity map | Espen + counsel | One-page map: PachaMind nonprofit, Embodier.ai, PachaMind Peru/contractors, Mallku roles | Do now |
| Draft inter-entity questions | Espen | Question list on private benefit, agency, data sharing, payment routing, liability | Do now |
| Confirm nonprofit/ad-grants eligibility | Peru counsel / nonprofit advisor | Eligibility checklist and required registrations | Do now |
| Review public-language policy | US + Peru counsel | Approved / forbidden phrases for public web, SMS, ads, lead magnets | Do now |
| Design data and consent boundaries | Counsel + technical lead | Consent-log schema, DPA/data-sharing plan, re-consent plan | Do now |

Key counsel questions:

- [NEEDS COUNSEL/VERIFICATION] Consent wording, logging, data-sharing, and channel-consent for the approved Flow A membership coordinates (the June 17, 2026 canon settles the field set — first/last name, email, country/region, country code, cell/WhatsApp, preferred language, separate permissions — collected for the real educational product; the risk is undisclosed commercial use before Flow B, not the collection itself, so this is no longer a phone-capture yes/no).
- [NEEDS COUNSEL/VERIFICATION] What exact legal entity owns PachaMind.org, and can it qualify for Google for Nonprofits / Ad Grants in the intended jurisdiction?
- [NEEDS COUNSEL/VERIFICATION] What disclosure, if any, can appear on PachaMind.org about Embodier.ai before Ad Grants approval without creating private-benefit or commerciality risk?
- [NEEDS COUNSEL/VERIFICATION] What compensation and governance structure makes Mallku’s role structural rather than decorative?
- [NEEDS COUNSEL/VERIFICATION] What payment separation is required between U.S. membership, Peru-side cultural education, in-person experiences, vendor add-ons, and conservation contributions?

### Workstream B: PachaMind.org Flow A free education build

Flow A is the highest-leverage build because it creates the public trust layer and prepares for Ad Grants. Google’s account management policy requires proper geo-targeting, at least two unique sitelink assets, valid conversion tracking, and a 5% monthly CTR for accounts not exclusively using Smart Campaigns, with possible temporary deactivation after two consecutive months below the CTR threshold ([Google Ad Grants account management policy](https://support.google.com/nonprofits/answer/117827?hl=en)). The site should therefore be designed around meaningful educational actions that are safe to count as conversions, such as free account creation, module completion, quiz completion, video watch milestones, and badge completion.

| Build item | Public content allowed | Public content not allowed | Launch priority |
|---|---|---|---|
| Homepage | Mission, Mallku attribution, free education promise, conservation/cultural preservation | Pricing, booking, paid membership, ceremony CTAs, Embodier sales language | Must-have |
| Learn hub | Three Pachas, Five Values, Andean cosmovision, archaeo-astronomy, glossary | Huachuma conversion hooks, medical outcomes, psychedelic framing | Must-have |
| Puma Path | Semilla/Raíz/Tallo/Flor/Puma as learning progress only | Unlocking travel, ceremony priority, discounts, paid access | Must-have |
| Mallku page | Tradition-holder bio, works, attribution, teaching themes | Unverified claims, sensational shaman imagery, outcome promises | Must-have |
| Conservation page | Garden stewardship, cultural preservation, education mission | Donation-for-access, paid ceremony contribution mechanics | Must-have |
| Account/consent | Free account, educational notifications, consent logging | Bundled Embodier contact consent during Flow A | Must-have |

Flow A conversion definitions should be nonprofit-safe: free account created, first lesson completed, video watched, reflection submitted, module completed, badge earned, or quiz completed. Ad Grants policy allows meaningful conversions such as membership registrations, email sign-ups, form completions, quizzes completed, calls, and engagement with content, while homepage visits and time-on-site should be excluded from primary conversions or categorized as “Other” ([Google Ad Grants account management policy](https://support.google.com/nonprofits/answer/117827?hl=en)).

### Workstream C: Education canon and curriculum production

The current knowledge base should be turned into a structured curriculum, not left as scattered research. The immediate content goal is to convert the recent Mallku thematic dashboard, Huachuma research, and Huachuma-vs-education-canon synthesis into a public/private content matrix.

| Content bucket | Use on PachaMind.org Flow A | Use behind login | Use only after counsel review |
|---|---|---|---|
| Andean cosmovision | Public cornerstone pages and lessons | Reflections and learning pathways | Low risk if no health/outcome claims |
| Three Pachas | Public curriculum spine | Puma Path exercises | Low risk |
| Five Andean Values | Public values pages and micro-lessons | Badge/reflection prompts | Low risk |
| Archaeo-astronomy | Public articles and visuals | Site-based learning journeys | Medium; avoid overclaiming |
| Mallku’s works | Public author/teacher attribution and book themes | Deeper study prompts | Medium; verify rights and excerpts |
| Huachuma/San Pedro | Not public front door | Gated historical/cultural literacy only | High; counsel review before indexing |
| In-person Peru experiences | Not public front door | High-level “screened Peru-only pathway” after Phase 2 | High; counsel and ops review |

Recommended first ten lessons:

1. What PachaMind is: free Andean wisdom education and cultural preservation.
2. Mallku Aribalo: tradition-holder, Andean shamanic teacher, and cultural anchor.
3. Kausay Pacha: the living universe.
4. Hanaq Pacha: sky, cycles, and archaeo-astronomy.
5. Kay Pacha: reciprocity and daily practice.
6. Uku Pacha: ancestry, depth, and integration as cultural learning.
7. Ayni: sacred reciprocity.
8. Munay, Yachay, Llank’ay, Sami and Hucha: values as a curriculum.
9. Huacas and sacred sites: academic interpretation versus living tradition.
10. Puma Path orientation: Semilla to Puma as learning progression only.

### Workstream D: Embodier.ai Flow B commercial stack

Embodier.ai should be built in parallel, but the activation switch should wait until after the nonprofit site is live, counsel has reviewed the consent/data/payment boundaries, and the Ad Grants application posture is stable. This stack should be a separate surface with separate terms, separate consent, separate analytics, and no claim that PachaMind.org traffic is automatically a sales lead.

| Component | Build now | Activate now? | Notes |
|---|---:|---:|---|
| Embodier.ai CRM | Yes | Internal only | Build lead/contact objects, consent states, source tags |
| Twilio/A2P campaign | Yes | Only after approval | Sender is Embodier.ai; subject matter must match consent |
| SMS copy library | Yes | Not for Flow A users unless consented | Use PachaMind SMS copywriter guardrails |
| Paid membership pages | Draft | No public launch until counsel | Must be valuable without Peru travel |
| Screening intake | Draft | No public launch until counsel | Should screen out, not just sell |
| Sales SOP | Draft | Manual first | Human-led before automation |
| Payment stack | Draft | No launch until counsel/CPA | Separate Embodier and Peru-side payments |

The SMS architecture must store the consent text version, checkbox state, timestamp, IP, source URL, terms/privacy/SMS terms versions, STOP/HELP events, and campaign/source. Twilio requires retaining proof of consent and providing it on request, and it requires sender identification in messages except for ongoing conversational follow-ups ([Twilio Messaging Policy](https://www.twilio.com/en-us/legal/messaging-policy)).

### Workstream E: Peru delivery readiness

Peru delivery should not be reverse-engineered after demand exists. It should be operationally ready before any screened pathway is opened. This includes agreements, safety SOPs, screening criteria, logistics, emergency procedures, insurance, vendor agreements, and a clear owner for each step.

| Readiness area | Minimum before any applicant is accepted | Risk if skipped |
|---|---|---|
| Entity and contracting | PachaMind Peru / contractor agreements / Mallku authority documented | Entity blur, private-benefit risk, liability ambiguity |
| Screening protocol | Cultural, medical, psychological, travel, and fit criteria reviewed | Unsafe admits, reputational harm |
| Emergency SOP | Local emergency contacts, transport, escalation, incident documentation | High-impact operational failure |
| Insurance and waivers | Counsel-reviewed participant agreements and operator coverage | Unmanaged liability |
| Vendor matrix | Lodging, transport, interpreters, local coordinators, responsibilities | Vendor liability and service failures |
| Payment routing | Separate invoices/receipts and no donation-for-access mechanics | Tax, nonprofit, and platform risk |

Harris Sliwoski notes that informed consent and liability waivers can be important but do not substitute for pre/post evaluation protocols, safe locations, travel planning, and risk disclosure; it also cautions that waivers may be challenged if the underlying activity is deemed illegal or if risks were not adequately disclosed ([Harris Sliwoski](https://harris-sliwoski.com/psychlawblog/operating-a-psychedelic-or-cannabis-retreat-abroad-legal-liability-risks-for-u-s-operators/)).

## Thirty, sixty, and ninety day plan

### Days 0-30: lock the foundation

| Priority | Concrete output | Success condition |
|---|---|---|
| Counsel packet | One PDF/MD packet with entity model, data flows, payment flows, site map, copy examples | Counsel can answer concrete questions |
| Flow A site map | Final PachaMind.org IA with no commercial surfaces | Build can start without strategy debate |
| Public/private content matrix | Every topic tagged public, login, counsel-only, or forbidden | Older huachuma-forward content is quarantined |
| Consent architecture | Consent log schema and copy versioning plan | No SMS build starts without audit trail |
| Curriculum outline | First 10 lessons and Puma Path progression defined | Content production has a spine |

Recommended “do now” sprint:

- Create a single `PachaMind.org Flow A Launch Spec`.
- Turn the recent research reports into a public/private content matrix.
- ~~Decide whether Flow A account signup is phone-first, email-first, or dual-field.~~ **Settled by the June 17, 2026 canon:** Flow A is a free, gamified, two-way learning membership that collects the approved membership coordinates (first/last name, email, country/region, country code, cell/WhatsApp, preferred language, separate permissions) for the real educational product. It is email-for-access with optional WhatsApp; the open work is consent wording, logging, data-sharing, and channel consent — not a phone-first vs. email-first choice.
- Draft the counsel packet before building sales automation.
- Merge the existing GitHub research PRs and add an index to `docs/research/`.

### Days 31-60: build and test Flow A

| Priority | Concrete output | Success condition |
|---|---|---|
| PachaMind.org MVP | Homepage, About, Learn, Values, Archaeo-astronomy, Conservation, Mallku, Account | Site is educational, fast, mobile, HTTPS-ready |
| Learning MVP | 3-5 lessons, video placeholders/captions, reflection prompts, badges | Users can complete first learning loop |
| Analytics | Conversion tracking for account, lesson completion, quiz/badge | Ad Grants-ready conversions are defined |
| Policy pages | Privacy, Terms, Accessibility, Cultural Attribution, SMS terms if SMS exists | No dead footer links |
| Accessibility QA | WCAG AA pass, captions, mobile/low-bandwidth check | Launch quality meets nonprofit trust bar |

PachaMind.org should be treated as a school-like learning site, not a booking site. If a page starts to feel like “talk to us about going to Peru,” it belongs to a later Embodier or gated pathway, not Flow A.

### Days 61-90: apply, learn, and prepare Flow B

| Priority | Concrete output | Success condition |
|---|---|---|
| Ad Grants application/readiness | Eligibility proof, site audit, conversion setup, campaign structure | Application can be submitted or account activated |
| Content cadence | 2-3 educational articles/lessons per week or equivalent | Site looks active and substantive |
| Embodier.ai Flow B draft | Separate landing page, CRM fields, A2P package, SMS sample messages | Ready for counsel review, not public |
| Re-consent plan | Phase 1 users can later choose Embodier contact, default no | No consent transfer shortcut |
| Peru readiness checklist | Agreements, SOPs, vendor matrix, emergency plan drafts | No sales before operations |

Google requires Ad Grants accounts to maintain proper structure, use meaningful conversion tracking, and follow account management rules, with suspension risks for violations ([Google Ad Grants account management policy](https://support.google.com/nonprofits/answer/117827?hl=en)). The practical implication is that campaign structure, site content, and conversion tracking should be designed together rather than after launch.

## Decision register

| Decision | Recommendation | Why it matters |
|---|---|---|
| Public site posture | PachaMind.org = free education only | Protects Ad Grants posture and nonprofit trust |
| Huachuma content | Gated, counsel-reviewed, not indexed initially | Avoids platform, legal, and positioning risk |
| Front-door conversion | Conservative Flow A signup first; decide phone vs email with counsel | Prevents nonprofit lead-gen ambiguity |
| Embodier opt-in | Phase 2 only, separate unchecked consent | Avoids consent transfer and private-benefit risk |
| Paid membership | Build as valuable education/community product independent of Peru travel | Makes Embodier revenue less dependent on ceremony access |
| Peru experiences | Screened, Peru-only, separately contracted and paid | Supports entity separation |
| Ads | Ad Grants only for mission education/conservation; commercial ads only on Embodier.ai if used | Prevents grant contamination |

## Risk register

| Risk | Severity | Current mitigation | Next step |
|---|---|---|---|
| Ad Grants commercial contamination | High | Locked commercial-free PachaMind.org canon | Create Flow A site spec and copy audit checklist |
| Entity blur | High | Canonical nonprofit/for-profit split | Counsel packet and public disclosure rules |
| SMS consent misuse | High | Separate unchecked consent model | Consent logging implementation and A2P review |
| Huachuma-forward public copy | High | Gated/counsel-review rule | Public/private content matrix |
| U.S. operator liability | High | Peru-only delivery and payment separation concept | US counsel review of exact funnel and agreements |
| Private benefit / inurement | High | Separate entities and Mallku attribution | Board/conflict/inter-entity review |
| Overbuilding automation too early | Medium | Manual-first sales guidance | Build CRM states, not full automation |
| Weak content production | Medium | Curriculum spine exists | Assign lesson owners and publish cadence |
| Cultural appropriation criticism | High | Mallku credited as tradition-holder | Formalize Mallku authority and attribution policy |

## What to do next this week

1. Create the `PachaMind.org Flow A Launch Spec` with page list, copy rules, conversion rules, consent model, and no-commerce checklist.
2. Create the `Public / Login / Counsel-Only / Forbidden Content Matrix` for all existing research and business-plan material.
3. Prepare the counsel packet: entity map, data flow, payment flow, SMS flow, Ad Grants flow, and sample public copy.
4. Confirm with counsel the consent wording, logging schema, data-sharing boundary, and channel consent for the approved Flow A membership coordinates. (The June 17, 2026 canon already settled the field set and the email-for-access + optional WhatsApp model, with optional educational SMS only if activated later; this is no longer a phone-first vs. email-first decision.)
5. Build the first five lessons around Andean cosmovision, the Three Pachas, Five Values, Mallku attribution, and archaeo-astronomy.
6. Draft Embodier.ai Flow B privately, but do not publish or connect it to PachaMind.org until the counsel and Ad Grants gates are cleared.
7. Merge and index the existing GitHub research PRs so the repository becomes the canonical knowledge base rather than a scattered archive.

## Bottom line

The best next step is a disciplined sequencing move: make PachaMind.org a clean, high-trust, free educational institution first. Build Embodier.ai’s SMS and commercial stack quietly in parallel. Do not let the older huachuma-forward sales plan leak into the nonprofit launch surface. Once counsel confirms the entity, data, SMS, payment, and Ad Grants boundaries, activate Flow B as an optional, separate, consented bridge from education into Embodier.ai’s commercial relationship.
