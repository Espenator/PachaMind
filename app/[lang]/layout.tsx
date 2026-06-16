import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/site-shell";
import { getContent, isLanguage } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import { languages } from "@/lib/types";

/** Default OG image shared across all pages. */
const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80";

interface LangLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    return {};
  }

  const content = getContent(lang);
  const ogLocale = lang === "en" ? "en_US" : "es_ES";
  const canonicalUrl = `${SITE_URL}/${lang}`;

  return {
    title: {
      template: `%s | ${content.meta.title}`,
      default: content.meta.title,
    },
    description: content.meta.description,
    openGraph: {
      siteName: content.meta.title,
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: content.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [DEFAULT_OG_IMAGE],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
        "x-default": `${SITE_URL}/en`,
      },
    },
  };
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const content = getContent(lang);

  return (
    <html lang={lang} className="h-full antialiased">
      <body className="min-h-full bg-cloudwhite text-deepearth">
        <SiteShell content={content} language={lang}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
