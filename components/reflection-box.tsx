"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useAuth } from "@/components/auth-provider";
import { getReflectionEntry, saveReflectionEntry } from "@/lib/reflections";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import {
  loadSupabaseReflectionByLesson,
  saveSupabaseReflection,
} from "@/lib/supabase/reflections";
import { saveSupabaseLessonNote } from "@/lib/supabase/progress";

interface ReflectionBoxProps {
  lessonSlug: string;
  prompt: string;
  lang: string;
  labels: {
    reflectionHeading: string;
    reflectionEntryLabel: string;
    reflectionPlaceholder: string;
    reflectionSaveLabel: string;
    reflectionSavedLabel: string;
    viewReflectionsLabel: string;
  };
}

export function ReflectionBox({ lessonSlug, prompt, lang, labels }: ReflectionBoxProps) {
  const { user } = useAuth();
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const client = getSupabaseBrowserClient();

    async function loadEntry() {
      if (!user) {
        const localEntry = getReflectionEntry(lessonSlug);
        if (localEntry) {
          setText(localEntry.text);
          setSaved(true);
        }
        return;
      }

      const remoteEntry = await loadSupabaseReflectionByLesson(client, user.id, lessonSlug);
      if (remoteEntry) {
        setText(remoteEntry.text);
        setSaved(true);
      }
    }

    loadEntry().catch((error) => {
      console.error("[Supabase] Failed to load reflection entry:", error);
      const entry = getReflectionEntry(lessonSlug);
      if (entry) {
        setText(entry.text);
        setSaved(true);
      }
    });
  }, [lessonSlug, user]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
    setSaved(false);
  }

  function handleSave() {
    if (!text.trim()) return;
    const entry = {
      lessonSlug,
      prompt,
      text,
      savedAt: new Date().toISOString(),
    };
    saveReflectionEntry(entry);
    setSaved(true);

    if (!user) {
      return;
    }

    const client = getSupabaseBrowserClient();
    Promise.all([
      saveSupabaseReflection(client, user.id, entry),
      saveSupabaseLessonNote(client, user.id, lessonSlug, text),
    ]).catch((error) => {
      console.error("[Supabase] Failed to save reflection entry:", error);
    });
  }

  return (
    <div className="documentary-card p-8">
      <h2 className="headline-font text-3xl text-deepearth">{labels.reflectionHeading}</h2>
      <p className="mt-4 text-base italic leading-8 text-stonegray">{prompt}</p>
      <div className="mt-5">
        <label htmlFor={`reflection-${lessonSlug}`} className="sr-only">
          {labels.reflectionEntryLabel}
        </label>
        <textarea
          id={`reflection-${lessonSlug}`}
          value={text}
          onChange={handleChange}
          placeholder={labels.reflectionPlaceholder}
          rows={5}
          className="w-full resize-none rounded-2xl border border-deepearth/15 bg-white/80 p-4 text-sm text-deepearth placeholder-stonegray/70 outline-none ring-terracotta/40 transition focus:ring-2"
        />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleSave}
          disabled={!text.trim()}
          className="rounded-full bg-terracotta px-5 py-2 text-sm font-semibold text-cloudwhite transition hover:bg-deepearth disabled:opacity-40"
        >
          {saved ? labels.reflectionSavedLabel : labels.reflectionSaveLabel}
        </button>
        {saved && (
          <Link
            href={`/${lang}/reflections`}
            className="text-sm text-terracotta underline underline-offset-4 transition hover:text-deepearth"
          >
            {labels.viewReflectionsLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
