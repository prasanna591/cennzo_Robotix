"use strict";

// Canonical English content + translations for the previously hardcoded pages.
// Structure mirrors the shape that gets deep-merged into messages/<locale>.json.
module.exports = {
  en: {
    platformPage: {
      meta: {
        title: "Platform Architecture",
        description:
          "One robot. Many mission configurations. WAFEE is designed around a common core platform with mission-specific modules.",
      },
      hero: {
        eyebrow: "Platform Architecture",
        line1: "One Robot.",
        line2: "Many Mission Configurations.",
        intro:
          "WAFEE is designed around a common core platform with mission-specific modules.",
      },
      coreEyebrow: "Common Core",
      coreTitle: "Core Platform",
      core: [
        "Humanoid structure",
        "Actuation",
        "Compute",
        "Power",
        "Sensors",
        "Control",
        "Communications",
        "Safety systems",
      ],
      modulesEyebrow: "Mission-Specific",
      modulesTitle: "Mission Modules",
      modules: [
        "Inspection payloads",
        "Thermal sensing",
        "Environmental sensing",
        "Manipulation tools",
        "Communication modules",
        "Navigation payloads",
        "Specialized end effectors",
        "Mission-specific protective systems",
      ],
      body:
        "This architecture allows Cennzo Robotix to develop one core robotic intelligence platform while adapting the machine for different industries.",
      cta: {
        line1: "Configured For",
        line2: "The Mission.",
        body: "Discuss a mission configuration for your industry.",
        primary: "Contact Us",
        secondary: "View Industries",
      },
    },
    careersPage: {
      meta: {
        title: "Robotics Careers",
        description:
          "Build machines that change what is possible. Open domains across robotics, mechanical, electrical, embedded, AI/ML, control, thermal, materials and software engineering.",
      },
      hero: {
        eyebrow: "Careers",
        line1: "Build Machines That",
        line2: "Change What Is Possible.",
        intro: "If you want to build the future, build it with us.",
        meta: "Don't just work in robotics. Push robotics forward.",
      },
      domainsEyebrow: "Open Domains",
      domainsBody:
        "We are looking for engineers, researchers, designers, builders and problem solvers who want to work on difficult problems with real physical consequences.",
      domains: [
        "Robotics",
        "Mechanical Engineering",
        "Mechatronics",
        "Electrical Engineering",
        "Embedded Systems",
        "Motor Control",
        "Power Electronics",
        "Battery Systems",
        "AI/ML",
        "Computer Vision",
        "Reinforcement Learning",
        "Motion Planning",
        "Control Systems",
        "Thermal Engineering",
        "Materials Engineering",
        "CAD & Simulation",
        "Manufacturing",
        "Product Design",
        "Software Engineering",
        "Testing & Validation",
      ],
      cultureEyebrow: "Culture",
      culture: [
        "Think deeply.",
        "Build quickly.",
        "Test honestly.",
        "Learn continuously.",
        "Take ownership.",
        "Respect safety.",
        "Solve real problems.",
      ],
      mediaLabel: "Life at Cennzo Robotix — Culture Concept",
      cta: {
        line1: "Push Robotics Forward.",
        body: "Send your profile and tell us what you want to build.",
        primary: "View Open Roles",
        secondary: "Send Your Profile",
      },
    },
    safetyPage: {
      meta: {
        title: "Validation & Safety",
        description:
          "Trust is engineered. Cennzo Robotix safety architecture across mechanical, electrical, software and operational layers — with a rigorous validation philosophy.",
      },
      hero: {
        eyebrow: "Validation & Safety",
        line1: "Trust Is Engineered.",
        intro:
          "A humanoid robot operating around people cannot rely on intelligence alone. Safety must exist at every layer.",
      },
      archEyebrow: "Safety Architecture",
      layers: [
        {
          index: "01",
          name: "Mechanical Safety",
          points: [
            "Structural margins",
            "Joint limits",
            "Mechanical stops",
            "Controlled failure modes",
          ],
        },
        {
          index: "02",
          name: "Electrical Safety",
          points: [
            "Isolation",
            "Overcurrent protection",
            "Short-circuit protection",
            "Battery monitoring",
            "Emergency shutdown",
          ],
        },
        {
          index: "03",
          name: "Software Safety",
          points: [
            "Watchdogs",
            "Fault detection",
            "Safe-state transitions",
            "Control limits",
            "Redundant monitoring",
          ],
        },
        {
          index: "04",
          name: "Operational Safety",
          points: [
            "Geofencing",
            "Mission boundaries",
            "Human override",
            "Remote emergency stop",
            "Event logging",
          ],
        },
      ],
      mediaLabel: "Environmental Test Chamber — Concept Visualization",
      philEyebrow: "Validation Philosophy",
      philTitle: "We Separate What We Claim From What We Have Proven.",
      philBody:
        "This distinction is essential to credible deep-tech engineering. Environmental capability claims will be supported by defined test conditions and documented validation.",
      levels: [
        {
          level: "Design Target",
          description: "An engineering objective. Not yet demonstrated.",
        },
        {
          level: "Prototype Result",
          description: "Observed on prototype hardware under test conditions.",
        },
        {
          level: "Validated Performance",
          description: "Confirmed through defined, documented test procedures.",
        },
        {
          level: "Certified Performance",
          description: "Verified by recognized third-party certification.",
        },
      ],
      cta: {
        line1: "Credibility Is",
        line2: "The Product.",
        body: "Review our validation approach for your deployment scenario.",
        primary: "Contact Us",
        secondary: "Explore WAFEE",
      },
    },
    researchPage: {
      meta: {
        title: "Research & Engineering",
        description:
          "From first principles to field validation — Cennzo Robotix R&D across locomotion, actuation, perception, AI, materials, thermal management and digital engineering.",
      },
      hero: {
        eyebrow: "Research & Engineering",
        line1: "From First Principles",
        line2: "To Field Validation.",
        intro:
          "Deep-tech robotics is built through engineering discipline. Our R&D roadmap covers the full stack.",
      },
      domainsEyebrow: "Research Domains",
      domains: [
        "Humanoid locomotion",
        "Whole-body control",
        "High-torque actuation",
        "Energy-dense power systems",
        "Thermal management",
        "Advanced materials",
        "Environmental protection",
        "Sensor fusion",
        "Robotic perception",
        "AI planning",
        "Manipulation",
        "Human-robot interaction",
        "Autonomous navigation",
        "Digital simulation",
        "Predictive maintenance",
        "Robot fleet intelligence",
      ],
      digiTitle: "Digital Engineering",
      digiBody:
        "Before expensive physical testing, robotic systems can be evaluated through simulation.",
      tools: [
        "CAD",
        "Multibody dynamics",
        "Finite element analysis",
        "Computational fluid dynamics",
        "Thermal simulation",
        "Electrical simulation",
        "Control simulation",
        "Digital twins",
        "Software-in-the-loop",
        "Hardware-in-the-loop",
      ],
      mediaLabel: "Digital Twin Simulation — Concept Visualization",
      mediaTitle: "Simulation does not replace physical validation.",
      mediaBody:
        "It accelerates engineering decisions and reduces unnecessary prototype iterations.",
      cycleEyebrow: "Build → Test → Measure → Learn",
      cycleTitle: "Every Subsystem Moves Through The Cycle.",
      cycle: [
        "Design",
        "Simulation",
        "Prototype",
        "Bench Test",
        "Subsystem Validation",
        "Integrated Test",
        "Environmental Test",
        "Field Trial",
        "Production Readiness",
      ],
      cta: {
        line1: "Engineering",
        line2: "Is The Strategy.",
        body: "Collaborate with our research and engineering teams.",
        primary: "Partner With Us",
        secondary: "See the Technology",
      },
    },
    partnershipsPage: {
      meta: {
        title: "Partnerships",
        description:
          "Build the future with us. Technology, industrial, research, manufacturing and government partnerships around the WAFEE humanoid robotics platform.",
      },
      hero: {
        eyebrow: "Partnerships",
        line1: "Build The Future",
        line2: "With Us.",
        intro:
          "No deep-tech company builds the future alone. Cennzo Robotix is building an ecosystem across robotics, AI, advanced materials, motors and actuators, batteries, sensors, manufacturing, simulation, aerospace, research and industrial deployment.",
      },
      partners: [
        {
          title: "Technology Partners",
          description:
            "Develop next-generation components and subsystems with us.",
        },
        {
          title: "Industrial Partners",
          description: "Bring real-world mission problems to the platform.",
        },
        {
          title: "Research Partners",
          description:
            "Collaborate on fundamental robotics and advanced engineering.",
        },
        {
          title: "Manufacturing Partners",
          description:
            "Scale precision robotic hardware from prototype to production.",
        },
        {
          title: "Government & Institutional Partners",
          description:
            "Develop responsible robotic capabilities for public-interest missions.",
        },
        {
          title: "Investors",
          description:
            "Help accelerate the transition from advanced prototype to scalable deep-tech company.",
        },
      ],
      disclaimer:
        "YOUR TECHNOLOGY COULD BECOME PART OF THE NEXT GENERATION OF INTELLIGENT MACHINES.",
      mediaLabel: "The Cennzo Robotix Partner Ecosystem — Concept",
      cta: {
        line1: "Become A Partner.",
        body: "Bring your technology, your mission problems or your capital to the platform.",
        primary: "Become a Partner",
        secondary: "Investor Information",
      },
    },
    investorsPage: {
      meta: {
        title: "Investors",
        description:
          "Investing in the next generation of robotics. Cennzo Robotix is building a scalable humanoid robotics platform with hardware, software and recurring service value layers.",
      },
      hero: {
        eyebrow: "Investors",
        line1: "Investing In The Next",
        line2: "Generation Of Robotics.",
        intro: "We are building a robotics platform, not a single product.",
        meta: "Cennzo Robotix is developing a scalable humanoid robotics platform designed to support multiple industries and mission configurations.",
      },
      valueEyebrow: "Long-Term Value Layers",
      valueBody: "The opportunity extends beyond hardware.",
      valueLayers: [
        "Robot sales",
        "Robotics-as-a-Service",
        "Leasing",
        "Mission services",
        "Software",
        "AI capabilities",
        "Fleet management",
        "Predictive maintenance",
        "Data and analytics",
        "Lifecycle support",
        "Specialized payloads",
      ],
      thesisTitle: "Investment Thesis",
      thesis: [
        "Large emerging robotics market",
        "Platform-based product architecture",
        "Multiple commercial applications",
        "Recurring software and service opportunities",
        "Expanding autonomy capabilities",
        "Hardware + software integration",
        "Long-term international market potential",
      ],
      disclaimer:
        "INVESTOR MATERIALS SHOULD CONTAIN VERIFIED FINANCIAL ASSUMPTIONS, VALIDATED TECHNICAL MILESTONES, CAPITALIZATION DETAILS AND COMMERCIALLY DEFENSIBLE FORECASTS.",
      cta: {
        line1: "Build With",
        line2: "The Platform.",
        body: "Request the investor information package.",
        primary: "Request Investor Information",
        secondary: "About Cennzo",
      },
    },
    legalPage: {
      meta: {
        title: "Legal",
        description:
          "Privacy policy, terms of use, responsible AI & robotics principles, and safety & compliance information for Cennzo Robotix.",
      },
      hero: {
        eyebrow: "Legal",
        line1: "Policies &",
        line2: "Principles.",
        meta: "Last updated: August 2026",
      },
      sections: [
        {
          id: "privacy",
          title: "Privacy Policy",
          body: [
            "Cennzo Robotix respects your privacy. Information submitted through this website — such as your name, organization and contact details — is used solely to respond to your inquiry and is not sold or shared with third parties for marketing purposes.",
            "This website does not use tracking cookies beyond what is strictly necessary for site operation. You may request deletion of any personal data you have shared with us at any time by contacting us.",
          ],
        },
        {
          id: "terms",
          title: "Terms of Use",
          body: [
            "The content of this website is provided for general information about Cennzo Robotix and the WAFEE platform. It does not constitute a technical specification, an offer, or a contractual commitment.",
            "All product descriptions, capabilities and environmental claims represent engineering targets or roadmap intentions under active development. Nothing on this site should be interpreted as a guarantee of performance.",
            "All trademarks, text and visual assets are the property of Cennzo Robotix unless otherwise stated.",
          ],
        },
        {
          id: "responsible-ai",
          title: "Responsible AI & Robotics",
          body: [
            "We believe autonomous systems must operate within defined safety boundaries, with traceability and human oversight where required.",
            "Cennzo Robotix develops robotics for missions that reduce human exposure to danger. We pursue applications that improve safety, reach and operational capability, and we decline uses that conflict with responsible deployment principles and applicable law.",
          ],
        },
        {
          id: "compliance",
          title: "Safety & Compliance",
          body: [
            "Safety is engineered into every layer of our platforms — mechanical, electrical, software and operational. Environmental capability claims will be published only after controlled laboratory testing, subsystem qualification and full-system validation.",
            "Our validation philosophy separates design targets, prototype results, validated performance and certified performance. All deployments are subject to applicable law, safety requirements and responsible-use principles.",
          ],
        },
      ],
    },
    notFound: {
      error: "Error 404",
      signalLost: "Signal Lost.",
      body: "The page you are looking for does not exist or has been moved.",
      returnHome: "Return Home",
    },
    errorPage: {
      fault: "System Fault",
      title: "Something went off-course.",
      body: "An unexpected error interrupted this page. Our team has been notified — try again, or head back to base.",
      retry: "Retry",
      backHome: "Back to Home",
    },
  },
  es: {
    platformPage: {
      meta: {
        title: "Arquitectura de la Plataforma",
        description:
          "Un robot. Muchas configuraciones de misión. WAFEE está diseñado alrededor de una plataforma central común con módulos específicos de misión.",
      },
      hero: {
        eyebrow: "Arquitectura de la Plataforma",
        line1: "Un Robot.",
        line2: "Muchas Configuraciones de Misión.",
        intro:
          "WAFEE está diseñado alrededor de una plataforma central común con módulos específicos de misión.",
      },
      coreEyebrow: "Núcleo Común",
      coreTitle: "Plataforma Principal",
      core: [
        "Estructura humanoide",
        "Actuación",
        "Computación",
        "Energía",
        "Sensores",
        "Control",
        "Comunicaciones",
        "Sistemas de seguridad",
      ],
      modulesEyebrow: "Específico de Misión",
      modulesTitle: "Módulos de Misión",
      modules: [
        "Cargas de inspección",
        "Detección térmica",
        "Detección ambiental",
        "Herramientas de manipulación",
        "Módulos de comunicación",
        "Cargas de navegación",
        "Efectores finales especializados",
        "Sistemas de protección específicos de misión",
      ],
      body:
        "Esta arquitectura permite a Cennzo Robotix desarrollar una plataforma de inteligencia robótica central mientras adapta la máquina a diferentes industrias.",
      cta: {
        line1: "Configurado Para",
        line2: "La Misión.",
        body: "Comenta una configuración de misión para tu industria.",
        primary: "Contáctanos",
        secondary: "Ver Industrias",
      },
    },
    careersPage: {
      meta: {
        title: "Carreras en Robótica",
        description:
          "Construye máquinas que cambian lo que es posible. Áreas abiertas en robótica, ingeniería mecánica, eléctrica, embebida, IA/ML, control, térmica, materiales y software.",
      },
      hero: {
        eyebrow: "Carreras",
        line1: "Construye Máquinas Que",
        line2: "Cambian Lo Que Es Posible.",
        intro: "Si quieres construir el futuro, constrúyelo con nosotros.",
        meta: "No solo trabajes en robótica. Impulsa la robótica hacia adelante.",
      },
      domainsEyebrow: "Áreas Abiertas",
      domainsBody:
        "Buscamos ingenieros, investigadores, diseñadores, constructores y solucionadores de problemas que quieran trabajar en problemas difíciles con consecuencias físicas reales.",
      domains: [
        "Robótica",
        "Ingeniería Mecánica",
        "Mecatrónica",
        "Ingeniería Eléctrica",
        "Sistemas Embebidos",
        "Control de Motores",
        "Electrónica de Potencia",
        "Sistemas de Baterías",
        "IA/ML",
        "Visión por Computadora",
        "Aprendizaje por Refuerzo",
        "Planificación de Movimiento",
        "Sistemas de Control",
        "Ingeniería Térmica",
        "Ingeniería de Materiales",
        "CAD y Simulación",
        "Fabricación",
        "Diseño de Producto",
        "Ingeniería de Software",
        "Pruebas y Validación",
      ],
      cultureEyebrow: "Cultura",
      culture: [
        "Piensa en profundidad.",
        "Construye rápido.",
        "Prueba con honestidad.",
        "Aprende continuamente.",
        "Asume responsabilidad.",
        "Respeta la seguridad.",
        "Resuelve problemas reales.",
      ],
      mediaLabel: "La Vida en Cennzo Robotix — Concepto de Cultura",
      cta: {
        line1: "Impulsa la Robótica.",
        body: "Envía tu perfil y cuéntanos qué quieres construir.",
        primary: "Ver Roles Abiertos",
        secondary: "Envía tu Perfil",
      },
    },
    safetyPage: {
      meta: {
        title: "Validación y Seguridad",
        description:
          "La confianza se ingenia. Arquitectura de seguridad Cennzo Robotix en capas mecánicas, eléctricas, de software y operativas — con una rigurosa filosofía de validación.",
      },
      hero: {
        eyebrow: "Validación y Seguridad",
        line1: "La Confianza Se Ingenia.",
        intro:
          "Un robot humanoide que opera entre personas no puede depender solo de la inteligencia. La seguridad debe existir en cada capa.",
      },
      archEyebrow: "Arquitectura de Seguridad",
      layers: [
        {
          index: "01",
          name: "Seguridad Mecánica",
          points: [
            "Márgenes estructurales",
            "Límites de articulaciones",
            "Topes mecánicos",
            "Modos de fallo controlados",
          ],
        },
        {
          index: "02",
          name: "Seguridad Eléctrica",
          points: [
            "Aislamiento",
            "Protección contra sobrecorriente",
            "Protección contra cortocircuito",
            "Monitoreo de batería",
            "Apagado de emergencia",
          ],
        },
        {
          index: "03",
          name: "Seguridad de Software",
          points: [
            "Perros guardianes",
            "Detección de fallas",
            "Transiciones a estado seguro",
            "Límites de control",
            "Monitoreo redundante",
          ],
        },
        {
          index: "04",
          name: "Seguridad Operativa",
          points: [
            "Geocercas",
            "Límites de misión",
            "Anulación humana",
            "Parada de emergencia remota",
            "Registro de eventos",
          ],
        },
      ],
      mediaLabel: "Cámara de Pruebas Ambientales — Visualización de Concepto",
      philEyebrow: "Filosofía de Validación",
      philTitle: "Separamos Lo Que Afirmamos De Lo Que Hemos Demostrado.",
      philBody:
        "Esta distinción es esencial para una ingeniería deep-tech creíble. Las afirmaciones de capacidad ambiental se respaldarán con condiciones de prueba definidas y validación documentada.",
      levels: [
        {
          level: "Objetivo de Diseño",
          description: "Un objetivo de ingeniería. Aún no demostrado.",
        },
        {
          level: "Resultado de Prototipo",
          description: "Observado en hardware de prototipo bajo condiciones de prueba.",
        },
        {
          level: "Rendimiento Validado",
          description: "Confirmado mediante procedimientos de prueba definidos y documentados.",
        },
        {
          level: "Rendimiento Certificado",
          description: "Verificado por certificación de terceros reconocida.",
        },
      ],
      cta: {
        line1: "La Credibilidad Es",
        line2: "El Producto.",
        body: "Revisa nuestro enfoque de validación para tu escenario de despliegue.",
        primary: "Contáctanos",
        secondary: "Explorar WAFEE",
      },
    },
    researchPage: {
      meta: {
        title: "Investigación e Ingeniería",
        description:
          "De los primeros principios a la validación de campo — I+D de Cennzo Robotix en locomoción, actuación, percepción, IA, materiales, gestión térmica e ingeniería digital.",
      },
      hero: {
        eyebrow: "Investigación e Ingeniería",
        line1: "De Los Primeros Principios",
        line2: "A La Validación De Campo.",
        intro:
          "La robótica deep-tech se construye con disciplina de ingeniería. Nuestra hoja de ruta de I+D cubre toda la pila.",
      },
      domainsEyebrow: "Áreas de Investigación",
      domains: [
        "Locomoción humanoide",
        "Control de cuerpo completo",
        "Actuación de alto par",
        "Sistemas de energía densa",
        "Gestión térmica",
        "Materiales avanzados",
        "Protección ambiental",
        "Fusión de sensores",
        "Percepción robótica",
        "Planificación con IA",
        "Manipulación",
        "Interacción humano-robot",
        "Navegación autónoma",
        "Simulación digital",
        "Mantenimiento predictivo",
        "Inteligencia de flotas robóticas",
      ],
      digiTitle: "Ingeniería Digital",
      digiBody:
        "Antes de las costosas pruebas físicas, los sistemas robóticos pueden evaluarse mediante simulación.",
      tools: [
        "CAD",
        "Dinámica multicuerpo",
        "Análisis de elementos finitos",
        "Dinámica de fluidos computacional",
        "Simulación térmica",
        "Simulación eléctrica",
        "Simulación de control",
        "Gemelos digitales",
        "Software en el bucle",
        "Hardware en el bucle",
      ],
      mediaLabel: "Simulación de Gemelo Digital — Visualización de Concepto",
      mediaTitle: "La simulación no reemplaza la validación física.",
      mediaBody:
        "Acelera las decisiones de ingeniería y reduce iteraciones de prototipos innecesarias.",
      cycleEyebrow: "Construir → Probar → Medir → Aprender",
      cycleTitle: "Cada Subsistema Recorre El Ciclo.",
      cycle: [
        "Diseño",
        "Simulación",
        "Prototipo",
        "Prueba de banco",
        "Validación de subsistema",
        "Prueba integrada",
        "Prueba ambiental",
        "Ensayo de campo",
        "Listo para producción",
      ],
      cta: {
        line1: "La Ingeniería",
        line2: "Es La Estrategia.",
        body: "Colabora con nuestros equipos de investigación e ingeniería.",
        primary: "Asóciate con Nosotros",
        secondary: "Ver la Tecnología",
      },
    },
    partnershipsPage: {
      meta: {
        title: "Alianzas",
        description:
          "Construye el futuro con nosotros. Alianzas tecnológicas, industriales, de investigación, fabricación y gobierno alrededor de la plataforma robótica humanoide WAFEE.",
      },
      hero: {
        eyebrow: "Alianzas",
        line1: "Construye El Futuro",
        line2: "Con Nosotros.",
        intro:
          "Ninguna empresa deep-tech construye el futuro sola. Cennzo Robotix está construyendo un ecosistema en robótica, IA, materiales avanzados, motores y actuadores, baterías, sensores, fabricación, simulación, aeroespacial, investigación y despliegue industrial.",
      },
      partners: [
        {
          title: "Alianzas Tecnológicas",
          description:
            "Desarrolla componentes y subsistemas de próxima generación con nosotros.",
        },
        {
          title: "Alianzas Industriales",
          description: "Lleva problemas de misión del mundo real a la plataforma.",
        },
        {
          title: "Alianzas de Investigación",
          description:
            "Colabora en robótica fundamental e ingeniería avanzada.",
        },
        {
          title: "Alianzas de Fabricación",
          description:
            "Escala hardware robótico de precisión del prototipo a la producción.",
        },
        {
          title: "Alianzas Gubernamentales e Institucionales",
          description:
            "Desarrolla capacidades robóticas responsables para misiones de interés público.",
        },
        {
          title: "Inversores",
          description:
            "Ayuda a acelerar la transición de prototipo avanzado a empresa deep-tech escalable.",
        },
      ],
      disclaimer:
        "TU TECNOLOGÍA PODRÍA SER PARTE DE LA PRÓXIMA GENERACIÓN DE MÁQUINAS INTELIGENTES.",
      mediaLabel: "El Ecosistema de Socios Cennzo Robotix — Concepto",
      cta: {
        line1: "Conviértete En Socio.",
        body: "Lleva tu tecnología, tus problemas de misión o tu capital a la plataforma.",
        primary: "Conviértete en Socio",
        secondary: "Información para Inversores",
      },
    },
    investorsPage: {
      meta: {
        title: "Inversores",
        description:
          "Invertir en la próxima generación de robótica. Cennzo Robotix está construyendo una plataforma robótica humanoide escalable con capas de valor de hardware, software y servicios recurrentes.",
      },
      hero: {
        eyebrow: "Inversores",
        line1: "Invertir En La Próxima",
        line2: "Generación De Robótica.",
        intro: "Estamos construyendo una plataforma robótica, no un solo producto.",
        meta: "Cennzo Robotix está desarrollando una plataforma robótica humanoide escalable diseñada para múltiples industrias y configuraciones de misión.",
      },
      valueEyebrow: "Capas de Valor a Largo Plazo",
      valueBody: "La oportunidad va más allá del hardware.",
      valueLayers: [
        "Venta de robots",
        "Robótica como servicio",
        "Arrendamiento",
        "Servicios de misión",
        "Software",
        "Capacidades de IA",
        "Gestión de flotas",
        "Mantenimiento predictivo",
        "Datos y analítica",
        "Soporte de ciclo de vida",
        "Cargas especializadas",
      ],
      thesisTitle: "Tesis de Inversión",
      thesis: [
        "Gran mercado robótico emergente",
        "Arquitectura de producto basada en plataforma",
        "Múltiples aplicaciones comerciales",
        "Oportunidades recurrentes de software y servicios",
        "Capacidades de autonomía en expansión",
        "Integración de hardware y software",
        "Potencial de mercado internacional a largo plazo",
      ],
      disclaimer:
        "LOS MATERIALES PARA INVERSORES DEBEN CONTENER SUPUESTOS FINANCIEROS VERIFICADOS, HITOS TÉCNICOS VALIDADOS, DETALLES DE CAPITALIZACIÓN Y PREVISIONES COMERCIALMENTE DEFENSIBLES.",
      cta: {
        line1: "Construye Con",
        line2: "La Plataforma.",
        body: "Solicita el paquete de información para inversores.",
        primary: "Solicitar Información para Inversores",
        secondary: "Acerca de Cennzo",
      },
    },
    legalPage: {
      meta: {
        title: "Legal",
        description:
          "Política de privacidad, términos de uso, principios de IA y robótica responsable, e información de seguridad y cumplimiento para Cennzo Robotix.",
      },
      hero: {
        eyebrow: "Legal",
        line1: "Políticas y",
        line2: "Principios.",
        meta: "Última actualización: agosto de 2026",
      },
      sections: [
        {
          id: "privacy",
          title: "Política de Privacidad",
          body: [
            "Cennzo Robotix respeta tu privacidad. La información enviada a través de este sitio web — como tu nombre, organización y datos de contacto — se usa únicamente para responder a tu consulta y no se vende ni comparte con terceros con fines de marketing.",
            "Este sitio web no utiliza cookies de seguimiento más allá de lo estrictamente necesario para su funcionamiento. Puedes solicitar la eliminación de cualquier dato personal que hayas compartido con nosotros en cualquier momento contactándonos.",
          ],
        },
        {
          id: "terms",
          title: "Términos de Uso",
          body: [
            "El contenido de este sitio web se proporciona como información general sobre Cennzo Robotix y la plataforma WAFEE. No constituye una especificación técnica, una oferta ni un compromiso contractual.",
            "Todas las descripciones de productos, capacidades y afirmaciones ambientales representan objetivos de ingeniería o intenciones de hoja de ruta en desarrollo activo. Nada en este sitio debe interpretarse como garantía de rendimiento.",
            "Todas las marcas comerciales, textos y activos visuales son propiedad de Cennzo Robotix salvo que se indique lo contrario.",
          ],
        },
        {
          id: "responsible-ai",
          title: "IA y Robótica Responsable",
          body: [
            "Creemos que los sistemas autónomos deben operar dentro de límites de seguridad definidos, con trazabilidad y supervisión humana cuando sea necesario.",
            "Cennzo Robotix desarrolla robótica para misiones que reducen la exposición humana al peligro. Buscamos aplicaciones que mejoren la seguridad, el alcance y la capacidad operativa, y rechazamos usos que entren en conflicto con los principios de despliegue responsable y la ley aplicable.",
          ],
        },
        {
          id: "compliance",
          title: "Seguridad y Cumplimiento",
          body: [
            "La seguridad está integrada en cada capa de nuestras plataformas — mecánica, eléctrica, de software y operativa. Las afirmaciones de capacidad ambiental se publicarán solo después de pruebas de laboratorio controladas, calificación de subsistemas y validación del sistema completo.",
            "Nuestra filosofía de validación separa objetivos de diseño, resultados de prototipos, rendimiento validado y rendimiento certificado. Todos los despliegues están sujetos a la ley aplicable, los requisitos de seguridad y los principios de uso responsable.",
          ],
        },
      ],
    },
    notFound: {
      error: "Error 404",
      signalLost: "Señal Perdida.",
      body: "La página que buscas no existe o ha sido movida.",
      returnHome: "Volver al Inicio",
    },
    errorPage: {
      fault: "Falla del Sistema",
      title: "Algo se salió de curso.",
      body: "Un error inesperado interrumpió esta página. Nuestro equipo ha sido notificado — inténtalo de nuevo o vuelve a la base.",
      retry: "Reintentar",
      backHome: "Volver al Inicio",
    },
  },
  fr: {
    platformPage: {
      meta: {
        title: "Architecture de la Plateforme",
        description:
          "Un robot. De nombreuses configurations de mission. WAFEE est conçu autour d'une plateforme centrale commune avec des modules spécifiques à la mission.",
      },
      hero: {
        eyebrow: "Architecture de la Plateforme",
        line1: "Un Robot.",
        line2: "De Nombreuses Configurations de Mission.",
        intro:
          "WAFEE est conçu autour d'une plateforme centrale commune avec des modules spécifiques à la mission.",
      },
      coreEyebrow: "Noyau Commun",
      coreTitle: "Plateforme Centrale",
      core: [
        "Structure humanoïde",
        "Actionnement",
        "Calcul",
        "Énergie",
        "Capteurs",
        "Contrôle",
        "Communications",
        "Systèmes de sécurité",
      ],
      modulesEyebrow: "Spécifique à la Mission",
      modulesTitle: "Modules de Mission",
      modules: [
        "Charges d'inspection",
        "Détection thermique",
        "Détection environnementale",
        "Outils de manipulation",
        "Modules de communication",
        "Charges de navigation",
        "Effecteurs finaux spécialisés",
        "Systèmes de protection spécifiques à la mission",
      ],
      body:
        "Cette architecture permet à Cennzo Robotix de développer une plateforme d'intelligence robotique centrale tout en adaptant la machine à différentes industries.",
      cta: {
        line1: "Configuré Pour",
        line2: "La Mission.",
        body: "Discutez d'une configuration de mission pour votre industrie.",
        primary: "Contactez-Nous",
        secondary: "Voir les Industries",
      },
    },
    careersPage: {
      meta: {
        title: "Carrières en Robotique",
        description:
          "Construisez des machines qui changent ce qui est possible. Domaines ouverts en robotique, ingénierie mécanique, électrique, embarquée, IA/ML, contrôle, thermique, matériaux et logiciel.",
      },
      hero: {
        eyebrow: "Carrières",
        line1: "Construisez Des Machines Qui",
        line2: "Changent Ce Qui Est Possible.",
        intro: "Si vous voulez construire l'avenir, construisez-le avec nous.",
        meta: "Ne vous contentez pas de travailler dans la robotique. Faites avancer la robotique.",
      },
      domainsEyebrow: "Domaines Ouverts",
      domainsBody:
        "Nous recherchons des ingénieurs, des chercheurs, des designers, des constructeurs et des résolveurs de problèmes qui veulent travailler sur des problèmes difficiles aux conséquences physiques réelles.",
      domains: [
        "Robotique",
        "Ingénierie mécanique",
        "Mécatronique",
        "Ingénierie électrique",
        "Systèmes embarqués",
        "Contrôle moteur",
        "Électronique de puissance",
        "Systèmes de batteries",
        "IA/ML",
        "Vision par ordinateur",
        "Apprentissage par renforcement",
        "Planification de mouvement",
        "Systèmes de contrôle",
        "Ingénierie thermique",
        "Ingénierie des matériaux",
        "CAO et simulation",
        "Fabrication",
        "Conception de produits",
        "Ingénierie logicielle",
        "Tests et validation",
      ],
      cultureEyebrow: "Culture",
      culture: [
        "Pensez en profondeur.",
        "Construisez rapidement.",
        "Testez honnêtement.",
        "Apprenez en continu.",
        "Prenez des responsabilités.",
        "Respectez la sécurité.",
        "Résolvez de vrais problèmes.",
      ],
      mediaLabel: "La Vie chez Cennzo Robotix — Concept de Culture",
      cta: {
        line1: "Faites Avancer La Robotique.",
        body: "Envoyez votre profil et dites-nous ce que vous voulez construire.",
        primary: "Voir les Postes Ouverts",
        secondary: "Envoyer Votre Profil",
      },
    },
    safetyPage: {
      meta: {
        title: "Validation et Sécurité",
        description:
          "La confiance s'ingénie. Architecture de sécurité Cennzo Robotix dans les couches mécanique, électrique, logicielle et opérationnelle — avec une philosophie de validation rigoureuse.",
      },
      hero: {
        eyebrow: "Validation et Sécurité",
        line1: "La Confiance S'Ingénie.",
        intro:
          "Un robot humanoïde opérant parmi les personnes ne peut pas s'appuyer uniquement sur l'intelligence. La sécurité doit exister à chaque couche.",
      },
      archEyebrow: "Architecture de Sécurité",
      layers: [
        {
          index: "01",
          name: "Sécurité Mécanique",
          points: [
            "Marges structurelles",
            "Limites d'articulations",
            "Butées mécaniques",
            "Modes de défaillance contrôlés",
          ],
        },
        {
          index: "02",
          name: "Sécurité Électrique",
          points: [
            "Isolation",
            "Protection contre les surintensités",
            "Protection contre les courts-circuits",
            "Surveillance de la batterie",
            "Arrêt d'urgence",
          ],
        },
        {
          index: "03",
          name: "Sécurité Logicielle",
          points: [
            "Chiens de garde",
            "Détection de pannes",
            "Transitions vers état sûr",
            "Limites de contrôle",
            "Surveillance redondante",
          ],
        },
        {
          index: "04",
          name: "Sécurité Opérationnelle",
          points: [
            "Géorepérage",
            "Limites de mission",
            "Dérogation humaine",
            "Arrêt d'urgence à distance",
            "Journalisation des événements",
          ],
        },
      ],
      mediaLabel: "Chambre d'Essai Environnemental — Visualisation de Concept",
      philEyebrow: "Philosophie de Validation",
      philTitle: "Nous Séparons Ce Que Nous Affirmons De Ce Que Nous Avons Prouvé.",
      philBody:
        "Cette distinction est essentielle à une ingénierie deep-tech crédible. Les affirmations de capacité environnementale seront étayées par des conditions d'essai définies et une validation documentée.",
      levels: [
        {
          level: "Objectif de Conception",
          description: "Un objectif d'ingénierie. Pas encore démontré.",
        },
        {
          level: "Résultat de Prototype",
          description: "Observé sur du matériel prototype dans des conditions d'essai.",
        },
        {
          level: "Performance Validée",
          description: "Confirmée par des procédures d'essai définies et documentées.",
        },
        {
          level: "Performance Certifiée",
          description: "Vérifiée par une certification tierce reconnue.",
        },
      ],
      cta: {
        line1: "La Crédibilité Est",
        line2: "Le Produit.",
        body: "Examinez notre approche de validation pour votre scénario de déploiement.",
        primary: "Contactez-Nous",
        secondary: "Explorer WAFEE",
      },
    },
    researchPage: {
      meta: {
        title: "Recherche et Ingénierie",
        description:
          "Des premiers principes à la validation terrain — R&D Cennzo Robotix en locomotion, actionnement, perception, IA, matériaux, gestion thermique et ingénierie numérique.",
      },
      hero: {
        eyebrow: "Recherche et Ingénierie",
        line1: "Des Premiers Principes",
        line2: "À La Validation Terrain.",
        intro:
          "La robotique deep-tech se construit par la discipline d'ingénierie. Notre feuille de route R&D couvre toute la pile.",
      },
      domainsEyebrow: "Domaines de Recherche",
      domains: [
        "Locomotion humanoïde",
        "Contrôle corps entier",
        "Actionnement à couple élevé",
        "Systèmes d'énergie haute densité",
        "Gestion thermique",
        "Matériaux avancés",
        "Protection environnementale",
        "Fusion de capteurs",
        "Perception robotique",
        "Planification IA",
        "Manipulation",
        "Interaction homme-robot",
        "Navigation autonome",
        "Simulation numérique",
        "Maintenance prédictive",
        "Intelligence de flottes robotiques",
      ],
      digiTitle: "Ingénierie Numérique",
      digiBody:
        "Avant les essais physiques coûteux, les systèmes robotiques peuvent être évalués par simulation.",
      tools: [
        "CAO",
        "Dynamique multicorps",
        "Analyse par éléments finis",
        "Dynamique des fluides numérique",
        "Simulation thermique",
        "Simulation électrique",
        "Simulation de contrôle",
        "Jumeaux numériques",
        "Logiciel en boucle",
        "Matériel en boucle",
      ],
      mediaLabel: "Simulation de Jumeau Numérique — Visualisation de Concept",
      mediaTitle: "La simulation ne remplace pas la validation physique.",
      mediaBody:
        "Elle accélère les décisions d'ingénierie et réduit les itérations de prototype inutiles.",
      cycleEyebrow: "Construire → Tester → Mesurer → Apprendre",
      cycleTitle: "Chaque Sous-Système Passe Par Le Cycle.",
      cycle: [
        "Conception",
        "Simulation",
        "Prototype",
        "Essai banc",
        "Validation de sous-système",
        "Essai intégré",
        "Essai environnemental",
        "Essai terrain",
        "Prêt pour la production",
      ],
      cta: {
        line1: "L'Ingénierie",
        line2: "Est La Stratégie.",
        body: "Collaborez avec nos équipes de recherche et d'ingénierie.",
        primary: "Devenir Partenaire",
        secondary: "Voir la Technologie",
      },
    },
    partnershipsPage: {
      meta: {
        title: "Partenariats",
        description:
          "Construisons l'avenir ensemble. Partenariats technologiques, industriels, de recherche, de fabrication et gouvernementaux autour de la plateforme robotique humanoïde WAFEE.",
      },
      hero: {
        eyebrow: "Partenariats",
        line1: "Construire L'Avenir",
        line2: "Avec Nous.",
        intro:
          "Aucune entreprise deep-tech ne construit l'avenir seule. Cennzo Robotix construit un écosystème en robotique, IA, matériaux avancés, moteurs et actionneurs, batteries, capteurs, fabrication, simulation, aérospatial, recherche et déploiement industriel.",
      },
      partners: [
        {
          title: "Partenaires Technologiques",
          description:
            "Développez des composants et sous-systèmes de nouvelle génération avec nous.",
        },
        {
          title: "Partenaires Industriels",
          description: "Apportez des problèmes de mission concrets à la plateforme.",
        },
        {
          title: "Partenaires de Recherche",
          description:
            "Collaborez sur la robotique fondamentale et l'ingénierie avancée.",
        },
        {
          title: "Partenaires de Fabrication",
          description:
            "Déployez le matériel robotique de précision du prototype à la production.",
        },
        {
          title: "Partenaires Gouvernementaux et Institutionnels",
          description:
            "Développez des capacités robotiques responsables pour des missions d'intérêt public.",
        },
        {
          title: "Investisseurs",
          description:
            "Aidez à accélérer le passage du prototype avancé à l'entreprise deep-tech évolutive.",
        },
      ],
      disclaimer:
        "VOTRE TECHNOLOGIE POURRAIT FAIRE PARTIE DE LA PROCHAINE GÉNÉRATION DE MACHINES INTELLIGENTES.",
      mediaLabel: "L'Écosystème de Partenaires Cennzo Robotix — Concept",
      cta: {
        line1: "Devenez Partenaire.",
        body: "Apportez votre technologie, vos problèmes de mission ou votre capital à la plateforme.",
        primary: "Devenir Partenaire",
        secondary: "Informations Investisseurs",
      },
    },
    investorsPage: {
      meta: {
        title: "Investisseurs",
        description:
          "Investir dans la prochaine génération de robotique. Cennzo Robotix construit une plateforme robotique humanoïde évolutive avec des couches de valeur matérielle, logicielle et de services récurrents.",
      },
      hero: {
        eyebrow: "Investisseurs",
        line1: "Investir Dans La Prochaine",
        line2: "Génération De Robotique.",
        intro: "Nous construisons une plateforme robotique, pas un produit unique.",
        meta: "Cennzo Robotix développe une plateforme robotique humanoïde évolutive conçue pour soutenir plusieurs industries et configurations de mission.",
      },
      valueEyebrow: "Couches de Valeur à Long Terme",
      valueBody: "L'opportunité va au-delà du matériel.",
      valueLayers: [
        "Ventes de robots",
        "Robotique en tant que service",
        "Location",
        "Services de mission",
        "Logiciel",
        "Capacités IA",
        "Gestion de flotte",
        "Maintenance prédictive",
        "Données et analytique",
        "Support du cycle de vie",
        "Charges spécialisées",
      ],
      thesisTitle: "Thèse d'Investissement",
      thesis: [
        "Grand marché robotique émergent",
        "Architecture produit basée sur plateforme",
        "Applications commerciales multiples",
        "Opportunités récurrentes de logiciels et services",
        "Capacités d'autonomie en expansion",
        "Intégration matériel et logiciel",
        "Potentiel de marché international à long terme",
      ],
      disclaimer:
        "LES DOCUMENTS D'INVESTISSEUR DOIVENT CONTENIR DES HYPOTHÈSES FINANCIÈRES VÉRIFIÉES, DES JALONS TECHNIQUES VALIDÉS, DES DÉTAILS DE CAPITALISATION ET DES PRÉVISIONS COMMERCIALEMENT DÉFENDABLES.",
      cta: {
        line1: "Construisez Avec",
        line2: "La Plateforme.",
        body: "Demandez le dossier d'information investisseur.",
        primary: "Demander l'Information Investisseur",
        secondary: "À propos de Cennzo",
      },
    },
    legalPage: {
      meta: {
        title: "Mentions Légales",
        description:
          "Politique de confidentialité, conditions d'utilisation, principes d'IA et de robotique responsable, et informations sur la sécurité et la conformité pour Cennzo Robotix.",
      },
      hero: {
        eyebrow: "Mentions Légales",
        line1: "Politiques et",
        line2: "Principes.",
        meta: "Dernière mise à jour : août 2026",
      },
      sections: [
        {
          id: "privacy",
          title: "Politique de Confidentialité",
          body: [
            "Cennzo Robotix respecte votre vie privée. Les informations soumises via ce site — comme votre nom, votre organisation et vos coordonnées — sont utilisées uniquement pour répondre à votre demande et ne sont ni vendues ni partagées avec des tiers à des fins de marketing.",
            "Ce site n'utilise pas de cookies de suivi au-delà de ce qui est strictement nécessaire à son fonctionnement. Vous pouvez demander à tout moment la suppression de toute donnée personnelle que vous avez partagée avec nous en nous contactant.",
          ],
        },
        {
          id: "terms",
          title: "Conditions d'Utilisation",
          body: [
            "Le contenu de ce site est fourni à titre d'information générale sur Cennzo Robotix et la plateforme WAFEE. Il ne constitue ni une spécification technique, ni une offre, ni un engagement contractuel.",
            "Toutes les descriptions de produits, capacités et revendications environnementales représentent des objectifs d'ingénierie ou des intentions de feuille de route en développement actif. Rien sur ce site ne doit être interprété comme une garantie de performance.",
            "Toutes les marques, textes et ressources visuelles sont la propriété de Cennzo Robotix sauf indication contraire.",
          ],
        },
        {
          id: "responsible-ai",
          title: "IA et Robotique Responsable",
          body: [
            "Nous croyons que les systèmes autonomes doivent opérer dans des limites de sécurité définies, avec traçabilité et supervision humaine lorsque nécessaire.",
            "Cennzo Robotix développe la robotique pour des missions qui réduisent l'exposition humaine au danger. Nous poursuivons des applications qui améliorent la sécurité, la portée et la capacité opérationnelle, et nous déclinons les usages contraires aux principes de déploiement responsable et à la loi applicable.",
          ],
        },
        {
          id: "compliance",
          title: "Sécurité et Conformité",
          body: [
            "La sécurité est intégrée à chaque couche de nos plateformes — mécanique, électrique, logicielle et opérationnelle. Les revendications de capacité environnementale ne seront publiées qu'après des essais de laboratoire contrôlés, la qualification des sous-systèmes et la validation complète du système.",
            "Notre philosophie de validation sépare objectifs de conception, résultats de prototype, performance validée et performance certifiée. Tous les déploiements sont soumis à la loi applicable, aux exigences de sécurité et aux principes d'utilisation responsable.",
          ],
        },
      ],
    },
    notFound: {
      error: "Erreur 404",
      signalLost: "Signal Perdu.",
      body: "La page que vous recherchez n'existe pas ou a été déplacée.",
      returnHome: "Retour à l'Accueil",
    },
    errorPage: {
      fault: "Panne Système",
      title: "Quelque chose a dévié de sa trajectoire.",
      body: "Une erreur inattendue a interrompu cette page. Notre équipe a été notifiée — réessayez ou revenez à la base.",
      retry: "Réessayer",
      backHome: "Retour à l'Accueil",
    },
  },
};