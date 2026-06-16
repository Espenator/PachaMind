import Link from "next/link";

const FOOTER_LINKS = {
  Learn: [
    { href: "/learn", label: "Start Learning Free" },
    { href: "/videos", label: "Video Library" },
    { href: "/dashboard", label: "My Learning" },
    { href: "/glossary", label: "Glossary" },
  ],
  Explore: [
    { href: "/andean-cosmovision", label: "Andean Cosmovision" },
    { href: "/the-three-pachas", label: "The Three Pachas" },
    { href: "/the-five-andean-values", label: "Five Andean Values" },
    { href: "/archaeo-astronomy", label: "Archaeo-astronomy" },
    { href: "/conservation", label: "Conservation" },
  ],
  Community: [
    { href: "/field-notes", label: "Field Notes" },
    { href: "/cultural-calendar", label: "Cultural Calendar" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  About: [
    { href: "/about", label: "About PachaMind" },
    { href: "/about-mallku", label: "About Mallku Aribalo" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
};

export function SiteFooter() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-stone-900)",
        color: "var(--color-stone-300)",
      }}
    >
      <div className="container-pm py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block text-xl font-semibold mb-3"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-paper-cream)",
              }}
            >
              PachaMind
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-stone-400)" }}>
              Free educational content rooted in Andean cosmovision, taught by
              tradition-holder Mallku Aribalo.
            </p>
            <p className="mt-4 text-xs" style={{ color: "var(--color-stone-500)" }}>
              100% free · nonprofit mission · no ads
            </p>
          </div>

          {/* Nav columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-stone-400)" }}
              >
                {group}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-80"
                      style={{ color: "var(--color-stone-300)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="mt-12 pt-8 border-t flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--color-stone-700)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-stone-500)" }}>
            © {new Date().getFullYear()} PachaMind. All teachings attributed to
            Mallku Aribalo (James Arevalo Merejildo).
          </p>
          <p className="text-xs" style={{ color: "var(--color-stone-500)" }}>
            Rooted in the Sacred Valley · Shared with the world
          </p>
        </div>
      </div>
    </footer>
  );
}
