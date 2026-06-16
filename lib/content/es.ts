import type { SiteContent } from "@/lib/types";

export const es: SiteContent = {
  locale: "es",
  meta: {
    title: "PachaMind",
    description:
      "Una plataforma bilingüe de aprendizaje documental sagrado con lecciones gratuitas, notas reflexivas y progreso local.",
  },
  brand: {
    name: "PachaMind",
    eyebrow: "Aprendizaje documental sagrado",
    promise: "No cost, no sales — only learning",
    traditionHolderLabel: "Guardián de la tradición",
    traditionHolderName: "Mallku Aribalo",
    disclaimer:
      "Estas lecciones se ofrecen para aprendizaje cultural y reflexión. No sustituyen orientación médica, terapéutica ni legal.",
  },
  nav: {
    home: "Inicio",
    library: "Biblioteca",
    dashboard: "Panel",
    about: "Acerca de",
    contact: "Contacto",
    english: "English",
    spanish: "Español",
  },
  home: {
    title:
      "Entra en una biblioteca al ritmo de la montaña, hecha de escucha, reciprocidad y memoria.",
    intro:
      "PachaMind es un espacio bilingüe y gratuito diseñado como un cuaderno documental de campo: amplio, visual y arraigado en la reflexión comunitaria.",
    primaryCta: "Explorar la biblioteca",
    secondaryCta: "Ver tu panel",
    featuredLabel: "Lección destacada",
    sections: [
      {
        title: "Ritmo documental",
        body: "Visuales lentos, notas en capas y preguntas serenas hacen que cada lección se sienta como una visita de campo y no como un embudo de ventas.",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Acceso bilingüe",
        body: "El inglés y el español se mantienen sincronizados para que cada reflexión, nota y siguiente paso conserve el mismo sentido en ambas rutas.",
        image:
          "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Gratuito y sin fines de lucro",
        body: "Cada página repite la promesa central con claridad: sin precios, sin checkout, sin presión para reservar y sin solicitudes de donación.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  },
  library: {
    title: "Biblioteca de lecciones",
    intro:
      "Mira directamente desde la biblioteca y luego abre la lección completa para ver notas más amplias, preguntas de reflexión y seguimiento de progreso.",
    lessonLabel: "Lección",
    watchLabel: "Ver ahora",
    notesLabel: "Notas de aprendizaje",
    openLessonLabel: "Abrir lección completa",
    searchPlaceholder: "Buscar lecciones…",
    filterAllLabel: "Todas",
    emptyState: "Ninguna lección coincide con tu búsqueda. Prueba otro término o tema.",
    topics: {
      listening: "Escucha",
      reciprocity: "Reciprocidad",
      ritual: "Ritual",
      stewardship: "Custodia",
    },
  },
  lessonPage: {
    watchHeading: "Ver la lección",
    notesHeading: "Notas de aprendizaje",
    reflectionHeading: "Pregunta de reflexión",
    backToLibrary: "Volver a la biblioteca",
    markComplete: "Marcar lección como completada",
    markIncomplete: "Marcar lección como no completada",
    completedLabel: "Guardada en este navegador como completada",
    progressHint:
      "El progreso se guarda solo en este dispositivo. No necesitas una cuenta.",
    nextLessonLabel: "Continuar a la siguiente lección",
    dashboardLabel: "Ir al panel",
  },
  dashboard: {
    title: "Tu panel de aprendizaje",
    intro:
      "Sigue lo que terminaste en este navegador, mira tu progreso total y vuelve a entrar en la siguiente lección sin iniciar sesión.",
    completedLabel: "Lecciones completadas",
    percentLabel: "Progreso",
    totalLabel: "Lecciones totales",
    continueLearning: "Continuar aprendiendo",
    allComplete:
      "Ya completaste todas las lecciones en este navegador. Puedes volver a cualquiera cuando quieras.",
    completedState: "Completada",
    notStartedState: "Aún no completada",
  },
  about: {
    title: "Acerca de este espacio de aprendizaje",
    intro:
      "PachaMind conserva una atmósfera documental sagrada: ritmo cinematográfico, visuales en tonos tierra y estudio reflexivo con acceso gratuito.",
    missionHeading: "Nuestra misión",
    missionBody:
      "PachaMind existe para llevar las enseñanzas andinas a un espacio digital de libre acceso, sin distorsión, comercialización ni presión. Cada decisión de diseño —ritmo lento, amplitud visual, ausencia de lenguaje transaccional— es una expresión directa de ese compromiso.",
    storyHeading: "Cómo surgió este espacio",
    storyBody:
      "PachaMind nació del deseo de honrar las tradiciones vivas y a quienes las custodian. La plataforma se construyó en torno a las enseñanzas de Mallku Aribalo, quien las compartió para que pudieran viajar con respeto más allá de su geografía original y alcanzar a quienes estén dispuestos a escuchar con atención. Aquí nada se vende, se tokeniza ni se extrae de su contexto.",
    traditionHolderHeading: "Mallku Aribalo — guardián de la tradición y maestro chamánico",
    traditionHolderBody:
      "Mallku Aribalo es un maestro chamánico andino y guardián de la tradición cuyo conocimiento de la práctica cosmológica, la reciprocidad comunitaria y la atención sagrada forma el fundamento vivo de cada lección en este espacio. Sus enseñanzas se ofrecen aquí para el aprendizaje cultural y la reflexión, y aparecen acreditadas a él en toda la experiencia.",
    valuesHeading: "Compromisos que nos orientan",
    values: [
      "100 % gratuito y sin fines de lucro, sin precios, embudos de venta ni lenguaje de checkout.",
      "Mallku Aribalo aparece acreditado como guardián de la tradición en toda la experiencia.",
      "Las lecciones apoyan el aprendizaje cultural y la reflexión sin afirmaciones terapéuticas ni médicas.",
    ],
  },
  footer: {
    credit: "Guardián de la tradición: Mallku Aribalo",
    mission: "No cost, no sales — only learning",
  },
  contact: {
    title: "Escríbenos",
    intro:
      "Preguntas, traducciones o comentarios sobre el espacio de aprendizaje — este formulario abre un mensaje en tu aplicación de correo. Este sitio no almacena ningún dato.",
    nameLabel: "Tu nombre",
    namePlaceholder: "Cómo te gustaría que te llamaran",
    emailLabel: "Tu dirección de correo",
    emailPlaceholder: "Para poder responderte",
    messageLabel: "Tu mensaje",
    messagePlaceholder: "Preguntas, reflexiones o comentarios — escribe con libertad",
    submitLabel: "Abrir en la app de correo",
    successHeading: "Mensaje redactado",
    successBody:
      "Tu aplicación de correo se ha abierto con el mensaje ya preparado. Envíalo cuando estés listo.",
    validationName: "Por favor, escribe tu nombre.",
    validationEmail: "Por favor, ingresa una dirección de correo válida.",
    validationMessage: "Por favor, escribe un mensaje antes de enviar.",
    noteLabel:
      "Este formulario abre un enlace mailto: en tu aplicación de correo. No se transmite ni almacena ninguna información en este sitio.",
  },
  lessons: [
    {
      slug: "mountain-listening",
      topic: "listening",
      title: "Escucha de la montaña",
      kicker: "Lección 1",
      duration: "12 min",
      youtubeId: "ScMzIvxBSi4",
      description:
        "Comienza con una escucha atenta: regula tu atención, observa el lugar y deja que el silencio también enseñe.",
      extendedDescription:
        "Esta lección de apertura presenta la escucha como una forma disciplinada de llegar. Invita a notar el clima, el ritmo, la pausa y el tono antes de saltar a la explicación, manteniendo la atmósfera documental serena y observadora.",
      learningNotes: [
        "La escucha se trata como un acto de relación y no como consumo pasivo.",
        "Un ritmo más lento puede revelar contexto que se pierde cuando una lección corre hacia conclusiones.",
        "El silencio, el paisaje y la voz también llevan significado dentro de un marco documental sagrado.",
      ],
      reflectionPrompt:
        "¿Qué cambia cuando haces una pausa suficiente para notar el espacio que rodea una enseñanza antes de interpretarla?",
    },
    {
      slug: "ayllu-reciprocity",
      topic: "reciprocity",
      title: "Ayllu y reciprocidad",
      kicker: "Lección 2",
      duration: "14 min",
      youtubeId: "aqz-KE-bpKQ",
      description:
        "Explora la reciprocidad como una práctica viva de cuidado mutuo, responsabilidad y gratitud entre comunidad y territorio.",
      extendedDescription:
        "Esta lección amplía la reflexión individual hacia la relación colectiva. Describe la reciprocidad como una disciplina cotidiana que pregunta qué recibimos, qué devolvemos y cómo el sentido de pertenencia crece mediante actos constantes de cuidado.",
      learningNotes: [
        "La reciprocidad se describe como una práctica repetida y no como un eslogan simbólico.",
        "La comunidad se sostiene mediante intercambio, gratitud y responsabilidad.",
        "La lección invita a considerar cómo tanto el lugar como las personas requieren respuesta.",
      ],
      reflectionPrompt:
        "¿En qué parte de tu vida diaria recibes apoyo y cómo sería una respuesta más recíproca?",
    },
    {
      slug: "ritual-attention",
      topic: "ritual",
      title: "Atención ritual",
      kicker: "Lección 3",
      duration: "11 min",
      youtubeId: "ysz5S6PUM-U",
      description:
        "Aprende cómo la atención ritual reúne memoria, intención y cuidado encarnado sin espectáculo ni presión performativa.",
      extendedDescription:
        "La atención ritual se presenta aquí como una manera de concentrar el cuidado. La lección enfatiza preparación, constancia y respeto, mostrando cómo gestos simples y repetidos pueden sostener sentido cuando se practican con claridad.",
      learningNotes: [
        "El ritual se muestra como atención enfocada y no como despliegue dramático.",
        "La constancia importa porque el significado se profundiza con la repetición.",
        "Los gestos encarnados pueden anclar la memoria cuando se practican con cuidado.",
      ],
      reflectionPrompt:
        "¿Qué acción pequeña y repetida te ayuda a volver a tu intención y qué le da sentido a esa acción?",
    },
    {
      slug: "carrying-the-teaching",
      topic: "stewardship",
      title: "Llevar la enseñanza hacia adelante",
      kicker: "Lección 4",
      duration: "13 min",
      youtubeId: "M7lc1UVf-VE",
      description:
        "Cierra la secuencia considerando cómo las enseñanzas se transmiten con humildad, precisión y responsabilidad compartida.",
      extendedDescription:
        "La lección final se centra en la custodia. En lugar de tratar el aprendizaje como una colección personal, pregunta cómo recordar las enseñanzas con fidelidad, compartirlas con cuidado y mantenerlas conectadas con las comunidades que las sostienen.",
      learningNotes: [
        "La custodia requiere humildad para reconocer qué te pertenece y qué no.",
        "Compartir una enseñanza con responsabilidad incluye contexto, crédito y cuidado con el lenguaje.",
        "El aprendizaje se vuelve duradero cuando transforma la práctica y no solo la memoria.",
      ],
      reflectionPrompt:
        "¿Cómo puedes llevar una enseñanza hacia adelante de una manera que preserve contexto, crédito y responsabilidad?",
    },
  ],
};
