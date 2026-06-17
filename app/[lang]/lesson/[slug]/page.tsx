import Link from "next/link";
import { notFound } from "next/navigation";

import { LessonProgressButton } from "@/components/lesson-progress-button";
import { VideoEmbed } from "@/components/video-embed";
import { getContent, getLesson, isLanguage } from "@/lib/content";
import { languages } from "@/lib/types";

export async function generateStaticParams() {
  return languages.flatMap((lang) => {
    const content = getContent(lang);
    return content.lessons.map((lesson) => ({
      lang,
      slug: lesson.slug,
    }));
  });
}

const TOPIC_CHIP: Record<string, string> = {
  listening:   "bg-sky/15 text-sky ring-1 ring-sky/30",
  reciprocity: "bg-moss/15 text-moss ring-1 ring-moss/30",
  ritual:      "bg-terracotta/15 text-terracotta ring-1 ring-terracotta/30",
  stewardship: "bg-gold/15 text-deepearth ring-1 ring-gold/30",
};

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const content = getContent(lang);
  const lesson  = getLesson(lang, slug);

  if (!lesson) {
    notFound();
  }

  const nextLessonIndex = content.lessons.findIndex((entry) => entry.slug === lesson.slug) + 1;
  const nextLesson      = content.lessons[nextLessonIndex];

  return (
    <div className="pb-16">
      {/* ── Breadcrumb ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-10">
        <Link
          href={`/${lang}/library`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-terracotta transition hover:text-deepearth focus-gold"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
          </svg>
          {content.lessonPage.backToLibrary}
        </Link>
      </div>

      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">

          {/* ── Main column ─────────────────────────────────────────── */}
          <div className="space-y-7">

            {/* Lesson header */}
            <div className="documentary-card grain p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${lesson.topic ? (TOPIC_CHIP[lesson.topic] ?? "bg-sand text-stonegray") : "bg-sand text-stonegray"}`}
                >
                  {lesson.topic ? (content.library.topics[lesson.topic] ?? lesson.topic) : lesson.topic}
                </span>
                <p className="text-xs uppercase tracking-[0.28em] text-stonegray/70">
                  {lesson.kicker}&ensp;·&ensp;{lesson.duration}
                </p>
              </div>
              <h1 className="headline-font mt-4 text-fluid-4xl leading-[1.1] text-deepearth">
                {lesson.title}
              </h1>
              <p className="mt-4 text-fluid-lg leading-[1.72] text-stonegray max-w-[62ch]">
                {lesson.description}
              </p>
            </div>

            {/* ── VIDEO — leads the lesson ────────────────────────── */}
            <section aria-labelledby="watch-heading">
              <p
                id="watch-heading"
                className="mb-4 text-xs font-medium uppercase tracking-[0.34em] text-stonegray/60"
              >
                {content.lessonPage.watchHeading}
              </p>
              <VideoEmbed lesson={lesson} priority />
            </section>

            {/* Extended description */}
            <div className="documentary-card p-7 sm:p-9">
              <p className="text-fluid-base leading-[1.78] text-stonegray max-w-[66ch]">
                {lesson.extendedDescription}
              </p>
            </div>

            {/* Learning notes */}
            <section aria-labelledby="notes-heading" className="documentary-card p-7 sm:p-9">
              <h2
                id="notes-heading"
                className="headline-font text-fluid-2xl text-deepearth"
              >
                {content.lessonPage.notesHeading}
              </h2>
              <ul className="mt-5 space-y-3" role="list">
                {lesson.learningNotes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-3 rounded-2xl bg-sand/50 px-5 py-4 text-fluid-base leading-[1.72] text-deepearth"
                  >
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    {note}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* ── Sidebar ──────────────────────────────────────────────── */}
          <aside className="space-y-6 lg:pt-0">

            {/* Progress button */}
            <LessonProgressButton
              key={lesson.slug}
              slug={lesson.slug}
              markCompleteLabel={content.lessonPage.markComplete}
              markIncompleteLabel={content.lessonPage.markIncomplete}
              completedLabel={content.lessonPage.completedLabel}
              hint={content.lessonPage.progressHint}
            />

            {/* Reflection prompt */}
            <section
              aria-labelledby="reflection-heading"
              className="documentary-card p-7 sm:p-8"
            >
              <h2
                id="reflection-heading"
                className="headline-font text-fluid-xl text-deepearth"
              >
                {content.lessonPage.reflectionHeading}
              </h2>
              <p className="mt-4 text-fluid-base leading-[1.78] text-stonegray">
                {lesson.reflectionPrompt}
              </p>
            </section>

            {/* Navigation */}
            <div className="documentary-card flex flex-col gap-3 p-6">
              <Link
                href={`/${lang}/dashboard`}
                className="rounded-full border border-deepearth/12 bg-white/70 px-5 py-3 text-center text-sm font-semibold text-deepearth transition hover:bg-sky hover:text-cloud focus-gold min-h-[44px] flex items-center justify-center"
              >
                {content.lessonPage.dashboardLabel}
              </Link>
              {nextLesson ? (
                <Link
                  href={`/${lang}/lesson/${nextLesson.slug}`}
                  className="rounded-full bg-deepearth px-5 py-3 text-center text-sm font-semibold text-cloud transition hover:bg-terracotta focus-gold min-h-[44px] flex items-center justify-center gap-2"
                >
                  {content.lessonPage.nextLessonLabel}
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 flex-shrink-0" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                  </svg>
                </Link>
              ) : null}
            </div>

            {/* Promise reminder */}
            <div className="rounded-[1.5rem] bg-sand/60 px-6 py-5 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-terracotta">
                {content.brand.promise}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
