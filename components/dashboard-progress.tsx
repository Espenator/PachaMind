"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { readProgressState, resetProgressState } from "@/lib/progress";
import type { Language, Lesson } from "@/lib/types";
import { CertificateView } from "@/components/certificate-view";

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
    lastWatchedLabel: string;
    topicsHeading: string;
    resetLabel: string;
    resetConfirmHeading: string;
    resetConfirmLabel: string;
    resetCancelLabel: string;
    certificateTitle: string;
    certificateIntro: string;
    certificateBody: string;
    certificateNameLabel: string;
    certificateNamePlaceholder: string;
    certificatePrintLabel: string;
  };
}

export function DashboardProgress({
  language,
  lessons,
  labels,
}: DashboardProgressProps) {
  const [completedLessonSlugs, setCompletedLessonSlugs] = useState<string[]>([]);
  const [lastOpenedLessonSlug, setLastOpenedLessonSlug] = useState<string | undefined>();
  const [confirmReset, setConfirmReset] = useState(false);
  const confirmRef = useRef<HTMLDivElement>(null);

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

  // Focus confirm dialog when it opens
  useEffect(() => {
    if (confirmReset) {
      confirmRef.current?.focus();
    }
  }, [confirmReset]);

  const completedSet = useMemo(
    () => new Set(completedLessonSlugs),
    [completedLessonSlugs],
  );

  const completedCount = completedLessonSlugs.filter((slug) =>
    lessons.some((lesson) => lesson.slug === slug),
  ).length;

  const percentComplete =
    lessons.length === 0 ? 0 : Math.round((completedCount / lessons.length) * 100);

  const isAllComplete = lessons.length > 0 && completedCount >= lessons.length;

  const continueLesson =
    lessons.find(
      (lesson) =>
        lesson.slug === lastOpenedLessonSlug &&
        (!completedSet.has(lesson.slug) || isAllComplete),
    ) ??
    lessons.find((lesson) => !completedSet.has(lesson.slug)) ??
    lessons.at(-1);

  const lastWatchedLesson = lessons.find(
    (lesson) => lesson.slug === lastOpenedLessonSlug,
  );

  // Group lessons by topic
  const topicGroups = useMemo(() => {
    const map = new Map<string, Lesson[]>();
    for (const lesson of lessons) {
      const topic = lesson.topic ?? "—";
      if (!map.has(topic)) map.set(topic, []);
      map.get(topic)!.push(lesson);
    }
    return [...map.entries()];
  }, [lessons]);

  function handleReset() {
    resetProgressState();
    setCompletedLessonSlugs([]);
    setLastOpenedLessonSlug(undefined);
    setConfirmReset(false);
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Stats row */}
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="documentary-card grid gap-4 p-8 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-stonegray">
              {labels.completedLabel}
            </p>
            <p className="mt-3 text-4xl font-semibold text-deepearth">{completedCount}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-stonegray">
              {labels.percentLabel}
            </p>
            <p className="mt-3 text-4xl font-semibold text-deepearth">{percentComplete}%</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-stonegray">
              {labels.totalLabel}
            </p>
            <p className="mt-3 text-4xl font-semibold text-deepearth">{lessons.length}</p>
          </div>
        </div>

        {/* Continue / last-watched card */}
        <div className="documentary-card p-8">
          {continueLesson ? (
            <div className="flex h-full flex-col justify-between gap-5">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-stonegray">
                  {lastWatchedLesson
                    ? labels.lastWatchedLabel
                    : labels.continueLearning}
                </p>
                <h2 className="headline-font mt-3 text-3xl text-deepearth">
                  {continueLesson.title}
                </h2>
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
                  className="rounded-full bg-deepearth px-5 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta"
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

      {/* Per-topic progress bars */}
      {topicGroups.length > 0 && (
        <div className="documentary-card p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-stonegray">
            {labels.topicsHeading}
          </p>
          <div className="mt-5 flex flex-col gap-6">
            {topicGroups.map(([topic, topicLessons]) => {
              const done = topicLessons.filter((l) => completedSet.has(l.slug)).length;
              const pct =
                topicLessons.length === 0
                  ? 0
                  : Math.round((done / topicLessons.length) * 100);
              return (
                <div key={topic}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-base font-medium text-deepearth">{topic}</span>
                    <span className="text-sm text-stonegray">
                      {done} / {topicLessons.length}
                    </span>
                  </div>
                  <div
                    role="progressbar"
                    aria-valuenow={pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={topic}
                    className="mt-2 h-2 w-full overflow-hidden rounded-full bg-deepearth/10"
                  >
                    <div
                      className="h-full rounded-full bg-terracotta transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <ul className="mt-3 flex flex-col gap-1">
                    {topicLessons.map((lesson) => (
                      <li key={lesson.slug} className="flex items-center gap-3 text-sm">
                        <span
                          aria-hidden="true"
                          className={`inline-block h-2 w-2 rounded-full flex-shrink-0 ${
                            completedSet.has(lesson.slug)
                              ? "bg-terracotta"
                              : "bg-deepearth/20"
                          }`}
                        />
                        <Link
                          href={`/${language}/lesson/${lesson.slug}`}
                          className="text-stonegray transition hover:text-terracotta"
                        >
                          {lesson.kicker}: {lesson.title}
                        </Link>
                        {completedSet.has(lesson.slug) && (
                          <span className="text-xs text-terracotta">{labels.completedState}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Certificate (shown only when all lessons complete) */}
      {isAllComplete && (
        <CertificateView
          labels={{
            certificateTitle: labels.certificateTitle,
            certificateIntro: labels.certificateIntro,
            certificateBody: labels.certificateBody,
            certificateNameLabel: labels.certificateNameLabel,
            certificateNamePlaceholder: labels.certificateNamePlaceholder,
            certificatePrintLabel: labels.certificatePrintLabel,
          }}
        />
      )}

      {/* Reset progress */}
      <div className="documentary-card p-8">
        {confirmReset ? (
          <div
            ref={confirmRef}
            tabIndex={-1}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="reset-confirm-heading"
            className="flex flex-col gap-4 outline-none"
          >
            <p
              id="reset-confirm-heading"
              className="text-base font-semibold text-deepearth"
            >
              {labels.resetConfirmHeading}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-deepearth"
              >              >
                {labels.resetConfirmLabel}
              </button>
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="rounded-full border border-deepearth/15 px-5 py-3 text-sm text-deepearth transition hover:bg-deepearth hover:text-cloudwhite"
              >
                {labels.resetCancelLabel}
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="rounded-full border border-deepearth/15 px-5 py-3 text-sm text-deepearth transition hover:bg-deepearth hover:text-cloudwhite"
          >
            {labels.resetLabel}
          </button>
        )}
      </div>
    </div>
  );
}
