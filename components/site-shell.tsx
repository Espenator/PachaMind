import Link from "next/link";
import type { ReactNode } from "react";

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
    { href: `/${language}/learn`, label: content.nav.learn },
    { href: `/${language}/library`, label: content.nav.library },
    { href: `/${language}/puma-path`, label: content.nav.pumaPath },
    { href: `/${language}/mallku`, label: content.nav.mallku },
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

            <div className="flex items-center gap-3">
              <Link
                href={`/${language}/signup`}
                className="rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-cloudwhite transition hover:bg-deepearth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                {content.nav.signup}
              </Link>
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
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <footer className="border-t border-deepearth/10 bg-deepearth text-cloudwhite">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 lg:px-10">
          <p className="headline-font text-2xl">{content.footer.credit}</p>
          <p className="text-sm text-cloudwhite/85">{content.brand.disclaimer}</p>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-goldmoun">
            {content.footer.mission}
          </p>
          <nav
            aria-label={content.nav.mainNavLabel}
            className="flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            {[
              { href: `/${language}/signup`, label: content.nav.signup },
              { href: `/${language}/account/preferences`, label: content.nav.preferences },
              { href: `/${language}/conservation`, label: content.nav.conservation },
              { href: `/${language}/about`, label: content.nav.about },
              { href: `/${language}/contact`, label: content.nav.contact },
              { href: `/${language}/privacy`, label: content.nav.privacy },
              { href: `/${language}/terms`, label: content.nav.terms },
              { href: `/${language}/accessibility`, label: content.nav.accessibility },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-cloudwhite/70 transition hover:text-cloudwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-goldmoun"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-cloudwhite/70">{content.nav.complianceNote}</p>
        </div>
      </footer>
    </div>
  );
}
