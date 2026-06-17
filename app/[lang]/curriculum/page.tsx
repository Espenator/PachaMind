import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import { LibrarySearch } from "@/components/library-search";
import { getContent, isLanguage } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  const content = getContent(lang);
  return {
    title: content.curriculum.title,
    description: content.curriculum.intro,
    openGraph: {
      title: content.curriculum.title,
      description: content.curriculum.intro,
      url: `${SITE_URL}/${lang}/curriculum`,
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}/curriculum`,
      languages: {
        en: `${SITE_URL}/en/curriculum`,
        es: `${SITE_URL}/es/curriculum`,
        "x-default": `${SITE_URL}/en/curriculum`,
      },
    },
  };
}

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
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="documentary-card p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.brand.promise}</p>
          <h1 className="headline-font mt-4 text-5xl text-deepearth">{content.curriculum.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stonegray">{content.curriculum.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10 lg:pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {content.curriculum.modules.map((module, index) => (
            <article key={module.title} className="documentary-card flex flex-col gap-5 p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-terracotta">
                  {content.pumaPath.stageLabel} {index + 1}
                </p>
                <h2 className="headline-font mt-3 text-3xl text-deepearth">{module.title}</h2>
                <p className="mt-4 text-base leading-7 text-stonegray">{module.description}</p>
              </div>
              <ul className="space-y-3">
                {module.lessonSlugs.map((slug) => {
                  const lesson = content.lessons.find((entry) => entry.slug === slug);
                  if (!lesson) return null;
                  return (
                    <li key={slug} className="rounded-[1.5rem] bg-cloudwhite px-5 py-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-stonegray">
                        {lesson.kicker} · {lesson.duration}
                      </p>
                      <p className="headline-font mt-2 text-xl text-deepearth">{lesson.title}</p>
                    </li>
                  );
                })}
              </ul>
              <Link
                href={`/${lang}/lesson/${module.lessonSlugs[0]}`}
                className="mt-auto inline-flex w-fit rounded-full bg-deepearth px-5 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta"
              >
                {content.curriculum.viewLessonLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <Suspense>
          <LibrarySearch lessons={content.lessons} library={content.library} lang={lang} />
        </Suspense>
      </section>
    </div>
  );
}
