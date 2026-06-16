import Link from "next/link";
import type { Lesson } from "@/lib/types";
import { formatMinutes } from "@/lib/utils";

interface NextLessonCardProps {
  lesson: Lesson;
}

export function NextLessonCard({ lesson }: NextLessonCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "var(--color-stone-100)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div className="p-5 flex flex-col gap-3">
        <p
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--color-terra-500)" }}
        >
          Up next
        </p>
        <div className="flex gap-4 items-start">
          {/* Thumbnail */}
          <div
            className="w-20 aspect-video rounded-lg flex-shrink-0 overflow-hidden"
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
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <h4
              className="text-sm font-semibold leading-snug line-clamp-2"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
            >
              {lesson.title}
            </h4>
            <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>
              {formatMinutes(lesson.video.durationSeconds)}
            </p>
          </div>
        </div>
        <Link
          href={`/lessons/${lesson.slug}`}
          className="w-full text-center py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-85"
          style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
        >
          Continue the Puma Path
        </Link>
      </div>
    </div>
  );
}
