import Link from "next/link";
import type { ReactNode } from "react";

import type { Language, SiteContent } from "@/lib/types";

interface SiteShellProps {
  content: SiteContent;
  language: Language;
  children: ReactNode;
}

export function SiteShell({ content, language, children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-cloudwhite text-deepearth">
      <header className="border-b border-deepearth/10 bg-cloudwhite/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 lg:px-10">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta">{content.brand.eyebrow}</p>
              <Link href={`/${language}`} className="headline-font mt-2 block text-3xl text-deepearth">
                {content.brand.name}
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-stonegray">
              <span className="rounded-full border border-deepearth/10 bg-white px-4 py-2">
                {content.brand.promise}
              </span>
              <span className="rounded-full border border-deepearth/10 bg-white px-4 py-2">
                {content.brand.traditionHolderLabel}: {content.brand.traditionHolderName}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex flex-wrap items-center gap-2 text-sm font-medium">
              {[
                { href: `/${language}`, label: content.nav.home },
                { href: `/${language}/library`, label: content.nav.library },
                { href: `/${language}/puma-path`, label: content.nav.pumaPath },
                { href: `/${language}/dashboard`, label: content.nav.dashboard },
                { href: `/${language}/about`, label: content.nav.about },
                { href: `/${language}/contact`, label: content.nav.contact },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 transition hover:bg-deepearth hover:text-cloudwhite"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2 text-sm">
              <Link
                href="/en"
                className="rounded-full border border-deepearth/10 px-4 py-2 transition hover:bg-skyblue hover:text-cloudwhite"
              >
                {content.nav.english}
              </Link>
              <Link
                href="/es"
                className="rounded-full border border-deepearth/10 px-4 py-2 transition hover:bg-skyblue hover:text-cloudwhite"
              >
                {content.nav.spanish}
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-deepearth/10 bg-deepearth text-cloudwhite">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 lg:px-10">
          <p className="headline-font text-2xl">{content.footer.credit}</p>
          <p className="text-sm text-cloudwhite/85">{content.brand.disclaimer}</p>
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-goldmoun">
              {content.footer.mission}
            </p>
            <Link
              href={`/${language}/about`}
              className="text-sm text-cloudwhite/70 transition hover:text-cloudwhite"
            >
              {content.nav.about}
            </Link>
            <Link
              href={`/${language}/contact`}
              className="text-sm text-cloudwhite/70 transition hover:text-cloudwhite"
            >
              {content.nav.contact}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
