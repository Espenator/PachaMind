"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/components/auth-provider";
import {
  readProgressState,
  setLastOpenedLessonSlug,
  setLessonCompletion,
} from "@/lib/progress";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import {
  loadSupabaseProgress,
  saveSupabaseLastOpenedLesson,
  saveSupabaseLessonCompletion,
} from "@/lib/supabase/progress";

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
  const { user } = useAuth();
  const [isCompleted, setIsCompleted] = useState(() =>
    readProgressState().completedLessonSlugs.includes(slug),
  );

  useEffect(() => {
    const client = getSupabaseBrowserClient();

    async function syncFromSupabase() {
      if (!user) {
        setIsCompleted(readProgressState().completedLessonSlugs.includes(slug));
        return;
      }

      const remoteState = await loadSupabaseProgress(client, user.id);
      setIsCompleted(remoteState.completedLessonSlugs.includes(slug));
    }

    syncFromSupabase().catch((error) => {
      console.error("[Supabase] Failed to sync lesson progress:", error);
    });
  }, [slug, user]);

  useEffect(() => {
    setLastOpenedLessonSlug(slug);

    if (!user) {
      return;
    }

    saveSupabaseLastOpenedLesson(getSupabaseBrowserClient(), user.id, slug).catch((error) => {
      console.error("[Supabase] Failed to save last opened lesson:", error);
    });
  }, [slug, user]);

  function toggleCompletion() {
    const nextValue = !isCompleted;
    setLessonCompletion(slug, nextValue);
    setIsCompleted(nextValue);

    if (!user) {
      return;
    }

    saveSupabaseLessonCompletion(getSupabaseBrowserClient(), user.id, slug, nextValue).catch(
      (error) => {
        console.error("[Supabase] Failed to save lesson completion:", error);
      },
    );
  }

  return (
    <div className="documentary-card flex flex-col gap-4 p-6">
      <button
        type="button"
        onClick={toggleCompletion}
        className="rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-cloud transition hover:bg-deepearth focus-gold min-h-[44px]"
      >
        {isCompleted ? markIncompleteLabel : markCompleteLabel}
      </button>
      <p className="text-sm text-stonegray">
        {isCompleted ? completedLabel : hint}
      </p>
    </div>
  );
}
