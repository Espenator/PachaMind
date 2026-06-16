export const languages = ["en", "es"] as const;

export type Language = (typeof languages)[number];

export interface Lesson {
  slug: string;
  topic: string;
  title: string;
  kicker: string;
  duration: string;
  description: string;
  extendedDescription: string;
  learningNotes: string[];
  reflectionPrompt: string;
  youtubeId: string;
}

export interface SiteContent {
  locale: Language;
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    eyebrow: string;
    promise: string;
    traditionHolderLabel: string;
    traditionHolderName: string;
    disclaimer: string;
  };
  nav: {
    home: string;
    library: string;
    dashboard: string;
    about: string;
    english: string;
    spanish: string;
  };
  home: {
    title: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    featuredLabel: string;
    sections: Array<{
      title: string;
      body: string;
      image: string;
    }>;
  };
  library: {
    title: string;
    intro: string;
    lessonLabel: string;
    watchLabel: string;
    notesLabel: string;
    openLessonLabel: string;
    searchPlaceholder: string;
    filterAllLabel: string;
    emptyState: string;
    topics: Record<string, string>;
  };
  lessonPage: {
    watchHeading: string;
    notesHeading: string;
    reflectionHeading: string;
    backToLibrary: string;
    markComplete: string;
    markIncomplete: string;
    completedLabel: string;
    progressHint: string;
    nextLessonLabel: string;
    dashboardLabel: string;
  };
  dashboard: {
    title: string;
    intro: string;
    completedLabel: string;
    percentLabel: string;
    totalLabel: string;
    continueLearning: string;
    allComplete: string;
    completedState: string;
    notStartedState: string;
  };
  about: {
    title: string;
    intro: string;
    valuesHeading: string;
    values: string[];
  };
  footer: {
    credit: string;
    mission: string;
  };
  lessons: Lesson[];
}
