import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Mallku Aribalo",
  description:
    "Learn about Mallku Aribalo (James Arevalo Merejildo), Andean tradition-holder and the teacher behind PachaMind.",
};

export default function AboutMallkuPage() {
  return (
    <div style={{ backgroundColor: "var(--color-paper-white)" }}>
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-stone-100)" }}
      >
        <div className="container-pm max-w-3xl flex flex-col gap-5">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-terra-500)" }}>
            Tradition-holder & teacher
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            Mallku Aribalo
          </h1>
          <p className="text-lg" style={{ color: "var(--color-muted-foreground)" }}>
            James Arevalo Merejildo — Andean Shamanic Teacher & Tradition-Holder
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-pm max-w-3xl mx-auto flex flex-col gap-6">
          {/* Portrait placeholder */}
          <div
            className="w-48 h-48 rounded-2xl overflow-hidden"
            style={{ backgroundColor: "var(--color-stone-300)" }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-4 text-base leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            <p>
              Mallku Aribalo (James Arevalo Merejildo) is a respected Andean
              tradition-holder, educator, and cultural bridge-builder from the
              Sacred Valley of Peru. His lineage of knowledge encompasses Andean
              cosmovision, ceremonial practice, archaeo-astronomy, and the living
              relationship between people and the Andean land.
            </p>
            <p>
              Mallku has shared his teachings across many countries and cultures,
              always rooted in the principle of Ayni — that knowledge given freely
              and with respect returns to enrich the world.
            </p>
            <p>
              PachaMind is his vision for how these teachings can reach the widest
              possible audience — free from commercial barriers, free from
              distortion, and grounded in cultural integrity.
            </p>
            <p>
              All teachings on PachaMind are attributed to Mallku Aribalo and
              are shared with his guidance and consent. Cultural accuracy and
              attribution are built into every lesson.
            </p>
          </div>

          <div
            className="rounded-xl p-5 border-l-4"
            style={{
              backgroundColor: "var(--color-stone-100)",
              borderColor: "var(--color-terra-400)",
            }}
          >
            <p
              className="text-base italic leading-relaxed"
              style={{ color: "var(--color-foreground)" }}
            >
              &ldquo;These teachings belong to the Andes. I am only the bridge.&rdquo;
            </p>
            <p
              className="text-sm mt-2"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              — Mallku Aribalo
            </p>
          </div>

          <Button href="/learn" variant="secondary" size="md" className="self-start mt-4">
            Learn with Mallku
          </Button>
        </div>
      </section>
    </div>
  );
}
