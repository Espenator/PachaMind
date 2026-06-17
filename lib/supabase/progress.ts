"use client";

import type { SupabaseClient } from "@supabase/supabase-js";

import type { ProgressState } from "@/lib/progress";

interface LessonProgressRow {
  lesson_slug: string;
  is_completed: boolean;
  last_opened_at: string | null;
}

interface ProfileRow {
  display_name: string | null;
}

export async function loadSupabaseProgress(
  client: SupabaseClient,
  userId: string,
): Promise<ProgressState> {
  const [{ data: progressRows, error: progressError }, { data: profileRow, error: profileError }] =
    await Promise.all([
      client
        .from("lessons_progress")
        .select("lesson_slug, is_completed, last_opened_at")
        .eq("user_id", userId),
      client
        .from("profiles")
        .select("display_name")
        .eq("id", userId)
        .maybeSingle(),
    ]);

  if (progressError) {
    throw progressError;
  }

  if (profileError) {
    throw profileError;
  }

  const rows = (progressRows ?? []) as LessonProgressRow[];
  const completedLessonSlugs = rows
    .filter((row) => row.is_completed)
    .map((row) => row.lesson_slug);

  const lastOpenedLessonSlug = rows
    .filter((row) => typeof row.last_opened_at === "string")
    .sort((a, b) =>
      new Date(b.last_opened_at ?? 0).getTime() - new Date(a.last_opened_at ?? 0).getTime(),
    )[0]?.lesson_slug;

  return {
    completedLessonSlugs,
    lastOpenedLessonSlug,
    displayName: ((profileRow as ProfileRow | null)?.display_name ?? undefined) || undefined,
  };
}

export async function saveSupabaseLessonCompletion(
  client: SupabaseClient,
  userId: string,
  slug: string,
  isCompleted: boolean,
) {
  const { error } = await client.from("lessons_progress").upsert(
    {
      user_id: userId,
      lesson_slug: slug,
      is_completed: isCompleted,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,lesson_slug" },
  );

  if (error) {
    throw error;
  }
}

export async function saveSupabaseLastOpenedLesson(
  client: SupabaseClient,
  userId: string,
  slug: string,
) {
  const { error } = await client.from("lessons_progress").upsert(
    {
      user_id: userId,
      lesson_slug: slug,
      last_opened_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,lesson_slug" },
  );

  if (error) {
    throw error;
  }
}

export async function saveSupabaseDisplayName(
  client: SupabaseClient,
  userId: string,
  name: string,
) {
  const { error } = await client.from("profiles").upsert(
    {
      id: userId,
      display_name: name.trim() === "" ? null : name,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "id" },
  );

  if (error) {
    throw error;
  }
}

export async function resetSupabaseProgress(client: SupabaseClient, userId: string) {
  const [{ error: lessonsError }, { error: profileError }] = await Promise.all([
    client.from("lessons_progress").delete().eq("user_id", userId),
    client
      .from("profiles")
      .upsert(
        {
          id: userId,
          display_name: null,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "id" },
      ),
  ]);

  if (lessonsError) {
    throw lessonsError;
  }

  if (profileError) {
    throw profileError;
  }
}

export async function saveSupabaseLessonNote(
  client: SupabaseClient,
  userId: string,
  slug: string,
  note: string,
) {
  const { error } = await client.from("lessons_progress").upsert(
    {
      user_id: userId,
      lesson_slug: slug,
      note: note.trim() === "" ? null : note,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,lesson_slug" },
  );

  if (error) {
    throw error;
  }
}
