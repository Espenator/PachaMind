import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "var(--color-paper-white)" }}>
      <section className="section-pad">
        <div className="container-pm max-w-2xl mx-auto flex flex-col gap-6">
          <h1
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            Terms of Use
          </h1>
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            Last updated: 2024
          </p>

          <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            <p>
              PachaMind is a free educational platform. By using PachaMind, you
              agree to the following terms.
            </p>

            <h2 className="text-xl font-semibold" style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}>
              Educational use
            </h2>
            <p>
              Content on PachaMind is for educational purposes only. It does not
              constitute medical, therapeutic, psychological, or spiritual advice.
              It is not a substitute for professional support of any kind.
            </p>

            <h2 className="text-xl font-semibold" style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}>
              Cultural attribution
            </h2>
            <p>
              All teachings on PachaMind are attributed to Mallku Aribalo (James
              Arevalo Merejildo). When sharing content from PachaMind, please
              attribute the teachings accordingly. Do not present these teachings
              as your own.
            </p>

            <h2 className="text-xl font-semibold" style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}>
              No commercial use
            </h2>
            <p>
              You may not use PachaMind content for commercial purposes without
              written permission. This includes reselling, repackaging, or
              monetizing any lesson, badge, transcript, or video content.
            </p>

            <h2 className="text-xl font-semibold" style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}>
              Contact
            </h2>
            <p>
              Questions:{" "}
              <a href="mailto:hello@pachamind.org" className="underline" style={{ color: "var(--color-accent)" }}>
                hello@pachamind.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
