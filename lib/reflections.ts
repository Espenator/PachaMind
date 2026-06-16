export const REFLECTIONS_STORAGE_KEY = "pachamind-reflections-v1";

export interface ReflectionEntry {
  lessonSlug: string;
  prompt: string;
  text: string;
  savedAt: string; // ISO date string
}

export type ReflectionsState = Record<string, ReflectionEntry>;

function canUseStorage() {
  return typeof window !== "undefined";
}

export function readReflectionsState(): ReflectionsState {
  if (!canUseStorage()) return {};
  const raw = window.localStorage.getItem(REFLECTIONS_STORAGE_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as ReflectionsState;
  } catch {
    return {};
  }
}

export function writeReflectionsState(state: ReflectionsState) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(REFLECTIONS_STORAGE_KEY, JSON.stringify(state));
}

export function saveReflectionEntry(entry: ReflectionEntry) {
  const state = readReflectionsState();
  state[entry.lessonSlug] = entry;
  writeReflectionsState(state);
}

export function getReflectionEntry(lessonSlug: string): ReflectionEntry | undefined {
  return readReflectionsState()[lessonSlug];
}

export function clearAllReflections() {
  writeReflectionsState({});
}
