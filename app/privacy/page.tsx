import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "var(--color-paper-white)" }}>
      <section className="section-pad">
        <div className="container-pm max-w-2xl mx-auto flex flex-col gap-6">
          <h1
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            Last updated: 2024
          </p>

          <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            <p>
              PachaMind collects only the minimum information necessary to provide
              a free educational experience: your first name and email address when
              you create an account.
            </p>

            <h2 className="text-xl font-semibold" style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}>
              What we collect
            </h2>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>First name and email address (for account creation)</li>
              <li>Lesson progress and badge completion (stored to your account)</li>
              <li>Reflection responses (stored only in your account, never shared)</li>
            </ul>

            <h2 className="text-xl font-semibold" style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}>
              What we never do
            </h2>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Sell your data to any third party</li>
              <li>Use your data for advertising</li>
              <li>Share your reflection responses</li>
              <li>Send unsolicited commercial messages</li>
            </ul>

            <h2 className="text-xl font-semibold" style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}>
              Contact
            </h2>
            <p>
              Privacy questions:{" "}
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
