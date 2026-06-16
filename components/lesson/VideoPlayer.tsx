"use client";

import { useState } from "react";
import type { Video } from "@/lib/types";

interface VideoPlayerProps {
  video: Video;
  title: string;
}

export function VideoPlayer({ video, title }: VideoPlayerProps) {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {/* Player */}
      <div
        className="video-container rounded-xl overflow-hidden"
        style={{ boxShadow: "var(--shadow-xl)" }}
      >
        <iframe
          src={video.url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Captions / Transcript toggle */}
      {video.transcript && (
        <div>
          <button
            onClick={() => setShowTranscript((s) => !s)}
            className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--color-accent)" }}
            aria-expanded={showTranscript}
          >
            <svg
              className={`w-4 h-4 transition-transform ${showTranscript ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {showTranscript ? "Hide transcript" : "Show transcript"}
          </button>

          {showTranscript && (
            <div
              className="mt-3 p-5 rounded-xl text-sm leading-relaxed"
              style={{
                backgroundColor: "var(--color-stone-100)",
                color: "var(--color-muted-foreground)",
              }}
            >
              <p className="whitespace-pre-line">{video.transcript}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
