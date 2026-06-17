import Link from "next/link";
import type { ReactNode } from "react";

import { ContinueWatchingBar } from "@/components/continue-watching-bar";
import { MobileNav } from "@/components/mobile-nav";
import type { Language, SiteContent } from "@/lib/types";

interface SiteShellProps {
  content: SiteContent;
  language: Language;
  children: ReactNode;
}

export function SiteShell({ content, language, children }: SiteShellProps) {
  const navItems = [
    { href: `/${language}`, label: content.nav.home },
    { href: `/${language}/curriculum`, label: content.nav.curriculum },
    { href: `/${language}/library`, label: content.nav.library },
    { href: `/${language}/puma-path`, label: content.nav.pumaPath },
    { href: `/${language}/conservation`, label: content.nav.conservation },
    { href: `/${language}/dashboard`, label: content.nav.dashboard },
    { href: `/${language}/reflections`, label: content.nav.reflections },
    { href: `/${language}/about`, label: content.nav.about },
    { href: `/${language}/contact`, label: content.nav.contact },
  ];

  const langLinks = [
    { href: "/en", label: content.nav.english },
    { href: "/es", label: content.nav.spanish },
  ];

  return (
    <div className="min-h-screen bg-cloudwhite text-deepearth">
      {/* Skip navigation link — visible only on focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-deepearth focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cloudwhite focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-terracotta"
      >
        {content.nav.skipToContent}
      </a>

      <header className="relative border-b border-deepearth/10 bg-cloudwhite/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 lg:px-10">
          {/* Top bar: brand + badges (desktop) + mobile hamburger */}
          <div className="flex items-start justify-between gap-4 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta">{content.brand.eyebrow}</p>
              <Link
                href={`/${language}`}
                className="headline-font mt-2 block text-3xl text-deepearth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                {content.brand.name}
              </Link>
            </div>

            <div className="flex items-center gap-3">
              {/* Promise + tradition-holder badges: hidden on small screens */}
              <div className="hidden flex-wrap items-center gap-3 text-sm text-stonegray lg:flex">
                <span className="rounded-full border border-deepearth/10 bg-white px-4 py-2">
                  {content.brand.promise}
                </span>
                <span className="rounded-full border border-deepearth/10 bg-white px-4 py-2">
                  {content.brand.traditionHolderLabel}: {content.brand.traditionHolderName}
                </span>
              </div>

              {/* Hamburger button — only on small screens */}
              <MobileNav
                navItems={navItems}
                langLinks={langLinks}
                openLabel={content.nav.openMenu}
                closeLabel={content.nav.closeMenu}
                languageToggleLabel={content.nav.languageToggleLabel}
              />
            </div>
          </div>

          {/* Desktop nav row — hidden on mobile, shown from md */}
          <div className="hidden items-center justify-between gap-4 md:flex">
            <nav
              aria-label={content.nav.mainNavLabel}
              className="flex flex-wrap items-center gap-2 text-sm font-medium"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 transition hover:bg-deepearth hover:text-cloudwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div
              role="group"
              aria-label={content.nav.languageToggleLabel}
              className="flex items-center gap-2 text-sm"
            >
              {langLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-deepearth/10 px-4 py-2 transition hover:bg-skyblue hover:text-cloudwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <ContinueWatchingBar
        language={language}
        lessons={content.lessons}
        label={content.dashboard.continueLearning}
      />

      <footer className="border-t border-deepearth/10 bg-deepearth text-cloudwhite">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="space-y-4">
            <p className="headline-font text-2xl">{content.footer.credit}</p>
            <p className="text-sm text-cloudwhite/85">{content.brand.disclaimer}</p>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-goldmoun">
              {content.footer.mission}
            </p>
          </div>
          <nav aria-label={content.nav.mainNavLabel} className="grid gap-3 sm:grid-cols-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-cloudwhite/75 transition hover:text-cloudwhite"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
