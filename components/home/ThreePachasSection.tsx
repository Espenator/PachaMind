import { Button } from "@/components/ui/Button";

const PACHAS = [
  {
    name: "Uku Pacha",
    subtitle: "The Inner World",
    description:
      "The realm of the deep earth — of seeds, ancestors, and all that is becoming. Associated with roots, potential, and the generative dark.",
    pacha: "uku" as const,
    bg: "var(--color-stone-800)",
    text: "var(--color-stone-100)",
    accent: "var(--color-terra-400)",
  },
  {
    name: "Kay Pacha",
    subtitle: "The Present World",
    description:
      "The living world we inhabit — the realm of relationships, community, seasons, and daily existence. The place of Ayni in action.",
    pacha: "kay" as const,
    bg: "var(--color-stone-100)",
    text: "var(--color-foreground)",
    accent: "var(--color-terra-500)",
  },
  {
    name: "Hanaq Pacha",
    subtitle: "The Upper World",
    description:
      "The realm of stars, sky, celestial movements, and expanded awareness. The source of light, vision, and far-reaching knowledge.",
    pacha: "hanaq" as const,
    bg: "var(--color-sky-50)",
    text: "var(--color-foreground)",
    accent: "var(--color-sky-600)",
  },
];

export function ThreePachasSection() {
  return (
    <section className="section-pad" style={{ backgroundColor: "var(--color-paper-white)" }}>
      <div className="container-pm">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-terra-500)" }}
          >
            Core teaching
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
          >
            The Three Pachas
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            Andean cosmovision divides the cosmos into three living realms.
            Together they form a complete picture of existence — past, present, and
            infinite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACHAS.map((pacha) => (
            <div
              key={pacha.name}
              className="rounded-2xl p-7 flex flex-col gap-3"
              style={{
                backgroundColor: pacha.bg,
                color: pacha.text,
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h3
                className="text-xl font-semibold"
                style={{ fontFamily: "var(--font-serif)", color: pacha.accent }}
              >
                {pacha.name}
              </h3>
              <p className="text-sm font-medium uppercase tracking-wide" style={{ color: pacha.text, opacity: 0.7 }}>
                {pacha.subtitle}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: pacha.text, opacity: 0.9 }}>
                {pacha.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button href="/the-three-pachas" variant="secondary" size="md">
            Explore the Three Pachas
          </Button>
        </div>
      </div>
    </section>
  );
}
