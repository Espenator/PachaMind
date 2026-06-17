import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ScenicBand } from "@/components/scenic-band";
import { ScrollReveal } from "@/components/scroll-reveal";
import { VideoHero } from "@/components/video-hero";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { getContent, isLanguage } from "@/lib/content";
import { sharedAssets } from "@/lib/media";
import { SITE_URL } from "@/lib/site";
import { getHeroVideoSources } from "@/lib/video-assets";

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
  const heroVideo = getHeroVideoSources();

  return (
    <div className="pb-16">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <VideoHero
          posterSrc={sharedAssets.heroPoster}
          mp4Src={heroVideo.mp4Src}
          webmSrc={heroVideo.webmSrc}
          kicker={content.brand.promise}
          title={content.home.title}
          intro={content.home.intro}
          actions={
            <>
              <Link
                href={`/${lang}/library`}
                className="rounded-full bg-cloudwhite px-6 py-3 text-sm font-semibold text-deepearth transition hover:bg-goldmoun focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloudwhite"
              >
                {content.home.primaryCta}
              </Link>
              <Link
                href={`/${lang}/curriculum`}
                className="rounded-full border border-cloudwhite/30 px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-cloudwhite/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cloudwhite"
              >
                {content.nav.curriculum}
              </Link>
            </>
          }
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <ScrollReveal className="documentary-card p-6 lg:p-8">
          <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.home.featuredLabel}</p>
          <h2 className="headline-font mt-3 text-3xl text-deepearth">{featuredLesson.title}</h2>
          <p className="mt-3 text-base leading-7 text-stonegray">{featuredLesson.extendedDescription}</p>
          <div className="mt-6">
            <YouTubeEmbed lesson={featuredLesson} priority />
          </div>
        </ScrollReveal>

        <ScrollReveal className="documentary-card flex flex-col gap-6 p-8 lg:p-10" delay={80}>
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-stonegray">{content.nav.curriculum}</p>
            <h2 className="headline-font mt-3 text-3xl text-deepearth">
              {content.curriculum.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-stonegray">{content.curriculum.intro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.curriculum.modules.map((module) => (
              <article key={module.title} className="rounded-[1.5rem] bg-cloudwhite px-5 py-5">
                <p className="text-xs uppercase tracking-[0.3em] text-terracotta">{module.lessonSlugs.length} lessons</p>
                <h3 className="headline-font mt-2 text-2xl text-deepearth">{module.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stonegray">{module.description}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${lang}/curriculum`}
              className="rounded-full bg-deepearth px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              {content.nav.curriculum}
            </Link>
            <Link
              href={`/${lang}/dashboard`}
              className="rounded-full border border-deepearth/10 px-6 py-3 text-sm font-semibold transition hover:bg-skyblue hover:text-cloudwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              {content.home.secondaryCta}
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-6 px-6 lg:px-10">
        {content.home.sections.map((section, index) => (
          <ScrollReveal key={section.title} delay={index * 70}>
            <ScenicBand
              image={section.image}
              title={section.title}
              body={section.body}
              alt={section.title}
              priority={false}
            />
          </ScrollReveal>
        ))}
      </section>

      <section className="mx-auto mt-8 max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="documentary-card p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.nav.pumaPath}</p>
          <h2 className="headline-font mt-3 text-3xl text-deepearth">{content.pumaPath.title}</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-stonegray">{content.pumaPath.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {content.pumaPath.stages.slice(0, 5).map((stage) => (
              <span
                key={stage.key}
                className="rounded-full border border-deepearth/10 bg-cloudwhite px-4 py-2 text-sm text-deepearth"
              >
                {stage.title}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
