export const REFLECTIONS_STORAGE_KEY = "pachamind-reflections-v1";

export type ReflectionNotes = Record<string, string>;

function canUseStorage() {
  return typeof window !== "undefined";
}

export function readReflectionNotes(): ReflectionNotes {
  if (!canUseStorage()) {
    return {};
  }

  const raw = window.localStorage.getItem(REFLECTIONS_STORAGE_KEY);

  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)) {
      const result: ReflectionNotes = {};
      for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
        if (typeof key === "string" && typeof value === "string") {
          result[key] = value;
        }
      }
      return result;
    }
    return {};
  } catch {
    return {};
  }
}

export function writeReflectionNote(slug: string, note: string) {
  if (!canUseStorage()) {
    return;
  }

  const notes = readReflectionNotes();

  if (note.trim() === "") {
    delete notes[slug];
  } else {
    notes[slug] = note;
  }

  window.localStorage.setItem(REFLECTIONS_STORAGE_KEY, JSON.stringify(notes));
}
