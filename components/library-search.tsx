"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { YouTubeEmbed } from "@/components/youtube-embed";
import type { Language, Lesson, SiteContent } from "@/lib/types";

interface LibrarySearchProps {
  lessons: Lesson[];
  library: SiteContent["library"];
  lang: Language;
}

export function LibrarySearch({ lessons, library, lang }: LibrarySearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialQ = searchParams.get("q") ?? "";
  const initialTopic = searchParams.get("topic") ?? "";

  const [inputValue, setInputValue] = useState(initialQ);
  const [activeTopic, setActiveTopic] = useState(initialTopic);

  // Keep a ref for the debounce timer
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Derive unique topics in the order lessons appear
  const uniqueTopics = Array.from(new Set(lessons.map((l) => l.topic).filter((t): t is string => t !== undefined)));

  // Sync URL when activeTopic changes (immediate)
  function updateUrl(q: string, topic: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (q) {
      params.set("q", q);
    } else {
      params.delete("q");
    }
    if (topic) {
      params.set("topic", topic);
    } else {
      params.delete("topic");
    }
    const query = params.toString();
    router.replace(`${pathname}${query ? `?${query}` : ""}`, { scroll: false });
  }

  function handleTopicChange(topic: string) {
    const next = topic === activeTopic ? "" : topic;
    setActiveTopic(next);
    updateUrl(inputValue, next);
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setInputValue(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      updateUrl(value, activeTopic);
    }, 300);
  }

  // Clean up debounce on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  // Filter lessons
  const query = inputValue.trim().toLowerCase();
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
      {/* Search and filter controls */}
      <div className="documentary-card mt-6 flex flex-col gap-5 p-6 lg:p-8">
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
            className="w-full rounded-full border border-deepearth/15 bg-white/80 py-3 pl-11 pr-5 text-sm text-deepearth placeholder-stonegray/70 outline-none ring-terracotta/40 transition focus:ring-2"
          />
        </div>

        {/* Topic filter chips */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by topic">
          <button
            onClick={() => handleTopicChange("")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeTopic === ""
                ? "bg-deepearth text-cloudwhite"
                : "border border-deepearth/15 bg-white/80 text-stonegray hover:bg-deepearth/10"
            }`}
            aria-pressed={activeTopic === ""}
          >
            {library.filterAllLabel}
          </button>
          {uniqueTopics.map((topic) => (
            <button
              key={topic}
              onClick={() => handleTopicChange(topic)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeTopic === topic
                  ? "bg-terracotta text-cloudwhite"
                  : "border border-deepearth/15 bg-white/80 text-stonegray hover:bg-terracotta/10"
              }`}
              aria-pressed={activeTopic === topic}
            >
              {library.topics[topic] ?? topic}
            </button>
          ))}
        </div>
      </div>

      {/* Lesson cards or empty state */}
      {filtered.length === 0 ? (
        <div className="documentary-card mt-8 px-8 py-14 text-center">
          <p className="text-base text-stonegray">{library.emptyState}</p>
        </div>
      ) : (
        <section className="mt-8 grid gap-8">
          {filtered.map((lesson) => (
            <article
              key={lesson.slug}
              className="documentary-card grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8"
            >
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
                    {lesson.kicker} · {lesson.duration}
                  </p>
                  <h2 className="headline-font mt-3 text-3xl text-deepearth">{lesson.title}</h2>
                  <p className="mt-4 text-base leading-7 text-stonegray">{lesson.description}</p>
                  <p className="mt-4 text-base leading-7 text-stonegray">{lesson.extendedDescription}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-stonegray">{library.notesLabel}</p>
                  <ul className="mt-3 space-y-3 text-sm leading-7 text-deepearth">
                    {lesson.learningNotes.map((note) => (
                      <li key={note} className="rounded-2xl bg-cloudwhite px-4 py-3">
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/${lang}/lesson/${lesson.slug}`}
                  className="w-fit rounded-full bg-deepearth px-5 py-3 text-sm font-semibold text-cloudwhite transition hover:bg-terracotta"
                >
                  {library.openLessonLabel}
                </Link>
              </div>

              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-stonegray">{library.watchLabel}</p>
                <YouTubeEmbed lesson={lesson} />
              </div>
            </article>
          ))}
        </section>
      )}
    </>
  );
}
