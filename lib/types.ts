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
    curriculum: string;
    library: string;
    pumaPath: string;
    conservation: string;
    reflections: string;
    dashboard: string;
    about: string;
    contact: string;
    english: string;
    spanish: string;
  };
  home: {
    title: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    featuredLabel: string;
    featuredCta: string;
    curriculumLabel: string;
    curriculumCta: string;
    libraryLabel: string;
    libraryCta: string;
    pumaPathTeaser: {
      title: string;
      body: string;
      ctaLabel: string;
      image: string;
    };
    reflectionsTeaser: {
      title: string;
      body: string;
      ctaLabel: string;
    };
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
    prevLessonLabel: string;
    nextLessonLabel: string;
    dashboardLabel: string;
    reflectionEntryLabel: string;
    reflectionPlaceholder: string;
    reflectionSaveLabel: string;
    reflectionSavedLabel: string;
    viewReflectionsLabel: string;
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
    missionHeading: string;
    missionBody: string;
    storyHeading: string;
    storyBody: string;
    traditionHolderHeading: string;
    traditionHolderBody: string;
    valuesHeading: string;
    values: string[];
  };
  footer: {
    credit: string;
    mission: string;
  };
  contact: {
    title: string;
    intro: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    successHeading: string;
    successBody: string;
    validationName: string;
    validationEmail: string;
    validationMessage: string;
    noteLabel: string;
  };
  curriculum: {
    title: string;
    intro: string;
    viewLessonLabel: string;
    modules: Array<{
      title: string;
      description: string;
      lessonSlugs: string[];
    }>;
  };
  reflections: {
    title: string;
    intro: string;
    emptyState: string;
    promptLabel: string;
    entryPlaceholder: string;
    saveLabel: string;
    savedLabel: string;
    clearAllLabel: string;
    clearConfirm: string;
    lessonLinkLabel: string;
    savedAtLabel: string;
  };
  conservation: {
    title: string;
    intro: string;
    sections: Array<{
      title: string;
      body: string;
      image: string;
    }>;
  };
  pumaPath: {
    title: string;
    intro: string;
    stepLabel: string;
    steps: Array<{
      title: string;
      body: string;
      lessonSlug?: string;
      ctaLabel?: string;
    }>;
    beginLabel: string;
    completedState: string;
    heroImage: string;
  };
  lessons: Lesson[];
}
