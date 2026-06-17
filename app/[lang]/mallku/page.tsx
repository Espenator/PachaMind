import type { Metadata } from "next";
import Link from "next/link";
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
    title: content.mallku.title,
    description: content.mallku.intro,
    openGraph: {
      title: content.mallku.title,
      description: content.mallku.intro,
      url: `${SITE_URL}/${lang}/mallku`,
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}/mallku`,
      languages: {
        en: `${SITE_URL}/en/mallku`,
        es: `${SITE_URL}/es/mallku`,
        "x-default": `${SITE_URL}/en/mallku`,
      },
    },
  };
}

export default async function MallkuPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const content = getContent(lang);
  const mallkuLesson = content.lessons.find(
    (lesson) => lesson.slug === "mallku-aribalo-tradition-holder",
  );

  return (
    <div className="pb-16">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <article
          className="photo-overlay parallax-band rounded-[2rem]"
          style={{ backgroundImage: "url(/images/andes/machu-picchu-inti-punku.jpg)" }}
        >
          <div className="relative z-10 p-8 sm:p-10 lg:p-14">
            <p className="text-xs uppercase tracking-[0.3em] text-goldmoun">
              {content.brand.traditionHolderLabel}
            </p>
            <h1 className="headline-font mt-4 text-5xl text-cloudwhite">
              {content.mallku.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-cloudwhite/90">
              {content.mallku.intro}
            </p>
          </div>
        </article>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-10">
        <div className="documentary-card flex flex-col gap-4 p-8">
          <h2 className="headline-font text-3xl text-deepearth">
            {content.mallku.roleHeading}
          </h2>
          <p className="text-base leading-8 text-stonegray">{content.mallku.roleBody}</p>
        </div>
        <div className="documentary-card flex flex-col gap-4 p-8">
          <h2 className="headline-font text-3xl text-deepearth">
            {content.mallku.attributionHeading}
          </h2>
          <p className="text-base leading-8 text-stonegray">
            {content.mallku.attributionBody}
          </p>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-7xl px-6 lg:px-10">
        <div className="documentary-card flex flex-col gap-5 p-8 lg:p-10">
          <h2 className="headline-font text-3xl text-deepearth">
            {content.mallku.lessonsHeading}
          </h2>
          <p className="text-base leading-8 text-stonegray">
            {content.mallku.lessonsBody}
          </p>
          {mallkuLesson ? (
            <Link
              href={`/${lang}/lesson/${mallkuLesson.slug}`}
              className="inline-flex w-fit rounded-full bg-deepearth px-5 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              {mallkuLesson.title}
            </Link>
          ) : null}
          <p className="text-sm leading-7 text-stonegray">
            {content.mallku.verificationNote}
          </p>
        </div>
      </section>
    </div>
  );
}
