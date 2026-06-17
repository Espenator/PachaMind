"use client";

import { useEffect, useState } from "react";

import { track } from "@/lib/analytics";
import {
  readProgressState,
  setLastOpenedLessonSlug,
  setLessonCompletion,
} from "@/lib/progress";

interface LessonProgressButtonProps {
  slug: string;
  markCompleteLabel: string;
  markIncompleteLabel: string;
  completedLabel: string;
  hint: string;
  badgeKey?: string;
  badgeTitle?: string;
  badgeEarnedLabel?: string;
}

export function LessonProgressButton({
  slug,
  markCompleteLabel,
  markIncompleteLabel,
  completedLabel,
  hint,
  badgeKey,
  badgeTitle,
  badgeEarnedLabel,
}: LessonProgressButtonProps) {
  const [isCompleted, setIsCompleted] = useState(() =>
    readProgressState().completedLessonSlugs.includes(slug),
  );

  useEffect(() => {
    setLastOpenedLessonSlug(slug);
    track("lesson_started", { slug });
  }, [slug]);

  function toggleCompletion() {
    const nextValue = !isCompleted;
    setLessonCompletion(slug, nextValue, badgeKey);
    setIsCompleted(nextValue);
    if (nextValue) {
      track("lesson_completed", { slug });
      if (badgeKey) {
        track("badge_earned", { badgeKey });
      }
    }
  }

  return (
    <div className="documentary-card flex flex-col gap-4 p-6">
      <button
        type="button"
        onClick={toggleCompletion}
        className="rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-deepearth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deepearth"
      >
        {isCompleted ? markIncompleteLabel : markCompleteLabel}
      </button>
      <p className="text-sm text-stonegray">
        {isCompleted ? completedLabel : hint}
      </p>
      {isCompleted && badgeKey && badgeTitle && badgeEarnedLabel ? (
        <p className="rounded-2xl border border-goldmoun/50 bg-goldmoun/10 px-4 py-3 text-sm font-semibold text-deepearth">
          {badgeEarnedLabel}: {badgeTitle}
        </p>
      ) : null}
    </div>
  );
}
