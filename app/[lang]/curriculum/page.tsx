import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import { LibrarySearch } from "@/components/library-search";
import { getContent, isLanguage } from "@/lib/content";

export default async function CurriculumPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const content = getContent(lang);

  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="documentary-card p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.brand.promise}</p>
          <h1 className="headline-font mt-4 text-5xl text-deepearth">{content.curriculum.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stonegray">{content.curriculum.intro}</p>
        </div>
      </section>

      {/* Modules */}
      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10 lg:pb-16">
        <div className="space-y-10">
          {content.curriculum.modules.map((module, moduleIndex) => {
            const moduleLessons = module.lessonSlugs
              .map((slug) => content.lessons.find((l) => l.slug === slug))
              .filter(Boolean);

            return (
              <div key={module.title}>
                {/* Module header */}
                <div className="mb-5">
                  <p className="text-xs uppercase tracking-[0.34em] text-stonegray">
                    {content.pumaPath.stepLabel} {moduleIndex + 1}
                  </p>
                  <h2 className="headline-font mt-2 text-3xl text-deepearth">{module.title}</h2>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-stonegray">{module.description}</p>
                </div>

                {/* Lesson cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {moduleLessons.map((lesson) => {
                    if (!lesson) return null;
                    return (
                      <article key={lesson.slug} className="documentary-card flex flex-col gap-4 p-6">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
                            {lesson.kicker} · {lesson.duration} ·{" "}
                            {content.library.topics[lesson.topic] ?? lesson.topic}
                          </p>
                          <h3 className="headline-font mt-3 text-2xl text-deepearth">{lesson.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-stonegray">{lesson.description}</p>
                        </div>
                        <Link
                          href={`/${lang}/lesson/${lesson.slug}`}
                          className="mt-auto w-fit rounded-full bg-deepearth px-5 py-2 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta"
                        >
                          {content.curriculum.viewLessonLabel}
                        </Link>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Filter/search — reuse Library component */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="documentary-card p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.home.libraryLabel}</p>
          <h2 className="headline-font mt-3 text-3xl text-deepearth">{content.library.title}</h2>
          <p className="mt-3 text-base leading-7 text-stonegray">{content.library.intro}</p>
        </div>
        <Suspense>
          <LibrarySearch
            lessons={content.lessons}
            library={content.library}
            lang={lang}
          />
        </Suspense>
      </section>
    </div>
  );
}
