import { Button } from "@/components/ui/Button";
import { FieldNoteCard } from "@/components/ui/FieldNoteCard";
import { SEED_FIELD_NOTES } from "@/lib/seed-data";

export function FieldNotesSection() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "var(--color-stone-100)" }}
    >
      <div className="container-pm">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-terra-500)" }}
            >
              From the field
            </p>
            <h2
              className="text-3xl font-semibold"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
            >
              Field Notes
            </h2>
          </div>
          <Button href="/field-notes" variant="ghost" size="sm">
            All field notes →
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SEED_FIELD_NOTES.map((note) => (
            <FieldNoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
    </section>
  );
}
