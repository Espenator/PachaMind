import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/components/legal-page";
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
    title: content.legalPages.privacy.title,
    description: content.legalPages.privacy.intro,
    alternates: {
      canonical: `${SITE_URL}/${lang}/privacy`,
      languages: {
        en: `${SITE_URL}/en/privacy`,
        es: `${SITE_URL}/es/privacy`,
        "x-default": `${SITE_URL}/en/privacy`,
      },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLanguage(lang)) {
    notFound();
  }
  const content = getContent(lang);
  return <LegalPage page={content.legalPages.privacy} />;
}
