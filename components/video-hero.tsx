"use client";

import { useEffect, useRef, useState } from "react";

interface VideoHeroProps {
  posterSrc: string;
  videoSrc?: string;
  kicker: string;
  title: string;
  children?: React.ReactNode;
}

function readReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function readSaveData() {
  if (typeof navigator === "undefined") return false;
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return conn?.saveData ?? false;
}

export function VideoHero({ posterSrc, videoSrc, kicker, title, children }: VideoHeroProps) {
  const [reducedMotion] = useState<boolean>(readReducedMotion);
  const [saveData] = useState<boolean>(readSaveData);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const showVideo = !!videoSrc && !reducedMotion && !saveData;

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        /* autoplay policy blocked — poster stays visible */
      });
    }
  }, [showVideo]);

  function handleUnmute() {
    if (videoRef.current) {
      const next = !muted;
      videoRef.current.muted = next;
      setMuted(next);
    }
  }

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Poster background — always rendered as base layer (handles LCP) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${posterSrc})` }}
        aria-hidden
      />

      {/* Video layer — fades in when loaded, shown only when allowed */}
      {showVideo && (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          onCanPlayThrough={() => setVideoLoaded(true)}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: videoLoaded ? 1 : 0 }}
          aria-hidden
        />
      )}

      {/* Cinematic gradient: deep earth fills from bottom, fades up */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-deepearth via-deepearth/60 to-deepearth/20"
        aria-hidden
      />

      {/* Content positioned at bottom of viewport */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-24 pt-28 lg:px-10">
        <p className="text-xs uppercase tracking-[0.34em] text-goldmoun">{kicker}</p>
        <h1 className="headline-font mt-4 max-w-3xl text-5xl leading-tight text-cloudwhite lg:text-7xl">
          {title}
        </h1>
        {children && <div className="mt-6">{children}</div>}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2" aria-hidden>
        <div className="scroll-cue" />
      </div>

      {/* Tap-to-unmute (only visible when video is playing) */}
      {showVideo && (
        <button
          type="button"
          onClick={handleUnmute}
          className="absolute bottom-8 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-deepearth/60 text-cloudwhite ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-deepearth/80 lg:right-10"
          aria-label={muted ? "Unmute background video" : "Mute background video"}
        >
          {muted ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
              <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97V10.2l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
          )}
        </button>
      )}
    </section>
  );
}
