# Mobile Screen Specs — Flow A (Free Learning Membership)

Mobile-first, 390px width base. Single-column, thumb-reachable primary actions, sticky MobileNav. All screens use only free-learning-membership language. No pricing, checkout, upgrade, booking, donation, ceremony, or health/outcome content anywhere.

Shared elements: SiteHeader (logo + menu), sticky MobileNav, SiteFooter. Body text >= 16px, tap targets >= 44x44px, visible terracotta focus ring on all interactive elements.

---

## 1. Home (`/`)
- Purpose: Welcome a visitor and invite them into free Andean cosmovision learning.
- Sections: Hero (headline + subcopy + PrimaryButton), FeaturedVideoCard, "Why learn" value row, LessonCard preview grid (single column), SiteFooter.
- Required copy: Hero CTA "Start Learning free"; secondary link "Create free PachaMind learning membership".
- Components: SiteHeader, PrimaryButton, FeaturedVideoCard, LessonCard, SiteFooter, MobileNav.
- Accessibility: H1 is the hero headline; video has transcript link; descriptive alt text on imagery; CTA is a real button/link with label.

## 2. Learn (`/learn`)
- Purpose: Browse free lessons and pick one to start.
- Sections: Page title, short intro, LessonCard list (single column), ProgressRing for any started lessons.
- Required copy: "Learn Andean cosmovision"; "Save your progress".
- Components: SiteHeader, LessonCard, ProgressRing, MobileNav, SiteFooter.
- Accessibility: Each LessonCard is a labeled link; progress conveyed by text + ring (not color alone).

## 3. Lesson Detail — The Three Pachas (`/learn/[lessonId]`)
- Purpose: Deliver a single free lesson with video and reflection.
- Sections: Lesson title, video player (with transcript), lesson body, ReflectionCard, "Complete reflections" action, next-lesson link.
- Required copy: "Complete reflections"; "Save your progress".
- Components: SiteHeader, ReflectionCard, PrimaryButton, ProgressRing, MobileNav, SiteFooter.
- Accessibility: Video transcript provided; reflection textarea has an associated label; heading order preserved.

## 4. Puma Path (`/puma-path`)
- Purpose: Show the free learning journey stages (the Puma Path).
- Sections: Intro, vertical list of PumaPathStageCard, BadgeCard row for earned learning badges, ProgressRing.
- Required copy: "Earn learning badges"; "Cultural preservation".
- Components: SiteHeader, PumaPathStageCard, BadgeCard, ProgressRing, MobileNav, SiteFooter.
- Accessibility: Stages are an ordered list; badges have text labels and alt text; status not conveyed by color alone.

## 5. Signup — Create free PachaMind learning membership (`/signup`)
- Purpose: Create a free learning account that saves progress.
- Sections: Title, short reassurance copy, form (name, email, password handled by user), ConsentCheckbox(es) unchecked by default, PrimaryButton.
- Required copy: "Create free PachaMind learning membership"; "Free learning membership".
- Components: SiteHeader, TextInput, ConsentCheckbox, PrimaryButton, MobileNav, SiteFooter.
- Accessibility: All inputs have associated labels; consent checkboxes are individually labeled and unchecked by default; clear error messaging; no pre-checked consents.

## 6. Dashboard — mock logged-in (`/dashboard`)
- Purpose: Show saved progress, continue learning, earned badges.
- Sections: Greeting, ProgressRing summary, "Continue learning" LessonCard, BadgeCard row, ReflectionCard recent entries.
- Required copy: "Save your progress"; "Earn learning badges".
- Components: SiteHeader, ProgressRing, LessonCard, BadgeCard, ReflectionCard, MobileNav, SiteFooter.
- Accessibility: Landmarks for main/nav; progress has text equivalent; cards are labeled links.

## 7. Account Preferences (`/account`)
- Purpose: Manage free learning membership preferences.
- Sections: Profile fields, notification preferences (toggles), language preference SelectInput, save action.
- Required copy: neutral preference labels only; no billing or plan language.
- Components: SiteHeader, TextInput, SelectInput, ConsentCheckbox, PrimaryButton, MobileNav, SiteFooter.
- Accessibility: Toggles have labels and states announced; form grouped with fieldset/legend; respects user font scaling.

## 8. About Mallku (`/about`)
- Purpose: Explain the mission, cultural preservation, and educational intent.
- Sections: Mission narrative, cultural preservation note, documentary imagery, link back to Learn.
- Required copy: "Cultural preservation"; educational/documentary framing only.
- Components: SiteHeader, SiteFooter, MobileNav.
- Accessibility: Descriptive alt text on documentary imagery; readable line length; sufficient contrast.

---

## Global Mobile Requirements
- Design at 390px first; layouts scale up to 1440px.
- Single-column layouts; sticky MobileNav; primary action within thumb reach.
- WCAG AA contrast (>= 4.5:1 body, >= 3:1 large text/UI).
- Images use descriptive alt text; documentary, earth-toned imagery only.
- Respect user font scaling; no fixed pixel font that blocks zoom.
