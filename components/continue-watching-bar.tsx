"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { readProgressState } from "@/lib/progress";
import type { Language, Lesson } from "@/lib/types";

interface ContinueWatchingBarProps {
  language: Language;
  lessons: Lesson[];
  continueLabel: string;
}

export function ContinueWatchingBar({ language, lessons, continueLabel }: ContinueWatchingBarProps) {
  const [targetLesson, setTargetLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    function sync() {
      const { lastOpenedLessonSlug } = readProgressState();
      if (!lastOpenedLessonSlug) {
        setTargetLesson(null);
        return;
      }
      const lesson = lessons.find((l) => l.slug === lastOpenedLessonSlug) ?? null;
      setTargetLesson(lesson);
    }

    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, [lessons]);

  if (!targetLesson) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <Link
        href={`/${language}/lesson/${targetLesson.slug}`}
        className="flex min-h-[3.5rem] items-center justify-between gap-4 bg-deepearth/95 px-6 py-3 text-cloudwhite backdrop-blur-sm transition hover:bg-deepearth"
      >
        <div className="min-w-0">
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-goldmoun">{continueLabel}</p>
          <p className="headline-font mt-0.5 truncate text-base leading-tight">{targetLesson.title}</p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-terracotta text-cloudwhite shadow-md">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 translate-x-0.5" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </Link>
    </div>
  );
}
