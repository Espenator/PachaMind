import Link from "next/link";
import { notFound } from "next/navigation";

import { YouTubeEmbed } from "@/components/youtube-embed";
import { getContent, isLanguage } from "@/lib/content";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const content = getContent(lang);
  const featuredLesson = content.lessons[0];

  return (
    <div className="pb-16">
      {/* Full-bleed hero */}
      <section
        className="photo-overlay parallax-band relative flex min-h-[85vh] flex-col justify-end"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-10">
          <p className="text-xs uppercase tracking-[0.34em] text-goldmoun">{content.brand.promise}</p>
          <h1 className="headline-font mt-4 max-w-4xl text-5xl leading-tight text-cloudwhite lg:text-7xl">
            {content.home.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cloudwhite/90">{content.home.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/${lang}/curriculum`}
              className="rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-goldmoun hover:text-deepearth"
            >
              {content.home.primaryCta}
            </Link>
            <Link
              href={`/${lang}/dashboard`}
              className="rounded-full border border-cloudwhite/30 px-7 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-cloudwhite/10"
            >
              {content.home.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured lesson */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.home.featuredLabel}</p>
        <div className="documentary-card mt-4 grid gap-8 p-6 lg:grid-cols-2 lg:p-10">
          <div className="flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
                {featuredLesson.kicker} · {featuredLesson.duration}
              </p>
              <h2 className="headline-font mt-3 text-4xl text-deepearth">{featuredLesson.title}</h2>
              <p className="mt-4 text-base leading-8 text-stonegray">{featuredLesson.extendedDescription}</p>
            </div>
            <Link
              href={`/${lang}/lesson/${featuredLesson.slug}`}
              className="w-fit rounded-full bg-deepearth px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta"
            >
              {content.home.featuredCta}
            </Link>
          </div>
          <YouTubeEmbed lesson={featuredLesson} />
        </div>
      </section>

      {/* Curriculum overview */}
      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10 lg:pb-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.home.curriculumLabel}</p>
            <h2 className="headline-font mt-3 text-4xl text-deepearth">{content.curriculum.title}</h2>
          </div>
          <Link
            href={`/${lang}/curriculum`}
            className="rounded-full border border-deepearth/15 px-5 py-2 text-sm font-medium transition hover:bg-deepearth hover:text-cloudwhite"
          >
            {content.home.curriculumCta}
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {content.lessons.map((lesson) => (
            <Link
              key={lesson.slug}
              href={`/${lang}/lesson/${lesson.slug}`}
              className="documentary-card block p-6 transition hover:shadow-[0_30px_90px_rgba(36,25,21,0.18)]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
                {lesson.kicker} · {lesson.duration} · {content.library.topics[lesson.topic] ?? lesson.topic}
              </p>
              <h3 className="headline-font mt-3 text-2xl text-deepearth">{lesson.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stonegray">{lesson.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Photo-overlay sections */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 lg:px-10">
        {content.home.sections.map((section) => (
          <article
            key={section.title}
            className="photo-overlay parallax-band rounded-[2rem]"
            style={{ backgroundImage: `url(${section.image})` }}
          >
            <div className="relative z-10 max-w-3xl p-8 sm:p-10 lg:p-14">
              <h2 className="headline-font text-3xl text-cloudwhite sm:text-4xl">{section.title}</h2>
              <p className="mt-4 text-lg leading-8 text-cloudwhite/90">{section.body}</p>
            </div>
          </article>
        ))}
      </section>

      {/* Puma Path teaser */}
      <section className="mx-auto mt-6 max-w-7xl px-6 lg:px-10">
        <article
          className="photo-overlay parallax-band rounded-[2rem]"
          style={{ backgroundImage: `url(${content.home.pumaPathTeaser.image})` }}
        >
          <div className="relative z-10 p-8 sm:p-10 lg:p-16">
            <p className="text-xs uppercase tracking-[0.34em] text-goldmoun">{content.nav.pumaPath}</p>
            <h2 className="headline-font mt-4 max-w-2xl text-4xl text-cloudwhite sm:text-5xl">
              {content.home.pumaPathTeaser.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-cloudwhite/90">
              {content.home.pumaPathTeaser.body}
            </p>
            <Link
              href={`/${lang}/puma-path`}
              className="mt-8 inline-block rounded-full bg-goldmoun px-7 py-3 text-sm font-semibold text-deepearth transition hover:bg-cloudwhite"
            >
              {content.home.pumaPathTeaser.ctaLabel}
            </Link>
          </div>
        </article>
      </section>

      {/* Reflections teaser */}
      <section className="mx-auto mt-6 max-w-7xl px-6 pb-0 lg:px-10">
        <div className="documentary-card grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.nav.reflections}</p>
            <h2 className="headline-font mt-3 text-4xl text-deepearth">
              {content.home.reflectionsTeaser.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-stonegray">{content.home.reflectionsTeaser.body}</p>
          </div>
          <div className="flex lg:justify-end">
            <Link
              href={`/${lang}/reflections`}
              className="rounded-full bg-deepearth px-7 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta"
            >
              {content.home.reflectionsTeaser.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
