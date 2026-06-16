"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/learn", label: "Start Learning" },
  { href: "/videos", label: "Video Library" },
  {
    label: "Explore",
    children: [
      { href: "/andean-cosmovision", label: "Andean Cosmovision" },
      { href: "/the-three-pachas", label: "The Three Pachas" },
      { href: "/the-five-andean-values", label: "Five Andean Values" },
      { href: "/archaeo-astronomy", label: "Archaeo-astronomy" },
      { href: "/conservation", label: "Conservation" },
    ],
  },
  { href: "/field-notes", label: "Field Notes" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: "var(--color-paper-white)",
        borderColor: "var(--color-border)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div className="container-pm flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-inherit no-underline"
          aria-label="PachaMind home"
        >
          <span
            className="text-xl font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-terra-600)" }}
          >
            PachaMind
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setExploreOpen((o) => !o)}
                  className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: "var(--color-muted-foreground)" }}
                  aria-expanded={exploreOpen}
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${exploreOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {exploreOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-52 rounded-lg shadow-lg border py-2"
                    style={{
                      backgroundColor: "var(--color-paper-white)",
                      borderColor: "var(--color-border)",
                      boxShadow: "var(--shadow-lg)",
                    }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setExploreOpen(false)}
                        className="block px-4 py-2 text-sm transition-colors hover:opacity-80"
                        style={{ color: "var(--color-foreground)" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/dashboard"
            className="text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            My Learning
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "#fff",
            }}
          >
            Start Free
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          style={{ color: "var(--color-foreground)" }}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{
            backgroundColor: "var(--color-paper-white)",
            borderColor: "var(--color-border)",
          }}
        >
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "var(--color-muted)" }}
                >
                  {link.label}
                </p>
                <div className="flex flex-col gap-2 pl-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-medium"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium"
                style={{ color: "var(--color-foreground)" }}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-2 border-t flex flex-col gap-3" style={{ borderColor: "var(--color-border)" }}>
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium"
              style={{ color: "var(--color-foreground)" }}
            >
              My Learning
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-3 rounded-full text-base font-medium"
              style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
            >
              Start Free
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
