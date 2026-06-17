"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { VideoEmbed } from "@/components/video-embed";
import type { Language, Lesson, SiteContent } from "@/lib/types";

interface LibrarySearchProps {
  lessons: Lesson[];
  library: SiteContent["library"];
  brand: SiteContent["brand"];
  lang: Language;
}

/** Maps topic keys to a Tailwind colour variant */
const TOPIC_CHIP: Record<string, string> = {
  listening:   "bg-sky/15 text-sky ring-1 ring-sky/30",
  reciprocity: "bg-moss/15 text-moss ring-1 ring-moss/30",
  ritual:      "bg-terracotta/15 text-terracotta ring-1 ring-terracotta/30",
  stewardship: "bg-gold/15 text-deepearth ring-1 ring-gold/30",
};

export function LibrarySearch({ lessons, library, brand, lang }: LibrarySearchProps) {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  /*
   * activeTopic is derived directly from the URL — no local state needed.
   * Browser back/forward automatically updates the filter without any
   * useEffect sync, which avoids the react-hooks/set-state-in-effect rule.
   */
  const activeTopic = searchParams.get("topic") ?? "";

  /*
   * Null-sentinel pattern: typingValue is non-null ONLY while the user is
   * actively editing the search box.  After the debounce fires we reset it
   * to null so that the URL value takes ownership again — meaning
   * browser back/forward automatically updates the displayed text without
   * needing any useEffect state sync.
   */
  const urlQ = searchParams.get("q") ?? "";
  const [typingValue, setTypingValue] = useState<string | null>(null);
  const inputValue = typingValue ?? urlQ;

  const debounceRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const uniqueTopics = Array.from(
    new Set(lessons.map((l) => l.topic).filter((topic): topic is string => Boolean(topic))),
  );

  function updateUrl(q: string, topic: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (q)     { params.set("q",     q);     } else { params.delete("q"); }
    if (topic) { params.set("topic", topic); } else { params.delete("topic"); }
    const query = params.toString();
    router.replace(`${pathname}${query ? `?${query}` : ""}`, { scroll: false });
  }

  function handleTopicChange(topic: string) {
    updateUrl(inputValue, topic === activeTopic ? "" : topic);
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setTypingValue(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      updateUrl(value, activeTopic);
      setTypingValue(null); // Hand control back to the URL
    }, 300);
  }

  /* Cleanup debounce timer on unmount. */
  useEffect(() => {
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, []);

  const query    = inputValue.trim().toLowerCase();
  const filtered = lessons.filter((lesson) => {
    const matchesTopic = !activeTopic || lesson.topic === activeTopic;
    const matchesQuery =
      !query ||
      lesson.title.toLowerCase().includes(query) ||
      lesson.description.toLowerCase().includes(query);
    return matchesTopic && matchesQuery;
  });

  return (
    <>
      {/* ── Search & filter controls ─────────────────────────────────── */}
      <div className="documentary-card mt-6 flex flex-col gap-5 p-5 sm:p-7">
        {/* Search input */}
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stonegray"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.15 6.15a7.5 7.5 0 0 0 10.5 10.5Z" />
          </svg>
          <input
            type="search"
            value={inputValue}
            onChange={handleSearchChange}
            placeholder={library.searchPlaceholder}
            aria-label={library.searchPlaceholder}
            className="w-full rounded-full border border-deepearth/12 bg-white/80 py-3 pl-11 pr-5 text-sm text-deepearth placeholder-stonegray/60 outline-none focus-gold min-h-[44px]"
          />
        </div>

        {/* Topic chips */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by topic">
          <button
            onClick={() => handleTopicChange("")}
            aria-pressed={activeTopic === ""}
            className={`rounded-full px-4 py-2 text-sm font-medium transition min-h-[44px] focus-gold ${
              activeTopic === ""
                ? "bg-deepearth text-cloud"
                : "border border-deepearth/12 bg-white/80 text-stonegray hover:bg-deepearth/8"
            }`}
          >
            {library.filterAllLabel}
          </button>
          {uniqueTopics.map((topic) => (
            <button
              key={topic}
              onClick={() => handleTopicChange(topic)}
              aria-pressed={activeTopic === topic}
              className={`rounded-full px-4 py-2 text-sm font-medium transition min-h-[44px] focus-gold ${
                activeTopic === topic
                  ? "bg-terracotta text-cloud"
                  : `${TOPIC_CHIP[topic] ?? "bg-sand text-stonegray"} hover:opacity-80`
              }`}
            >
              {library.topics[topic] ?? topic}
            </button>
          ))}
        </div>
      </div>

      {/* ── Lesson cards ─────────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="documentary-card mt-8 px-8 py-16 text-center">
          <p className="text-base text-stonegray">{library.emptyState}</p>
        </div>
      ) : (
        <section className="mt-8 grid gap-6" aria-label={library.title}>
          {filtered.map((lesson) => (
            <article
              key={lesson.slug}
              className="documentary-card overflow-hidden"
            >
              {/* Mobile: video on top; desktop: side by side (video left) */}
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                {/* Video column — leads the card */}
                <div className="relative">
                  <VideoEmbed lesson={lesson} />
                  {/* Topic chip overlaid on card at mobile */}
                  <span
                    className={`absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] lg:hidden ${lesson.topic ? (TOPIC_CHIP[lesson.topic] ?? "bg-sand text-stonegray") : "bg-sand text-stonegray"}`}
                  >
                    {lesson.topic ? (library.topics[lesson.topic] ?? lesson.topic) : lesson.topic}
                  </span>
                </div>

                {/* Content column */}
                <div className="flex flex-col gap-5 p-6 lg:p-8">
                  <div>
                    {/* Topic chip — desktop only */}
                    <div className="mb-3 hidden lg:block">
                      <span
                        className={`rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${lesson.topic ? (TOPIC_CHIP[lesson.topic] ?? "bg-sand text-stonegray") : "bg-sand text-stonegray"}`}
                      >
                        {lesson.topic ? (library.topics[lesson.topic] ?? lesson.topic) : lesson.topic}
                      </span>
                    </div>

                    <p className="text-xs uppercase tracking-[0.3em] text-stonegray/70">
                      {lesson.kicker}&ensp;·&ensp;{lesson.duration}
                    </p>
                    <h2 className="headline-font mt-2 text-fluid-2xl text-deepearth">
                      {lesson.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-stonegray">{lesson.description}</p>
                  </div>

                  {/* Learning notes */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-stonegray/60 mb-3">
                      {library.notesLabel}
                    </p>
                    <ul className="space-y-2">
                      {lesson.learningNotes.map((note) => (
                        <li key={note} className="flex items-start gap-2 text-sm leading-6 text-deepearth">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-2">
                    <Link
                      href={`/${lang}/lesson/${lesson.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-deepearth px-5 py-3 text-sm font-semibold text-cloud transition hover:bg-terracotta focus-gold min-h-[44px]"
                    >
                      {library.openLessonLabel}
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}

      {/* ── Promise reminder ─────────────────────────────────────────── */}
      <div className="mt-10 rounded-[1.5rem] bg-sand/60 px-7 py-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-terracotta">
          {brand.promise}
        </p>
      </div>
    </>
  );
}
