import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FreeMembershipSignupForm } from "@/components/free-membership-signup-form";
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
    title: content.signup.title,
    description: content.signup.intro,
    openGraph: {
      title: content.signup.title,
      description: content.signup.intro,
      url: `${SITE_URL}/${lang}/signup`,
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}/signup`,
      languages: {
        en: `${SITE_URL}/en/signup`,
        es: `${SITE_URL}/es/signup`,
        "x-default": `${SITE_URL}/en/signup`,
      },
    },
  };
}

export default async function SignupPage({
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
    <div className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-16">
      <section className="documentary-card p-8 lg:p-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          {content.nav.complianceNote}
        </p>
        <h1 className="headline-font mt-4 text-4xl text-deepearth lg:text-5xl">
          {content.signup.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-stonegray">{content.signup.intro}</p>
      </section>

      <div className="mt-8">
        <FreeMembershipSignupForm
          language={lang}
          content={content.signup}
          dashboardHref={`/${lang}/dashboard`}
        />
      </div>
    </div>
  );
}
