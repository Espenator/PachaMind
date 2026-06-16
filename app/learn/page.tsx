import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Start Learning Free",
  description:
    "Begin your free Andean learning journey on PachaMind. No account required.",
};

export default function LearnPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-paper-white)" }}
    >
      {/* Hero */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-kay-pacha)" }}
      >
        <div className="container-pm max-w-2xl mx-auto text-center flex flex-col gap-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-terra-500)" }}
          >
            Free · No account required
          </p>
          <h1
            className="text-3xl sm:text-4xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            Start Learning Free
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            All lessons on PachaMind are free. You can watch any video right now
            — no account, no email, no cost. Create a free account only if you
            want to save your progress and earn Puma Path badges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/videos" size="lg">Browse the video library</Button>
            <Button href="/signup" variant="secondary" size="lg">Save my place — free</Button>
          </div>
        </div>
      </section>

      {/* Path overview */}
      <section className="section-pad">
        <div className="container-pm max-w-3xl mx-auto flex flex-col gap-8">
          <h2
            className="text-2xl font-semibold text-center"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            What you will learn
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TOPICS.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="flex flex-col gap-2 p-5 rounded-xl transition-shadow hover:shadow-md"
                style={{
                  backgroundColor: "var(--color-paper-cream)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <span className="text-2xl" aria-hidden="true">{topic.icon}</span>
                <h3
                  className="text-base font-semibold"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
                >
                  {topic.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const TOPICS = [
  {
    href: "/andean-cosmovision",
    icon: "🌍",
    title: "Andean Cosmovision",
    description: "The living worldview of the Andes — a framework for understanding cosmos, community, and earth.",
  },
  {
    href: "/the-three-pachas",
    icon: "🌿",
    title: "The Three Pachas",
    description: "Explore the three realms of Andean existence: inner world, present world, and upper world.",
  },
  {
    href: "/the-five-andean-values",
    icon: "🤝",
    title: "Five Andean Values",
    description: "The foundational values of Andean life: Ayni, Munay, Yachay, Llankay, and Kawsay.",
  },
  {
    href: "/archaeo-astronomy",
    icon: "⭐",
    title: "Archaeo-astronomy",
    description: "How Andean peoples read the night sky — including the dark constellations of the Milky Way.",
  },
  {
    href: "/conservation",
    icon: "🏔️",
    title: "Conservation",
    description: "Traditional ecological knowledge and the urgent need to protect Andean landscapes.",
  },
  {
    href: "/field-notes",
    icon: "📓",
    title: "Field Notes",
    description: "On-location observations and teachings from the Sacred Valley.",
  },
];
