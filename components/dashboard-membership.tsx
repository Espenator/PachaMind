"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { BadgeCard } from "@/components/badge-card";
import { ProgressRing } from "@/components/progress-ring";
import { readMembershipState, type MembershipState } from "@/lib/membership";
import { readProgressState } from "@/lib/progress";
import type { Language, SiteContent } from "@/lib/types";

interface DashboardMembershipProps {
  language: Language;
  badges: SiteContent["badges"];
  stages: SiteContent["pumaPath"]["stages"];
  totalLessons: number;
  labels: SiteContent["dashboard"];
}

export function DashboardMembership({
  language,
  badges,
  stages,
  totalLessons,
  labels,
}: DashboardMembershipProps) {
  const [membership, setMembership] = useState<MembershipState | null>(null);
  const [completedCount, setCompletedCount] = useState(0);
  const [earnedBadgeKeys, setEarnedBadgeKeys] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    function sync() {
      setMembership(readMembershipState());
      const progress = readProgressState();
      setCompletedCount(progress.completedLessonSlugs.length);
      setEarnedBadgeKeys(progress.earnedBadgeKeys);
      setLoaded(true);
    }
    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const earnedSet = useMemo(() => new Set(earnedBadgeKeys), [earnedBadgeKeys]);

  // Current stage = the stage of the highest-index earned badge, else first.
  const currentStage = useMemo(() => {
    for (let i = stages.length - 1; i >= 0; i -= 1) {
      const stageBadge = badges.find((badge) => badge.stage === stages[i].key);
      if (stageBadge && earnedSet.has(stageBadge.key)) {
        return stages[i];
      }
    }
    return stages[0];
  }, [stages, badges, earnedSet]);

  if (!loaded) {
    // Render a stable shell on first paint to avoid hydration mismatch.
    return null;
  }

  return (
    <div className="flex flex-col gap-8">
      <section className="documentary-card p-8 lg:p-10">
        {membership ? (
          <>
            <p className="text-xs uppercase tracking-[0.24em] text-stonegray">
              {labels.greeting}
            </p>
            <h2 className="headline-font mt-2 text-3xl text-deepearth">
              {membership.profile.firstName} {membership.profile.lastName}
            </h2>
            <Link
              href={`/${language}/account/preferences`}
              className="mt-4 inline-flex rounded-full border border-deepearth/15 px-5 py-2 text-sm font-semibold text-deepearth transition hover:bg-deepearth hover:text-cloudwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              {labels.preferencesCta}
            </Link>
          </>
        ) : (
          <>
            <p className="text-xs uppercase tracking-[0.24em] text-stonegray">
              {labels.guestGreeting}
            </p>
            <p className="mt-3 max-w-2xl text-base leading-8 text-stonegray">
              {labels.guestIntro}
            </p>
            <Link
              href={`/${language}/signup`}
              className="mt-4 inline-flex rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-deepearth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deepearth"
            >
              {labels.guestCta}
            </Link>
          </>
        )}
      </section>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <section className="documentary-card flex flex-col items-center justify-center gap-4 p-8">
          <ProgressRing
            value={completedCount}
            total={totalLessons}
            label={labels.percentLabel}
          />
        </section>

        <section className="documentary-card p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-stonegray">
            {labels.stageHeading}
          </p>
          <h3 className="headline-font mt-2 text-3xl text-deepearth">
            {currentStage.title}{" "}
            <span className="text-stonegray">· {currentStage.meaning}</span>
          </h3>
          <p className="mt-3 text-base leading-8 text-stonegray">{currentStage.body}</p>
        </section>
      </div>

      <section className="documentary-card p-8">
        <h3 className="headline-font text-2xl text-deepearth">{labels.badgesHeading}</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {badges.map((badge) => (
            <BadgeCard
              key={badge.key}
              badge={badge}
              earned={earnedSet.has(badge.key)}
              earnedLabel={labels.badgeEarnedLabel}
              lockedLabel={labels.badgeLockedLabel}
            />
          ))}
        </div>
      </section>

      <section className="documentary-card p-8">
        <h3 className="headline-font text-2xl text-deepearth">
          {labels.reflectionsHeading}
        </h3>
        <p className="mt-3 text-base leading-8 text-stonegray">
          {labels.reflectionsBody}
        </p>
        <Link
          href={`/${language}/reflections`}
          className="mt-4 inline-flex rounded-full border border-deepearth/15 px-5 py-2 text-sm font-semibold text-deepearth transition hover:bg-deepearth hover:text-cloudwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          {labels.reflectionsCta}
        </Link>
      </section>
    </div>
  );
}
