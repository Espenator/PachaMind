"use client";

import { useState } from "react";

interface TranscriptDrawerProps {
  heading: string;
  openLabel: string;
  closeLabel: string;
  body: string;
}

export function TranscriptDrawer({
  heading,
  openLabel,
  closeLabel,
  body,
}: TranscriptDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="documentary-card p-6 lg:p-8">
      <div className="flex items-center justify-between gap-4">
        <h2 className="headline-font text-2xl text-deepearth">{heading}</h2>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="lesson-transcript"
          className="rounded-full border border-deepearth/15 px-4 py-2 text-sm font-semibold text-deepearth transition hover:bg-deepearth hover:text-cloudwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          {open ? closeLabel : openLabel}
        </button>
      </div>
      {open ? (
        <p
          id="lesson-transcript"
          className="mt-5 text-base leading-7 text-stonegray"
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
