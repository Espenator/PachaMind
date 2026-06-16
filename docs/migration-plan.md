# PachaMind.org — Migration / Seed Plan

## Selected Foundation
LearnHouse (https://github.com/learnhouse/learnhouse) — kept as-is, run free for now.

## How to Seed @PachaMind (code import)
GitHub's web UI cannot import an entire external repo into a repo that already has commits. Use ONE of the following.

### Option A — Import into a fresh empty repo (browser only)
1. Create a new EMPTY repo (no README), e.g. `PachaMind-site`.
2. Go to https://github.com/new/import
3. Source URL: `https://github.com/learnhouse/learnhouse`
4. Owner: Espenator / Repo: PachaMind-site
5. Begin import.

### Option B — Terminal / Cursor (keeps existing README; recommended)
```bash
git clone --depth 1 https://github.com/learnhouse/learnhouse.git lh-temp
cd lh-temp && rm -rf .git && cd ..
git clone https://github.com/Espenator/PachaMind.git
cp -r lh-temp/. PachaMind/
cd PachaMind
git checkout -b feat/pachamind-free-learning-prototype
git add . && git commit -m "chore: seed PachaMind from LearnHouse (kept as-is, free config)"
git push -u origin feat/pachamind-free-learning-prototype
```

## What Was Imported
- Full LearnHouse codebase (Next.js web + Python API + collab server), unmodified.

## What Was Removed
- Nothing. Code kept intact per decision.

## What Was Adapted (config only, no code removal)
- Payment / enterprise features left unconfigured (no Stripe keys) so platform runs free.
- Public-facing enrollment/pricing UI to be hidden via config/flags.
- Auth simplified to first name + email for MVP signup.

## Target IA (to build on top)
`/` `/learn` `/library` `/lesson/[slug]` `/puma-path` `/about` `/signup` `/dashboard`

## Remaining Work
- Run the code import (Option A or B) — requires terminal or empty-repo import; cannot be done via browser into the current repo.
- Puma Path gamification (stages, badges, progress ring).
- Mallku Aribalo attribution block.
- Earth-tone design pass; mobile-first hero with featured video.
- Lesson page: video + transcript + key ideas + reflection + next lesson.
- EN/ES bilingual hooks.

## [NEEDS COUNSEL/VERIFICATION]
- LearnHouse AGPL v3.0 source-disclosure obligations for public nonprofit deployment.
- Google Ad Grants eligibility.
- Privacy/consent for member data.
- Data-sharing with Embodier.ai.
