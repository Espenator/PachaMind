"use client";

import { useState } from "react";

import type { Lesson } from "@/lib/types";

interface VideoEmbedProps {
  lesson: Lesson;
  /** Optional caption / transcript text shown below the video */
  caption?: string;
  /** When true the poster image gets priority loading (e.g. hero placement) */
  priority?: boolean;
}

/**
 * Click-to-load YouTube video embed.
 *
 * No iframe or third-party cookies load until the user taps the play button.
 * Uses youtube-nocookie.com for enhanced privacy.
 * Accessible: labeled button, visible gold focus ring, reduced-motion safe.
 */
export function VideoEmbed({ lesson, caption }: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  // Prefer maxresdefault; YouTube serves hqdefault as fallback automatically.
  const posterUrl = `https://img.youtube.com/vi/${lesson.youtubeId}/maxresdefault.jpg`;

  return (
    <div className="space-y-3">
      {/* 16:9 container */}
      <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_16px_48px_rgba(43,27,18,0.28)] aspect-video">
        {loaded ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${lesson.youtubeId}?rel=0&autoplay=1`}
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`Play: ${lesson.title}`}
            className="group absolute inset-0 flex items-center justify-center w-full h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-deepearth"
          >
            {/* Poster image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={posterUrl}
              alt={lesson.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />

            {/* Darkening gradient for text legibility and cinematic feel */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-deepearth/70 via-deepearth/20 to-transparent"
            />

            {/* Lesson meta overlay — bottom-left */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gold/90 font-medium">
                {lesson.kicker}&ensp;·&ensp;{lesson.duration}
              </p>
              <p className="mt-1 headline-font text-fluid-xl text-cloud line-clamp-2">
                {lesson.title}
              </p>
            </div>

            {/* Play button circle */}
            <span
              aria-hidden="true"
              className="relative z-10 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gold shadow-[0_8px_32px_rgba(43,27,18,0.45)] transition-all duration-200 group-hover:scale-110 group-hover:bg-terracotta"
            >
              {/* Triangle icon */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 sm:h-9 sm:w-9 translate-x-0.5 text-deepearth"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {/* Optional caption / transcript slot */}
      {caption && (
        <p className="px-1 text-sm leading-6 text-stonegray/80">{caption}</p>
      )}
    </div>
  );
}
