"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { getImagePlaceholderProps } from "@/lib/media";

interface VideoHeroProps {
  posterSrc: string;
  mp4Src?: string;
  webmSrc?: string;
  kicker: string;
  title: string;
  intro: string;
  actions?: React.ReactNode;
}

function readReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function readSaveData() {
  if (typeof navigator === "undefined") return false;
  const connection = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection;
  return connection?.saveData ?? false;
}

export function VideoHero({
  posterSrc,
  mp4Src,
  webmSrc,
  kicker,
  title,
  intro,
  actions,
}: VideoHeroProps) {
  const [reducedMotion] = useState<boolean>(readReducedMotion);
  const [saveData] = useState<boolean>(readSaveData);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const showVideo = Boolean((mp4Src || webmSrc) && !reducedMotion && !saveData);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch(() => undefined);
    }
  }, [showVideo]);

  function handleToggleMute() {
    const nextMuted = !muted;
    setMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  }

  return (
    <section className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-deepearth text-cloudwhite shadow-[0_28px_80px_rgba(36,25,21,0.28)]">
      <Image
        fill
        src={posterSrc}
        alt=""
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
        {...getImagePlaceholderProps(posterSrc)}
      />
      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          onCanPlay={() => setVideoLoaded(true)}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: videoLoaded ? 1 : 0 }}
          aria-hidden="true"
        >
          {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
          {mp4Src ? <source src={mp4Src} type="video/mp4" /> : null}
        </video>
      )}
      <div
        className="absolute inset-0 bg-gradient-to-t from-deepearth via-deepearth/75 to-deepearth/30"
        aria-hidden="true"
      />
      <div className="relative z-10 flex min-h-[76svh] flex-col justify-end px-6 pb-20 pt-24 sm:px-8 lg:px-12">
        <p className="text-xs uppercase tracking-[0.34em] text-goldmoun">{kicker}</p>
        <h1 className="headline-font mt-4 max-w-4xl text-fluid-5xl leading-tight">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-cloudwhite/88">{intro}</p>
        {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2" aria-hidden="true">
        <div className="scroll-cue" />
      </div>
      {showVideo ? (
        <button
          type="button"
          onClick={handleToggleMute}
          className="absolute bottom-6 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-deepearth/60 text-cloudwhite ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-deepearth/80"
          aria-label={muted ? "Unmute background video" : "Mute background video"}
        >
          {muted ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97V10.2l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
          )}
        </button>
      ) : null}
    </section>
  );
}
