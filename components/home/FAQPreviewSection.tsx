import Link from "next/link";

const FAQS = [
  {
    question: "Is PachaMind really free?",
    answer:
      "Yes. PachaMind is 100% free to use. There are no paywalls, no premium tiers, no ads, and no purchase required. Ever.",
  },
  {
    question: "Do I need an account to watch videos?",
    answer:
      "No account is needed to watch any video. Creating a free account lets you save progress, earn badges, and continue where you left off.",
  },
  {
    question: "Who is Mallku Aribalo?",
    answer:
      "Mallku Aribalo (James Arevalo Merejildo) is an Andean tradition-holder and educator from the Sacred Valley of Peru. All teachings on PachaMind are his.",
  },
  {
    question: "Is this a spiritual retreat booking site?",
    answer:
      "No. PachaMind is an educational platform only. We do not sell retreats, ceremonies, travel experiences, or any paid services.",
  },
  {
    question: "Can I share these lessons with others?",
    answer:
      "Yes — please do. These teachings are meant to spread. Share any lesson link freely. Cultural attribution to Mallku Aribalo is always appreciated.",
  },
];

export function FAQPreviewSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--color-paper-white)" }}
    >
      <div className="container-pm max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-terra-500)" }}
          >
            Questions
          </p>
          <h2
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            Frequently asked
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {FAQS.map((faq) => (
            <div
              key={faq.question}
              className="pb-6 border-b"
              style={{ borderColor: "var(--color-border)" }}
            >
              <h3
                className="text-base font-semibold mb-2"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
              >
                {faq.question}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--color-accent)" }}
          >
            See all frequently asked questions →
          </Link>
        </div>
      </div>
    </section>
  );
}
