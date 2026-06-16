import Link from "next/link";
import { notFound } from "next/navigation";

import { LessonProgressButton } from "@/components/lesson-progress-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { VideoHero } from "@/components/video-hero";
import { VideoPlayer } from "@/components/video-player";
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
  const lesson = getLesson(lang, slug);

  if (!lesson) {
    notFound();
  }

  const nextLessonIndex = content.lessons.findIndex((entry) => entry.slug === lesson.slug) + 1;
  const nextLesson = content.lessons[nextLessonIndex];

  const posterSrc = `https://i.ytimg.com/vi/${lesson.youtubeId}/maxresdefault.jpg`;

  return (
    <>
      {/* Cinematic lesson hero */}
      <VideoHero
        posterSrc={posterSrc}
        kicker={`${lesson.kicker} · ${lesson.duration}`}
        title={lesson.title}
      />

      <div className="mx-auto max-w-7xl px-6 py-10 pb-20 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-8">
            <ScrollReveal>
              <div className="documentary-card p-8 lg:p-10">
                <Link href={`/${lang}/library`} className="text-sm font-medium text-terracotta">
                  {content.lessonPage.backToLibrary}
                </Link>
                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-terracotta">
                  {lesson.kicker} · {lesson.duration}
                </p>
                <h1 className="headline-font mt-4 text-5xl leading-tight text-deepearth">{lesson.title}</h1>
                <p className="mt-5 text-lg leading-8 text-stonegray">{lesson.description}</p>
                <p className="mt-5 text-base leading-7 text-stonegray">{lesson.extendedDescription}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="documentary-card p-6 lg:p-8">
                <p className="sticky-heading text-xs uppercase tracking-[0.3em] text-stonegray lg:static lg:bg-transparent lg:backdrop-filter-none">
                  {content.lessonPage.watchHeading}
                </p>
                <div className="mt-4">
                  <VideoPlayer youtubeId={lesson.youtubeId} title={lesson.title} />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="documentary-card p-8">
                <h2 className="headline-font text-3xl text-deepearth">{content.lessonPage.notesHeading}</h2>
                <ul className="mt-5 space-y-4 text-base leading-7 text-deepearth">
                  {lesson.learningNotes.map((note) => (
                    <li key={note} className="rounded-2xl bg-cloudwhite px-5 py-4">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </section>

          <aside className="space-y-8">
            <ScrollReveal delay={60}>
              <LessonProgressButton
                key={lesson.slug}
                slug={lesson.slug}
                markCompleteLabel={content.lessonPage.markComplete}
                markIncompleteLabel={content.lessonPage.markIncomplete}
                completedLabel={content.lessonPage.completedLabel}
                hint={content.lessonPage.progressHint}
              />
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="documentary-card p-8">
                <h2 className="headline-font text-3xl text-deepearth">{content.lessonPage.reflectionHeading}</h2>
                <p className="mt-4 text-base leading-8 text-stonegray">{lesson.reflectionPrompt}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <div className="documentary-card flex flex-col gap-4 p-8">
                <Link
                  href={`/${lang}/dashboard`}
                  className="rounded-full border border-deepearth/10 px-5 py-3 text-center text-sm font-semibold transition hover:bg-skyblue hover:text-cloudwhite"
                >
                  {content.lessonPage.dashboardLabel}
                </Link>
                {nextLesson ? (
                  <Link
                    href={`/${lang}/lesson/${nextLesson.slug}`}
                    className="rounded-full bg-deepearth px-5 py-3 text-center text-sm font-semibold text-cloudwhite transition hover:bg-terracotta"
                  >
                    {content.lessonPage.nextLessonLabel}
                  </Link>
                ) : null}
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </div>
    </>
  );
}
