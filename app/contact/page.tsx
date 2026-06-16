import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the PachaMind team.",
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "var(--color-paper-white)" }}>
      <section className="section-pad">
        <div className="container-pm max-w-lg mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h1
              className="text-3xl font-semibold"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
            >
              Contact
            </h1>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              Questions about PachaMind? Reach out via email. We read every message.
            </p>
            <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>
              For educational inquiries:{" "}
              <a
                href="mailto:hello@pachamind.org"
                className="underline hover:opacity-70 transition-opacity"
                style={{ color: "var(--color-accent)" }}
              >
                hello@pachamind.org
              </a>
            </p>
          </div>

          <div
            className="rounded-xl p-5"
            style={{
              backgroundColor: "var(--color-stone-100)",
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              <strong style={{ color: "var(--color-foreground)" }}>Please note:</strong> PachaMind does
              not arrange retreats, ceremonies, or travel experiences. We are an
              educational platform only. Emails requesting ceremony bookings,
              retreat access, or paid services will not be responded to.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
