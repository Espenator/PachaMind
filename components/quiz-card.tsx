"use client";

import { useState } from "react";

import { track } from "@/lib/analytics";
import type { QuizQuestion } from "@/lib/types";

interface QuizCardProps {
  quiz: QuizQuestion;
  heading: string;
  submitLabel: string;
  correctLabel: string;
  incorrectLabel: string;
  tryAgainLabel: string;
}

export function QuizCard({
  quiz,
  heading,
  submitLabel,
  correctLabel,
  incorrectLabel,
  tryAgainLabel,
}: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = submitted && selected === quiz.correctIndex;

  function handleSubmit() {
    if (selected === null) return;
    setSubmitted(true);
    if (selected === quiz.correctIndex) {
      track("quiz_completed", { quizId: quiz.id });
    }
  }

  function handleRetry() {
    setSubmitted(false);
    setSelected(null);
  }

  return (
    <div className="documentary-card p-8">
      <h2 className="headline-font text-2xl text-deepearth">{heading}</h2>
      <p className="mt-4 text-base leading-7 text-deepearth">{quiz.prompt}</p>

      <fieldset className="mt-5 flex flex-col gap-3">
        <legend className="sr-only">{quiz.prompt}</legend>
        {quiz.options.map((option, index) => {
          const id = `${quiz.id}-option-${index}`;
          const showAsCorrect = submitted && index === quiz.correctIndex;
          const showAsWrong =
            submitted && index === selected && index !== quiz.correctIndex;
          return (
            <label
              key={id}
              htmlFor={id}
              className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-5 py-3 text-base transition ${
                showAsCorrect
                  ? "border-skyblue bg-skyblue/10"
                  : showAsWrong
                    ? "border-terracotta bg-terracotta/10"
                    : "border-deepearth/10 bg-cloudwhite hover:border-terracotta/40"
              }`}
            >
              <input
                id={id}
                type="radio"
                name={quiz.id}
                checked={selected === index}
                disabled={submitted}
                onChange={() => setSelected(index)}
                className="h-4 w-4 text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              />
              <span className="text-deepearth">{option}</span>
            </label>
          );
        })}
      </fieldset>

      {submitted ? (
        <div className="mt-5" role="status" aria-live="polite">
          <p
            className={`text-base font-semibold ${
              isCorrect ? "text-skyblue" : "text-terracotta"
            }`}
          >
            {isCorrect ? correctLabel : incorrectLabel}
          </p>
          <p className="mt-2 text-sm leading-6 text-stonegray">{quiz.explanation}</p>
          {!isCorrect ? (
            <button
              type="button"
              onClick={handleRetry}
              className="mt-4 rounded-full border border-deepearth/15 px-5 py-2 text-sm font-semibold text-deepearth transition hover:bg-deepearth hover:text-cloudwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              {tryAgainLabel}
            </button>
          ) : null}
        </div>
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={selected === null}
          className="mt-5 rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-deepearth disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deepearth"
        >
          {submitLabel}
        </button>
      )}
    </div>
  );
}
