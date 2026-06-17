"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { FillImage } from "@/components/fill-image";
import { readProgressState } from "@/lib/progress";
import type { Language, Lesson, SiteContent } from "@/lib/types";

interface PumaPathJourneyProps {
  language: Language;
  lessons: Lesson[];
  pumaPath: SiteContent["pumaPath"];
  brand: SiteContent["brand"];
}

export function PumaPathJourney({
  language,
  lessons,
  pumaPath,
  brand,
}: PumaPathJourneyProps) {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);

  useEffect(() => {
    function sync() {
      setCompletedSlugs(readProgressState().completedLessonSlugs);
    }
    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const completedSet = useMemo(() => new Set(completedSlugs), [completedSlugs]);

  const stagesWithLessons = pumaPath.stages.map((stage) => ({
    stage,
    lesson: lessons.find((l) => l.topic === stage.key),
  }));

  const completedStageCount = stagesWithLessons.filter(({ lesson }) =>
    lesson ? completedSet.has(lesson.slug) : false,
  ).length;

  const totalStages = pumaPath.stages.length;
  const progressPercent = totalStages === 0 ? 0 : Math.round((completedStageCount / totalStages) * 100);

  return (
    <div className="pb-16">
      {/* Progress meter */}
      <section className="documentary-card p-8 lg:p-10">
        <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{pumaPath.progressLabel}</p>
        <div className="mt-5 flex flex-wrap items-center gap-6">
          <p className="headline-font text-5xl text-deepearth lg:text-6xl">
            {completedStageCount}
            <span className="text-3xl text-stonegray lg:text-4xl"> / {totalStages}</span>
          </p>
          <div className="min-w-[160px] flex-1" role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100} aria-label={pumaPath.progressLabel}>
            <div className="h-2 rounded-full bg-deepearth/10">
              <div
                className="h-2 rounded-full bg-terracotta transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-stonegray">{progressPercent}%</p>
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-goldmoun">
          {pumaPath.noticeMission}
        </p>
      </section>

      {/* Stage cards */}
      <section className="mt-8" aria-label={pumaPath.stagesHeading}>
        <h2 className="sr-only">{pumaPath.stagesHeading}</h2>
        <div className="grid gap-6">
          {stagesWithLessons.map(({ stage, lesson }, index) => {
            const isCompleted = lesson ? completedSet.has(lesson.slug) : false;
            const stageNumber = index + 1;

            return (
              <article
                key={stage.key}
                className="photo-overlay relative overflow-hidden rounded-[2rem]"
                aria-label={`${pumaPath.stageLabel} ${stageNumber}: ${stage.title}`}
              >
                <FillImage
                  src={stage.image}
                  alt={stage.title}
                  sizes="(min-width: 1024px) 80rem, 100vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-deepearth/80 via-deepearth/35 to-deepearth/10"
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-col gap-6 p-8 sm:p-10 lg:p-14">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-2xl">
                      <p className="text-xs uppercase tracking-[0.34em] text-goldmoun">
                        {pumaPath.stageLabel} {stageNumber}
                      </p>
                      <h3 className="headline-font mt-3 text-4xl text-cloudwhite sm:text-5xl">
                        {stage.title}
                      </h3>
                      <p className="mt-4 text-lg leading-8 text-cloudwhite/90">{stage.body}</p>
                    </div>
                    {isCompleted && (
                      <span className="rounded-full bg-goldmoun/95 px-4 py-2 text-sm font-semibold text-deepearth">
                        {pumaPath.completedLabel}
                      </span>
                    )}
                  </div>

                  {lesson && (
                    <div>
                      <Link
                        href={`/${language}/lesson/${lesson.slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-cloudwhite/95 px-6 py-3 text-sm font-semibold text-deepearth transition hover:bg-goldmoun focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloudwhite"
                      >
                        {isCompleted ? pumaPath.revisitLabel : pumaPath.openStageLabel}
                        <span aria-hidden="true">→</span>
                      </Link>
                      {!isCompleted && (
                        <p className="mt-3 text-sm text-cloudwhite/70">{pumaPath.notStartedLabel}</p>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Mallku Aribalo attribution */}
      <section className="mt-8 documentary-card p-8 lg:p-10">
        <p className="text-xs uppercase tracking-[0.34em] text-stonegray">{brand.traditionHolderLabel}</p>
        <p className="headline-font mt-3 text-3xl text-deepearth">{brand.traditionHolderName}</p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-stonegray">{pumaPath.attributionNote}</p>
        <p className="mt-4 text-sm text-stonegray">{brand.disclaimer}</p>
      </section>
    </div>
  );
}
