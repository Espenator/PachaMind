import Link from "next/link";
import { notFound } from "next/navigation";

import { getContent, isLanguage } from "@/lib/content";

export default async function PumaPathPage({
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
      {/* Full-bleed hero */}
      <section
        className="photo-overlay parallax-band relative flex min-h-[60vh] flex-col justify-end"
        style={{ backgroundImage: `url(${content.pumaPath.heroImage})` }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-14 pt-24 lg:px-10">
          <p className="text-xs uppercase tracking-[0.34em] text-goldmoun">{content.brand.promise}</p>
          <h1 className="headline-font mt-4 max-w-3xl text-5xl leading-tight text-cloudwhite lg:text-6xl">
            {content.pumaPath.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cloudwhite/90">{content.pumaPath.intro}</p>
          <Link
            href={`/${lang}/lesson/${content.pumaPath.steps[0]?.lessonSlug ?? ""}`}
            className="mt-8 inline-block rounded-full bg-goldmoun px-7 py-3 text-sm font-semibold text-deepearth transition hover:bg-cloudwhite"
          >
            {content.pumaPath.beginLabel}
          </Link>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="space-y-6">
          {content.pumaPath.steps.map((step, index) => {
            const lesson = step.lessonSlug
              ? content.lessons.find((l) => l.slug === step.lessonSlug)
              : undefined;

            return (
              <article
                key={step.title}
                className="documentary-card grid gap-6 p-8 lg:grid-cols-[auto_1fr] lg:gap-10 lg:p-10"
              >
                {/* Step number */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta text-lg font-semibold text-cloudwhite">
                  {index + 1}
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
                      {content.pumaPath.stepLabel} {index + 1}
                      {lesson ? ` · ${lesson.kicker} · ${lesson.duration}` : ""}
                    </p>
                    <h2 className="headline-font mt-2 text-3xl text-deepearth">{step.title}</h2>
                    <p className="mt-3 text-base leading-8 text-stonegray">{step.body}</p>
                  </div>

                  {lesson && (
                    <div className="rounded-2xl border border-deepearth/10 bg-cloudwhite p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-stonegray">{lesson.kicker}</p>
                      <h3 className="headline-font mt-2 text-2xl text-deepearth">{lesson.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-stonegray">{lesson.description}</p>
                    </div>
                  )}

                  {step.lessonSlug && step.ctaLabel && (
                    <Link
                      href={`/${lang}/lesson/${step.lessonSlug}`}
                      className="w-fit rounded-full bg-deepearth px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta"
                    >
                      {step.ctaLabel}
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Related links */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="documentary-card grid gap-6 p-8 sm:grid-cols-3 lg:p-10">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">{content.nav.curriculum}</p>
            <p className="text-sm leading-7 text-stonegray">{content.curriculum.intro}</p>
            <Link
              href={`/${lang}/curriculum`}
              className="mt-auto w-fit rounded-full border border-deepearth/15 px-5 py-2 text-sm font-medium transition hover:bg-deepearth hover:text-cloudwhite"
            >
              {content.nav.curriculum}
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">{content.nav.conservation}</p>
            <p className="text-sm leading-7 text-stonegray">{content.conservation.intro}</p>
            <Link
              href={`/${lang}/conservation`}
              className="mt-auto w-fit rounded-full border border-deepearth/15 px-5 py-2 text-sm font-medium transition hover:bg-deepearth hover:text-cloudwhite"
            >
              {content.nav.conservation}
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">{content.nav.reflections}</p>
            <p className="text-sm leading-7 text-stonegray">{content.reflections.intro}</p>
            <Link
              href={`/${lang}/reflections`}
              className="mt-auto w-fit rounded-full border border-deepearth/15 px-5 py-2 text-sm font-medium transition hover:bg-deepearth hover:text-cloudwhite"
            >
              {content.nav.reflections}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
