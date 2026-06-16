"use client";

import { useState } from "react";
import type { ReflectionPrompt as ReflectionPromptType } from "@/lib/types";

interface ReflectionPromptProps {
  prompts: ReflectionPromptType[];
  lessonTitle: string;
}

export function ReflectionPrompt({ prompts, lessonTitle }: ReflectionPromptProps) {
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState("");
  const prompt = prompts[0];

  if (!prompt) return null;

  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{
        backgroundColor: "var(--color-paper-cream)",
        boxShadow: "var(--shadow-card)",
        borderLeft: "4px solid var(--color-terra-400)",
      }}
    >
      <div>
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-2"
          style={{ color: "var(--color-terra-600)" }}
        >
          Reflection
        </p>
        <h3
          className="text-base font-semibold leading-snug"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
        >
          {prompt.prompt}
        </h3>
        {prompt.guidance && (
          <p
            className="mt-2 text-sm italic leading-relaxed"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            {prompt.guidance}
          </p>
        )}
      </div>

      {!submitted ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (value.trim()) setSubmitted(true);
          }}
          className="flex flex-col gap-3"
        >
          <label className="sr-only" htmlFor={`reflection-${prompt.id}`}>
            Your reflection on: {lessonTitle}
          </label>
          <textarea
            id={`reflection-${prompt.id}`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write your reflection here…"
            rows={4}
            className="w-full rounded-lg p-3 text-sm resize-none border transition-colors focus:outline-none"
            style={{
              backgroundColor: "var(--color-paper-white)",
              borderColor: "var(--color-border)",
              color: "var(--color-foreground)",
            }}
          />
          <button
            type="submit"
            disabled={!value.trim()}
            className="self-start px-5 py-2.5 rounded-full text-sm font-medium transition-opacity disabled:opacity-40"
            style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
          >
            Save reflection
          </button>
        </form>
      ) : (
        <div
          className="flex items-center gap-2 text-sm font-medium"
          style={{ color: "var(--color-sage-600)" }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
          Reflection saved. Well done.
        </div>
      )}
    </div>
  );
}
