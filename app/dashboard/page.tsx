import { VideoCard } from "@/components/ui/VideoCard";
import { BadgeCard } from "@/components/ui/BadgeCard";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { SEED_LESSONS, SEED_BADGES, PATH_STAGES } from "@/lib/seed-data";
import { progressPercent } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Learning Dashboard",
  description: "Track your progress on the Puma Path.",
};

// Placeholder data representing a returning learner
const MOCK_COMPLETED_IDS = ["lesson-001", "lesson-002"];
const MOCK_EARNED_BADGE_IDS = ["badge-001"];
const MOCK_STAGE = "semilla";
const MOCK_STREAK = 3;

const completedLessons = SEED_LESSONS.filter((l) =>
  MOCK_COMPLETED_IDS.includes(l.id)
);
const savedLessons = SEED_LESSONS.slice(3, 6);
const currentLesson = SEED_LESSONS[2]; // "continue from here"
const todaysVideo = SEED_LESSONS[4];

const currentStage = PATH_STAGES.find((s) => s.slug === MOCK_STAGE)!;
const stagePercent = progressPercent(
  MOCK_COMPLETED_IDS.length,
  SEED_LESSONS.filter((l) => l.pathStage === MOCK_STAGE).length
);

export default function DashboardPage() {
  return (
    <div
      className="min-h-screen py-10"
      style={{ backgroundColor: "var(--color-stone-50, #FAFAF8)" }}
    >
      <div className="container-pm flex flex-col gap-10">
        {/* ── Welcome bar ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1
              className="text-2xl sm:text-3xl font-semibold"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
            >
              Welcome back
            </h1>
            <p className="text-sm mt-1" style={{ color: "var(--color-muted-foreground)" }}>
              Continue the Puma Path — you are at the{" "}
              <strong style={{ color: currentStage.color }}>{currentStage.name}</strong> stage.
            </p>
          </div>
          {/* Streak badge */}
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "var(--color-terra-100)",
              color: "var(--color-terra-700)",
            }}
          >
            <span aria-label="Streak" title="Current streak">🔥</span>
            {MOCK_STREAK}-day streak
          </div>
        </div>

        {/* ── Progress + Continue learning ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Progress ring */}
          <div
            className="flex flex-col items-center gap-4 p-6 rounded-2xl"
            style={{
              backgroundColor: "var(--color-paper-cream)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <ProgressRing
              percent={stagePercent}
              size={112}
              label={`${currentStage.name} stage`}
              sublabel={`${MOCK_COMPLETED_IDS.length} of ${SEED_LESSONS.filter((l) => l.pathStage === MOCK_STAGE).length} lessons`}
            />
            <p
              className="text-xs text-center leading-relaxed"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              {currentStage.description}
            </p>
            <div className="flex gap-1 flex-wrap justify-center">
              {PATH_STAGES.map((s) => (
                <span
                  key={s.slug}
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: s.slug === MOCK_STAGE ? s.color : "var(--color-stone-200)",
                  }}
                  title={s.name}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          {/* Continue learning */}
          <div
            className="lg:col-span-2 flex flex-col gap-4 p-6 rounded-2xl"
            style={{
              backgroundColor: "var(--color-paper-cream)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h2
              className="text-base font-semibold"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
            >
              Continue learning
            </h2>
            <VideoCard lesson={currentLesson} compact />
            <Link
              href={`/lessons/${currentLesson.slug}`}
              className="w-full text-center py-3 rounded-full text-sm font-medium mt-2 transition-opacity hover:opacity-85"
              style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
            >
              Continue the Puma Path
            </Link>
          </div>
        </div>

        {/* ── Today&apos;s video ── */}
        <section className="flex flex-col gap-4">
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            Today&apos;s lesson
          </h2>
          <div className="max-w-sm">
            <VideoCard lesson={todaysVideo} />
          </div>
        </section>

        {/* ── Badges ── */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2
              className="text-xl font-semibold"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
            >
              Badges
            </h2>
            <span
              className="text-sm"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              {MOCK_EARNED_BADGE_IDS.length} of {SEED_BADGES.length} earned
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {SEED_BADGES.map((badge) => (
              <BadgeCard
                key={badge.id}
                badge={badge}
                earned={MOCK_EARNED_BADGE_IDS.includes(badge.id)}
              />
            ))}
          </div>
        </section>

        {/* ── Completed lessons ── */}
        {completedLessons.length > 0 && (
          <section className="flex flex-col gap-4">
            <h2
              className="text-xl font-semibold"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
            >
              Completed
            </h2>
            <div className="flex flex-col gap-3">
              {completedLessons.map((lesson) => (
                <VideoCard key={lesson.id} lesson={lesson} compact />
              ))}
            </div>
          </section>
        )}

        {/* ── Saved lessons ── */}
        <section className="flex flex-col gap-4">
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            Saved for later
          </h2>
          <div className="flex flex-col gap-3">
            {savedLessons.map((lesson) => (
              <VideoCard key={lesson.id} lesson={lesson} compact />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
