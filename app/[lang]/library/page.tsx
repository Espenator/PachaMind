import Link from "next/link";
import { notFound } from "next/navigation";

import { YouTubeEmbed } from "@/components/youtube-embed";
import { getContent, isLanguage } from "@/lib/content";

export default async function LibraryPage({
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
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
      <section className="documentary-card p-8 lg:p-10">
        <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.brand.promise}</p>
        <h1 className="headline-font mt-4 text-5xl text-deepearth">{content.library.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-stonegray">{content.library.intro}</p>
      </section>

      <section className="mt-8 grid gap-8">
        {content.lessons.map((lesson) => (
          <article key={lesson.slug} className="documentary-card grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
                  {lesson.kicker} · {lesson.duration}
                </p>
                <h2 className="headline-font mt-3 text-3xl text-deepearth">{lesson.title}</h2>
                <p className="mt-4 text-base leading-7 text-stonegray">{lesson.description}</p>
                <p className="mt-4 text-base leading-7 text-stonegray">{lesson.extendedDescription}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-stonegray">{content.library.notesLabel}</p>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-deepearth">
                  {lesson.learningNotes.map((note) => (
                    <li key={note} className="rounded-2xl bg-cloudwhite px-4 py-3">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/${lang}/lesson/${lesson.slug}`}
                className="w-fit rounded-full bg-deepearth px-5 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                {content.library.openLessonLabel}
              </Link>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-stonegray">{content.library.watchLabel}</p>
              <YouTubeEmbed lesson={lesson} />
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
