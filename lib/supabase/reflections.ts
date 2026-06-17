"use client";

import type { SupabaseClient } from "@supabase/supabase-js";

import type { ReflectionEntry } from "@/lib/reflections";

interface ReflectionRow {
  lesson_slug: string;
  prompt: string;
  text: string;
  saved_at: string;
}

export async function loadSupabaseReflections(client: SupabaseClient, userId: string) {
  const { data, error } = await client
    .from("reflections")
    .select("lesson_slug, prompt, text, saved_at")
    .eq("user_id", userId)
    .order("saved_at", { ascending: false });

  if (error) {
    throw error;
  }

  return ((data ?? []) as ReflectionRow[]).map((row) => ({
    lessonSlug: row.lesson_slug,
    prompt: row.prompt,
    text: row.text,
    savedAt: row.saved_at,
  } satisfies ReflectionEntry));
}

export async function loadSupabaseReflectionByLesson(
  client: SupabaseClient,
  userId: string,
  lessonSlug: string,
) {
  const { data, error } = await client
    .from("reflections")
    .select("lesson_slug, prompt, text, saved_at")
    .eq("user_id", userId)
    .eq("lesson_slug", lessonSlug)
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data) {
    return undefined;
  }

  const row = data as ReflectionRow;

  return {
    lessonSlug: row.lesson_slug,
    prompt: row.prompt,
    text: row.text,
    savedAt: row.saved_at,
  } satisfies ReflectionEntry;
}

export async function saveSupabaseReflection(
  client: SupabaseClient,
  userId: string,
  entry: ReflectionEntry,
) {
  const { error } = await client.from("reflections").upsert(
    {
      user_id: userId,
      lesson_slug: entry.lessonSlug,
      prompt: entry.prompt,
      text: entry.text,
      saved_at: entry.savedAt,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,lesson_slug" },
  );

  if (error) {
    throw error;
  }
}

export async function clearAllSupabaseReflections(client: SupabaseClient, userId: string) {
  const { error } = await client.from("reflections").delete().eq("user_id", userId);

  if (error) {
    throw error;
  }
}
