import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about PachaMind.",
};

const FAQS = [
  {
    question: "Is PachaMind really free?",
    answer:
      "Yes. PachaMind is 100% free to use. There are no paywalls, no premium tiers, no ads, and no purchase required. All lessons, badges, and progress tracking are completely free.",
  },
  {
    question: "Do I need an account to watch videos?",
    answer:
      "No. You can watch every video on PachaMind without creating an account. Creating a free account only allows you to save your progress, earn badges, and continue the Puma Path across devices.",
  },
  {
    question: "Who is Mallku Aribalo?",
    answer:
      "Mallku Aribalo (James Arevalo Merejildo) is an Andean tradition-holder and educator from the Sacred Valley of Peru. All teachings on PachaMind are his. You can learn more on the About Mallku page.",
  },
  {
    question: "Is this a retreat booking or ceremony access site?",
    answer:
      "No. PachaMind is strictly an educational platform. We do not sell retreats, ceremonies, travel, applications, memberships, or any paid service. Our product is free educational content.",
  },
  {
    question: "What is the Puma Path?",
    answer:
      "The Puma Path is a five-stage learning journey: Semilla, Raíz, Tallo, Flor, and Puma. You progress through stages by completing lessons and reflections. It is a way to track and honor your learning — not a gamified points system.",
  },
  {
    question: "Are the teachings culturally accurate?",
    answer:
      "Cultural accuracy is central to our mission. All content is created and reviewed with Mallku Aribalo. We do not allow AI or external contributors to fabricate or alter his teachings.",
  },
  {
    question: "Can I share lessons with others?",
    answer:
      "Yes — please do. Any lesson link can be shared freely. We only ask that you attribute the teachings to Mallku Aribalo (James Arevalo Merejildo) when sharing.",
  },
  {
    question: "Is there a Spanish version?",
    answer:
      "We are working on bilingual (EN/ES) versions of lessons. Some content will be available in Spanish. Sign up to receive updates when Spanish lessons are released.",
  },
];

export default function FAQPage() {
  return (
    <div style={{ backgroundColor: "var(--color-paper-white)" }}>
      <section
        className="section-pad border-b"
        style={{
          backgroundColor: "var(--color-stone-100)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container-pm max-w-3xl flex flex-col gap-4">
          <h1
            className="text-3xl sm:text-4xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            Everything you need to know about PachaMind and how it works.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pm max-w-2xl mx-auto flex flex-col gap-8">
          {FAQS.map((faq) => (
            <div
              key={faq.question}
              className="flex flex-col gap-3 pb-8 border-b"
              style={{ borderColor: "var(--color-border)" }}
            >
              <h2
                className="text-lg font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
              >
                {faq.question}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
