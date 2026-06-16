import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/site-shell";
import { getContent, isLanguage } from "@/lib/content";
import { languages } from "@/lib/types";

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
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const content = getContent(lang);

  return (
    <SiteShell content={content} language={lang}>
      {children}
    </SiteShell>
  );
}
