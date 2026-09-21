import { Language, TranslationSchema } from "@/i18n/translations";

export type SearchPill = "database" | "mentors";

export type SearchCategory =
  | "all"
  | "pages"
  | "corpus"
  | "assessment"
  | "expert"
  | "legal"
  | "settings";

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: SearchCategory;
  categoryLabel: string;
  url: string;
  keywords: string[];
  badge?: string;
  badgeColor?: string;
  iconType?: "page" | "law" | "assessment" | "expert" | "shield" | "theme" | "bot";
}

export function getSearchCatalog(
  t: TranslationSchema,
  language: Language
): SearchItem[] {
  return [
    // --- PAGES & CORE TOOLS ---
    {
      id: "page-home",
      title: t.nav.home,
      description: t.home.heroSubtitle,
      category: "pages",
      categoryLabel: t.search.pagesCategory,
      url: "/",
      badge: "Core",
      badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
      iconType: "page",
      keywords: [
        "home",
        "homepage",
        "landing",
        "ip shakti",
        "sahayak",
        "ayush",
        "licensing",
        "મુખ્ય પૃષ્ઠ",
        "मुख्य पृष्ठ",
        "गृहम्",
      ],
    },
    {
      id: "page-assessment",
      title: t.nav.assessment,
      description: t.home.cards.unifiedIntake.desc,
      category: "pages",
      categoryLabel: t.search.pagesCategory,
      url: "/assessment",
      badge: "Assessment",
      badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
      iconType: "assessment",
      keywords: [
        "assessment",
        "intake",
        "evaluate",
        "compliance check",
        "risk score",
        "report",
        "questionnaire",
        "મૂલ્યાંકન",
        "मूल्यांकन",
        "जांच",
      ],
    },
    {
      id: "page-analytics-dashboard",
      title: "Compliance & Risk Analytics Dashboard",
      description: "Interactive risk analytics, category breakdown bar charts, and recent assessment audit logs.",
      category: "pages",
      categoryLabel: t.search.pagesCategory,
      url: "/analytics-dashboard",
      badge: "Analytics",
      badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
      iconType: "assessment",
      keywords: [
        "dashboard",
        "analytics",
        "risk analytics",
        "compliance score",
        "audit logs",
        "charts",
        "pie chart",
        "डैशबोर्ड",
        "एनालिटिक्स",
        "વિશ્લેષણ",
      ],
    },
    {
      id: "page-corpus",
      title: t.nav.legalCorpus,
      description: t.corpus.subtitle,
      category: "pages",
      categoryLabel: t.search.pagesCategory,
      url: "/corpus",
      badge: "Legal Library",
      badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
      iconType: "law",
      keywords: [
        "legal corpus",
        "statutes",
        "acts",
        "regulations",
        "rules",
        "gazette",
        "tkdl",
        "laws",
        "કાનૂની સંગ્રહ",
        "विधि कोश",
        "कानून",
      ],
    },
    {
      id: "page-expert",
      title: t.nav.expertEscalation,
      description: t.expert.subtitle,
      category: "pages",
      categoryLabel: t.search.pagesCategory,
      url: "/expert-escalation",
      badge: "Escalation",
      badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
      iconType: "expert",
      keywords: [
        "expert escalation",
        "lawyer",
        "attorney",
        "consultation",
        "portals",
        "advisory",
        "નિષ્ણાત પરામર્શ",
        "विशेषज्ञ परामर्श",
        "वकील",
      ],
    },
    {
      id: "page-assistant",
      title: t.nav.aiAssistant,
      description: t.chat.subtitle,
      category: "pages",
      categoryLabel: t.search.pagesCategory,
      url: "/ai-assistant",
      badge: "AI Legal Bot",
      badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
      iconType: "bot",
      keywords: [
        "ai assistant",
        "chat",
        "rag",
        "legal bot",
        "ask question",
        "prompt",
        "એઆઈ સહાયક",
        "एआई सहायक",
        "बातचीत",
      ],
    },
    {
      id: "page-dashboard",
      title: "Dashboard",
      description: "Organization overview, active assessments, and licensing metrics.",
      category: "pages",
      categoryLabel: t.search.pagesCategory,
      url: "/dashboard",
      badge: "Analytics",
      badgeColor: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
      iconType: "page",
      keywords: ["dashboard", "metrics", "analytics", "compliance score", "ড্যাশবোর্ড", "डैशबोर्ड"],
    },
    {
      id: "page-about",
      title: t.nav.aboutUs,
      description: t.about.storySubtitle,
      category: "pages",
      categoryLabel: t.search.pagesCategory,
      url: "/about",
      badge: "Story",
      badgeColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
      iconType: "page",
      keywords: [
        "about",
        "mission",
        "vision",
        "pillars",
        "how it works",
        "codeveda",
        "અમારા વિશે",
        "हमारे बारे में",
      ],
    },
    {
      id: "page-privacy",
      title: t.nav.privacyPolicy,
      description: t.privacy.subtitle,
      category: "pages",
      categoryLabel: t.search.pagesCategory,
      url: "/privacy",
      badge: "Security",
      badgeColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
      iconType: "shield",
      keywords: [
        "privacy",
        "security",
        "gdpr",
        "data protection",
        "zero trust",
        "aes-256",
        "encryption",
        "ગોપનીયતા નીતિ",
        "गोपनीयता नीति",
      ],
    },
    {
      id: "page-terms",
      title: t.nav.termsAndConditions,
      description: t.terms.subtitle,
      category: "pages",
      categoryLabel: t.search.pagesCategory,
      url: "/terms",
      badge: "Legal",
      badgeColor: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
      iconType: "law",
      keywords: [
        "terms",
        "conditions",
        "disclaimer",
        "jurisdiction",
        "governing law",
        "liability",
        "નિયમો અને શરતો",
        "नियम और शर्तें",
      ],
    },
    {
      id: "page-settings",
      title: t.settings.title,
      description: t.settings.subtitle,
      category: "settings",
      categoryLabel: "Settings & Themes",
      url: "/settings",
      badge: "Preferences",
      badgeColor: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
      iconType: "theme",
      keywords: [
        "settings",
        "theme",
        "saffron",
        "bhim",
        "ummah",
        "dark mode",
        "preferences",
        "સેટિંગ્સ",
        "सेटिंग्स",
      ],
    },
    {
      id: "page-team",
      title: t.nav.teamCodeveda,
      description: t.team.desc,
      category: "pages",
      categoryLabel: t.search.pagesCategory,
      url: "/team",
      badge: "Team",
      badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
      iconType: "page",
      keywords: ["team", "codeveda", "developers", "engineers", "sih", "ટીમ કોડવેદ", "दल कोडवेद"],
    },

    // --- STATUTES, LEGAL ACTS & SOURCES ---
    {
      id: "law-drugs-cosmetics",
      title: "Drugs and Cosmetics Act, 1940 (Chapter IV-A)",
      description:
        "Statutory provisions governing manufacture, sale, and distribution of Ayurvedic, Siddha, and Unani drugs.",
      category: "corpus",
      categoryLabel: t.search.lawsCategory,
      url: "/corpus",
      badge: "Act of 1940",
      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300",
      iconType: "law",
      keywords: [
        "drugs and cosmetics act",
        "chapter iv-a",
        "d&c act",
        "asu drugs",
        "licensing rules 1945",
        "form 25d",
        "form 24d",
        "ડ્રગ્સ એન્ડ કોસ્મેટિક્સ એક્ટ",
        "औषध एवं प्रसाधन सामग्री अधिनियम",
      ],
    },
    {
      id: "law-biodiversity-act",
      title: "Biological Diversity Act, 2002 & NBA ABS Regulations",
      description:
        "Access and Benefit Sharing (ABS) compliance, National Biodiversity Authority approvals (Section 3), and SBB notifications (Section 7).",
      category: "corpus",
      categoryLabel: t.search.lawsCategory,
      url: "/corpus",
      badge: "Act of 2002",
      badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300",
      iconType: "law",
      keywords: [
        "biological diversity act",
        "nba",
        "sbb",
        "abs",
        "access and benefit sharing",
        "section 3",
        "section 7",
        "foreign shareholding",
        "જૈવ વિવિધતા અધિનિયમ",
        "जैव विविधता अधिनियम",
      ],
    },
    {
      id: "law-patents-act",
      title: "Patents Act, 1970 — Section 3(p) & Section 3(e)",
      description:
        "Statutory bars against patenting traditional knowledge, mere admixtures, or aggregations of herbal properties.",
      category: "corpus",
      categoryLabel: t.search.lawsCategory,
      url: "/corpus",
      badge: "Section 3(p)",
      badgeColor: "bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300",
      iconType: "law",
      keywords: [
        "patents act",
        "section 3p",
        "section 3e",
        "patentability",
        "traditional knowledge",
        "mere admixture",
        "prior art",
        "પેટન્ટ",
        "पेटेंट अधिनियम",
      ],
    },
    {
      id: "law-schedule-t",
      title: "Schedule T — Good Manufacturing Practices (GMP)",
      description:
        "Factory space, machinery, hygienic premises, and in-house laboratory testing standards for ASU medicines.",
      category: "corpus",
      categoryLabel: t.search.lawsCategory,
      url: "/corpus",
      badge: "GMP Standards",
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300",
      iconType: "law",
      keywords: [
        "schedule t",
        "gmp",
        "good manufacturing practices",
        "factory hygiene",
        "in-house testing lab",
        "batch record",
        "શેડ્યૂલ ટી",
        "शेड्यूल टी जीएमपी",
      ],
    },
    {
      id: "law-tkdl",
      title: "Traditional Knowledge Digital Library (TKDL)",
      description:
        "India's defense repository mapping 400,000+ classical Ayurvedic, Unani, and Siddha formulations to prevent misappropriation.",
      category: "corpus",
      categoryLabel: t.search.lawsCategory,
      url: "https://tkdl.res.in",
      badge: "Official Portal",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
      iconType: "law",
      keywords: [
        "tkdl",
        "traditional knowledge digital library",
        "prior art",
        "shastric formulations",
        "csir",
        "ayush database",
        "ટીકેડીએલ",
        "पारंपरिक ज्ञान डिजिटल लाइब्रेरी",
      ],
    },
    {
      id: "law-ayurveda-aahar",
      title: "FSSAI Ayurveda Aahar Regulations, 2022",
      description:
        "Food products prepared in accordance with authoritative books of Ayurveda under Schedule A of FSSAI regulations.",
      category: "corpus",
      categoryLabel: t.search.lawsCategory,
      url: "/corpus",
      badge: "FSSAI 2022",
      badgeColor: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
      iconType: "law",
      keywords: [
        "ayurveda aahar",
        "fssai",
        "food safety",
        "schedule a",
        "nutraceuticals",
        "dietary supplement",
        "foscos",
        "આયુર્વેદ આહાર",
        "आयुर्वेद आहार",
      ],
    },
    {
      id: "law-schedule-e1",
      title: "Schedule E(1) — Poisonous Medicinal Substances",
      description:
        "Regulated poisonous herbs, metals, and minerals requiring caution warning labels and batch testing records.",
      category: "corpus",
      categoryLabel: t.search.lawsCategory,
      url: "/corpus",
      badge: "Cautionary Labeling",
      badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300",
      iconType: "law",
      keywords: [
        "schedule e1",
        "poisonous substances",
        "heavy metals",
        "cautionary warning",
        "vatsanabha",
        "bhilawa",
        "parada",
        "વિષ દ્રવ્યો",
      ],
    },

    // --- ASSESSMENT MODULES ---
    {
      id: "module-1",
      title: "Assessment Module 1: Entity & Operational Type",
      description:
        "Evaluate manufacturer classification, loan licensing, export status, and foreign corporate control.",
      category: "assessment",
      categoryLabel: t.search.modulesCategory,
      url: "/assessment",
      badge: "Step 1",
      badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300",
      iconType: "assessment",
      keywords: [
        "module 1",
        "entity type",
        "manufacturer",
        "loan license",
        "foreign company",
        "exporter",
        "r&d",
        "સંસ્થાનું સ્વરૂપ",
        "इकाई प्रकार",
      ],
    },
    {
      id: "module-2",
      title: "Assessment Module 2: Formulation & Drug Composition",
      description:
        "Check classical Shastric First Schedule compliance vs Patent & Proprietary (P&P) licensing rules.",
      category: "assessment",
      categoryLabel: t.search.modulesCategory,
      url: "/assessment",
      badge: "Step 2",
      badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300",
      iconType: "assessment",
      keywords: [
        "module 2",
        "formulation",
        "classical drug",
        "shastric",
        "patent proprietary",
        "first schedule texts",
        "સૂત્રિકરણ",
        "दवा संरचना",
      ],
    },
    {
      id: "module-3",
      title: "Assessment Module 3: Biological Resources & ABS Compliance",
      description:
        "Assess domestic wild procurement, State Biodiversity Board (SBB) notification, and NBA benefit sharing.",
      category: "assessment",
      categoryLabel: t.search.modulesCategory,
      url: "/assessment",
      badge: "Step 3",
      badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300",
      iconType: "assessment",
      keywords: [
        "module 3",
        "biological resources",
        "wild herbs",
        "cultivated herbs",
        "abs approval",
        "nba section 3",
        "sbb section 7",
        "જૈવિક સંસાધનો",
        "जैविक संसाधन",
      ],
    },
    {
      id: "module-4",
      title: "Assessment Module 4: Manufacturing & GMP Quality Standards",
      description:
        "Verify Schedule T facility compliance, in-house quality control testing, and heavy metals screening.",
      category: "assessment",
      categoryLabel: t.search.modulesCategory,
      url: "/assessment",
      badge: "Step 4",
      badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300",
      iconType: "assessment",
      keywords: [
        "module 4",
        "manufacturing",
        "gmp",
        "schedule t",
        "quality control",
        "batch testing",
        "heavy metals",
        "ઉત્પાદન અને ગુણવત્તા",
        "उत्पादन मानक",
      ],
    },
    {
      id: "module-5",
      title: "Assessment Module 5: Commercialization & IP Strategy",
      description:
        "Determine trademark classes (Class 5), patentability defense against Section 3(p), and FSSAI Aahar scope.",
      category: "assessment",
      categoryLabel: t.search.modulesCategory,
      url: "/assessment",
      badge: "Step 5",
      badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300",
      iconType: "assessment",
      keywords: [
        "module 5",
        "commercialization",
        "ip strategy",
        "trademark class 5",
        "section 3p defense",
        "fssai compliance",
        "બૌદ્ધિક સંપદા",
        "आईपी रणनीति",
      ],
    },

    // --- EXPERTS & STATUTORY PORTALS ---
    {
      id: "expert-rajesh-sharma",
      title: "Advocate Rajesh Sharma — Senior IP Attorney",
      description:
        "15+ years experience specializing in Traditional Knowledge defense, patent litigation, and Section 3(p) disputes.",
      category: "expert",
      categoryLabel: t.search.expertsCategory,
      url: "/expert-escalation",
      badge: "Verified Specialist",
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
      iconType: "expert",
      keywords: [
        "rajesh sharma",
        "ip attorney",
        "patent lawyer",
        "tkdl litigation",
        "section 3p",
        "delhi high court",
        "રાજેશ શર્મા",
        "राजेश शर्मा",
      ],
    },
    {
      id: "expert-meenakshi-iyer",
      title: "Dr. Meenakshi Iyer — Regulatory & Clinical Consultant",
      description:
        "Specialist in AYUSH Ministry specifications, clinical dossier submissions, and Pharmacopoeial compliance.",
      category: "expert",
      categoryLabel: t.search.expertsCategory,
      url: "/expert-escalation",
      badge: "Verified Specialist",
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
      iconType: "expert",
      keywords: [
        "meenakshi iyer",
        "regulatory consultant",
        "clinical trials",
        "ayush ministry",
        "pharmacopoeia",
        "મીનાક્ષી અય્યર",
        "मीनाक्षी अय्यर",
      ],
    },
    {
      id: "expert-vikram-desai",
      title: "Advocate Vikram Desai — Biodiversity & ABS Specialist",
      description:
        "National Biodiversity Authority approvals, State Biodiversity Board intimations, and benefit sharing negotiations.",
      category: "expert",
      categoryLabel: t.search.expertsCategory,
      url: "/expert-escalation",
      badge: "Verified Specialist",
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
      iconType: "expert",
      keywords: [
        "vikram desai",
        "biodiversity lawyer",
        "nba abs",
        "section 3",
        "section 7",
        "environmental law",
        "વિક્રમ દેસાઈ",
        "विक्रम देसाई",
      ],
    },
    {
      id: "portal-sugam",
      title: "CDSCO Sugam Online Portal",
      description:
        "Government central e-portal for filing AYUSH manufacturing licenses, import/export NOCs, and clinical permissions.",
      category: "expert",
      categoryLabel: t.search.expertsCategory,
      url: "https://cdscoonline.gov.in",
      badge: "Govt Portal",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
      iconType: "expert",
      keywords: [
        "cdsco",
        "sugam",
        "online portal",
        "manufacturing license",
        "noc",
        "copp",
        "સુગમ પોર્ટલ",
        "सुगम पोर्टल",
      ],
    },
    {
      id: "portal-nba",
      title: "NBA E-Biodiversity Portal",
      description:
        "National Biodiversity Authority digital platform for filing Form I, Form II, and ABS agreements.",
      category: "expert",
      categoryLabel: t.search.expertsCategory,
      url: "https://nbaindia.org",
      badge: "Govt Portal",
      badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300",
      iconType: "expert",
      keywords: [
        "nba portal",
        "e-biodiversity",
        "form 1",
        "form 2",
        "abs clearance",
        "ચેન્નઈ",
        "ई-जैव विविधता",
      ],
    },
    {
      id: "portal-ipindia",
      title: "IP India Official E-Filing Portal",
      description:
        "Official portal for filing and tracking Patents, Trademarks, Geographical Indications (GI), and Designs.",
      category: "expert",
      categoryLabel: t.search.expertsCategory,
      url: "https://ipindia.gov.in",
      badge: "Govt Portal",
      badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300",
      iconType: "expert",
      keywords: [
        "ip india",
        "cgpdtm",
        "patent e-filing",
        "trademark registry",
        "gi registry",
        "આઈપી ઇન્ડિયા",
        "आईपी इंडिया",
      ],
    },
    {
      id: "portal-foscos",
      title: "FSSAI FoSCoS Portal (Ayurveda Aahar)",
      description:
        "Food Safety Compliance System for applying and managing Ayurveda Aahar food business licenses.",
      category: "expert",
      categoryLabel: t.search.expertsCategory,
      url: "https://foscos.fssai.gov.in",
      badge: "Govt Portal",
      badgeColor: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
      iconType: "expert",
      keywords: [
        "foscos",
        "fssai portal",
        "food safety license",
        "ayurveda aahar approval",
        "ફૂડ સેફ્ટી",
        "फोस्कोस",
      ],
    },

    // --- LEGAL & PRIVACY ARTICLES ---
    {
      id: "privacy-zero-trust",
      title: "Zero-Trust Session Isolation & Data Privacy",
      description:
        "Strict isolation between user assessment sessions ensuring zero data leakage to third parties.",
      category: "legal",
      categoryLabel: t.search.legalCategory,
      url: "/privacy#data-privacy",
      badge: "ISO 27001",
      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300",
      iconType: "shield",
      keywords: [
        "zero trust",
        "session isolation",
        "data privacy",
        "confidential information",
        "iso 27001",
        "ડેટા પ્રાઇવસી",
      ],
    },
    {
      id: "privacy-aes-encryption",
      title: "AES-256 & TLS 1.3 Data Encryption",
      description:
        "Military-grade encryption for all transmitted and stored compliance formulation parameters.",
      category: "legal",
      categoryLabel: t.search.legalCategory,
      url: "/privacy#secure-transmission",
      badge: "AES-256",
      badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300",
      iconType: "shield",
      keywords: [
        "aes-256",
        "encryption",
        "tls 1.3",
        "https",
        "secure transmission",
        "સુરક્ષા",
      ],
    },
    {
      id: "terms-formal-advice",
      title: "Disclaimer of Formal Legal Counsel (Terms Clause 2)",
      description:
        "Platform outputs provide educational regulatory guidance and do not substitute certified attorney representation.",
      category: "legal",
      categoryLabel: t.search.legalCategory,
      url: "/terms",
      badge: "Legal Disclaimer",
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300",
      iconType: "shield",
      keywords: [
        "legal advice disclaimer",
        "clause 2",
        "terms of use",
        "attorney client",
        "શરતો",
        "अस्वीकरण",
      ],
    },
    {
      id: "terms-jurisdiction",
      title: "Governing Law & Legal Jurisdiction (Terms Clause 14)",
      description:
        "All disputes arising from platform use are governed exclusively by the competent courts of India.",
      category: "legal",
      categoryLabel: t.search.legalCategory,
      url: "/terms",
      badge: "Jurisdiction",
      badgeColor: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300",
      iconType: "shield",
      keywords: ["jurisdiction", "indian courts", "governing law", "disputes", "ન્યાયક્ષેત્ર"],
    },

    // --- THEMES & APPEARANCE ---
    {
      id: "theme-saffron",
      title: t.settings.themes.saffron.name,
      description: t.settings.themes.saffron.desc,
      category: "settings",
      categoryLabel: "Themes",
      url: "/settings",
      badge: "Theme",
      badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300",
      iconType: "theme",
      keywords: ["saffron", "hindutva", "kesari", "orange theme", "जय श्री राम", "કેસરી"],
    },
    {
      id: "theme-blue",
      title: t.settings.themes.blue.name,
      description: t.settings.themes.blue.desc,
      category: "settings",
      categoryLabel: "Themes",
      url: "/settings",
      badge: "Theme",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
      iconType: "theme",
      keywords: ["blue", "bhim", "ambedkar", "constitution", "जय भीम", "પ્રગતિ"],
    },
    {
      id: "theme-green",
      title: t.settings.themes.green.name,
      description: t.settings.themes.green.desc,
      category: "settings",
      categoryLabel: "Themes",
      url: "/settings",
      badge: "Theme",
      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300",
      iconType: "theme",
      keywords: ["green", "ummah", "unity", "peace", "સમૃદ્ધિ"],
    },
    {
      id: "theme-dark",
      title: t.settings.themes.dark.name,
      description: t.settings.themes.dark.desc,
      category: "settings",
      categoryLabel: "Themes",
      url: "/settings",
      badge: "Theme",
      badgeColor: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300",
      iconType: "theme",
      keywords: ["dark mode", "night", "dark theme", "high contrast", "અંધકાર"],
    },
  ];
}

/**
 * High performance search scoring and ranking algorithm.
 */
export function searchCatalog(
  items: SearchItem[],
  query: string,
  pillFilter: SearchPill = "database"
): SearchItem[] {
  const q = query.trim().toLowerCase();

  const isMatchingPill = (item: SearchItem) => {
    const isMentor =
      item.category === "expert" ||
      item.id.startsWith("expert-") ||
      item.id.startsWith("portal-") ||
      item.id === "page-expert";
    if (pillFilter === "mentors") return isMentor;
    return !isMentor;
  };

  if (!q) {
    return [];
  }

  const queryTokens = q.split(/\s+/).filter(Boolean);
  const scoredItems: { item: SearchItem; score: number }[] = [];

  for (const item of items) {
    if (!isMatchingPill(item)) {
      continue;
    }

    const titleLower = item.title.toLowerCase();
    const descLower = item.description.toLowerCase();
    const keywordsLower = item.keywords.map((k) => k.toLowerCase());

    let score = 0;

    // Exact title match gets massive boost
    if (titleLower === q) {
      score += 150;
    } else if (titleLower.startsWith(q)) {
      score += 80;
    } else if (titleLower.includes(q)) {
      score += 50;
    }

    // Exact keyword match
    if (keywordsLower.includes(q)) {
      score += 60;
    }

    // Keyword starts with or contains
    for (const kw of keywordsLower) {
      if (kw.startsWith(q)) score += 30;
      else if (kw.includes(q)) score += 15;
    }

    // Description match
    if (descLower.includes(q)) {
      score += 20;
    }

    // Multi-token checking
    for (const token of queryTokens) {
      if (titleLower.includes(token)) score += 15;
      if (descLower.includes(token)) score += 8;
      if (keywordsLower.some((kw) => kw.includes(token))) score += 10;
    }

    if (score > 0) {
      scoredItems.push({ item, score });
    }
  }

  scoredItems.sort((a, b) => b.score - a.score);
  return scoredItems.map((si) => si.item);
}
