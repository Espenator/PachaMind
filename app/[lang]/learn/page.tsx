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
    title: content.learn.title,
    description: content.learn.intro,
    openGraph: {
      title: content.learn.title,
      description: content.learn.intro,
      url: `${SITE_URL}/${lang}/learn`,
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}/learn`,
      languages: {
        en: `${SITE_URL}/en/learn`,
        es: `${SITE_URL}/es/learn`,
        "x-default": `${SITE_URL}/en/learn`,
      },
    },
  };
}

export default async function LearnPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const content = getContent(lang);
  const cards = [
    {
      heading: content.learn.startHeading,
      body: content.learn.startBody,
      cta: content.learn.startCta,
      href: `/${lang}/library`,
    },
    {
      heading: content.learn.pathHeading,
      body: content.learn.pathBody,
      cta: content.learn.pathCta,
      href: `/${lang}/puma-path`,
    },
    {
      heading: content.learn.membershipHeading,
      body: content.learn.membershipBody,
      cta: content.learn.membershipCta,
      href: `/${lang}/signup`,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
      <section className="documentary-card p-8 lg:p-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          {content.nav.complianceNote}
        </p>
        <h1 className="headline-font mt-4 text-5xl text-deepearth">
          {content.learn.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-stonegray">
          {content.learn.intro}
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.heading}
            className="documentary-card flex flex-col justify-between gap-5 p-8"
          >
            <div>
              <h2 className="headline-font text-3xl text-deepearth">{card.heading}</h2>
              <p className="mt-4 text-base leading-8 text-stonegray">{card.body}</p>
            </div>
            <Link
              href={card.href}
              className="inline-flex w-fit rounded-full bg-deepearth px-5 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              {card.cta}
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
