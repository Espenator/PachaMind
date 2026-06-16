import Link from "next/link";
import { notFound } from "next/navigation";

import { VideoEmbed } from "@/components/video-embed";
import { getContent, isLanguage } from "@/lib/content";

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

  /* Topic chip colours — rotate across the palette */
  const topicColors: Record<string, string> = {
    listening:   "bg-sky/15 text-sky ring-1 ring-sky/30",
    reciprocity: "bg-moss/15 text-moss ring-1 ring-moss/30",
    ritual:      "bg-terracotta/15 text-terracotta ring-1 ring-terracotta/30",
    stewardship: "bg-gold/15 text-deepearth ring-1 ring-gold/30",
  };

  return (
    <div className="pb-16">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="mx-auto grid max-w-7xl gap-6 px-5 pt-10 pb-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-16">
        {/* Text card */}
        <div className="documentary-card grain flex flex-col justify-between gap-8 p-8 lg:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-terracotta font-medium">
              {content.brand.promise}
            </p>
            <h1 className="headline-font mt-5 text-fluid-5xl leading-[1.12] text-deepearth">
              {content.home.title}
            </h1>
            <p className="mt-6 max-w-[54ch] text-fluid-lg leading-[1.72] text-stonegray">
              {content.home.intro}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${lang}/library`}
              className="rounded-full bg-deepearth px-6 py-3 text-sm font-semibold text-cloud transition hover:bg-terracotta focus-gold min-h-[44px] flex items-center"
            >
              {content.home.primaryCta}
            </Link>
            <Link
              href={`/${lang}/dashboard`}
              className="rounded-full border border-deepearth/15 bg-white/70 px-6 py-3 text-sm font-semibold text-deepearth transition hover:bg-sky hover:text-cloud focus-gold min-h-[44px] flex items-center"
            >
              {content.home.secondaryCta}
            </Link>
          </div>
        </div>

        {/* Featured video card */}
        <div className="documentary-card flex flex-col gap-5 p-6 lg:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-terracotta font-medium">
              {content.home.featuredLabel}
            </p>
            <h2 className="headline-font mt-3 text-fluid-2xl text-deepearth">
              {featuredLesson.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-stonegray line-clamp-3">
              {featuredLesson.extendedDescription}
            </p>
          </div>
          <VideoEmbed lesson={featuredLesson} priority />
        </div>
      </section>

      {/* ── Lesson preview grid ────────────────────────────────────────── */}
      <section className="mx-auto mt-4 max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.lessons.map((lesson) => (
            <Link
              key={lesson.slug}
              href={`/${lang}/lesson/${lesson.slug}`}
              className="documentary-card group flex flex-col gap-3 p-6 transition-shadow hover:shadow-[0_24px_64px_rgba(43,27,18,0.16)] focus-gold"
            >
              <span
                className={`w-fit rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] ${topicColors[lesson.topic] ?? "bg-sand text-stonegray"}`}
              >
                {content.library.topics[lesson.topic] ?? lesson.topic}
              </span>
              <h3 className="headline-font text-fluid-xl text-deepearth leading-snug group-hover:text-terracotta transition-colors">
                {lesson.title}
              </h3>
              <p className="text-sm leading-6 text-stonegray line-clamp-2 flex-1">
                {lesson.description}
              </p>
              <p className="text-xs text-stonegray/60">
                {lesson.kicker}&ensp;·&ensp;{lesson.duration}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Documentary bands ─────────────────────────────────────────── */}
      <section className="mx-auto mt-8 grid max-w-7xl gap-5 px-5 sm:px-8 lg:px-10">
        {content.home.sections.map((section, i) => (
          <article
            key={section.title}
            className={`photo-overlay parallax-band rounded-[2rem] ${i % 2 === 1 ? "lg:ml-12" : ""}`}
            style={{ backgroundImage: `url(${section.image})` }}
          >
            <div className="relative max-w-2xl p-8 sm:p-10 lg:p-14">
              <h2 className="headline-font text-fluid-3xl text-cloud">{section.title}</h2>
              <p className="mt-4 text-fluid-lg leading-[1.72] text-cloud/90">{section.body}</p>
            </div>
          </article>
        ))}
      </section>

      {/* ── Promise band (dark) ─────────────────────────────────────────── */}
      <section className="section-dark grain mt-5 py-14 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.42em] text-gold font-medium">
            {content.brand.traditionHolderLabel}
          </p>
          <h2 className="headline-font mt-4 text-fluid-3xl text-cloud">
            {content.brand.traditionHolderName}
          </h2>
          <p className="mt-5 text-fluid-base leading-[1.75] text-cloud/75 max-w-[60ch] mx-auto">
            {content.brand.promise}
          </p>
        </div>
      </section>
    </div>
  );
}
