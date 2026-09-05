"use strict";

// UI / component-level namespaces for all locales (deep-merged into messages/<locale>.json).
module.exports = {
  en: {
    ui: { backToTop: "Back to top" },
    header: { tagline: "Innovate · Automate · Elevate" },
    footer: { tagline: "Innovate · Automate · Elevate" },
    langPrompt: { systemSetup: "System Setup · 01" },
    preloader: { ok: "··· OK" },
    home: {
      techEyebrow: "Technology",
      appsEyebrow: "Applications",
    },
    techPage: {
      blueprintEyebrow: "Blueprint Archive",
      blueprintFig: "fig.05 — fig.04",
      indexLabel: "System Index",
      registerEyebrow: "System Register",
      registerLine1: "Nine subsystems.",
      registerLine2: "One Machine.",
      registerBody:
        "Every joint, sensor and line of code is treated as a first-class engineering subsystem. Select a system to inspect its technical register below.",
      registryEyebrow: "Registry",
      registerTitle: "Technical Register",
      sheetsMeta:
        "{count, plural, one {# sheet} other {# sheets}} · v1.0 · confidential",
    },
    appsPage: {
      missionsLabel: "{count, plural, one {# mission} other {# missions}}",
    },
    specTable: {
      no: "No.",
      specification: "Specification",
    },
    blueprintPanel: {
      readiness: "Readiness",
      note: "Note",
    },
    mediaFrame: {
      awaiting: "Awaiting Imagery",
      tagConcept: "Concept",
      tagReference: "Reference",
      visualization: "Visualization",
      conceptVisualization: "Concept visualization",
      referenceImagery: "Reference imagery",
      placeholderPending: "Placeholder — asset pending",
      close: "[ Close ]",
      expand: "Expand +",
      conceptNotProduction: "Concept visualization, not production imagery.",
      referenceOnly: "Reference imagery.",
      placeholderPreview: "Placeholder preview",
      preview: "Preview",
      closePreview: "Close preview",
      expandImagery: "Expand imagery: {label}",
      viewPlaceholder: "View placeholder imagery: {label}",
    },
    horizontalShowcase: {
      endSequence: "End of sequence",
      endContact: "— Contact for a mission brief",
    },
    missionConfigurator: {
      label: "Mission Configurator",
      interactive: "Interactive",
      modulesLabel: "Recommended Mission Modules",
      disclaimer:
        "Illustrative configuration only — final mission setups depend on requirements, validation and certification.",
      status: {
        primary: "Primary development",
        roadmap: "Engineering roadmap",
        research: "Research",
        vision: "Long-term vision",
      },
      envs: {
        earth: {
          name: "Earth",
          focus:
            "Industrial, infrastructure and disaster environments built around human-scale spaces.",
          modules: [
            "Inspection payloads",
            "Manipulation tools",
            "Navigation payloads",
            "Environmental sensing",
          ],
        },
        water: {
          name: "Water",
          focus:
            "Marine and offshore assets requiring protected architectures and remote operation.",
          modules: [
            "Environmental sensing",
            "Communication modules",
            "Inspection payloads",
            "Mission-specific protective systems",
          ],
        },
        fire: {
          name: "Fire",
          focus:
            "High-temperature zones where thermal protection and cooling define the configuration.",
          modules: [
            "Thermal sensing",
            "Mission-specific protective systems",
            "Specialized end effectors",
            "Environmental sensing",
          ],
        },
        air: {
          name: "Air",
          focus:
            "Elevated and exposed structures reached through intelligent mobility and comms.",
          modules: [
            "Navigation payloads",
            "Communication modules",
            "Thermal sensing",
            "Inspection payloads",
          ],
        },
        space: {
          name: "Space",
          focus:
            "Vacuum, radiation and off-world operations on the long-term research frontier.",
          modules: [
            "Communication modules",
            "Mission-specific protective systems",
            "Specialized end effectors",
            "Navigation payloads",
          ],
        },
      },
    },
  },
  es: {
    ui: { backToTop: "Volver arriba" },
    header: { tagline: "Innovar · Automatizar · Elevar" },
    footer: { tagline: "Innovar · Automatizar · Elevar" },
    langPrompt: { systemSetup: "Configuración del Sistema · 01" },
    preloader: { ok: "··· OK" },
    home: { techEyebrow: "Tecnología", appsEyebrow: "Aplicaciones" },
    techPage: {
      blueprintEyebrow: "Archivo de Planos",
      blueprintFig: "fig.05 — fig.04",
      indexLabel: "Índice de Sistemas",
      registerEyebrow: "Registro de Sistemas",
      registerLine1: "Nueve subsistemas.",
      registerLine2: "Una Máquina.",
      registerBody:
        "Cada articulación, sensor y línea de código se trata como un subsistema de ingeniería de primera clase. Selecciona un sistema para inspeccionar su registro técnico a continuación.",
      registryEyebrow: "Registro",
      registerTitle: "Registro Técnico",
      sheetsMeta:
        "{count, plural, one {# hoja} other {# hojas}} · v1.0 · confidencial",
    },
    appsPage: {
      missionsLabel: "{count, plural, one {# misión} other {# misiones}}",
    },
    specTable: { no: "N.º", specification: "Especificación" },
    blueprintPanel: { readiness: "Preparación", note: "Nota" },
    mediaFrame: {
      awaiting: "Imágenes Pendientes",
      tagConcept: "Concepto",
      tagReference: "Referencia",
      visualization: "Visualización",
      conceptVisualization: "Visualización de concepto",
      referenceImagery: "Imágenes de referencia",
      placeholderPending: "Marcador — recurso pendiente",
      close: "[ Cerrar ]",
      expand: "Ampliar +",
      conceptNotProduction: "Visualización de concepto, no imágenes de producción.",
      referenceOnly: "Imágenes de referencia.",
      placeholderPreview: "Vista previa de marcador",
      preview: "Vista previa",
      closePreview: "Cerrar vista previa",
      expandImagery: "Ampliar imágenes: {label}",
      viewPlaceholder: "Ver imágenes de marcador: {label}",
    },
    horizontalShowcase: {
      endSequence: "Fin de la secuencia",
      endContact: "— Contacta para un dossier de misión",
    },
    missionConfigurator: {
      label: "Configurador de Misión",
      interactive: "Interactivo",
      modulesLabel: "Módulos de Misión Recomendados",
      disclaimer:
        "Solo configuración ilustrativa — las configuraciones finales dependen de requisitos, validación y certificación.",
      status: {
        primary: "Desarrollo principal",
        roadmap: "Hoja de ruta de ingeniería",
        research: "Investigación",
        vision: "Visión a largo plazo",
      },
      envs: {
        earth: {
          name: "Tierra",
          focus:
            "Entornos industriales, de infraestructura y desastres construidos alrededor de espacios a escala humana.",
          modules: [
            "Cargas de inspección",
            "Herramientas de manipulación",
            "Cargas de navegación",
            "Detección ambiental",
          ],
        },
        water: {
          name: "Agua",
          focus:
            "Activos marinos y offshore que requieren arquitecturas protegidas y operación remota.",
          modules: [
            "Detección ambiental",
            "Módulos de comunicación",
            "Cargas de inspección",
            "Sistemas de protección específicos de misión",
          ],
        },
        fire: {
          name: "Fuego",
          focus:
            "Zonas de alta temperatura donde la protección térmica y el enfriamiento definen la configuración.",
          modules: [
            "Detección térmica",
            "Sistemas de protección específicos de misión",
            "Efectores finales especializados",
            "Detección ambiental",
          ],
        },
        air: {
          name: "Aire",
          focus:
            "Estructuras elevadas y expuestas alcanzadas mediante movilidad inteligente y comunicaciones.",
          modules: [
            "Cargas de navegación",
            "Módulos de comunicación",
            "Detección térmica",
            "Cargas de inspección",
          ],
        },
        space: {
          name: "Espacio",
          focus:
            "Operaciones en vacío, radiación y fuera del mundo en la frontera de investigación a largo plazo.",
          modules: [
            "Módulos de comunicación",
            "Sistemas de protección específicos de misión",
            "Efectores finales especializados",
            "Cargas de navegación",
          ],
        },
      },
    },
  },
  fr: {
    ui: { backToTop: "Retour en haut" },
    header: { tagline: "Innover · Automatiser · Élever" },
    footer: { tagline: "Innover · Automatiser · Élever" },
    langPrompt: { systemSetup: "Configuration du Système · 01" },
    preloader: { ok: "··· OK" },
    home: { techEyebrow: "Technologie", appsEyebrow: "Applications" },
    techPage: {
      blueprintEyebrow: "Archives des Plans",
      blueprintFig: "fig.05 — fig.04",
      indexLabel: "Index des Systèmes",
      registerEyebrow: "Registre des Systèmes",
      registerLine1: "Neuf sous-systèmes.",
      registerLine2: "Une Machine.",
      registerBody:
        "Chaque articulation, capteur et ligne de code est traité comme un sous-système d'ingénierie de premier ordre. Sélectionnez un système pour consulter son registre technique ci-dessous.",
      registryEyebrow: "Registre",
      registerTitle: "Registre Technique",
      sheetsMeta:
        "{count, plural, one {# feuille} other {# feuilles}} · v1.0 · confidentiel",
    },
    appsPage: {
      missionsLabel: "{count, plural, one {# mission} other {# missions}}",
    },
    specTable: { no: "N°", specification: "Spécification" },
    blueprintPanel: { readiness: "Disponibilité", note: "Note" },
    mediaFrame: {
      awaiting: "Imagerie En Attente",
      tagConcept: "Concept",
      tagReference: "Référence",
      visualization: "Visualisation",
      conceptVisualization: "Visualisation de concept",
      referenceImagery: "Imagerie de référence",
      placeholderPending: "Espace réservé — ressource en attente",
      close: "[ Fermer ]",
      expand: "Agrandir +",
      conceptNotProduction: "Visualisation de concept, pas une imagerie de production.",
      referenceOnly: "Imagerie de référence.",
      placeholderPreview: "Aperçu de l'espace réservé",
      preview: "Aperçu",
      closePreview: "Fermer l'aperçu",
      expandImagery: "Agrandir l'imagerie : {label}",
      viewPlaceholder: "Voir l'imagerie de l'espace réservé : {label}",
    },
    horizontalShowcase: {
      endSequence: "Fin de séquence",
      endContact: "— Contactez pour un brief de mission",
    },
    missionConfigurator: {
      label: "Configurateur de Mission",
      interactive: "Interactif",
      modulesLabel: "Modules de Mission Recommandés",
      disclaimer:
        "Configuration illustrative uniquement — les configurations finales dépendent des exigences, de la validation et de la certification.",
      status: {
        primary: "Développement principal",
        roadmap: "Feuille de route d'ingénierie",
        research: "Recherche",
        vision: "Vision à long terme",
      },
      envs: {
        earth: {
          name: "Terre",
          focus:
            "Environnements industriels, d'infrastructure et de catastrophe conçus autour d'espaces à échelle humaine.",
          modules: [
            "Charges d'inspection",
            "Outils de manipulation",
            "Charges de navigation",
            "Détection environnementale",
          ],
        },
        water: {
          name: "Eau",
          focus:
            "Actifs maritimes et offshore nécessitant des architectures protégées et une opération à distance.",
          modules: [
            "Détection environnementale",
            "Modules de communication",
            "Charges d'inspection",
            "Systèmes de protection spécifiques à la mission",
          ],
        },
        fire: {
          name: "Feu",
          focus:
            "Zones à haute température où la protection thermique et le refroidissement définissent la configuration.",
          modules: [
            "Détection thermique",
            "Systèmes de protection spécifiques à la mission",
            "Effecteurs finaux spécialisés",
            "Détection environnementale",
          ],
        },
        air: {
          name: "Air",
          focus:
            "Structures élevées et exposées atteintes grâce à une mobilité intelligente et aux communications.",
          modules: [
            "Charges de navigation",
            "Modules de communication",
            "Détection thermique",
            "Charges d'inspection",
          ],
        },
        space: {
          name: "Espace",
          focus:
            "Opérations sous vide, radiations et hors-monde à la frontière de la recherche à long terme.",
          modules: [
            "Modules de communication",
            "Systèmes de protection spécifiques à la mission",
            "Effecteurs finaux spécialisés",
            "Charges de navigation",
          ],
        },
      },
    },
  },
  hi: {
    ui: { backToTop: "ऊपर वापस जाएं" },
    header: { tagline: "इनोवेट · ऑटोमेट · एलिवेट" },
    footer: { tagline: "इनोवेट · ऑटोमेट · एलिवेट" },
    langPrompt: { systemSetup: "सिस्टम सेटअप · 01" },
    preloader: { ok: "··· OK" },
    home: { techEyebrow: "तकनीक", appsEyebrow: "अनुप्रयोग" },
    techPage: {
      blueprintEyebrow: "ब्लूप्रिंट संग्रह",
      blueprintFig: "fig.05 — fig.04",
      indexLabel: "सिस्टम इंडेक्स",
      registerEyebrow: "सिस्टम रजिस्टर",
      registerLine1: "नौ उपप्रणालियां।",
      registerLine2: "एक मशीन।",
      registerBody:
        "हर जॉइंट, सेंसर और कोड की पंक्ति को प्रथम श्रेणी का इंजीनियरिंग उपप्रणाली माना जाता है। नीचे किसी सिस्टम का तकनीकी रजिस्टर देखने के लिए चुनें।",
      registryEyebrow: "रजिस्ट्री",
      registerTitle: "तकनीकी रजिस्टर",
      sheetsMeta: "{count, plural, one {# शीट} other {# शीट्स}} · v1.0 · गोपनीय",
    },
    appsPage: { missionsLabel: "{count, plural, one {# मिशन} other {# मिशन}}" },
    specTable: { no: "क्र.", specification: "विनिर्देश" },
    blueprintPanel: { readiness: "तैयारी", note: "नोट" },
    mediaFrame: {
      awaiting: "इमेजरी की प्रतीक्षा",
      tagConcept: "कॉन्सेप्ट",
      tagReference: "रेफ़रेंस",
      visualization: "विज़ुअलाइज़ेशन",
      conceptVisualization: "कॉन्सेप्ट विज़ुअलाइज़ेशन",
      referenceImagery: "रेफ़रेंस इमेजरी",
      placeholderPending: "प्लेसहोल्डर — परिसंपत्ति लंबित",
      close: "[ बंद करें ]",
      expand: "बड़ा करें +",
      conceptNotProduction: "कॉन्सेप्ट विज़ुअलाइज़ेशन, उत्पादन इमेजरी नहीं।",
      referenceOnly: "रेफ़रेंस इमेजरी।",
      placeholderPreview: "प्लेसहोल्डर पूर्वावलोकन",
      preview: "पूर्वावलोकन",
      closePreview: "पूर्वावलोकन बंद करें",
      expandImagery: "इमेजरी बड़ा करें: {label}",
      viewPlaceholder: "प्लेसहोल्डर इमेजरी देखें: {label}",
    },
    horizontalShowcase: {
      endSequence: "अनुक्रम का अंत",
      endContact: "— मिशन ब्रीफ के लिए संपर्क करें",
    },
    missionConfigurator: {
      label: "मिशन कॉन्फ़िगरेटर",
      interactive: "इंटरैक्टिव",
      modulesLabel: "अनुशंसित मिशन मॉड्यूल",
      disclaimer:
        "केवल उदाहरणात्मक कॉन्फ़िगरेशन — अंतिम मिशन सेटअप आवश्यकताओं, वैलिडेशन और प्रमाणन पर निर्भर करते हैं।",
      status: {
        primary: "प्राथमिक विकास",
        roadmap: "इंजीनियरिंग रोडमैप",
        research: "अनुसंधान",
        vision: "दीर्घकालिक दृष्टिकोण",
      },
      envs: {
        earth: {
          name: "पृथ्वी",
          focus:
            "मानव-पैमाने के स्थानों के इर्द-गिर्द निर्मित औद्योगिक, बुनियादी ढांचा और आपदा परिवेश।",
          modules: [
            "निरीक्षण पेलोड",
            "मैनिपुलेशन टूल",
            "नेविगेशन पेलोड",
            "पर्यावरण संवेदन",
          ],
        },
        water: {
          name: "जल",
          focus:
            "समुद्री और offshore परिसंपत्तियां जिन्हें सुरक्षित आर्किटेक्चर और रिमोट संचालन की आवश्यकता है।",
          modules: [
            "पर्यावरण संवेदन",
            "संचार मॉड्यूल",
            "निरीक्षण पेलोड",
            "मिशन-विशिष्ट सुरक्षा प्रणाली",
          ],
        },
        fire: {
          name: "अग्नि",
          focus:
            "उच्च-तापमान क्षेत्र जहां थर्मल सुरक्षा और शीतलन कॉन्फ़िगरेशन को परिभाषित करते हैं।",
          modules: [
            "थर्मल संवेदन",
            "मिशन-विशिष्ट सुरक्षा प्रणाली",
            "विशेष एंड इफ़ेक्टर",
            "पर्यावरण संवेदन",
          ],
        },
        air: {
          name: "वायु",
          focus:
            "बुद्धिमान गतिशीलता और संचार के माध्यम से पहुंची जाने वाली ऊंची और खुली संरचनाएं।",
          modules: [
            "नेविगेशन पेलोड",
            "संचार मॉड्यूल",
            "थर्मल संवेदन",
            "निरीक्षण पेलोड",
          ],
        },
        space: {
          name: "अंतरिक्ष",
          focus:
            "दीर्घकालिक अनुसंधान सीमा पर वैक्यूम, विकिरण और पृथ्वी के बाहर का संचालन।",
          modules: [
            "संचार मॉड्यूल",
            "मिशन-विशिष्ट सुरक्षा प्रणाली",
            "विशेष एंड इफ़ेक्टर",
            "नेविगेशन पेलोड",
          ],
        },
      },
    },
  },
  ja: {
    ui: { backToTop: "トップへ戻る" },
    header: { tagline: "革新 · 自動化 · 向上" },
    footer: { tagline: "革新 · 自動化 · 向上" },
    langPrompt: { systemSetup: "システムセットアップ · 01" },
    preloader: { ok: "··· OK" },
    home: { techEyebrow: "テクノロジー", appsEyebrow: "アプリケーション" },
    techPage: {
      blueprintEyebrow: "ブループリントアーカイブ",
      blueprintFig: "fig.05 — fig.04",
      indexLabel: "システムインデックス",
      registerEyebrow: "システムレジスタ",
      registerLine1: "9つのサブシステム。",
      registerLine2: "1台のマシン。",
      registerBody:
        "すべての関節、センサー、コードの行は第一級の工学的サブシステムとして扱われます。下からシステムを選択して技術レジスタを確認してください。",
      registryEyebrow: "レジストリ",
      registerTitle: "技術レジスタ",
      sheetsMeta: "{count}枚のレジスタ · v1.0 · 機密",
    },
    appsPage: { missionsLabel: "{count, plural, other {#件}}のミッション" },
    specTable: { no: "No.", specification: "仕様" },
    blueprintPanel: { readiness: "対応度", note: "注記" },
    mediaFrame: {
      awaiting: "イメージ待機中",
      tagConcept: "コンセプト",
      tagReference: "参考",
      visualization: "ビジュアライゼーション",
      conceptVisualization: "コンセプトビジュアライゼーション",
      referenceImagery: "参考イメージ",
      placeholderPending: "プレースホルダー — アセット未定",
      close: "[ 閉じる ]",
      expand: "拡大 +",
      conceptNotProduction: "コンセプトビジュアライゼーションであり、製品イメージではありません。",
      referenceOnly: "参考イメージです。",
      placeholderPreview: "プレースホルダープレビュー",
      preview: "プレビュー",
      closePreview: "プレビューを閉じる",
      expandImagery: "イメージを拡大: {label}",
      viewPlaceholder: "プレースホルダーイメージを見る: {label}",
    },
    horizontalShowcase: {
      endSequence: "シーケンスの終わり",
      endContact: "— ミッションブリーフのお問い合わせ",
    },
    missionConfigurator: {
      label: "ミッションコンフィギュレーター",
      interactive: "インタラクティブ",
      modulesLabel: "推奨ミッションモジュール",
      disclaimer:
        "これは例示的な構成です — 最終的なミッション構成は要件、検証、認証に依存します。",
      status: {
        primary: "主要開発",
        roadmap: "エンジニアリングロードマップ",
        research: "研究",
        vision: "長期ビジョン",
      },
      envs: {
        earth: {
          name: "地球",
          focus:
            "人間スケールの空間を前提とした産業、インフラ、災害環境。",
          modules: [
            "点検ペイロード",
            "マニピュレーションツール",
            "ナビゲーションペイロード",
            "環境感知",
          ],
        },
        water: {
          name: "海洋",
          focus:
            "保護アーキテクチャと遠隔運用を必要とする海洋・オフショア資産。",
          modules: [
            "環境感知",
            "通信モジュール",
            "点検ペイロード",
            "ミッション別保護システム",
          ],
        },
        fire: {
          name: "火災",
          focus:
            "熱保護と冷却が構成を左右する高温ゾーン。",
          modules: [
            "熱感知",
            "ミッション別保護システム",
            "特殊エンドエフェクタ",
            "環境感知",
          ],
        },
        air: {
          name: "空中",
          focus:
            "スマートな移動性と通信で到達する高所・露出構造物。",
          modules: [
            "ナビゲーションペイロード",
            "通信モジュール",
            "熱感知",
            "点検ペイロード",
          ],
        },
        space: {
          name: "宇宙",
          focus:
            "長期的な研究フロンティアにおける真空、放射線、地球外運用。",
          modules: [
            "通信モジュール",
            "ミッション別保護システム",
            "特殊エンドエフェクタ",
            "ナビゲーションペイロード",
          ],
        },
      },
    },
  },
  zh: {
    ui: { backToTop: "返回顶部" },
    header: { tagline: "创新 · 自动化 · 提升" },
    footer: { tagline: "创新 · 自动化 · 提升" },
    langPrompt: { systemSetup: "系统设置 · 01" },
    preloader: { ok: "··· OK" },
    home: { techEyebrow: "技术", appsEyebrow: "应用" },
    techPage: {
      blueprintEyebrow: "蓝图档案",
      blueprintFig: "fig.05 — fig.04",
      indexLabel: "系统索引",
      registerEyebrow: "系统清单",
      registerLine1: "九个子系统。",
      registerLine2: "一台机器。",
      registerBody:
        "每个关节、传感器和代码行都被视为一流的工程子系统。选择一个系统以查看其下面的技术清单。",
      registryEyebrow: "登记册",
      registerTitle: "技术清单",
      sheetsMeta: "{count} 张 · v1.0 · 机密",
    },
    appsPage: { missionsLabel: "{count} 项任务" },
    specTable: { no: "编号", specification: "规格" },
    blueprintPanel: { readiness: "就绪度", note: "说明" },
    mediaFrame: {
      awaiting: "等待图像",
      tagConcept: "概念",
      tagReference: "参考",
      visualization: "可视化",
      conceptVisualization: "概念可视化",
      referenceImagery: "参考图像",
      placeholderPending: "占位 — 素材待定",
      close: "[ 关闭 ]",
      expand: "展开 +",
      conceptNotProduction: "概念可视化，非生产图像。",
      referenceOnly: "参考图像。",
      placeholderPreview: "占位预览",
      preview: "预览",
      closePreview: "关闭预览",
      expandImagery: "展开图像：{label}",
      viewPlaceholder: "查看占位图像：{label}",
    },
    horizontalShowcase: {
      endSequence: "序列结束",
      endContact: "— 联系以获取任务简报",
    },
    missionConfigurator: {
      label: "任务配置器",
      interactive: "交互式",
      modulesLabel: "推荐任务模块",
      disclaimer:
        "仅为示意配置 — 最终任务设置取决于要求、验证和认证。",
      status: {
        primary: "主要开发",
        roadmap: "工程路线图",
        research: "研究",
        vision: "长期愿景",
      },
      envs: {
        earth: {
          name: "地球",
          focus: "围绕人类尺度空间构建的工业、基础设施与灾害环境。",
          modules: ["巡检载荷", "操控工具", "导航载荷", "环境感知"],
        },
        water: {
          name: "海域",
          focus: "需要防护架构与远程操作的海洋和近海资产。",
          modules: ["环境感知", "通信模块", "巡检载荷", "任务专用保护系统"],
        },
        fire: {
          name: "火域",
          focus: "热防护与冷却决定配置的高温区域。",
          modules: ["热感知", "任务专用保护系统", "专用末端执行器", "环境感知"],
        },
        air: {
          name: "空中",
          focus: "通过智能机动与通信到达的高空及暴露结构。",
          modules: ["导航载荷", "通信模块", "热感知", "巡检载荷"],
        },
        space: {
          name: "太空",
          focus: "长期研究前沿上的真空、辐射与地外作业。",
          modules: ["通信模块", "任务专用保护系统", "专用末端执行器", "导航载荷"],
        },
      },
    },
  },
  kn: {
    ui: { backToTop: "ಮತ್ತೆ ಮೇಲಕ್ಕೆ" },
    header: { tagline: "ಹೊಸತನ · ಸ್ವಯಂಚಾಲನೆ · ಉನ್ನತಿ" },
    footer: { tagline: "ಹೊಸತನ · ಸ್ವಯಂಚಾಲನೆ · ಉನ್ನತಿ" },
    langPrompt: { systemSetup: "ವ್ಯವಸ್ಥೆ ಸೆಟಪ್ · 01" },
    preloader: { ok: "··· OK" },
    home: { techEyebrow: "ತಂತ್ರಜ್ಞಾನ", appsEyebrow: "ಅನ್ವಯಗಳು" },
    techPage: {
      blueprintEyebrow: "ಬ್ಲೂಪ್ರಿಂಟ್ ಆರ್ಕೈವ್",
      blueprintFig: "fig.05 — fig.04",
      indexLabel: "ಸಿಸ್ಟಮ್ ಇಂಡೆಕ್ಸ್",
      registerEyebrow: "ಸಿಸ್ಟಮ್ ರಿಜಿಸ್ಟರ್",
      registerLine1: "ಒಂಬತ್ತು ಉಪವ್ಯವಸ್ಥೆಗಳು.",
      registerLine2: "ಒಂದು ಯಂತ್ರ.",
      registerBody:
        "ಪ್ರತಿ ಜಾಯಿಂಟ್, ಸಂವೇದಕ ಮತ್ತು ಕೋಡ್ ಸಾಲನ್ನು ಪ್ರಥಮ ದರ್ಜೆಯ ಎಂಜಿನಿಯರಿಂಗ್ ಉಪವ್ಯವಸ್ಥೆಯಾಗಿ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ. ಅದರ ತಾಂತ್ರಿಕ ರಿಜಿಸ್ಟರ್ ಪರಿಶೀಲಿಸಲು ಕೆಳಗೆ ಒಂದು ವ್ಯವಸ್ಥೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
      registryEyebrow: "ರಿಜಿಸ್ಟ್ರಿ",
      registerTitle: "ತಾಂತ್ರಿಕ ರಿಜಿಸ್ಟರ್",
      sheetsMeta: "{count, plural, one {# ಶೀಟ್} other {# ಶೀಟ್‌ಗಳು}} · v1.0 · ಗೋಪ್ಯ",
    },
    appsPage: {
      missionsLabel: "{count, plural, one {# ಮಿಷನ್} other {# ಮಿಷನ್‌ಗಳು}}",
    },
    specTable: { no: "ಕ್ರ.", specification: "ವಿಶೇಷಣ" },
    blueprintPanel: { readiness: "ಸಿದ್ಧತೆ", note: "ಟಿಪ್ಪಣಿ" },
    mediaFrame: {
      awaiting: "ಇಮೇಜರಿ ಕಾಯುತ್ತಿದೆ",
      tagConcept: "ಪರಿಕಲ್ಪನೆ",
      tagReference: "ಉಲ್ಲೇಖ",
      visualization: "ದೃಶ್ಯೀಕರಣ",
      conceptVisualization: "ಪರಿಕಲ್ಪನಾ ದೃಶ್ಯೀಕರಣ",
      referenceImagery: "ಉಲ್ಲೇಖ ಇಮೇಜರಿ",
      placeholderPending: "ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್ — ಸಂಪತ್ತು ಬಾಕಿ",
      close: "[ ಮುಚ್ಚಿ ]",
      expand: "ದೊಡ್ಡದು +",
      conceptNotProduction: "ಪರಿಕಲ್ಪನಾ ದೃಶ್ಯೀಕರಣ, ಉತ್ಪಾದನಾ ಇಮೇಜರಿ ಅಲ್ಲ.",
      referenceOnly: "ಉಲ್ಲೇಖ ಇಮೇಜರಿ.",
      placeholderPreview: "ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್ ಪೂರ್ವವೀಕ್ಷಣೆ",
      preview: "ಪೂರ್ವವೀಕ್ಷಣೆ",
      closePreview: "ಪೂರ್ವವೀಕ್ಷಣೆ ಮುಚ್ಚಿ",
      expandImagery: "ಇಮೇಜರಿ ದೊಡ್ಡದು: {label}",
      viewPlaceholder: "ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್ ಇಮೇಜರಿ ನೋಡಿ: {label}",
    },
    horizontalShowcase: {
      endSequence: "ಅನುಕ್ರಮದ ಅಂತ್ಯ",
      endContact: "— ಮಿಷನ್ ಬ್ರೀಫ್‌ಗಾಗಿ ಸಂಪರ್ಕಿಸಿ",
    },
    missionConfigurator: {
      label: "ಮಿಷನ್ ಕಾನ್ಫಿಗರೇಟರ್",
      interactive: "ಸಂವಾದಾತ್ಮಕ",
      modulesLabel: "ಶಿಫಾರಸು ಮಾಡಿದ ಮಿಷನ್ ಮಾಡ್ಯೂಲ್‌ಗಳು",
      disclaimer:
        "ಕೇವಲ ವಿವರಣಾತ್ಮಕ ಕಾನ್ಫಿಗರೇಶನ್ — ಅಂತಿಮ ಮಿಷನ್ ಸೆಟಪ್‌ಗಳು ಅವಶ್ಯಕತೆಗಳು, ಮೌಲ್ಯೀಕರಣ ಮತ್ತು ಪ್ರಮಾಣೀಕರಣವನ್ನು ಅವಲಂಬಿಸುತ್ತವೆ.",
      status: {
        primary: "ಪ್ರಾಥಮಿಕ ಅಭಿವೃದ್ಧಿ",
        roadmap: "ಎಂಜಿನಿಯರಿಂಗ್ ರೋಡ್‌ಮ್ಯಾಪ್",
        research: "ಸಂಶೋಧನೆ",
        vision: "ದೀರ್ಘಾವಧಿ ದೃಷ್ಟಿ",
      },
      envs: {
        earth: {
          name: "ಭೂಮಿ",
          focus:
            "ಮಾನವ-ಪ್ರಮಾಣದ ಸ್ಥಳಗಳ ಸುತ್ತ ನಿರ್ಮಿಸಲಾದ ಕೈಗಾರಿಕಾ, ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ವಿಪತ್ತು ಪರಿಸರಗಳು.",
          modules: ["ತಪಾಸಣೆ ಪೇಲೋಡ್‌ಗಳು", "ಮ್ಯಾನಿಪ್ಯುಲೇಶನ್ ಸಾಧನಗಳು", "ನ್ಯಾವಿಗೇಶನ್ ಪೇಲೋಡ್‌ಗಳು", "ಪರಿಸರ ಸಂವೇದನೆ"],
        },
        water: {
          name: "ನೀರು",
          focus:
            "ರಕ್ಷಿತ ಆರ್ಕಿಟೆಕ್ಚರ್ ಮತ್ತು ದೂರಸ್ಥ ಕಾರ್ಯಾಚರಣೆ ಅಗತ್ಯವಿರುವ ಸಾಗರ ಮತ್ತು ಆಫ್‌ಶೋರ್ ಸ್ವತ್ತುಗಳು.",
          modules: ["ಪರಿಸರ ಸಂವೇದನೆ", "ಸಂವಹನ ಮಾಡ್ಯೂಲ್‌ಗಳು", "ತಪಾಸಣೆ ಪೇಲೋಡ್‌ಗಳು", "ಮಿಷನ್-ನಿರ್ದಿಷ್ಟ ರಕ್ಷಣಾ ವ್ಯವಸ್ಥೆಗಳು"],
        },
        fire: {
          name: "ಬೆಂಕಿ",
          focus:
            "ಉಷ್ಣ ರಕ್ಷಣೆ ಮತ್ತು ತಂಪಾಗಿಸುವಿಕೆಯು ಕಾನ್ಫಿಗರೇಶನ್‌ನ್ನು ವ್ಯಾಖ್ಯಾನಿಸುವ ಹೆಚ್ಚಿನ-ತಾಪಮಾನ ವಲಯಗಳು.",
          modules: ["ಥರ್ಮಲ್ ಸಂವೇದನೆ", "ಮಿಷನ್-ನಿರ್ದಿಷ್ಟ ರಕ್ಷಣಾ ವ್ಯವಸ್ಥೆಗಳು", "ವಿಶೇಷ ಎಂಡ್ ಎಫೆಕ್ಟರ್‌ಗಳು", "ಪರಿಸರ ಸಂವೇದನೆ"],
        },
        air: {
          name: "ಗಾಳಿ",
          focus:
            "ಬುದ್ಧಿವಂತ ಚಲನಶೀಲತೆ ಮತ್ತು ಸಂವಹನದ ಮೂಲಕ ತಲುಪುವ ಎತ್ತರದ ಮತ್ತು ತೆರೆದ ರಚನೆಗಳು.",
          modules: ["ನ್ಯಾವಿಗೇಶನ್ ಪೇಲೋಡ್‌ಗಳು", "ಸಂವಹನ ಮಾಡ್ಯೂಲ್‌ಗಳು", "ಥರ್ಮಲ್ ಸಂವೇದನೆ", "ತಪಾಸಣೆ ಪೇಲೋಡ್‌ಗಳು"],
        },
        space: {
          name: "ಬಾಹ್ಯಾಕಾಶ",
          focus:
            "ದೀರ್ಘಾವಧಿ ಸಂಶೋಧನಾ ಗಡಿಯಲ್ಲಿ ನಿರ್ವಾತ, ವಿಕಿರಣ ಮತ್ತು ಪೃಥ್ವಿಯ ಹೊರಗಿನ ಕಾರ್ಯಾಚರಣೆಗಳು.",
          modules: ["ಸಂವಹನ ಮಾಡ್ಯೂಲ್‌ಗಳು", "ಮಿಷನ್-ನಿರ್ದಿಷ್ಟ ರಕ್ಷಣಾ ವ್ಯವಸ್ಥೆಗಳು", "ವಿಶೇಷ ಎಂಡ್ ಎಫೆಕ್ಟರ್‌ಗಳು", "ನ್ಯಾವಿಗೇಶನ್ ಪೇಲೋಡ್‌ಗಳು"],
        },
      },
    },
  },
  ml: {
    ui: { backToTop: "മുകളിലേക്ക് മടങ്ങുക" },
    header: { tagline: "നവീകരണം · യാന്ത്രികവൽക്കരണം · ഉയർച്ച" },
    footer: { tagline: "നവീകരണം · യാന്ത്രികവൽക്കരണം · ഉയർച്ച" },
    langPrompt: { systemSetup: "സിസ്റ്റം സെറ്റപ്പ് · 01" },
    preloader: { ok: "··· OK" },
    home: { techEyebrow: "സാങ്കേതികവിദ്യ", appsEyebrow: "ആപ്ലിക്കേഷനുകൾ" },
    techPage: {
      blueprintEyebrow: "ബ്ലൂപ്രിൻ്റ് ആർക്കൈവ്",
      blueprintFig: "fig.05 — fig.04",
      indexLabel: "സിസ്റ്റം ഇൻഡക്സ്",
      registerEyebrow: "സിസ്റ്റം രജിസ്റ്റർ",
      registerLine1: "ഒമ്പത് ഉപസിസ്റ്റങ്ങൾ.",
      registerLine2: "ഒരു യന്ത്രം.",
      registerBody:
        "ഓരോ ജോയിൻ്റും സെൻസറും കോഡ് വരിയും ഒന്നാം ക്ലാസ് എൻജിനീയറിംഗ് ഉപസിസ്റ്റമായി കണക്കാക്കുന്നു. അതിൻ്റെ സാങ്കേതിക രജിസ്റ്റർ പരിശോധിക്കാൻ ഒരു സിസ്റ്റം തിരഞ്ഞെടുക്കുക.",
      registryEyebrow: "രജിസ്ട്രി",
      registerTitle: "സാങ്കേതിക രജിസ്റ്റർ",
      sheetsMeta: "{count, plural, one {# ഷീറ്റ്} other {# ഷീറ്റുകൾ}} · v1.0 · രഹസ്യം",
    },
    appsPage: {
      missionsLabel: "{count, plural, one {# മിഷൻ} other {# മിഷനുകൾ}}",
    },
    specTable: { no: "ക്ര.", specification: "സ്പെസിഫിക്കേഷൻ" },
    blueprintPanel: { readiness: "സന്നദ്ധത", note: "കുറിപ്പ്" },
    mediaFrame: {
      awaiting: "ഇമേജറി കാത്തിരിക്കുന്നു",
      tagConcept: "ആശയം",
      tagReference: "റഫറൻസ്",
      visualization: "ദൃശ്യവൽക്കരണം",
      conceptVisualization: "ആശയ ദൃശ്യവൽക്കരണം",
      referenceImagery: "റഫറൻസ് ഇമേജറി",
      placeholderPending: "പ്ലെയ്സ്ഹോൾഡർ — അസറ്റ് ലഭ്യമല്ല",
      close: "[ അടയ്ക്കുക ]",
      expand: "വലുതാക്കുക +",
      conceptNotProduction: "ആശയ ദൃശ്യവൽക്കരണം, ഉൽപ്പാദന ഇമേജറിയല്ല.",
      referenceOnly: "റഫറൻസ് ഇമേജറി.",
      placeholderPreview: "പ്ലെയ്സ്ഹോൾഡർ പ്രിവ്യൂ",
      preview: "പ്രിവ്യൂ",
      closePreview: "പ്രിവ്യൂ അടയ്ക്കുക",
      expandImagery: "ഇമേജറി വലുതാക്കുക: {label}",
      viewPlaceholder: "പ്ലെയ്സ്ഹോൾഡർ ഇമേജറി കാണുക: {label}",
    },
    horizontalShowcase: {
      endSequence: "അനുക്രമത്തിൻ്റെ അവസാനം",
      endContact: "— മിഷൻ ബ്രീഫിനായി ബന്ധപ്പെടുക",
    },
    missionConfigurator: {
      label: "മിഷൻ കോൺഫിഗറേറ്റർ",
      interactive: "സംവേദനാത്മകം",
      modulesLabel: "ശുപാർശ ചെയ്യുന്ന മിഷൻ മൊഡ്യൂളുകൾ",
      disclaimer:
        "ചിത്രീകരണ കോൺഫിഗറേഷൻ മാത്രം — അന്തിമ മിഷൻ സജ്ജീകരണങ്ങൾ ആവശ്യകതകൾ, വാലിഡേഷൻ, സർട്ടിഫിക്കേഷൻ എന്നിവയെ ആശ്രയിക്കുന്നു.",
      status: {
        primary: "പ്രാഥമിക വികസനം",
        roadmap: "എൻജിനീയറിംഗ് റോഡ്മാപ്പ്",
        research: "ഗവേഷണം",
        vision: "ദീർഘകാല കാഴ്ചപ്പാട്",
      },
      envs: {
        earth: {
          name: "ഭൂമി",
          focus:
            "മനുഷ്യ-തോതിലുള്ള ഇടങ്ങൾക്ക് ചുറ്റും നിർമ്മിച്ച വ്യാവസായിക, അടിസ്ഥാന സൗകര്യ, ദുരന്ത പരിതസ്ഥിതികൾ.",
          modules: ["പരിശോധനാ പേലോഡുകൾ", "മാനിപുലേഷൻ ഉപകരണങ്ങൾ", "നാവിഗേഷൻ പേലോഡുകൾ", "പാരിസ്ഥിതിക സംവേദനം"],
        },
        water: {
          name: "ജലം",
          focus:
            "സംരക്ഷിത ആർക്കിടെക്ചറും വിദൂര പ്രവർത്തനവും ആവശ്യമായ സമുദ്ര, ഓഫ്‌ഷോർ സ്വത്തുക്കൾ.",
          modules: ["പാരിസ്ഥിതിക സംവേദനം", "ആശയവിനിമയ മൊഡ്യൂളുകൾ", "പരിശോധനാ പേലോഡുകൾ", "മിഷൻ-നിർദ്ദിഷ്ട സംരക്ഷണ സംവിധാനങ്ങൾ"],
        },
        fire: {
          name: "തീ",
          focus:
            "താപ സംരക്ഷണവും തണുപ്പിക്കലും കോൺഫിഗറേഷനെ നിർവചിക്കുന്ന ഉയർന്ന-താപനില മേഖലകൾ.",
          modules: ["താപ സംവേദനം", "മിഷൻ-നിർദ്ദിഷ്ട സംരക്ഷണ സംവിധാനങ്ങൾ", "പ്രത്യേക എൻഡ് ഇഫക്ടറുകൾ", "പാരിസ്ഥിതിക സംവേദനം"],
        },
        air: {
          name: "വായു",
          focus:
            "ബുദ്ധിപരമായ ചലനശേഷിയിലൂടെയും ആശയവിനിമയത്തിലൂടെയും എത്തിച്ചേരുന്ന ഉയർന്നതും തുറന്നതുമായ ഘടനകൾ.",
          modules: ["നാവിഗേഷൻ പേലോഡുകൾ", "ആശയവിനിമയ മൊഡ്യൂളുകൾ", "താപ സംവേദനം", "പരിശോധനാ പേലോഡുകൾ"],
        },
        space: {
          name: "ബഹിരാകാശം",
          focus:
            "ദീർഘകാല ഗവേഷണ അതിർത്തിയിലെ വാക്വം, റേഡിയേഷൻ, ഭൂമിക്ക് പുറത്തുള്ള പ്രവർത്തനങ്ങൾ.",
          modules: ["ആശയവിനിമയ മൊഡ്യൂളുകൾ", "മിഷൻ-നിർദ്ദിഷ്ട സംരക്ഷണ സംവിധാനങ്ങൾ", "പ്രത്യേക എൻഡ് ഇഫക്ടറുകൾ", "നാവിഗേഷൻ പേലോഡുകൾ"],
        },
      },
    },
  },
  ta: {
    ui: { backToTop: "மேலே திரும்பு" },
    header: { tagline: "புதுமை · தானியங்கி · உயர்வு" },
    footer: { tagline: "புதுமை · தானியங்கி · உயர்வு" },
    langPrompt: { systemSetup: "கணினி அமைவு · 01" },
    preloader: { ok: "··· OK" },
    home: { techEyebrow: "தொழில்நுட்பம்", appsEyebrow: "பயன்பாடுகள்" },
    techPage: {
      blueprintEyebrow: "வடிவமைப்பு காப்பகம்",
      blueprintFig: "fig.05 — fig.04",
      indexLabel: "கணினி குறியீடு",
      registerEyebrow: "கணினி பதிவேடு",
      registerLine1: "ஒன்பது துணைஅமைப்புகள்.",
      registerLine2: "ஒரு இயந்திரம்.",
      registerBody:
        "ஒவ்வொரு மூட்டு, உணரி மற்றும் குறியீட்டு வரியும் முதல் தர பொறியியல் துணைஅமைப்பாக கருதப்படுகிறது. அதன் தொழில்நுட்ப பதிவேட்டை ஆய்வு செய்ய ஒரு அமைப்பை தேர்ந்தெடுக்கவும்.",
      registryEyebrow: "பதிவேடு",
      registerTitle: "தொழில்நுட்ப பதிவேடு",
      sheetsMeta: "{count, plural, one {# தாள்} other {# தாள்கள்}} · v1.0 · ரகசியம்",
    },
    appsPage: {
      missionsLabel: "{count, plural, one {# பணி} other {# பணிகள்}}",
    },
    specTable: { no: "எண்.", specification: "விவரக்குறிப்பு" },
    blueprintPanel: { readiness: "தயார்நிலை", note: "குறிப்பு" },
    mediaFrame: {
      awaiting: "படங்கள் காத்திருக்கின்றன",
      tagConcept: "கருத்து",
      tagReference: "குறிப்பு",
      visualization: "காட்சிப்படுத்தல்",
      conceptVisualization: "கருத்து காட்சிப்படுத்தல்",
      referenceImagery: "குறிப்பு படங்கள்",
      placeholderPending: "இடப்பிடிப்பு — சொத்து நிலுவையில்",
      close: "[ மூடு ]",
      expand: "விரிவாக்கு +",
      conceptNotProduction: "கருத்து காட்சிப்படுத்தல், உற்பத்தி படங்கள் அல்ல.",
      referenceOnly: "குறிப்பு படங்கள்.",
      placeholderPreview: "இடப்பிடிப்பு முன்னோட்டம்",
      preview: "முன்னோட்டம்",
      closePreview: "முன்னோட்டத்தை மூடு",
      expandImagery: "படங்களை விரிவாக்கு: {label}",
      viewPlaceholder: "இடப்பிடிப்பு படங்களை காண்க: {label}",
    },
    horizontalShowcase: {
      endSequence: "வரிசையின் முடிவு",
      endContact: "— பணி சுருக்கத்திற்கு தொடர்பு கொள்ளவும்",
    },
    missionConfigurator: {
      label: "பணி கட்டமைப்பி",
      interactive: "ஊடாடும்",
      modulesLabel: "பரிந்துரைக்கப்பட்ட பணி தொகுதிகள்",
      disclaimer:
        "விளக்க கட்டமைப்பு மட்டுமே — இறுதி பணி அமைப்புகள் தேவைகள், சரிபார்ப்பு மற்றும் சான்றிதழை சார்ந்தது.",
      status: {
        primary: "முக்கிய வளர்ச்சி",
        roadmap: "பொறியியல் வரைபடம்",
        research: "ஆராய்ச்சி",
        vision: "நீண்டகால பார்வை",
      },
      envs: {
        earth: {
          name: "பூமி",
          focus: "மனித அளவிலான இடங்களைச் சுற்றி கட்டப்பட்ட தொழில்துறை, உள்கட்டமைப்பு மற்றும் பேரிடர் சூழல்கள்.",
          modules: ["ஆய்வு சுமைகள்", "கையாளுதல் கருவிகள்", "வழிசெலுத்தல் சுமைகள்", "சூழல் உணர்தல்"],
        },
        water: {
          name: "நீர்",
          focus: "பாதுகாக்கப்பட்ட கட்டமைப்புகள் மற்றும் தொலைவிலிருந்து செயல்பாடு தேவைப்படும் கடல் மற்றும் கடலோர சொத்துக்கள்.",
          modules: ["சூழல் உணர்தல்", "தொடர்பு தொகுதிகள்", "ஆய்வு சுமைகள்", "பணி-சார்ந்த பாதுகாப்பு அமைப்புகள்"],
        },
        fire: {
          name: "தீ",
          focus: "வெப்ப பாதுகாப்பு மற்றும் குளிர்விப்பு கட்டமைப்பை வரையறுக்கும் அதிக வெப்பநிலை மண்டலங்கள்.",
          modules: ["வெப்ப உணர்தல்", "பணி-சார்ந்த பாதுகாப்பு அமைப்புகள்", "சிறப்பு முனை செயலிகள்", "சூழல் உணர்தல்"],
        },
        air: {
          name: "காற்று",
          focus: "புத்திசாலித்தனமான இயக்கம் மற்றும் தொடர்பு மூலம் அடையக்கூடிய உயரமான மற்றும் திறந்த கட்டமைப்புகள்.",
          modules: ["வழிசெலுத்தல் சுமைகள்", "தொடர்பு தொகுதிகள்", "வெப்ப உணர்தல்", "ஆய்வு சுமைகள்"],
        },
        space: {
          name: "விண்வெளி",
          focus: "நீண்டகால ஆராய்ச்சி எல்லையில் வெற்றிடம், கதிர்வீச்சு மற்றும் பூமிக்கு வெளியே செயல்பாடுகள்.",
          modules: ["தொடர்பு தொகுதிகள்", "பணி-சார்ந்த பாதுகாப்பு அமைப்புகள்", "சிறப்பு முனை செயலிகள்", "வழிசெலுத்தல் சுமைகள்"],
        },
      },
    },
  },
  te: {
    ui: { backToTop: "పైకి తిరిగి వెళ్లండి" },
    header: { tagline: "ఆవిష్కరణ · ఆటోమేషన్ · ఔన్నత్యం" },
    footer: { tagline: "ఆవిష్కరణ · ఆటోమేషన్ · ఔన్నత్యం" },
    langPrompt: { systemSetup: "సిస్టమ్ సెటప్ · 01" },
    preloader: { ok: "··· OK" },
    home: { techEyebrow: "సాంకేతికత", appsEyebrow: "అనువర్తనాలు" },
    techPage: {
      blueprintEyebrow: "బ్లూప్రింట్ ఆర్కైవ్",
      blueprintFig: "fig.05 — fig.04",
      indexLabel: "సిస్టమ్ ఇండెక్స్",
      registerEyebrow: "సిస్టమ్ రిజిస్టర్",
      registerLine1: "తొమ్మిది ఉపవ్యవస్థలు.",
      registerLine2: "ఒక యంత్రం.",
      registerBody:
        "ప్రతి జాయింట్, సెన్సార్ మరియు కోడ్ లైన్ ఫస్ట్-క్లాస్ ఇంజనీరింగ్ ఉపవ్యవస్థగా పరిగణించబడతాయి. దాని సాంకేతిక రిజిస్టర్‌ను పరిశీలించడానికి క్రింద ఒక సిస్టమ్‌ను ఎంచుకోండి.",
      registryEyebrow: "రిజిస్ట్రీ",
      registerTitle: "సాంకేతిక రిజిస్టర్",
      sheetsMeta: "{count, plural, one {# షీట్} other {# షీట్లు}} · v1.0 · గోప్యం",
    },
    appsPage: {
      missionsLabel: "{count, plural, one {# మిషన్} other {# మిషన్లు}}",
    },
    specTable: { no: "క్ర.", specification: "స్పెసిఫికేషన్" },
    blueprintPanel: { readiness: "సంసిద్ధత", note: "గమనిక" },
    mediaFrame: {
      awaiting: "చిత్రాల కోసం వేచి ఉంది",
      tagConcept: "కాన్సెప్ట్",
      tagReference: "రిఫరెన్స్",
      visualization: "విజువలైజేషన్",
      conceptVisualization: "కాన్సెప్ట్ విజువలైజేషన్",
      referenceImagery: "రిఫరెన్స్ ఇమేజరీ",
      placeholderPending: "ప్లేస్‌హోల్డర్ — ఆస్తి వాయిదా",
      close: "[ మూసివేయి ]",
      expand: "విస్తరించు +",
      conceptNotProduction: "కాన్సెప్ట్ విజువలైజేషన్, ఉత్పత్తి ఇమేజరీ కాదు.",
      referenceOnly: "రిఫరెన్స్ ఇమేజరీ.",
      placeholderPreview: "ప్లేస్‌హోల్డర్ ప్రివ్యూ",
      preview: "ప్రివ్యూ",
      closePreview: "ప్రివ్యూను మూసివేయి",
      expandImagery: "ఇమేజరీ విస్తరించు: {label}",
      viewPlaceholder: "ప్లేస్‌హోల్డర్ ఇమేజరీ చూడండి: {label}",
    },
    horizontalShowcase: {
      endSequence: "క్రమం ముగింపు",
      endContact: "— మిషన్ బ్రీఫ్ కోసం సంప్రదించండి",
    },
    missionConfigurator: {
      label: "మిషన్ కాన్ఫిగరేటర్",
      interactive: "ఇంటరాక్టివ్",
      modulesLabel: "సిఫార్సు చేసిన మిషన్ మాడ్యూళ్లు",
      disclaimer:
        "చిత్రీకరణ కాన్ఫిగరేషన్ మాత్రమే — తుది మిషన్ సెటప్‌లు అవసరాలు, వాలిడేషన్ మరియు సర్టిఫికేషన్‌పై ఆధారపడి ఉంటాయి.",
      status: {
        primary: "ప్రాథమిక అభివృద్ధి",
        roadmap: "ఇంజనీరింగ్ రోడ్‌మ్యాప్",
        research: "పరిశోధన",
        vision: "దీర్ఘకాలిక దృష్టి",
      },
      envs: {
        earth: {
          name: "భూమి",
          focus: "మానవ-పరిమాణ ప్రదేశాల చుట్టూ నిర్మించిన పారిశ్రామిక, మౌలిక సదుపాయ మరియు విపత్తు వాతావరణాలు.",
          modules: ["తనిఖీ పేలోడ్‌లు", "మానిప్యులేషన్ సాధనాలు", "నావిగేషన్ పేలోడ్‌లు", "వాతావరణ సెన్సింగ్"],
        },
        water: {
          name: "నీరు",
          focus: "రక్షిత ఆర్కిటెక్చర్ మరియు రిమోట్ నిర్వహణ అవసరమయ్యే సముద్ర మరియు ఆఫ్‌షోర్ ఆస్తులు.",
          modules: ["వాతావరణ సెన్సింగ్", "కమ్యూనికేషన్ మాడ్యూళ్లు", "తనిఖీ పేలోడ్‌లు", "మిషన్-నిర్దిష్ట రక్షణ వ్యవస్థలు"],
        },
        fire: {
          name: "మంట",
          focus: "థర్మల్ రక్షణ మరియు శీతలీకరణ కాన్ఫిగరేషన్‌ను నిర్వచించే అధిక-ఉష్ణోగ్రత మండలాలు.",
          modules: ["థర్మల్ సెన్సింగ్", "మిషన్-నిర్దిష్ట రక్షణ వ్యవస్థలు", "ప్రత్యేక ఎండ్ ఎఫెక్టర్‌లు", "వాతావరణ సెన్సింగ్"],
        },
        air: {
          name: "గాలి",
          focus: "తెలివైన చలనశీలత మరియు కమ్యూనికేషన్ ద్వారా చేరుకునే ఎత్తైన మరియు బహిర్గత నిర్మాణాలు.",
          modules: ["నావిగేషన్ పేలోడ్‌లు", "కమ్యూనికేషన్ మాడ్యూళ్లు", "థర్మల్ సెన్సింగ్", "తనిఖీ పేలోడ్‌లు"],
        },
        space: {
          name: "అంతరిక్షం",
          focus: "దీర్ఘకాలిక పరిశోధన సరిహద్దులో వాక్యూం, రేడియేషన్ మరియు భూమికి వెలుపల కార్యకలాపాలు.",
          modules: ["కమ్యూనికేషన్ మాడ్యూళ్లు", "మిషన్-నిర్దిష్ట రక్షణ వ్యవస్థలు", "ప్రత్యేక ఎండ్ ఎఫెక్టర్‌లు", "నావిగేషన్ పేలోడ్‌లు"],
        },
      },
    },
  },
};