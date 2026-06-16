"use client";

import { useReducer, useState } from "react";

interface VideoPlayerProps {
  youtubeId: string;
  title: string;
  fullBleed?: boolean;
}

export function VideoPlayer({ youtubeId, title, fullBleed = false }: VideoPlayerProps) {
  const [activated, activate] = useReducer(() => true, false);
  const [captionsOn, setCaptionsOn] = useState(false);

  const posterUrl = `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&autoplay=1&cc_load_policy=${captionsOn ? 1 : 0}`;

  const outerCls = fullBleed
    ? "relative w-full overflow-hidden"
    : "overflow-hidden rounded-[1.75rem] border border-white/20 bg-deepearth/90 shadow-[0_24px_60px_rgba(36,25,21,0.24)]";

  return (
    <div className={outerCls}>
      <div className="relative aspect-video w-full bg-deepearth">
        {activated ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <>
            {/* Blurred poster background */}
            <div
              className="absolute inset-0 scale-105 overflow-hidden bg-cover bg-center blur-sm brightness-75"
              style={{ backgroundImage: `url(${posterUrl})` }}
              aria-hidden
            />
            {/* Gradient scrim */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-deepearth/80 via-deepearth/20 to-transparent"
              aria-hidden
            />
            {/* Playfair title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 pb-6">
              <p className="headline-font line-clamp-2 text-xl leading-snug text-cloudwhite drop-shadow-md">
                {title}
              </p>
            </div>
            {/* Play button */}
            <button
              type="button"
              aria-label={`Play ${title}`}
              onClick={activate}
              className="group absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-terracotta/90 shadow-xl ring-2 ring-white/30 transition-transform duration-200 group-hover:scale-110 group-focus-visible:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                  className="h-7 w-7 translate-x-0.5 text-cloudwhite"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </>
        )}
      </div>

      {/* CC toggle — only before activation so users can pre-select; YouTube's own controls handle it after */}
      {!activated && (
        <div className="flex items-center justify-end gap-2 px-4 py-2">
          <button
            type="button"
            aria-pressed={captionsOn}
            onClick={() => setCaptionsOn((v) => !v)}
            className="flex h-11 min-w-[44px] items-center gap-1.5 rounded-full border border-deepearth/10 bg-cloudwhite/80 px-4 text-xs font-medium text-stonegray transition hover:bg-cloudwhite"
          >
            <span aria-hidden>CC</span>
            <span>{captionsOn ? "on" : "off"}</span>
          </button>
        </div>
      )}
    </div>
  );
}
