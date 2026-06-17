"use client";

import Image from "next/image";
import { useMemo, useReducer, useState } from "react";

import { getImagePlaceholderProps } from "@/lib/media";

interface VideoPlayerProps {
  youtubeId: string;
  title: string;
  posterSrc: string;
  kicker?: string;
  duration?: string;
  priority?: boolean;
  fullBleed?: boolean;
}

export function VideoPlayer({
  youtubeId,
  title,
  posterSrc,
  kicker,
  duration,
  priority = false,
  fullBleed = false,
}: VideoPlayerProps) {
  const [activated, activate] = useReducer(() => true, false);
  const [captionsOn, setCaptionsOn] = useState(false);

  const embedUrl = useMemo(
    () =>
      `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&autoplay=1&cc_load_policy=${captionsOn ? 1 : 0}`,
    [captionsOn, youtubeId],
  );

  const outerClassName = fullBleed
    ? "relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-deepearth/90 shadow-[0_24px_60px_rgba(36,25,21,0.24)]"
    : "overflow-hidden rounded-[1.75rem] border border-white/20 bg-deepearth/90 shadow-[0_24px_60px_rgba(36,25,21,0.24)]";

  return (
    <div className={outerClassName}>
      <div className="relative aspect-video w-full bg-deepearth">
        {activated ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={embedUrl}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            aria-label={`Play ${title}`}
            onClick={activate}
            className="group absolute inset-0 flex w-full items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-goldmoun focus-visible:ring-offset-2 focus-visible:ring-offset-deepearth"
          >
            <Image
              fill
              src={posterSrc}
              alt={title}
              priority={priority}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              {...getImagePlaceholderProps(posterSrc)}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-deepearth/80 via-deepearth/30 to-deepearth/10"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              {(kicker || duration) && (
                <p className="text-xs uppercase tracking-[0.3em] text-goldmoun/90">
                  {[kicker, duration].filter(Boolean).join(" · ")}
                </p>
              )}
              <p className="headline-font mt-2 line-clamp-2 text-fluid-xl text-cloudwhite">
                {title}
              </p>
            </div>
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-goldmoun text-deepearth shadow-[0_8px_32px_rgba(43,27,18,0.45)] transition-all duration-200 group-hover:scale-110 group-hover:bg-terracotta group-hover:text-cloudwhite sm:h-20 sm:w-20">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-7 w-7 translate-x-0.5 sm:h-9 sm:w-9"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {!activated && (
        <div className="flex items-center justify-end gap-2 bg-cloudwhite/80 px-4 py-2">
          <button
            type="button"
            aria-pressed={captionsOn}
            onClick={() => setCaptionsOn((value) => !value)}
            className="flex min-h-[44px] min-w-[44px] items-center gap-1.5 rounded-full border border-deepearth/10 px-4 text-xs font-medium text-stonegray transition hover:bg-cloudwhite hover:text-deepearth"
          >
            <span aria-hidden="true">CC</span>
            <span>{captionsOn ? "on" : "off"}</span>
          </button>
        </div>
      )}
    </div>
  );
}
