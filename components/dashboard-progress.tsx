"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { readProgressState } from "@/lib/progress";
import type { Language, Lesson } from "@/lib/types";

interface DashboardProgressProps {
  language: Language;
  lessons: Lesson[];
  labels: {
    completedLabel: string;
    percentLabel: string;
    totalLabel: string;
    continueLearning: string;
    allComplete: string;
    completedState: string;
    notStartedState: string;
  };
}

export function DashboardProgress({
  language,
  lessons,
  labels,
}: DashboardProgressProps) {
  const [completedLessonSlugs, setCompletedLessonSlugs] = useState<string[]>([]);
  const [lastOpenedLessonSlug, setLastOpenedLessonSlug] = useState<string | undefined>();

  useEffect(() => {
    function syncFromStorage() {
      const state = readProgressState();
      setCompletedLessonSlugs(state.completedLessonSlugs);
      setLastOpenedLessonSlug(state.lastOpenedLessonSlug);
    }

    syncFromStorage();
    window.addEventListener("storage", syncFromStorage);

    return () => window.removeEventListener("storage", syncFromStorage);
  }, []);

  const completedSet = useMemo(
    () => new Set(completedLessonSlugs),
    [completedLessonSlugs],
  );
  const completedCount = completedLessonSlugs.filter((slug) =>
    lessons.some((lesson) => lesson.slug === slug),
  ).length;
  const percentComplete = lessons.length === 0 ? 0 : Math.round((completedCount / lessons.length) * 100);
  const isAllComplete = lessons.length > 0 && completedCount >= lessons.length;
  const continueLesson =
    lessons.find((lesson) => lesson.slug === lastOpenedLessonSlug && (!completedSet.has(lesson.slug) || isAllComplete)) ??
    lessons.find((lesson) => !completedSet.has(lesson.slug)) ??
    lessons.at(-1);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="documentary-card grid gap-4 p-8 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-stonegray">{labels.completedLabel}</p>
          <p className="mt-3 text-4xl font-semibold text-deepearth">{completedCount}</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-stonegray">{labels.percentLabel}</p>
          <p className="mt-3 text-4xl font-semibold text-deepearth">{percentComplete}%</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-stonegray">{labels.totalLabel}</p>
          <p className="mt-3 text-4xl font-semibold text-deepearth">{lessons.length}</p>
        </div>
      </div>

      <div className="documentary-card p-8">
        {continueLesson ? (
          <div className="flex h-full flex-col justify-between gap-5">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-stonegray">{labels.continueLearning}</p>
              <h2 className="headline-font mt-3 text-3xl text-deepearth">{continueLesson.title}</h2>
              <p className="mt-3 text-base leading-7 text-stonegray">
                {isAllComplete ? labels.allComplete : continueLesson.description}
              </p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full border border-deepearth/10 bg-cloudwhite px-4 py-2 text-sm text-deepearth">
                {completedSet.has(continueLesson.slug)
                  ? labels.completedState
                  : labels.notStartedState}
              </span>
              <Link
                href={`/${language}/lesson/${continueLesson.slug}`}
                className="rounded-full bg-deepearth px-5 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                {labels.continueLearning}
              </Link>
            </div>
          </div>
        ) : (
          <p className="text-base text-stonegray">{labels.allComplete}</p>
        )}
      </div>
    </div>
  );
}
