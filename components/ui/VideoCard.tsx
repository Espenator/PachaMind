import Link from "next/link";
import type { Lesson } from "@/lib/types";
import { formatMinutes } from "@/lib/utils";

interface VideoCardProps {
  lesson: Lesson;
  /** Show the compact (horizontal) layout */
  compact?: boolean;
}

export function VideoCard({ lesson, compact = false }: VideoCardProps) {
  if (compact) {
    return (
      <Link
        href={`/lessons/${lesson.slug}`}
        className="flex gap-4 rounded-xl overflow-hidden transition-shadow hover:shadow-md group"
        style={{
          backgroundColor: "var(--color-paper-cream)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* Thumbnail */}
        <div
          className="relative flex-shrink-0 w-28 aspect-video rounded-l-xl overflow-hidden"
          style={{ backgroundColor: "var(--color-stone-300)" }}
        >
          {lesson.thumbnailUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={lesson.thumbnailUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          )}
          <PlayIcon />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center py-3 pr-4 gap-1">
          <StagePill stage={lesson.pathStage} />
          <h3
            className="text-sm font-semibold leading-snug line-clamp-2 group-hover:opacity-80"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            {lesson.title}
          </h3>
          <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>
            {formatMinutes(lesson.video.durationSeconds)}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/lessons/${lesson.slug}`}
      className="flex flex-col rounded-2xl overflow-hidden transition-shadow hover:shadow-lg group"
      style={{
        backgroundColor: "var(--color-paper-cream)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Thumbnail */}
      <div
        className="relative w-full aspect-video overflow-hidden"
        style={{ backgroundColor: "var(--color-stone-300)" }}
      >
        {lesson.thumbnailUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={lesson.thumbnailUrl}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <PlayIcon large />
        <DurationPill seconds={lesson.video.durationSeconds} />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-4">
        <StagePill stage={lesson.pathStage} />
        <h3
          className="text-base font-semibold leading-snug line-clamp-2 group-hover:opacity-80"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
        >
          {lesson.title}
        </h3>
        <p
          className="text-sm leading-relaxed line-clamp-2"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          {lesson.summary}
        </p>
        <p
          className="text-xs mt-1"
          style={{ color: "var(--color-muted)" }}
        >
          {lesson.author}
        </p>
      </div>
    </Link>
  );
}

function PlayIcon({ large = false }: { large?: boolean }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center`}
      aria-hidden="true"
    >
      <div
        className={`${large ? "w-14 h-14" : "w-10 h-10"} rounded-full flex items-center justify-center transition-opacity opacity-80 group-hover:opacity-100`}
        style={{ backgroundColor: "rgba(193,127,94,0.92)" }}
      >
        <svg
          className={`${large ? "w-5 h-5" : "w-4 h-4"} text-white ml-0.5`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M6.3 2.8A1.5 1.5 0 004 4.1v11.8a1.5 1.5 0 002.3 1.3l9-5.9a1.5 1.5 0 000-2.6l-9-5.9z" />
        </svg>
      </div>
    </div>
  );
}

function DurationPill({ seconds }: { seconds: number }) {
  return (
    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-xs font-medium text-white" style={{ backgroundColor: "rgba(0,0,0,0.65)" }}>
      {formatMinutes(seconds)}
    </div>
  );
}

function StagePill({ stage }: { stage: string }) {
  return (
    <span
      className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full stage-${stage}`}
      style={{ backgroundColor: "var(--color-stone-100)" }}
    >
      {stage.charAt(0).toUpperCase() + stage.slice(1)}
    </span>
  );
}
