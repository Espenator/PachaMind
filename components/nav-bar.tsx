"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import type { Language, SiteContent } from "@/lib/types";

interface NavBarProps {
  content: SiteContent;
  language: Language;
}

export function NavBar({ content, language }: NavBarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: `/${language}`, label: content.nav.home, exact: true },
    { href: `/${language}/curriculum`, label: content.nav.curriculum },
    { href: `/${language}/library`, label: content.nav.library },
    { href: `/${language}/puma-path`, label: content.nav.pumaPath },
    { href: `/${language}/conservation`, label: content.nav.conservation },
    { href: `/${language}/reflections`, label: content.nav.reflections },
    { href: `/${language}/dashboard`, label: content.nav.dashboard },
    { href: `/${language}/about`, label: content.nav.about },
    { href: `/${language}/contact`, label: content.nav.contact },
  ];

  function isActive(href: string, exact?: boolean) {
    if (exact) {
      return pathname === href || pathname === `${href}/`;
    }
    return pathname.startsWith(href);
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      {/* Desktop nav */}
      <nav
        className="hidden flex-wrap items-center gap-1 text-sm font-medium lg:flex"
        aria-label="Main navigation"
      >
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href, item.exact) ? "page" : undefined}
            className={`rounded-full px-4 py-2 transition ${
              isActive(item.href, item.exact)
                ? "bg-deepearth text-cloudwhite"
                : "hover:bg-deepearth hover:text-cloudwhite"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Language switcher + mobile toggle */}
      <div className="flex items-center gap-2 text-sm">
        <Link
          href="/en"
          className={`rounded-full border border-deepearth/10 px-4 py-2 transition hover:bg-skyblue hover:text-cloudwhite ${
            language === "en" ? "bg-skyblue text-cloudwhite" : ""
          }`}
        >
          {content.nav.english}
        </Link>
        <Link
          href="/es"
          className={`rounded-full border border-deepearth/10 px-4 py-2 transition hover:bg-skyblue hover:text-cloudwhite ${
            language === "es" ? "bg-skyblue text-cloudwhite" : ""
          }`}
        >
          {content.nav.spanish}
        </Link>

        {/* Hamburger button — mobile only */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="ml-1 flex flex-col justify-center gap-1.5 rounded-lg p-2 transition hover:bg-deepearth/10 lg:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-deepearth transition-all duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-deepearth transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-deepearth transition-all duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="w-full border-t border-deepearth/10 pt-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-0.5">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                aria-current={isActive(item.href, item.exact) ? "page" : undefined}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive(item.href, item.exact)
                    ? "bg-deepearth text-cloudwhite"
                    : "hover:bg-deepearth/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
