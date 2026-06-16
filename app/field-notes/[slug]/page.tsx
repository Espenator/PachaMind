import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEED_FIELD_NOTES } from "@/lib/seed-data";

interface FieldNotePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SEED_FIELD_NOTES.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: FieldNotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = SEED_FIELD_NOTES.find((n) => n.slug === slug);
  if (!note) return { title: "Field note not found" };
  return { title: note.title, description: note.excerpt };
}

export default async function FieldNotePage({ params }: FieldNotePageProps) {
  const { slug } = await params;
  const note = SEED_FIELD_NOTES.find((n) => n.slug === slug);
  if (!note) notFound();

  return (
    <article
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-paper-white)" }}
    >
      {note.imageUrl && (
        <div
          className="w-full aspect-video max-h-96 overflow-hidden"
          style={{ backgroundColor: "var(--color-stone-300)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={note.imageUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="container-pm max-w-2xl mx-auto py-12 flex flex-col gap-6">
        {note.location && (
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-muted)" }}
          >
            {note.location}
          </p>
        )}
        <h1
          className="text-3xl sm:text-4xl font-semibold leading-snug"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-foreground)" }}
        >
          {note.title}
        </h1>
        <div className="flex items-center gap-3">
          <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>
            {note.author}
          </p>
          <span style={{ color: "var(--color-muted)" }}>·</span>
          <time
            dateTime={note.date}
            className="text-sm"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            {new Date(note.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <div
          className="h-px w-12"
          style={{ backgroundColor: "var(--color-terra-400)" }}
          aria-hidden="true"
        />

        <div
          className="prose max-w-none text-base leading-relaxed"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          <p>{note.body}</p>
        </div>

        {note.tags && note.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {note.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "var(--color-stone-100)",
                  color: "var(--color-muted-foreground)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
