import type { SiteContent } from "@/lib/types";

export const es: SiteContent = {
  locale: "es",
  meta: {
    title: "PachaMind",
    description:
      "Una membresía de aprendizaje andino gratuita y bilingüe, con lecciones en video, reflexiones, cuestionarios, el Camino del Puma e insignias de aprendizaje.",
  },
  brand: {
    name: "PachaMind",
    eyebrow: "Membresía de aprendizaje andino gratuita",
    promise: "Una membresía de aprendizaje PachaMind gratuita",
    traditionHolderLabel: "Guardián de la tradición",
    traditionHolderName: "Mallku Aribalo",
    disclaimer:
      "Estas lecciones se ofrecen para aprendizaje cultural y reflexión. No sustituyen orientación médica, terapéutica ni legal.",
  },
  nav: {
    home: "Inicio",
    learn: "Aprender",
    library: "Biblioteca",
    pumaPath: "Camino del Puma",
    dashboard: "Panel",
    reflections: "Reflexiones",
    about: "Acerca de",
    mallku: "Mallku Aribalo",
    contact: "Contacto",
    conservation: "Conservación",
    signup: "Únete gratis",
    preferences: "Preferencias",
    privacy: "Privacidad",
    terms: "Términos",
    accessibility: "Accesibilidad",
    english: "English",
    spanish: "Español",
    skipToContent: "Saltar al contenido principal",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú de navegación",
    languageToggleLabel: "Elegir idioma",
    mainNavLabel: "Navegación principal",
    joinCta: "Crea tu membresía de aprendizaje gratuita",
    complianceNote:
      "PachaMind ofrece solo membresías de aprendizaje gratuitas — sin costo, sin ventas, solo aprendizaje.",
  },
  home: {
    title:
      "Entra en una biblioteca al ritmo de la montaña, hecha de escucha, reciprocidad y memoria.",
    intro:
      "PachaMind es una membresía de aprendizaje bilingüe y gratuita diseñada como un cuaderno documental de campo: amplia, visual y arraigada en la reflexión comunitaria.",
    primaryCta: "Explorar la biblioteca",
    secondaryCta: "Ver tu panel",
    membershipCta: "Comienza el Camino del Puma — crea tu membresía gratuita",
    featuredLabel: "Lección destacada",
    sections: [
      {
        title: "Ritmo documental",
        body: "Visuales lentos, notas en capas y preguntas serenas hacen que cada lección se sienta como una visita de campo y no como un desplazamiento apresurado.",
        image: "/images/andes/andes-iss59-range.jpg",
      },
      {
        title: "Acceso bilingüe",
        body: "El inglés y el español se mantienen sincronizados para que cada reflexión, nota y siguiente paso conserve el mismo sentido en ambas rutas.",
        image: "/images/andes/andes-iss64-range.jpg",
      },
      {
        title: "Una verdadera membresía de aprendizaje",
        body: "Crea una cuenta de aprendizaje gratuita para seguir el Camino del Puma, guardar tu progreso, completar reflexiones y ganar insignias de aprendizaje.",
        image: "/images/andes/andes-western-slope-aster.jpg",
      },
    ],
  },
  library: {
    title: "Biblioteca de lecciones",
    intro:
      "Mira directamente desde la biblioteca y luego abre la lección completa para ver notas más amplias, preguntas de reflexión, un breve cuestionario y seguimiento de progreso.",
    lessonLabel: "Lección",
    watchLabel: "Ver ahora",
    notesLabel: "Notas de aprendizaje",
    openLessonLabel: "Abrir lección completa",
    searchPlaceholder: "Buscar lecciones…",
    filterAllLabel: "Todas",
    emptyState:
      "Ninguna lección coincide con tu búsqueda. Prueba con otro término o tema.",
    topics: {
      listening: "Escucha",
      reciprocity: "Reciprocidad",
      ritual: "Ritual",
      stewardship: "Cuidado",
      cosmovision: "Cosmovisión",
      integration: "Integración",
    },
  },
  lessonPage: {
    watchHeading: "Mira la lección",
    notesHeading: "Notas de aprendizaje",
    transcriptHeading: "Transcripción",
    transcriptToggleOpen: "Mostrar transcripción",
    transcriptToggleClose: "Ocultar transcripción",
    transcriptPlaceholder:
      "Aquí aparecerá una transcripción bilingüe completa cuando el video de la lección esté filmado y subtitulado.",
    reflectionHeading: "Pregunta de reflexión",
    backToLibrary: "Volver a la biblioteca",
    markComplete: "Marcar lección como completada",
    markIncomplete: "Marcar lección como incompleta",
    completedLabel: "Guardada en este navegador como completada",
    progressHint:
      "Tu progreso se guarda en tu membresía de aprendizaje gratuita en este dispositivo. Nunca se requiere pago.",
    nextLessonLabel: "Continuar aprendiendo",
    dashboardLabel: "Ir al panel",
    videoComingSoonLabel: "Video próximamente",
    stageLabel: "Etapa del Camino del Puma",
    quizHeading: "Comprueba tu comprensión",
    quizSubmitLabel: "Comprobar respuesta",
    quizCorrectLabel: "Correcto",
    quizIncorrectLabel: "Casi — inténtalo de nuevo",
    quizTryAgainLabel: "Intentar de nuevo",
    badgeEarnedLabel: "Insignia de aprendizaje obtenida",
  },
  dashboard: {
    title: "Tu panel de aprendizaje",
    intro:
      "Bienvenido de nuevo. Continúa donde lo dejaste, sigue tu etapa del Camino del Puma y observa las insignias de aprendizaje que has obtenido.",
    completedLabel: "Lecciones completadas",
    percentLabel: "Progreso",
    totalLabel: "Lecciones totales",
    continueLearning: "Continuar aprendiendo",
    allComplete:
      "Has completado todas las lecciones en este navegador. Vuelve a cualquier lección cuando quieras.",
    completedState: "Completada",
    notStartedState: "Aún no completada",
    lastWatchedLabel: "Última vista",
    topicsHeading: "Progreso por tema",
    resetLabel: "Restablecer progreso",
    resetConfirmHeading: "¿Restablecer todo el progreso?",
    resetConfirmLabel: "Sí, restablecer",
    resetCancelLabel: "Cancelar",
    certificateTitle: "Certificado de finalización",
    certificateIntro: "Has completado todas las lecciones en este navegador.",
    certificateBody:
      "Este es un reconocimiento gratuito de tu recorrido de aprendizaje a través de PachaMind. Guardián de la tradición: Mallku Aribalo. Una membresía de aprendizaje gratuita — solo aprendizaje.",
    certificateNameLabel: "Tu nombre (opcional, guardado solo en este navegador)",
    certificateNamePlaceholder: "Escribe tu nombre",
    certificatePrintLabel: "Imprimir certificado",
    greeting: "Hola de nuevo",
    guestGreeting: "Bienvenido",
    guestIntro:
      "Puedes aprender libremente sin una cuenta. Crea una membresía de aprendizaje gratuita para guardar tu progreso y obtener insignias de aprendizaje en todos tus dispositivos.",
    guestCta: "Crea tu membresía de aprendizaje gratuita",
    stageHeading: "Tu etapa del Camino del Puma",
    badgesHeading: "Insignias de aprendizaje",
    badgeEarnedLabel: "Obtenida",
    badgeLockedLabel: "Aún no obtenida",
    preferencesCta: "Preferencias de comunicación",
    reflectionsHeading: "Tus reflexiones",
    reflectionsBody:
      "Tus reflexiones privadas se guardan solo en este navegador. Abre el espacio de reflexiones para leerlas o añadir nuevas.",
    reflectionsCta: "Abrir reflexiones",
  },
  about: {
    title: "Acerca de este espacio de aprendizaje",
    intro:
      "PachaMind preserva una atmósfera documental sagrada: ritmo cinematográfico, visuales en tonos tierra y estudio reflexivo ofrecido como una membresía de aprendizaje gratuita.",
    missionHeading: "Nuestra misión",
    missionBody:
      "PachaMind existe para llevar las enseñanzas andinas a un espacio digital de libre acceso, sin distorsión ni presión. Cada decisión de diseño — el ritmo pausado, la amplitud visual, el acceso gratuito — es una expresión directa de ese compromiso.",
    storyHeading: "Cómo nació este espacio",
    storyBody:
      "PachaMind nació del deseo de honrar las tradiciones vivas y a las personas que las cuidan. La plataforma se formó alrededor de las enseñanzas de Mallku Aribalo, quien las compartió para que pudieran viajar con respeto más allá de su geografía original y llegar a cualquiera dispuesto a escuchar con atención. Nada aquí se vende ni se extrae de su contexto.",
    traditionHolderHeading:
      "Mallku Aribalo — guardián de la tradición y maestro chamánico",
    traditionHolderBody:
      "Mallku Aribalo es un maestro chamánico andino y guardián de la tradición cuyo conocimiento de la práctica cosmológica, la reciprocidad comunitaria y la atención sagrada forma el fundamento vivo de cada lección de este espacio. Sus enseñanzas se ofrecen aquí para aprendizaje cultural y reflexión, y se le atribuyen a lo largo de toda la experiencia.",
    valuesHeading: "Compromisos de base",
    values: [
      "Una membresía educativa gratuita — solo aprendizaje, sin costo.",
      "Mallku Aribalo es acreditado como guardián de la tradición a lo largo de la experiencia.",
      "Las lecciones apoyan el aprendizaje cultural y la reflexión, sin afirmaciones terapéuticas ni médicas.",
    ],
  },
  footer: {
    credit: "Guardián de la tradición: Mallku Aribalo",
    mission: "Una membresía de aprendizaje gratuita — solo aprendizaje",
  },
  contact: {
    title: "Ponte en contacto",
    intro:
      "Preguntas, traducciones o comentarios sobre el espacio de aprendizaje — este formulario abre un mensaje en tu aplicación de correo predeterminada. No se recopilan datos en este sitio.",
    nameLabel: "Tu nombre",
    namePlaceholder: "Cómo te gustaría que te llamemos",
    emailLabel: "Tu correo electrónico",
    emailPlaceholder: "Para poder responderte",
    messageLabel: "Tu mensaje",
    messagePlaceholder:
      "Preguntas, reflexiones o comentarios — escribe con libertad",
    submitLabel: "Abrir en la app de correo",
    successHeading: "Mensaje redactado",
    successBody:
      "Tu app de correo se ha abierto con el mensaje ya preparado. Envíalo cuando quieras.",
    validationName: "Por favor escribe tu nombre.",
    validationEmail: "Por favor escribe un correo electrónico válido.",
    validationMessage: "Por favor escribe un mensaje antes de enviar.",
    noteLabel:
      "Este formulario abre un enlace mailto: en tu app de correo. No se transmite ni almacena información en este sitio.",
  },
  pumaPath: {
    title: "El Camino del Puma",
    intro:
      "Una progresión de aprendizaje en cinco etapas inspirada en las enseñanzas andinas, de la Semilla al Puma. Avanza por cada etapa a tu propio ritmo, lleva contigo solo la atención y deja que cada lección profundice la siguiente.",
    stagesHeading: "Cinco etapas de aprendizaje",
    progressLabel: "Tu progresión de aprendizaje",
    noticeMission: "Una membresía de aprendizaje gratuita — solo aprendizaje",
    attributionNote:
      "El Camino del Puma proviene de las enseñanzas de Mallku Aribalo, guardián de la tradición y maestro chamánico andino. Las cinco etapas se ofrecen aquí para aprendizaje cultural y reflexión — no como una iniciación, una certificación o un programa terapéutico.",
    stageLabel: "Etapa",
    completedLabel: "Completada",
    notStartedLabel: "Aún no visitada",
    openStageLabel: "Comenzar esta etapa",
    revisitLabel: "Revisitar esta etapa",
    stages: [
      {
        key: "semilla",
        title: "Semilla",
        meaning: "Semilla",
        body: "Llega antes de interpretar. La primera etapa entrena la atención para recibir antes de reaccionar — aprender a notar el clima, el ritmo, el silencio y el espacio entre las palabras.",
        image: "/images/andes/andes-iss59-range.jpg",
      },
      {
        key: "raiz",
        title: "Raíz",
        meaning: "Raíz",
        body: "Echa raíces en el contexto. Esta etapa introduce el universo vivo, las Tres Pachas y al guardián de la tradición cuyo conocimiento ancla cada lección — el suelo del que todo lo demás crece.",
        image: "/images/andes/machu-picchu-inti-punku.jpg",
      },
      {
        key: "tallo",
        title: "Tallo",
        meaning: "Tallo",
        body: "Crece hacia arriba mediante la práctica. La reciprocidad, la atención ritual, el Ayni y los Cinco Valores Andinos se vuelven una disciplina diaria — un cuidado constante que sostiene la pertenencia con el tiempo.",
        image: "/images/andes/machu-picchu-urubamba-canyon.jpg",
      },
      {
        key: "flor",
        title: "Flor",
        meaning: "Flor",
        body: "Sostén lo aprendido con ligereza y fidelidad. Esta etapa se dirige a los sitios sagrados, el cuidado y cómo las enseñanzas viajan sin perder sus raíces — y cómo el crédito, el contexto y la humildad viajan con ellas.",
        image: "/images/andes/andes-western-slope-aster.jpg",
      },
      {
        key: "puma",
        title: "Puma",
        meaning: "Puma",
        body: "Deja que todas las etapas se muevan juntas. El Puma no es un destino final sino un retorno continuo: cada práctica renueva a las demás cuando se sostienen como un todo y no como una secuencia.",
        image: "/images/andes/andes-iss47-mountain-road.jpg",
      },
    ],
  },
  badges: [
    {
      key: "first-listening",
      title: "Primera Escucha",
      description: "Completaste tu primera lección y comenzaste el Camino del Puma.",
      stage: "semilla",
    },
    {
      key: "rooted",
      title: "Enraizado",
      description: "Completaste una lección fundamental de cosmovisión en la etapa Raíz.",
      stage: "raiz",
    },
    {
      key: "reciprocity-practice",
      title: "Reciprocidad en Práctica",
      description: "Completaste una lección de la etapa Tallo sobre reciprocidad y valores.",
      stage: "tallo",
    },
    {
      key: "steward",
      title: "Cuidador Atento",
      description: "Completaste una lección de la etapa Flor sobre sitios sagrados y cuidado.",
      stage: "flor",
    },
    {
      key: "integration",
      title: "Camino de Integración",
      description: "Completaste una lección de integración en la etapa Puma.",
      stage: "puma",
    },
  ],
  learn: {
    title: "Comienza a aprender",
    intro:
      "Tres maneras de entrar a PachaMind: comienza una lección, sigue el Camino del Puma o crea tu membresía de aprendizaje gratuita para guardarlo todo.",
    startHeading: "Comienza con una lección",
    startBody:
      "Abre la biblioteca y mira cualquier lección. Cada una incluye notas de aprendizaje, una transcripción, una pregunta de reflexión y un breve cuestionario.",
    startCta: "Abrir la biblioteca",
    pathHeading: "Sigue el Camino del Puma",
    pathBody:
      "Avanza de la Semilla al Puma a tu propio ritmo. El camino es un mapa de aprendizaje — nunca una iniciación, ceremonia o certificación.",
    pathCta: "Ver el Camino del Puma",
    membershipHeading: "Guarda tu progreso",
    membershipBody:
      "Crea tu membresía de aprendizaje gratuita para seguir el Camino del Puma, guardar tu progreso, completar reflexiones, ganar insignias de aprendizaje y elegir cómo PachaMind puede comunicarse contigo sobre tu aprendizaje.",
    membershipCta: "Crea tu membresía de aprendizaje gratuita",
  },
  mallku: {
    title: "Mallku Aribalo",
    intro:
      "Guardián de la tradición y maestro chamánico andino cuyo conocimiento forma el fundamento vivo de cada lección de PachaMind.",
    roleHeading: "Su rol",
    roleBody:
      "Mallku Aribalo (también escrito James Arévalo Merejildo) es acreditado en todo PachaMind como maestro chamánico andino y guardián de la tradición. Aquí «maestro chamánico» se refiere a un rol cultural y tradicional; no se hacen afirmaciones terapéuticas ni médicas.",
    attributionHeading: "Por qué importa la atribución",
    attributionBody:
      "Acreditar la fuente es en sí mismo un acto de reciprocidad. Saber quién sostiene una enseñanza es inseparable de comprenderla, y nombrar al guardián de la tradición mantiene el conocimiento conectado con la comunidad que lo lleva.",
    lessonsHeading: "Por dónde empezar",
    lessonsBody:
      "La lección «Mallku Aribalo: Guardián de la Tradición y Maestro Andino» presenta su rol en profundidad. Cada otra lección está arraigada en la tradición que él lleva.",
    verificationNote:
      "Los detalles biográficos deben verificarse con fuentes autorizadas antes de publicarse; evita imágenes sensacionalistas o afirmaciones no verificadas.",
  },
  signup: {
    title: "Crea tu membresía de aprendizaje PachaMind gratuita",
    intro:
      "Tu membresía te permite seguir el Camino del Puma, guardar tu progreso, recibir recordatorios de lecciones, completar reflexiones y elegir cómo PachaMind puede comunicarse contigo sobre tu aprendizaje.",
    firstNameLabel: "Nombre",
    lastNameLabel: "Apellido",
    emailLabel: "Correo electrónico",
    countryRegionLabel: "País / región",
    countryRegionPlaceholder: "ej. Perú, o California, EE. UU.",
    countryCodeLabel: "Código de país",
    countryCodePlaceholder: "ej. +51",
    cellWhatsappLabel: "Número de celular / WhatsApp",
    cellWhatsappPlaceholder: "Tu número de celular",
    preferredLanguageLabel: "Idioma preferido",
    permissionsHeading: "Permisos de comunicación",
    permissionsIntro:
      "Estos permisos son independientes. Elige solo los que desees. Las casillas opcionales comienzan sin marcar y este prototipo no envía mensajes reales.",
    permissions: {
      account:
        "Acepto crear una membresía de aprendizaje PachaMind gratuita y recibir mensajes relacionados con la cuenta.",
      email: "Acepto recibir correos educativos de PachaMind.",
      whatsapp: "Acepto recibir mensajes educativos de PachaMind por WhatsApp.",
      sms: "Acepto recibir mensajes educativos de PachaMind por SMS si este canal llega a estar disponible.",
      embodierDisclaimer:
        "Entiendo que esto no me inscribe en comunicaciones comerciales de Embodier.ai.",
    },
    submitLabel: "Crear mi membresía de aprendizaje gratuita",
    successHeading: "Bienvenido a PachaMind",
    successBody:
      "Tu membresía de aprendizaje gratuita está guardada en este navegador. Tu progreso y reflexiones quedarán asociados a ella.",
    successDashboardCta: "Ir a tu panel",
    requiredNote:
      "El permiso de membresía y mensajes de cuenta es obligatorio para crear tu cuenta. Todos los demás permisos son opcionales.",
    prototypeNote:
      "Prototipo: tu membresía y consentimiento se guardan solo en este navegador. No se transmite nada y no se envían mensajes. [TODO: conectar a un backend revisado por asesoría legal antes del lanzamiento.]",
    boundaryNote:
      "Una membresía de aprendizaje PachaMind gratuita no crea consentimiento comercial de Embodier.ai.",
    validationFirstName: "Por favor escribe tu nombre.",
    validationLastName: "Por favor escribe tu apellido.",
    validationEmail: "Por favor escribe un correo electrónico válido.",
    validationCountryRegion: "Por favor escribe tu país o región.",
    validationCellWhatsapp: "Por favor escribe un número de celular / WhatsApp.",
    validationAccountConsent:
      "El permiso de membresía y mensajes de cuenta es obligatorio para crear tu cuenta.",
  },
  preferences: {
    title: "Preferencias de comunicación",
    intro:
      "Actualiza cómo PachaMind puede comunicarse contigo sobre tu aprendizaje. Cada canal es una elección independiente y opcional.",
    profileHeading: "Tu membresía",
    channelsHeading: "Canales de comunicación",
    channelsIntro:
      "Activa o desactiva cada canal educativo. Los cambios se registran como nuevas entradas de consentimiento; este prototipo no envía nada.",
    saveLabel: "Guardar preferencias",
    savedLabel: "Preferencias guardadas",
    noMembershipHeading: "No se encontró membresía",
    noMembershipBody:
      "Todavía no has creado una membresía de aprendizaje gratuita en este navegador.",
    noMembershipCta: "Crea tu membresía de aprendizaje gratuita",
    boundaryNote:
      "Estas preferencias cubren solo la comunicación educativa de PachaMind. No crean consentimiento comercial de Embodier.ai.",
    consentLogHeading: "Registro de consentimiento (vista de desarrollo)",
    consentLogIntro:
      "Un registro local y simulado de las decisiones de consentimiento para este prototipo. No se muestra en la interfaz de producción.",
    consentLogEmpty: "Aún no hay registros de consentimiento.",
  },
  legalPages: {
    privacy: {
      title: "Privacidad",
      intro:
        "Cómo PachaMind maneja la información en este prototipo de membresía de aprendizaje gratuita.",
      version: "2026-06-17",
      lastUpdated: "17 de junio de 2026",
      sections: [
        {
          heading: "Manejo de datos en el prototipo",
          body: "En este prototipo, tus datos de membresía, progreso de aprendizaje, reflexiones y permisos de comunicación se guardan solo en tu navegador (localStorage). No se transmite ni se almacena nada en un servidor.",
        },
        {
          heading: "Datos de membresía",
          body: "Si se agrega un backend, los campos recopilados al registrarte (nombre, correo, país/región, código de país, número de celular/WhatsApp, idioma preferido) se usan solo para la administración educativa de la membresía — nunca para difusión comercial.",
        },
        {
          heading: "Permisos de comunicación",
          body: "Los permisos de correo, WhatsApp y SMS son independientes y opcionales. Puedes cambiarlos cuando quieras en la página de preferencias. Este prototipo no envía mensajes reales.",
        },
        {
          heading: "Sin consentimiento comercial",
          body: "Una membresía de aprendizaje PachaMind gratuita no crea consentimiento comercial de Embodier.ai ni te inscribe en ninguna comunicación comercial.",
        },
        {
          heading: "Revisión de asesoría legal",
          body: "[NEEDS COUNSEL/VERIFICATION] La redacción final de privacidad, la retención de datos, el registro y cualquier límite de intercambio de datos deben ser revisados por asesoría legal antes del lanzamiento.",
        },
      ],
    },
    terms: {
      title: "Términos",
      intro:
        "Términos de uso del prototipo de membresía de aprendizaje PachaMind gratuita.",
      version: "2026-06-17",
      lastUpdated: "17 de junio de 2026",
      sections: [
        {
          heading: "Una membresía educativa gratuita",
          body: "PachaMind ofrece solo membresías de aprendizaje gratuitas. No hay costo, ni pago, ni mejora de pago, ni compra de ningún tipo.",
        },
        {
          heading: "Propósito educativo",
          body: "Las lecciones se ofrecen para aprendizaje cultural y reflexión. No sustituyen orientación médica, terapéutica ni legal, y no hacen afirmaciones de resultados ni de sanación.",
        },
        {
          heading: "Atribución",
          body: "Las enseñanzas se atribuyen al guardián de la tradición Mallku Aribalo. El Camino del Puma es una progresión de aprendizaje, no una iniciación, ceremonia o certificación.",
        },
        {
          heading: "Revisión de asesoría legal",
          body: "[NEEDS COUNSEL/VERIFICATION] Los términos finales, los límites de entidad y el lenguaje de consentimiento por canal deben ser revisados por asesoría legal antes del lanzamiento.",
        },
      ],
    },
    accessibility: {
      title: "Accesibilidad",
      intro: "PachaMind busca ser utilizable por todas las personas, en cualquier dispositivo.",
      version: "2026-06-17",
      lastUpdated: "17 de junio de 2026",
      sections: [
        {
          heading: "Nuestro compromiso",
          body: "PachaMind está diseñado primero para móviles desde 375px, con ritmo pausado, tonos tierra de alto contraste, menús navegables con teclado, enlaces para saltar al contenido y contornos de foco visibles.",
        },
        {
          heading: "Subtítulos y transcripciones",
          body: "Cada lección está construida para llevar una transcripción bilingüe. El texto de la transcripción se muestra en un panel desplegable en cada página de lección una vez que el video esté filmado y subtitulado.",
        },
        {
          heading: "Comentarios",
          body: "Si alguna parte de PachaMind es difícil de usar, contáctanos a través de la página de contacto para que podamos mejorarla.",
        },
      ],
    },
  },
  lessons: [
    {
      slug: "what-pachamind-is",
      topic: "listening",
      title: "Qué es PachaMind",
      kicker: "Lección 1",
      duration: "8 min",
      estimatedMinutes: 8,
      stage: "semilla",
      badgeTrigger: "first-listening",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Filmar una explicación de orientación que presente PachaMind como una membresía de aprendizaje andino gratuita y un espacio de preservación cultural.",
      description:
        "Una orientación a PachaMind: una membresía de educación de sabiduría andina gratuita dedicada a la preservación cultural y al acceso abierto.",
      extendedDescription:
        "Esta lección presenta el propósito y los compromisos de PachaMind. Explica por qué este espacio se estructura como un entorno de aprendizaje documental, por qué se ofrece como una membresía de aprendizaje gratuita, y cómo cada lección se conecta con las tradiciones vivas que sostiene Mallku Aribalo. PachaMind existe para hacer libremente accesible el conocimiento cultural andino, sin distorsión ni presión.",
      learningNotes: [
        "PachaMind es una membresía educativa gratuita — solo aprendizaje.",
        "Cada lección está arraigada en la tradición viva que sostiene Mallku Aribalo, acreditado como guardián de la tradición en todo momento.",
        "El contenido se ofrece solo para aprendizaje cultural y reflexión; no sustituye orientación médica, terapéutica ni legal.",
        "Nivel de riesgo: Bajo — contenido de orientación sin afirmaciones de salud o resultados.",
      ],
      reflectionPrompt:
        "¿Qué te atrae de aprender de una tradición cultural andina, y cómo quieres sostener lo que recibes aquí?",
      quiz: {
        id: "what-pachamind-is-q1",
        prompt: "¿Cómo se ofrece PachaMind a quienes aprenden?",
        options: [
          "Como una membresía de aprendizaje educativa gratuita",
          "Como una suscripción de pago",
          "Como un viaje guiado a Perú",
        ],
        correctIndex: 0,
        explanation:
          "PachaMind ofrece solo membresías de aprendizaje gratuitas — sin costo y sin venta de nada.",
      },
      forbiddenLanguageNote:
        "Evitar vender viajes, membresías de pago o afirmaciones de transformación.",
    },
    {
      slug: "mountain-listening",
      topic: "listening",
      title: "Escucha de la Montaña",
      kicker: "Lección 2",
      duration: "12 min",
      estimatedMinutes: 12,
      stage: "semilla",
      badgeTrigger: "first-listening",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Filmar una lección de apertura al ritmo del campo en terreno montañoso andino que demuestre escucha atenta, pausas, sonido ambiental y observación situada antes de interpretar.",
      description:
        "Comienza con la escucha atenta: marca el ritmo de tu atención, nota el lugar y deja que el silencio enseñe.",
      extendedDescription:
        "Esta lección plantea la escucha como una forma disciplinada de llegar. Invita a notar el clima, el ritmo, la pausa y el tono antes de saltar a la explicación, manteniendo la atmósfera documental serena y observadora.",
      learningNotes: [
        "La escucha se trata como un acto de relación, no como consumo pasivo.",
        "Un ritmo más lento puede revelar contexto que se pierde cuando una lección se apresura a conclusiones.",
        "El silencio, el paisaje y la voz portan sentido dentro de un marco documental sagrado.",
      ],
      reflectionPrompt:
        "¿Qué cambia cuando te detienes lo suficiente para notar el espacio alrededor de una enseñanza antes de interpretarla?",
      quiz: {
        id: "mountain-listening-q1",
        prompt: "¿Cómo plantea esta lección la escucha?",
        options: [
          "Como consumo pasivo de fondo",
          "Como un acto de relación y atención disciplinada",
          "Como una prueba para pasar rápido",
        ],
        correctIndex: 1,
        explanation:
          "Aquí la escucha es una relación y una disciplina — recibir antes de reaccionar.",
      },
      forbiddenLanguageNote:
        "Evitar afirmaciones terapéuticas o de resultados sobre la atención o la calma.",
    },
    {
      slug: "mallku-aribalo-tradition-holder",
      topic: "stewardship",
      title: "Mallku Aribalo: Guardián de la Tradición y Maestro Andino",
      kicker: "Lección 3",
      duration: "10 min",
      estimatedMinutes: 10,
      stage: "raiz",
      badgeTrigger: "rooted",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Filmar un perfil biográfico de Mallku Aribalo que cubra su rol como guardián de la tradición, el contexto de su linaje docente y por qué importa la atribución de la fuente.",
      description:
        "Conoce a Mallku Aribalo — maestro chamánico andino, guardián de la tradición y ancla cultural del espacio de aprendizaje PachaMind.",
      extendedDescription:
        "Esta lección presenta a Mallku Aribalo como la fuente viva de las enseñanzas que lleva este espacio. Cubre su rol como guardián de la tradición dentro de la práctica cosmológica andina, su compromiso con la reciprocidad comunitaria y por qué la atribución importa al compartir conocimiento sagrado entre culturas. Comprender quién sostiene una enseñanza es inseparable de comprender la enseñanza misma.",
      learningNotes: [
        "Mallku Aribalo es un maestro chamánico andino cuyo conocimiento de la práctica cosmológica forma el fundamento de cada lección de este espacio.",
        "La atribución es un acto de reciprocidad: acreditar la fuente preserva la integridad de la enseñanza.",
        "Aquí «maestro chamánico» se refiere a un rol cultural y tradicional; no se hacen afirmaciones terapéuticas ni médicas.",
        "Nivel de riesgo: Medio — contenido biográfico y de atribución; verificar derechos antes de citar directamente sus obras publicadas.",
      ],
      reflectionPrompt:
        "¿Por qué importa saber quién sostiene una enseñanza para cómo la recibes y la llevas adelante?",
      quiz: {
        id: "mallku-aribalo-q1",
        prompt: "En PachaMind, «maestro chamánico» se refiere a:",
        options: [
          "Un proveedor médico o terapéutico",
          "Un rol cultural y tradicional",
          "Un guía de viajes",
        ],
        correctIndex: 1,
        explanation:
          "Nombra un rol cultural y tradicional; no se hacen afirmaciones terapéuticas ni médicas.",
      },
      forbiddenLanguageNote:
        "Evitar imágenes sensacionalistas de chamán, biografía no verificada y promesas de resultados.",
    },
    {
      slug: "kausay-pacha-living-universe",
      topic: "cosmovision",
      title: "Kausay Pacha: El Universo Vivo",
      kicker: "Lección 4",
      duration: "12 min",
      estimatedMinutes: 12,
      stage: "raiz",
      badgeTrigger: "rooted",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Filmar una lección conceptual que explique Kausay Pacha como un universo vivo y relacional e introduzca el marco de las Tres Pachas.",
      description:
        "Explora Kausay Pacha — el concepto andino del universo vivo — como fundamento cosmológico del pensamiento y la práctica andinos.",
      extendedDescription:
        "En la cosmovisión andina, Kausay Pacha describe un universo que está vivo, es relacional y está en diálogo constante con los seres humanos. Esta lección presenta el concepto como una lente para comprender cómo las Tres Pachas (Hanaq, Kay y Uku) se relacionan entre sí y con la vida cotidiana. Presenta este marco como educación cultural y filosófica, no como cosmología prescriptiva.",
      learningNotes: [
        "Kausay Pacha significa «el universo vivo» en quechua — un cosmos entendido como animado y relacional.",
        "Este marco se presenta como educación cultural y filosófica arraigada en la tradición andina.",
        "El concepto de universo vivo provee el fundamento cosmológico para comprender las Tres Pachas.",
        "Nivel de riesgo: Bajo — alfabetización cultural sin afirmaciones de salud o resultados.",
      ],
      reflectionPrompt:
        "¿Cómo cambia tu comprensión de tu lugar en el mundo el pensar el universo como vivo y relacional?",
      quiz: {
        id: "kausay-pacha-q1",
        prompt: "Kausay Pacha puede traducirse como:",
        options: ["El universo vivo", "El más allá", "Una práctica médica"],
        correctIndex: 0,
        explanation:
          "Kausay Pacha significa «el universo vivo» — un cosmos entendido como animado y relacional.",
      },
      forbiddenLanguageNote:
        "Evitar lenguaje médico, terapéutico o de resultados personales garantizados.",
    },
    {
      slug: "hanaq-pacha-sky-cycles",
      topic: "cosmovision",
      title: "Hanaq Pacha: Cielo, Ciclos y Arqueoastronomía",
      kicker: "Lección 5",
      duration: "14 min",
      estimatedMinutes: 14,
      stage: "raiz",
      badgeTrigger: "rooted",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Filmar una lección de cielo y sitio sobre Hanaq Pacha con contexto histórico de arqueoastronomía, ciclos celestes y alineaciones arquitectónicas.",
      description:
        "Estudia Hanaq Pacha — el mundo de arriba, de cielo, estrellas y ciclos cósmicos — y cómo los pueblos andinos leían los cielos como un mapa del tiempo y la relación.",
      extendedDescription:
        "Hanaq Pacha es el mundo de arriba andino: el reino del sol, la luna, las estrellas y los ciclos cósmicos. Esta lección explora cómo las comunidades andinas desarrollaron un sofisticado conocimiento arqueoastronómico para medir el tiempo, alinear arquitectura sagrada y sostener el ritmo comunitario. Todas las afirmaciones astronómicas se presentan como interpretación académica e histórica — no como autoridad predictiva o astrológica.",
      learningNotes: [
        "Hanaq Pacha se refiere al mundo de arriba en la cosmovisión andina — abarca el cielo, los cuerpos celestes y los ciclos cósmicos.",
        "La arqueoastronomía andina es un área documentada de estudio académico; las afirmaciones aquí siguen la interpretación académica.",
        "Las alineaciones de sitios sagrados (p. ej., Machu Picchu, Sacsayhuamán) se presentan como evidencia histórica y arquitectónica, no como prescripción mística.",
        "Nivel de riesgo: Medio — evitar sobreafirmar autoridad astronómica, astrológica o predictiva; enmarcar el contenido como interpretación histórica.",
      ],
      reflectionPrompt:
        "¿Qué significa leer el cielo como un calendario y un mapa de responsabilidad comunitaria, y no solo como un telón de fondo?",
      quiz: {
        id: "hanaq-pacha-q1",
        prompt: "Las afirmaciones astronómicas de esta lección se enmarcan como:",
        options: [
          "Astrología predictiva",
          "Interpretación académica e histórica",
          "Adivinación personal de la fortuna",
        ],
        correctIndex: 1,
        explanation:
          "Las afirmaciones siguen la interpretación académica e histórica — no autoridad predictiva ni astrológica.",
      },
      forbiddenLanguageNote:
        "Evitar sobreafirmar prueba mística, predicción astrológica o consenso académico.",
    },
    {
      slug: "uku-pacha-ancestry",
      topic: "cosmovision",
      title: "Uku Pacha: Ancestralidad, Profundidad e Integración",
      kicker: "Lección 6",
      duration: "11 min",
      estimatedMinutes: 11,
      stage: "raiz",
      badgeTrigger: "rooted",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Filmar una lección de alfabetización cultural sobre Uku Pacha, la ancestralidad, la memoria y la integración, enmarcada sin afirmaciones terapéuticas.",
      description:
        "Uku Pacha — el mundo interior o de abajo — guarda la ancestralidad, la profundidad y las raíces de lo que llevamos, ofrecido aquí como aprendizaje cultural sobre la integración y la memoria.",
      extendedDescription:
        "Uku Pacha es el mundo interior o de abajo andino: no un lugar de castigo sino de profundidad, ancestralidad y las raíces invisibles de las tradiciones vivas. Esta lección presenta Uku Pacha como una lente cultural para comprender cómo las comunidades sostienen la memoria, integran la dificultad y se apoyan en el conocimiento ancestral. Se ofrece estrictamente como alfabetización educativa y cultural — no como marco terapéutico o psicológico.",
      learningNotes: [
        "Uku Pacha es el mundo de abajo o interior en la cosmovisión andina — el reino de la ancestralidad, las raíces y la profundidad.",
        "Esta lección se ofrece como alfabetización cultural y educativa sobre cómo las tradiciones andinas entienden la memoria y la integración.",
        "No se hacen afirmaciones terapéuticas, psicológicas ni de sanación; el contenido es estrictamente cultural en su enfoque.",
        "Nivel de riesgo: Bajo — alfabetización cultural presentada como contenido educativo sin afirmaciones terapéuticas.",
      ],
      reflectionPrompt:
        "¿Qué llevas de quienes vinieron antes que tú, y cómo da forma la memoria cultural al suelo en el que estás de pie?",
      quiz: {
        id: "uku-pacha-q1",
        prompt: "Uku Pacha se presenta en esta lección como:",
        options: [
          "Un tratamiento terapéutico para el trauma",
          "Una lente cultural sobre ancestralidad, memoria y profundidad",
          "Un lugar de castigo",
        ],
        correctIndex: 1,
        explanation:
          "Se ofrece como alfabetización cultural sobre ancestralidad y memoria — no terapia, ni castigo.",
      },
      forbiddenLanguageNote:
        "Evitar afirmaciones terapéuticas, psicológicas o de sanación sobre integrar la dificultad.",
    },
    {
      slug: "ayllu-reciprocity",
      topic: "reciprocity",
      title: "Ayllu y Reciprocidad",
      kicker: "Lección 7",
      duration: "14 min",
      estimatedMinutes: 14,
      stage: "tallo",
      badgeTrigger: "reciprocity-practice",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Filmar entrevistas y planos de apoyo que muestren la reciprocidad al estilo del ayllu en la vida diaria, destacando el cuidado mutuo, la gratitud y la responsabilidad compartida entre comunidad y paisaje.",
      description:
        "Explora la reciprocidad como una práctica viva de cuidado mutuo, responsabilidad y gratitud entre comunidad y paisaje.",
      extendedDescription:
        "Esta lección se expande de la reflexión individual a la relación colectiva. Describe la reciprocidad como una disciplina cotidiana que pregunta qué recibimos, qué devolvemos y cómo crece la pertenencia mediante actos constantes de cuidado.",
      learningNotes: [
        "La reciprocidad se describe como una práctica repetida más que como un lema simbólico.",
        "La comunidad se sostiene mediante el intercambio, la gratitud y la responsabilidad.",
        "La lección pide considerar cómo el lugar y las personas requieren respuesta.",
      ],
      reflectionPrompt:
        "¿Dónde en tu vida diaria recibes apoyo, y cómo se vería una respuesta más recíproca?",
      quiz: {
        id: "ayllu-reciprocity-q1",
        prompt: "La reciprocidad en esta lección se entiende mejor como:",
        options: [
          "Una transacción única",
          "Una práctica diaria y repetida de cuidado mutuo",
          "Un lema de marketing",
        ],
        correctIndex: 1,
        explanation:
          "La reciprocidad es una práctica repetida de cuidado mutuo, no una transacción ni un lema.",
      },
      forbiddenLanguageNote:
        "Evitar enmarcar la reciprocidad como intercambio transaccional o metáfora de ventas.",
    },
    {
      slug: "kay-pacha-reciprocity",
      topic: "reciprocity",
      title: "Kay Pacha: Reciprocidad y Práctica Diaria",
      kicker: "Lección 8",
      duration: "13 min",
      estimatedMinutes: 13,
      stage: "tallo",
      badgeTrigger: "reciprocity-practice",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Filmar una lección de la vida diaria que muestre prácticas de reciprocidad del Kay Pacha con la tierra, la comunidad, la gratitud y escenas de rutina cotidiana.",
      description:
        "Kay Pacha — el mundo presente de la vida cotidiana — es donde la reciprocidad se vuelve práctica: en la tierra, la comunidad y los ritmos de los días ordinarios.",
      extendedDescription:
        "Kay Pacha es el mundo de en medio andino: el presente vivido, el suelo bajo nuestros pies, la comunidad en la que nos movemos. Esta lección explora cómo la cosmovisión andina pide a los humanos involucrarse con el Kay Pacha mediante la atención recíproca — cuidar la tierra, sostener la comunidad y practicar la gratitud como disciplina diaria y no como ocasión ritual.",
      learningNotes: [
        "Kay Pacha es el mundo presente en la cosmovisión andina — el dominio de la vida y la relación humana cotidiana.",
        "La reciprocidad en el Kay Pacha es una práctica diaria, no un gesto simbólico: rige cómo se trata la tierra, la comunidad y a uno mismo.",
        "Arraigar las Tres Pachas en la vida diaria conecta el estudio cosmológico con la conducta vivida.",
        "Nivel de riesgo: Bajo — educación cultural y ética sin afirmaciones de salud o resultados.",
      ],
      reflectionPrompt:
        "¿Dónde en tu vida diaria experimentas que el mundo presente te pide algo — y cómo respondes?",
      quiz: {
        id: "kay-pacha-q1",
        prompt: "Kay Pacha es:",
        options: [
          "El mundo de arriba, del cielo",
          "El mundo presente de la vida cotidiana",
          "El mundo interior de la ancestralidad",
        ],
        correctIndex: 1,
        explanation:
          "Kay Pacha es el mundo presente, de en medio — el dominio de la vida humana cotidiana.",
      },
      forbiddenLanguageNote:
        "Evitar enmarcar la práctica diaria en términos médicos o terapéuticos.",
    },
    {
      slug: "ritual-attention",
      topic: "ritual",
      title: "Atención Ritual",
      kicker: "Lección 9",
      duration: "11 min",
      estimatedMinutes: 11,
      stage: "tallo",
      badgeTrigger: "reciprocity-practice",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Filmar una demostración respetuosa de gestos rituales simples y repetidos que muestren preparación, intención y atención corporizada sin espectáculo.",
      description:
        "Aprende cómo la atención ritual reúne memoria, intención y cuidado corporizado sin espectáculo ni presión de desempeño.",
      extendedDescription:
        "La atención ritual se presenta aquí como una forma de concentrar el cuidado. La lección enfatiza la preparación, la constancia y el respeto, mostrando cómo gestos simples y repetidos pueden portar sentido cuando se practican con claridad.",
      learningNotes: [
        "El ritual se muestra como atención enfocada, no como despliegue dramático.",
        "La constancia importa porque el sentido se profundiza con la repetición.",
        "Los gestos corporizados pueden anclar la memoria cuando se practican con cuidado.",
      ],
      reflectionPrompt:
        "¿Qué pequeña acción repetida te ayuda a volver a la intención, y qué le da sentido a esa acción?",
      quiz: {
        id: "ritual-attention-q1",
        prompt: "La atención ritual en esta lección se muestra como:",
        options: [
          "Espectáculo público dramático",
          "Atención enfocada y constante en gestos simples",
          "Una ceremonia que debes comprar",
        ],
        correctIndex: 1,
        explanation:
          "Aquí el ritual es atención enfocada y repetida — no espectáculo, y nunca algo que se vende.",
      },
      forbiddenLanguageNote:
        "Evitar todo encuadre de acceso a ceremonias, presencial o de compra.",
    },
    {
      slug: "ayni-sacred-reciprocity",
      topic: "reciprocity",
      title: "Ayni: Reciprocidad Sagrada",
      kicker: "Lección 10",
      duration: "12 min",
      estimatedMinutes: 12,
      stage: "tallo",
      badgeTrigger: "reciprocity-practice",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Filmar una lección de ética que defina el Ayni como reciprocidad sagrada y contraste el equilibrio relacional con el intercambio transaccional.",
      description:
        "El Ayni es el principio andino de la reciprocidad sagrada: dar y recibir en equilibrio, con la tierra, la comunidad y el cosmos.",
      extendedDescription:
        "El Ayni — a menudo traducido como reciprocidad sagrada — es uno de los principios más fundamentales de la cultura andina. Esta lección explora el Ayni como una ética relacional que vincula a las personas con la comunidad, con el lugar y con el orden cósmico más amplio. Examina cómo el Ayni difiere del intercambio transaccional y por qué sigue siendo una práctica viva y no un artefacto histórico.",
      learningNotes: [
        "El Ayni suele traducirse como «reciprocidad sagrada» — una ética relacional en el centro de la vida cultural andina.",
        "El Ayni difiere del intercambio transaccional: es relacional, continuo y arraigado en el cuidado mutuo más que en la equivalencia.",
        "Comprender el Ayni ayuda a situar el Kay Pacha, el Ayllu y los Cinco Valores Andinos dentro de un único marco cultural coherente.",
        "Nivel de riesgo: Bajo — educación cultural y ética sin afirmaciones de salud o resultados.",
      ],
      reflectionPrompt:
        "¿Dónde en tus relaciones practicas el equilibrio entre dar y recibir, y dónde te resulta más difícil sostener ese equilibrio?",
      quiz: {
        id: "ayni-q1",
        prompt: "El Ayni difiere del intercambio transaccional porque es:",
        options: [
          "Relacional, continuo y arraigado en el cuidado mutuo",
          "Un trueque estricto de igual valor",
          "Un servicio de pago",
        ],
        correctIndex: 0,
        explanation:
          "El Ayni es una ética relacional y continua de cuidado mutuo — no un trueque estricto ni un servicio de pago.",
      },
      forbiddenLanguageNote:
        "Evitar enmarcar el Ayni como comercio, precios o intercambio pagado.",
    },
    {
      slug: "values-munay-yachay-llankay",
      topic: "ritual",
      title: "Munay, Yachay, Llank'ay, Sami y Hucha: Los Valores como Currículo",
      kicker: "Lección 11",
      duration: "15 min",
      estimatedMinutes: 15,
      stage: "tallo",
      badgeTrigger: "reciprocity-practice",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Filmar una lección de currículo que desglose Munay, Yachay, Llank'ay, Sami y Hucha con ejemplos concretos de cada valor en la práctica.",
      description:
        "Los Cinco Valores Andinos — Munay, Yachay, Llank'ay, Sami y Hucha — forman la columna ética de la práctica cultural andina y el currículo de PachaMind.",
      extendedDescription:
        "La tradición andina organiza la vida ética en torno a cinco conceptos entrelazados: Munay (amor y voluntad), Yachay (conocimiento y sabiduría), Llank'ay (trabajo y servicio con propósito), Sami (energía refinada y ligera) y Hucha (energía pesada o no procesada). Esta lección presenta estos valores como un marco curricular — una manera de evaluar dónde reposan ahora tu atención, intención y esfuerzo, y hacia dónde te llama el crecimiento.",
      learningNotes: [
        "Munay: amor, intención y la voluntad de actuar desde el cuidado y no desde el miedo.",
        "Yachay: sabiduría acumulada y la disciplina de aprender con humildad.",
        "Llank'ay: trabajo y servicio significativos como forma de reciprocidad con la comunidad.",
        "Sami y Hucha describen cualidades de energía — ligereza y pesadez — como conceptos culturales, no médicos.",
        "Nivel de riesgo: Bajo — educación en valores presentada como currículo cultural sin afirmaciones terapéuticas.",
      ],
      reflectionPrompt:
        "¿Cuál de estos cinco valores te pide más en este momento, y cómo se vería atenderlo esta semana?",
      quiz: {
        id: "values-q1",
        prompt: "Sami y Hucha se describen como:",
        options: [
          "Diagnósticos médicos",
          "Conceptos culturales de energía ligera y pesada",
          "Niveles de pago",
        ],
        correctIndex: 1,
        explanation:
          "Sami y Hucha son conceptos culturales de cualidad energética — no médicos, ni niveles de pago.",
      },
      forbiddenLanguageNote:
        "Evitar el bombo de autoayuda comercial o afirmaciones de terapia sobre los valores.",
    },
    {
      slug: "huacas-sacred-sites",
      topic: "stewardship",
      title: "Huacas y Sitios Sagrados: Interpretación Académica y Tradición Viva",
      kicker: "Lección 12",
      duration: "13 min",
      estimatedMinutes: 13,
      stage: "flor",
      badgeTrigger: "steward",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Filmar cobertura en locación y con apoyo de archivo sobre las huacas, equilibrando la interpretación académica con el significado comunitario vivo y la ética del cuidado.",
      description:
        "Las huacas — lugares y objetos sagrados andinos — se sitúan en la intersección de la arqueología, la tradición viva y el cuidado cultural.",
      extendedDescription:
        "Una huaca es un lugar, objeto o ser considerado sagrado en la tradición andina — una montaña, un manantial, una piedra labrada o un sitio ancestral. Esta lección navega la diferencia entre la interpretación arqueológica académica y el significado vivo que las comunidades andinas siguen sosteniendo. Pide a quienes aprenden permanecer en esa diferencia con respeto, en lugar de resolverla prematuramente.",
      learningNotes: [
        "Huaca (wak'a) se refiere a un lugar, objeto o ser sagrado en la tradición andina — el término abarca una amplia gama de sitios y entidades.",
        "Las interpretaciones arqueológicas y académicas de las huacas difieren del significado vivo que sostienen las comunidades andinas; ambas merecen atención cuidadosa.",
        "Esta lección practica el cuidado cultural: sostener la complejidad, evitar la extracción y acreditar a las tradiciones vivas como fuentes.",
        "Nivel de riesgo: Medio — verificar fuentes académicas; evitar sobreafirmar autoridad espiritual; respetar la propiedad intelectual comunitaria.",
      ],
      reflectionPrompt:
        "¿Cómo sostienes la diferencia entre estudiar un sitio sagrado como persona externa y respetar su significado vivo para la comunidad que lo llama hogar?",
      quiz: {
        id: "huacas-q1",
        prompt: "Una huaca es:",
        options: [
          "Un lugar, objeto o ser sagrado en la tradición andina",
          "Un tipo de moneda",
          "Un paquete de viaje",
        ],
        correctIndex: 0,
        explanation:
          "Una huaca es un lugar, objeto o ser sagrado — nunca un producto ni un paquete de viaje.",
      },
      forbiddenLanguageNote:
        "Evitar ofertas de viaje, reservas de visitas a sitios y sobreafirmar autoridad espiritual.",
    },
    {
      slug: "carrying-the-teaching",
      topic: "stewardship",
      title: "Llevar la Enseñanza Adelante",
      kicker: "Lección 13",
      duration: "13 min",
      estimatedMinutes: 13,
      stage: "flor",
      badgeTrigger: "steward",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Filmar una lección de cierre sobre el cuidado de llevar las enseñanzas adelante con humildad, contexto, atribución y responsabilidad compartida.",
      description:
        "Considera cómo las enseñanzas se llevan adelante mediante la humildad, la precisión y la responsabilidad compartida.",
      extendedDescription:
        "Esta lección se centra en el cuidado. En lugar de tratar el aprendizaje como una colección personal, pregunta cómo las enseñanzas se recuerdan con fidelidad, se comparten con cuidado y se mantienen conectadas con las comunidades que las sostienen.",
      learningNotes: [
        "El cuidado requiere humildad sobre lo que te pertenece y lo que no.",
        "Compartir una enseñanza con responsabilidad incluye contexto, crédito y cuidado con el lenguaje.",
        "El aprendizaje se vuelve duradero cuando cambia la práctica, no solo la memoria.",
      ],
      reflectionPrompt:
        "¿Cómo puedes llevar una enseñanza adelante de un modo que preserve el contexto, el crédito y la responsabilidad?",
      quiz: {
        id: "carrying-the-teaching-q1",
        prompt: "El cuidado responsable de una enseñanza incluye:",
        options: [
          "Contexto, crédito y cuidado con el lenguaje",
          "Eliminar la fuente para simplificarla",
          "Vender el acceso a ella",
        ],
        correctIndex: 0,
        explanation:
          "Llevar una enseñanza adelante significa preservar contexto, crédito y cuidado — nunca extracción ni venta.",
      },
      forbiddenLanguageNote:
        "Evitar implicar acceso pagado o distribución comercial de las enseñanzas.",
    },
    {
      slug: "puma-path-orientation",
      topic: "stewardship",
      title: "Orientación del Camino del Puma: de la Semilla al Puma como Progresión de Aprendizaje",
      kicker: "Lección 14",
      duration: "9 min",
      estimatedMinutes: 9,
      stage: "flor",
      badgeTrigger: "steward",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Filmar una lección de orientación del programa que mapee la progresión de la Semilla al Puma como un marco de estudio, no como iniciación o ceremonia.",
      description:
        "El Camino del Puma es la progresión de aprendizaje de PachaMind — un arco curricular estructurado de la Semilla al Puma — no una iniciación ni una ceremonia.",
      extendedDescription:
        "El Camino del Puma organiza el currículo de PachaMind en una progresión de estudio. La Semilla marca el comienzo — una orientación a la escucha, la presencia y el contexto cultural. El Puma marca un compromiso sostenido con los valores andinos, la cosmovisión y la práctica recíproca. Esta progresión es solo un marco de aprendizaje: no es una ceremonia, no es una iniciación y no es una certificación. Es un mapa para un compromiso estudioso, humilde y de largo plazo con una tradición viva.",
      learningNotes: [
        "El Camino del Puma es un arco curricular — una progresión de aprendizaje — no una ceremonia, iniciación o certificación espiritual.",
        "Las etapas van de la Semilla hasta el Puma; cada etapa corresponde a un estudio y práctica más profundos, no a un avance ritual.",
        "Completar el Camino del Puma no confiere autoridad alguna sobre la tradición andina; es solo un registro personal de aprendizaje.",
        "Nivel de riesgo: Bajo — solo encuadre de progresión de aprendizaje; sin lenguaje de iniciación, ceremonia o promesa de resultados.",
      ],
      reflectionPrompt:
        "¿Qué significa seguir un camino de aprendizaje con genuina humildad — tratando cada etapa como una profundización de la atención y no como un logro que coleccionar?",
      quiz: {
        id: "puma-path-orientation-q1",
        prompt: "El Camino del Puma es:",
        options: [
          "Una iniciación o ceremonia",
          "Una progresión de aprendizaje y marco de estudio",
          "Un nivel de membresía de pago",
        ],
        correctIndex: 1,
        explanation:
          "El Camino del Puma es una progresión de aprendizaje — nunca una iniciación, ceremonia o nivel de pago.",
      },
      forbiddenLanguageNote:
        "Nunca vincular las etapas con acceso a ceremonias, viajes, descuentos o prioridad pagada.",
    },
    {
      slug: "path-of-integration",
      topic: "integration",
      title: "El Camino de la Integración",
      kicker: "Lección 15",
      duration: "15 min",
      estimatedMinutes: 15,
      stage: "puma",
      badgeTrigger: "integration",
      youtubeId: "",
      mediaStatus: "NEEDS_REAL_VIDEO",
      mediaNote:
        "Filmar un cierre de integración que muestre cómo la escucha, la reciprocidad, el ritual y el cuidado se interconectan como una práctica cíclica continua.",
      description:
        "Reúne las etapas en una práctica viva: cómo la escucha, la reciprocidad, el ritual y el cuidado se sostienen y renuevan mutuamente con el tiempo.",
      extendedDescription:
        "La integración no es un destino final sino un movimiento continuo. Esta lección pregunta cómo las etapas previas se apoyan entre sí como una práctica completa — y cómo quien aprende puede volver a cualquier etapa con ojos nuevos, profundizados por todo lo que vino antes.",
      learningNotes: [
        "La integración se entiende como un ciclo continuo y no como un estado terminado.",
        "Cada etapa profundiza a las demás cuando se sostienen juntas con atención constante.",
        "Llevar una práctica completa significa dar la bienvenida al retorno tanto como al avance.",
      ],
      reflectionPrompt:
        "¿Cómo se mueven ya juntas la escucha, la reciprocidad, el ritual y el cuidado en tu vida diaria, y dónde piden más atención?",
      quiz: {
        id: "path-of-integration-q1",
        prompt: "La integración se entiende mejor como:",
        options: [
          "Un logro final y terminado",
          "Un ciclo continuo de retorno y renovación",
          "Un certificado de graduación para comprar",
        ],
        correctIndex: 1,
        explanation:
          "La integración es un ciclo continuo de retorno — no una meta final ni una compra.",
      },
      forbiddenLanguageNote:
        "Evitar enmarcar la finalización como una credencial para comprar o una promesa de resultados.",
    },
  ],
  conservation: {
    title: "Conservación Andina",
    intro:
      "A través de la lente de la cosmovisión andina, la conservación no es una política ni un proyecto — es una relación viva. Estos temas exploran cómo las enseñanzas andinas ofrecen un enfoque arraigado para cuidar el agua, la tierra, la biodiversidad y la comunidad a lo largo de las generaciones.",
    attributionLabel: "Guardián de la tradición",
    principlesHeading: "Principios fundamentales",
    reflectionHeading: "Una reflexión para tu aprendizaje",
    reflectionPrompt:
      "¿Qué relación con el mundo natural a tu alrededor ha sido moldeada por la reciprocidad, y qué significaría cuidar esa relación con mayor atención?",
    bands: [
      {
        title: "Reciprocidad con la tierra (Ayni)",
        body: "En la cosmovisión andina, la tierra no es un recurso a gestionar sino un ser vivo con quien estar en relación. El principio del ayni — la reciprocidad — moldea cada interacción con la tierra: lo que tomas, lo devuelves; lo que recibes, lo cuidas. La conservación se vuelve un acto de gratitud continua.",
        image: "/images/andes/machu-picchu-general.png",
      },
      {
        title: "El agua como ser vivo",
        body: "El agua se honra en la tradición andina como una fuente de vida que porta memoria e intención. La conservación comienza con la escucha: comprender de dónde viene el agua, cómo se mueve y qué necesita para seguir fluyendo entre comunidades y generaciones. Proteger las cuencas es un acto de reciprocidad comunitaria.",
        image: "/images/andes/machu-picchu-urubamba-canyon.jpg",
      },
      {
        title: "La biodiversidad y la red de la vida",
        body: "El pensamiento cosmológico andino reconoce que todos los seres vivos — plantas, animales, hongos, suelos — participan de una existencia compartida. La diversidad no es ornamental; es la integridad estructural del mundo vivo, y cada pérdida disminuye el todo. Cuidar la biodiversidad es cuidar la relación misma.",
        image: "/images/andes/machu-picchu-aster-nasa.jpg",
      },
      {
        title: "Prácticas sostenibles arraigadas en el conocimiento ancestral",
        body: "Las tradiciones andinas de agricultura y manejo de la tierra — andenes, rotación de cultivos, canalización del agua, policultivo — evolucionaron a través de siglos de observación cuidadosa y cuidado comunitario. Estas prácticas no son folclore; son respuestas sofisticadas a ecosistemas complejos, refinadas a lo largo de generaciones de cuidado atento.",
        image: "/images/andes/machu-picchu-hb10.jpg",
      },
    ],
    principles: [
      "La tierra es un ser vivo que merece cuidado, no un recurso a extraer.",
      "El agua porta memoria; proteger las cuencas es un acto de reciprocidad comunitaria.",
      "La biodiversidad refleja la riqueza de las relaciones entre todos los seres vivos.",
      "El conocimiento ecológico ancestral ofrece una guía arraigada y probada para el cuidado de la tierra.",
      "La conservación es una práctica colectiva sostenida por la responsabilidad compartida y la atención.",
    ],
  },
  reflections: {
    title: "Reflexiones",
    intro:
      "Un espacio contemplativo para detenerte con la pregunta de cada lección. Escribe en privado — tus notas permanecen solo en este navegador y nunca se transmiten ni se almacenan en este sitio.",
    promptsHeading: "Preguntas para escribir",
    noteLabel: "Tus notas privadas",
    notePlaceholder:
      "Escribe con libertad. Tus notas quedan solo en este navegador — no se comparte ni se transmite nada.",
    saveLabel: "Guardar nota",
    savedLabel: "Guardada",
    clearLabel: "Borrar",
    storageHint:
      "Las notas se guardan solo en este navegador. No se transmite ni se recopila nada en este sitio.",
    attributionLabel: "Preguntas de reflexión basadas en enseñanzas de Mallku Aribalo",
    parallaxSections: [
      {
        title: "Escribir como escuchar",
        body: "Escribir dentro de un marco de cosmovisión no es análisis — es una forma de atender lo que ya está presente. Escribe hacia el notar, no hacia las conclusiones.",
        image: "/images/andes/machu-picchu-aster-nasa.jpg",
      },
      {
        title: "Privado y sin prisa",
        body: "Estas notas te pertenecen solo a ti. No hay envíos ni respuestas correctas — solo el espacio silencioso entre una pregunta y tu respuesta.",
        image: "/images/andes/machu-picchu-partial-1911.jpg",
      },
    ],
  },
};
