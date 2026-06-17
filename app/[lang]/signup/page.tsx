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
    title: content.membership.signup.title,
    description: content.membership.signup.intro,
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
  const signup = content.membership.signup;

  return (
    <div className="pb-16">
      <section className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="documentary-card p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">{content.brand.promise}</p>
          <h1 className="headline-font mt-4 text-4xl text-deepearth">{signup.title}</h1>
          <p className="mt-5 text-lg leading-8 text-stonegray">{signup.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-10">
        <FreeMembershipSignupForm
          content={signup}
          debugLabels={content.membership.debugPanel}
          language={lang}
        />
      </section>
    </div>
  );
}
