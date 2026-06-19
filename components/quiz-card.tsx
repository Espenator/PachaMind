"use client";

import { useState } from "react";

import { trackEvent } from "@/lib/analytics/events";
import type { QuizQuestion, SiteContent } from "@/lib/types";

interface QuizCardProps {
  lessonSlug: string;
  question: QuizQuestion;
  labels: SiteContent["quiz"];
}

export function QuizCard({ lessonSlug, question, labels }: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = submitted && selected === question.correctIndex;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (selected === null) return;
    setSubmitted(true);
    trackEvent("quiz_completed", {
      lessonSlug,
      questionId: question.id,
      correct: selected === question.correctIndex,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="documentary-card p-8">
      <h2 className="headline-font text-3xl text-deepearth">{labels.heading}</h2>
      <fieldset className="mt-5">
        <legend className="text-base leading-7 text-stonegray">{question.prompt}</legend>
        <div className="mt-4 flex flex-col gap-3">
          {question.options.map((option, index) => (
            <label
              key={option}
              className="flex items-start gap-3 rounded-2xl bg-cloudwhite px-5 py-4 text-base text-deepearth"
            >
              <input
                type="radio"
                name={`quiz-${lessonSlug}-${question.id}`}
                checked={selected === index}
                disabled={submitted}
                onChange={() => setSelected(index)}
                className="mt-1 h-4 w-4 text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {submitted ? (
        <div className="mt-5" role="status">
          <p className={isCorrect ? "font-semibold text-skyblue" : "font-semibold text-terracotta"}>
            {isCorrect ? labels.correctLabel : labels.incorrectLabel}
          </p>
          <p className="mt-2 text-base leading-7 text-stonegray">{question.explanation}</p>
          {!isCorrect ? (
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setSelected(null);
              }}
              className="mt-4 rounded-full border border-deepearth/15 px-5 py-2 text-sm font-semibold transition hover:bg-skyblue hover:text-cloudwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              {labels.tryAgainLabel}
            </button>
          ) : null}
        </div>
      ) : (
        <button
          type="submit"
          disabled={selected === null}
          className="mt-6 rounded-full bg-deepearth px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          {labels.submitLabel}
        </button>
      )}
    </form>
  );
}
