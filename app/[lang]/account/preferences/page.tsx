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
    title: content.membership.preferences.title,
    description: content.membership.preferences.intro,
    alternates: {
      canonical: `${SITE_URL}/${lang}/account/preferences`,
      languages: {
        en: `${SITE_URL}/en/account/preferences`,
        es: `${SITE_URL}/es/account/preferences`,
        "x-default": `${SITE_URL}/en/account/preferences`,
      },
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
  const preferences = content.membership.preferences;

  return (
    <div className="pb-16">
      <section className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="documentary-card p-8 lg:p-10">
          <h1 className="headline-font text-4xl text-deepearth">{preferences.title}</h1>
          <p className="mt-5 text-lg leading-8 text-stonegray">{preferences.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 lg:px-10">
        <CommunicationPreferencesForm
          content={preferences}
          consentLabels={content.membership.signup.consentLabels}
          language={lang}
        />
      </section>
    </div>
  );
}
