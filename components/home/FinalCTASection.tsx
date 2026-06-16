import { Button } from "@/components/ui/Button";

export function FinalCTASection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--color-hanaq-pacha)" }}
    >
      <div className="container-pm text-center flex flex-col items-center gap-6 max-w-2xl mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--color-sky-600)" }}
        >
          Your path begins here
        </p>
        <h2
          className="text-3xl sm:text-4xl font-semibold leading-snug"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
        >
          The Andes are waiting.
          <br />
          No cost. No rush. No requirement.
        </h2>
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          Save your place on the Puma Path, continue where you left off, and
          receive new lessons as they are released. All free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Button href="/signup" size="lg">
            Start learning free
          </Button>
          <Button href="/videos" variant="secondary" size="lg">
            Browse the video library
          </Button>
        </div>
        <p
          className="text-sm"
          style={{ color: "var(--color-muted)" }}
        >
          Just your first name and email. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
