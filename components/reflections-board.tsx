"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useAuth } from "@/components/auth-provider";
import { clearAllReflections, readReflectionsState, type ReflectionEntry } from "@/lib/reflections";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { clearAllSupabaseReflections, loadSupabaseReflections } from "@/lib/supabase/reflections";

interface ReflectionsBoardProps {
  lang: string;
  lessonTitles: Record<string, string>;
  labels: {
    emptyState: string;
    promptLabel: string;
    clearAllLabel: string;
    clearConfirm: string;
    lessonLinkLabel: string;
    savedAtLabel: string;
  };
}

export function ReflectionsBoard({ lang, lessonTitles, labels }: ReflectionsBoardProps) {
  const { user } = useAuth();
  const [entries, setEntries] = useState<ReflectionEntry[]>([]);

  useEffect(() => {
    const client = getSupabaseBrowserClient();

    function loadLocalEntries() {
      const state = readReflectionsState();
      setEntries(
        Object.values(state).sort(
          (a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime(),
        ),
      );
    }

    async function loadEntries() {
      if (!user) {
        loadLocalEntries();
        return;
      }

      const remoteEntries = await loadSupabaseReflections(client, user.id);
      setEntries(remoteEntries);
    }

    loadEntries().catch((error) => {
      console.error("[Supabase] Failed to load reflections board:", error);
      loadLocalEntries();
    });
  }, [user]);

  function handleClearAll() {
    if (window.confirm(labels.clearConfirm)) {
      clearAllReflections();
      setEntries([]);

      if (!user) {
        return;
      }

      clearAllSupabaseReflections(getSupabaseBrowserClient(), user.id).catch((error) => {
        console.error("[Supabase] Failed to clear reflections:", error);
      });
    }
  }

  if (entries.length === 0) {
    return (
      <div className="documentary-card mt-8 px-8 py-14 text-center">
        <p className="text-base text-stonegray">{labels.emptyState}</p>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleClearAll}
          className="text-sm text-stonegray underline underline-offset-4 transition hover:text-terracotta"
        >
          {labels.clearAllLabel}
        </button>
      </div>
      {entries.map((entry) => (
        <article key={entry.lessonSlug} className="documentary-card p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
            {lessonTitles[entry.lessonSlug] ?? entry.lessonSlug}
          </p>
          <p className="mt-4 text-sm italic leading-7 text-stonegray">
            {labels.promptLabel}: {entry.prompt}
          </p>
          <p className="mt-4 text-base leading-8 text-deepearth">{entry.text}</p>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-stonegray/70">
              {labels.savedAtLabel}: {new Date(entry.savedAt).toLocaleDateString()}
            </p>
            <Link
              href={`/${lang}/lesson/${entry.lessonSlug}`}
              className="text-sm text-terracotta underline underline-offset-4 transition hover:text-deepearth"
            >
              {labels.lessonLinkLabel}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
