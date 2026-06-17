export const languages = ["en", "es"] as const;

export type Language = (typeof languages)[number];

/** A single multiple-choice quiz question attached to a lesson. */
export interface QuizQuestion {
  /** Stable id, unique within a lesson. */
  id: string;
  prompt: string;
  options: string[];
  /** Index into `options` of the correct answer. */
  correctIndex: number;
  /** Shown after the learner answers, regardless of correctness. */
  explanation: string;
}

export interface Lesson {
  slug: string;
  topic?: string;
  title: string;
  kicker: string;
  duration: string;
  /** Estimated minutes; falls back to `duration` text when absent. */
  estimatedMinutes?: number;
  description: string;
  /** Short one-line summary used on cards. Falls back to `description`. */
  shortDescription?: string;
  extendedDescription: string;
  learningNotes: string[];
  /** Plain-text transcript placeholder for the video. */
  transcript?: string;
  reflectionPrompt: string;
  /** Optional knowledge-check question for this lesson. */
  quiz?: QuizQuestion;
  /** Puma Path stage key this lesson belongs to. */
  stage?: string;
  /** Badge key awarded when this lesson is completed. */
  badge?: string;
  youtubeId: string;
  mediaStatus?: "NEEDS_REAL_VIDEO";
  mediaNote?: string;
}

/** A learning badge that can be earned by completing lessons or a stage. */
export interface Badge {
  key: string;
  title: string;
  description: string;
  /** What triggers the badge, e.g. a lesson slug or a Puma Path stage key. */
  trigger: string;
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
    learn: string;
    library: string;
    pumaPath: string;
    dashboard: string;
    reflections: string;
    about: string;
    mallku: string;
    contact: string;
    conservation: string;
    signup: string;
    english: string;
    spanish: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    languageToggleLabel: string;
    mainNavLabel: string;
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
    videoComingSoonLabel: string;
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
    lastWatchedLabel: string;
    topicsHeading: string;
    resetLabel: string;
    resetConfirmHeading: string;
    resetConfirmLabel: string;
    resetCancelLabel: string;
    certificateTitle: string;
    certificateIntro: string;
    certificateBody: string;
    certificateNameLabel: string;
    certificateNamePlaceholder: string;
    certificatePrintLabel: string;
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
  pages: PagesContent;
  membership: MembershipContent;
  quiz: {
    heading: string;
    submitLabel: string;
    correctLabel: string;
    incorrectLabel: string;
    tryAgainLabel: string;
    selectPrompt: string;
  };
  badges: {
    heading: string;
    earnedLabel: string;
    lockedLabel: string;
    items: Badge[];
  };
}

/** A simple titled prose section with paragraphs. */
export interface ProseSection {
  heading: string;
  paragraphs: string[];
}

/** Bilingual copy for the learn hub, Mallku page, and legal/accessibility pages. */
export interface PagesContent {
  learn: {
    title: string;
    intro: string;
    startLabel: string;
    pathLabel: string;
  };
  mallku: {
    title: string;
    intro: string;
    sections: ProseSection[];
    attributionNote: string;
  };
  privacy: {
    title: string;
    intro: string;
    sections: ProseSection[];
  };
  terms: {
    title: string;
    intro: string;
    sections: ProseSection[];
  };
  accessibility: {
    title: string;
    intro: string;
    sections: ProseSection[];
  };
}

/** Bilingual copy for the membership signup, preferences, and legal pages. */
export interface MembershipContent {
  signup: {
    title: string;
    intro: string;
    firstNameLabel: string;
    lastNameLabel: string;
    emailLabel: string;
    countryRegionLabel: string;
    countryCodeLabel: string;
    cellWhatsappLabel: string;
    preferredLanguageLabel: string;
    languageOptionEn: string;
    languageOptionEs: string;
    permissionsHeading: string;
    submitLabel: string;
    successHeading: string;
    successBody: string;
    requiredHint: string;
    /** Verbatim consent checkbox labels, in order. */
    consentLabels: {
      account: string;
      email: string;
      whatsapp: string;
      sms: string;
      embodierAcknowledgement: string;
    };
    validation: {
      firstName: string;
      lastName: string;
      email: string;
      countryRegion: string;
      countryCode: string;
      cellWhatsapp: string;
      accountConsent: string;
    };
    noCommerceNote: string;
  };
  preferences: {
    title: string;
    intro: string;
    saveLabel: string;
    savedLabel: string;
    noMembershipHeading: string;
    noMembershipBody: string;
    joinLabel: string;
  };
  debugPanel: {
    heading: string;
    note: string;
  };
}
