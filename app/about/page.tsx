import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About PachaMind",
  description: "PachaMind is a free nonprofit educational platform rooted in Andean cosmovision.",
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--color-paper-white)" }}>
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-stone-100)" }}
      >
        <div className="container-pm max-w-3xl flex flex-col gap-5">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-terra-500)" }}>
            Our mission
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            About PachaMind
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            A free educational platform for Andean wisdom — built to last, built
            to share, built to honor the tradition it carries.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pm max-w-3xl mx-auto flex flex-col gap-6 text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
          <p>
            PachaMind was created to make the teachings of Andean tradition-holder
            Mallku Aribalo freely available to anyone, anywhere in the world.
          </p>
          <p>
            We are not a retreat company. We are not a platform for selling
            ceremonies, travel, or cultural access. We are an educational platform
            — and our product is knowledge, offered freely.
          </p>

          <h2
            className="text-2xl font-semibold mt-4"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            Our principles
          </h2>
          <ul className="flex flex-col gap-3 list-disc pl-5">
            <li><strong style={{ color: "var(--color-foreground)" }}>100% free.</strong> Every lesson, every badge, every reflection — no cost ever.</li>
            <li><strong style={{ color: "var(--color-foreground)" }}>Cultural integrity.</strong> All teachings are attributed to Mallku Aribalo and reviewed for accuracy.</li>
            <li><strong style={{ color: "var(--color-foreground)" }}>No advertising.</strong> No sponsors, no affiliate links, no commercial partnerships on the public platform.</li>
            <li><strong style={{ color: "var(--color-foreground)" }}>Education, not tourism.</strong> We teach about Andean culture — we do not sell access to ceremonies or retreats.</li>
            <li><strong style={{ color: "var(--color-foreground)" }}>Mobile-first.</strong> Built for the learner with any device, anywhere.</li>
          </ul>

          <Button href="/learn" size="md" className="self-start mt-4">
            Start learning free
          </Button>
        </div>
      </section>
    </div>
  );
}
