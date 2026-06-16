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

export interface PumaPathStage {
  key: string;
  title: string;
  body: string;
  image: string;
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
    pumaPath: string;
    dashboard: string;
    reflections: string;
    about: string;
    contact: string;
    conservation: string;
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
  pumaPath: {
    title: string;
    intro: string;
    stagesHeading: string;
    progressLabel: string;
    noticeMission: string;
    attributionNote: string;
    stageLabel: string;
    completedLabel: string;
    notStartedLabel: string;
    openStageLabel: string;
    revisitLabel: string;
    stages: PumaPathStage[];
  };
  lessons: Lesson[];
  conservation: {
    title: string;
    intro: string;
    attributionLabel: string;
    principlesHeading: string;
    reflectionHeading: string;
    reflectionPrompt: string;
    bands: Array<{
      title: string;
      body: string;
      image: string;
    }>;
    principles: string[];
  };
  reflections: {
    title: string;
    intro: string;
    promptsHeading: string;
    noteLabel: string;
    notePlaceholder: string;
    saveLabel: string;
    savedLabel: string;
    clearLabel: string;
    storageHint: string;
    attributionLabel: string;
    parallaxSections: Array<{
      title: string;
      body: string;
      image: string;
    }>;
  };
}
