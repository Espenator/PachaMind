import Link from "next/link";
import { notFound } from "next/navigation";

import { ScrollReveal } from "@/components/scroll-reveal";
import { VideoHero } from "@/components/video-hero";
import { VideoPlayer } from "@/components/video-player";
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

  return (
    <>
      {/* Cinematic full-viewport hero */}
      <VideoHero
        posterSrc={content.home.sections[0].image}
        kicker={content.brand.eyebrow}
        title={content.home.title}
      >
        <div className="flex flex-wrap gap-4">
          <Link
            href={`/${lang}/library`}
            className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-cloudwhite hover:text-deepearth"
          >
            {content.home.primaryCta}
          </Link>
          <Link
            href={`/${lang}/dashboard`}
            className="rounded-full border border-cloudwhite/30 bg-cloudwhite/10 px-6 py-3 text-sm font-semibold text-cloudwhite backdrop-blur-sm transition hover:bg-cloudwhite/20"
          >
            {content.home.secondaryCta}
          </Link>
        </div>
      </VideoHero>

      <div className="pb-20">
        {/* Featured lesson */}
        <ScrollReveal>
          <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
            <div className="documentary-card flex flex-col justify-between gap-6 p-8 lg:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.brand.promise}</p>
                <h2 className="headline-font mt-4 text-5xl leading-tight text-deepearth lg:text-6xl">
                  {content.home.title}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-stonegray">{content.home.intro}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${lang}/library`}
                  className="rounded-full bg-deepearth px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta"
                >
                  {content.home.primaryCta}
                </Link>
                <Link
                  href={`/${lang}/dashboard`}
                  className="rounded-full border border-deepearth/10 px-6 py-3 text-sm font-semibold transition hover:bg-skyblue hover:text-cloudwhite"
                >
                  {content.home.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="documentary-card p-5 lg:p-6">
              <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.home.featuredLabel}</p>
              <h3 className="headline-font mt-3 text-3xl text-deepearth">{featuredLesson.title}</h3>
              <p className="mt-3 text-base leading-7 text-stonegray">{featuredLesson.extendedDescription}</p>
              <div className="mt-6">
                <VideoPlayer youtubeId={featuredLesson.youtubeId} title={featuredLesson.title} />
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Parallax photo sections */}
        <section className="mx-auto grid max-w-7xl gap-6 px-6 lg:px-10">
          {content.home.sections.map((section, i) => (
            <ScrollReveal key={section.title} delay={i * 80}>
              <article
                className="photo-overlay parallax-band rounded-[2rem]"
                style={{ backgroundImage: `url(${section.image})` }}
              >
                <div className="relative z-10 max-w-3xl p-8 sm:p-10 lg:p-14">
                  <h2 className="headline-font text-3xl text-cloudwhite sm:text-4xl">{section.title}</h2>
                  <p className="mt-4 text-lg leading-8 text-cloudwhite/90">{section.body}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </section>
      </div>
    </>
  );
}
