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
    library: "Library",
    pumaPath: "Puma Path",
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
    primaryCta: "Explore the library",
    secondaryCta: "View your dashboard",
    featuredLabel: "Featured lesson",
    sections: [
      {
        title: "Documentary pacing",
        body: "Slow visuals, layered notes, and grounded prompts help each lesson feel like a field visit instead of a sales funnel.",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Bilingual access",
        body: "English and Spanish stay in sync so every reflection, lesson note, and next step carries the same meaning across both routes.",
        image:
          "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Free and nonprofit",
        body: "Every page repeats the core promise clearly: no pricing, no checkout, no reservation pressure, and no donations asked here.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
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
      integration: "Integration",
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
    nextLessonLabel: "Continue to next lesson",
    dashboardLabel: "Go to dashboard",
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
  pumaPath: {
    title: "The Puma Path",
    intro:
      "A five-stage learning progression shaped by Andean teachings. Move through each stage at your own pace, carry nothing but attention, and let each lesson deepen the next.",
    stagesHeading: "Five stages of learning",
    progressLabel: "Your learning progression",
    noticeMission: "No cost, no sales — only learning",
    attributionNote:
      "The Puma Path is drawn from the teachings of Mallku Aribalo, Andean tradition-holder and shamanic teacher. All five stages are offered here for cultural learning and reflection — not as an initiation or therapeutic programme.",
    stageLabel: "Stage",
    completedLabel: "Completed",
    notStartedLabel: "Not yet visited",
    openStageLabel: "Begin this stage",
    revisitLabel: "Revisit this stage",
    stages: [
      {
        key: "listening",
        title: "Listening",
        body: "Arrive before you interpret. The first stage trains attention to receive before it reacts — learning to notice weather, rhythm, silence, and the space between words.",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
      },
      {
        key: "reciprocity",
        title: "Reciprocity",
        body: "Shift from receiving to responding. Reciprocity asks what you hold in relation — to community, to land, to teaching — and how steady care sustains belonging over time.",
        image:
          "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=80",
      },
      {
        key: "ritual",
        title: "Ritual",
        body: "Anchor intention in repeated action. Ritual attention is the discipline of showing up consistently: small, focused gestures practiced with care accumulate into living memory.",
        image:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80",
      },
      {
        key: "stewardship",
        title: "Stewardship",
        body: "Hold what you have learned lightly and faithfully. Stewardship asks how teachings travel without losing their roots — and how credit, context, and humility travel with them.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      },
      {
        key: "integration",
        title: "Integration",
        body: "Let the four stages move together. Integration is not a final destination but a continuing return: each practice renews the others when held as a whole rather than a sequence.",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  },
  lessons: [
    {
      slug: "mountain-listening",
      topic: "listening",
      title: "Mountain Listening",
      kicker: "Lesson 1",
      duration: "12 min",
      youtubeId: "ScMzIvxBSi4",
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
      youtubeId: "aqz-KE-bpKQ",
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
      youtubeId: "ysz5S6PUM-U",
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
      youtubeId: "M7lc1UVf-VE",
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
    {
      slug: "path-of-integration",
      topic: "integration",
      title: "The Path of Integration",
      kicker: "Lesson 5",
      duration: "15 min",
      youtubeId: "ScMzIvxBSi4",
      description:
        "Draw the four stages into a living practice: how listening, reciprocity, ritual, and stewardship sustain and renew each other over time.",
      extendedDescription:
        "Integration is not a final destination but a continuing movement. This lesson asks how the four previous stages support each other as a whole practice — and how learners can return to any stage with new eyes, deepened by everything that came before.",
      learningNotes: [
        "Integration is understood as an ongoing cycle rather than a finished state.",
        "Each stage deepens the others when held together with steady attention.",
        "Carrying a complete practice means welcoming return as much as forward movement.",
      ],
      reflectionPrompt:
        "How do listening, reciprocity, ritual, and stewardship already move together in your daily life, and where do they call for more attention?",
    },
  ],
};
