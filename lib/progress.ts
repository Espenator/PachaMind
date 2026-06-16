export const PROGRESS_STORAGE_KEY = "pachamind-progress-v1";

export interface ProgressState {
  completedLessonSlugs: string[];
  lastOpenedLessonSlug?: string;
  displayName?: string;
}

const defaultState: ProgressState = {
  completedLessonSlugs: [],
};

function canUseStorage() {
  return typeof window !== "undefined";
}

export function readProgressState(): ProgressState {
  if (!canUseStorage()) {
    return defaultState;
  }

  const rawValue = window.localStorage.getItem(PROGRESS_STORAGE_KEY);

  if (!rawValue) {
    return defaultState;
  }

  try {
    const parsed = JSON.parse(rawValue) as Partial<ProgressState>;
    return {
      completedLessonSlugs: Array.isArray(parsed.completedLessonSlugs)
        ? parsed.completedLessonSlugs.filter((item): item is string => typeof item === "string")
        : [],
      lastOpenedLessonSlug:
        typeof parsed.lastOpenedLessonSlug === "string"
          ? parsed.lastOpenedLessonSlug
          : undefined,
      displayName:
        typeof parsed.displayName === "string" ? parsed.displayName : undefined,
    };
  } catch {
    return defaultState;
  }
}

export function writeProgressState(state: ProgressState) {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(state));
}

export function setLastOpenedLessonSlug(slug: string) {
  const currentState = readProgressState();
  writeProgressState({
    ...currentState,
    lastOpenedLessonSlug: slug,
  });
}

export function setLessonCompletion(slug: string, isCompleted: boolean) {
  const currentState = readProgressState();
  const completedSet = new Set(currentState.completedLessonSlugs);

  if (isCompleted) {
    completedSet.add(slug);
  } else {
    completedSet.delete(slug);
  }

  writeProgressState({
    ...currentState,
    completedLessonSlugs: [...completedSet],
    lastOpenedLessonSlug: currentState.lastOpenedLessonSlug ?? slug,
  });
}

export function setDisplayName(name: string) {
  const currentState = readProgressState();
  writeProgressState({ ...currentState, displayName: name });
}

export function resetProgressState() {
  writeProgressState(defaultState);
}
