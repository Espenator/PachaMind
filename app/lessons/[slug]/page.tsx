import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SEED_LESSONS } from "@/lib/seed-data";
import { VideoPlayer } from "@/components/lesson/VideoPlayer";
import { ReflectionPrompt } from "@/components/lesson/ReflectionPrompt";
import { NextLessonCard } from "@/components/lesson/NextLessonCard";
import { formatMinutes } from "@/lib/utils";

interface LessonPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SEED_LESSONS.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata(
  { params }: LessonPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const lesson = SEED_LESSONS.find((l) => l.slug === slug);
  if (!lesson) return { title: "Lesson not found" };
  return {
    title: lesson.title,
    description: lesson.summary,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = SEED_LESSONS.find((l) => l.slug === slug);
  if (!lesson) notFound();

  const currentIndex = SEED_LESSONS.findIndex((l) => l.slug === slug);
  const nextLesson = SEED_LESSONS[currentIndex + 1] ?? null;

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-paper-white)" }}
    >
      {/* Breadcrumb */}
      <div
        className="border-b py-3"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="container-pm flex items-center gap-2 text-xs" style={{ color: "var(--color-muted-foreground)" }}>
          <Link href="/videos" className="hover:opacity-70 transition-opacity">
            Video Library
          </Link>
          <span aria-hidden="true">›</span>
          <span
            className={`stage-${lesson.pathStage} font-medium`}
          >
            {lesson.pathStage.charAt(0).toUpperCase() + lesson.pathStage.slice(1)}
          </span>
          <span aria-hidden="true">›</span>
          <span className="truncate max-w-xs" style={{ color: "var(--color-foreground)" }}>
            {lesson.title}
          </span>
        </div>
      </div>

      <div className="container-pm py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* ── Main column ── */}
          <div className="flex-1 flex flex-col gap-8 min-w-0">
            {/* Lesson title */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full stage-${lesson.pathStage}`}
                  style={{ backgroundColor: "var(--color-stone-100)" }}
                >
                  {lesson.pathStage.charAt(0).toUpperCase() + lesson.pathStage.slice(1)}
                </span>
                <span className="text-xs" style={{ color: "var(--color-muted)" }}>
                  {formatMinutes(lesson.video.durationSeconds)}
                </span>
              </div>
              <h1
                className="text-2xl sm:text-3xl font-semibold leading-snug"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
              >
                {lesson.title}
              </h1>
              <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>
                Taught by {lesson.author}
              </p>
            </div>

            {/* Video player */}
            <VideoPlayer video={lesson.video} title={lesson.title} />

            {/* Summary */}
            <div className="flex flex-col gap-3">
              <h2
                className="text-lg font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
              >
                About this lesson
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                {lesson.summary}
              </p>
              {lesson.body && (
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--color-muted-foreground)" }}
                >
                  {lesson.body}
                </p>
              )}
            </div>

            {/* Reflection */}
            {lesson.reflectionPrompts.length > 0 && (
              <ReflectionPrompt
                prompts={lesson.reflectionPrompts}
                lessonTitle={lesson.title}
              />
            )}
          </div>

          {/* ── Sidebar ── */}
          <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 flex flex-col gap-6">
            {/* Progress save nudge */}
            <div
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{
                backgroundColor: "var(--color-paper-cream)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h3
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
              >
                Save your place
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                Create a free account to track progress, earn badges, and
                continue the Puma Path.
              </p>
              <Link
                href="/signup"
                className="w-full text-center py-3 rounded-full text-sm font-medium"
                style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
              >
                Start free
              </Link>
            </div>

            {/* Next lesson */}
            {nextLesson && <NextLessonCard lesson={nextLesson} />}

            {/* Attribution */}
            <div
              className="rounded-xl p-4 text-xs leading-relaxed"
              style={{
                backgroundColor: "var(--color-stone-100)",
                color: "var(--color-muted-foreground)",
              }}
            >
              <p>
                <strong style={{ color: "var(--color-foreground)" }}>
                  Cultural attribution:
                </strong>{" "}
                All teachings are attributed to Mallku Aribalo (James Arevalo
                Merejildo), Andean tradition-holder and educator.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
