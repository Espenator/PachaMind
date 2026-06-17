import type { SiteContent } from "@/lib/types";

export const en: SiteContent = {
  locale: "en",
  meta: {
    title: "PachaMind",
    description:
      "A bilingual sacred documentary learning platform with free lessons, reflective notes, and local progress tracking.",
  },
  brand: {
    name: "PachaMind",
    eyebrow: "Sacred documentary learning",
    promise: "No cost, no sales — only learning",
    traditionHolderLabel: "Tradition-holder",
    traditionHolderName: "Mallku Aribalo",
    disclaimer:
      "These lessons are offered for cultural learning and reflection. They do not replace medical, therapeutic, or legal guidance.",
  },
  nav: {
    home: "Home",
    curriculum: "Curriculum",
    library: "Library",
    pumaPath: "Puma Path",
    conservation: "Conservation",
    reflections: "Reflections",
    dashboard: "Dashboard",
    about: "About",
    contact: "Contact",
    english: "English",
    spanish: "Español",
  },
  home: {
    title: "Enter a mountain-paced library of listening, reciprocity, and remembrance.",
    intro:
      "PachaMind is a free bilingual learning space shaped like a documentary field notebook: spacious, visual, and grounded in community reflection.",
    primaryCta: "Explore the curriculum",
    secondaryCta: "View your dashboard",
    featuredLabel: "Featured lesson",
    featuredCta: "Open full lesson",
    curriculumLabel: "Structured curriculum",
    curriculumCta: "See the full curriculum",
    libraryLabel: "Full lesson library",
    libraryCta: "Browse the library",
    pumaPathTeaser: {
      title: "Walk the Puma Path",
      body: "A guided four-lesson sequence moving from arrival and listening through reciprocity, ritual, and stewardship. Begin at your own pace, return when you are ready.",
      ctaLabel: "Begin the guided journey",
      image: "/images/andes/sacred-valley-1.jpg",
    },
    reflectionsTeaser: {
      title: "Keep a reflection journal",
      body: "Each lesson closes with a question held in spacious silence. Write your response and save it privately in this browser — unhurried, and entirely yours.",
      ctaLabel: "Open your journal",
    },
    sections: [
      {
        title: "Documentary pacing",
        body: "Slow visuals, layered notes, and grounded prompts help each lesson feel like a field visit instead of a sales funnel.",
        image: "/images/andes/hero-machu-picchu.jpg",
      },
      {
        title: "Bilingual access",
        body: "English and Spanish stay in sync so every reflection, lesson note, and next step carries the same meaning across both routes.",
        image: "/images/andes/sacred-valley-1.jpg",
      },
      {
        title: "Free and nonprofit",
        body: "Every page repeats the core promise clearly: no pricing, no checkout, no reservation pressure, and no donations asked here.",
        image: "/images/andes/andean-terraces-1.jpg",
      },
    ],
  },
  library: {
    title: "Lesson library",
    intro:
      "Watch directly from the library, then open the full lesson for richer notes, reflection prompts, and progress tracking.",
    lessonLabel: "Lesson",
    watchLabel: "Watch now",
    notesLabel: "Learning notes",
    openLessonLabel: "Open full lesson",
    searchPlaceholder: "Search lessons…",
    filterAllLabel: "All",
    emptyState: "No lessons match your search. Try a different term or topic.",
    topics: {
      listening: "Listening",
      reciprocity: "Reciprocity",
      ritual: "Ritual",
      stewardship: "Stewardship",
    },
  },
  lessonPage: {
    watchHeading: "Watch the lesson",
    notesHeading: "Learning notes",
    reflectionHeading: "Reflection prompt",
    backToLibrary: "Back to library",
    markComplete: "Mark lesson complete",
    markIncomplete: "Mark lesson incomplete",
    completedLabel: "Saved in this browser as completed",
    progressHint:
      "Progress is stored locally on this device only. No account is required.",
    prevLessonLabel: "Previous lesson",
    nextLessonLabel: "Continue to next lesson",
    dashboardLabel: "Go to dashboard",
    reflectionEntryLabel: "Your reflection",
    reflectionPlaceholder: "Write your response to the prompt above…",
    reflectionSaveLabel: "Save to journal",
    reflectionSavedLabel: "Saved to journal ✓",
    viewReflectionsLabel: "View all reflections",
    videoComingSoonLabel: "Video coming soon",
  },
  dashboard: {
    title: "Your learning dashboard",
    intro:
      "Track what you have finished in this browser, see overall progress, and jump back into the next lesson without signing in.",
    completedLabel: "Lessons completed",
    percentLabel: "Progress",
    totalLabel: "Total lessons",
    continueLearning: "Continue learning",
    allComplete: "You have completed every lesson in this browser. Revisit any lesson anytime.",
    completedState: "Completed",
    notStartedState: "Not completed yet",
    lastWatchedLabel: "Last watched",
    topicsHeading: "Progress by topic",
    resetLabel: "Reset progress",
    resetConfirmHeading: "Reset all progress?",
    resetConfirmLabel: "Yes, reset",
    resetCancelLabel: "Cancel",
    certificateTitle: "Certificate of Completion",
    certificateIntro: "You have completed all four lessons in this browser.",
    certificateBody:
      "This is a free acknowledgment of your learning journey through PachaMind. Tradition-holder: Mallku Aribalo. No cost, no sales — only learning.",
    certificateNameLabel: "Your name (optional, stored only in this browser)",
    certificateNamePlaceholder: "Enter your name",
    certificatePrintLabel: "Print certificate",
  },
  about: {
    title: "About this learning space",
    intro:
      "PachaMind preserves a sacred documentary atmosphere: cinematic pacing, earth-toned visuals, and reflective study rooted in free access.",
    missionHeading: "Our mission",
    missionBody:
      "PachaMind exists to carry Andean teachings into a freely accessible digital space without distortion, commercialisation, or pressure. Every design decision — slow pacing, visual spaciousness, no checkout language — is a direct expression of that commitment.",
    storyHeading: "How this space came to be",
    storyBody:
      "PachaMind grew out of a desire to honour living traditions and the people who keep them. The platform was shaped around the teachings of Mallku Aribalo, who shared them so that they could travel respectfully beyond their original geography and reach anyone ready to listen carefully. Nothing here is sold, tokenised, or extracted from its context.",
    traditionHolderHeading: "Mallku Aribalo — tradition-holder and shamanic teacher",
    traditionHolderBody:
      "Mallku Aribalo is an Andean shamanic teacher and tradition-holder whose knowledge of cosmological practice, community reciprocity, and sacred attention forms the living foundation of every lesson in this space. His teachings are offered here for cultural learning and reflection, and are credited to him throughout the experience.",
    valuesHeading: "Grounding commitments",
    values: [
      "100% free and nonprofit, with no pricing, sales funnel, or checkout language.",
      "Mallku Aribalo is credited as tradition-holder throughout the experience.",
      "Lessons support cultural learning and reflection without therapeutic or medical claims.",
    ],
  },
  footer: {
    credit: "Tradition-holder: Mallku Aribalo",
    mission: "No cost, no sales — only learning",
  },
  contact: {
    title: "Get in touch",
    intro:
      "Questions, translations, or feedback about the learning space — this form opens a message in your default email app. No data is collected on this site.",
    nameLabel: "Your name",
    namePlaceholder: "How you would like to be addressed",
    emailLabel: "Your email address",
    emailPlaceholder: "So we can reply to you",
    messageLabel: "Your message",
    messagePlaceholder: "Questions, reflections, or feedback — write as freely as you like",
    submitLabel: "Open in email app",
    successHeading: "Message composed",
    successBody:
      "Your email app has opened with the message pre-filled. Send it whenever you are ready.",
    validationName: "Please enter your name.",
    validationEmail: "Please enter a valid email address.",
    validationMessage: "Please write a message before sending.",
    noteLabel:
      "This form opens a mailto: link in your email app. No information is transmitted to or stored by this website.",
  },
  curriculum: {
    title: "Curriculum",
    intro:
      "Four lessons across two modules, each grounded in Andean cosmological practice and the sacred documentary tradition of careful, unhurried attention.",
    viewLessonLabel: "Open lesson",
    modules: [
      {
        title: "Foundation: Listening and Reciprocity",
        description:
          "The first two lessons establish the ground of the practice — how to arrive, how to receive, and how to return care to the places and people that sustain us.",
        lessonSlugs: ["mountain-listening", "ayllu-reciprocity"],
      },
      {
        title: "Practice: Ritual and Stewardship",
        description:
          "The final two lessons move from foundation into ongoing practice — how to concentrate attention through ritual, and how to carry teachings forward responsibly.",
        lessonSlugs: ["ritual-attention", "carrying-the-teaching"],
      },
    ],
  },
  reflections: {
    title: "Your reflections",
    intro:
      "Each lesson carries a reflection prompt. Entries you write here are stored only in this browser and never transmitted anywhere.",
    emptyState:
      "No reflections saved yet. Open any lesson and write a response to the reflection prompt to begin your journal.",
    promptLabel: "Prompt",
    entryPlaceholder: "Write your reflection here…",
    saveLabel: "Save reflection",
    savedLabel: "Saved",
    clearAllLabel: "Clear all reflections",
    clearConfirm: "This will permanently delete all saved reflections. Are you sure?",
    lessonLinkLabel: "Return to lesson",
    savedAtLabel: "Saved",
  },
  conservation: {
    title: "Conservation",
    intro:
      "Andean cosmology does not separate human communities from the natural world. Land, water, animal, and ancestor are held together in one living web of care, reciprocity, and accountability.",
    sections: [
      {
        title: "Pachamama and living stewardship",
        body: "Pachamama — the Earth Mother — is not a metaphor in Andean thought. She is a living subject who holds memory, responds to care, and withdraws when reciprocity is broken. To study with Mallku Aribalo is to encounter a cosmology in which conservation is not a project but a posture: the ordinary, daily practice of living in right relation.",
        image:
          "/images/andes/hero-machu-picchu.jpg",
      },
      {
        title: "Ayllu and the web of mutual care",
        body: "The Andean concept of ayllu — community — extends beyond human households to include the landscape, the seasons, and the more-than-human world. Every practice taught in these lessons carries the implicit understanding that learning well means caring well: attending to what feeds us, protecting what is fragile, and returning what we receive.",
        image:
          "/images/andes/sacred-valley-1.jpg",
      },
      {
        title: "Responsible learning",
        body: "These teachings are offered not for extraction but for transformation. Taking them seriously means asking how your own practices — of attention, time, and resource — align with the reciprocal ethic they describe. Cultural learning, when it is honest, leads back to the local: what is yours to protect, tend, and carry forward.",
        image:
          "/images/andes/andes-sky-clouds.jpg",
      },
    ],
  },
  pumaPath: {
    title: "The Puma Path",
    intro:
      "A guided journey through all four teachings in sequence. The puma in Andean cosmology is a guardian of the earth — present, patient, and attentive. This path asks you to move at that pace.",
    stepLabel: "Step",
    steps: [
      {
        title: "Arrive in listening",
        body: "Begin by slowing your pace. The first lesson introduces the ground of the practice: how to arrive at a teaching without grabbing at it, and what becomes possible when silence is given as much space as speech.",
        lessonSlug: "mountain-listening",
        ctaLabel: "Begin: Mountain Listening",
      },
      {
        title: "Enter reciprocity",
        body: "From listening, move into exchange. The second lesson asks what you receive from the places, communities, and traditions around you — and how a more reciprocal way of living might look in practice.",
        lessonSlug: "ayllu-reciprocity",
        ctaLabel: "Continue: Ayllu and Reciprocity",
      },
      {
        title: "Deepen through ritual",
        body: "Ritual attention is the third lesson. Here, the path narrows and focuses: how do you concentrate care into a repeated gesture, and what does it mean to practice something until it holds memory on your behalf?",
        lessonSlug: "ritual-attention",
        ctaLabel: "Continue: Ritual Attention",
      },
      {
        title: "Carry the teaching forward",
        body: "The final step asks the most demanding question: how do you carry what you have learned — faithfully, humbly, connected to its source — into your own life and the lives of those around you?",
        lessonSlug: "carrying-the-teaching",
        ctaLabel: "Complete the path: Carrying the Teaching",
      },
    ],
    beginLabel: "Begin the Puma Path",
    completedState: "Completed",
    heroImage:
      "/images/andes/sacred-valley-1.jpg",
  },
  lessons: [
    {
      slug: "mountain-listening",
      topic: "listening",
      title: "Mountain Listening",
      kicker: "Lesson 1",
      duration: "12 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film a lesson introducing mountain listening with grounded field visuals, pauses, and environmental sound.",
      description:
        "Begin with attentive listening: pacing your attention, noticing place, and letting silence do part of the teaching.",
      extendedDescription:
        "This opening lesson frames listening as a disciplined way of arriving. It invites learners to notice weather, rhythm, pause, and tone before jumping into explanation, keeping the documentary atmosphere calm and observant.",
      learningNotes: [
        "Listening is treated as an act of relationship, not passive consumption.",
        "A slower pace can reveal context that is lost when a lesson rushes toward conclusions.",
        "Silence, landscape, and voice all carry meaning inside a sacred documentary frame.",
      ],
      reflectionPrompt:
        "What changes when you pause long enough to notice the space around a teaching before interpreting it?",
    },
    {
      slug: "ayllu-reciprocity",
      topic: "reciprocity",
      title: "Ayllu and Reciprocity",
      kicker: "Lesson 2",
      duration: "14 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film a reciprocity lesson showing everyday reciprocal practices across community, land, and gratitude.",
      description:
        "Explore reciprocity as a living practice of mutual care, responsibility, and gratitude across community and landscape.",
      extendedDescription:
        "This lesson expands from individual reflection into collective relation. It describes reciprocity as an everyday discipline that asks what we receive, what we return, and how belonging grows through steady acts of care.",
      learningNotes: [
        "Reciprocity is described as a repeated practice rather than a symbolic slogan.",
        "Community is sustained through exchange, gratitude, and accountability.",
        "The lesson asks learners to consider how place and people both require response.",
      ],
      reflectionPrompt:
        "Where in your daily life do you receive support, and what would a more reciprocal response look like?",
    },
    {
      slug: "ritual-attention",
      topic: "ritual",
      title: "Ritual Attention",
      kicker: "Lesson 3",
      duration: "11 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film a ritual-attention lesson focused on respectful repeated gestures without spectacle framing.",
      description:
        "Learn how ritual attention gathers memory, intention, and embodied care without spectacle or performance pressure.",
      extendedDescription:
        "Ritual attention is presented here as a way of concentrating care. The lesson emphasizes preparation, consistency, and respect, showing how simple repeated gestures can hold meaning when they are practiced with clarity.",
      learningNotes: [
        "Ritual is shown as focused attention, not dramatic display.",
        "Consistency matters because meaning deepens through repetition.",
        "Embodied gestures can anchor memory when they are practiced with care.",
      ],
      reflectionPrompt:
        "Which small repeated action helps you return to intention, and what gives that action its meaning?",
    },
    {
      slug: "carrying-the-teaching",
      topic: "stewardship",
      title: "Carrying the Teaching Forward",
      kicker: "Lesson 4",
      duration: "13 min",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Film a stewardship closing lesson on carrying teachings forward with attribution, context, and humility.",
      description:
        "Close the sequence by considering how teachings are carried forward through humility, accuracy, and shared responsibility.",
      extendedDescription:
        "The final lesson focuses on stewardship. Rather than treating learning as a personal collection, it asks how teachings are remembered faithfully, shared with care, and kept connected to the communities that hold them.",
      learningNotes: [
        "Stewardship requires humility about what belongs to you and what does not.",
        "Sharing a teaching responsibly includes context, credit, and care with language.",
        "Learning becomes durable when it changes practice, not only memory.",
      ],
      reflectionPrompt:
        "How can you carry a teaching forward in a way that preserves context, credit, and responsibility?",
    },
  ],
};
