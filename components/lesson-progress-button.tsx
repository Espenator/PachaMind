"use client";

import { useEffect, useState } from "react";

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
}

export function LessonProgressButton({
  slug,
  markCompleteLabel,
  markIncompleteLabel,
  completedLabel,
  hint,
}: LessonProgressButtonProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setLastOpenedLessonSlug(slug);
    const state = readProgressState();
    setIsCompleted(state.completedLessonSlugs.includes(slug));
  }, [slug]);

  function toggleCompletion() {
    const nextValue = !isCompleted;
    setLessonCompletion(slug, nextValue);
    setIsCompleted(nextValue);
  }

  return (
    <div className="documentary-card flex flex-col gap-4 p-6">
      <button
        type="button"
        onClick={toggleCompletion}
        className="rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-deepearth"
      >
        {isCompleted ? markIncompleteLabel : markCompleteLabel}
      </button>
      <p className="text-sm text-stonegray">
        {isCompleted ? completedLabel : hint}
      </p>
    </div>
  );
}
