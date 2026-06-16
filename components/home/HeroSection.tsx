import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-end pb-16 overflow-hidden"
      style={{ backgroundColor: "var(--color-stone-900)" }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent"
        aria-hidden="true"
      />

      {/* Placeholder cinematic background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{ backgroundColor: "var(--color-stone-700)" }}
        aria-hidden="true"
      />

      <div className="container-pm relative z-10 flex flex-col gap-6 max-w-2xl">
        {/* Overline */}
        <p
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--color-terra-300)" }}
        >
          Free · Educational · Andean
        </p>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
          style={{
            fontFamily: "var(--font-serif)",
            color: "#FDFAF6",
          }}
        >
          Learn from the Andes.
          <br />
          <span style={{ color: "var(--color-terra-300)" }}>Free, always.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl leading-relaxed max-w-lg"
          style={{ color: "var(--color-stone-300)" }}
        >
          Short video lessons on Andean cosmovision, the Three Pachas, and the
          wisdom of the Sacred Valley — taught by tradition-holder Mallku
          Aribalo.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Button href="/learn" size="lg">
            Start Learning Free
          </Button>
          <Button href="/videos" variant="secondary" size="lg" className="border-white/30 text-white">
            Browse Videos
          </Button>
        </div>

        {/* Trust note */}
        <p className="text-sm mt-2" style={{ color: "var(--color-stone-400)" }}>
          No account needed to watch. No ads. No fee. Ever.
        </p>
      </div>
    </section>
  );
}
