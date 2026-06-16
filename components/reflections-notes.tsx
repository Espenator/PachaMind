"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { readReflectionNotes, writeReflectionNote } from "@/lib/reflections";
import type { Lesson } from "@/lib/types";

interface ReflectionPromptCardProps {
  lesson: Lesson;
  labels: {
    noteLabel: string;
    notePlaceholder: string;
    saveLabel: string;
    savedLabel: string;
    clearLabel: string;
    storageHint: string;
  };
}

function ReflectionPromptCard({ lesson, labels }: ReflectionPromptCardProps) {
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function loadNote() {
      const notes = readReflectionNotes();
      setNote(notes[lesson.slug] ?? "");
    }
    loadNote();
  }, [lesson.slug]);

  const persistNote = useCallback(
    (value: string) => {
      writeReflectionNote(lesson.slug, value);
      setSaved(true);
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
      }
      saveTimerRef.current = setTimeout(() => setSaved(false), 2000);
    },
    [lesson.slug],
  );

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setNote(e.target.value);
    setSaved(false);
  }

  function handleSave() {
    persistNote(note);
  }

  function handleClear() {
    setNote("");
    writeReflectionNote(lesson.slug, "");
    setSaved(false);
  }

  const textareaId = `reflection-note-${lesson.slug}`;

  return (
    <article className="documentary-card flex flex-col gap-6 p-8">
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">{lesson.kicker}</p>
        <h2 className="headline-font mt-3 text-3xl text-deepearth">{lesson.title}</h2>
      </header>

      <blockquote className="rounded-2xl bg-cloudwhite px-6 py-5">
        <p className="text-base italic leading-8 text-deepearth">{lesson.reflectionPrompt}</p>
      </blockquote>

      <div className="flex flex-col gap-3">
        <label htmlFor={textareaId} className="text-sm font-semibold text-deepearth">
          {labels.noteLabel}
        </label>
        <textarea
          id={textareaId}
          value={note}
          onChange={handleChange}
          placeholder={labels.notePlaceholder}
          rows={5}
          className="w-full resize-y rounded-2xl border border-deepearth/10 bg-cloudwhite px-5 py-4 text-base leading-7 text-deepearth placeholder:text-stonegray/60 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
        />
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs text-stonegray">{labels.storageHint}</p>
          <div className="flex items-center gap-3">
            {note.trim().length > 0 && (
              <button
                type="button"
                onClick={handleClear}
                className="rounded-full border border-deepearth/10 px-4 py-2 text-sm font-medium text-stonegray transition hover:border-terracotta hover:text-terracotta"
              >
                {labels.clearLabel}
              </button>
            )}
            <button
              type="button"
              onClick={handleSave}
              aria-live="polite"
              className="rounded-full bg-deepearth px-5 py-2 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta"
            >
              {saved ? labels.savedLabel : labels.saveLabel}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

interface ReflectionsNotesProps {
  lessons: Lesson[];
  labels: {
    promptsHeading: string;
    noteLabel: string;
    notePlaceholder: string;
    saveLabel: string;
    savedLabel: string;
    clearLabel: string;
    storageHint: string;
  };
}

export function ReflectionsNotes({ lessons, labels }: ReflectionsNotesProps) {
  return (
    <section aria-labelledby="prompts-heading">
      <h2
        id="prompts-heading"
        className="headline-font mb-8 text-4xl text-deepearth"
      >
        {labels.promptsHeading}
      </h2>
      <div className="grid gap-8 lg:grid-cols-2">
        {lessons.map((lesson) => (
          <ReflectionPromptCard key={lesson.slug} lesson={lesson} labels={labels} />
        ))}
      </div>
    </section>
  );
}
