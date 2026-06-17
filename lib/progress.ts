export const PROGRESS_STORAGE_KEY = "pachamind-progress-v1";

export interface ProgressState {
  completedLessonSlugs: string[];
  earnedBadgeKeys: string[];
  lastOpenedLessonSlug?: string;
  displayName?: string;
}

const defaultState: ProgressState = {
  completedLessonSlugs: [],
  earnedBadgeKeys: [],
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
      earnedBadgeKeys: Array.isArray(parsed.earnedBadgeKeys)
        ? parsed.earnedBadgeKeys.filter((item): item is string => typeof item === "string")
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

export function setLessonCompletion(
  slug: string,
  isCompleted: boolean,
  badgeKey?: string,
) {
  const currentState = readProgressState();
  const completedSet = new Set(currentState.completedLessonSlugs);
  const badgeSet = new Set(currentState.earnedBadgeKeys);

  if (isCompleted) {
    completedSet.add(slug);
    if (badgeKey) {
      badgeSet.add(badgeKey);
    }
  } else {
    completedSet.delete(slug);
    // Badges remain once earned; marking a lesson incomplete does not revoke
    // recognition the learner already received.
  }

  writeProgressState({
    ...currentState,
    completedLessonSlugs: [...completedSet],
    earnedBadgeKeys: [...badgeSet],
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
