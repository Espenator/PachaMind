import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CommunicationPreferencesForm } from "@/components/communication-preferences-form";
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
    title: content.preferences.title,
    description: content.preferences.intro,
    robots: { index: false },
    alternates: {
      canonical: `${SITE_URL}/${lang}/account/preferences`,
    },
  };
}

export default async function PreferencesPage({
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
          {content.preferences.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-stonegray">
          {content.preferences.intro}
        </p>
      </section>

      <div className="mt-8">
        <CommunicationPreferencesForm
          content={content.preferences}
          permissionLabels={content.signup.permissions}
          signupHref={`/${lang}/signup`}
        />
      </div>
    </div>
  );
}
