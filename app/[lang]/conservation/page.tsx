import Link from "next/link";
import { notFound } from "next/navigation";

import { getContent, isLanguage } from "@/lib/content";

export default async function ConservationPage({
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
          <h1 className="headline-font mt-4 text-5xl text-deepearth">{content.conservation.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stonegray">{content.conservation.intro}</p>
        </div>
      </section>

      {/* Sections */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 lg:px-10">
        {content.conservation.sections.map((section) => (
          <article
            key={section.title}
            className="photo-overlay parallax-band rounded-[2rem]"
            style={{ backgroundImage: `url(${section.image})` }}
          >
            <div className="relative z-10 max-w-3xl p-8 sm:p-10 lg:p-14">
              <h2 className="headline-font text-3xl text-cloudwhite sm:text-4xl">{section.title}</h2>
              <p className="mt-5 text-lg leading-8 text-cloudwhite/90">{section.body}</p>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="mx-auto mt-6 max-w-7xl px-6 lg:px-10">
        <div className="documentary-card grid gap-6 p-8 lg:grid-cols-2 lg:items-center lg:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-terracotta">{content.nav.pumaPath}</p>
            <h2 className="headline-font mt-3 text-3xl text-deepearth">{content.pumaPath.title}</h2>
            <p className="mt-4 text-base leading-8 text-stonegray">{content.pumaPath.intro}</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link
              href={`/${lang}/puma-path`}
              className="rounded-full bg-deepearth px-6 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta"
            >
              {content.pumaPath.beginLabel}
            </Link>
            <Link
              href={`/${lang}/curriculum`}
              className="rounded-full border border-deepearth/15 px-6 py-3 text-sm font-semibold transition hover:bg-deepearth hover:text-cloudwhite"
            >
              {content.nav.curriculum}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
