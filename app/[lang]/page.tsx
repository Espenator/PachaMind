import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { YouTubeEmbed } from "@/components/youtube-embed";
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
    title: { absolute: content.meta.title },
    description: content.home.intro,
    openGraph: {
      title: content.meta.title,
      description: content.home.intro,
      url: `${SITE_URL}/${lang}`,
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: {
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
        "x-default": `${SITE_URL}/en`,
      },
    },
  };
}

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
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
        <div className="documentary-card flex flex-col justify-between gap-6 p-8 lg:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.brand.promise}</p>
            <h1 className="headline-font mt-4 text-5xl leading-tight text-deepearth lg:text-6xl">
              {content.home.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stonegray">{content.home.intro}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${lang}/library`}
              className="rounded-full bg-deepearth px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              {content.home.primaryCta}
            </Link>
            <Link
              href={`/${lang}/dashboard`}
              className="rounded-full border border-deepearth/10 px-6 py-3 text-sm font-semibold transition hover:bg-skyblue hover:text-cloudwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              {content.home.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="documentary-card p-5 lg:p-6">
          <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.home.featuredLabel}</p>
          <h2 className="headline-font mt-3 text-3xl text-deepearth">{featuredLesson.title}</h2>
          <p className="mt-3 text-base leading-7 text-stonegray">{featuredLesson.extendedDescription}</p>
          <div className="mt-6">
            <YouTubeEmbed lesson={featuredLesson} />
          </div>
        </div>
      </section>

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
    </div>
  );
}
