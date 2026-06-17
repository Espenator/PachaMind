import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
    title: content.about.title,
    description: content.about.intro,
    openGraph: {
      title: content.about.title,
      description: content.about.intro,
      url: `${SITE_URL}/${lang}/about`,
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}/about`,
      languages: {
        en: `${SITE_URL}/en/about`,
        es: `${SITE_URL}/es/about`,
        "x-default": `${SITE_URL}/en/about`,
      },
    },
  };
}

export default async function AboutPage({
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
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
        <div className="documentary-card grain p-8 lg:p-12">
          <p className="text-xs uppercase tracking-[0.38em] text-terracotta font-medium">
            {content.brand.promise}
          </p>
          <h1 className="headline-font mt-5 text-fluid-4xl text-deepearth">
            {content.about.title}
          </h1>
          <p className="mt-5 max-w-[62ch] text-fluid-lg leading-[1.72] text-stonegray">
            {content.about.intro}
          </p>
        </div>
      </section>

      {/* ── Mission + Story ───────────────────────────────────────────── */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div className="documentary-card flex flex-col gap-4 p-8 lg:p-10">
          <h2 className="headline-font text-fluid-2xl text-deepearth">
            {content.about.missionHeading}
          </h2>
          <p className="text-fluid-base leading-[1.75] text-stonegray max-w-[60ch]">
            {content.about.missionBody}
          </p>
        </div>
        <div className="documentary-card flex flex-col gap-4 p-8 lg:p-10">
          <h2 className="headline-font text-fluid-2xl text-deepearth">
            {content.about.storyHeading}
          </h2>
          <p className="text-fluid-base leading-[1.75] text-stonegray max-w-[60ch]">
            {content.about.storyBody}
          </p>
        </div>
      </section>

      {/* ── Mallku Aribalo attribution (dark documentary band) ─────────── */}
      <section className="mx-auto mt-5 max-w-7xl px-5 sm:px-8 lg:px-10">
        <article
          className="photo-overlay parallax-band rounded-[2rem]"
          style={{
            backgroundImage:
              "url(/images/andes/andes-mountains-1.jpg)",
          }}
        >
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-xs uppercase tracking-[0.38em] text-gold font-medium">
              {content.brand.traditionHolderLabel}
            </p>
            <h2 className="headline-font mt-5 text-fluid-3xl text-cloud">
              {content.about.traditionHolderHeading}
            </h2>
            <p className="mt-6 max-w-[62ch] text-fluid-lg leading-[1.72] text-cloud/88">
              {content.about.traditionHolderBody}
            </p>
          </div>
        </article>
      </section>

      {/* ── Values + Disclaimer ──────────────────────────────────────────── */}
      <section className="mx-auto mt-5 grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <article
          className="photo-overlay parallax-band rounded-[2rem]"
          style={{
            backgroundImage:
              "url(/images/andes/textiles-ychsma.jpg)",
          }}
        >
          <div className="p-8 sm:p-12 lg:p-14">
            <h2 className="headline-font text-fluid-2xl text-cloud">
              {content.about.valuesHeading}
            </h2>
            <ul className="mt-6 space-y-4" role="list">
              {content.about.values.map((value) => (
                <li key={value} className="flex items-start gap-3 text-fluid-base leading-[1.72] text-cloud/90">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <div className="documentary-card grain flex flex-col justify-center gap-5 p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-stonegray/60">
            {content.footer.credit}
          </p>
          <p className="headline-font text-fluid-2xl text-deepearth">
            {content.footer.mission}
          </p>
          <p className="text-fluid-base leading-[1.75] text-stonegray max-w-[52ch]">
            {content.brand.disclaimer}
          </p>
        </div>
      </section>
    </div>
  );
}
