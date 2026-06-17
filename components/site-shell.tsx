import Link from "next/link";
import type { ReactNode } from "react";

import { AuthControls } from "@/components/auth-controls";
import { NavBar } from "@/components/nav-bar";
import type { Language, SiteContent } from "@/lib/types";

interface SiteShellProps {
  content: SiteContent;
  language: Language;
  children: ReactNode;
}

export function SiteShell({ content, language, children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-cloudwhite text-deepearth">
      <header className="sticky top-0 z-40 border-b border-deepearth/10 bg-cloudwhite/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
          <div className="flex flex-col gap-4">
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
                <AuthControls language={language} />
              </div>
            </div>
            <NavBar content={content} language={language} />
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-deepearth/10 bg-deepearth text-cloudwhite">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr_1fr]">
            <div>
              <p className="headline-font text-2xl">{content.footer.credit}</p>
              <p className="mt-3 text-sm leading-7 text-cloudwhite/70">{content.brand.disclaimer}</p>
            </div>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              <p className="mb-1 text-xs uppercase tracking-[0.28em] text-goldmoun">{content.nav.home}</p>
              {[
                { href: `/${language}/curriculum`, label: content.nav.curriculum },
                { href: `/${language}/library`, label: content.nav.library },
                { href: `/${language}/puma-path`, label: content.nav.pumaPath },
                { href: `/${language}/conservation`, label: content.nav.conservation },
                { href: `/${language}/reflections`, label: content.nav.reflections },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-cloudwhite/70 transition hover:text-cloudwhite"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <nav aria-label="Footer navigation secondary" className="flex flex-col gap-2">
              <p className="mb-1 text-xs uppercase tracking-[0.28em] text-goldmoun">{content.nav.dashboard}</p>
              {[
                { href: `/${language}/dashboard`, label: content.nav.dashboard },
                { href: `/${language}/about`, label: content.nav.about },
                { href: `/${language}/contact`, label: content.nav.contact },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-cloudwhite/70 transition hover:text-cloudwhite"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-8 border-t border-cloudwhite/10 pt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-goldmoun">
              {content.footer.mission}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
