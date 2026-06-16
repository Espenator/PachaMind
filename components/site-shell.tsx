import Link from "next/link";
import type { ReactNode } from "react";

import type { Language, SiteContent } from "@/lib/types";

interface SiteShellProps {
  content: SiteContent;
  language: Language;
  children: ReactNode;
}

export function SiteShell({ content, language, children }: SiteShellProps) {
  const navItems = [
    { href: `/${language}`,           label: content.nav.home },
    { href: `/${language}/library`,   label: content.nav.library },
    { href: `/${language}/dashboard`, label: content.nav.dashboard },
    { href: `/${language}/about`,     label: content.nav.about },
    { href: `/${language}/contact`,   label: content.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-cloud text-deepearth">
      {/* ── Sticky translucent header ───────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-deepearth/8 bg-cloud/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">

          {/* Brand */}
          <div className="flex flex-col">
            <p className="text-[0.65rem] uppercase tracking-[0.34em] text-terracotta leading-none">
              {content.brand.eyebrow}
            </p>
            <Link
              href={`/${language}`}
              className="headline-font text-xl sm:text-2xl text-deepearth leading-tight focus-gold"
            >
              {content.brand.name}
            </Link>
          </div>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-stonegray transition-colors hover:bg-deepearth hover:text-cloud focus-gold min-h-[44px] flex items-center"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language toggle */}
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full border border-deepearth/12 bg-white/60 p-0.5 text-sm font-medium">
              <Link
                href="/en"
                aria-label={content.nav.english}
                className={`rounded-full px-3 py-1.5 transition-colors min-h-[36px] flex items-center focus-gold ${
                  language === "en"
                    ? "bg-deepearth text-cloud"
                    : "text-stonegray hover:text-deepearth"
                }`}
              >
                EN
              </Link>
              <Link
                href="/es"
                aria-label={content.nav.spanish}
                className={`rounded-full px-3 py-1.5 transition-colors min-h-[36px] flex items-center focus-gold ${
                  language === "es"
                    ? "bg-deepearth text-cloud"
                    : "text-stonegray hover:text-deepearth"
                }`}
              >
                ES
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile nav row */}
        <nav
          aria-label="Mobile navigation"
          className="flex items-center gap-1 overflow-x-auto px-5 pb-2 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-stonegray transition-colors hover:bg-deepearth/8 focus-gold min-h-[44px] flex items-center flex-shrink-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* ── Page content ────────────────────────────────────────────────── */}
      <main>{children}</main>

      {/* ── Footer (dark documentary band) ──────────────────────────────── */}
      <footer className="section-dark grain">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <p className="headline-font text-fluid-2xl text-cloud">
            {content.footer.credit}
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              {content.footer.mission}
            </p>
            <p className="max-w-2xl text-sm leading-6 text-cloud/70">
              {content.brand.disclaimer}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-cloud/10 pt-6">
            <Link
              href={`/${language}/about`}
              className="text-sm text-cloud/60 transition hover:text-cloud focus-gold"
            >
              {content.nav.about}
            </Link>
            <Link
              href={`/${language}/contact`}
              className="text-sm text-cloud/60 transition hover:text-cloud focus-gold"
            >
              {content.nav.contact}
            </Link>
            <Link
              href={`/${language}/library`}
              className="text-sm text-cloud/60 transition hover:text-cloud focus-gold"
            >
              {content.nav.library}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
