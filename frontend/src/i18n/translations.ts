export type Language = "en" | "hi" | "mr" | "ta" | "te" | "bn" | "kn" | "sa" | "gu";

export interface TranslationSchema {
  common: {
    downloadPdf: string;
    exporting: string;
    startNewAssessment: string;
    learnMore: string;
    tryAgain: string;
    accessDatabase: string;
    accessFile: string;
    loading: string;
  };
  search: {
    buttonLabel: string;
    placeholder: string;
    quickLinks: string;
    noResultsTitle: string;
    noResultsDesc: string;
    askAiCta: string;
    allCategories: string;
    pagesCategory: string;
    lawsCategory: string;
    modulesCategory: string;
    expertsCategory: string;
    legalCategory: string;
    navigateHint: string;
    selectHint: string;
    closeHint: string;
  };
  nav: {
    brandName: string;
    home: string;
    assessment: string;
    legalCorpus: string;
    expertEscalation: string;
    aiAssistant: string;
    aboutUs: string;
    privacyPolicy: string;
    termsAndConditions: string;
    teamCodeveda: string;
    selectLanguage: string;
    english: string;
    hindi: string;
    marathi: string;
    tamil: string;
    telugu: string;
    bengali: string;
    kannada: string;
    sanskrit: string;
    gujarati: string;
  };
  home: {
    heroBadge: string;
    heroTitlePrefix: string;
    heroTitleHighlight: string;
    heroSubtitle: string;
    startAssessment: string;
    browseLegalCorpus: string;
    cards: {
      complianceFirst: {
        title: string;
        desc: string;
      };
      regulatoryClarity: {
        title: string;
        desc: string;
      };
      unifiedIntake: {
        title: string;
        desc: string;
      };
      deepSearch: {
        title: string;
        desc: string;
        cta: string;
      };
    };
  };
  assessment: {
    step: string;
    back: string;
    continue: string;
    generateReport: string;
    selectAtLeastOne: string;
    analyzingTitle: string;
    analyzingDesc: string;
    failedTitle: string;
    failedDesc: string;
    fieldHelper: {
      title: string;
      desc: string;
    };
  };
  report: {
    riskLevels: {
      low: string;
      moderate: string;
      high: string;
    };
    aiComplete: string;
    legalGroundingTitle: string;
    legalGroundingSubtitle: string;
    noCitations: string;
    actionPlanTitle: string;
    actionPlanSubtitle: string;
    noActions: string;
  };
  chat: {
    badge: string;
    title: string;
    subtitle: string;
    header: string;
    initialGreeting: string;
    inputPlaceholder: string;
    thinking: string;
    errorMessage: string;
  };
  corpus: {
    title: string;
    subtitle: string;
    officialSources: string;
    robustGroundedDatabase: string;
    sources: Array<{
      acronym: string;
      name: string;
      desc: string;
    }>;
  };
  expert: {
    badge: string;
    title: string;
    subtitle: string;
    officialPortalsTitle: string;
    officialPortalsSubtitle: string;
    verifiedSpecialistsTitle: string;
    verifiedSpecialistsSubtitle: string;
    domainsTitle: string;
    domainsSubtitle: string;
    bookConsultation: string;
    callDirectly: string;
    verifiedSpecialist: string;
    consultationNotice: string;
    portals: Array<{
      acronym: string;
      name: string;
      desc: string;
    }>;
    experts: Array<{
      name: string;
      role: string;
      desc: string;
    }>;
    categories: Array<{
      title: string;
      badge: string;
      location: string;
      desc: string;
      tags: string[];
    }>;
  };
  about: {
    title: string;
    subtitle: string;
    storyTitle: string;
    storySubtitle: string;
    storyParagraphs: string[];
    whyBuiltTitle: string;
    whyBuiltIntro: string;
    whyBuiltQuestions: string[];
    whyBuiltConclusion: string;
    visionTitle: string;
    visionSubtitle: string;
    visionParagraphs: string[];
    missionTitle: string;
    missionSubtitle: string;
    missionIntro: string;
    pillars: Array<{
      title: string;
      desc: string;
    }>;
    differentiatorsTitle: string;
    differentiators: Array<{
      title: string;
      content: string;
    }>;
    howItWorksTitle: string;
    howItWorksSubtitle: string;
    steps: Array<{
      title: string;
      desc: string;
    }>;
  };
  privacy: {
    title: string;
    subtitle: string;
    tldrLabel: string;
    sections: Array<{
      id: string;
      title: string;
      tldr: string;
      paragraphs: string[];
      tags: string[];
      metadata: Record<string, string>;
    }>;
  };
  terms: {
    title: string;
    subtitle: string;
    items: Array<{
      id: number;
      title: string;
      content: string;
    }>;
  };
  team: {
    title: string;
    desc: string;
  };
  settings: {
    title: string;
    subtitle: string;
    themeTitle: string;
    themes: {
      saffron: {
        name: string;
        desc: string;
      };
      blue: {
        name: string;
        desc: string;
      };
      green: {
        name: string;
        desc: string;
      };
      dark: {
        name: string;
        desc: string;
      };
    };
  };
  dashboard: {
    badge: string;
    title: string;
    subtitle: string;
    runAssessment: string;
    recentLogsTitle: string;
    recentLogsSubtitle: string;
    tableHeaders: {
      productName: string;
      category: string;
      riskScore: string;
      status: string;
      audited: string;
    };
    totalAudited: string;
    highRisk: string;
    clearances: string;
    avgScore: string;
    liveEvaluation: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    dashboard: {
      badge: "Dynamic Analytics Dashboard",
      title: "AYUSH Compliance & Risk Analytics",
      subtitle: "Live risk metrics updated from assessment submissions.",
      runAssessment: "Run New Assessment",
      recentLogsTitle: "Recent Assessment Risk Logs",
      recentLogsSubtitle: "Latest evaluations from the assessment form.",
      tableHeaders: {
        productName: "Product Name",
        category: "Category",
        riskScore: "Risk Score",
        status: "Status",
        audited: "Audited"
      },
      totalAudited: "Total Products Audited",
      highRisk: "High Risk Flags",
      clearances: "Regulatory Clearances",
      avgScore: "Avg Compliance Score",
      liveEvaluation: "Live evaluation"
    },
    common: {
      downloadPdf: "Download PDF",
      exporting: "Exporting...",
      startNewAssessment: "Start New Assessment",
      learnMore: "Learn more",
      tryAgain: "Try Again",
      accessDatabase: "Access Database",
      accessFile: "Access File",
      loading: "Loading...",
    },
    search: {
      buttonLabel: "Search...",
      placeholder: "Search laws, assessment modules, experts, pages...",
      quickLinks: "Popular Topics & Quick Links",
      noResultsTitle: "No matching results found",
      noResultsDesc: "We couldn't find anything matching your query on the website.",
      askAiCta: "Ask AI Legal Assistant",
      allCategories: "All",
      pagesCategory: "Pages & Tools",
      lawsCategory: "Statutes & Sources",
      modulesCategory: "Assessment Modules",
      expertsCategory: "Experts & Portals",
      legalCategory: "Legal & Privacy",
      navigateHint: "Navigate",
      selectHint: "Select",
      closeHint: "Close",
    },
    nav: {
      brandName: "IP Shakti Sahayak",
      home: "Home",
      assessment: "Assessment",
      legalCorpus: "Legal Corpus",
      expertEscalation: "Expert Escalation",
      aiAssistant: "AI Assistant",
      aboutUs: "About Us",
      privacyPolicy: "Privacy Policy",
      termsAndConditions: "Terms & Conditions",
      teamCodeveda: "Team Codeveda",
      selectLanguage: "Language",
      english: "English",
      hindi: "हिन्दी (Hindi)",
      marathi: "मराठी (Marathi)",
      tamil: "தமிழ் (Tamil)",
      telugu: "తెలుగు (Telugu)",
      bengali: "বাংলা (Bengali)",
      kannada: "ಕನ್ನಡ (Kannada)",
      sanskrit: "संस्कृतम् (Sanskrit)",
      gujarati: "ગુજરાતી (Gujarati)",
    },
    home: {
      heroBadge: "Welcome to the Future of Legal Compliance",
      heroTitlePrefix: "Simplify Your",
      heroTitleHighlight: "Ayurvedic Licensing",
      heroSubtitle:
        "IP Shakti Sahayak is an intelligent, unified retrieval assistant designed specifically to guide you through the regulatory complexities of the AYUSH sector.",
      startAssessment: "Start Assessment",
      browseLegalCorpus: "Browse Legal Corpus",
      cards: {
        complianceFirst: {
          title: "Compliance First",
          desc: "Ensure you meet all compliance thresholds before submitting applications to the AYUSH ministry. We analyze your inputs against the latest regulations automatically.",
        },
        regulatoryClarity: {
          title: "Regulatory Clarity",
          desc: "Navigate the Drugs and Cosmetics Act & Biodiversity Act with intelligent AI parsing.",
        },
        unifiedIntake: {
          title: "Unified Intake",
          desc: "A single, streamlined process to assess your entity type, formulations, and required licenses.",
        },
        deepSearch: {
          title: "Deep Legal Corpus Search",
          desc: "Our built-in intelligent search lets you quickly query thousands of official AYUSH precedents, guidelines, and TKDL references instantly.",
          cta: "Try the Search Engine",
        },
      },
    },
    assessment: {
      step: "Step",
      back: "Back",
      continue: "Continue",
      generateReport: "Generate Compliance Report",
      selectAtLeastOne: "Select at least one option to continue",
      analyzingTitle: "Analyzing Profile",
      analyzingDesc:
        "Running semantic similarity search across global regulatory frameworks...",
      failedTitle: "Assessment Failed",
      failedDesc: "There was an issue processing your request.",
      fieldHelper: {
        title: "AYUSH Regulatory Context",
        desc: "Guidelines based on First Schedule Texts and Indian Pharmacopoeia.",
      },
    },
    report: {
      riskLevels: {
        low: "Low Risk",
        moderate: "Moderate Risk",
        high: "High Risk",
      },
      aiComplete: "AI Assessment Complete",
      legalGroundingTitle: "Legal Grounding",
      legalGroundingSubtitle:
        "Direct citations retrieved from the regulatory corpus",
      noCitations: "No specific citations matched your profile.",
      actionPlanTitle: "Action Plan",
      actionPlanSubtitle: "Recommended next steps for compliance",
      noActions: "No specific actions required.",
    },
    chat: {
      badge: "Intelligent RAG Assistant",
      title: "AI Legal Assistant",
      subtitle:
        "Chat with our AI Legal Assistant to get quick insights and regulatory guidance.",
      header: "AI Legal Assistant",
      initialGreeting:
        "Hello! I am your AI Legal Assistant. How can I help you today?",
      inputPlaceholder: "Type your message here...",
      thinking: "Thinking...",
      errorMessage:
        "Unable to reach the AI Legal Assistant. Please ensure GEMINI_API_KEY is configured in your deployment settings.",
    },
    corpus: {
      title: "Legal Corpus",
      subtitle:
        "Access official intellectual property databases and important regulatory documents from recognized authorities in India.",
      officialSources: "Official Sources",
      robustGroundedDatabase: "Our Robust Grounded Database",
      sources: [
        {
          acronym: "TKDL",
          name: "Traditional Knowledge Digital Library",
          desc: "Database of Indian traditional knowledge to prevent misappropriation.",
        },
        {
          acronym: "India Code",
          name: "Statutes & Rules (India Code)",
          desc: "Digital repository of all Central and State Acts.",
        },
        {
          acronym: "IP India",
          name: "IP India Public Databases",
          desc: "Patents, Trade Marks, Designs & GI Registry.",
        },
        {
          acronym: "Drive Database",
          name: "Internal Documents Drive",
          desc: "Access the internal database of regulatory documents and legal files.",
        },
      ],
    },
    expert: {
      badge: "Direct Support Network",
      title: "Expert Escalation",
      subtitle:
        "Bridge the gap between AI guidance and official administrative actions. Connect with vetted legal advocates and regulatory portals.",
      officialPortalsTitle: "Official Regulatory Portals",
      officialPortalsSubtitle: "Government bodies, statutory directories & filing portals",
      verifiedSpecialistsTitle: "Verified Legal & IP Specialists",
      verifiedSpecialistsSubtitle: "Direct communication with accredited regulatory advisors",
      domainsTitle: "Practice Areas & Facilitation Networks",
      domainsSubtitle: "Connect with specialized legal counsels by domain expertise",
      bookConsultation: "Book Consultation",
      callDirectly: "Call Directly",
      verifiedSpecialist: "Verified Specialist",
      consultationNotice:
        "Consultation Note: Expert facilitation is coordinated independently with certified legal advocates, patent agents, and regulatory advisors registered with relevant statutory bodies.",
      portals: [
        {
          name: "Bar Council of India Advocate Search",
          acronym: "BCI Directory",
          desc: "Official nationwide directory to verify credentials of registered advocates and legal practitioners.",
        },
        {
          name: "IP India Public Portal & Agent Search",
          acronym: "IP India Portal",
          desc: "Official portal of the Controller General of Patents, Designs & Trade Marks (CGPDTM) for Patent Agents & Filings.",
        },
        {
          name: "Ministry of AYUSH Legal Grievance Cell",
          acronym: "AYUSH Helpdesk",
          desc: "Official ministry portal for regulatory clarification, ASU drug standards, and policy compliance.",
        },
        {
          name: "National Biodiversity Authority Cell",
          acronym: "NBA ABS Cell",
          desc: "Government body managing Access & Benefit Sharing (ABS) approvals for biological resources.",
        },
      ],
      experts: [
        {
          name: "Tanvi Durude",
          role: "Legal & Regulatory Expert",
          desc: "Specialized in providing expert consultations and legal insights for regulatory compliance. Dedicated to solving your legal queries efficiently.",
        },
        {
          name: "Swamini Pure",
          role: "IP & Compliance Advisor",
          desc: "Dedicated legal advisor with expertise in intellectual property and compliance strategies. Available for direct guidance and issue resolution.",
        },
        {
          name: "Mamta Biradar",
          role: "Licensing Specialist",
          desc: "Regulatory specialist focusing on resolving complex legal hurdles and licensing issues. Contact directly for immediate assistance.",
        },
      ],
      categories: [
        {
          title: "Ayurvedic Patent & GI Attorneys",
          badge: "TKDL & Patent Law",
          location: "New Delhi / Chennai / Online",
          desc: "Specialists in overcoming Section 3(p) TKDL objections, drafting Ayurvedic patent claims, and Geographical Indication filings.",
          tags: ["Patents", "TKDL", "Objection Defense"],
        },
        {
          title: "FSSAI & Nutraceutical Legal Counsel",
          badge: "Food Safety & Claims",
          location: "Mumbai / Bengaluru / Online",
          desc: "Legal experts specializing in Proprietary Food regulations, health claim approvals, and FSSR 2017 compliance audits.",
          tags: ["FSSAI", "Labeling", "Health Claims"],
        },
        {
          title: "NBA & Biodiversity Law Consultants",
          badge: "Access & Benefit Sharing",
          location: "Chennai / Hyderabad / Online",
          desc: "Practitioners helping domestic and foreign entities file Form 1, 2, 3 for commercial utilization of Indian bio-resources.",
          tags: ["NBA", "ABS", "Bio-Resources"],
        },
        {
          title: "State Licensing Authorities (SLA) Facilitators",
          badge: "AYUSH Drug Licensing",
          location: "Pan-India / State Hubs",
          desc: "Consultants aiding manufacturers with Form 24D / 25D classical manufacturing licenses and Loan License (Form 25E) filings.",
          tags: ["Form 25D", "GMP", "AYUSH License"],
        },
        {
          title: "Clinical Trial & CTRI Compliance Counsel",
          badge: "Clinical Research",
          location: "Pune / Ahmedabad / Online",
          desc: "Advisors for clinical trial protocol design, Ethics Committee approvals, and CTRI registry compliance under New Drugs Rules 2019.",
          tags: ["CTRI", "Clinical Trials", "Ethics"],
        },
        {
          title: "International Export & Phytosanitary Counsel",
          badge: "Global Compliance",
          location: "Kochi / Mumbai / Online",
          desc: "Lawyers specializing in FDA DSHEA compliance, EU Traditional Herbal Medicinal Products Directive (THMPD), and CITES export permits.",
          tags: ["FDA", "EU THMPD", "CITES"],
        },
      ],
    },
    about: {
      title: "About IP Shakti Sahayak",
      subtitle:
        "Making Ayurveda IP and regulatory guidance simple, accessible, and trustworthy.",
      storyTitle: "Our Story",
      storySubtitle:
        "Making the Complex World of Ayurveda IPR Easier to Understand",
      storyParagraphs: [
        "Ayurveda is so much more than a traditional system of medicine. It's centuries of knowledge, healing practices, and community-held wisdom passed down through generations. Today, passionate innovators, practitioners, and startups are bringing this ancient wisdom into the modern world.",
        "But protecting that knowledge and navigating the regulations around it can be incredibly frustrating. The rules for patents, traditional knowledge, biodiversity, and drug compliance are scattered across dozens of different laws and government portals.",
        "If you don't have a legal background, figuring out what rules apply to you can feel overwhelming. That's exactly why we built IP Shakti Sahayak.",
        "IP Shakti Sahayak is a multilingual AI assistant designed specifically for the Ayurveda ecosystem. We aren't trying to replace your lawyers or regulatory experts. We just want to make taking that crucial first step easier, clearer, and a lot less intimidating.",
      ],
      whyBuiltTitle: "Why We Built IP Shakti Sahayak",
      whyBuiltIntro:
        "Imagine you're a small Ayurveda startup that just developed an amazing new herbal product. You're probably asking yourself:",
      whyBuiltQuestions: [
        '"Can I actually patent this?"',
        '"Is this already considered traditional knowledge?"',
        '"Do I need to worry about biodiversity compliance?"',
        '"Is my product legally a medicine, a food, or a cosmetic?"',
      ],
      whyBuiltConclusion:
        "Normally, finding answers to these questions means hiring expensive consultants or digging through complex legal texts. IP Shakti Sahayak brings all of this into one simple, guided conversation.",
      visionTitle: "Our Vision",
      visionSubtitle:
        "A future where Ayurveda innovators can protect their knowledge with confidence.",
      visionParagraphs: [
        "We believe that understanding intellectual property and regulations should not be limited to people who have access to expensive legal or consultancy services.",
        "Whether someone is an Ayurvedic practitioner, a researcher, a student, a farmer, a startup founder, an MSME, or an Ayurveda-based innovator, they should be able to understand the basics of protecting and responsibly commercializing their work.",
      ],
      missionTitle: "Our Mission",
      missionSubtitle:
        "Turning complex legal and regulatory information into clear, useful guidance.",
      missionIntro:
        "Our mission is to use Artificial Intelligence, Retrieval-Augmented Generation (RAG), multilingual technologies, and trusted knowledge sources to help the Ayurveda community navigate IPR and regulatory requirements.",
      pillars: [
        {
          title: "Understand",
          desc: "Help users understand their product, formulation, and IP-related situation.",
        },
        {
          title: "Guide",
          desc: "Identify the relevant intellectual-property, regulatory, or ABS area.",
        },
        {
          title: "Verify",
          desc: "Provide answers supported by authoritative sources and citations.",
        },
        {
          title: "Empower",
          desc: "Give users enough clarity to take their next step or approach the right professional.",
        },
      ],
      differentiatorsTitle: "What Makes IP Shakti Sahayak Different?",
      differentiators: [
        {
          title: "AI That Searches Before It Answers",
          content:
            "Most chatbots just guess based on past training. IP Shakti Sahayak works differently using Retrieval-Augmented Generation (RAG). Before answering, she actually searches through our curated knowledge base of official documents, ensuring every response is grounded in facts.",
        },
        {
          title: "Built Specifically for Ayurveda",
          content:
            "IP Shakti Sahayak isn't a generic legal assistant. She was built specifically to tackle the unique challenges of the Ayurveda ecosystem, covering niche areas like Traditional Knowledge, Biodiversity, and Access and Benefit Sharing (ABS).",
        },
        {
          title: "Product Classification Comes First",
          content:
            "Rules change completely depending on whether your product is a classical medicine, a new drug, or a nutraceutical. That's why IP Shakti Sahayak asks a few quick questions to figure out exactly what you're building before giving advice.",
        },
        {
          title: "Clear Separation of Jurisdictions",
          content:
            "What works in India might not work abroad. Our system clearly separates Indian laws from international frameworks like TRIPS or WIPO, so you never get confused by mixed-up requirements.",
        },
        {
          title: "ABS & Biodiversity Guidance",
          content:
            "Working with plants and traditional knowledge often comes with extra responsibilities under the Access and Benefit Sharing (ABS) guidelines. IP Shakti Sahayak helps you figure out if these rules apply to you.",
        },
        {
          title: "Traditional Knowledge & Prior Art",
          content:
            "Telling the difference between a genuinely new invention and existing traditional wisdom can be tricky. IP Shakti Sahayak points you toward relevant traditional knowledge databases (like the TKDL) to help you see if your idea is truly novel.",
        },
        {
          title: "Multilingual by Design",
          content:
            "Legal jargon is hard enough in English. You should be able to ask questions and get answers in the language you're most comfortable with. We're constantly working to make the system as inclusive as possible.",
        },
        {
          title: "Traceable Answers",
          content:
            "Trust is everything when it comes to regulations. We don't expect you to take our AI's word for it. Every answer includes the context, the exact source, and a citation so you can verify it yourself.",
        },
        {
          title: "Human Escalation",
          content:
            "AI isn't perfect, and we know that. When a question is just too complex or highly sensitive, IP Shakti Sahayak won't guess. She'll respectfully step back and connect you with human IP facilitators who can help.",
        },
      ],
      howItWorksTitle: "Our Smart Approach",
      howItWorksSubtitle: "How IP Shakti Sahayak Works",
      steps: [
        {
          title: "Tell us what you're working on",
          desc: "Just describe your Ayurveda product, formulation, or regulatory question in your own words.",
        },
        {
          title: "Understand & Classify",
          desc: "IP Shakti Sahayak will ask a couple of quick questions to understand the exact context of your product.",
        },
        {
          title: "Identify the Relevant Area",
          desc: "The system figures out if your concern relates to Patents, Trademarks, Drug Regulations, ABS, or something else entirely.",
        },
        {
          title: "Retrieve Trusted Information",
          desc: "Our RAG engine scans through curated laws, treaties, and official records to find the most relevant rules.",
        },
        {
          title: "Generate a Simple Answer",
          desc: "IP Shakti Sahayak breaks down the complex legal information into simple, understandable advice.",
        },
        {
          title: "Show Sources & Confidence",
          desc: "You get a clear answer along with direct citations to the official sources, plus a confidence score.",
        },
        {
          title: "Help With the Next Step",
          desc: "If things get too complicated, we'll guide you toward a human expert to take things forward.",
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      subtitle:
        "Comprehensive framework governing data governance, session isolation, and operational confidentiality.",
      tldrLabel: "TL;DR Summary",
      sections: [
        {
          id: "introduction",
          title: "Introduction",
          tldr: "IP Shakti Sahayak handles sensitive intellectual property and traditional knowledge with strict educational and privacy safeguards.",
          tags: ["Overview", "Commitment"],
          metadata: { "Effective Date": "September 2026", "Security Level": "Standard" },
          paragraphs: [
            "Welcome to IP Shakti Sahayak, an advanced AI powered assistant dedicated to providing guidance on Ayurveda, Intellectual Property Rights (IPR), Access and Benefit Sharing (ABS), and regulatory frameworks. Our infrastructure is engineered to facilitate secure educational experiences, recognizing that the subject matter we handle requires the highest standards of discretion.",
            "We process your queries and documents exclusively to generate accurate, context aware, and source grounded responses. Your interactions are isolated within secure sessions and are never mined indiscriminately or sold to external marketing agencies, ensuring your specific inquiries remain strictly private.",
          ],
        },
        {
          id: "data-privacy",
          title: "Data & Privacy",
          tldr: "User sessions are completely isolated to prevent cross-pollination of sensitive intellectual property data.",
          tags: ["Isolation", "Privacy-First"],
          metadata: { "Review Status": "Audited", Framework: "Zero-Trust" },
          paragraphs: [
            "IP Shakti Sahayak is designed with a privacy first approach to ensure that user information is collected, processed, and protected responsibly. Since the platform deals with intellectual property, traditional knowledge, formulations, research related information, and regulatory queries, protecting user data is an important part of the system design.",
            "We understand that the queries submitted to our platform often contain nuanced intellectual property considerations. Therefore, our data pipeline is structured to isolate individual sessions and prevent cross pollination of data between distinct user accounts. All processing occurs within secure environments that prioritize confidentiality at every operational layer.",
            "Our privacy protocols are continuously reviewed by dedicated security teams to ensure they meet modern standards. We employ advanced architectural safeguards to guarantee that your interaction history remains strictly confidential and is never exposed to unauthorized personnel or external entities.",
          ],
        },
        {
          id: "data-minimization",
          title: "Data Minimization",
          tldr: "We only collect data strictly necessary for processing legal and regulatory queries.",
          tags: ["Minimalist", "Sanitization"],
          metadata: { "Data Scope": "Strict", "Purge Cycle": "Automated" },
          paragraphs: [
            "Our system follows the principle of collecting only the information that is absolutely necessary to provide relevant Ayurveda, IPR, ABS, and regulatory guidance. Unnecessary personal or sensitive information is deliberately not required for using our core services.",
            "When you interact with the platform, we avoid logging extraneous metadata that does not directly contribute to the quality of the legal or regulatory output. Any supplementary data that is inadvertently captured during an interaction is routinely purged through automated sanitization processes.",
            "This strict adherence to data minimization ensures that our digital footprint remains exceptionally small. By refusing to hoard irrelevant data, we proactively mitigate risk and uphold our commitment to user privacy and systemic integrity.",
          ],
        },
        {
          id: "user-data-protection",
          title: "User Data Protection",
          tldr: "All user data is shielded by industry-standard encryption and real-time unauthorized access monitoring.",
          tags: ["Encryption", "Monitoring"],
          metadata: { Encryption: "AES-256", Monitoring: "24/7 Active" },
          paragraphs: [
            "Personal information and user generated content are handled with appropriate security measures to reduce the risk of unauthorized access, disclosure, alteration, or misuse. We utilize industry standard encryption both at rest and in transit to shield your information from interception.",
            "Our infrastructure incorporates comprehensive access logs and real time monitoring systems designed specifically to detect and neutralize unauthorized access attempts. These systems operate continuously in the background, providing an invisible but highly effective layer of defense around your account.",
            "In the highly unlikely event of a security anomaly, our incident response protocols are engineered to immediately lock down affected segments and notify appropriate parties. Protecting the sanctity of your submitted data is the foundational premise upon which our entire platform operates.",
          ],
        },
        {
          id: "confidential-information",
          title: "Confidential Information Protection",
          tldr: "Users are strongly advised not to submit raw, unpatented trade secrets or exact chemical ratios.",
          tags: ["Trade Secrets", "Warning"],
          metadata: { "Risk Profile": "High", Guideline: "Abstract Queries" },
          paragraphs: [
            "Users are clearly informed that confidential formulations, unpublished inventions, trade secrets, proprietary research, and sensitive business information should not be unnecessarily entered into the system. While our platform is highly secure, exercising caution with raw trade secrets is a fundamental best practice in intellectual property management.",
            "We strongly advise users to abstract their queries when dealing with highly sensitive or unpatented chemical formulations. By asking questions based on general regulatory principles rather than disclosing the exact proprietary ratios of a new invention, users can receive maximum benefit from the platform while maintaining total control over their trade secrets.",
            "The platform is intended to interpret law and regulation, not to serve as a secure vault for unpublished intellectual property. Maintaining this distinction protects you from inadvertent disclosures and ensures that your proprietary advantages remain entirely within your own secure environments.",
          ],
        },
        {
          id: "secure-transmission",
          title: "Secure Data Transmission",
          tldr: "Communication is protected using advanced HTTPS and TLS cryptographic protocols.",
          tags: ["HTTPS", "TLS 1.3"],
          metadata: { Protocol: "Strict TLS", Certificates: "Auto-Rotating" },
          paragraphs: [
            "All communication between the user and the platform is designed to use secure cryptographic protocols such as advanced HTTPS and modern TLS standards. These protocols establish an impenetrable tunnel between your browser and our servers, completely protecting information during transmission.",
            "We strictly enforce secure connections, meaning the platform will actively reject any attempts to communicate over unencrypted or outdated protocols. This ensures that man in the middle attacks and external eavesdropping are mathematically infeasible during your session.",
            "Furthermore, our cryptographic certificates are regularly rotated and our cipher suites are continuously updated to stay ahead of emerging computational threats. You can trust that the data moving between your device and our systems is heavily shielded at all times.",
          ],
        },
        {
          id: "user-control",
          title: "User Control and Consent",
          tldr: "All extended data processing requires explicit, affirmative user consent, which can be revoked at any time.",
          tags: ["Consent", "Opt-In"],
          metadata: { "Default State": "Opt-Out", Revocation: "Instant" },
          paragraphs: [
            "Users maintain absolute control over their information and permissions. Where data is stored or processed beyond the basic functioning of the service, explicit consent and clear transparency mechanisms are provided prior to any processing.",
            "Our interface is designed to make permission management intuitive and accessible. Users can easily navigate to their account settings to grant, modify, or revoke permissions at any given time without facing artificial friction or confusing terminology.",
            "We operate on a philosophy of affirmative consent. This means that features requiring extended data access are completely disabled by default and are only activated when you explicitly choose to enable them. Your choices are respected unequivocally.",
          ],
        },
        {
          id: "access-deletion",
          title: "Data Access and Deletion",
          tldr: "Users possess autonomous capabilities to review, export, or permanently delete their history.",
          tags: ["Deletion", "Portability"],
          metadata: { "Process Time": "Instant", Purge: "Complete" },
          paragraphs: [
            "The platform is designed to provide highly accessible mechanisms for users to manage their stored information, including full data access, correction of inaccuracies, and complete deletion where applicable.",
            "Should you choose to terminate your relationship with our platform, you possess the autonomous ability to trigger a comprehensive data deletion sequence. This process permanently eradicates your query history, profile data, and associated records from our primary databases and scheduled backup cycles.",
            "We believe that true data ownership belongs to the user. We ensure that our export tools format your historical data into open, machine readable formats, allowing you to transport your queries and findings wherever your research leads you.",
          ],
        },
        {
          id: "third-party-audits",
          title: "Third-Party Audits & Compliance",
          tldr: "Systemic architecture undergoes regular independent evaluations to verify regulatory compliance.",
          tags: ["Audits", "Compliance"],
          metadata: { Frequency: "Quarterly", Standard: "ISO 27001" },
          paragraphs: [
            "To ensure that our privacy promises are backed by verifiable technical standards, we submit our systemic architecture to periodic third party security and compliance audits.",
            "These independent evaluations rigorously assess our encryption protocols, access control mechanisms, and data isolation pipelines against recognized international security frameworks. Any identified vulnerabilities are remediated immediately through high priority engineering sprints.",
            "By subjecting our platform to external scrutiny, we provide our users with an objective layer of assurance that their interactions are managed with uncompromising professionalism and technological rigor.",
          ],
        },
        {
          id: "policy-updates",
          title: "Policy Updates and Notifications",
          tldr: "Material amendments to our privacy framework are communicated through clear in-app disclosures.",
          tags: ["Transparency", "Evolution"],
          metadata: { "Notice Period": "30 Days", Delivery: "In-App" },
          paragraphs: [
            "As regulatory landscapes evolve and our technological infrastructure matures, this Privacy Policy may be updated to reflect enhanced protective measures or statutory changes.",
            "We are committed to maintaining radical transparency throughout this evolution. In the event of material modifications that alter how user data is handled, prominent in app notifications and summarized changelogs will be presented prior to the effective date of such revisions.",
            "Continued engagement with the platform following the publication of revised terms constitutes an acknowledgment and acceptance of the refined protective paradigms.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms & Conditions",
      subtitle:
        "Comprehensive framework governing educational use, legal boundaries, and responsibilities.",
      items: [
        {
          id: 1,
          title: "Purpose of the Platform",
          content:
            "IP Shakti Sahayak is an AI-powered platform designed to provide informational and preliminary guidance on Ayurveda-related Intellectual Property Rights (IPR), regulatory requirements, Traditional Knowledge, Biodiversity, and Access and Benefit Sharing (ABS).",
        },
        {
          id: 2,
          title: "Not Legal or Professional Advice",
          content:
            "The information provided by IP Shakti Sahayak is for educational and informational purposes only. It does not constitute legal, regulatory, medical, or professional advice and does not replace a qualified lawyer, IP professional, or regulatory authority.",
        },
        {
          id: 3,
          title: "AI-Generated Responses",
          content:
            "The platform uses Artificial Intelligence and Retrieval-Augmented Generation (RAG) to generate responses. Although the system is designed to provide reliable information, AI-generated responses may contain errors, omissions, or incomplete interpretations.",
        },
        {
          id: 4,
          title: "Source-Cited Information",
          content:
            "Where available, responses will include references to official laws, rules, regulations, treaties, government databases, standards, and other authoritative sources. Users are encouraged to verify important information against the original source.",
        },
        {
          id: 5,
          title: "User Responsibility",
          content:
            "Users are responsible for providing accurate information and for independently verifying the guidance before making legal, regulatory, commercial, or intellectual-property decisions.",
        },
        {
          id: 6,
          title: "Jurisdiction and Applicable Law",
          content:
            "The guidance provided is primarily focused on Indian laws, regulations, and institutional frameworks, including the Patents Act, Biological Diversity Act, and Drugs and Cosmetics Act. International perspectives are provided solely for conceptual reference.",
        },
        {
          id: 7,
          title: "No Guarantees or Warranties",
          content:
            "The platform does not guarantee any specific legal outcome, patent grant, trademark approval, regulatory license, or compliance certification.",
        },
        {
          id: 8,
          title: "Confidential and Sensitive Information",
          content:
            "Users should not enter unpublished inventions, trade secrets, proprietary chemical formulations, or other confidential business data into the platform.",
        },
        {
          id: 9,
          title: "Traditional Knowledge and Biodiversity Compliance",
          content:
            "Guidance related to Traditional Knowledge (TKDL), Biodiversity (BD Act), and Access and Benefit Sharing (ABS) is educational and does not exempt users from statutory obligations.",
        },
        {
          id: 10,
          title: "Intellectual Property Ownership of the Platform",
          content:
            "All content, architecture, software, models, prompts, branding, and materials associated with IP Shakti Sahayak are protected by copyright and intellectual property laws.",
        },
        {
          id: 11,
          title: "Acceptable Use",
          content:
            "Users agree not to misuse the platform, reverse-engineer its components, introduce malicious code, scrape bulk data, or use it for deceptive legal practices.",
        },
        {
          id: 12,
          title: "Third-Party Links and External References",
          content:
            "The platform may contain links or citations to external websites, government portals, or third-party databases. IP Shakti Sahayak is not responsible for external contents.",
        },
        {
          id: 13,
          title: "Human Escalation and Referral",
          content:
            "In complex, sensitive, or high-risk matters, the platform may suggest human expert consultation. Such suggestions do not constitute a formal endorsement or attorney-client relationship.",
        },
        {
          id: 14,
          title: "Limitation of Liability",
          content:
            "To the maximum extent permitted by law, IP Shakti Sahayak and its developers shall not be liable for any direct, indirect, incidental, or consequential damages resulting from platform use.",
        },
        {
          id: 15,
          title: "Data Privacy and Handling",
          content:
            "User queries and interactions are processed according to our Privacy Policy. Users acknowledge that queries are processed through AI models for query resolution.",
        },
        {
          id: 16,
          title: "Service Availability and Modifications",
          content:
            "The platform is provided on an 'as is' and 'as available' basis. Features may be modified, updated, or temporarily suspended without prior notice.",
        },
        {
          id: 17,
          title: "Changes to These Terms",
          content:
            "We reserve the right to modify these Terms and Conditions at any time. Continued use of the platform constitutes acceptance of updated terms.",
        },
        {
          id: 18,
          title: "Contact and Feedback",
          content:
            "For questions, feedback, or concerns regarding these Terms and Conditions, please reach out via our designated feedback and support channels.",
        },
      ],
    },
    team: {
      title: "Team Codeveda",
      desc: "This dedicated team page is currently empty but we will develop it in the future.",
    },
    settings: {
      title: "Settings",
      subtitle: "Manage your application preferences",
      themeTitle: "Appearance & Theme",
      themes: {
        saffron: {
          name: "Kesari (Hindutva)",
          desc: "Designed to help you achieve absolute detachment from worldly desires, except for the desire to have a really vibrant & paavan (scared) user interface Filled with Bhagwaness (orange). Jai Shree Ram.",
        },
        blue: {
          name: "Pragati (Bhim)",
          desc: "Channel the profound, uncompromising intellect required to draft an entire national constitution. A deeply logical theme where every single pixel is guaranteed equal rights. Jai Bhim, Jai Bharat.",
        },
        green: {
          name: "Samriddhi (Ummah)",
          desc: "Fostering a profound sense of universal brotherhood and global solidarity. The world could not have been anymore peaceful without you'll in it. Allah Hu Akbar.",
        },
        dark: {
          name: "Andhakar (Dark)",
          desc: "Embrace the cosmic void. For those moments when you realize all digital interfaces are merely Maya (an illusion), and you'd really just prefer to spare your corneas from the blinding light of reality. Andhera Kaayam Rahe.",
        },
      },
    },
  },
  hi: {
    dashboard: {
      badge: "डायनेमिक एनालिटिक्स डैशबोर्ड",
      title: "आयुष अनुपालन और जोखिम विश्लेषिकी",
      subtitle: "मूल्यांकन प्रस्तुतियों से अपडेट किए गए लाइव जोखिम मेट्रिक्स।",
      runAssessment: "नया मूल्यांकन चलाएं",
      recentLogsTitle: "हाल के मूल्यांकन जोखिम लॉग",
      recentLogsSubtitle: "मूल्यांकन फॉर्म से नवीनतम मूल्यांकन।",
      tableHeaders: {
        productName: "उत्पाद का नाम",
        category: "श्रेणी",
        riskScore: "जोखिम स्कोर",
        status: "स्थिति",
        audited: "ऑडिट किया गया"
      },
      totalAudited: "कुल उत्पाद ऑडिट किए गए",
      highRisk: "उच्च जोखिम झंडे",
      clearances: "विनियामक मंजूरी",
      avgScore: "औसत अनुपालन स्कोर",
      liveEvaluation: "लाइव मूल्यांकन"
    },
    common: {
      downloadPdf: "पीडीएफ डाउनलोड करें",
      exporting: "निर्यात हो रहा है...",
      startNewAssessment: "नया मूल्यांकन शुरू करें",
      learnMore: "अधिक जानें",
      tryAgain: "पुनः प्रयास करें",
      accessDatabase: "डेटाबेस खोलें",
      accessFile: "फ़ाइल एक्सेस करें",
      loading: "लोड हो रहा है...",
    },
    search: {
      buttonLabel: "खोजें...",
      placeholder: "कानून, मूल्यांकन मॉड्यूल, विशेषज्ञ, पृष्ठ खोजें...",
      quickLinks: "लोकप्रिय विषय और त्वरित लिंक",
      noResultsTitle: "कोई परिणाम नहीं मिला",
      noResultsDesc: "आपकी खोज से मेल खाने वाली कोई जानकारी वेबसाइट पर नहीं मिली।",
      askAiCta: "एआई कानूनी सहायक से पूछें",
      allCategories: "सभी",
      pagesCategory: "पृष्ठ और उपकरण",
      lawsCategory: "अधिनियम और स्रोत",
      modulesCategory: "मूल्यांकन मॉड्यूल",
      expertsCategory: "विशेषज्ञ और पोर्टल",
      legalCategory: "कानूनी और गोपनीयता",
      navigateHint: "नेविगेट",
      selectHint: "चुनें",
      closeHint: "बंद करें",
    },
    nav: {
      brandName: "आईपी शक्ति सहायक",
      home: "होम",
      assessment: "मूल्यांकन",
      legalCorpus: "कानूनी संग्रह",
      expertEscalation: "विशेषज्ञ सहायता",
      aiAssistant: "एआई सहायक",
      aboutUs: "हमारे बारे में",
      privacyPolicy: "गोपनीयता नीति",
      termsAndConditions: "नियम और शर्तें",
      teamCodeveda: "टीम कोडवेदा",
      selectLanguage: "भाषा",
      english: "English",
      hindi: "हिन्दी (Hindi)",
      marathi: "मराठी (Marathi)",
      tamil: "தமிழ் (Tamil)",
      telugu: "తెలుగు (Telugu)",
      bengali: "বাংলা (Bengali)",
      kannada: "ಕನ್ನಡ (Kannada)",
      sanskrit: "संस्कृतम् (Sanskrit)",
      gujarati: "ગુજરાતી (Gujarati)",
    },
    home: {
      heroBadge: "कानूनी अनुपालन के भविष्य में आपका स्वागत है",
      heroTitlePrefix: "सरल बनाएं अपना",
      heroTitleHighlight: "आयुर्वेदिक लाइसेंसिंग",
      heroSubtitle:
        "आईपी शक्ति सहायक एक बुद्धिमान, एकीकृत पुनर्प्राप्ति सहायक है जो विशेष रूप से आयुष क्षेत्र की नियामक जटिलताओं में आपका मार्गदर्शन करने के लिए तैयार किया गया है।",
      startAssessment: "मूल्यांकन शुरू करें",
      browseLegalCorpus: "कानूनी संग्रह देखें",
      cards: {
        complianceFirst: {
          title: "अनुपालन प्राथमिकता",
          desc: "आयुष मंत्रालय में आवेदन जमा करने से पहले सुनिश्चित करें कि आप सभी अनुपालन मानकों को पूरा करते हैं। हम नवीनतम नियमों के आधार पर आपके विवरण का स्वतः विश्लेषण करते हैं।",
        },
        regulatoryClarity: {
          title: "नियामक स्पष्टता",
          desc: "ड्रग्स एंड कॉस्मेटिक्स एक्ट और जैव विविधता अधिनियम को उन्नत एआई विश्लेषण के साथ आसानी से समझें।",
        },
        unifiedIntake: {
          title: "एकीकृत इनटेक",
          desc: "आपकी संस्था के प्रकार, फॉर्मूलेशन और आवश्यक लाइसेंसों का आकलन करने की एकल, सुव्यवस्थित प्रक्रिया।",
        },
        deepSearch: {
          title: "गहन कानूनी संग्रह खोज",
          desc: "हमारी अंतर्निहित त्वरित खोज से आप हजारों आधिकारिक आयुष पूर्व-उदाहरणों, दिशानिर्देशों और टीकेडीएल संदर्भों को तुरंत खोज सकते हैं।",
          cta: "खोज इंजन आज़माएं",
        },
      },
    },
    assessment: {
      step: "चरण",
      back: "पीछे",
      continue: "आगे बढ़ें",
      generateReport: "अनुपालन रिपोर्ट तैयार करें",
      selectAtLeastOne: "जारी रखने के लिए कम से कम एक विकल्प चुनें",
      analyzingTitle: "प्रोफ़ाइल का विश्लेषण जारी है",
      analyzingDesc:
        "वैश्विक नियामक ढाँचों में सिमेंटिक समानता खोज और कानूनी विश्लेषण किया जा रहा है...",
      failedTitle: "मूल्यांकन विफल रहा",
      failedDesc: "आपके अनुरोध को संसाधित करने में समस्या आई।",
      fieldHelper: {
        title: "आयुष नियामक संदर्भ",
        desc: "प्रथम अनुसूची ग्रंथों और भारतीय भेषजसंहिता (आईपीआई) पर आधारित दिशानिर्देश।",
      },
    },
    report: {
      riskLevels: {
        low: "निम्न जोखिम",
        moderate: "मध्यम जोखिम",
        high: "उच्च जोखिम",
      },
      aiComplete: "एआई मूल्यांकन पूर्ण",
      legalGroundingTitle: "कानूनी आधार",
      legalGroundingSubtitle:
        "नियामक संग्रह से प्राप्त प्रामाणिक कानूनी उद्धरण",
      noCitations: "आपकी प्रोफ़ाइल से कोई विशिष्ट उद्धरण मेल नहीं खाते।",
      actionPlanTitle: "कार्य योजना",
      actionPlanSubtitle: "नियामक अनुपालन के लिए अनुशंसित अगले कदम",
      noActions: "किसी विशिष्ट कार्रवाई की आवश्यकता नहीं है।",
    },
    chat: {
      badge: "इंटेलिजेंट आरएजी सहायक",
      title: "एआई कानूनी सहायक",
      subtitle:
        "त्वरित अंतर्दृष्टि और नियामक मार्गदर्शन प्राप्त करने के लिए हमारे एआई कानूनी सहायक से परामर्श करें।",
      header: "एआई कानूनी सहायक",
      initialGreeting:
        "नमस्ते! मैं आपका एआई कानूनी सहायक हूँ। आज मैं आपकी क्या सहायता कर सकता हूँ?",
      inputPlaceholder: "अपना संदेश यहाँ लिखें...",
      thinking: "विचार कर रहा है...",
      errorMessage:
        "एआई कानूनी सहायक से संपर्क करने में असमर्थ। कृपया सुनिश्चित करें कि GEMINI_API_KEY कॉन्फ़िगर है।",
    },
    corpus: {
      title: "कानूनी संग्रह",
      subtitle:
        "भारत में मान्यता प्राप्त प्राधिकरणों से आधिकारिक बौद्धिक संपदा डेटाबेस और महत्वपूर्ण नियामक दस्तावेज़ देखें।",
      officialSources: "आधिकारिक स्रोत",
      robustGroundedDatabase: "हमारा सुदृढ़ प्रमाणित डेटाबेस",
      sources: [
        {
          acronym: "टीकेडीएल (TKDL)",
          name: "पारंपरिक ज्ञान डिजिटल लाइब्रेरी",
          desc: "पारंपरिक भारतीय ज्ञान के दुरुपयोग को रोकने के लिए आधिकारिक डेटाबेस।",
        },
        {
          acronym: "इंडिया कोड",
          name: "अधिनियम एवं नियम (इंडिया कोड)",
          desc: "सभी केंद्रीय और राज्य कानूनों का आधिकारिक डिजिटल भंडार।",
        },
        {
          acronym: "आईपी इंडिया",
          name: "आईपी इंडिया सार्वजनिक डेटाबेस",
          desc: "पेटेंट, ट्रेडमार्क, डिज़ाइन और भौगोलिक उपदर्शन (जीआई) रजिस्ट्री।",
        },
        {
          acronym: "दस्तावेज़ ड्राइव",
          name: "आंतरिक नियामक दस्तावेज़",
          desc: "नियामक परिपत्रों और कानूनी फाइलों के आंतरिक डेटाबेस तक पहुंच।",
        },
      ],
    },
    expert: {
      badge: "प्रत्यक्ष सहायता नेटवर्क",
      title: "विशेषज्ञ सहायता",
      subtitle:
        "एआई मार्गदर्शन और आधिकारिक प्रशासनिक कार्रवाइयों के बीच की दूरी मिटाएं। सत्यापित कानूनी सलाहकारों और नियामक पोर्टलों से सीधे जुड़ें।",
      officialPortalsTitle: "आधिकारिक नियामक पोर्टल",
      officialPortalsSubtitle: "सरकारी निकाय, वैधानिक निर्देशिकाएं एवं फाइलिंग पोर्टल",
      verifiedSpecialistsTitle: "सत्यापित कानूनी एवं आईपी विशेषज्ञ",
      verifiedSpecialistsSubtitle: "प्रमाणित नियामक सलाहकारों के साथ सीधा संवाद",
      domainsTitle: "विशेषज्ञता क्षेत्र एवं सुविधा नेटवर्क",
      domainsSubtitle: "डोमेन विशेषज्ञता के आधार पर विशेष कानूनी सलाहकारों से संपर्क करें",
      bookConsultation: "परामर्श बुक करें",
      callDirectly: "सीधे कॉल करें",
      verifiedSpecialist: "सत्यापित विशेषज्ञ",
      consultationNotice:
        "परामर्श सूचना: विशेषज्ञ सुविधा स्वतंत्र रूप से संबंधित वैधानिक निकायों के साथ पंजीकृत प्रमाणित कानूनी अधिवक्ताओं, पेटेंट एजेंटों और नियामक सलाहकारों द्वारा प्रदान की जाती है।",
      portals: [
        {
          name: "बार काउंसिल ऑफ इंडिया अधिवक्ता खोज",
          acronym: "बीसीआई निर्देशिका",
          desc: "पंजीकृत अधिवक्ताओं और कानूनी पेशेवरों के प्रमाण-पत्रों को सत्यापित करने के लिए आधिकारिक देशव्यापी निर्देशिका।",
        },
        {
          name: "आईपी इंडिया सार्वजनिक पोर्टल एवं एजेंट खोज",
          acronym: "आईपी इंडिया पोर्टल",
          desc: "पेटेंट एजेंटों और फाइलिंग के लिए पेटेंट, डिज़ाइन और ट्रेडमार्क महानियंत्रक (सीजीपीडीटीएम) का आधिकारिक पोर्टल।",
        },
        {
          name: "आयुष मंत्रालय कानूनी शिकायत प्रकोष्ठ",
          acronym: "आयुष हेल्पडेस्क",
          desc: "नियामक स्पष्टीकरण, एएसयू दवा मानकों और नीति अनुपालन के लिए आधिकारिक मंत्रालय पोर्टल।",
        },
        {
          name: "राष्ट्रीय जैव विविधता प्राधिकरण (एनबीए) प्रकोष्ठ",
          acronym: "एनबीए एबीएस प्रकोष्ठ",
          desc: "जैविक संसाधनों के लिए पहुंच और लाभ साझाकरण (एबीएस) अनुमोदन का प्रबंधन करने वाला सरकारी निकाय।",
        },
      ],
      experts: [
        {
          name: "तन्वी दुरूडे",
          role: "कानूनी एवं नियामक विशेषज्ञ",
          desc: "नियामक अनुपालन के लिए विशेषज्ञ परामर्श और कानूनी अंतर्दृष्टि प्रदान करने में विशेषज्ञ। आपके कानूनी प्रश्नों को कुशलतापूर्वक हल करने हेतु समर्पित।",
        },
        {
          name: "स्वामिनी पूरे",
          role: "आईपी एवं अनुपालन सलाहकार",
          desc: "बौद्धिक संपदा और अनुपालन रणनीतियों में विशेषज्ञता वाली समर्पित कानूनी सलाहकार। प्रत्यक्ष मार्गदर्शन के लिए उपलब्ध।",
        },
        {
          name: "ममता बिरादर",
          role: "लाइसेंसिंग विशेषज्ञ",
          desc: "जटिल कानूनी बाधाओं और लाइसेंसिंग मुद्दों को हल करने पर केंद्रित नियामक विशेषज्ञ। तत्काल सहायता हेतु सीधे संपर्क करें।",
        },
      ],
      categories: [
        {
          title: "आयुर्वेदिक पेटेंट एवं जीआई अधिवक्ता",
          badge: "टीकेडीएल एवं पेटेंट कानून",
          location: "नई दिल्ली / चेन्नई / ऑनलाइन",
          desc: "धारा 3(p) टीकेडीएल आपत्तियों का निवारण, आयुर्वेदिक पेटेंट दावों का प्रारूपण और भौगोलिक उपदर्शन (जीआई) फाइलिंग के विशेषज्ञ।",
          tags: ["पेटेंट", "टीकेडीएल", "आपत्ति निवारण"],
        },
        {
          title: "एफएसएसएआई एवं न्यूट्रास्युटिकल कानूनी सलाहकार",
          badge: "खाद्य सुरक्षा एवं दावे",
          location: "मुंबई / बेंगलुरु / ऑनलाइन",
          desc: "प्रोप्राइटरी फूड नियमों, स्वास्थ्य दावा अनुमोदनों और एफएसएसआर 2017 अनुपालन ऑडिट में विशेषज्ञता प्राप्त कानूनी विशेषज्ञ।",
          tags: ["एफएसएसएआई", "लेबलिंग", "स्वास्थ्य दावे"],
        },
        {
          title: "एनबीए एवं जैव विविधता कानून सलाहकार",
          badge: "पहुंच एवं लाभ साझाकरण (एबीएस)",
          location: "चेन्नई / हैदराबाद / ऑनलाइन",
          desc: "भारतीय जैविक संसाधनों के व्यावसायिक उपयोग के लिए फॉर्म 1, 2, 3 दाखिल करने में घरेलू और विदेशी संस्थाओं की सहायता करने वाले विशेषज्ञ।",
          tags: ["एनबीए", "एबीएस", "जैविक संसाधन"],
        },
        {
          title: "राज्य लाइसेंसिंग प्राधिकरण (एसएलए) समन्वयक",
          badge: "आयुष दवा लाइसेंसिंग",
          location: "अखिल भारतीय / राज्य केंद्र",
          desc: "फॉर्म 24D / 25D क्लासिकल विनिर्माण लाइसेंस और लोन लाइसेंस (फॉर्म 25E) दाखिल करने में निर्माताओं की सहायता करने वाले सलाहकार।",
          tags: ["फॉर्म 25D", "जीएमपी", "आयुष लाइसेंस"],
        },
        {
          title: "क्लिनिकल ट्रायल एवं सीटीआरआई अनुपालन सलाहकार",
          badge: "क्लिनिकल अनुसंधान",
          location: "पुणे / अहमदाबाद / ऑनलाइन",
          desc: "न्यू ड्रग्स रूल्स 2019 के तहत क्लिनिकल ट्रायल प्रोटोकॉल डिज़ाइन, एथिक्स कमेटी अनुमोदन और सीटीआरआई रजिस्ट्री अनुपालन सलाहकार।",
          tags: ["सीटीआरआई", "क्लिनिकल ट्रायल", "एथिक्स"],
        },
        {
          title: "अंतर्राष्ट्रीय निर्यात एवं पादप-स्वच्छता सलाहकार",
          badge: "वैश्विक अनुपालन",
          location: "कोच्चि / मुंबई / ऑनलाइन",
          desc: "अमेरिकी एफडीए डीशिया (DSHEA), यूरोपीय संघ टीएचएमपीडी और सीआईटीईएस (CITES) निर्यात परमिट में विशेषज्ञता रखने वाले वकील।",
          tags: ["एफडीए", "यूरोपीय संघ टीएचएमपीडी", "सीआईटीईएस"],
        },
      ],
    },
    about: {
      title: "आईपी शक्ति सहायक के बारे में",
      subtitle:
        "आयुर्वेद बौद्धिक संपदा और नियामक मार्गदर्शन को सरल, सुलभ और विश्वसनीय बनाना।",
      storyTitle: "हमारी कहानी",
      storySubtitle:
        "आयुर्वेद आईपीआर की जटिल दुनिया को समझने में आसान बनाना",
      storyParagraphs: [
        "आयुर्वेद केवल एक पारंपरिक चिकित्सा पद्धति नहीं है। यह पीढ़ियों से चला आ रहा सदियों पुराना ज्ञान, उपचार पद्धतियां और सामुदायिक ज्ञान का अमूल्य भंडार है। आज उत्साही नवप्रवर्तक, चिकित्सक और स्टार्टअप इस प्राचीन ज्ञान को आधुनिक दुनिया में ला रहे हैं।",
        "परंतु उस ज्ञान की रक्षा करना और उससे जुड़े नियमों को समझना बेहद कठिन हो सकता है। पेटेंट, पारंपरिक ज्ञान, जैव विविधता और दवा अनुपालन के नियम दर्जनों विभिन्न कानूनों और सरकारी पोर्टलों में बिखरे हुए हैं।",
        "यदि आपकी कानूनी पृष्ठभूमि नहीं है, तो यह समझना कि आप पर कौन से नियम लागू होते हैं, भारी पड़ सकता है। इसी कारण हमने आईपी शक्ति सहायक का निर्माण किया।",
        "आईपी शक्ति सहायक एक बहुभाषी एआई सहायक है जिसे विशेष रूप से आयुर्वेद पारिस्थितिकी तंत्र के लिए डिज़ाइन किया गया है। हम आपके वकीलों या नियामक विशेषज्ञों का स्थान नहीं लेना चाहते, बल्कि उस पहले महत्वपूर्ण कदम को आसान, स्पष्ट और सुगम बनाना चाहते हैं।",
      ],
      whyBuiltTitle: "हमने आईपी शक्ति सहायक क्यों बनाया",
      whyBuiltIntro:
        "कल्पना कीजिए कि आप एक छोटे आयुर्वेद स्टार्टअप हैं जिसने एक उत्कृष्ट हर्बल उत्पाद विकसित किया है। आप शायद स्वयं से पूछ रहे हैं:",
      whyBuiltQuestions: [
        '"क्या मैं वास्तव में इसका पेटेंट करा सकता हूँ?"',
        '"क्या इसे पहले से ही पारंपरिक ज्ञान माना जाता है?"',
        '"क्या मुझे जैव विविधता अनुपालन के बारे में चिंता करनी होगी?"',
        '"क्या मेरा उत्पाद कानूनी रूप से दवा, भोजन या सौंदर्य प्रसाधन है?"',
      ],
      whyBuiltConclusion:
        "सामान्यतः इन प्रश्नों के उत्तर खोजने का अर्थ महंगे सलाहकारों को नियुक्त करना या जटिल कानूनी ग्रंथों को खंगालना होता है। आईपी शक्ति सहायक इस पूरी प्रक्रिया को एक सरल, निर्देशित संवाद में प्रस्तुत करता है।",
      visionTitle: "हमारा दृष्टिकोण",
      visionSubtitle:
        "एक ऐसा भविष्य जहाँ आयुर्वेद नवप्रवर्तक आत्मविश्वास के साथ अपने ज्ञान की रक्षा कर सकें।",
      visionParagraphs: [
        "हमारा मानना ​​है कि बौद्धिक संपदा और नियमों को समझना केवल उन लोगों तक सीमित नहीं होना चाहिए जिनकी पहुंच महंगी कानूनी सेवाओं तक है।",
        "चाहे कोई आयुर्वेदिक चिकित्सक हो, शोधकर्ता, छात्र, किसान, स्टार्टअप संस्थापक, एमएसएमई या आयुर्वेद नवप्रवर्तक—वे सभी अपने कार्य की सुरक्षा और जिम्मेदारी से व्यवसायीकरण की बुनियादी बातों को समझने में सक्षम होने चाहिए।",
      ],
      missionTitle: "हमारा मिशन",
      missionSubtitle:
        "जटिल कानूनी और नियामक जानकारी को स्पष्ट, उपयोगी मार्गदर्शन में बदलना।",
      missionIntro:
        "हमारा मिशन आर्टिफिशियल इंटेलिजेंस, रिट्रीवल-ऑगमेंटेड जेनरेशन (RAG), बहुभाषी तकनीकों और विश्वसनीय ज्ञान स्रोतों का उपयोग करके आयुर्वेद समुदाय को आईपीआर और नियामक आवश्यकताओं में मार्गदर्शन करना है।",
      pillars: [
        {
          title: "समझें",
          desc: "उपयोगकर्ताओं को उनके उत्पाद, फॉर्मूलेशन और आईपी स्थिति को स्पष्ट रूप से समझने में मदद करना।",
        },
        {
          title: "मार्गदर्शन",
          desc: "प्रासंगिक बौद्धिक संपदा, नियामक या एबीएस क्षेत्र की तुरंत पहचान करना।",
        },
        {
          title: "सत्यापन",
          desc: "आधिकारिक कानूनी स्रोतों और उद्धरणों द्वारा समर्थित सटीक उत्तर प्रदान करना।",
        },
        {
          title: "सशक्तिकरण",
          desc: "उपयोगकर्ताओं को अगले कदम उठाने या सही पेशेवर से संपर्क करने के लिए पूर्ण स्पष्टता देना।",
        },
      ],
      differentiatorsTitle: "आईपी शक्ति सहायक को क्या अलग बनाता है?",
      differentiators: [
        {
          title: "एआई जो उत्तर देने से पहले खोजता है",
          content:
            "अधिकांश चैटबॉट पुराने प्रशिक्षण के आधार पर अनुमान लगाते हैं। आईपी शक्ति सहायक आरएजी (RAG) के माध्यम से काम करता है। उत्तर देने से पहले, यह आधिकारिक दस्तावेजों के हमारे ज्ञानकोष में खोज करता है, जिससे हर उत्तर प्रामाणिक होता है।",
        },
        {
          title: "विशेष रूप से आयुर्वेद के लिए निर्मित",
          content:
            "आईपी शक्ति सहायक कोई सामान्य सहायक नहीं है। यह विशेष रूप से आयुर्वेद क्षेत्र की अनूठी चुनौतियों—पारंपरिक ज्ञान, जैव विविधता और पहुंच एवं लाभ साझाकरण (एबीएस)—के समाधान के लिए बनाया गया है।",
        },
        {
          title: "उत्पाद वर्गीकरण सबसे पहले",
          content:
            "नियम पूरी तरह से इस बात पर निर्भर करते हैं कि आपका उत्पाद शास्त्रीय औषधि है, नई दवा है या न्यूट्रास्युटिकल। इसलिए सलाह देने से पहले प्रणाली कुछ प्रश्नों के माध्यम से उत्पाद के संदर्भ को समझती है।",
        },
        {
          title: "क्षेत्राधिकारों का स्पष्ट विभाजन",
          content:
            "जो भारत में मान्य है वह विदेशों में भिन्न हो सकता है। हमारी प्रणाली भारतीय कानूनों को ट्रिप्स (TRIPS) या विपो (WIPO) जैसे अंतर्राष्ट्रीय ढाँचों से स्पष्ट रूप से अलग रखती है।",
        },
        {
          title: "एबीएस एवं जैव विविधता मार्गदर्शन",
          content:
            "औषधीय पौधों और पारंपरिक ज्ञान के उपयोग पर पहुंच और लाभ साझाकरण (एबीएस) दिशानिर्देश लागू होते हैं। प्रणाली यह निर्धारित करने में मदद करती है कि क्या ये नियम आप पर लागू होते हैं।",
        },
        {
          title: "पारंपरिक ज्ञान एवं पूर्व कला (Prior Art)",
          content:
            "किसी नए आविष्कार और मौजूदा पारंपरिक ज्ञान में अंतर समझना महत्वपूर्ण है। प्रणाली आपको टीकेडीएल (TKDL) जैसे डेटाबेस की ओर निर्देशित करती है ताकि आप जान सकें कि आपका विचार वास्तव में नया है या नहीं।",
        },
        {
          title: "मूल रूप से बहुभाषी डिज़ाइन",
          content:
            "कानूनी भाषा कठिन होती है। आप अपनी पसंदीदा भाषा में प्रश्न पूछने और उत्तर प्राप्त करने के हकदार हैं। हम व्यवस्था को सभी के लिए सुलभ बनाने हेतु निरंतर कार्य कर रहे हैं।",
        },
        {
          title: "सत्यापन योग्य और स्रोत-आधारित उत्तर",
          content:
            "नियामक मामलों में विश्वसनीयता सर्वोपरि है। हर उत्तर के साथ संदर्भ, सटीक कानून और उद्धरण शामिल होते हैं ताकि आप स्वयं मूल स्रोतों से पुष्टि कर सकें।",
        },
        {
          title: "मानव विशेषज्ञ सहायता (Escalation)",
          content:
            "जब कोई प्रश्न अत्यधिक जटिल या संवेदनशील होता है, तो प्रणाली अनुमान नहीं लगाती। वह सम्मानपूर्वक पीछे हटकर आपको योग्य मानव आईपी विशेषज्ञों और सलाहकारों से जोड़ती है।",
        },
      ],
      howItWorksTitle: "हमारा स्मार्ट दृष्टिकोण",
      howItWorksSubtitle: "आईपी शक्ति सहायक कैसे कार्य करता है",
      steps: [
        {
          title: "हमें बताएं कि आप किस पर काम कर रहे हैं",
          desc: "बस अपने आयुर्वेद उत्पाद, फॉर्मूलेशन या नियामक प्रश्न का अपने शब्दों में वर्णन करें।",
        },
        {
          title: "समझें और वर्गीकृत करें",
          desc: "आईपी शक्ति सहायक आपके उत्पाद के सटीक संदर्भ को समझने के लिए कुछ त्वरित प्रश्न पूछेगा।",
        },
        {
          title: "संबंधित क्षेत्र की पहचान करें",
          desc: "प्रणाली यह पता लगाती है कि आपकी चिंता पेटेंट, ट्रेडमार्क, दवा नियमों या एबीएस से संबंधित है।",
        },
        {
          title: "विश्वसनीय जानकारी पुनर्प्राप्त करें",
          desc: "हमारा आरएजी इंजन सबसे प्रासंगिक नियमों को खोजने के लिए कानूनों और आधिकारिक रिकॉर्ड को स्कैन करता है।",
        },
        {
          title: "सरल उत्तर तैयार करें",
          desc: "आईपी शक्ति सहायक जटिल कानूनी जानकारी को सरल, समझने योग्य सलाह में बदलता है।",
        },
        {
          title: "स्रोत और प्रामाणिकता दिखाएं",
          desc: "आपको आधिकारिक स्रोतों के सीधे उद्धरणों के साथ स्पष्ट उत्तर प्राप्त होता है।",
        },
        {
          title: "अगले कदम में सहायता",
          desc: "यदि स्थिति जटिल होती है, तो हम प्रक्रिया को आगे बढ़ाने के लिए मानव विशेषज्ञ की ओर मार्गदर्शन करते हैं।",
        },
      ],
    },
    privacy: {
      title: "गोपनीयता नीति",
      subtitle:
        "डेटा संप्रभुता, सत्र पृथक्करण और परिचालन गोपनीयता को नियंत्रित करने वाला व्यापक ढांचा।",
      tldrLabel: "संक्षिप्त सारांश (TL;DR)",
      sections: [
        {
          id: "introduction",
          title: "प्रस्तावना",
          tldr: "आईपी शक्ति सहायक संवेदनशील बौद्धिक संपदा और पारंपरिक ज्ञान को सख्त शैक्षणिक एवं गोपनीयता सुरक्षा उपायों के साथ संभालता है।",
          tags: ["सिंहावलोकन", "प्रतिबद्धता"],
          metadata: { "प्रभावी तिथि": "सितंबर 2026", "सुरक्षा स्तर": "मानक" },
          paragraphs: [
            "आईपी शक्ति सहायक में आपका स्वागत है, जो आयुर्वेद, बौद्धिक संपदा अधिकार (आईपीआर), पहुंच एवं लाभ साझाकरण (एबीएस), और नियामक ढाँचों पर मार्गदर्शन प्रदान करने वाला उन्नत एआई सहायक है। हमारा बुनियादी ढांचा अत्यधिक गोपनीय शैक्षणिक अनुभव प्रदान करने के लिए तैयार किया गया है।",
            "हम आपके प्रश्नों और दस्तावेजों को केवल सटीक, प्रासंगिक और प्रामाणिक उत्तर तैयार करने के लिए संसाधित करते हैं। आपका संवाद सुरक्षित सत्रों में पूरी तरह अलग रहता है और इसे कभी भी बाहरी विपणन एजेंसियों को बेचा या अनुचित रूप से संकलित नहीं किया जाता है।",
          ],
        },
        {
          id: "data-privacy",
          title: "डेटा एवं गोपनीयता",
          tldr: "संवेदनशील बौद्धिक संपदा डेटा की सुरक्षा के लिए उपयोगकर्ता सत्र पूरी तरह से पृथक रहते हैं।",
          tags: ["सत्र पृथक्करण", "गोपनीयता प्राथमिकता"],
          metadata: { "समीक्षा स्थिति": "ऑडिटेड", "ढांचा": "ज़ीरो-ट्रस्ट" },
          paragraphs: [
            "आईपी शक्ति सहायक गोपनीयता-प्रथम दृष्टिकोण के साथ डिज़ाइन किया गया है ताकि उपयोगकर्ता जानकारी का संग्रह और प्रसंस्करण पूरी तरह जिम्मेदारी से हो। चूंकि यह मंच बौद्धिक संपदा, पारंपरिक ज्ञान और नियामक प्रश्नों को संभालता है, अतः डेटा सुरक्षा हमारे सिस्टम का मूल अंग है।",
            "हम समझते हैं कि इस मंच पर पूछे गए प्रश्नों में गोपनीय विचार शामिल होते हैं। इसलिए हमारी डेटा पाइपलाइन अलग-अलग उपयोगकर्ता खातों के बीच डेटा मिश्रण को सख्ती से रोकती है। सभी प्रसंस्करण पूरी तरह सुरक्षित वातावरण में होते हैं।",
            "हमारी सुरक्षा टीमें आधुनिक मानकों के अनुसार प्रोटोकॉल की निरंतर समीक्षा करती हैं ताकि आपकी बातचीत का इतिहास कभी भी किसी अनधिकृत व्यक्ति या बाहरी इकाई के सामने उजागर न हो।",
          ],
        },
        {
          id: "data-minimization",
          title: "न्यूनतम डेटा संग्रह",
          tldr: "हम केवल कानूनी और नियामक प्रश्नों के प्रसंस्करण के लिए नितांत आवश्यक डेटा ही एकत्र करते हैं।",
          tags: ["न्यूनतम संग्रह", "स्वचालित शोधन"],
          metadata: { "डेटा दायरा": "सख्त", "शोधन चक्र": "स्वचालित" },
          paragraphs: [
            "हमारा सिस्टम केवल वही जानकारी एकत्र करने के सिद्धांत का पालन करता है जो प्रासंगिक आयुर्वेद, आईपीआर और नियामक मार्गदर्शन प्रदान करने के लिए अत्यंत आवश्यक है। अनावश्यक व्यक्तिगत या संवेदनशील जानकारी कभी नहीं मांगी जाती।",
            "जब आप सिस्टम से बातचीत करते हैं, तो हम अनावश्यक मेटाडेटा को लॉग करने से बचते हैं। बातचीत के दौरान प्राप्त होने वाले किसी भी पूरक डेटा को स्वचालित प्रक्रियाओं द्वारा नियमित रूप से हटा दिया जाता है।",
            "डेटा न्यूनीकरण का यह सख्त पालन यह सुनिश्चित करता है कि हमारा डिजिटल पदचिह्न न्यूनतम रहे और उपयोगकर्ता की गोपनीयता अक्षुण्ण बनी रहे।",
          ],
        },
        {
          id: "user-data-protection",
          title: "उपयोगकर्ता डेटा सुरक्षा",
          tldr: "सभी उपयोगकर्ता डेटा उद्योग-मानक एन्क्रिप्शन और वास्तविक समय की अनधिकृत पहुंच निगरानी से सुरक्षित है।",
          tags: ["एन्क्रिप्शन", "सक्रिय निगरानी"],
          metadata: { "एन्क्रिप्शन": "AES-256", "निगरानी": "24/7 सक्रिय" },
          paragraphs: [
            "व्यक्तिगत जानकारी और सामग्री को अनधिकृत पहुंच, प्रकटीकरण या दुरुपयोग से बचाने के लिए उपयुक्त सुरक्षा उपायों के साथ संभाला जाता है। हम डेटा ट्रांसमिशन और स्टोरेज दोनों में आधुनिक एन्क्रिप्शन का उपयोग करते हैं।",
            "हमारे बुनियादी ढांचे में व्यापक एक्सेस लॉग और रियल-टाइम मॉनिटरिंग सिस्टम शामिल हैं जो अनधिकृत पहुंच के प्रयासों का तुरंत पता लगाकर उन्हें रोकते हैं।",
            "किसी सुरक्षा विसंगति की दुर्लभ स्थिति में, हमारे रिस्पॉन्स प्रोटोकॉल प्रभावित क्षेत्रों को तुरंत सुरक्षित करने के लिए डिज़ाइन किए गए हैं। आपके डेटा की पवित्रता बनाए रखना हमारी सर्वोच्च प्राथमिकता है।",
          ],
        },
        {
          id: "confidential-information",
          title: "गोपनीय जानकारी का संरक्षण",
          tldr: "उपयोगकर्ताओं को दृढ़ता से सलाह दी जाती है कि वे अपेटेंटेड व्यापार रहस्य या सटीक रासायनिक अनुपात दर्ज न करें।",
          tags: ["व्यापार रहस्य", "सतर्कता"],
          metadata: { "जोखिम स्तर": "उच्च", "दिशानिर्देश": "सामान्य प्रश्न पूछें" },
          paragraphs: [
            "उपयोगकर्ताओं को स्पष्ट रूप से सूचित किया जाता है कि अप्रकाशित आविष्कार, व्यापार रहस्य, स्वामित्व फॉर्मूलेशन और संवेदनशील व्यावसायिक जानकारी को सिस्टम में दर्ज करने की आवश्यकता नहीं है।",
            "अत्यधिक संवेदनशील फॉर्मूलेशन के मामलों में हम उपयोगकर्ताओं को सामान्य नियामक सिद्धांतों के आधार पर प्रश्न पूछने की सलाह देते हैं, जिससे व्यापार रहस्यों पर आपका पूर्ण नियंत्रण बना रहे।",
            "यह मंच कानूनों की व्याख्या करने के लिए है, न कि अप्रकाशित बौद्धिक संपदा के सुरक्षित वॉल्ट के रूप में। इस अंतर को बनाए रखना आपके स्वामित्व अधिकारों की रक्षा करता है।",
          ],
        },
        {
          id: "secure-transmission",
          title: "सुरक्षित डेटा ट्रांसमिशन",
          tldr: "सभी संचार उन्नत एचटीटीपीएस (HTTPS) और टीएलएस (TLS) क्रिप्टोग्राफ़िक प्रोटोकॉल द्वारा संरक्षित हैं।",
          tags: ["HTTPS", "TLS 1.3"],
          metadata: { "प्रोटोकॉल": "सख्त TLS", "प्रमाणपत्र": "स्वतः नवीनीकरण" },
          paragraphs: [
            "उपयोगकर्ता और मंच के बीच का समस्त संचार सुरक्षित प्रोटोकॉल का उपयोग करता है। ये प्रोटोकॉल आपके ब्राउज़र और हमारे सर्वर के बीच एक अभेद्य सुरक्षा सुरंग स्थापित करते हैं।",
            "हम केवल सुरक्षित कनेक्शन ही स्वीकार करते हैं और पुराने या असुरक्षित प्रोटोकॉल के माध्यम से संचार के किसी भी प्रयास को अस्वीकार कर देते हैं।",
            "हमारे सुरक्षा प्रमाणपत्र नियमित रूप से नवीनीकृत किए जाते हैं ताकि आधुनिक तकनीकी खतरों से आगे रहा जा सके।",
          ],
        },
        {
          id: "user-control",
          title: "उपयोगकर्ता नियंत्रण एवं सहमति",
          tldr: "सभी अतिरिक्त डेटा प्रसंस्करण के लिए उपयोगकर्ता की स्पष्ट सहमति आवश्यक है जिसे किसी भी समय वापस लिया जा सकता है।",
          tags: ["सहमति", "नियंत्रण"],
          metadata: { "डिफ़ॉल्ट स्थिति": "ऑप्ट-आउट", "निरस्तीकरण": "तत्काल" },
          paragraphs: [
            "उपयोगकर्ता अपनी जानकारी और अनुमतियों पर पूर्ण नियंत्रण बनाए रखते हैं। बुनियादी सेवा के अतिरिक्त किसी भी प्रसंस्करण से पूर्व स्पष्ट सहमति ली जाती है।",
            "हमारा इंटरफ़ेस अनुमति प्रबंधन को सरल और पारदर्शी बनाता है। उपयोगकर्ता बिना किसी बाधा के किसी भी समय अपनी अनुमतियों को बदल या वापस ले सकते हैं।",
            "हम सक्रिय सहमति के दर्शन पर कार्य करते हैं। जो सुविधाएं अतिरिक्त डेटा पहुंच की मांग करती हैं, वे डिफ़ॉल्ट रूप से अक्षम रहती हैं।",
          ],
        },
        {
          id: "access-deletion",
          title: "डेटा पहुंच एवं निष्कासन",
          tldr: "उपयोगकर्ताओं के पास अपने इतिहास की समीक्षा करने, निर्यात करने या स्थायी रूप से हटाने की पूर्ण स्वायत्तता है।",
          tags: ["हटाना", "पोर्टेबिलिटी"],
          metadata: { "प्रक्रिया समय": "तत्काल", "निष्कासन": "पूर्ण" },
          paragraphs: [
            "मंच उपयोगकर्ताओं को उनकी संग्रहीत जानकारी का प्रबंधन करने, अशुद्धियों को सुधारने और आवश्यकता पड़ने पर पूर्ण डेटा हटाने की सुविधा प्रदान करता है।",
            "यदि आप मंच का उपयोग बंद करने का निर्णय लेते हैं, तो आप संपूर्ण डेटा निष्कासन प्रक्रिया शुरू कर सकते हैं। यह आपके प्रश्न इतिहास और रिकॉर्ड को डेटाबेस से स्थायी रूप से हटा देता है।",
            "हमारा मानना ​​है कि डेटा का वास्तविक स्वामित्व उपयोगकर्ता का है। हम खुले और सुलभ प्रारूपों में डेटा निर्यात का विकल्प भी प्रदान करते हैं।",
          ],
        },
        {
          id: "third-party-audits",
          title: "तृतीय-पक्ष ऑडिट एवं अनुपालन",
          tldr: "नियामक अनुपालन और सुरक्षा की पुष्टि के लिए सिस्टम का समय-समय पर स्वतंत्र मूल्यांकन किया जाता है।",
          tags: ["ऑडिट", "अनुपालन"],
          metadata: { "आवृत्ति": "त्रैमासिक", "मानक": "ISO 27001" },
          paragraphs: [
            "हमारे सुरक्षा मानकों की पुष्टि के लिए, हम अपने सिस्टम आर्किटेक्चर का समय-समय पर स्वतंत्र सुरक्षा और अनुपालन ऑडिट कराते हैं।",
            "ये स्वतंत्र मूल्यांकन हमारे एन्क्रिप्शन प्रोटोकॉल और डेटा पृथक्करण प्रणालियों का अंतर्राष्ट्रीय सुरक्षा मानकों के विरुद्ध कठोरता से परीक्षण करते हैं।",
            "बाहरी समीक्षा के माध्यम से, हम अपने उपयोगकर्ताओं को तकनीकी दृढ़ता और व्यावसायिकता का वस्तुनिष्ठ आश्वासन प्रदान करते हैं।",
          ],
        },
        {
          id: "policy-updates",
          title: "नीति अद्यतन एवं सूचनाएं",
          tldr: "गोपनीयता नीति में महत्वपूर्ण संशोधनों की सूचना इन-ऐप घोषणाओं द्वारा अग्रिम रूप से दी जाती है।",
          tags: ["पारदर्शिता", "निरंतरता"],
          metadata: { "सूचना अवधि": "30 दिन", "वितरण": "इन-ऐप" },
          paragraphs: [
            "जैसे-जैसे कानूनी परिवेश विकसित होता है और हमारा बुनियादी ढांचा उन्नत होता है, इस गोपनीयता नीति को अद्यतन किया जा सकता है।",
            "हम पूर्ण पारदर्शिता बनाए रखने के लिए प्रतिबद्ध हैं। डेटा प्रबंधन को प्रभावित करने वाले किसी भी बड़े संशोधन की स्थिति में, अग्रिम इन-ऐप सूचनाएं और सारांश प्रस्तुत किए जाएंगे।",
            "संशोधित शर्तों के प्रकाशन के बाद मंच का निरंतर उपयोग अद्यतन नीतियों की स्वीकृति माना जाएगा।",
          ],
        },
      ],
    },
    terms: {
      title: "नियम और शर्तें",
      subtitle:
        "शैक्षणिक उपयोग, कानूनी सीमाओं और जिम्मेदारियों को नियंत्रित करने वाला व्यापक कानूनी ढांचा।",
      items: [
        {
          id: 1,
          title: "मंच का उद्देश्य",
          content:
            "आईपी शक्ति सहायक एक एआई-संचालित मंच है जिसे आयुर्वेद से संबंधित बौद्धिक संपदा अधिकार (आईपीआर), नियामक आवश्यकताओं, पारंपरिक ज्ञान, जैव विविधता और पहुंच एवं लाभ साझाकरण (एबीएस) पर सूचनात्मक और प्रारंभिक मार्गदर्शन प्रदान करने के लिए डिज़ाइन किया गया है।",
        },
        {
          id: 2,
          title: "कानूनी या पेशेवर सलाह नहीं",
          content:
            "आईपी शक्ति सहायक द्वारा प्रदान की गई जानकारी केवल शैक्षणिक और सूचनात्मक उद्देश्यों के लिए है। यह कानूनी, नियामक, चिकित्सीय या पेशेवर सलाह नहीं है और किसी योग्य वकील, आईपी पेशेवर या नियामक प्राधिकरण का विकल्प नहीं है।",
        },
        {
          id: 3,
          title: "एआई द्वारा तैयार किए गए उत्तर",
          content:
            "मंच उत्तर तैयार करने के लिए आर्टिफिशियल इंटेलिजेंस और रिट्रीवल-ऑगमेंटेड जेनरेशन (RAG) का उपयोग करता है। यद्यपि प्रणाली विश्वसनीय जानकारी प्रदान करने के लिए बनाई गई है, तथापि एआई उत्तरों में त्रुटियां या अधूरी व्याख्याएं हो सकती हैं।",
        },
        {
          id: 4,
          title: "स्रोत-सत्यापित जानकारी",
          content:
            "जहां उपलब्ध हो, उत्तरों में आधिकारिक कानूनों, नियमों, विनियमों, संधियों और सरकारी डेटाबेस के संदर्भ शामिल होंगे। उपयोगकर्ताओं को सलाह दी जाती है कि वे मूल स्रोत से महत्वपूर्ण जानकारी का सत्यापन करें।",
        },
        {
          id: 5,
          title: "उपयोगकर्ता की जिम्मेदारी",
          content:
            "उपयोगकर्ता सटीक जानकारी प्रदान करने और कोई भी कानूनी, नियामक या व्यावसायिक निर्णय लेने से पहले स्वतंत्र रूप से मार्गदर्शन की पुष्टि करने के लिए जिम्मेदार हैं।",
        },
        {
          id: 6,
          title: "क्षेत्राधिकार और लागू कानून",
          content:
            "प्रदान किया गया मार्गदर्शन मुख्य रूप से भारतीय कानूनों और नियामक ढाँचों (पेटेंट अधिनियम, जैविक विविधता अधिनियम, ड्रग्स एंड कॉस्मेटिक्स एक्ट) पर केंद्रित है। अंतर्राष्ट्रीय दृष्टिकोण केवल अवधारणात्मक संदर्भ के लिए हैं।",
        },
        {
          id: 7,
          title: "कोई गारंटी या वारंटी नहीं",
          content:
            "यह मंच किसी विशिष्ट कानूनी परिणाम, पेटेंट अनुदान, ट्रेडमार्क अनुमोदन, नियामक लाइसेंस या अनुपालन प्रमाणन की गारंटी नहीं देता है।",
        },
        {
          id: 8,
          title: "गोपनीय एवं संवेदनशील जानकारी",
          content:
            "उपयोगकर्ताओं को अप्रकाशित आविष्कार, व्यापार रहस्य, रासायनिक अनुपात या अन्य गोपनीय व्यावसायिक डेटा मंच में दर्ज नहीं करना चाहिए।",
        },
        {
          id: 9,
          title: "पारंपरिक ज्ञान एवं जैव विविधता अनुपालन",
          content:
            "पारंपरिक ज्ञान (टीकेडीएल), जैव विविधता अधिनियम और पहुंच एवं लाभ साझाकरण (एबीएस) से संबंधित मार्गदर्शन शैक्षणिक है और उपयोगकर्ताओं को वैधानिक दायित्वों से मुक्त नहीं करता है।",
        },
        {
          id: 10,
          title: "मंच का बौद्धिक संपदा स्वामित्व",
          content:
            "आईपी शक्ति सहायक से जुड़ी समस्त सामग्री, आर्किटेक्चर, सॉफ्टवेयर, मॉडल, ब्रांडिंग और सामग्री कॉपीराइट और बौद्धिक संपदा कानूनों द्वारा संरक्षित हैं।",
        },
        {
          id: 11,
          title: "स्वीकार्य उपयोग",
          content:
            "उपयोगकर्ता मंच का दुरुपयोग न करने, इसके घटकों को रिवर्स-इंजीनियर न करने, दुर्भावनापूर्ण कोड न डालने या अनधिकृत डेटा स्क्रैपिंग न करने पर सहमति व्यक्त करते हैं।",
        },
        {
          id: 12,
          title: "तृतीय-पक्ष लिंक एवं बाहरी संदर्भ",
          content:
            "मंच में बाहरी वेबसाइटों या सरकारी पोर्टलों के लिंक शामिल हो सकते हैं। आईपी शक्ति सहायक बाहरी सामग्री के लिए उत्तरदायी नहीं है।",
        },
        {
          id: 13,
          title: "मानव विशेषज्ञ सहायता (Escalation)",
          content:
            "जटिल मामलों में मंच मानव विशेषज्ञ परामर्श का सुझाव दे सकता है। ऐसे सुझाव औपचारिक समर्थन या वकील-मुवक्किल संबंध का गठन नहीं करते हैं।",
        },
        {
          id: 14,
          title: "दायित्व की सीमा",
          content:
            "कानून द्वारा अनुमत अधिकतम सीमा तक, आईपी शक्ति सहायक और इसके डेवलपर्स मंच के उपयोग से होने वाले किसी भी प्रत्यक्ष, अप्रत्यक्ष या परिणामी नुकसान के लिए उत्तरदायी नहीं होंगे।",
        },
        {
          id: 15,
          title: "डेटा गोपनीयता एवं प्रबंधन",
          content:
            "उपयोगकर्ता प्रश्नों को हमारी गोपनीयता नीति के अनुसार संसाधित किया जाता है। उपयोगकर्ता स्वीकार करते हैं कि प्रश्न समाधान हेतु एआई मॉडल से गुजरते हैं।",
        },
        {
          id: 16,
          title: "सेवा की उपलब्धता एवं संशोधन",
          content:
            "मंच 'जैसा है' और 'उपलब्धता के अनुसार' आधार पर प्रदान किया जाता है। बिना पूर्व सूचना के सुविधाओं को संशोधित, अद्यतन या अस्थायी रूप से निलंबित किया जा सकता है।",
        },
        {
          id: 17,
          title: "शर्तों में परिवर्तन",
          content:
            "हम किसी भी समय इन नियमों और शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं। अद्यतन शर्तों के प्रकाशन के बाद निरंतर उपयोग स्वीकृति माना जाएगा।",
        },
        {
          id: 18,
          title: "संपर्क एवं प्रतिक्रिया",
          content:
            "इन नियमों और शर्तों के संबंध में प्रश्नों या प्रतिक्रिया के लिए, कृपया हमारे निर्दिष्ट सहायता चैनलों के माध्यम से संपर्क करें।",
        },
      ],
    },
    team: {
      title: "टीम कोडवेदा",
      desc: "यह समर्पित टीम पृष्ठ वर्तमान में खाली है परंतु हम इसे भविष्य में विकसित करेंगे।",
    },
    settings: {
      title: "सेटिंग्स",
      subtitle: "अपनी एप्लिकेशन प्राथमिकताएं प्रबंधित करें",
      themeTitle: "दिखावट एवं थीम",
      themes: {
        saffron: {
          name: "केसरी (हिंदुत्व)",
          desc: "सांसारिक मोह-माया से पूर्ण विरक्ति प्राप्त करने के लिए तैयार, सिवाय एक अत्यंत जीवंत और पावन भगवा यूजर इंटरफ़ेस के। जय श्री राम।",
        },
        blue: {
          name: "प्रगति (भीम)",
          desc: "संपूर्ण राष्ट्रीय संविधान के निर्माण हेतु आवश्यक अडिग बौद्धिक क्षमता का संचार। एक तार्किक थीम जहाँ हर पिक्सेल को समान अधिकार प्राप्त हैं। जय भीम, जय भारत।",
        },
        green: {
          name: "समृद्धि (उम्माह)",
          desc: "सार्वभौमिक बंधुत्व और वैश्विक एकजुटता की गहरी भावना को बढ़ावा देना। विश्व आपके साथ और अधिक शांतिपूर्ण है। अल्लाह हू अकबर।",
        },
        dark: {
          name: "अंधकार (डार्क)",
          desc: "ब्रह्मांडीय शून्यता को अपनाएं। उन क्षणों के लिए जब आप अनुभव करते हैं कि सभी डिजिटल इंटरफेस केवल माया हैं और आप अपनी आंखों को वास्तविकता की चकाचौंध से बचाना चाहते हैं। अंधेरा कायम रहे।",
        },
      },
    },
  },
  mr: {
    dashboard: {
      badge: "डायनॅमिक ॲनालिटिक्स डॅशबोर्ड",
      title: "आयुष अनुपालन आणि जोखीम विश्लेषण",
      subtitle: "मूल्यांकन सबमिशनमधून अपडेट केलेले थेट जोखीम मेट्रिक्स.",
      runAssessment: "नवीन मूल्यांकन चालवा",
      recentLogsTitle: "अलीकडील मूल्यांकन जोखीम नोंदी",
      recentLogsSubtitle: "मूल्यांकन फॉर्मवरील नवीनतम मूल्यमापन.",
      tableHeaders: {
        productName: "उत्पादनाचे नाव",
        category: "श्रेणी",
        riskScore: "जोखीम स्कोअर",
        status: "स्थिती",
        audited: "ऑडिट केले"
      },
      totalAudited: "एकूण उत्पादने ऑडिट केली",
      highRisk: "उच्च जोखीम ध्वज",
      clearances: "नियामक मंजुरी",
      avgScore: "सरासरी अनुपालन स्कोअर",
      liveEvaluation: "थेट मूल्यांकन"
    },
    common: {
      downloadPdf: "पीडीएफ डाउनलोड करा",
      exporting: "निर्यात होत आहे...",
      startNewAssessment: "नवीन मूल्यांकन सुरू करा",
      learnMore: "अधिक जाणून घ्या",
      tryAgain: "पुन्हा प्रयत्न करा",
      accessDatabase: "डेटाबेस उघडा",
      accessFile: "फाईल ऍक्सेस करा",
      loading: "लोड होत आहे...",
    },
    search: {
      buttonLabel: "शोधा...",
      placeholder: "कायदे, मूल्यांकन मॉड्यूल, तज्ज्ञ, पृष्ठे शोधा...",
      quickLinks: "लोकप्रिय विषय आणि जलद दुवे",
      noResultsTitle: "कोणतेही निकाल आढळले नाहीत",
      noResultsDesc: "तुमच्या शोधाशी जुळणारी कोणतीही माहिती वेबसाइटवर आढळली नाही.",
      askAiCta: "एआय कायदेशीर सहाय्यकाला विचारा",
      allCategories: "सर्व",
      pagesCategory: "पृष्ठे आणि साधने",
      lawsCategory: "कायदे आणि स्रोत",
      modulesCategory: "मूल्यांकन मॉड्यूल",
      expertsCategory: "तज्ज्ञ आणि पोर्टल",
      legalCategory: "कायदेशीर आणि गोपनीयता",
      navigateHint: "नेव्हिगेट करा",
      selectHint: "निवडा",
      closeHint: "बंद करा",
    },
    nav: {
      brandName: "आयपी शक्ती सहायक",
      home: "मुख्यपृष्ठ",
      assessment: "मूल्यांकन",
      legalCorpus: "कायदेशीर संग्रह",
      expertEscalation: "तज्ज्ञ सहाय्य",
      aiAssistant: "एआय सहाय्यक",
      aboutUs: "आमच्याबद्दल",
      privacyPolicy: "गोपनीयता धोरण",
      termsAndConditions: "नियम आणि अटी",
      teamCodeveda: "टीम कोडवेदा",
      selectLanguage: "भाषा",
      english: "English",
      hindi: "हिन्दी (Hindi)",
      marathi: "मराठी (Marathi)",
      tamil: "தமிழ் (Tamil)",
      telugu: "తెలుగు (Telugu)",
      bengali: "বাংলা (Bengali)",
      kannada: "ಕನ್ನಡ (Kannada)",
      sanskrit: "संस्कृतम् (Sanskrit)",
      gujarati: "ગુજરાતી (Gujarati)",
    },
    home: {
      heroBadge: "कायदेशीर अनुपालनाच्या भविष्यात आपले स्वागत आहे",
      heroTitlePrefix: "सुलभ करा आपले",
      heroTitleHighlight: "आयुर्वेदिक परवाना",
      heroSubtitle:
        "आयपी शक्ती सहायक हा एक बुद्धिमान, एकात्मिक शोध सहाय्यक आहे जो विशेषतः आयुष (AYUSH) क्षेत्रातील नियामक गुंतागुंतींमध्ये आपले मार्गदर्शन करण्यासाठी तयार केला गेला आहे.",
      startAssessment: "मूल्यांकन सुरू करा",
      browseLegalCorpus: "कायदेशीर संग्रह पहा",
      cards: {
        complianceFirst: {
          title: "अनुपालन प्राधान्य",
          desc: "आयुष मंत्रालयाकडे अर्ज सादर करण्यापूर्वी आपण सर्व अनुपालन मानके पूर्ण करत असल्याची खात्री करा. आम्ही नवीनतम नियमांच्या आधारे आपल्या तपशीलांचे स्वयंचलित विश्लेषण करतो.",
        },
        regulatoryClarity: {
          title: "नियामक स्पष्टता",
          desc: "ड्रग्ज अँड कॉस्मेटिक्स कायदा आणि जैविक विविधता कायदा प्रगत एआय विश्लेषणासह सहजपणे समजून घ्या.",
        },
        unifiedIntake: {
          title: "एकात्मिक इनटेक",
          desc: "आपल्या संस्थेचा प्रकार, फॉर्म्युलेशन आणि आवश्यक परवान्यांचे मूल्यांकन करण्याची एकच, सुव्यवस्थित प्रक्रिया.",
        },
        deepSearch: {
          title: "सखोल कायदेशीर संग्रह शोध",
          desc: "आमच्या इनबिल्ट जलद शोधाद्वारे आपण हजारो अधिकृत आयुष नमुने, मार्गदर्शक तत्त्वे आणि टीकेडीएल संदर्भ त्वरित शोधू शकता.",
          cta: "शोध इंजिन वापरा",
        },
      },
    },
    assessment: {
      step: "टप्पा",
      back: "मागे",
      continue: "पुढे जा",
      generateReport: "अनुपालन अहवाल तयार करा",
      selectAtLeastOne: "पुढे जाण्यासाठी कृपया किमान एक पर्याय निवडा",
      analyzingTitle: "प्रोफाइलचे विश्लेषण सुरू आहे",
      analyzingDesc:
        "जागतिक नियामक संरचनेमध्ये सिमेंटिक समानता शोध आणि कायदेशीर विश्लेषण केले जात आहे...",
      failedTitle: "मूल्यांकन अयशस्वी झाले",
      failedDesc: "आपल्या विनंतीवर प्रक्रिया करताना समस्या आली.",
      fieldHelper: {
        title: "आयुष नियामक संदर्भ",
        desc: "प्रथम अनुसूची ग्रंथ आणि भारतीय भेषजसंहिता (आयपीआय) मानकांवर आधारित मार्गदर्शक तत्त्वे.",
      },
    },
    report: {
      riskLevels: {
        low: "कमी जोखीम",
        moderate: "मध्यम जोखीम",
        high: "उच्च जोखीम",
      },
      aiComplete: "एआय मूल्यांकन पूर्ण झाले",
      legalGroundingTitle: "कायदेशीर आधार",
      legalGroundingSubtitle:
        "नियामक संग्रहातून प्राप्त अधिकृत कायदेशीर संदर्भ",
      noCitations: "आपल्या प्रोफाइलशी जुळणारे कोणतेही विशिष्ट संदर्भ आढळले नाहीत.",
      actionPlanTitle: "कृती योजना",
      actionPlanSubtitle: "नियामक अनुपालनासाठी शिफारस केलेले पुढील टप्पे",
      noActions: "कोणत्याही विशिष्ट कृतीची आवश्यकता नाही.",
    },
    chat: {
      badge: "इंटेलिजेंट आरएजी सहाय्यक",
      title: "एआय कायदेशीर सहाय्यक",
      subtitle:
        "त्वरित माहिती आणि नियामक मार्गदर्शनासाठी आमच्या एआय कायदेशीर सहाय्यकाशी सल्लामसलत करा.",
      header: "एआय कायदेशीर सहाय्यक",
      initialGreeting:
        "नमस्कार! मी आपला एआय कायदेशीर सहाय्यक आहे. आज मी आपल्याला काय मदत करू शकतो?",
      inputPlaceholder: "आपला संदेश येथे टाइप करा...",
      thinking: "विचार करत आहे...",
      errorMessage:
        "एआय कायदेशीर सहाय्यकाशी संपर्क साधता आला नाही. कृपया GEMINI_API_KEY कॉन्फिगर केले आहे का ते तपासा.",
    },
    corpus: {
      title: "कायदेशीर संग्रह",
      subtitle:
        "भारतातील मान्यताप्राप्त प्राधिकरणांचे अधिकृत बौद्धिक संपदा डेटाबेस आणि महत्त्वपूर्ण नियामक दस्तऐवज पहा.",
      officialSources: "अधिकृत स्रोत",
      robustGroundedDatabase: "आमचा मजबूत प्रमाणित डेटाबेस",
      sources: [
        {
          acronym: "टीकेडीएल (TKDL)",
          name: "पारंपारिक ज्ञान डिजिटल लायब्ररी",
          desc: "पारंपारिक भारतीय ज्ञानाचा गैरवापर आणि चुकीचे पेटंटिंग रोखण्यासाठी अधिकृत डेटाबेस.",
        },
        {
          acronym: "इंडिया कोड",
          name: "अधिनियम व नियम (इंडिया कोड)",
          desc: "सर्व केंद्रीय आणि राज्य कायद्यांचा अधिकृत डिजिटल संग्रह.",
        },
        {
          acronym: "आयपी इंडिया",
          name: "आयपी इंडिया सार्वजनिक डेटाबेस",
          desc: "पेटंट, ट्रेडमार्क, डिझाइन आणि भौगोलिक संकेत (GI) नोंदणी कार्यालय.",
        },
        {
          acronym: "दस्तऐवज ड्राइव्ह",
          name: "अंतर्गत नियामक दस्तऐवज",
          desc: "नियामक परिपत्रके आणि कायदेशीर फाइल्सच्या अंतर्गत डेटाबेसमध्ये प्रवेश.",
        },
      ],
    },
    expert: {
      badge: "थेट सहाय्य नेटवर्क",
      title: "तज्ज्ञ सहाय्य",
      subtitle:
        "एआय मार्गदर्शन आणि प्रत्यक्ष प्रशासकीय प्रक्रिया यांमधील दरी दूर करा. सत्यापित कायदेशीर सल्लागार आणि नियामक पोर्टल्सशी थेट संपर्क साधा.",
      officialPortalsTitle: "अधिकृत नियामक पोर्टल्स",
      officialPortalsSubtitle: "सरकारी संस्था, वैधानिक निर्देशिका आणि फाइलिंग पोर्टल्स",
      verifiedSpecialistsTitle: "सत्यापित कायदेशीर आणि आयपी विशेषज्ञ",
      verifiedSpecialistsSubtitle: "प्रमाणित नियामक सल्लागारांशी थेट संवाद",
      domainsTitle: "विशेषज्ञ कार्यक्षेत्र आणि सुविधा नेटवर्क",
      domainsSubtitle: "डोमेन विशेषज्ञतेनुसार विशेष कायदेशीर सल्लागारांशी संपर्क साधा",
      bookConsultation: "सल्लामसलत आरक्षित करा",
      callDirectly: "थेट कॉल करा",
      verifiedSpecialist: "सत्यापित विशेषज्ञ",
      consultationNotice:
        "सल्लामसलत सूचना: तज्ज्ञ सुविधा ही संबंधित वैधानिक संस्थांकडे नोंदणीकृत प्रमाणित कायदेशीर वकील, पेटंट एजंट आणि नियामक सल्लागारांमार्फत स्वतंत्रपणे दिली जाते.",
      portals: [
        {
          name: "बार कौन्सिल ऑफ इंडिया वकील शोध",
          acronym: "बीसीआय निर्देशिका",
          desc: "नोंदणीकृत वकील आणि कायदेशीर व्यावसायिकांची पडताळणी करण्यासाठी अधिकृत देशव्यापी निर्देशिका.",
        },
        {
          name: "आयपी इंडिया सार्वजनिक पोर्टल व एजंट शोध",
          acronym: "आयपी इंडिया पोर्टल",
          desc: "पेटंट एजंट आणि फाइलिंगसाठी पेटंट, डिझाइन आणि ट्रेडमार्क महानियंत्रक (CGPDTM) चे अधिकृत पोर्टल.",
        },
        {
          name: "आयुष मंत्रालय कायदेशीर तक्रार निवारण कक्ष",
          acronym: "आयुष हेल्पडेस्क",
          desc: "नियामक स्पष्टीकरण, एएसयू औषध मानके आणि धोरण अनुपालनासाठी अधिकृत मंत्रालय पोर्टल.",
        },
        {
          name: "राष्ट्रीय जैविक विविधता प्राधिकरण (NBA) कक्ष",
          acronym: "एनबीए एबीएस कक्ष",
          desc: "जैविक संसाधनांसाठी प्रवेश आणि लाभ वाटप (ABS) मंजुरींचे व्यवस्थापन करणारी सरकारी संस्था.",
        },
      ],
      experts: [
        {
          name: "तन्वी दुर्गूडे",
          role: "कायदेशीर आणि नियामक विशेषज्ञ",
          desc: "नियामक अनुपालनासाठी तज्ज्ञ सल्ला आणि कायदेशीर मार्गदर्शन प्रदान करण्यात निष्णात. आपल्या कायदेशीर प्रश्नांचे कार्यक्षम निराकरण करण्यासाठी समर्पित.",
        },
        {
          name: "स्वामिनी पूरे",
          role: "आयपी आणि अनुपालन सल्लागार",
          desc: "बौद्धिक संपदा आणि अनुपालन धोरणांमध्ये विशेष प्राविण्य असलेल्या समर्पित कायदेशीर सल्लागार. थेट मार्गदर्शनासाठी उपलब्ध.",
        },
        {
          name: "ममता बिरादार",
          role: "परवाना विशेषज्ञ",
          desc: "जटिल कायदेशीर अडथळे आणि परवाना समस्यांचे निवारण करण्यावर केंद्रित नियामक तज्ज्ञ. तत्काळ मदतीसाठी थेट संपर्क करा.",
        },
      ],
      categories: [
        {
          title: "आयुर्वेदिक पेटंट आणि जीआय वकील",
          badge: "टीकेडीएल आणि पेटंट कायदा",
          location: "नवी दिल्ली / चेन्नई / ऑनलाइन",
          desc: "कलम ३(p) टीकेडीएल आक्षेपांचे निवारण, आयुर्वेदिक पेटंट मसुदा तयार करणे आणि भौगोलिक संकेत (GI) नोंदणीचे तज्ज्ञ.",
          tags: ["पेटंट", "टीकेडीएल", "आक्षेप निवारण"],
        },
        {
          title: "एफएसएसएआय आणि न्यूट्रास्युटिकल कायदेशीर सल्लागार",
          badge: "अन्न सुरक्षा आणि दावे",
          location: "मुंबई / बेंगळुरू / ऑनलाइन",
          desc: "प्रोप्रायटरी फूड नियम, आरोग्य दावे मंजुरी आणि एफएसएसआर २०१७ अनुपालन ऑडिट मधील कायदेशीर तज्ज्ञ.",
          tags: ["एफएसएसएआय", "लेबलिंग", "आरोग्य दावे"],
        },
        {
          title: "एनबीए आणि जैव विविधता कायदा सल्लागार",
          badge: "प्रवेश आणि लाभ वाटप (ABS)",
          location: "चेन्नई / हैदराबाद / ऑनलाइन",
          desc: "भारतीय जैविक संसाधनांच्या व्यावसायिक वापरासाठी फॉर्म १, २, ३ दाखल करण्यात देशी आणि विदेशी संस्थांना मदत करणारे तज्ज्ञ.",
          tags: ["एनबीए", "एबीएस", "जैविक संसाधने"],
        },
        {
          title: "राज्य परवाना प्राधिकरण (SLA) समन्वयक",
          badge: "आयुष औषध परवाना",
          location: "अखिल भारतीय / राज्य केंद्रे",
          desc: "फॉर्म २४D / २५D शास्त्रीय उत्पादन परवाना आणि लोन परवाना (फॉर्म २५E) मिळवण्यासाठी उत्पादकांना मदत करणारे सल्लागार.",
          tags: ["फॉर्म २५D", "जीएमपी", "आयुष परवाना"],
        },
        {
          title: "क्लिनिकल ट्रायल्स आणि सीटीआरआय अनुपालन सल्लागार",
          badge: "क्लिनिकल संशोधन",
          location: "पुणे / अहमदाबाद / ऑनलाइन",
          desc: "न्यू ड्रग्ज रूल्स २०१९ अंतर्गत क्लिनिकल ट्रायल प्रोटोकॉल डिझाइन, एथिक्स कमिटी मंजुरी आणि सीटीआरआय नोंदणी सल्लागार.",
          tags: ["सीटीआरआय", "क्लिनिकल ट्रायल्स", "एथिक्स"],
        },
        {
          title: "आंतरराष्ट्रीय निर्यात आणि फायटोसॅनिटरी सल्लागार",
          badge: "जागतिक अनुपालन",
          location: "कोची / मुंबई / ऑनलाइन",
          desc: "यूएस एफडीए डीशिया (DSHEA), युरोपीय युनियन टीएचएमपीडी आणि सीआयटीईएस (CITES) निर्यात परवान्यांमध्ये तज्ज्ञ वकील.",
          tags: ["एफडीए", "ईयू टीएचएमपीडी", "सीआयटीईएस"],
        },
      ],
    },
    about: {
      title: "आयपी शक्ती सहायक विषयी",
      subtitle:
        "आयुर्वेद बौद्धिक संपदा आणि नियामक मार्गदर्शन सुलभ, सोपे आणि विश्वासार्ह बनवणे.",
      storyTitle: "आमची कथा",
      storySubtitle:
        "आयुर्वेद आयपीआरचे क्लिष्ट जग समजण्यास सोपे करणे",
      storyParagraphs: [
        "आयुर्वेद ही केवळ एक पारंपारिक वैद्यकीय उपचार पद्धती नाही. हा पिढ्यानपिढ्या जतन केलेला शतकानुशतकांचा अनुभव, उपचार पद्धती आणि समाज ज्ञानाचा अमूल्य वारसा आहे. आज उत्साही संशोधक, वैदू आणि नवउद्योजक या प्राचीन ज्ञानाला आधुनिक युगात आणत आहेत.",
        "परंतु या ज्ञानाचे रक्षण करणे आणि त्याशी संबंधित कायदेशीर नियमावली समजून घेणे अत्यंत आव्हानात्मक असू शकते. पेटंट, पारंपारिक ज्ञान, जैव विविधता आणि औषध अनुपालनाचे नियम डझनभर वेगवेगळ्या कायद्यांमध्ये आणि सरकारी पोर्टल्समध्ये विखुरलेले आहेत.",
        "जर आपली कायदेशीर पार्श्वभूमी नसेल, तर आपल्यावर नेमके कोणते नियम लागू होतात हे समजणे कठीण होते. म्हणूनच आम्ही आयपी शक्ती सहायक ची निर्मिती केली.",
        "आयपी शक्ती सहायक हा विशेषतः आयुर्वेद परिसंस्थेसाठी तयार केलेला एक बहुभाषिक एआय सहाय्यक आहे. आमचा उद्देश वकिलांची जागा घेणे हा नसून, ते पहिले महत्त्वपूर्ण पाऊल सोपे, स्पष्ट आणि सहज सुलभ करणे हा आहे.",
      ],
      whyBuiltTitle: "आम्ही आयपी शक्ती सहायक का बनवला",
      whyBuiltIntro:
        "कल्पना करा की आपण एक छोटे आयुर्वेद स्टार्टअप आहात ज्याने एक उत्कृष्ट वनौषधी उत्पादन विकसित केले आहे. आपल्या मनात कदाचित असे प्रश्न असतील:",
      whyBuiltQuestions: [
        '"मी याचे पेटंट घेऊ शकतो का?"',
        '"हे आधीच पारंपारिक ज्ञान मानले गेले आहे का?"',
        '"मला जैव विविधता अनुपालनाची काळजी करावी लागेल का?"',
        '"माझे उत्पादन कायदेशीररित्या औषध, अन्न की सौंदर्यप्रसाधन आहे?"',
      ],
      whyBuiltConclusion:
        "साधारणपणे या प्रश्नांची उत्तरे शोधण्यासाठी महागड्या सल्लागारांची मदत घ्यावी लागते किंवा कठीण कायदेशीर पुस्तके चाळावी लागतात. आयपी शक्ती सहायक ही संपूर्ण प्रक्रिया एका सोप्या, संवादात्मक टप्प्यांत सादर करतो.",
      visionTitle: "आमचा दृष्टिकोन",
      visionSubtitle:
        "एक असे भविष्य जिथे आयुर्वेद संशोधक आत्मविश्वासाने आपल्या ज्ञानाचे रक्षण करू शकतील.",
      visionParagraphs: [
        "आमचा ठाम विश्वास आहे की बौद्धिक संपदा आणि नियम समजून घेणे केवळ महागड्या कायदेशीर सेवा घेऊ शकणाऱ्या लोकांपुरते मर्यादित राहू नये.",
        "आयुर्वेदिक चिकित्सक, संशोधक, विद्यार्थी, शेतकरी, स्टार्टअप संस्थापक, एमएसएमई असोत वा वनौषधी नवसंशोधक—या सर्वांना आपल्या संशोधनाचे संरक्षण आणि जबाबदारीने व्यापारीकरण करण्याच्या मूलभूत गोष्टी समजण्याचा पूर्ण अधिकार आहे.",
      ],
      missionTitle: "आमचे ध्येय",
      missionSubtitle:
        "जटिल कायदेशीर आणि नियामक माहितीचे स्पष्ट, उपयुक्त मार्गदर्शनात रूपांतर करणे.",
      missionIntro:
        "कृत्रिम बुद्धिमत्ता (AI), रिट्रीव्हल-ऑगमेंटेड जनरेशन (RAG), बहुभाषिक तंत्रज्ञान आणि विश्वासार्ह ज्ञानस्रोतांचा वापर करून आयुर्वेद समुदायाला आयपीआर आणि नियामक आवश्यकतांमध्ये मार्गदर्शन करणे हे आमचे ध्येय आहे.",
      pillars: [
        {
          title: "समजून घ्या",
          desc: "वापरकर्त्यांना त्यांचे उत्पादन, फॉर्म्युलेशन आणि आयपी स्थिती स्पष्टपणे समजून घेण्यास मदत करणे.",
        },
        {
          title: "मार्गदर्शन",
          desc: "संबंधित बौद्धिक संपदा, नियामक किंवा एबीएस क्षेत्र त्वरित ओळखणे.",
        },
        {
          title: "पडताळणी",
          desc: "अधिकृत कायदेशीर स्रोत आणि संदर्भांद्वारे पुष्टी केलेली अचूक उत्तरे देणे.",
        },
        {
          title: "सक्षमीकरण",
          desc: "पुढील पावले उचलण्यासाठी किंवा योग्य व्यावसायिकांशी संपर्क साधण्यासाठी वापरकर्त्यांना पूर्ण स्पष्टता देणे.",
        },
      ],
      differentiatorsTitle: "आयपी शक्ती सहायक कशामुळे वेगळा ठरतो?",
      differentiators: [
        {
          title: "उत्तर देण्यापूर्वी शोधणारे एआय",
          content:
            "बहुतांश चॅटबॉट्स जुन्या माहितीवर आधारित अंदाज लावतात. आयपी शक्ती सहायक आरएजी (RAG) द्वारे कार्य करतो. उत्तर देण्यापूर्वी, तो अधिकृत दस्तऐवजांच्या आमच्या ज्ञानकोशात शोध घेतो, ज्यामुळे प्रत्येक उत्तर प्रामाणिक असते.",
        },
        {
          title: "विशेषतः आयुर्वेदासाठी डिझाइन केलेले",
          content:
            "आयपी शक्ती सहायक हा कोणताही सामान्य सहाय्यक नाही. हा विशेषतः आयुर्वेद क्षेत्रातील अद्वितीय आव्हाने—पारंपारिक ज्ञान, जैव विविधता आणि प्रवेश व लाभ वाटप (ABS)—सोडवण्यासाठी तयार केला गेला आहे.",
        },
        {
          title: "उत्पादन वर्गीकरण सर्वप्रथम",
          content:
            "नियम पूर्णपणे यावर अवलंबून असतात की आपले उत्पादन शास्त्रीय औषध आहे, नवीन औषध आहे की न्यूट्रास्युटिकल. म्हणून सल्ला देण्यापूर्वी प्रणाली काही प्रश्नांद्वारे उत्पादनाचा संदर्भ समजून घेते.",
        },
        {
          title: "अधिकारक्षेत्रांचे स्पष्ट विभाजन",
          content:
            "भारतात जे लागू होते ते परदेशात वेगळे असू शकते. आमची प्रणाली भारतीय कायद्यांना ट्रिप्स (TRIPS) किंवा विप्रो/विपो (WIPO) सारख्या आंतरराष्ट्रीय नियमावलींपासून स्पष्टपणे वेगळे ठेवते.",
        },
        {
          title: "एबीएस आणि जैव विविधता मार्गदर्शन",
          content:
            "औषधी वनस्पती आणि पारंपारिक ज्ञानाच्या वापरावर प्रवेश आणि लाभ वाटप (ABS) मार्गदर्शक तत्त्वे लागू होतात. हे नियम आपल्यावर लागू होतात की नाही हे ठरवण्यात प्रणाली मदत करते.",
        },
        {
          title: "पारंपारिक ज्ञान आणि पूर्व कला (Prior Art)",
          content:
            "नवीन शोध आणि अस्तित्वात असलेले पारंपारिक ज्ञान यातील फरक समजणे महत्त्वाचे आहे. प्रणाली आपल्याला टीकेडीएल (TKDL) सारख्या डेटाबेसकडे निर्देशित करते जेणेकरून आपली कल्पना खरोखर नवीन आहे की नाही हे समजू शकेल.",
        },
        {
          title: "मूळतः बहुभाषिक रचना",
          content:
            "कायद्याची भाषा कठीण असते. आपल्याला आपल्या पसंतीच्या भाषेत प्रश्न विचारण्याचा आणि उत्तरे मिळवण्याचा पूर्ण अधिकार आहे. आम्ही ही प्रणाली सर्वांसाठी सहज सुलभ बनवण्यासाठी कार्यरत आहोत.",
        },
        {
          title: "पडताळणीयोग्य आणि संदर्भ-आधारित उत्तरे",
          content:
            "नियामक बाबींमध्ये विश्वासार्हता सर्वोच्च असते. प्रत्येक उत्तरासोबत संदर्भ, अचूक कायदे आणि उद्धरणे दिली जातात जेणेकरून आपण स्वतः मूळ स्रोतांकडून पडताळणी करू शकाल.",
        },
        {
          title: "मानवी तज्ज्ञ थेट सहाय्य (Escalation)",
          content:
            "जेव्हा एखादा प्रश्न अतिशय क्लिष्ट किंवा संवेदनशील असतो, तेव्हा प्रणाली अंदाज बांधत नाही. ती योग्य आदर ठेवून आपल्याला अनुभवी मानवी आयपी विशेषज्ञ आणि सल्लागारांशी जोडते.",
        },
      ],
      howItWorksTitle: "आमचा स्मार्ट दृष्टिकोन",
      howItWorksSubtitle: "आयपी शक्ती सहायक कसे कार्य करतो",
      steps: [
        {
          title: "आपण कशावर काम करत आहात ते सांगा",
          desc: "आपल्या आयुर्वेद उत्पादनाचे, फॉर्म्युलेशनचे किंवा नियामक प्रश्नाचे आपल्या शब्दांत थोडक्यात वर्णन करा.",
        },
        {
          title: "समजून घ्या आणि वर्गीकरण करा",
          desc: "आयपी शक्ती सहायक आपल्या उत्पादनाचा नेमका संदर्भ समजण्यासाठी काही झटपट प्रश्न विचारेल.",
        },
        {
          title: "संबंधित क्षेत्र ओळखा",
          desc: "प्रणाली हे शोधून काढते की आपली बाब पेटंट, ट्रेडमार्क, औषध नियम किंवा एबीएसशी संबंधित आहे.",
        },
        {
          title: "विश्वासार्ह माहिती मिळवा",
          desc: "आमचे RAG इंजिन सर्वात योग्य नियम शोधण्यासाठी कायदे आणि अधिकृत नोंदींची तपासणी करते.",
        },
        {
          title: "सुलभ उत्तर तयार करा",
          desc: "आयपी शक्ती सहायक क्लिष्ट कायदेशीर माहितीचे सोप्या, समजण्याजोग्या सल्ल्यात रूपांतर करतो.",
        },
        {
          title: "स्रोत आणि संदर्भ दाखवा",
          desc: "आपल्याला अधिकृत स्रोतांच्या थेट संदर्भांसह स्पष्ट उत्तर मिळते.",
        },
        {
          title: "पुढील पावलांसाठी मार्गदर्शन",
          desc: "प्रकरण गुंतागुंतीचे असल्यास, आम्ही प्रक्रिया पुढे नेण्यासाठी मानवी तज्ज्ञाकडे मार्गदर्शन करतो.",
        },
      ],
    },
    privacy: {
      title: "गोपनीयता धोरण",
      subtitle:
        "माहिती सार्वभौमत्व, सत्र विलगीकरण आणि ऑपरेशनल गोपनीयतेचे नियमन करणारी सर्वसमावेशक चौकट.",
      tldrLabel: "थोडक्यात सारांश (TL;DR)",
      sections: [
        {
          id: "introduction",
          title: "प्रस्तावना",
          tldr: "आयपी शक्ती सहायक संवेदनशील बौद्धिक संपदा आणि पारंपारिक ज्ञान कडक शैक्षणिक आणि गोपनीयता सुरक्षा उपायांसह हाताळतो.",
          tags: ["आढावा", "कटिबद्धता"],
          metadata: { "प्रभावी तारीख": "सप्टेंबर २०२६", "सुरक्षा स्तर": "मानक" },
          paragraphs: [
            "आयपी शक्ती सहायक मध्ये आपले स्वागत आहे, जो आयुर्वेद, बौद्धिक संपदा हक्क (IPR), प्रवेश आणि लाभ वाटप (ABS), आणि नियामक चौकटींवर मार्गदर्शन करणारा प्रगत एआय सहाय्यक आहे. आमची पायाभूत सुविधा अत्यंत गोपनीय शैक्षणिक अनुभव देण्यासाठी तयार केली गेली आहे.",
            "आम्ही आपले प्रश्न आणि दस्तऐवज केवळ अचूक, समर्पक आणि प्रामाणिक उत्तरे तयार करण्यासाठीच वापरतो. आपला संवाद सुरक्षित सत्रांमध्ये पूर्णपणे वेगळा राहतो आणि तो बाहेरील विपणन संस्थांना कधीही विकला जात नाही किंवा अयोग्यरित्या गोळा केला जात नाही.",
          ],
        },
        {
          id: "data-privacy",
          title: "डेटा आणि गोपनीयता",
          tldr: "संवेदनशील बौद्धिक संपदा डेटाच्या संरक्षणासाठी वापरकर्ता सत्रे पूर्णपणे वेगळी ठेवली जातात.",
          tags: ["सत्र विलगीकरण", "गोपनीयता प्राधान्य"],
          metadata: { "पुनरावलोकन स्थिती": "ऑडिट केलेले", "चौकट": "झिरो-ट्रस्ट" },
          paragraphs: [
            "आयपी शक्ती सहायक गोपनीयता-प्रथम दृष्टिकोनातून डिझाइन केला गेला आहे जेणेकरून वापरकर्ता माहितीचा संग्रह आणि प्रक्रिया पूर्णपणे जबाबदारीने होईल. हा मंच बौद्धिक संपदा, पारंपारिक ज्ञान आणि नियामक प्रश्न हाताळत असल्यामुळे डेटा सुरक्षा हा आमच्या प्रणालीचा मुख्य गाभा आहे.",
            "आम्ही समजतो की या मंचावर विचारल्या जाणाऱ्या प्रश्नांमध्ये गोपनीय कल्पना असू शकतात. म्हणूनच आमची डेटा पाइपलाइन वेगवेगळ्या वापरकर्ता खात्यांमध्ये डेटा मिसळण्यास सक्त मनाई करते. सर्व प्रक्रिया पूर्णपणे सुरक्षित वातावरणात होतात.",
            "आमचे सुरक्षा पथक आधुनिक मानकांनुसार नियमांचे सातत्याने पुनरावलोकन करते जेणेकरून आपल्या संवादाचा इतिहास कधीही कोणत्याही अनधिकृत व्यक्ती किंवा बाह्य घटकासमोर उघड होणार नाही.",
          ],
        },
        {
          id: "data-minimization",
          title: "किमान डेटा संग्रह",
          tldr: "आम्ही केवळ कायदेशीर आणि नियामक प्रश्नांवर प्रक्रिया करण्यासाठी अत्यंत आवश्यक असलेला डेटाच गोळा करतो.",
          tags: ["किमान संग्रह", "स्वयंचलित स्वच्छता"],
          metadata: { "डेटा मर्यादा": "कडक", "स्वच्छता चक्र": "स्वयंचलित" },
          paragraphs: [
            "आमची प्रणाली केवळ तीच माहिती गोळा करण्याच्या तत्त्वाचे पालन करते जी संबंधित आयुर्वेद, आयपीआर आणि नियामक मार्गदर्शन देण्यासाठी अत्यंत आवश्यक आहे. अनावश्यक वैयक्तिक किंवा संवेदनशील माहिती कधीही मागितली जात नाही.",
            "जेव्हा आपण प्रणालीशी संवाद साधता, तेव्हा आम्ही अनावश्यक मेटाडेटा नोंदवणे टाळतो. संवादादरम्यान प्राप्त होणारा कोणताही अतिरिक्त डेटा स्वयंचलित प्रक्रियेद्वारे नियमितपणे हटवला जातो.",
            "डेटा कमी ठेवण्याच्या या कडक नियमामुळे आमचा डिजिटल पदचिन्ह किमान राहतो आणि वापरकर्त्याची गोपनीयता सुरक्षित राहते.",
          ],
        },
        {
          id: "user-data-protection",
          title: "वापरकर्ता डेटा संरक्षण",
          tldr: "सर्व वापरकर्ता डेटा उद्योग-मानक एन्क्रिप्शन आणि रीअल-टाइम अनधिकृत प्रवेश देखरेखीसह सुरक्षित आहे.",
          tags: ["एन्क्रिप्शन", "सक्रिय देखरेख"],
          metadata: { "एन्क्रिप्शन": "AES-256", "देखरेख": "२४/७ सक्रिय" },
          paragraphs: [
            "वैयक्तिक माहिती आणि सामग्रीचे अनधिकृत प्रवेश, प्रकटीकरण किंवा गैरवापरापासून संरक्षण करण्यासाठी योग्य सुरक्षा उपायांसह हाताळणी केली जाते. आम्ही डेटा ट्रान्समिशन आणि स्टोरेज या दोन्हींमध्ये आधुनिक एन्क्रिप्शन वापरतो.",
            "आमच्या पायाभूत संरचनेत व्यापक ॲक्सेस लॉग्स आणि रीअल-टाइम मॉनिटरिंग प्रणाली समाविष्ट आहे जी अनधिकृत प्रवेशाचे प्रयत्न त्वरित ओळखून ते रोखते.",
            "एखाद्या दुर्मिळ सुरक्षा समस्येच्या वेळी, आमचे प्रतिसाद प्रोटोकॉल प्रभावित भाग त्वरित सुरक्षित करण्यासाठी डिझाइन केलेले आहेत. आपल्या डेटाची सुरक्षितता राखणे ही आमची सर्वोच्च प्राथमिकता आहे.",
          ],
        },
        {
          id: "confidential-information",
          title: "गोपनीय माहितीचे संरक्षण",
          tldr: "वापरकर्त्यांना ठाम सल्ला दिला जातो की त्यांनी नोंदणी नसलेले व्यावसायिक गुपिते किंवा अचूक रासायनिक प्रमाण प्रविष्ट करू नये.",
          tags: ["व्यावसायिक गुपिते", "दक्षता"],
          metadata: { "जोखीम पातळी": "उच्च", "मार्गदर्शक तत्त्व": "सामान्य प्रश्न विचारा" },
          paragraphs: [
            "वापरकर्त्यांना स्पष्टपणे कळवले जाते की अप्रकाशित शोध, व्यावसायिक गुपिते, मालकीचे फॉर्म्युलेशन आणि संवेदनशील व्यावसायिक माहिती प्रणालीमध्ये प्रविष्ट करण्याची आवश्यकता नाही.",
            "अत्यंत संवेदनशील फॉर्म्युलेशनच्या बाबतीत आम्ही वापरकर्त्यांना सामान्य नियामक तत्त्वांवर आधारित प्रश्न विचारण्याचा सल्ला देतो, ज्यामुळे व्यावसायिक गुपितांवर आपले पूर्ण नियंत्रण राहील.",
            "हा मंच कायद्यांचे स्पष्टीकरण देण्यासाठी आहे, अप्रकाशित बौद्धिक संपदेचा सुरक्षित लॉकर म्हणून नाही. हा फरक पाळल्यास आपल्या मालकी हक्कांचे रक्षण होते.",
          ],
        },
        {
          id: "secure-transmission",
          title: "सुरक्षित डेटा ट्रान्समिशन",
          tldr: "सर्व संप्रेषण प्रगत HTTPS आणि TLS क्रिप्टोग्राफिक प्रोटोकॉलद्वारे संरक्षित आहे.",
          tags: ["HTTPS", "TLS 1.3"],
          metadata: { "प्रोटोकॉल": "कडक TLS", "प्रमाणपत्र": "स्वयं-नूतनीकरण" },
          paragraphs: [
            "वापरकर्ता आणि मंच यांच्यातील सर्व संप्रेषण सुरक्षित प्रोटोकॉलचा वापर करते. हे प्रोटोकॉल आपल्या ब्राउझर आणि आमच्या सर्व्हर दरम्यान एक अभेद्य सुरक्षा मार्ग तयार करतात.",
            "आम्ही केवळ सुरक्षित कनेक्शन स्वीकारतो आणि जुन्या किंवा असुरक्षित प्रोटोकॉलद्वारे संप्रेषणाचे कोणतेही प्रयत्न नाकारतो.",
            "आधुनिक तांत्रिक धोक्यांपासून पुढे राहण्यासाठी आमचे सुरक्षा प्रमाणपत्र नियमितपणे नूतनीकृत केले जातात.",
          ],
        },
        {
          id: "user-control",
          title: "वापरकर्ता नियंत्रण आणि संमती",
          tldr: "सर्व अतिरिक्त डेटा प्रक्रियेसाठी वापरकर्त्याची स्पष्ट संमती आवश्यक आहे जी कधीही मागे घेतली जाऊ शकते.",
          tags: ["संमती", "नियंत्रण"],
          metadata: { "डीफॉल्ट स्थिती": "ऑप्ट-आउट", "रद्द करणे": "तात्काळ" },
          paragraphs: [
            "वापरकर्त्यांचे त्यांच्या माहितीवर आणि परवानग्यांवर पूर्ण नियंत्रण असते. मूलभूत सेवेव्यतिरिक्त इतर कोणत्याही प्रक्रियेपूर्वी स्पष्ट संमती घेतली जाते.",
            "आमचा इंटरफेस परवानगी व्यवस्थापन सोपे आणि पारदर्शक बनवतो. वापरकर्ते कोणतीही अडचण न येता कधीही आपल्या परवानग्या बदलू शकतात किंवा मागे घेऊ शकतात.",
            "आम्ही सक्रिय संमतीच्या तत्त्वावर काम करतो. ज्या सुविधांसाठी अतिरिक्त डेटा प्रवेश आवश्यक असतो, त्या डीफॉल्टनुसार बंद असतात.",
          ],
        },
        {
          id: "access-deletion",
          title: "डेटा प्रवेश आणि हटवणे",
          tldr: "वापरकर्त्यांना त्यांचा इतिहास पाहणे, निर्यात करणे किंवा कायमचे हटवण्याचे पूर्ण स्वातंत्र्य आहे.",
          tags: ["हटवणे", "पोर्टेबिलिटी"],
          metadata: { "प्रक्रिया वेळ": "तात्काळ", "हटवणे": "पूर्ण" },
          paragraphs: [
            "हा मंच वापरकर्त्यांना त्यांच्या संग्रहित माहितीचे व्यवस्थापन करणे, चुका दुरुस्त करणे आणि आवश्यक असल्यास पूर्ण डेटा हटवण्याची सोय देतो.",
            "आपण मंचाचा वापर थांबवण्याचा निर्णय घेतल्यास, आपण संपूर्ण डेटा हटवण्याची प्रक्रिया सुरू करू शकता. यामुळे आपले प्रश्न आणि नोंदी डेटाबेसमधून कायमच्या नष्ट केल्या जातात.",
            "आमचा असा विश्वास आहे की डेटाची खरी मालकी वापरकर्त्याचीच असते. आम्ही खुल्या आणि सुलभ फॉरमॅटमध्ये डेटा निर्यात करण्याचा पर्यायही देतो.",
          ],
        },
        {
          id: "third-party-audits",
          title: "तृतीय-पक्ष ऑडिट आणि अनुपालन",
          tldr: "नियामक अनुपालन आणि सुरक्षिततेची खात्री करण्यासाठी प्रणालीचे वेळोवेळी स्वतंत्र मूल्यांकन केले जाते.",
          tags: ["ऑडिट", "अनुपालन"],
          metadata: { "वारंवारता": "त्रैमासिक", "मानक": "ISO 27001" },
          paragraphs: [
            "आमच्या सुरक्षा मानकांची पडताळणी करण्यासाठी, आम्ही आमच्या सिस्टीम आर्किटेक्चरचे वेळोवेळी स्वतंत्र सुरक्षा आणि अनुपालन ऑडिट करून घेतो.",
            "हे स्वतंत्र मूल्यांकन आंतरराष्ट्रीय सुरक्षा मानकांनुसार आमच्या एन्क्रिप्शन आणि डेटा विलगीकरण प्रणालींची कठोर चाचणी घेतात.",
            "बाह्य पुनरावलोकनाद्वारे, आम्ही आमच्या वापरकर्त्यांना तांत्रिक सुदृढतेची आणि व्यावसायिकतेची खात्री देतो.",
          ],
        },
        {
          id: "policy-updates",
          title: "धोरण अद्यतने आणि सूचना",
          tldr: "गोपनीयता धोरणातील महत्त्वाच्या बदलांची माहिती ॲपमधील घोषणांद्वारे आगाऊ दिली जाते.",
          tags: ["पारदर्शकता", "सातत्य"],
          metadata: { "सूचना कालावधी": "३० दिवस", "माध्यम": "ॲप-मधील" },
          paragraphs: [
            "कायदेशीर वातावरण बदलत असताना आणि आमची पायाभूत सुविधा अद्ययावत होत असताना, या गोपनीयता धोरणात सुधारणा केली जाऊ शकते.",
            "आम्ही पूर्ण पारदर्शकता राखण्यासाठी कटिबद्ध आहोत. डेटा व्यवस्थापनावर परिणाम करणाऱ्या कोणत्याही मोठ्या बदलाच्या वेळी, आगाऊ ॲप-मधील सूचना आणि सारांश दिला जाईल.",
            "सुधारित अटी प्रसिद्ध झाल्यानंतर मंचाचा पुढील वापर म्हणजे त्या अद्यतनित धोरणांची स्वीकृती मानली जाईल.",
          ],
        },
      ],
    },
    terms: {
      title: "नियम आणि अटी",
      subtitle:
        "शैक्षणिक वापर, कायदेशीर मर्यादा आणि जबाबदाऱ्यांचे नियमन करणारी सर्वसमावेशक कायदेशीर चौकट.",
      items: [
        {
          id: 1,
          title: "मंचाचा उद्देश",
          content:
            "आयपी शक्ती सहायक हा आयुर्वेद-संबंधित बौद्धिक संपदा हक्क (IPR), नियामक आवश्यकता, पारंपारिक ज्ञान, जैव विविधता आणि प्रवेश व लाभ वाटप (ABS) या विषयांवर माहितीपूर्ण आणि प्राथमिक मार्गदर्शन देण्यासाठी डिझाइन केलेला एक एआय-सक्षम मंच आहे.",
        },
        {
          id: 2,
          title: "कायदेशीर किंवा व्यावसायिक सल्ला नाही",
          content:
            "आयपी शक्ती सहायक द्वारे दिलेली माहिती केवळ शैक्षणिक आणि माहितीच्या उद्देशासाठी आहे. हा कायदेशीर, नियामक, वैद्यकीय किंवा व्यावसायिक सल्ला नाही आणि तो कोणत्याही पात्र वकील, आयपी व्यावसायिक किंवा नियामक प्राधिकरणाचा पर्याय नाही.",
        },
        {
          id: 3,
          title: "एआय द्वारे तयार केलेली उत्तरे",
          content:
            "हा मंच उत्तरे तयार करण्यासाठी कृत्रिम बुद्धिमत्ता आणि रिट्रीव्हल-ऑगमेंटेड जनरेशन (RAG) चा वापर करतो. प्रणाली विश्वासार्ह माहिती देण्यासाठी डिझाइन केलेली असली तरी, एआय उत्तरांमध्ये त्रुटी किंवा अपूर्ण स्पष्टीकरण असण्याची शक्यता नाकारता येत नाही.",
        },
        {
          id: 4,
          title: "स्रोत-सत्यापित माहिती",
          content:
            "जिथे शक्य असेल तिथे उत्तरांमध्ये अधिकृत कायदे, नियम, नियमने, करार आणि सरकारी डेटाबेसचे संदर्भ समाविष्ट असतात. वापरकर्त्यांना मूळ अधिकृत स्रोतावरून महत्त्वपूर्ण माहितीची पडताळणी करण्याचा सल्ला दिला जातो.",
        },
        {
          id: 5,
          title: "वापरकर्त्याची जबाबदारी",
          content:
            "अचूक माहिती देणे आणि कोणताही कायदेशीर, नियामक किंवा व्यावसायिक निर्णय घेण्यापूर्वी स्वतंत्रपणे मार्गदर्शनाची खात्री करणे ही सर्वस्वी वापरकर्त्याची जबाबदारी आहे.",
        },
        {
          id: 6,
          title: "अधिकारक्षेत्र आणि लागू कायदे",
          content:
            "दिलेले मार्गदर्शन प्रामुख्याने भारतीय कायदे आणि नियामक चौकटींवर (पेटंट कायदा, जैविक विविधता कायदा, ड्रग्ज अँड कॉस्मेटिक्स कायदा) केंद्रित आहे. आंतरराष्ट्रीय दृष्टिकोन केवळ वैचारिक संदर्भासाठी आहेत.",
        },
        {
          id: 7,
          title: "कोणतीही हमी किंवा वॉरंटी नाही",
          content:
            "हा मंच कोणत्याही विशिष्ट कायदेशीर निकालाची, पेटंट मिळण्याची, ट्रेडमार्क मंजुरीची, नियामक परवान्याची किंवा अनुपालन प्रमाणपत्राची हमी देत नाही.",
        },
        {
          id: 8,
          title: "गोपनीय आणि संवेदनशील माहिती",
          content:
            "वापरकर्त्यांनी अप्रकाशित शोध, व्यावसायिक गुपिते, रासायनिक गुणोत्तरे किंवा इतर गोपनीय व्यावसायिक डेटा मंचामध्ये प्रविष्ट करू नये.",
        },
        {
          id: 9,
          title: "पारंपारिक ज्ञान आणि जैव विविधता अनुपालन",
          content:
            "पारंपारिक ज्ञान (TKDL), जैव विविधता कायदा आणि प्रवेश व लाभ वाटप (ABS) यासंबंधीचे मार्गदर्शन शैक्षणिक असून ते वापरकर्त्यांना वैधानिक जबाबदाऱ्यांतून मुक्त करत नाही.",
        },
        {
          id: 10,
          title: "मंचाचे बौद्धिक संपदा हक्क",
          content:
            "आयपी शक्ती सहायक शी संबंधित सर्व सामग्री, आर्किटेक्चर, सॉफ्टवेअर, मॉडेल्स, ब्रँडिंग आणि साहित्य कॉपीराइट व बौद्धिक संपदा कायद्यांद्वारे संरक्षित आहेत.",
        },
        {
          id: 11,
          title: "स्वीकार्य वापर",
          content:
            "वापरकर्ते मंचाचा गैरवापर न करण्यास, त्याच्या घटकांचे रिव्हर्स-इंजिनिअरिंग न करण्यास, दुर्भावनापूर्ण कोड न टाकण्यास किंवा अनधिकृत डेटा स्क्रॅपिंग न करण्यास सहमत आहेत.",
        },
        {
          id: 12,
          title: "तृतीय-पक्ष दुवे आणि बाह्य संदर्भ",
          content:
            "मंचामध्ये बाह्य वेबसाइट किंवा सरकारी पोर्टल्सचे दुवे समाविष्ट असू शकतात. आयपी शक्ती सहायक बाह्य सामग्रीसाठी जबाबदार नाही.",
        },
        {
          id: 13,
          title: "मानवी तज्ज्ञ सहाय्य (Escalation)",
          content:
            "क्लिष्ट प्रकरणांमध्ये मंच मानवी तज्ज्ञ सल्ला घेण्याची शिफारस करू शकतो. अशा शिफारशी म्हणजे औपचारिक मान्यता किंवा वकील-अशील संबंध निर्माण करत नाहीत.",
        },
        {
          id: 14,
          title: "दायित्वाची मर्यादा",
          content:
            "कायद्यानुसार परवानगी असलेल्या कमाल मर्यादेपर्यंत, आयपी शक्ती सहायक आणि त्याचे विकासक मंचाच्या वापरामुळे होणाऱ्या कोणत्याही प्रत्यक्ष, अप्रत्यक्ष किंवा परिणामी नुकसानीसाठी जबाबदार राहणार नाहीत.",
        },
        {
          id: 15,
          title: "डेटा गोपनीयता आणि हाताळणी",
          content:
            "वापरकर्त्यांच्या प्रश्नांवर आमच्या गोपनीयता धोरणानुसार प्रक्रिया केली जाते. वापरकर्ते मान्य करतात की प्रश्न सोडवण्यासाठी ते एआय मॉडेलमधून जातात.",
        },
        {
          id: 16,
          title: "सेवेची उपलब्धता आणि सुधारणा",
          content:
            "हा मंच 'जसा आहे तसा' आणि 'उपलब्धतेनुसार' तत्त्वावर दिला जातो. पूर्वसूचनेशिवाय सुविधा सुधारित, अद्ययावत किंवा तात्पुरत्या स्वरूपात स्थगित केल्या जाऊ शकतात.",
        },
        {
          id: 17,
          title: "अटींमध्ये बदल",
          content:
            "आम्ही कोणत्याही वेळी या नियम आणि अटींमध्ये बदल करण्याचा अधिकार राखून ठेवतो. सुधारित अटी प्रसिद्ध झाल्यानंतर मंचाचा पुढील वापर म्हणजे त्यांची स्वीकृती मानली जाईल.",
        },
        {
          id: 18,
          title: "संपर्क आणि अभिप्राय",
          content:
            "या नियम आणि अटींविषयी काही प्रश्न किंवा अभिप्राय असल्यास, कृपया आमच्या नियुक्त सपोर्ट चॅनेलद्वारे संपर्क साधा.",
        },
      ],
    },
    team: {
      title: "टीम कोडवेदा",
      desc: "हे समर्पित टीम पृष्ठ सध्या रिकामे आहे परंतु आम्ही भविष्यात ते विकसित करू.",
    },
    settings: {
      title: "सेटिंग्ज",
      subtitle: "आपल्या ॲप्लिकेशनची प्राधान्ये व्यवस्थापित करा",
      themeTitle: "स्वरूप आणि थीम",
      themes: {
        saffron: {
          name: "केसरी (हिंदुत्व)",
          desc: "सांसारिक मोहापासून संपूर्ण विरक्ती मिळवण्यासाठी तयार, फक्त एक अतिशय चैतन्यमय आणि पावन भगवा युझर इंटरफेस वगळता. जय श्री राम.",
        },
        blue: {
          name: "प्रगती (भीम)",
          desc: "संपूर्ण राष्ट्रीय राज्यघटना मसुदा तयार करण्यासाठी आवश्यक असलेल्या अढळ बुद्धिमत्तेचा संचार. एक तार्किक थीम जिथे प्रत्येक पिक्सेलला समान हक्क आहेत. जय भीम, जय भारत.",
        },
        green: {
          name: "समृद्धी (उम्माह)",
          desc: "सार्वभौमिक बंधुभाव आणि जागतिक ऐक्याची प्रगल्भ भावना वाढवणे. आपण यात असल्यामुळे जग अधिक शांततामय बनते. अल्लाहु अकबर.",
        },
        dark: {
          name: "अंधकार (डार्क)",
          desc: "ब्रह्मांडीय शून्यता अंगीकारा. त्या क्षणांसाठी जेव्हा आपल्याला जाणवते की सर्व डिजिटल इंटरफेस केवळ माया आहेत आणि आपण आपल्या डोळ्यांना वास्तवाच्या प्रखर प्रकाशापासून वाचवू इच्छिता. अंधेरा कायम रहे.",
        },
      },
    },
  },
  ta: {
    dashboard: {
      badge: "டைனமிக் அனலிட்டிக்ஸ் டாஷ்போர்டு",
      title: "ஆயுஷ் இணக்கம் மற்றும் அபாய பகுப்பாய்வு",
      subtitle: "மதிப்பீட்டு சமர்ப்பிப்புகளிலிருந்து புதுப்பிக்கப்பட்ட நேரடி அபாய அளவீடுகள்.",
      runAssessment: "புதிய மதிப்பீட்டை இயக்கு",
      recentLogsTitle: "சமீபத்திய மதிப்பீட்டு அபாய பதிவுகள்",
      recentLogsSubtitle: "மதிப்பீட்டு படிவத்திலிருந்து சமீபத்திய மதிப்பீடுகள்.",
      tableHeaders: {
        productName: "தயாரிப்பு பெயர்",
        category: "வகை",
        riskScore: "அபாய மதிப்பெண்",
        status: "நிலை",
        audited: "தணிக்கை செய்யப்பட்டது"
      },
      totalAudited: "மொத்த தயாரிப்புகள் தணிக்கை செய்யப்பட்டன",
      highRisk: "உயர் அபாய கொடிகள்",
      clearances: "ஒழுங்குமுறை அனுமதிகள்",
      avgScore: "சராசரி இணக்க மதிப்பெண்",
      liveEvaluation: "நேரடி மதிப்பீடு"
    },
    common: {
      downloadPdf: "PDF பதிவிறக்கம் செய்க",
      exporting: "ஏற்றுமதி செய்யப்படுகிறது...",
      startNewAssessment: "புதிய மதிப்பீட்டைத் தொடங்குக",
      learnMore: "மேலும் அறிக",
      tryAgain: "மீண்டும் முயற்சிக்கவும்",
      accessDatabase: "தரவுத்தளத்தைத் திறக்கவும்",
      accessFile: "கோப்பை அணுகவும்",
      loading: "ஏற்றப்படுகிறது...",
    },
    search: {
      buttonLabel: "தேடு...",
      placeholder: "சட்டங்கள், மதிப்பீட்டு தொகுதிகள், நிபுணர்கள், பக்கங்களைத் தேடுங்கள்...",
      quickLinks: "பிரபலமான தலைப்புகள் & விரைவு இணைப்புகள்",
      noResultsTitle: "பொருத்தமான முடிவுகள் எதுவும் கிடைக்கவில்லை",
      noResultsDesc: "உங்கள் தேடலுக்கு ஏற்ற தகவல் எதுவும் இணையதளத்தில் காணப்படவில்லை.",
      askAiCta: "AI சட்ட உதவியாளரிடம் கேளுங்கள்",
      allCategories: "அனைத்தும்",
      pagesCategory: "பக்கங்கள் & கருவிகள்",
      lawsCategory: "சட்டங்கள் & ஆதாரங்கள்",
      modulesCategory: "மதிப்பீட்டு தொகுதிகள்",
      expertsCategory: "நிபுணர்கள் & போர்ட்டல்கள்",
      legalCategory: "சட்டம் & தனியுரிமை",
      navigateHint: "வழிநடத்து",
      selectHint: "தேர்ந்தெடு",
      closeHint: "மூடு",
    },
    nav: {
      brandName: "ஐபி சக்தி சஹாயக்",
      home: "முகப்பு",
      assessment: "மதிப்பீடு",
      legalCorpus: "சட்டத் தொகுப்பு",
      expertEscalation: "நிபுணர் வழிகாட்டல்",
      aiAssistant: "AI உதவியாளர்",
      aboutUs: "எங்களைப் பற்றி",
      privacyPolicy: "தனியுரிமைக் கொள்கை",
      termsAndConditions: "விதிமுறைகள் & நிபந்தனைகள்",
      teamCodeveda: "குழு கோட்வேதா",
      selectLanguage: "மொழி",
      english: "English",
      hindi: "हिन्दी (Hindi)",
      marathi: "मराठी (Marathi)",
      tamil: "தமிழ் (Tamil)",
      telugu: "తెలుగు (Telugu)",
      bengali: "বাংলা (Bengali)",
      kannada: "ಕನ್ನಡ (Kannada)",
      sanskrit: "संस्कृतम् (Sanskrit)",
      gujarati: "ગુજરાતી (Gujarati)",
    },
    home: {
      heroBadge: "சட்ட இணக்கத்தின் எதிர்காலத்திற்கு உங்களை வரவேற்கிறோம்",
      heroTitlePrefix: "எளிதாக்குங்கள் உங்கள்",
      heroTitleHighlight: "ஆயுர்வேத உரிமத்தை",
      heroSubtitle:
        "ஐபி சக்தி சஹாயக் என்பது ஆயுஷ் (AYUSH) துறையின் சிக்கலான சட்ட விதிமுறைகளில் உங்களுக்கு வழிகாட்ட வடிவமைக்கப்பட்ட அறிவார்ந்த, ஒருங்கிணைந்த மீட்பு உதவியாளர் ஆகும்.",
      startAssessment: "மதிப்பீட்டைத் தொடங்குங்கள்",
      browseLegalCorpus: "சட்டத் தொகுப்பைப் பார்க்கவும்",
      cards: {
        complianceFirst: {
          title: "இணக்கத்திற்கு முன்னுரிமை",
          desc: "ஆயுஷ் அமைச்சகத்தில் விண்ணப்பத்தை சமர்ப்பிப்பதற்கு முன் தேவையான அனைத்து விதிகளையும் பூர்த்தி செய்துள்ளீர்கள் என்பதை உறுதிப்படுத்திக் கொள்ளுங்கள். உங்கள் விவரங்களை தானாகவே பகுப்பாய்வு செய்கிறோம்.",
        },
        regulatoryClarity: {
          title: "ஒழுங்குமுறை தெளிவு",
          desc: "மருந்துகள் & அழகுசாதனப் பொருட்கள் சட்டம் மற்றும் பல்லுயிர் பெருக்கச் சட்டத்தை நவீன AI பகுப்பாய்வு மூலம் எளிதாகப் புரிந்து கொள்ளுங்கள்.",
        },
        unifiedIntake: {
          title: "ஒருங்கிணைந்த பதிவு",
          desc: "உங்கள் நிறுவனத்தின் வகை, மூலிகைக் கலவை மற்றும் தேவையான உரிமங்களை மதிப்பிடுவதற்கான ஒரே, நெறிப்படுத்தப்பட்ட செயல்முறை.",
        },
        deepSearch: {
          title: "ஆழமான சட்டத் தொகுப்பு தேடல்",
          desc: "எங்கள் விரைவு தேடல் கருவி மூலம் ஆயிரக்கணக்கான அதிகாரப்பூர்வ ஆயுஷ் முன்னுதாரணங்கள், வழிகாட்டுதல்கள் மற்றும் டிகேடிஎல் (TKDL) குறிப்புகளை உடனடியாகத் தேடுங்கள்.",
          cta: "தேடுபொறியைப் பயன்படுத்துக",
        },
      },
    },
    assessment: {
      step: "படி",
      back: "பின்செல்",
      continue: "தொடர்க",
      generateReport: "இணக்க அறிக்கையை உருவாக்குக",
      selectAtLeastOne: "தொடர குறைந்தது ஒரு விருப்பத்தைத் தேர்ந்தெடுக்கவும்",
      analyzingTitle: "விவரக்குறிப்பு பகுப்பாய்வு செய்யப்படுகிறது",
      analyzingDesc:
        "உலகளாவிய ஒழுங்குமுறை கட்டமைப்புகளில் சொற்பொருள் ஒற்றுமை தேடல் மற்றும் சட்ட பகுப்பாய்வு செய்யப்படுகிறது...",
      failedTitle: "மதிப்பீடு தோல்வியடைந்தது",
      failedDesc: "உங்கள் கோரிக்கையைச் செயலாக்குவதில் சிக்கல் ஏற்பட்டது.",
      fieldHelper: {
        title: "ஆயுஷ் ஒழுங்குமுறை சூழல்",
        desc: "முதல் அட்டவணை நூல்கள் மற்றும் இந்திய மருந்தகக் குறிப்பேடு (API) தரநிலைகளின் அடிப்படையிலான வழிகாட்டுதல்.",
      },
    },
    report: {
      riskLevels: {
        low: "குறைந்த ஆபத்து",
        moderate: "மிதமான ஆபத்து",
        high: "அதிக ஆபத்து",
      },
      aiComplete: "AI மதிப்பீடு நிறைவடைந்தது",
      legalGroundingTitle: "சட்ட அடிப்படை",
      legalGroundingSubtitle:
        "ஒழுங்குமுறைத் தொகுப்பிலிருந்து பெறப்பட்ட அங்கீகரிக்கப்பட்ட சட்ட மேற்கோள்கள்",
      noCitations: "உங்கள் சுயவிவரத்துடன் பொருந்தக்கூடிய குறிப்பிட்ட மேற்கோள்கள் எதுவும் கிடைக்கவில்லை.",
      actionPlanTitle: "செயல் திட்டம்",
      actionPlanSubtitle: "ஒழுங்குமுறை இணக்கத்திற்கான பரிந்துரைக்கப்பட்ட அடுத்த படிகள்",
      noActions: "குறிப்பிட்ட நடவடிக்கை எதுவும் தேவையில்லை.",
    },
    chat: {
      badge: "அறிவார்ந்த RAG உதவியாளர்",
      title: "AI சட்ட உதவியாளர்",
      subtitle:
        "உடனடி தகவல்கள் மற்றும் ஒழுங்குமுறை வழிகாட்டுதலுக்கு எங்கள் AI சட்ட உதவியாளருடன் கலந்தாலோசிக்கவும்.",
      header: "AI சட்ட உதவியாளர்",
      initialGreeting:
        "வணக்கம்! நான் உங்கள் AI சட்ட உதவியாளர். இன்று உங்களுக்கு எவ்வாறு உதவ முடியும்?",
      inputPlaceholder: "உங்கள் செய்தியை இங்கே உள்ளிடவும்...",
      thinking: "சிந்திக்கிறது...",
      errorMessage:
        "AI சட்ட உதவியாளரைத் தொடர்பு கொள்ள முடியவில்லை. GEMINI_API_KEY உள்ளமைக்கப்பட்டுள்ளதா என்பதை உறுதிப்படுத்தவும்.",
    },
    corpus: {
      title: "சட்டத் தொகுப்பு",
      subtitle:
        "இந்தியாவில் அங்கீகரிக்கப்பட்ட அதிகாரப்பூர்வ அறிவுசார் சொத்துரிமை தரவுத்தளங்கள் மற்றும் முக்கியமான ஒழுங்குமுறை ஆவணங்களைப் பார்வையிடுங்கள்.",
      officialSources: "அதிகாரப்பூர்வ ஆதாரங்கள்",
      robustGroundedDatabase: "எங்கள் வலுவான அடிப்படை தரவுத்தளம்",
      sources: [
        {
          acronym: "டிகேடிஎல் (TKDL)",
          name: "பாரம்பரிய அறிவு டிஜிட்டல் நூலகம்",
          desc: "பாரம்பரிய இந்திய மருத்துவ அறிவு தவறாக காப்புரிமை செய்யப்படுவதைத் தடுக்கும் அதிகாரப்பூர்வ தரவுத்தளம்.",
        },
        {
          acronym: "இந்தியா கோட்",
          name: "சட்டங்கள் & விதிகள் (இந்தியா கோட்)",
          desc: "அனைத்து மத்திய மற்றும் மாநில சட்டங்களின் அதிகாரப்பூர்வ டிஜிட்டல் களஞ்சியம்.",
        },
        {
          acronym: "ஐபி இந்தியா",
          name: "ஐபி இந்தியா பொதுத் தரவுத்தளம்",
          desc: "காப்புரிமைகள், வர்த்தக முத்திரைகள், வடிவமைப்புகள் மற்றும் புவியியல் குறியீடு (GI) பதிவு அலுவலகம்.",
        },
        {
          acronym: "ஆவண டிரைவ்",
          name: "உள் ஒழுங்குமுறை ஆவணங்கள்",
          desc: "அரசு சுற்றறிக்கைகள் மற்றும் சட்டக் கோப்புகளின் உள் தரவுத்தள அணுகல்.",
        },
      ],
    },
    expert: {
      badge: "நேரடி உதவி நெட்வொர்க்",
      title: "நிபுணர் வழிகாட்டல்",
      subtitle:
        "AI வழிகாட்டுதலுக்கும் நேரடி நிர்வாக நடவடிக்கைகளுக்கும் இடையிலான இடைவெளியைக் குறைக்கவும். சரிபார்க்கப்பட்ட வழக்கறிஞர்கள் மற்றும் ஒழுங்குமுறை அதிகாரிகளை நேரடியாகத் தொடர்பு கொள்ளவும்.",
      officialPortalsTitle: "அதிகாரப்பூர்வ ஒழுங்குமுறை இணையதளங்கள்",
      officialPortalsSubtitle: "அரசு அமைப்புகள், சட்டப்பூர்வ கோப்பகங்கள் மற்றும் விண்ணப்ப இணையதளங்கள்",
      verifiedSpecialistsTitle: "சரிபார்க்கப்பட்ட சட்ட & ஐபி நிபுணர்கள்",
      verifiedSpecialistsSubtitle: "சான்றளிக்கப்பட்ட ஒழுங்குமுறை ஆலோசகர்களுடன் நேரடி ஆலோசனை",
      domainsTitle: "துறை நிபுணத்துவம் & வசதி நெட்வொர்க்",
      domainsSubtitle: "துறை நிபுணத்துவத்தின் அடிப்படையில் சட்ட ஆலோசகர்களைத் தொடர்பு கொள்ளவும்",
      bookConsultation: "ஆலோசனையை முன்பதிவு செய்க",
      callDirectly: "நேரடியாக அழைக்கவும்",
      verifiedSpecialist: "சரிபார்க்கப்பட்ட நிபுணர்",
      consultationNotice:
        "ஆலோசனை அறிவிப்பு: பார் கவுன்சில் ஆஃப் இந்தியாவில் பதிவுசெய்யப்பட்ட சான்றளிக்கப்பட்ட வழக்கறிஞர்கள், காப்புரிமை முகவர்கள் மற்றும் ஆலோசகர்களால் சுயாதீனமாக நிபுணர் உதவி வழங்கப்படுகிறது.",
      portals: [
        {
          name: "பார் கவுன்சில் ஆஃப் இந்தியா வழக்கறிஞர் தேடல்",
          acronym: "BCI கோப்பகம்",
          desc: "பதிவுசெய்த வழக்கறிஞர்களின் சான்றுகளைச் சரிபார்ப்பதற்கான அதிகாரப்பூர்வ நாடு தழுவிய கோப்பகம்.",
        },
        {
          name: "ஐபி இந்தியா பொது போர்டல் & முகவர் தேடல்",
          acronym: "ஐபி இந்தியா போர்டல்",
          desc: "காப்புரிமை முகவர்கள் மற்றும் விண்ணப்பங்களுக்கான காப்புரிமை கட்டுப்பாட்டாளர் அலுவலகம் (CGPDTM) போர்டல்.",
        },
        {
          name: "ஆயுஷ் அமைச்சக சட்டப் பிரிவு",
          acronym: "ஆயுஷ் உதவி மையம்",
          desc: "ஒழுங்குமுறை விளக்கங்கள், ASU மருந்து தரநிலைகள் மற்றும் கொள்கை இணக்கத்திற்கான அமைச்சக போர்டல்.",
        },
        {
          name: "தேசிய பல்லுயிர் பெருக்க ஆணையம் (NBA) பிரிவு",
          acronym: "NBA ABS பிரிவு",
          desc: "உயிரியல் வளங்களுக்கான அணுகல் மற்றும் பலன் பகிர்வு (ABS) அனுமதிகளை நிர்வகிக்கும் அரசு அமைப்பு.",
        },
      ],
      experts: [
        {
          name: "வழக்கறிஞர் தன்வி துர்குடே",
          role: "சட்ட மற்றும் ஒழுங்குமுறை நிபுணர்",
          desc: "ஒழுங்குமுறை இணக்கம் மற்றும் சட்ட நுண்ணறிவு வழங்குவதில் நிபுணத்துவம் வாய்ந்தவர். உங்கள் சட்ட வினாக்களுக்கு திறம்பட தீர்வு காண அர்ப்பணிக்கப்பட்டவர்.",
        },
        {
          name: "வழக்கறிஞர் சுவாமினி பூரே",
          role: "ஐபி மற்றும் இணக்க ஆலோசகர்",
          desc: "அறிவுசார் சொத்துரிமை மற்றும் இணக்க உத்திகளில் நிபுணத்துவம் பெற்ற வழக்கறிஞர். நேரடி வழிகாட்டுதலுக்குக் கிடைக்கிறார்.",
        },
        {
          name: "வழக்கறிஞர் மம்தா பிராதார்",
          role: "உரிம நிபுணர்",
          desc: "சிக்கலான சட்டத் தடைகள் மற்றும் உரிமப் பிரச்சனைகளைத் தீர்ப்பதில் கவனம் செலுத்தும் ஒழுங்குமுறை ஆலோசகர். உடனடி உதவிக்கு நேரடியாகத் தொடர்பு கொள்ளவும்.",
        },
      ],
      categories: [
        {
          title: "ஆயுர்வேத காப்புரிமை & ஜிஐ வழக்கறிஞர்கள்",
          badge: "டிகேடிஎல் & காப்புரிமை சட்டம்",
          location: "புது தில்லி / சென்னை / ஆன்லைன்",
          desc: "பிரிவு 3(p) டிகேடிஎல் மறுப்புகள், ஆயுர்வேத காப்புரிமை வரைவு மற்றும் புவியியல் குறியீடு (GI) பதிவு நிபுணர்கள்.",
          tags: ["காப்புரிமை", "டிகேடிஎல்", "மறுப்புத் தீர்வு"],
        },
        {
          title: "FSSAI & நியூட்ராசூட்டிகல் சட்ட ஆலோசகர்கள்",
          badge: "உணவுப் பாதுகாப்பு & கூற்றுக்கள்",
          location: "மும்பை / பெங்களூரு / ஆன்லைன்",
          desc: "தனியுரிம உணவு விதிகள், சுகாதாரக் கூற்று அனுமதிகள் மற்றும் FSSR 2017 இணக்க தணிக்கை நிபுணர்கள்.",
          tags: ["FSSAI", "லேபிளிங்", "சுகாதாரக் கூற்றுக்கள்"],
        },
        {
          title: "NBA & பல்லுயிர் சட்டம் ஆலோசகர்கள்",
          badge: "அணுகல் & பலன் பகிர்வு (ABS)",
          location: "சென்னை / ஹைதராபாத் / ஆன்லைன்",
          desc: "இந்திய உயிரியல் வளங்களின் வணிகப் பயன்பாட்டிற்கான படிவம் 1, 2, 3 சமர்ப்பிப்பில் நிறுவனங்களுக்கு வழிகாட்டும் நிபுணர்கள்.",
          tags: ["NBA", "ABS", "உயிரியல் வளங்கள்"],
        },
        {
          title: "மாநில உரிம ஆணையம் (SLA) ஒருங்கிணைப்பாளர்கள்",
          badge: "ஆயுஷ் மருந்து உரிமம்",
          location: "அனைத்து மாநிலங்கள் / மையங்கள்",
          desc: "படிவம் 24D / 25D பாரம்பரிய உற்பத்தி உரிமம் மற்றும் கடன் உரிமம் (படிவம் 25E) பெற உற்பத்தியாளர்களுக்கு உதவும் ஆலோசகர்கள்.",
          tags: ["படிவம் 25D", "GMP", "ஆயுஷ் உரிமம்"],
        },
        {
          title: "மருத்துவ பரிசோதனைகள் & CTRI இணக்க ஆலோசகர்கள்",
          badge: "மருத்துவ ஆராய்ச்சி",
          location: "புனே / அகமதாபாத் / ஆன்லைன்",
          desc: "புதிய மருந்துகள் விதிகள் 2019 இன் கீழ் மருத்துவ சோதனை வடிவமைப்பு, நெறிமுறைக் குழு ஒப்புதல் மற்றும் CTRI பதிவு ஆலோசகர்கள்.",
          tags: ["CTRI", "மருத்துவ பரிசோதனை", "நெறிமுறைகள்"],
        },
        {
          title: "சர்வதேச ஏற்றுமதி & தாவர சுகாதாரம் ஆலோசகர்கள்",
          badge: "உலகளாவிய இணக்கம்",
          location: "கொச்சி / சென்னை / ஆன்லைன்",
          desc: "அமெரிக்க FDA DSHEA, ஐரோப்பிய ஒன்றிய THMPD மற்றும் CITES ஏற்றுமதி அனுமதிகளில் நிபுணத்துவம் பெற்ற வழக்கறிஞர்கள்.",
          tags: ["FDA", "EU THMPD", "CITES"],
        },
      ],
    },
    about: {
      title: "ஐபி சக்தி சஹாயக் பற்றி",
      subtitle:
        "ஆயுர்வேத அறிவுசார் சொத்துரிமை மற்றும் ஒழுங்குமுறை வழிகாட்டுதலை எளிமையாகவும், அணுகக்கூடியதாகவும், நம்பகமானதாகவும் மாற்றுதல்.",
      storyTitle: "எங்கள் கதை",
      storySubtitle:
        "ஆயுர்வேத ஐபிஆர் உலகத்தை எளிதாகப் புரிந்துகொள்ளச் செய்தல்",
      storyParagraphs: [
        "ஆயுர்வேதம் என்பது ஒரு பாரம்பரிய மருத்துவ முறை மட்டுமல்ல. இது பல தலைமுறைகளாகப் பாதுகாக்கப்பட்ட பல நூற்றாண்டுகளின் ஞானம், சிகிச்சை முறைகள் மற்றும் சமூக அறிவின் விலைமதிப்பற்ற பொக்கிஷம் ஆகும். இன்று புதிய கண்டுபிடிப்பாளர்களும் ஸ்டார்ட்அப்களும் இந்த பண்டைய அறிவை நவீன உலகிற்கு கொண்டு வருகிறார்கள்.",
        "ஆனால் அந்த அறிவைப் பாதுகாப்பதும் அது தொடர்பான சட்ட விதிகளைப் புரிந்துகொள்வதும் கடினமாக இருக்கலாம். காப்புரிமை, பாரம்பரிய அறிவு, பல்லுயிர் பெருக்கம் மற்றும் மருந்து இணக்க விதிகள் டஜன் கணக்கான வெவ்வேறு சட்டங்களிலும் அரசாங்க போர்ட்டல்களிலும் சிதறிக்கிடக்கின்றன.",
        "சட்டப் பின்னணி இல்லாதவர்களுக்கு எந்த விதிகள் தங்களுக்குப் பொருந்தும் என்பதைப் புரிந்துகொள்வது கடினம். இதற்காகவே நாங்கள் ஐபி சக்தி சஹாயக் தளத்தை உருவாக்கினோம்.",
        "ஐபி சக்தி சஹாயக் என்பது ஆயுஷ் சூழல் அமைப்பிற்காக பிரத்யேகமாக வடிவமைக்கப்பட்ட பலமொழி AI உதவியாளர் ஆகும். வழக்கறிஞர்களுக்கு மாற்றாக இருப்பது எங்கள் நோக்கமல்ல, மாறாக அந்த முதல் முக்கியமான படியை எளிமையாகவும் தெளிவாகவும் மாற்றுவதே எங்கள் நோக்கம்.",
      ],
      whyBuiltTitle: "நாங்கள் ஐபி சக்தி சஹாயக் தளத்தை ஏன் உருவாக்கினோம்",
      whyBuiltIntro:
        "சிறந்த மூலிகைப் பொருளை உருவாக்கிய ஒரு சிறிய ஆயுர்வேத ஸ்டார்ட்அப் நீங்கள் என்று கற்பனை செய்து பாருங்கள். உங்கள் மனதில் இந்தக் கேள்விகள் இருக்கலாம்:",
      whyBuiltQuestions: [
        '"நான் இதற்கு உண்மையில் காப்புரிமை பெற முடியுமா?"',
        '"இது ஏற்கனவே பாரம்பரிய அறிவாகக் கருதப்படுகிறதா?"',
        '"நான் பல்லுயிர் இணக்கம் குறித்து கவலைப்பட வேண்டுமா?"',
        '"எனது தயாரிப்பு சட்டப்பூர்வமாக மருந்தா, உணவா அல்லது அழகுசாதனப் பொருளா?"',
      ],
      whyBuiltConclusion:
        "பொதுவாக இந்தக் கேள்விகளுக்கு விடை காண விலையுயர்ந்த ஆலோசகர்களை அணுக வேண்டும் அல்லது சிக்கலான சட்டப் புத்தகங்களை ஆராய வேண்டும். ஐபி சக்தி சஹாயக் இந்த முழு செயல்முறையையும் ஒரு எளிய உரையாடல் மூலம் வழங்குகிறது.",
      visionTitle: "எங்கள் தொலைநோக்கு",
      visionSubtitle:
        "ஆயுர்வேத கண்டுபிடிப்பாளர்கள் தங்கள் அறிவை நம்பிக்கையுடன் பாதுகாக்கும் ஒரு எதிர்காலம்.",
      visionParagraphs: [
        "அறிவுசார் சொத்து மற்றும் சட்ட விதிகளைப் புரிந்துகொள்வது விலையுயர்ந்த சட்டச் சேவைகளை அணுகக்கூடியவர்களுக்கு மட்டுமே உரியதாக இருக்கக்கூடாது என்று நாங்கள் நம்புகிறோம்.",
        "ஆயுர்வேத மருத்துவர், ஆராய்ச்சியாளர், மாணவர், விவசாயி, ஸ்டார்ட்அப் நிறுவனர் என அனைவரும் தங்கள் பணிகளைப் பாதுகாக்கவும் சட்டப்படி வணிகமயமாக்கவும் அடிப்படை விதிகளைப் புரிந்து கொள்ளும் திறன் பெற்றிருக்க வேண்டும்.",
      ],
      missionTitle: "எங்கள் நோக்கம்",
      missionSubtitle:
        "சிக்கலான சட்ட மற்றும் ஒழுங்குமுறை தகவல்களை தெளிவான, பயனுள்ள வழிகாட்டுதலாக மாற்றுதல்.",
      missionIntro:
        "செயற்கை நுண்ணறிவு (AI), மீட்டெடுப்பு-அதிகரித்த உருவாக்கம் (RAG), பன்மொழி தொழில்நுட்பங்கள் மற்றும் நம்பகமான ஆதாரங்களைப் பயன்படுத்தி ஆயுஷ் சமூகத்திற்கு ஐபிஆர் மற்றும் ஒழுங்குமுறை தேவைகளில் வழிகாட்டுவதே எங்கள் பணியாகும்.",
      pillars: [
        {
          title: "புரிந்துகொள்ளுதல்",
          desc: "பயனர்கள் தங்கள் தயாரிப்பு, கலவை மற்றும் ஐபி நிலையைத் தெளிவாகப் புரிந்து கொள்ள உதவுதல்.",
        },
        {
          title: "வழிகாட்டுதல்",
          desc: "தொடர்புடைய அறிவுசார் சொத்து, ஒழுங்குமுறை அல்லது ஏபிஎஸ் துறையை உடனடியாக அடையாளம் காணுதல்.",
        },
        {
          title: "சரிபார்த்தல்",
          desc: "அதிகாரப்பூர்வ சட்ட ஆதாரங்கள் மற்றும் மேற்கோள்களால் ஆதரிக்கப்படும் துல்லியமான பதில்களை வழங்குதல்.",
        },
        {
          title: "அதிகாரமளித்தல்",
          desc: "அடுத்த நடவடிக்கைகளை எடுக்க அல்லது சரியான நிபுணரைத் தொடர்பு கொள்ள பயனர்களுக்கு முழு தெளிவை வழங்குதல்.",
        },
      ],
      differentiatorsTitle: "ஐபி சக்தி சஹாயக் தனித்து நிற்பது ஏன்?",
      differentiators: [
        {
          title: "பதிலளிக்கும் முன் தேடும் AI",
          content:
            "பெரும்பாலான சாட்போட்கள் பழைய தகவல்களின் அடிப்படையில் யூகிக்கின்றன. ஐபி சக்தி சஹாயக் RAG மூலம் செயல்படுகிறது. பதிலளிப்பதற்கு முன் அதிகாரப்பூர்வ ஆவணங்களின் களஞ்சியத்தில் தேடுகிறது, எனவே ஒவ்வொரு பதிலும் உண்மையானது.",
        },
        {
          title: "ஆயுர்வேதத்திற்காக பிரத்யேகமாக உருவாக்கப்பட்டது",
          content:
            "ஐபி சக்தி சஹாயக் ஒரு பொதுவான உதவியாளர் அல்ல. பாரம்பரிய அறிவு, பல்லுயிர் பெருக்கம் மற்றும் அணுகல் & பலன் பகிர்வு (ABS) ஆகிய தனித்துவமான சவால்களுக்காக இது வடிவமைக்கப்பட்டுள்ளது.",
        },
        {
          title: "தயாரிப்பு வகைப்பாடு முதலில்",
          content:
            "உங்கள் தயாரிப்பு பாரம்பரிய மருந்தா, புதிய மருந்தா அல்லது நியூட்ராசூட்டிகலா என்பதைப் பொறுத்து விதிகள் மாறுபடும். எனவே ஆலோசனை வழங்கும் முன் தயாரிப்பின் சூழலை கணினி புரிந்துகொள்கிறது.",
        },
        {
          title: "அதிகார வரம்புகளின் தெளிவான பிரிப்பு",
          content:
            "இந்தியாவில் செல்லுபடியாகும் விதிகள் வெளிநாடுகளில் வேறுபடலாம். எங்கள் அமைப்பு இந்திய சட்டங்களை சர்வதேச விதிகளிலிருந்து தெளிவாகப் பிரிக்கிறது.",
        },
        {
          title: "ஏபிஎஸ் மற்றும் பல்லுயிர் வழிகாட்டுதல்",
          content:
            "மூலிகைத் தாவரங்களைப் பயன்படுத்துவதற்கு அணுகல் மற்றும் பலன் பகிர்வு (ABS) வழிகாட்டுதல்கள் பொருந்தும். இந்த விதிகள் உங்களுக்குப் பொருந்துமா என்பதைத் தீர்மானிக்க கணினி உதவுகிறது.",
        },
        {
          title: "பாரம்பரிய அறிவு மற்றும் முந்தைய கலை (Prior Art)",
          content:
            "புதிய கண்டுபிடிப்பிற்கும் இருக்கும் பாரம்பரிய அறிவிற்கும் உள்ள வித்தியாசத்தைப் புரிந்துகொள்வது முக்கியம். உங்கள் யோசனை புதியதா என்பதை அறிய டிகேடிஎல் (TKDL) தரவுத்தளத்திற்கு கணினி வழிகாட்டுகிறது.",
        },
        {
          title: "இயல்பான பன்மொழி வடிவமைப்பு",
          content:
            "சட்ட மொழி கடினமானது. உங்கள் விருப்பமான மொழியில் கேள்விகளைக் கேட்கவும் பதில்களைப் பெறவும் உங்களுக்கு உரிமை உண்டு. அனைவருக்கும் அணுகக்கூடியதாக மாற்ற நாங்கள் தொடர்ந்து உழைக்கிறோம்.",
        },
        {
          title: "சரிபார்க்கக்கூடிய மற்றும் ஆதாரம் சார்ந்த பதில்கள்",
          content:
            "ஒழுங்குமுறை விஷயங்களில் நம்பகத்தன்மை மிக முக்கியம். ஒவ்வொரு பதிலிலும் சட்ட மேற்கோள்கள் சேர்க்கப்பட்டுள்ளன, எனவே நீங்கள் மூலங்களிலிருந்து சரிபார்க்கலாம்.",
        },
        {
          title: "மனித நிபுணர் நேரடி வழிகாட்டல் (Escalation)",
          content:
            "கேள்வி மிகவும் சிக்கலானதாக இருக்கும்போது, கணினி யூகிக்காமல் தகுதியான வழக்கறிஞர்கள் மற்றும் நிபுணர்களுடன் உங்களை இணைக்கிறது.",
        },
      ],
      howItWorksTitle: "எங்கள் அறிவார்ந்த அணுகுமுறை",
      howItWorksSubtitle: "ஐபி சக்தி சஹாயக் எவ்வாறு செயல்படுகிறது",
      steps: [
        {
          title: "நீங்கள் எதில் பணிபுரிகிறீர்கள் என்று சொல்லுங்கள்",
          desc: "உங்கள் ஆயுர்வேத தயாரிப்பு, கலவை அல்லது சட்டக் கேள்வியை உங்கள் சொந்த வார்த்தைகளில் விவரிக்கவும்.",
        },
        {
          title: "புரிந்துகொண்டு வகைப்படுத்துங்கள்",
          desc: "உங்கள் தயாரிப்பின் சூழலைப் புரிந்து கொள்ள சில விரைவான கேள்விகளை உதவியாளர் கேட்பார்.",
        },
        {
          title: "தொடர்புடைய துறையை அடையாளம் காணுங்கள்",
          desc: "உங்கள் வினா காப்புரிமை, வர்த்தக முத்திரை அல்லது ஏபிஎஸ் சார்ந்ததா என்பதை அமைப்பு கண்டறியும்.",
        },
        {
          title: "நம்பகமான தகவலை மீட்டெடுங்கள்",
          desc: "சரியான விதிகளைக் கண்டறிய எங்கள் RAG எஞ்சின் அதிகாரப்பூர்வ சட்டப் பதிவுகளை ஸ்கேன் செய்கிறது.",
        },
        {
          title: "எளிமையான பதிலை உருவாக்குங்கள்",
          desc: "சிக்கலான சட்டத் தகவலை எளிதில் புரிந்துகொள்ளக்கூடிய ஆலோசனையாக மாற்றுகிறது.",
        },
        {
          title: "ஆதாரங்கள் மற்றும் மேற்கோள்களைப் பாருங்கள்",
          desc: "அதிகாரப்பூர்வ சட்ட மேற்கோள்களுடன் தெளிவான பதிலை நீங்கள் பெறுவீர்கள்.",
        },
        {
          title: "அடுத்த கட்ட நடவடிக்கைகளில் உதவி",
          desc: "தேவைப்பட்டால், செயல்முறையை முன்னெடுத்துச் செல்ல மனித நிபுணரிடம் நாங்கள் வழிகாட்டுகிறோம்.",
        },
      ],
    },
    privacy: {
      title: "தனியுரிமைக் கொள்கை",
      subtitle:
        "தரவு இறையாண்மை, அமர்வு தனிமைப்படுத்தல் மற்றும் செயல்பாட்டு ரகசியத்தன்மையை நிர்வகிக்கும் விரிவான கட்டமைப்பு.",
      tldrLabel: "சுருக்கமான பார்வை (TL;DR)",
      sections: [
        {
          id: "introduction",
          title: "அறிமுகம்",
          tldr: "ஐபி சக்தி சஹாயக் முக்கியமான அறிவுசார் சொத்து மற்றும் பாரம்பரிய அறிவை கடுமையான கல்வி மற்றும் தனியுரிமைப் பாதுகாப்புடன் கையாள்கிறது.",
          tags: ["மேலோட்டம்", "அர்ப்பணிப்பு"],
          metadata: { "நடைமுறைத் தேதி": "செப்டம்பர் 2026", "பாதுகாப்பு நிலை": "நிலையானது" },
          paragraphs: [
            "ஆயுர்வேதம், அறிவுசார் சொத்துரிமை (IPR), அணுகல் மற்றும் பலன் பகிர்வு (ABS) மற்றும் ஒழுங்குமுறை கட்டமைப்புகளில் வழிகாட்டுதலை வழங்கும் மேம்பட்ட AI உதவியாளரான ஐபி சக்தி சஹாயக்கிற்கு உங்களை வரவேற்கிறோம். எங்கள் உள்கட்டமைப்பு மிகவும் ரகசியமான கல்வி அனுபவத்தை வழங்குவதற்காக உருவாக்கப்பட்டுள்ளது.",
            "துல்லியமான, பொருத்தமான மற்றும் உண்மையான பதில்களைத் தயாரிக்க மட்டுமே உங்கள் கேள்விகள் மற்றும் ஆவணங்களை நாங்கள் செயலாக்குகிறோம். உங்கள் உரையாடல்கள் பாதுகாப்பான அமர்வுகளில் தனிமைப்படுத்தப்பட்டு வைக்கப்படுகின்றன, மேலும் அவை வெளிப்புற நிறுவனங்களுக்கு விற்கப்படவோ சேகரிக்கப்படவோ மாட்டாது.",
          ],
        },
        {
          id: "data-privacy",
          title: "தரவு மற்றும் தனியுரிமை",
          tldr: "அறிவுசார் சொத்துத் தரவைப் பாதுகாக்க பயனர் அமர்வுகள் முழுமையாகத் தனிமைப்படுத்தப்பட்டுள்ளன.",
          tags: ["அமர்வு தனிமைப்படுத்தல்", "தனியுரிமை முன்னுரிமை"],
          metadata: { "மதிப்பாய்வு நிலை": "தணிக்கை செய்யப்பட்டது", "கட்டமைப்பு": "ஜீரோ-டிரஸ்ட்" },
          paragraphs: [
            "ஐபி சக்தி சஹாயக் தனியுரிமைக்கு முதலிடம் தரும் அணுகுமுறையுடன் வடிவமைக்கப்பட்டுள்ளது, இதனால் பயனர் தகவல்கள் பொறுப்புடன் செயலாக்கப்படுகின்றன. இந்த தளம் அறிவுசார் சொத்து மற்றும் ஒழுங்குமுறை கேள்விகளைக் கையாள்வதால், தரவுப் பாதுகாப்பு எங்கள் அமைப்பின் முக்கிய அங்கமாகும்.",
            "இந்த தளத்தில் கேட்கப்படும் கேள்விகளில் ரகசிய யோசனைகள் இருக்கலாம் என்பதை நாங்கள் புரிந்துகொள்கிறோம். எனவே வெவ்வேறு பயனர் கணக்குகளுக்கு இடையே தரவு கலப்பதைத் தடுக்கிறோம். அனைத்து செயலாக்கங்களும் பாதுகாப்பான சூழலில் நடைபெறுகின்றன.",
            "உங்கள் உரையாடல் வரலாறு அங்கீகரிக்கப்படாத நபர்களுக்கு ஒருபோதும் வெளிப்படாமல் இருப்பதை எங்கள் பாதுகாப்புக் குழுக்கள் உறுதி செய்கின்றன.",
          ],
        },
        {
          id: "data-minimization",
          title: "குறைந்தபட்ச தரவு சேகரிப்பு",
          tldr: "சட்ட மற்றும் ஒழுங்குமுறை கேள்விகளைச் செயலாக்குவதற்கு தேவையான அத்தியாவசிய தரவை மட்டுமே நாங்கள் சேகரிக்கிறோம்.",
          tags: ["குறைந்தபட்ச சேகரிப்பு", "தானியங்கி நீக்கம்"],
          metadata: { "தரவு வரம்பு": "கடுமையானது", "சுழற்சி": "தானியங்கி" },
          paragraphs: [
            "வழிகாட்டுதலை வழங்குவதற்குத் தேவையான தகவல்களை மட்டுமே சேகரிக்கும் கொள்கையை எங்கள் அமைப்பு பின்பற்றுகிறது. தேவையற்ற தனிப்பட்ட அல்லது முக்கியமான தகவல்கள் ஒருபோதும் கேட்கப்படுவதில்லை.",
            "உரையாடலின் போது பெறப்படும் கூடுதல் தரவு தானியங்கி செயல்முறைகள் மூலம் குறிப்பிட்ட காலத்திற்குப் பின் நீக்கப்படுகிறது.",
            "இந்தக் கடுமையான அணுகுமுறை எங்கள் டிஜிட்டல் தடயத்தைக் குறைவாக வைத்திருக்கவும் பயனரின் தனியுரிமையைப் பாதுகாக்கவும் உதவுகிறது.",
          ],
        },
        {
          id: "user-data-protection",
          title: "பயனர் தரவு பாதுகாப்பு",
          tldr: "அனைத்து பயனர் தரவும் குறியாக்கம் (Encryption) மற்றும் நிகழ்நேர கண்காணிப்புடன் பாதுகாக்கப்படுகிறது.",
          tags: ["குறியாக்கம்", "செயலில் உள்ள கண்காணிப்பு"],
          metadata: { "குறியாக்கம்": "AES-256", "கண்காணிப்பு": "24/7 செயலில்" },
          paragraphs: [
            "தகவல்கள் அங்கீகரிக்கப்படாத அணுகல் அல்லது தவறான பயன்பாட்டிலிருந்து பாதுகாக்கப்படுகின்றன. தரவு பரிமாற்றம் மற்றும் சேமிப்பு இரண்டிலும் நவீன குறியாக்கத்தைப் பயன்படுத்துகிறோம்.",
            "எங்கள் உள்கட்டமைப்பில் விரிவான அணுகல் பதிவுகள் மற்றும் நிகழ்நேர கண்காணிப்பு அமைப்புகள் உள்ளன, அவை அத்துமீறல்களை உடனடியாகக் கண்டறிந்து தடுக்கின்றன.",
            "உங்கள் தரவின் பாதுகாப்பைப் பேணுவது எங்கள் முதன்மையான முன்னுரிமையாகும்.",
          ],
        },
        {
          id: "confidential-information",
          title: "ரகசிய தகவல்களின் பாதுகாப்பு",
          tldr: "காப்புரிமை பெறாத வணிக ரகசியங்கள் அல்லது துல்லியமான வேதியியல் விகிதங்களை உள்ளிட வேண்டாம் என பயனர்கள் அறிவுறுத்தப்படுகிறார்கள்.",
          tags: ["வணிக ரகசியங்கள்", "எச்சரிக்கை"],
          metadata: { "ஆபத்து நிலை": "உயர்", "வழிகாட்டுதல்": "பொதுவான வினாக்கள்" },
          paragraphs: [
            "வெளியிடப்படாத கண்டுபிடிப்புகள், வணிக ரகசியங்கள் மற்றும் முக்கியமான தகவல்களை கணினியில் உள்ளிட வேண்டிய அவசியமில்லை என்று பயனர்களுக்குத் தெரிவிக்கப்படுகிறது.",
            "மிகவும் முக்கியமான சூத்திரங்களின் போது, பொதுவான ஒழுங்குமுறைக் கொள்கைகளின் அடிப்படையில் கேள்விகளைக் கேட்குமாறு பயனர்களுக்கு நாங்கள் அறிவுறுத்துகிறோம்.",
            "இந்த தளம் சட்டங்களை விளக்குவதற்காக மட்டுமே, வெளியிடப்படாத அறிவுசார் சொத்தின் பெட்டகமாக அல்ல.",
          ],
        },
        {
          id: "secure-transmission",
          title: "பாதுகாப்பான தரவு பரிமாற்றம்",
          tldr: "அனைத்து தகவல்தொடர்புகளும் நவீன HTTPS மற்றும் TLS நெறிமுறைகளால் பாதுகாக்கப்படுகின்றன.",
          tags: ["HTTPS", "TLS 1.3"],
          metadata: { "நெறிமுறை": "கடுமையான TLS", "சான்றிதழ்": "தானியங்கி புதுப்பித்தல்" },
          paragraphs: [
            "பயனருக்கும் தளத்திற்கும் இடையிலான அனைத்து தகவல்தொடர்புகளும் பாதுகாப்பான நெறிமுறைகளைப் பயன்படுத்துகின்றன, இது உங்கள் உலாவிக்கும் எங்கள் சேவையகத்திற்கும் இடையில் பாதுகாப்பான பாதையை உருவாக்குகிறது.",
            "நாங்கள் பாதுகாப்பான இணைப்புகளை மட்டுமே ஏற்றுக்கொள்கிறோம், பாதுகாப்பற்ற தகவல்தொடர்பு முயற்சிகளை நிராகரிக்கிறோம்.",
            "அச்சுறுத்தல்களிலிருந்து பாதுகாப்பாக இருக்க எங்கள் பாதுகாப்புச் சான்றிதழ்கள் தொடர்ந்து புதுப்பிக்கப்படுகின்றன.",
          ],
        },
        {
          id: "user-control",
          title: "பயனர் கட்டுப்பாடு & ஒப்புதல்",
          tldr: "அனைத்து கூடுதல் தரவு செயலாக்கத்திற்கும் பயனரின் தெளிவான ஒப்புதல் தேவை, அதை எந்த நேரத்திலும் திரும்பப் பெறலாம்.",
          tags: ["ஒப்புதல்", "கட்டுப்பாடு"],
          metadata: { "இயல்புநிலை": "விலகல்", "ரத்து செய்தல்": "உடனடி" },
          paragraphs: [
            "பயனர்கள் தங்கள் தகவல்கள் மற்றும் அனுமதிகள் மீது முழுக் கட்டுப்பாட்டை வைத்திருக்கிறார்கள். அடிப்படை சேவையைத் தவிர வேறு எந்தச் செயலாக்கத்திற்கும் முன் ஒப்புதல் பெறப்படுகிறது.",
            "பயனர்கள் எந்த நேரத்திலும் தங்கள் அனுமதிகளை எளிதாக மாற்றலாம் அல்லது திரும்பப் பெறலாம்.",
            "கூடுதல் தரவு அணுகல் தேவைப்படும் அம்சங்கள் இயல்புநிலையாக முடக்கப்பட்டு வைக்கப்படுகின்றன.",
          ],
        },
        {
          id: "access-deletion",
          title: "தரவு அணுகல் மற்றும் நீக்குதல்",
          tldr: "பயனர்கள் தங்கள் வரலாற்றைப் பார்க்க, பதிவிறக்க அல்லது நிரந்தரமாக நீக்க முழு சுதந்திரம் பெற்றுள்ளனர்.",
          tags: ["நீக்குதல்", "பரிமாற்றம்"],
          metadata: { "செயல்முறை நேரம்": "உடனடி", "நீக்கம்": "முழுமையானது" },
          paragraphs: [
            "பயனர்கள் தங்கள் சேமிக்கப்பட்ட தகவல்களை நிர்வகிக்கவும், தவறுகளைத் திருத்தவும், தேவைப்பட்டால் முழுத் தரவையும் நீக்கவும் இந்த தளம் உதவுகிறது.",
            "நீங்கள் தளத்தைப் பயன்படுத்துவதை நிறுத்த முடிவு செய்தால், உங்கள் கேள்வி வரலாறு மற்றும் பதிவுகள் தரவுத்தளத்திலிருந்து நிரந்தரமாக அழிக்கப்படும்.",
            "தரவின் உண்மையான உரிமை பயனருக்கே உரியது என்று நாங்கள் நம்புகிறோம், மேலும் தரவை எளிதாகப் பதிவிறக்கும் வாய்ப்பையும் வழங்குகிறோம்.",
          ],
        },
        {
          id: "third-party-audits",
          title: "மூன்றாம் தரப்பு தணிக்கை & இணக்கம்",
          tldr: "ஒழுங்குமுறை இணக்கம் மற்றும் பாதுகாப்பை உறுதிப்படுத்த கணினி அவ்வப்போது சுயாதீன மதிப்பீட்டிற்கு உட்படுத்தப்படுகிறது.",
          tags: ["தணிக்கை", "இணக்கம்"],
          metadata: { "அதிர்வெண்": "காலாண்டு", "தரநிலை": "ISO 27001" },
          paragraphs: [
            "எங்கள் பாதுகாப்புத் தரங்களை உறுதிப்படுத்த, கணினி கட்டமைப்பின் சுயாதீன பாதுகாப்பு மற்றும் இணக்கத் தணிக்கைகளை நாங்கள் மேற்கொள்கிறோம்.",
            "இந்த சுயாதீன மதிப்பீடுகள் சர்வதேச பாதுகாப்புத் தரங்களுக்கு எதிராக எங்கள் பாதுகாப்பு அமைப்புகளைக் கடுமையாகச் சோதிக்கின்றன.",
            "வெளிப்புற மதிப்பாய்வு மூலம் எங்கள் பயனர்களுக்கு தொழில்நுட்பத் தரம் மற்றும் தொழில்முறை உத்தரவாதத்தை நாங்கள் வழங்குகிறோம்.",
          ],
        },
        {
          id: "policy-updates",
          title: "கொள்கை புதுப்பிப்புகள் & அறிவிப்புகள்",
          tldr: "தனியுரிமைக் கொள்கையில் செய்யப்படும் குறிப்பிடத்தக்க மாற்றங்கள் பயன்பாட்டின் மூலம் முன்கூட்டியே அறிவிக்கப்படும்.",
          tags: ["வெளிப்படைத்தன்மை", "தொடர்ச்சி"],
          metadata: { "அறிவிப்பு காலம்": "30 நாட்கள்", "முறை": "இன்-ஆப்" },
          paragraphs: [
            "சட்டச் சூழல் உருவாகும்போது மற்றும் எங்கள் உள்கட்டமைப்பு மேம்படுத்தப்படும்போது, இந்தத் தனியுரிமைக் கொள்கை புதுப்பிக்கப்படலாம்.",
            "நாங்கள் முழு வெளிப்படைத்தன்மையை பராமரிக்கிறோம். பெரிய மாற்றங்கள் ஏற்பட்டால் முன்கூட்டியே அறிவிக்கப்படும்.",
            "திருத்தப்பட்ட விதிமுறைகள் வெளியிடப்பட்ட பிறகு தளத்தைத் தொடர்ந்து பயன்படுத்துவது மாற்றங்களை ஏற்றுக்கொண்டதாகக் கருதப்படும்.",
          ],
        },
      ],
    },
    terms: {
      title: "விதிமுறைகள் & நிபந்தனைகள்",
      subtitle:
        "கல்விப் பயன்பாடு, சட்ட வரம்புகள் மற்றும் பொறுப்புகளை நிர்வகிக்கும் விரிவான சட்டக் கட்டமைப்பு.",
      items: [
        {
          id: 1,
          title: "தளத்தின் நோக்கம்",
          content:
            "ஐபி சக்தி சஹாயக் என்பது ஆயுர்வேதம் தொடர்பான அறிவுசார் சொத்துரிமை (IPR), ஒழுங்குமுறைத் தேவைகள், பாரம்பரிய அறிவு, பல்லுயிர் பெருக்கம் மற்றும் அணுகல் & பலன் பகிர்வு (ABS) ஆகியவற்றில் தகவல் மற்றும் பூர்வாங்க வழிகாட்டுதலை வழங்க வடிவமைக்கப்பட்ட AI-இயங்கும் தளமாகும்.",
        },
        {
          id: 2,
          title: "சட்ட அல்லது தொழில்முறை ஆலோசனை அல்ல",
          content:
            "ஐபி சக்தி சஹாயக் வழங்கும் தகவல்கள் கல்வி மற்றும் தகவல் நோக்கங்களுக்காக மட்டுமே. இது முறையான சட்ட, ஒழுங்குமுறை அல்லது தொழில்முறை ஆலோசனை அல்ல, மேலும் இது தகுதிவாய்ந்த வழக்கறிஞர் அல்லது ஒழுங்குமுறை அதிகாரிகளுக்கு மாற்றாகாது.",
        },
        {
          id: 3,
          title: "AI உருவாக்கிய பதில்கள்",
          content:
            "பதில்களை உருவாக்க இந்த தளம் செயற்கை நுண்ணறிவு மற்றும் மீட்டெடுப்பு-அதிகரித்த உருவாக்கத்தை (RAG) பயன்படுத்துகிறது. நம்பகமான தகவலை வழங்க முயற்சி செய்தாலும், AI பதில்களில் பிழைகள் அல்லது முழுமையற்ற விளக்கங்கள் இருக்கலாம்.",
        },
        {
          id: 4,
          title: "ஆதாரம் சரிபார்க்கப்பட்ட தகவல்",
          content:
            "கிடைக்கக்கூடிய இடங்களில், பதில்களில் அதிகாரப்பூர்வ சட்டங்கள், விதிகள் மற்றும் அரசு தரவுத்தளங்களின் குறிப்புகள் இடம்பெறும். பயனர்கள் அசல் மூலத்திலிருந்து தகவலைச் சரிபார்க்குமாறு அறிவுறுத்தப்படுகிறார்கள்.",
        },
        {
          id: 5,
          title: "பயனரின் பொறுப்பு",
          content:
            "துல்லியமான தகவலை வழங்குவதும், எந்தவொரு சட்ட அல்லது வணிக முடிவுகளையும் எடுப்பதற்கு முன் சுயாதீனமாக வழிகாட்டுதலை உறுதிப்படுத்துவதும் பயனரின் முழுப் பொறுப்பாகும்.",
        },
        {
          id: 6,
          title: "அதிகார வரம்பு மற்றும் பொருந்தக்கூடிய சட்டம்",
          content:
            "வழங்கப்படும் வழிகாட்டுதல் முதன்மையாக இந்திய சட்டங்கள் மற்றும் ஒழுங்குமுறை கட்டமைப்புகளை (காப்புரிமை சட்டம், உயிரியல் பன்முகத்தன்மை சட்டம், மருந்துகள் சட்டம்) அடிப்படையாகக் கொண்டது.",
        },
        {
          id: 7,
          title: "உத்தரவாதம் அல்லது காப்பீடு இல்லை",
          content:
            "இந்த தளம் எந்தவொரு குறிப்பிட்ட சட்ட முடிவு, காப்புரிமை அனுமதி, வர்த்தக முத்திரை ஒப்புதல் அல்லது ஒழுங்குமுறை உரிமத்திற்கு உத்தரவாதம் அளிக்காது.",
        },
        {
          id: 8,
          title: "ரகசிய மற்றும் முக்கியமான தகவல்",
          content:
            "பயனர்கள் வெளியிடப்படாத கண்டுபிடிப்புகள், வணிக ரகசியங்கள் அல்லது முக்கியமான வணிகத் தரவை தளத்தில் உள்ளிடக்கூடாது.",
        },
        {
          id: 9,
          title: "பாரம்பரிய அறிவு மற்றும் பல்லுயிர் இணக்கம்",
          content:
            "பாரம்பரிய அறிவு (TKDL), பல்லுயிர் சட்டம் மற்றும் ஏபிஎஸ் தொடர்பான வழிகாட்டுதல்கள் கல்வி சார்ந்தவை, அவை பயனர்களை சட்டப்பூர்வக் கடமைகளிலிருந்து விடுவிக்காது.",
        },
        {
          id: 10,
          title: "தளத்தின் அறிவுசார் சொத்துரிமை",
          content:
            "ஐபி சக்தி சஹாயக்குடன் தொடர்புடைய அனைத்து உள்ளடக்கங்கள், மென்பொருள், மாதிரிகள் மற்றும் பிராண்டிங் ஆகியவை காப்புரிமை மற்றும் அறிவுசார் சொத்துச் சட்டங்களால் பாதுகாக்கப்படுகின்றன.",
        },
        {
          id: 11,
          title: "ஏற்றுக்கொள்ளக்கூடிய பயன்பாடு",
          content:
            "தளத்தை தவறாகப் பயன்படுத்தவோ, அதன் கூறுகளை ரிவர்ஸ்-இன்ஜினியரிங் செய்யவோ, தீங்கிழைக்கும் குறியீட்டைச் செருகவோ அல்லது அங்கீகரிக்கப்படாத தரவு சேகரிப்பில் ஈடுபடவோ கூடாது எனப் பயனர்கள் ஒப்புக்கொள்கிறார்கள்.",
        },
        {
          id: 12,
          title: "மூன்றாம் தரப்பு இணைப்புகள்",
          content:
            "தளத்தில் வெளிப்புற வலைத்தளங்கள் அல்லது அரசு போர்ட்டல்களின் இணைப்புகள் இருக்கலாம். வெளிப்புற உள்ளடக்கங்களுக்கு ஐபி சக்தி சஹாயக் பொறுப்பாகாது.",
        },
        {
          id: 13,
          title: "மனித நிபுணர் வழிகாட்டல் (Escalation)",
          content:
            "சிக்கலான விஷயங்களில், மனித நிபுணர் ஆலோசனையை தளம் பரிந்துரைக்கலாம். இத்தகைய பரிந்துரைகள் முறையான வழக்கறிஞர்-வாடிக்கையாளர் உறவை உருவாக்காது.",
        },
        {
          id: 14,
          title: "பொறுப்பு வரம்பு",
          content:
            "சட்டத்தால் அனுமதிக்கப்பட்ட அதிகபட்ச அளவிற்கு, தளத்தைப் பயன்படுத்துவதால் ஏற்படும் நேரடி அல்லது மறைமுக சேதங்களுக்கு ஐபி சக்தி சஹாயக் மற்றும் அதன் உருவாக்குநர்கள் பொறுப்பேற்க மாட்டார்கள்.",
        },
        {
          id: 15,
          title: "தரவு தனியுரிமை மற்றும் கையாளுதல்",
          content:
            "பயனர் வினாக்கள் எங்கள் தனியுரிமைக் கொள்கையின்படி செயலாக்கப்படுகின்றன. வினாக்களுக்கு விடை காண அவை AI மாதிரிகள் மூலம் செயல்படுத்தப்படுவதை பயனர்கள் ஒப்புக்கொள்கிறார்கள்.",
        },
        {
          id: 16,
          title: "சேவை கிடைக்கும் தன்மை",
          content:
            "இந்த தளம் 'உள்ளபடியே' மற்றும் 'கிடைக்கக்கூடிய அடிப்படையில்' வழங்கப்படுகிறது. முன்னறிவிப்பின்றி அம்சங்கள் மாற்றப்படலாம் அல்லது தற்காலிகமாக நிறுத்தப்படலாம்.",
        },
        {
          id: 17,
          title: "விதிமுறைகளில் மாற்றங்கள்",
          content:
            "இந்த விதிமுறைகளை எந்த நேரத்திலும் மாற்றுவதற்கான உரிமையை நாங்கள் கொண்டுள்ளோம். தொடர்ந்து பயன்படுத்துவது புதுப்பிக்கப்பட்ட விதிமுறைகளை ஏற்றுக்கொள்வதாகக் கருதப்படும்.",
        },
        {
          id: 18,
          title: "தொடர்பு மற்றும் கருத்துகள்",
          content:
            "இந்த விதிமுறைகள் குறித்த கேள்விகள் அல்லது கருத்துகளுக்கு, எங்கள் ஆதரவு சேனல்கள் மூலம் தொடர்பு கொள்ளவும்.",
        },
      ],
    },
    team: {
      title: "குழு கோட்வேதா",
      desc: "இந்த பிரத்யேக குழு பக்கம் தற்போது காலியாக உள்ளது, ஆனால் எதிர்காலத்தில் நாங்கள் இதை மேம்படுத்துவோம்.",
    },
    settings: {
      title: "அமைப்புகள்",
      subtitle: "உங்கள் பயன்பாட்டு விருப்பங்களை நிர்வகிக்கவும்",
      themeTitle: "தோற்றம் & தீம்",
      themes: {
        saffron: {
          name: "கேசரி (இந்துத்துவம்)",
          desc: "மிகவும் துடிப்பான மற்றும் தூய்மையான காவி பயனர் இடைமுகத்தைத் தவிர, உலக ஆசைகளிலிருந்து முழுமையான பற்றின்மையை அடைய உதவும் தீம். ஜெய் ஸ்ரீ ராம்.",
        },
        blue: {
          name: "பிரகதி (பீம்)",
          desc: "முழு தேசிய அரசியலமைப்பையும் உருவாக்குவதற்குத் தேவையான சமரசமற்ற அறிவுத்திறனை வெளிப்படுத்தும் தர்க்கரீதியான தீம். ஜெய் பீம், ஜெய் பாரத்.",
        },
        green: {
          name: "சம்ரித்தி (உம்மா)",
          desc: "உலகளாவிய சகோதரத்துவம் மற்றும் ஒற்றுமையின் ஆழ்ந்த உணர்வை வளர்க்கும் அமைதியான தீம். அல்லாஹு அக்பர்.",
        },
        dark: {
          name: "அந்தகார் (டார்க்)",
          desc: "அண்டவெளியின் அமைதியைத் தழுவுங்கள். அனைத்து டிஜிட்டல் திரைகளும் மாயை என்பதை உணரும் தருணங்களுக்கான கண்களைப் பாதுகாக்கும் இருண்ட தீம்.",
        },
      },
    },
  },
  te: {
    dashboard: {
      badge: "డైనమిక్ అనలిటిక్స్ డాష్‌బోర్డ్",
      title: "ఆయుష్ కంప్లయన్స్ మరియు రిస్క్ అనలిటిక్స్",
      subtitle: "అసెస్‌మెంట్ సమర్పణల నుండి నవీకరించబడిన ప్రత్యక్ష రిస్క్ కొలమానాలు.",
      runAssessment: "కొత్త అసెస్‌మెంట్ అమలు చేయండి",
      recentLogsTitle: "ఇటీవలి అసెస్‌మెంట్ రిస్క్ లాగ్‌లు",
      recentLogsSubtitle: "అసెస్‌మెంట్ ఫారమ్ నుండి తాజా మూల్యాంకనాలు.",
      tableHeaders: {
        productName: "ఉత్పత్తి పేరు",
        category: "వర్గం",
        riskScore: "రిస్క్ స్కోర్",
        status: "స్థితి",
        audited: "ఆడిట్ చేయబడింది"
      },
      totalAudited: "మొత్తం ఉత్పత్తులు ఆడిట్ చేయబడ్డాయి",
      highRisk: "అధిక రిస్క్ ఫ్లాగ్‌లు",
      clearances: "రెగ్యులేటరీ క్లియరెన్స్‌లు",
      avgScore: "సగటు కంప్లయన్స్ స్కోర్",
      liveEvaluation: "ప్రత్యక్ష మూల్యాంకనం"
    },
    common: {
      downloadPdf: "పిడిఎఫ్ డౌన్‌లోడ్ చేయండి",
      exporting: "ఎగుమతి చేస్తోంది...",
      startNewAssessment: "కొత్త మూల్యాంకనం ప్రారంభించండి",
      learnMore: "మరింత తెలుసుకోండి",
      tryAgain: "మళ్లీ ప్రయత్నించండి",
      accessDatabase: "డేటాబేస్ యాక్సెస్ చేయండి",
      accessFile: "ఫైల్‌ను యాక్సెస్ చేయండి",
      loading: "లోడ్ అవుతోంది...",
    },
    search: {
      buttonLabel: "శోధించండి...",
      placeholder: "చట్టాలు, మూల్యాంకన మాడ్యూల్స్, నిపుణులు, పేజీలను శోధించండి...",
      quickLinks: "ప్రముఖ అంశాలు & శీఘ్ర లింకులు",
      noResultsTitle: "సరిపోలే ఫలితాలు ఏవీ కనుగొనబడలేదు",
      noResultsDesc: "మీ శోధనకు సరిపోయే సమాచారం వెబ్‌సైట్‌లో కనుగొనబడలేదు.",
      askAiCta: "AI న్యాయ సహాయకుడిని అడగండి",
      allCategories: "అన్నీ",
      pagesCategory: "పేజీలు & సాధనాలు",
      lawsCategory: "చట్టాలు & వనరులు",
      modulesCategory: "మూల్యాంకన మాడ్యూల్స్",
      expertsCategory: "నిపుణులు & పోర్టల్‌లు",
      legalCategory: "చట్టపరమైన & గోప్యత",
      navigateHint: "నావిగేట్ చేయండి",
      selectHint: "ఎంచుకోండి",
      closeHint: "మూసివేయండి",
    },
    nav: {
      brandName: "ఐపీ శక్తి సహాయక్",
      home: "హోమ్",
      assessment: "మూల్యాంకనం",
      legalCorpus: "చట్టపరమైన సేకరణ",
      expertEscalation: "నిపుణుల సహాయం",
      aiAssistant: "AI సహాయకుడు",
      aboutUs: "మా గురించి",
      privacyPolicy: "గోప్యతా విధానం",
      termsAndConditions: "నిబంధనలు & షరతులు",
      teamCodeveda: "టీమ్ కోడ్‌వేద",
      selectLanguage: "భాష",
      english: "English",
      hindi: "हिन्दी (Hindi)",
      marathi: "मराठी (Marathi)",
      tamil: "தமிழ் (Tamil)",
      telugu: "తెలుగు (Telugu)",
      bengali: "বাংলা (Bengali)",
      kannada: "ಕನ್ನಡ (Kannada)",
      sanskrit: "संस्कृतम् (Sanskrit)",
      gujarati: "ગુજરાતી (Gujarati)",
    },
    home: {
      heroBadge: "చట్టపరమైన సమ్మతి భవిష్యత్తుకు స్వాగతం",
      heroTitlePrefix: "సులభతరం చేయండి మీ",
      heroTitleHighlight: "ఆయుర్వేద లైసెన్సింగ్",
      heroSubtitle:
        "ఐపీ శక్తి సహాయక్ అనేది ఆయుష్ (AYUSH) రంగంలో నియంత్రణ సంక్లిష్టతలను సులభంగా అర్థం చేసుకునేందుకు మార్గదర్శకత్వం వహించే ఒక తెలివైన, సమగ్ర సహాయక వ్యవస్థ.",
      startAssessment: "మూల్యాంకనం ప్రారంభించండి",
      browseLegalCorpus: "చట్టపరమైన సేకరణ బ్రౌజ్ చేయండి",
      cards: {
        complianceFirst: {
          title: "సమ్మతి ప్రాధాన్యత",
          desc: "ఆయుష్ మంత్రిత్వ శాఖకు దరఖాస్తులు సమర్పించే ముందు అన్ని నియంత్రణ ప్రమాణాలను పూర్తి చేశారని నిర్ధారించుకోండి. మేము తాజా నిబంధనల ఆధారంగా మీ వివరాలను విశ్లేషిస్తాము.",
        },
        regulatoryClarity: {
          title: "నియంత్రణ స్పష్టత",
          desc: "డ్రగ్స్ & కాస్మెటిక్స్ చట్టం మరియు జీవ వైవిధ్య చట్టాన్ని ఆధునిక AI విశ్లేషణ ద్వారా సులభంగా అర్థం చేసుకోండి.",
        },
        unifiedIntake: {
          title: "సమీకృత నమోదు",
          desc: "మీ వ్యాపార రకం, మూలికా కూర్పు మరియు అవసరమైన లైసెన్సులను అంచనా వేయడానికి ఒకే, క్రమబద్ధీకరించిన ప్రక్రియ.",
        },
        deepSearch: {
          title: "లోతైన చట్టపరమైన సేకరణ శోధన",
          desc: "మా వేగవంతమైన శోధన సాధనం ద్వారా వేలాది అధికారిక ఆయుష్ పూర్వాపరాలు, మార్గదర్శకాలు మరియు TKDL సూచనలను తక్షణమే శోధించండి.",
          cta: "శోధన ఇంజిన్ ఉపయోగించండి",
        },
      },
    },
    assessment: {
      step: "దశ",
      back: "వెనుకకు",
      continue: "కొనసాగించండి",
      generateReport: "సమ్మతి నివేదికను రూపొందించండి",
      selectAtLeastOne: "కొనసాగడానికి కనీసం ఒక ఎంపికను ఎంచుకోండి",
      analyzingTitle: "ప్రొఫైల్ విశ్లేషించబడుతోంది",
      analyzingDesc:
        "గ్లోబల్ రెగ్యులేటరీ ఫ్రేమ్‌వర్క్‌లలో అర్థ సమానత్వ శోధన మరియు చట్టపరమైన విశ్లేషణ జరుగుతోంది...",
      failedTitle: "మూల్యాంకనం విఫలమైంది",
      failedDesc: "మీ అభ్యర్థనను ప్రాసెస్ చేయడంలో సమస్య ఎదురైంది.",
      fieldHelper: {
        title: "ఆయుష్ నియంత్రణ సందర్భం",
        desc: "మొదటి షెడ్యూల్ గ్రంథాలు మరియు ఇండియన్ ఫార్మాకోపోయియా (API) ప్రమాణాల ఆధారిత మార్గదర్శకత్వం.",
      },
    },
    report: {
      riskLevels: {
        low: "తక్కువ ప్రమాదం",
        moderate: "మధ్యస్థ ప్రమాదం",
        high: "అధిక ప్రమాదం",
      },
      aiComplete: "AI మూల్యాంకనం పూర్తయింది",
      legalGroundingTitle: "చట్టపరమైన ఆధారం",
      legalGroundingSubtitle:
        "నియంత్రణ చట్టాల నుండి సేకరించబడిన ప్రత్యక్ష అనులేఖనాలు",
      noCitations: "మీ ఉత్పత్తి ప్రొఫైల్‌కు సరిపోలిన నిర్దిష్ట అనులేఖనాలు ఏవీ కనుగొనబడలేదు.",
      actionPlanTitle: "చర్య ప్రణాళిక",
      actionPlanSubtitle: "నిబంధనల సమ్మతి కోసం సిఫార్సు చేయబడిన తదుపరి చర్యలు",
      noActions: "ప్రత్యేక చర్యలు ఏవీ అవసరం లేదు.",
    },
    chat: {
      badge: "తెలివైన RAG సహాయకుడు",
      title: "AI చట్టపరమైన సహాయకుడు",
      subtitle:
        "త్వరిత అంతర్దృష్టులు మరియు నియంత్రణ మార్గదర్శకత్వం కోసం మా AI చట్టపరమైన సహాయకుడితో సంప్రదించండి.",
      header: "AI చట్టపరమైన సహాయకుడు",
      initialGreeting:
        "నమస్కారం! నేను మీ AI చట్టపరమైన సహాయకుడిని. ఈరోజు మీకు ఎలా సహాయపడగలను?",
      inputPlaceholder: "మీ సందేశాన్ని ఇక్కడ టైప్ చేయండి...",
      thinking: "ఆలోచిస్తోంది...",
      errorMessage:
        "AI చట్టపరమైన సహాయకుడిని సంప్రదించలేకపోయాము. దయచేసి డిప్లాయ్‌మెంట్ సెట్టింగ్‌లలో GEMINI_API_KEY కాన్ఫిగర్ చేయబడిందో లేదో నిర్ధారించుకోండి.",
    },
    corpus: {
      title: "చట్టపరమైన సేకరణ",
      subtitle:
        "భారతదేశంలో గుర్తింపు పొందిన అధికారిక మేధో సంపత్తి డేటాబేస్‌లు మరియు ముఖ్యమైన నియంత్రణ పత్రాలను యాక్సెస్ చేయండి.",
      officialSources: "అధికారిక వనరులు",
      robustGroundedDatabase: "మా బలమైన ప్రాథమిక డేటాబేస్",
      sources: [
        {
          acronym: "TKDL",
          name: "సాంప్రదాయ విజ్ఞాన డిజిటల్ లైబ్రరీ",
          desc: "భారతీయ సాంప్రదాయ వైద్య పరిజ్ఞానాన్ని దుర్వినియోగం కాకుండా రక్షించే అధికారిక డేటాబేస్.",
        },
        {
          acronym: "ఇండియా కోడ్",
          name: "చట్టాలు & నిబంధనలు (ఇండియా కోడ్)",
          desc: "అన్ని కేంద్ర మరియు రాష్ట్ర చట్టాల అధికారిక డిజిటల్ సేకరణ.",
        },
        {
          acronym: "ఐపీ ఇండియా",
          name: "ఐపీ ఇండియా పబ్లిక్ డేటాబేస్",
          desc: "పేటెంట్లు, ట్రేడ్‌మార్క్‌లు, డిజైన్లు మరియు భౌగోళిక సూచికల (GI) రిజిస్ట్రీ కార్యాలయం.",
        },
        {
          acronym: "పత్రాల డ్రైవ్",
          name: "అంతర్గత నియంత్రణ పత్రాలు",
          desc: "ప్రభుత్వ సర్క్యులర్లు మరియు చట్టపరమైన ఫైళ్ల అంతర్గత డేటాబేస్ యాక్సెస్.",
        },
      ],
    },
    expert: {
      badge: "ప్రత్యక్ష మద్దతు నెట్‌వర్క్",
      title: "నిపుణుల మార్గదర్శకత్వం",
      subtitle:
        "AI మార్గదర్శకత్వానికి మరియు అధికారిక పరిపాలనా చర్యలకు మధ్య వారధిగా నిలవండి. ధృవీకరించబడిన న్యాయవాదులు మరియు నియంత్రణ అధికారులతో నేరుగా సంప్రదించండి.",
      officialPortalsTitle: "అధికారిక నియంత్రణ పోర్టల్స్",
      officialPortalsSubtitle: "ప్రభుత్వ సంస్థలు, చట్టబద్ధ డైరెక్టరీలు మరియు ఫైలింగ్ పోర్టల్స్",
      verifiedSpecialistsTitle: "ధృవీకరించబడిన చట్టపరమైన & ఐపీ నిపుణులు",
      verifiedSpecialistsSubtitle: "అధీకృత నియంత్రణ సలహాదారులతో ప్రత్యక్ష సంప్రదింపులు",
      domainsTitle: "ప్రాక్టీస్ రంగాలు & సౌకర్యాల నెట్‌వర్క్",
      domainsSubtitle: "ప్రత్యేక రంగ నైపుణ్యం ఆధారంగా న్యాయ నిపుణులను సంప్రదించండి",
      bookConsultation: "సంప్రదింపును బుక్ చేయండి",
      callDirectly: "నేరుగా కాల్ చేయండి",
      verifiedSpecialist: "ధృవీకరించబడిన నిపుణుడు",
      consultationNotice:
        "సంప్రదింపుల నోటీసు: బార్ కౌన్సిల్ ఆఫ్ ఇండియాలో నమోదైన ధృవీకరించబడిన న్యాయవాదులు, పేటెంట్ ఏజెంట్లు మరియు సలహాదారులతో నిపుణుల సేవలు స్వతంత్రంగా సమన్వయం చేయబడతాయి.",
      portals: [
        {
          name: "బార్ కౌన్సిల్ ఆఫ్ ఇండియా న్యాయవాదుల శోధన",
          acronym: "BCI డైరెక్టరీ",
          desc: "రిజిస్టర్డ్ న్యాయవాదుల అర్హతలను ధృవీకరించడానికి అధికారిక దేశవ్యాప్త డైరెక్టరీ.",
        },
        {
          name: "ఐపీ ఇండియా పబ్లిక్ పోర్టల్ & ఏజెంట్ శోధన",
          acronym: "ఐపీ ఇండియా పోర్టల్",
          desc: "పేటెంట్ ఏజెంట్లు మరియు ఫైలింగ్ల కోసం పేటెంట్ కంట్రోలర్ జనరల్ (CGPDTM) అధికారిక పోర్టల్.",
        },
        {
          name: "ఆయుష్ మంత్రిత్వ శాఖ చట్టపరమైన సహాయ కేంద్రం",
          acronym: "ఆయుష్ హెల్ప్‌డెస్క్",
          desc: "నియంత్రణ వివరణలు, ASU ఔషధ ప్రమాణాలు మరియు విధాన సమ్మతి కోసం మంత్రిత్వ శాఖ పోర్టల్.",
        },
        {
          name: "జాతీయ జీవ వైవిధ్య అథారిటీ (NBA) విభాగం",
          acronym: "NBA ABS విభాగం",
          desc: "జీవ వనరుల కోసం ప్రాప్యత మరియు ప్రయోజన భాగస్వామ్య (ABS) అనుమతులను నిర్వహించే ప్రభుత్వ సంస్థ.",
        },
      ],
      experts: [
        {
          name: "అడ్వొకేట్ తన్వి దుర్గుడే",
          role: "చట్టపరమైన & నియంత్రణ నిపుణురాలు",
          desc: "నియంత్రణ సమ్మతి మరియు చట్టపరమైన అంతర్దృష్టులను అందించడంలో ప్రత్యేకత. మీ న్యాయపరమైన సందేహాలను పరిష్కరించడానికి కట్టుబడి ఉన్నారు.",
        },
        {
          name: "అడ్వొకేట్ స్వామిని పూరే",
          role: "ఐపీ & సమ్మతి సలహాదారు",
          desc: "మేధో సంపత్తి మరియు సమ్మతి వ్యూహాలలో నైపుణ్యం కలిగిన న్యాయ సలహాదారు. ప్రత్యక్ష మార్గదర్శకత్వం కోసం అందుబాటులో ఉన్నారు.",
        },
        {
          name: "అడ్వొకేట్ మమతా బిరాదార్",
          role: "లైసెన్సింగ్ స్పెషలిస్ట్",
          desc: "సంక్లిష్ట చట్టపరమైన అడ్డంకులు మరియు లైసెన్సింగ్ సమస్యలను పరిష్కరించడంలో సహాయపడే నియంత్రణ సలహాదారు. తక్షణ సహాయం కోసం నేరుగా సంప్రదించండి.",
        },
      ],
      categories: [
        {
          title: "ఆయుర్వేద పేటెంట్ & GI న్యాయవాదులు",
          badge: "TKDL & పేటెంట్ చట్టం",
          location: "న్యూఢిల్లీ / హైదరాబాద్ / ఆన్‌లైన్",
          desc: "సెక్షన్ 3(p) TKDL అభ్యంతరాలు, ఆయుర్వేద పేటెంట్ డ్రాఫ్టింగ్ మరియు భౌగోళిక సూచిక (GI) రిజిస్ట్రేషన్ నిపుణులు.",
          tags: ["పేటెంట్", "TKDL", "అభ్యంతరాల పరిష్కారం"],
        },
        {
          title: "FSSAI & న్యూట్రాస్యూటికల్ చట్టపరమైన సలహాదారులు",
          badge: "ఆహార భద్రత & క్లెయిమ్‌లు",
          location: "హైదరాబాద్ / బెంగళూరు / ఆన్‌లైన్",
          desc: "ప్రొప్రైటరీ ఆహార నిబంధనలు, ఆరోగ్య క్లెయిమ్‌ల అనుమతులు మరియు FSSR 2017 సమ్మతి ఆడిట్ నిపుణులు.",
          tags: ["FSSAI", "లేబులింగ్", "ఆరోగ్య క్లెయిమ్‌లు"],
        },
        {
          title: "NBA & జీవ వైవిధ్య చట్టం సలహాదారులు",
          badge: "ప్రాప్యత & ప్రయోజన భాగస్వామ్యం (ABS)",
          location: "హైదరాబాద్ / చెన్నై / ఆన్‌లైన్",
          desc: "భారతీయ జీవ వనరుల వాణిజ్య ఉపయోగం కోసం ఫారం 1, 2, 3 సమర్పణలో కంపెనీలకు మార్గనిర్దేశం చేసే నిపుణులు.",
          tags: ["NBA", "ABS", "జీవ వనరులు"],
        },
        {
          title: "రాష్ట్ర లైసెన్సింగ్ అథారిటీ (SLA) సమన్వయకర్తలు",
          badge: "ఆయుష్ ఔషధ లైసెన్సింగ్",
          location: "అన్ని రాష్ట్రాలు / కేంద్రాలు",
          desc: "ఫారం 24D / 25D క్లాసికల్ తయారీ లైసెన్స్ మరియు లోన్ లైసెన్స్ (ఫారం 25E) పొందేందుకు సహాయపడే సలహాదారులు.",
          tags: ["ఫారం 25D", "GMP", "ఆయుష్ లైసెన్స్"],
        },
        {
          title: "క్లినికల్ ట్రయల్స్ & CTRI సమ్మతి సలహాదారులు",
          badge: "క్లినికల్ రీసెర్చ్",
          location: "హైదరాబాద్ / పూణే / ఆన్‌లైన్",
          desc: "కొత్త మందుల నిబంధనలు 2019 ప్రకారం క్లినికల్ ట్రయల్ డిజైన్, ఎథిక్స్ కమిటీ ఆమోదం మరియు CTRI రిజిస్ట్రేషన్ నిపుణులు.",
          tags: ["CTRI", "క్లినికల్ ట్రయల్", "ఎథిక్స్"],
        },
        {
          title: "అంతర్జాతీయ ఎగుమతి & ఫైటోసానిటరీ న్యాయవాదులు",
          badge: "గ్లోబల్ సమ్మతి",
          location: "విశాఖపట్నం / కొచ్చి / ఆన్‌లైన్",
          desc: "యుఎస్ FDA DSHEA, యూరోపియన్ యూనియన్ THMPD మరియు CITES ఎగుమతి అనుమతులలో నైపుణ్యం కలిగిన న్యాయవాదులు.",
          tags: ["ఎగుమతి", "FDA DSHEA", "CITES"],
        },
      ],
    },
    about: {
      title: "మా గురించి",
      subtitle:
        "సాంప్రదాయ ఆయుర్వేద విజ్ఞానాన్ని ఆధునిక మేధో సంపత్తి హక్కుల చట్టపరమైన రక్షణలతో అనుసంధానించడం.",
      storyTitle: "మా కథ",
      storySubtitle:
        "ఆయుర్వేద ఐపీఆర్ ప్రపంచాన్ని సులభంగా అర్థమయ్యేలా చేయడం",
      storyParagraphs: [
        "ఆయుర్వేదం అనేది కేవలం ఒక సంప్రదాయ వైద్య విధానం మాత్రమే కాదు. ఇది తరతరాలుగా సంరక్షించబడిన శతాబ్దాల విజ్ఞానం, చికిత్సా పద్ధతులు మరియు సమాజ జ్ఞానానికి సంబంధించిన అమూల్యమైన నిధి. నేడు కొత్త ఆవిష్కర్తలు మరియు స్టార్టప్‌లు ఈ ప్రాచీన జ్ఞానాన్ని ఆధునిక ప్రపంచానికి అందిస్తున్నారు.",
        "కానీ ఆ విజ్ఞానాన్ని రక్షించడం మరియు దానికి సంబంధించిన చట్టపరమైన నిబంధనలను అర్థం చేసుకోవడం చాలా కష్టంగా ఉంటుంది. పేటెంట్లు, సాంప్రదాయ విజ్ఞానం, జీవ వైవిధ్యం మరియు ఔషధ సమ్మతి నిబంధనలు డజన్ల కొద్దీ వేర్వేరు చట్టాలు మరియు ప్రభుత్వ పోర్టల్‌లలో విస్తరించి ఉన్నాయి.",
        "చట్టపరమైన నేపథ్యం లేనివారికి తమకు ఏ నిబంధనలు వర్తిస్తాయో అర్థం చేసుకోవడం సవాలుగా మారుతుంది. అందుకే మేము ఐపీ శక్తి సహాయక్ ప్లాట్‌ఫారమ్‌ను రూపొందించాము.",
        "ఐపీ శక్తి సహాయక్ అనేది ఆయుష్ పర్యావరణ వ్యవస్థ కోసం ప్రత్యేకంగా రూపొందించబడిన బహుభాషా AI సహాయకుడు. న్యాయవాదులకు ప్రత్యామ్నాయంగా ఉండటం మా లక్ష్యం కాదు, ఆ మొదటి ముఖ్యమైన అడుగును సులభంగా మరియు స్పష్టంగా మార్చడమే మా లక్ష్యం.",
      ],
      whyBuiltTitle: "మేము ఐపీ శక్తి సహాయక్ ఎందుకు నిర్మించాము",
      whyBuiltIntro:
        "అద్భుతమైన మూలికా ఉత్పత్తిని అభివృద్ధి చేసిన ఒక చిన్న ఆయుర్వేద స్టార్టప్ మీరని ఊహించుకోండి. మీ మనస్సులో ఈ ప్రశ్నలు ఉండవచ్చు:",
      whyBuiltQuestions: [
        '"నేను దీనికి నిజంగా పేటెంట్ పొందగలనా?"',
        '"ఇది ఇప్పటికే సాంప్రదాయ విజ్ఞానంగా పరిగణించబడుతుందా?"',
        '"నేను జీవ వైవిధ్య సమ్మతి గురించి ఆందోళన చెందాలా?"',
        '"నా ఉత్పత్తి చట్టబద్ధంగా మందా, ఆహారమా లేదా సౌందర్య సాధనమా?"',
      ],
      whyBuiltConclusion:
        "సాధారణంగా ఈ ప్రశ్నలకు సమాధానాలు కనుగొనడం అంటే ఖరీదైన సలహాదారులను నియమించుకోవడం లేదా క్లిష్టమైన చట్టపరమైన గ్రంథాలను శోధించడం. ఐపీ శక్తి సహాయక్ ఈ మొత్తం ప్రక్రియను ఒక సాధారణ సంభాషణగా మారుస్తుంది.",
      visionTitle: "మా దార్శనికత",
      visionSubtitle:
        "ఆయుర్వేద ఆవిష్కర్తలు తమ విజ్ఞానాన్ని ఆత్మవిశ్వాసంతో రక్షించుకునే భవిష్యత్తు.",
      visionParagraphs: [
        "మేధో సంపత్తి మరియు నియంత్రణ నిబంధనలను అర్థం చేసుకోవడం ఖరీదైన చట్టపరమైన సేవలను పొందగలిగే వారికి మాత్రమే పరిమితం కాకూడదని మేము విశ్వసిస్తున్నాము.",
        "ఆయుర్వేద వైద్యుడు, పరిశోధకుడు, విద్యార్థి, రైతు లేదా స్టార్టప్ వ్యవస్థాపకుడు ఎవరైనా తమ పనిని రక్షించుకోవడానికి మరియు బాధ్యతాయుతంగా వాణిజ్యీకరించడానికి ప్రాథమిక నిబంధనలను అర్థం చేసుకునే అవకాశం ఉండాలి.",
      ],
      missionTitle: "మా లక్ష్యం",
      missionSubtitle:
        "సంక్లిష్ట చట్టపరమైన మరియు నియంత్రణ సమాచారాన్ని స్పష్టమైన, ఉపయోగకరమైన మార్గదర్శకత్వంగా మార్చడం.",
      missionIntro:
        "కృత్రిమ మేధస్సు (AI), రిట్రీవల్-ఆగ్మెంటెడ్ జనరేషన్ (RAG), బహుభాషా సాంకేతికతలు మరియు నమ్మకమైన వనరులను ఉపయోగించి ఆయుష్ సమాజానికి ఐపీఆర్ మరియు నియంత్రణ అవసరాలలో మార్గనిర్దేశం చేయడమే మా లక్ష్యం.",
      pillars: [
        {
          title: "అర్థం చేసుకోవడం",
          desc: "వినియోగదారులు తమ ఉత్పత్తి, ఫార్ములేషన్ మరియు ఐపీ స్థితిని స్పష్టంగా అర్థం చేసుకోవడంలో సహాయపడటం.",
        },
        {
          title: "మార్గదర్శకత్వం",
          desc: "సంబంధిత మేధో సంపత్తి, నియంత్రణ లేదా ఏబీఎస్ రంగాన్ని వెంటనే గుర్తించడం.",
        },
        {
          title: "ధృవీకరించడం",
          desc: "అధికారిక చట్టపరమైన మూలాలు మరియు అనులేఖనాల మద్దతుతో ఖచ్చితమైన సమాధానాలను అందించడం.",
        },
        {
          title: "సాధికారత",
          desc: "తదుపరి చర్యలు తీసుకోవడానికి లేదా సరైన నిపుణుడిని సంప్రదించడానికి వినియోగదారులకు పూర్తి స్పష్టత ఇవ్వడం.",
        },
      ],
      differentiatorsTitle: "ఐపీ శక్తి సహాయక్‌ను ప్రత్యేకంగా నిలబెట్టేది ఏమిటి?",
      differentiators: [
        {
          title: "సమాధానం ఇచ్చే ముందు శోధించే AI",
          content:
            "చాలా చాట్‌బాట్‌లు పాత శిక్షణ ఆధారంగా ఊహిస్తాయి. ఐపీ శక్తి సహాయక్ RAG ద్వారా పనిచేస్తుంది. సమాధానం ఇచ్చే ముందు ఇది అధికారిక పత్రాల రిపోజిటరీలో శోధిస్తుంది, కాబట్టి ప్రతి సమాధానం ప్రామాణికమైనది.",
        },
        {
          title: "ఆయుర్వేదం కోసం ప్రత్యేకంగా నిర్మించబడింది",
          content:
            "ఐపీ శక్తి సహాయక్ ఒక సాధారణ సహాయకుడు కాదు. సాంప్రదాయ విజ్ఞానం, జీవ వైవిధ్యం మరియు యాక్సెస్ & బెనిఫిట్ షేరింగ్ (ABS) వంటి ఆయుర్వేద రంగానికి సంబంధించిన ప్రత్యేక సవాళ్ల కోసం ఇది రూపొందించబడింది.",
        },
        {
          title: "ఉత్పత్తి వర్గీకరణ మొదట",
          content:
            "మీ ఉత్పత్తి శాస్త్రీయ ఔషధమా, కొత్త మందా లేదా న్యూట్రాస్యూటికలా అనే దానిపై నిబంధనలు ఆధారపడి ఉంటాయి. కాబట్టి సలహా ఇచ్చే ముందు వ్యవస్థ ఉత్పత్తి సందర్భాన్ని అర్థం చేసుకుంటుంది.",
        },
        {
          title: "అధికార పరిధుల స్పష్టమైన విభజన",
          content:
            "భారతదేశంలో చెల్లుబాటు అయ్యేవి విదేశాలలో మారవచ్చు. మా సిస్టమ్ భారతీయ చట్టాలను అంతర్జాతీయ నిబంధనల నుండి స్పష్టంగా వేరు చేస్తుంది.",
        },
        {
          title: "ఏబీఎస్ మరియు జీవ వైవిధ్య మార్గదర్శకత్వం",
          content:
            "ఔషధ మొక్కలు మరియు సాంప్రదాయ జ్ఞానాన్ని ఉపయోగించడంపై యాక్సెస్ & బెనిఫిట్ షేరింగ్ (ABS) మార్గదర్శకాలు వర్తిస్తాయి. ఈ నియమాలు మీకు వర్తిస్తాయా లేదా అని తెలుసుకోవడానికి సిస్టమ్ సహాయపడుతుంది.",
        },
        {
          title: "సాంప్రదాయ విజ్ఞానం మరియు ముందస్తు కళ (Prior Art)",
          content:
            "కొత్త ఆవిష్కరణ మరియు ఇప్పటికే ఉన్న సాంప్రదాయ జ్ఞానం మధ్య వ్యత్యాసాన్ని అర్థం చేసుకోవడం ముఖ్యం. మీ ఆలోచన నిజంగా కొత్తదో కాదో తెలుసుకోవడానికి సిస్టమ్ మిమ్మల్ని TKDL వంటి డేటాబేస్‌లకు నిర్దేశిస్తుంది.",
        },
        {
          title: "రూపకల్పనలోనే బహుభాషా స్వభావం",
          content:
            "చట్టపరమైన భాష కష్టంగా ఉంటుంది. మీరు మీకు నచ్చిన భాషలో ప్రశ్నలు అడగడానికి మరియు సమాధానాలు పొందడానికి అర్హులు. వ్యవస్థను అందరికీ అందుబాటులో ఉంచడానికి మేము నిరంతరం కృషి చేస్తున్నాము.",
        },
        {
          title: "ధృవీకరించదగిన మరియు మూల ఆధారిత సమాధానాలు",
          content:
            "నియంత్రణ విషయాలలో విశ్వసనీయత చాలా ముఖ్యం. ప్రతి సమాధానంతో పాటు చట్టాలు మరియు అధికారిక సూచనలు ఉంటాయి, తద్వారా మీరు స్వయంగా మూలాల నుండి నిర్ధారించుకోవచ్చు.",
        },
        {
          title: "మానవ నిపుణుల సహాయం (Escalation)",
          content:
            "ఏదైనా ప్రశ్న చాలా సంక్లిష్టంగా ఉన్నప్పుడు, వ్యవస్థ ఊహించదు. అది మిమ్మల్ని అర్హత కలిగిన మానవ ఐపీ నిపుణులు మరియు సలహాదారులతో కలుపుతుంది.",
        },
      ],
      howItWorksTitle: "మా స్మార్ట్ విధానం",
      howItWorksSubtitle: "ఐపీ శక్తి సహాయక్ ఎలా పనిచేస్తుంది",
      steps: [
        {
          title: "మీరు దేనిపై పనిచేస్తున్నారో మాకు చెప్పండి",
          desc: "మీ ఆయుర్వేద ఉత్పత్తి, ఫార్ములేషన్ లేదా నియంత్రణ ప్రశ్నను మీ స్వంత మాటలలో వివరించండి.",
        },
        {
          title: "అర్థం చేసుకోవడం మరియు వర్గీకరించడం",
          desc: "మీ ఉత్పత్తి యొక్క ఖచ్చితమైన సందర్భాన్ని అర్థం చేసుకోవడానికి ఐపీ శక్తి సహాయక్ కొన్ని శీఘ్ర ప్రశ్నలను అడుగుతుంది.",
        },
        {
          title: "సంబంధిత రంగాన్ని గుర్తించడం",
          desc: "మీ ఆందోళన పేటెంట్లు, ట్రేడ్‌మార్క్‌లు, ఔషధ నిబంధనలు లేదా ఏబీఎస్‌కు సంబంధించినదా అని వ్యవస్థ గుర్తిస్తుంది.",
        },
        {
          title: "నమ్మకమైన సమాచారాన్ని తిరిగి పొందడం",
          desc: "మా RAG ఇంజిన్ అత్యంత సంబంధిత నిబంధనలను కనుగొనడానికి చట్టాలు మరియు అధికారిక రికార్డులను స్కాన్ చేస్తుంది.",
        },
        {
          title: "సాధారణ సమాధానాన్ని సిద్ధం చేయడం",
          desc: "ఐపీ శక్తి సహాయక్ సంక్లిష్ట చట్టపరమైన సమాచారాన్ని సరళమైన, అర్థమయ్యే సలహాగా మారుస్తుంది.",
        },
        {
          title: "మూలాలు మరియు ప్రామాణికతను చూపడం",
          desc: "అధికారిక మూలాల ప్రత్యక్ష అనులేఖనాలతో మీరు స్పష్టమైన సమాధానాన్ని పొందుతారు.",
        },
        {
          title: "తదుపరి దశలలో సహాయం",
          desc: "పరిస్థితి సంక్లిష్టంగా ఉంటే, ప్రక్రియను ముందుకు తీసుకెళ్లడానికి మేము మానవ నిపుణుడి వైపు మార్గనిర్దేశం చేస్తాము.",
        },
      ],
    },
    privacy: {
      title: "గోప్యతా విధానం",
      subtitle:
        "డేటా సార్వభౌమాధికారం, సెషన్ వేర్పాటు మరియు కార్యాచరణ గోప్యతను నియంత్రించే సమగ్ర ఫ్రేమ్‌వర్క్.",
      tldrLabel: "సంక్షిప్త సారాంశం (TL;DR)",
      sections: [
        {
          id: "introduction",
          title: "పరిచయం",
          tldr: "ఐపీ శక్తి సహాయక్ సున్నితమైన మేధో సంపత్తి మరియు సాంప్రదాయ పరిజ్ఞానాన్ని కఠినమైన విద్యా మరియు గోప్యతా రక్షణలతో నిర్వహిస్తుంది.",
          tags: ["అవలోకనం", "నిబద్ధత"],
          metadata: { "అమలు తేదీ": "సెప్టెంబర్ 2026", "భద్రతా స్థాయి": "ప్రామాణికం" },
          paragraphs: [
            "ఆయుర్వేదం, మేధో సంపత్తి హక్కులు (IPR), ప్రాప్యత మరియు ప్రయోజన భాగస్వామ్యం (ABS) మరియు నియంత్రణ ఫ్రేమ్‌వర్క్‌లపై మార్గదర్శకత్వం అందించే ఆధునిక AI సహాయక వ్యవస్థ అయిన ఐపీ శక్తి సహాయక్‌కు స్వాగతం. అత్యంత గోప్యమైన విద్యా అనుభవాన్ని అందించడానికి మా మౌలిక సదుపాయాలు రూపొందించబడ్డాయి.",
            "ఖచ్చితమైన, సంబంధిత మరియు ప్రామాణికమైన సమాధానాలను రూపొందించడానికి మాత్రమే మేము మీ ప్రశ్నలు మరియు పత్రాలను ప్రాసెస్ చేస్తాము. మీ సంభాషణ సురక్షిత సెషన్‌లలో పూర్తిగా వేరుగా ఉంటుంది మరియు ఎప్పటికీ బయటి మార్కెటింగ్ ఏజెన్సీలకు విక్రయించబడదు.",
          ],
        },
        {
          id: "data-privacy",
          title: "డేటా మరియు గోప్యత",
          tldr: "సున్నితమైన మేధో సంపత్తి డేటాను రక్షించడానికి వినియోగదారు సెషన్‌లు పూర్తిగా వేరు చేయబడి ఉంటాయి.",
          tags: ["సెషన్ వేర్పాటు", "గోప్యతా ప్రాధాన్యత"],
          metadata: { "సమీక్ష స్థితి": "ఆడిట్ చేయబడింది", "ఫ్రేమ్‌వర్క్": "జీరో-ట్రస్ట్" },
          paragraphs: [
            "వినియోగదారు సమాచార సేకరణ మరియు ప్రాసెసింగ్ పూర్తిగా బాధ్యతాయుతంగా ఉండేలా ఐపీ శక్తి సహాయక్ గోప్యత-మొదటి విధానంతో రూపొందించబడింది. ఈ ప్లాట్‌ఫారమ్ మేధో సంపత్తి, సాంప్రదాయ జ్ఞానం మరియు నియంత్రణ ప్రశ్నలను నిర్వహిస్తుంది కాబట్టి, డేటా భద్రత మా వ్యవస్థలో అంతర్భాగం.",
            "ఈ ప్లాట్‌ఫారమ్‌లో అడిగే ప్రశ్నలలో గోప్యమైన ఆలోచనలు ఉంటాయని మేము అర్థం చేసుకున్నాము. అందువల్ల మా డేటా పైప్‌లైన్ వేర్వేరు వినియోగదారు ఖాతాల మధ్య డేటా కలయికను ఖచ్చితంగా నిరోధిస్తుంది. అన్ని ప్రాసెసింగ్‌లు పూర్తిగా సురక్షిత వాతావరణంలో జరుగుతాయి.",
            "మీ సంభాషణ చరిత్ర అనధికారిక వ్యక్తులు లేదా బాహ్య సంస్థలకు ఎప్పటికీ బహిర్గతం కాకుండా మా భద్రతా బృందాలు ఆధునిక ప్రమాణాల ప్రకారం ప్రోటోకాల్‌లను నిరంతరం సమీక్షిస్తాయి.",
          ],
        },
        {
          id: "data-minimization",
          title: "కనీస డేటా సేకరణ",
          tldr: "చట్టపరమైన మరియు నియంత్రణ ప్రశ్నల ప్రాసెసింగ్ కోసం ఖచ్చితంగా అవసరమైన డేటాను మాత్రమే మేము సేకరిస్తాము.",
          tags: ["కనీస సేకరణ", "స్వయంచాలక ప్రక్షాళన"],
          metadata: { "డేటా పరిధి": "ఖచ్చితమైనది", "శుద్ధి చక్రం": "స్వయంచాలకం" },
          paragraphs: [
            "సంబంధిత ఆయుర్వేద, ఐపీఆర్ మరియు నియంత్రణ మార్గదర్శకత్వం అందించడానికి అత్యంత అవసరమైన సమాచారాన్ని మాత్రమే సేకరించే సూత్రాన్ని మా సిస్టమ్ అనుసరిస్తుంది. అనవసరమైన వ్యక్తిగత లేదా సున్నితమైన సమాచారం ఎప్పుడూ అభ్యర్థించబడదు.",
            "మీరు సిస్టమ్‌తో సంభాషించినప్పుడు, మేము అనవసరమైన మెటాడేటాను లాగింగ్ చేయకుండా నివారిస్తాము. సంభాషణ సమయంలో వచ్చిన ఏదైనా అదనపు డేటా స్వయంచాలక ప్రక్రియల ద్వారా క్రమం తప్పకుండా తొలగించబడుతుంది.",
            "ఈ ఖచ్చితమైన డేటా కనిష్టీకరణ విధానం మా డిజిటల్ పాదముద్రను తక్కువగా ఉంచుతుంది మరియు వినియోగదారు గోప్యతను కాపాడుతుంది.",
          ],
        },
        {
          id: "user-data-protection",
          title: "వినియోగదారు డేటా రక్షణ",
          tldr: "అన్ని వినియోగదారు డేటా పరిశ్రమ-ప్రామాణిక ఎన్‌క్రిప్షన్ మరియు నిజ-సమయ అనధికారిక యాక్సెస్ పర్యవేక్షణ ద్వారా రక్షించబడుతుంది.",
          tags: ["ఎన్‌క్రిప్షన్", "నిరంతర పర్యవేక్షణ"],
          metadata: { "ఎన్‌క్రిప్షన్": "AES-256", "పర్యవేక్షణ": "24/7 సక్రియం" },
          paragraphs: [
            "వ్యక్తిగత సమాచారం మరియు కంటెంట్‌ను అనధికారిక యాక్సెస్, బహిర్గతం లేదా దుర్వినియోగం నుండి రక్షించడానికి తగిన భద్రతా చర్యలతో నిర్వహించబడుతుంది. మేము డేటా ప్రసారం మరియు నిల్వ రెండింటిలోనూ ఆధునిక ఎన్‌క్రిప్షన్‌ను ఉపయోగిస్తాము.",
            "మా మౌలిక సదుపాయాలలో సమగ్ర యాక్సెస్ లాగ్‌లు మరియు నిజ-సమయ పర్యవేక్షణ వ్యవస్థలు ఉన్నాయి, ఇవి అనధికారిక యాక్సెస్ ప్రయత్నాలను వెంటనే గుర్తించి నిరోధిస్తాయి.",
            "భద్రతా సమస్యల అరుదైన సందర్భంలో, ప్రభావిత ప్రాంతాలను తక్షణమే రక్షించడానికి మా ప్రతిస్పందన ప్రోటోకాల్‌లు రూపొందించబడ్డాయి. మీ డేటా సమగ్రతను కాపాడటం మా అత్యున్నత ప్రాధాన్యత.",
          ],
        },
        {
          id: "confidential-information",
          title: "గోప్యమైన సమాచార సంరక్షణ",
          tldr: "పేటెంట్ లేని వాణిజ్య రహస్యాలు లేదా ఖచ్చితమైన రసాయన నిష్పత్తులను నమోదు చేయవద్దని వినియోగదారులకు గట్టిగా సలహా ఇవ్వబడింది.",
          tags: ["వాణిజ్య రహస్యాలు", "జాగ్రత్త"],
          metadata: { "ప్రమాద స్థాయి": "అధికం", "మార్గదర్శకం": "సాధారణ ప్రశ్నలు అడగండి" },
          paragraphs: [
            "ప్రచురించబడని ఆవిష్కరణలు, వాణిజ్య రహస్యాలు, యాజమాన్య సూత్రాలు మరియు సున్నితమైన వ్యాపార సమాచారాన్ని సిస్టమ్‌లో నమోదు చేయవలసిన అవసరం లేదని వినియోగదారులకు స్పష్టంగా తెలియజేయబడింది.",
            "అత్యంత సున్నితమైన ఫార్ములేషన్ల విషయంలో సాధారణ నియంత్రణ సూత్రాల ఆధారంగా ప్రశ్నలు అడగాలని మేము వినియోగదారులకు సలహా ఇస్తున్నాము, తద్వారా వాణిజ్య రహస్యాలపై మీ పూర్తి నియంత్రణ ఉంటుంది.",
            "ఈ ప్లాట్‌ఫారమ్ చట్టాలను వివరించడానికి ఉద్దేశించబడింది, ప్రచురించబడని మేధో సంపత్తికి సురక్షితమైన ఖజానాగా కాదు. ఈ వ్యత్యాసాన్ని నిర్వహించడం మీ యాజమాన్య హక్కులను రక్షిస్తుంది.",
          ],
        },
        {
          id: "secure-transmission",
          title: "సురక్షిత డేటా ప్రసారం",
          tldr: "అన్ని సమాచార మార్పిడి అధునాతన HTTPS మరియు TLS క్రిప్టోగ్రాఫిక్ ప్రోటోకాల్స్ ద్వారా రక్షించబడుతుంది.",
          tags: ["HTTPS", "TLS 1.3"],
          metadata: { "ప్రోటోకాల్": "ఖచ్చితమైన TLS", "సర్టిఫికెట్": "ఆటో పునరుద్ధరణ" },
          paragraphs: [
            "వినియోగదారు మరియు ప్లాట్‌ఫారమ్ మధ్య జరిగే అన్ని కమ్యూనికేషన్లు సురక్షిత ప్రోటోకాల్‌లను ఉపయోగిస్తాయి. ఈ ప్రోటోకాల్‌లు మీ బ్రౌజర్ మరియు మా సర్వర్‌ల మధ్య సురక్షితమైన సొరంగం ఏర్పాటు చేస్తాయి.",
            "మేము సురక్షిత కనెక్షన్‌లను మాత్రమే అంగీకరిస్తాము మరియు పాత లేదా అసురక్షిత ప్రోటోకాల్‌ల ద్వారా కమ్యూనికేట్ చేయడానికి చేసే ఏవైనా ప్రయత్నాలను తిరస్కరిస్తాము.",
            "ఆధునిక సాంకేతిక ముప్పుల కంటే ముందుండటానికి మా భద్రతా ధృవీకరణ పత్రాలు క్రమం తప్పకుండా పునరుద్ధరించబడతాయి.",
          ],
        },
        {
          id: "user-control",
          title: "వినియోగదారు నియంత్రణ మరియు సమ్మతి",
          tldr: "అదనపు డేటా ప్రాసెసింగ్ కోసం వినియోగదారు స్పష్టమైన సమ్మతి అవసరం, దీనిని ఎప్పుడైనా ఉపసంహరించుకోవచ్చు.",
          tags: ["సమ్మతి", "నియంత్రణ"],
          metadata: { "డిఫాల్ట్ స్థితి": "ఆప్ట్-అవుట్", "ఉపసంహరణ": "తక్షణం" },
          paragraphs: [
            "వినియోగదారులు తమ సమాచారం మరియు అనుమతులపై పూర్తి నియంత్రణను కలిగి ఉంటారు. ప్రాథమిక సేవకు మించి ఏదైనా ప్రాసెసింగ్ చేయడానికి ముందు స్పష్టమైన సమ్మతి తీసుకోబడుతుంది.",
            "మా ఇంటర్‌ఫేస్ అనుమతుల నిర్వహణను సరళంగా మరియు పారదర్శకంగా చేస్తుంది. వినియోగదారులు ఎటువంటి ఆటంకం లేకుండా ఎప్పుడైనా తమ అనుమతులను మార్చుకోవచ్చు లేదా ఉపసంహరించుకోవచ్చు.",
            "మేము క్రియాశీల సమ్మతి సిద్ధాంతంపై పనిచేస్తాము. అదనపు డేటా యాక్సెస్ అవసరమయ్యే ఫీచర్లు డిఫాల్ట్‌గా నిలిపివేయబడి ఉంటాయి.",
          ],
        },
        {
          id: "access-deletion",
          title: "డేటా యాక్సెస్ మరియు తొలగింపు",
          tldr: "వినియోగదారులు తమ చరిత్రను సమీక్షించడానికి, ఎగుమతి చేయడానికి లేదా శాశ్వతంగా తొలగించడానికి పూర్తి స్వేచ్ఛను కలిగి ఉన్నారు.",
          tags: ["తొలగింపు", "పోర్టబిలిటీ"],
          metadata: { "ప్రక్రియ సమయం": "తక్షణం", "తొలగింపు": "పూర్తి" },
          paragraphs: [
            "ప్లాట్‌ఫారమ్ వినియోగదారులకు వారి నిల్వ చేసిన సమాచారాన్ని నిర్వహించడానికి, లోపాలను సరిదిద్దడానికి మరియు అవసరమైతే పూర్తి డేటాను తొలగించడానికి సౌకర్యాన్ని అందిస్తుంది.",
            "మీరు ప్లాట్‌ఫారమ్‌ను ఉపయోగించడం ఆపివేయాలని నిర్ణయించుకుంటే, మీరు పూర్తి డేటా తొలగింపు ప్రక్రియను ప్రారంభించవచ్చు. ఇది మీ ప్రశ్న చరిత్ర మరియు రికార్డులను డేటాబేస్ నుండి శాశ్వతంగా తొలగిస్తుంది.",
            "డేటా యొక్క నిజమైన యాజమాన్యం వినియోగదారుడిదేనని మేము విశ్వసిస్తున్నాము. మేము ఓపెన్ ఫార్మాట్లలో డేటా ఎగుమతి ఎంపికను కూడా అందిస్తున్నాము.",
          ],
        },
        {
          id: "third-party-audits",
          title: "మూడవ పక్ష ఆడిట్ మరియు సమ్మతి",
          tldr: "నియంత్రణ సమ్మతి మరియు భద్రతను నిర్ధారించడానికి సిస్టమ్ క్రమానుగతంగా స్వతంత్ర మూల్యాంకనానికి లోనవుతుంది.",
          tags: ["ఆడిట్", "సమ్మతి"],
          metadata: { "ఫ్రీక్వెన్సీ": "త్రైమాసికం", "ప్రమాణం": "ISO 27001" },
          paragraphs: [
            "మా భద్రతా ప్రమాణాలను నిర్ధారించడానికి, మేము మా సిస్టమ్ ఆర్కిటెక్చర్‌పై క్రమానుగతంగా స్వతంత్ర భద్రత మరియు సమ్మతి ఆడిట్‌లను నిర్వహిస్తాము.",
            "ఈ స్వతంత్ర మూల్యాంకనాలు అంతర్జాతీయ భద్రతా ప్రమాణాలకు అనుగుణంగా మా ఎన్‌క్రిప్షన్ ప్రోటోకాల్‌లు మరియు డేటా వేర్పాటు వ్యవస్థలను కఠినంగా పరీక్షిస్తాయి.",
            "బాహ్య సమీక్షల ద్వారా, మేము మా వినియోగదారులకు సాంకేతిక పటిష్టత మరియు వృత్తి నైపుణ్యంపై లక్ష్యాత్మక హామీని అందిస్తాము.",
          ],
        },
        {
          id: "policy-updates",
          title: "విధాన నవీకరణలు మరియు నోటీసులు",
          tldr: "గోప్యతా విధానంలో ముఖ్యమైన మార్పులు ఇన్-యాప్ ప్రకటనల ద్వారా ముందుగానే తెలియజేయబడతాయి.",
          tags: ["పారదర్శకత", "నిరంతరత"],
          metadata: { "నోటీసు వ్యవధి": "30 రోజులు", "డెలివరీ": "ఇన్-యాప్" },
          paragraphs: [
            "చట్టపరమైన పరిస్థితులు అభివృద్ధి చెందుతున్నప్పుడు మరియు మా మౌలిక సదుపాయాలు మెరుగుపడుతున్నప్పుడు, ఈ గోప్యతా విధానం నవీకరించబడవచ్చు.",
            "మేము పూర్తి పారదర్శకతను కొనసాగించడానికి కట్టుబడి ఉన్నాము. డేటా నిర్వహణను ప్రభావితం చేసే ఏవైనా పెద్ద మార్పులు జరిగితే, ముందస్తు ఇన్-యాప్ నోటీసులు మరియు సారాంశాలు అందించబడతాయి.",
            "సవరించిన నిబంధనల ప్రచురణ తర్వాత ప్లాట్‌ఫారమ్‌ను ఉపయోగించడం నవీకరించబడిన విధానాలను ఆమోదించినట్లుగా పరిగణించబడుతుంది.",
          ],
        },
      ],
    },
    terms: {
      title: "నిబంధనలు మరియు షరతులు",
      subtitle:
        "విద్యాపరమైన ఉపయోగం, చట్టపరమైన పరిమితులు మరియు బాధ్యతలను నియంత్రించే సమగ్ర చట్టపరమైన ఫ్రేమ్‌వర్క్.",
      items: [
        {
          id: 1,
          title: "ప్లాట్‌ఫారమ్ ఉద్దేశ్యం",
          content:
            "ఐపీ శక్తి సహాయక్ అనేది ఆయుర్వేదానికి సంబంధించిన మేధో సంపత్తి హక్కులు (IPR), నియంత్రణ అవసరాలు, సాంప్రదాయ విజ్ఞానం, జీవ వైవిధ్యం మరియు యాక్సెస్ & బెనిఫిట్ షేరింగ్ (ABS) పై సమాచార మరియు ప్రాథమిక మార్గదర్శకత్వం అందించడానికి రూపొందించబడిన AI-ఆధారిత ప్లాట్‌ఫారమ్.",
        },
        {
          id: 2,
          title: "చట్టపరమైన లేదా వృత్తిపరమైన సలహా కాదు",
          content:
            "ఐపీ శక్తి సహాయక్ అందించిన సమాచారం విద్యా మరియు సమాచార ప్రయోజనాల కోసం మాత్రమే. ఇది చట్టపరమైన, నియంత్రణ, వైద్య లేదా వృత్తిపరమైన సలహా కాదు మరియు అర్హత కలిగిన న్యాయవాది, ఐపీ నిపుణుడు లేదా నియంత్రణ అథారిటీకి ప్రత్యామ్నాయం కాదు.",
        },
        {
          id: 3,
          title: "AI రూపొందించిన సమాధానాలు",
          content:
            "సమాధానాలను రూపొందించడానికి ప్లాట్‌ఫారమ్ కృత్రిమ మేధస్సు మరియు రిట్రీవల్-ఆగ్మెంటెడ్ జనరేషన్ (RAG) లను ఉపయోగిస్తుంది. సిస్టమ్ నమ్మకమైన సమాచారాన్ని అందించడానికి నిర్మించబడినప్పటికీ, AI సమాధానాలలో లోపాలు లేదా అసంపూర్ణ వివరణలు ఉండవచ్చు.",
        },
        {
          id: 4,
          title: "మూల-ధృవీకరించబడిన సమాచారం",
          content:
            "అందుబాటులో ఉన్న చోట, సమాధానాలలో అధికారిక చట్టాలు, నియమాలు, నిబంధనలు, ఒప్పందాలు మరియు ప్రభుత్వ డేటాబేస్‌ల సూచనలు ఉంటాయి. వినియోగదారులు మూల వనరుల నుండి ముఖ్యమైన సమాచారాన్ని ధృవీకరించుకోవాలని సూచించబడింది.",
        },
        {
          id: 5,
          title: "వినియోగదారు బాధ్యత",
          content:
            "ఖచ్చితమైన సమాచారాన్ని అందించడానికి మరియు ఏదైనా చట్టపరమైన, నియంత్రణ లేదా వాణిజ్య నిర్ణయాలు తీసుకునే ముందు మార్గదర్శకత్వాన్ని స్వతంత్రంగా నిర్ధారించుకోవడానికి వినియోగదారులు బాధ్యత వహిస్తారు.",
        },
        {
          id: 6,
          title: "అధికార పరిధి మరియు వర్తించే చట్టం",
          content:
            "అందించబడిన మార్గదర్శకత్వం ప్రధానంగా భారతీయ చట్టాలు మరియు నియంత్రణ ఫ్రేమ్‌వర్క్‌లపై (పేటెంట్స్ చట్టం, జీవ వైవిధ్య చట్టం, డ్రగ్స్ & కాస్మెటిక్స్ చట్టం) దృష్టి సారిస్తుంది. అంతర్జాతీయ దృక్పథాలు కేవలం సంభావిత సూచన కోసం మాత్రమే.",
        },
        {
          id: 7,
          title: "ఎటువంటి హామీ లేదా వారంటీ లేదు",
          content:
            "ఈ ప్లాట్‌ఫారమ్ ఏ నిర్దిష్ట చట్టపరమైన ఫలితం, పేటెంట్ మంజూరు, ట్రేడ్‌మార్క్ ఆమోదం, నియంత్రణ లైసెన్స్ లేదా సమ్మతి ధృవీకరణకు హామీ ఇవ్వదు.",
        },
        {
          id: 8,
          title: "గోప్యమైన మరియు సున్నితమైన సమాచారం",
          content:
            "వినియోగదారులు ప్రచురించబడని ఆవిష్కరణలు, వాణిజ్య రహస్యాలు, రసాయన నిష్పత్తులు లేదా ఇతర గోప్యమైన వాణిజ్య డేటాను ప్లాట్‌ఫారమ్‌లో నమోదు చేయకూడదు.",
        },
        {
          id: 9,
          title: "సాంప్రదాయ విజ్ఞానం మరియు జీవ వైవిధ్య సమ్మతి",
          content:
            "సాంప్రదాయ విజ్ఞానం (TKDL), జీవ వైవిధ్య చట్టం మరియు యాక్సెస్ & బెనిఫిట్ షేరింగ్ (ABS) కు సంబంధించిన మార్గదర్శకత్వం విద్యాపరమైనది మరియు వినియోగదారులను చట్టబద్ధమైన బాధ్యతల నుండి మినహాయించదు.",
        },
        {
          id: 10,
          title: "ప్లాట్‌ఫారమ్ మేధో సంపత్తి యాజమాన్యం",
          content:
            "ఐపీ శక్తి సహాయక్‌తో అనుబంధించబడిన అన్ని విషయాలు, ఆర్కిటెక్చర్, సాఫ్ట్‌వేర్, నమూనాలు, బ్రాండింగ్ కాపీరైట్ మరియు మేధో సంపత్తి చట్టాల ద్వారా రక్షించబడ్డాయి.",
        },
        {
          id: 11,
          title: "ఆమోదయోగ్యమైన ఉపయోగం",
          content:
            "ప్లాట్‌ఫారమ్‌ను దుర్వినియోగం చేయకూడదని, దాని భాగాలను రివర్స్-ఇంజనీరింగ్ చేయకూడదని, హానికరమైన కోడ్‌ను చొప్పించకూడదని లేదా అనధికారిక డేటా స్క్రాపింగ్‌లో పాల్గొనకూడదని వినియోగదారులు అంగీకరిస్తున్నారు.",
        },
        {
          id: 12,
          title: "మూడవ పక్ష లింకులు",
          content:
            "ప్లాట్‌ఫారమ్‌లో బాహ్య వెబ్‌సైట్‌లు లేదా ప్రభుత్వ పోర్టల్‌ల లింక్‌లు ఉండవచ్చు. బాహ్య కంటెంట్‌కు ఐపీ శక్తి సహాయక్ బాధ్యత వహించదు.",
        },
        {
          id: 13,
          title: "మానవ నిపుణుల సహాయం (Escalation)",
          content:
            "సంక్లిష్ట విషయాలలో, ప్లాట్‌ఫారమ్ మానవ నిపుణుల సంప్రదింపులను సూచించవచ్చు. ఇటువంటి సూచనలు అధికారిక న్యాయవాది-క్లయింట్ సంబంధాన్ని ఏర్పరచవు.",
        },
        {
          id: 14,
          title: "బాధ్యత పరిమితి",
          content:
            "చట్టం అనుమతించిన గరిష్ట మేరకు, ప్లాట్‌ఫారమ్‌ను ఉపయోగించడం వల్ల కలిగే ప్రత్యక్ష లేదా పరోక్ష నష్టాలకు ఐపీ శక్తి సహాయక్ మరియు దాని డెవలపర్లు బాధ్యత వహించరు.",
        },
        {
          id: 15,
          title: "డేటా గోప్యత మరియు నిర్వహణ",
          content:
            "వినియోగదారు ప్రశ్నలు మా గోప్యతా విధానం ప్రకారం ప్రాసెస్ చేయబడతాయి. ప్రశ్నలను పరిష్కరించడానికి అవి AI నమూనాల ద్వారా ప్రాసెస్ చేయబడతాయని వినియోగదారులు అంగీకరిస్తున్నారు.",
        },
        {
          id: 16,
          title: "సేవ లభ్యత",
          content:
            "ప్లాట్‌ఫారమ్ 'ఉన్నది ఉన్నట్లుగా' మరియు 'అందుబాటులో ఉన్న ప్రాతిపదికన' అందించబడుతుంది. ముందస్తు నోటీసు లేకుండా ఫీచర్లు సవరించబడవచ్చు లేదా తాత్కాలికంగా నిలిపివేయబడవచ్చు.",
        },
        {
          id: 17,
          title: "నిబంధనలలో మార్పులు",
          content:
            "ఈ నిబంధనలను ఎప్పుడైనా సవరించే హక్కు మాకు ఉంది. సవరించిన నిబంధనల ప్రచురణ తర్వాత నిరంతర ఉపయోగం వాటిని ఆమోదించినట్లుగా పరిగణించబడుతుంది.",
        },
        {
          id: 18,
          title: "సంప్రదింపులు మరియు అభిప్రాయం",
          content:
            "ఈ నిబంధనలకు సంబంధించి ప్రశ్నలు లేదా అభిప్రాయాల కోసం, దయచేసి మా నిర్దేశిత మద్దతు ఛానెల్‌ల ద్వారా సంప్రదించండి.",
        },
      ],
    },
    team: {
      title: "టీమ్ కోడ్‌వేద",
      desc: "ఈ ప్రత్యేక బృందం పేజీ ప్రస్తుతం ఖాళీగా ఉంది, కానీ మేము భవిష్యత్తులో దీనిని అభివృద్ధి చేస్తాము.",
    },
    settings: {
      title: "సెట్టింగ్‌లు",
      subtitle: "మీ అప్లికేషన్ ప్రాధాన్యతలను నిర్వహించండి",
      themeTitle: "రూపం & థీమ్",
      themes: {
        saffron: {
          name: "కేసరి (హిందూత్వం)",
          desc: "అత్యంత శక్తివంతమైన మరియు పవిత్రమైన కాషాయ యూజర్ ఇంటర్‌ఫేస్ మినహా, ప్రాపంచిక కోరికల నుండి సంపూర్ణ నిర్లిప్తతను సాధించేందుకు సిద్ధమైన థీమ్. జై శ్రీ రామ్.",
        },
        blue: {
          name: "ప్రగతి (భీమ్)",
          desc: "సంపూర్ణ జాతీయ రాజ్యాంగాన్ని రూపొందించడానికి అవసరమైన దృఢమైన మేధో విచక్షణను ప్రతిబింబించే థీమ్. జై భీమ్, జై భారత్.",
        },
        green: {
          name: "సమృద్ధి (ఉమ్మా)",
          desc: "విశ్వవ్యాప్త సోదరభావం మరియు ఐక్యత యొక్క లోతైన భావాన్ని పెంపొందించే ప్రశాంతమైన థీమ్. అల్లాహు అక్బర్.",
        },
        dark: {
          name: "అంధకార్ (డార్క్)",
          desc: "విశ్వాంతరాళపు నిశ్శబ్దాన్ని ఆలింగనం చేసుకోండి. అన్ని డిజిటల్ స్క్రీన్‌లు మాయ అని గ్రహించే సమయాల కోసం కళ్ళను రక్షించే డార్క్ థీమ్.",
        },
      },
    },
  },
  bn: {
    dashboard: {
      badge: "ডায়নামিক অ্যানালিটিক্স ড্যাশবোর্ড",
      title: "আয়ুষ কমপ্লায়েন্স এবং ঝুঁকি বিশ্লেষণ",
      subtitle: "অ্যাসেসমেন্ট জমা থেকে আপডেট করা লাইভ ঝুঁকি মেট্রিক্স।",
      runAssessment: "নতুন মূল্যায়ন চালান",
      recentLogsTitle: "সাম্প্রতিক মূল্যায়ন ঝুঁকি লগ",
      recentLogsSubtitle: "মূল্যায়ন ফর্ম থেকে সর্বশেষ মূল্যায়ন।",
      tableHeaders: {
        productName: "পণ্যের নাম",
        category: "বিভাগ",
        riskScore: "ঝুঁকি স্কোর",
        status: "অবস্থা",
        audited: "অডিট করা হয়েছে"
      },
      totalAudited: "মোট পণ্য অডিট করা হয়েছে",
      highRisk: "উচ্চ ঝুঁকি ফ্ল্যাগ",
      clearances: "নিয়ন্ত্রক ছাড়পত্র",
      avgScore: "গড় কমপ্লায়েন্স স্কোর",
      liveEvaluation: "লাইভ মূল্যায়ন"
    },
    common: {
      downloadPdf: "পিডিএফ ডাউনলোড করুন",
      exporting: "রপ্তানি করা হচ্ছে...",
      startNewAssessment: "নতুন মূল্যায়ন শুরু করুন",
      learnMore: "আরও জানুন",
      tryAgain: "আবার চেষ্টা করুন",
      accessDatabase: "ডাটাবেস অ্যাক্সেস করুন",
      accessFile: "ফাইল অ্যাক্সেস করুন",
      loading: "লোড হচ্ছে...",
    },
    search: {
      buttonLabel: "অনুসন্ধান করুন...",
      placeholder: "আইন, মূল্যায়ন মডিউল, বিশেষজ্ঞ, পৃষ্ঠা অনুসন্ধান করুন...",
      quickLinks: "জনপ্রিয় বিষয় এবং দ্রুত লিঙ্ক",
      noResultsTitle: "কোনো ফলাফল পাওয়া যায়নি",
      noResultsDesc: "আপনার অনুসন্ধানের সাথে মিলে এমন কোনো তথ্য ওয়েবসাইটে খুঁজে পাওয়া যায়নি।",
      askAiCta: "এআই আইনি সহকারীকে জিজ্ঞাসা করুন",
      allCategories: "সব",
      pagesCategory: "পৃষ্ঠা এবং সরঞ্জাম",
      lawsCategory: "আইন এবং উৎস",
      modulesCategory: "মূল্যায়ন মডিউল",
      expertsCategory: "বিশেষজ্ঞ এবং পোর্টাল",
      legalCategory: "আইনি ও গোপনীয়তা",
      navigateHint: "नेভিগেট",
      selectHint: "নির্বাচন",
      closeHint: "বন্ধ",
    },
    nav: {
      brandName: "আইপি শক্তি সহায়ক",
      home: "হোম",
      assessment: "মূল্যায়ন",
      legalCorpus: "আইনি সংগ্রহ",
      expertEscalation: "বিশেষজ্ঞ সহায়তা",
      aiAssistant: "এআই সহকারী",
      aboutUs: "আমাদের সম্পর্কে",
      privacyPolicy: "গোপনীয়তা নীতি",
      termsAndConditions: "শর্তাবলী ও নিয়ম",
      teamCodeveda: "টিম কোডবেদা",
      selectLanguage: "ভাষা",
      english: "English",
      hindi: "हिन्दी (Hindi)",
      marathi: "मराठी (Marathi)",
      tamil: "தமிழ் (Tamil)",
      telugu: "తెలుగు (Telugu)",
      bengali: "বাংলা (Bengali)",
      kannada: "ಕನ್ನಡ (Kannada)",
      sanskrit: "संस्कृतम् (Sanskrit)",
      gujarati: "ગુજરાતી (Gujarati)",
    },
    home: {
      heroBadge: "আইনি সম্মতির ভবিষ্যতে আপনাকে স্বাগতম",
      heroTitlePrefix: "সহজ করুন আপনার",
      heroTitleHighlight: "আয়ুর্বেদিক লাইসেন্সিং",
      heroSubtitle:
        "আইপি শক্তি সহায়ক হল একটি বুদ্ধিমান ও সমন্বিত পুনরুদ্ধার সহকারী, যা বিশেষ করে আয়ুষ (AYUSH) খাতের জটিল নিয়ন্ত্রক নীতিমালায় আপনাকে পথ দেখানোর জন্য প্রস্তুত করা হয়েছে।",
      startAssessment: "মূল্যায়ন শুরু করুন",
      browseLegalCorpus: "আইনি সংগ্রহ ব্রাউজ করুন",
      cards: {
        complianceFirst: {
          title: "সম্মতিকে অগ্রাধিকার",
          desc: "আয়ুষ মন্ত্রণালয়ে আবেদন জমা দেওয়ার আগে সমস্ত নিয়ন্ত্রক মানদণ্ড পূরণ করেছেন কিনা তা নিশ্চিত করুন। আমরা স্বয়ংক্রিয়ভাবে আপনার তথ্য বিশ্লেষণ করি।",
        },
        regulatoryClarity: {
          title: "নিয়ন্ত্রক স্বচ্ছতা",
          desc: "ঔষধ ও প্রসাধন সামগ্রী আইন এবং জৈব বৈচিত্র্য আইনকে আধুনিক এআই বিশ্লেষণের মাধ্যমে সহজে বুঝুন।",
        },
        unifiedIntake: {
          title: "সমন্বিত অন্তর্ভুক্তি",
          desc: "আপনার এন্টারপ্রাইজ প্রকার, উদ্ভিজ্জ সংমিশ্রণ এবং প্রয়োজনীয় লাইসেন্স মূল্যায়ন করার একটিমাত্র সুশৃঙ্খল প্রক্রিয়া।",
        },
        deepSearch: {
          title: "গভীর আইনি সংগ্রহ অনুসন্ধান",
          desc: "আমাদের দ্রুত অনুসন্ধান ইঞ্জিনের মাধ্যমে হাজার হাজার অফিসিয়াল আয়ুষ পূর্ববর্তী নজির, নির্দেশিকা ও TKDL তথ্য খুঁজুন।",
          cta: "অনুসন্ধান ইঞ্জিন ব্যবহার করুন",
        },
      },
    },
    assessment: {
      step: "ধাপ",
      back: "পেছনে",
      continue: "চালিয়ে যান",
      generateReport: "সম্মতি প্রতিবেদন তৈরি করুন",
      selectAtLeastOne: "চালিয়ে যেতে অনুগ্রহ করে অন্তত একটি বিকল্প নির্বাচন করুন",
      analyzingTitle: "প্রোফাইল বিশ্লেষণ করা হচ্ছে",
      analyzingDesc:
        "গ্লোবাল রেগুলেটরি ফ্রেমওয়ার্কে শব্দার্থগত মিল অনুসন্ধান এবং আইনি বিশ্লেষণ চলছে...",
      failedTitle: "মূল্যায়ন ব্যর্থ হয়েছে",
      failedDesc: "আপনার অনুরোধ প্রক্রিয়া করতে সমস্যা হয়েছে।",
      fieldHelper: {
        title: "আয়ুষ নিয়ন্ত্রক প্রসঙ্গ",
        desc: "প্রথম তপশিলের গ্রন্থাবলী এবং ইন্ডিয়ান ফার্মাকোপিয়া (API) মানদণ্ডের ভিত্তিতে নির্দেশনা।",
      },
    },
    report: {
      riskLevels: {
        low: "কম ঝুঁকি",
        moderate: "মাঝারি ঝুঁকি",
        high: "উচ্চ ঝুঁকি",
      },
      aiComplete: "এআই মূল্যায়ন সম্পন্ন",
      legalGroundingTitle: "আইনি ভিত্তি",
      legalGroundingSubtitle:
        "নিয়ন্ত্রক সংগ্রহ থেকে সংগৃহীত সরাসরি স্বীকৃত আইনি উদ্ধৃতিসমূহ",
      noCitations: "আপনার প্রোফাইলের সাথে মিলে যাওয়া নির্দিষ্ট কোনো উদ্ধৃতি পাওয়া যায়নি।",
      actionPlanTitle: "কর্মপরিকল্পনা",
      actionPlanSubtitle: "নিয়ন্ত্রক সম্মতির জন্য প্রস্তাবিত পরবর্তী পদক্ষেপসমূহ",
      noActions: "নির্দিষ্ট কোনো পদক্ষেপের প্রয়োজন নেই।",
    },
    chat: {
      badge: "বুদ্ধিমান RAG সহকারী",
      title: "এআই আইনি সহকারী",
      subtitle:
        "তাৎক্ষণিক অন্তর্দৃষ্টি এবং নিয়ন্ত্রক নির্দেশনার জন্য আমাদের এআই আইনি সহকারীর সাথে পরামর্শ করুন।",
      header: "এআই আইনি সহকারী",
      initialGreeting:
        "নমস্কার! আমি আপনার এআই আইনি সহকারী। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
      inputPlaceholder: "এখানে আপনার বার্তা টাইপ করুন...",
      thinking: "চিন্তা করছে...",
      errorMessage:
        "এআই আইনি সহকারীর সাথে সংযোগ স্থাপন করা সম্ভব হয়নি। অনুগ্রহ করে নিশ্চিত করুন যে GEMINI_API_KEY কনফিগার করা আছে।",
    },
    corpus: {
      title: "আইনি সংগ্রহ",
      subtitle:
        "ভারতে স্বীকৃত অফিসিয়াল বুদ্ধিবৃত্তিক সম্পত্তি ডাটাবেস এবং গুরুত্বপূর্ণ নিয়ন্ত্রক নথি দেখুন।",
      officialSources: "অফিসিয়াল উৎসসমূহ",
      robustGroundedDatabase: "আমাদের শক্তিশালী ভিত্তিযুক্ত ডেটাবেস",
      sources: [
        {
          acronym: "TKDL",
          name: "ঐতিহ্যবাহী জ্ঞান ডিজিটাল লাইব্রেরি",
          desc: "ঐতিহ্যবাহী ভারতীয় চিকিৎসা জ্ঞানের অপব্যবহার ও অনুপযুক্ত পেটেন্ট রোধের সরকারি ডাটাবেস।",
        },
        {
          acronym: "ইন্ডিয়া কোড",
          name: "আইন ও বিধিমালा (ইন্ডিয়া কোড)",
          desc: "সমস্ত কেন্দ্রীয় ও রাজ্য আইনের অফিসিয়াল ডিজিটাল সংগ্রহস্থল।",
        },
        {
          acronym: "আইপি ইন্ডিয়া",
          name: "আইপি ইন্ডিয়া পাবলিক ডাটাবেস",
          desc: "পেটেন্ট, ট্রেডমার্ক, ডিজাইন এবং ভৌগোলিক নির্দেশক (GI) রেজিস্ট্রি অফিস।",
        },
        {
          acronym: "নথি ড্রাইভ",
          name: "অভ্যন্তরীণ নিয়ন্ত্রক নথিপত্র",
          desc: "সরকারি সার্কুলার ও নিয়ন্ত্রক নির্দেশিকার অভ্যন্তরীণ ডাটাবেস অ্যাক্সেস।",
        },
      ],
    },
    expert: {
      badge: "সরাসরি সহায়তা নেটওয়ার্ক",
      title: "বিশেষজ্ঞ সহায়তা",
      subtitle:
        "এআই নির্দেশনা এবং আনুষ্ঠানিক প্রশাসনিক পদক্ষেপের মধ্যকার দূরত্ব হ্রাস করুন। যাচাইকৃত আইনজীবী এবং নিয়ন্ত্রক কর্মকর্তাদের সাথে সরাসরি পরামর্শ করুন।",
      officialPortalsTitle: "অফিসিয়াল নিয়ন্ত্রক পোর্টালসমূহ",
      officialPortalsSubtitle: "সরকারি সংস্থা, সংবিধিবদ্ধ ডিরেক্টরি এবং ফাইলিং পোর্টাল",
      verifiedSpecialistsTitle: "যাচাইকৃত আইনি ও আইপি বিশেষজ্ঞ",
      verifiedSpecialistsSubtitle: "প্রত্যয়িত নিয়ন্ত্রক পরামর্শদাতাদের সাথে সরাসরি পরামর্শ",
      domainsTitle: "বিশেষজ্ঞ শাখা ও সুবিধা নেটওয়ার্ক",
      domainsSubtitle: "আইনি দক্ষতা ও অনুশীলনের ক্ষেত্র অনুযায়ী আইনজীবীদের সাথে যোগাযোগ করুন",
      bookConsultation: "পরামর্শ নির্ধারণ করুন",
      callDirectly: "সরাসরি কল করুন",
      verifiedSpecialist: "যাচাইকৃত বিশেষজ্ঞ",
      consultationNotice:
        "পরামর্শ সংক্রান্ত বিজ্ঞপ্তি: বার কাউন্সিল অফ ইন্ডিয়াতে তালিকাভুক্ত যাচাইকৃত আইনজীবী, পেটেন্ট এজেন্ট এবং স্বাধীন উপদেষ্টাদের মাধ্যমে পেশাদার পরামর্শ সমন্বিত হয়।",
      portals: [
        {
          name: "বার কাউন্সিল অফ ইন্ডিয়া অ্যাডভোকেট সার্চ",
          acronym: "BCI ডিরেক্টরি",
          desc: "নিবন্ধিত আইনজীবীদের সনদ যাচাইয়ের সরকারি দেশব্যাপী ডিরেক্টরি।",
        },
        {
          name: "আইপি ইন্ডিয়া পাবলিক পোর্টাল ও এজেন্ট সন্ধান",
          acronym: "আইপি ইন্ডিয়া পোর্টাল",
          desc: "পেটেন্ট কন্ট্রোলার জেনারেল (CGPDTM) এর অফিসিয়াল পোর্টাল।",
        },
        {
          name: "আয়ুষ মন্ত্রণালয় আইনি হেল্পডেস্ক",
          acronym: "আয়ুষ হেল্পডেস্ক",
          desc: "নিয়ন্ত্রক স্পষ্টীকরণ, এএসইউ ঔষধ মানদণ্ড ও নীতি সম্মতির জন্য মন্ত্রণালয়ের পোর্টাল।",
        },
        {
          name: "জাতীয় জৈব বৈচিত্র্য কর্তৃপক্ষ (NBA) সেল",
          acronym: "NBA ABS সেল",
          desc: "জৈব সম্পদ ব্যবহার ও লাভ-বণ্টন (ABS) অনুমোদনের নিয়ন্ত্রক সংস্থা।",
        },
      ],
      experts: [
        {
          name: "অ্যাডভোকেট রাজেশ শর্মা",
          role: "সিনিয়র আইপি এবং পেটেন্ট অ্যাটর্নি",
          desc: "আয়ুর্বেদিক ফর্মুলেশনের পেটেন্ট আবেদন, সেকশন ৩(p) আপত্তি এবং ঐতিহ্যবাহী জ্ঞান প্রতিরক্ষায় ১৮+ বছরের অভিজ্ঞতা।",
        },
        {
          name: "ড. অমৃতা দেশমুখ",
          role: "আয়ুষ নিয়ন্ত্রক ও লাইসেন্সিং পরামর্শদাতা",
          desc: "রাজ্য লাইসেন্সিং কর্তৃপক্ষ (SLA) উৎপাদন লাইসেন্স (ফর্ম ২৫D) এবং তপশিল T জিএমপি অনুমোদনে বিশেষজ্ঞ।",
        },
        {
          name: "অ্যাডভোকেট বিক্রম সেনগুপ্ত",
          role: "জৈব বৈচিত্র্য ও আন্তর্জাতিক বাণিজ্য বিশেষজ্ঞ",
          desc: "জাতীয় জৈব বৈচিত্র্য কর্তৃপক্ষ (NBA) ফর্ম I/III অনুমোদন এবং মার্কিন ও ইউরোপীয় ভেষজ রপ্তানি সম্মতিতে বিশেষজ্ঞ।",
        },
      ],
      categories: [
        {
          title: "আয়ুষ উৎপাদন লাইসেন্সিং",
          badge: "লাইসেন্সিং",
          location: "নতুন দিল্লি ও রাজ্য শাখাসমূহ",
          desc: "ফর্ম ২৫D উৎপাদন লাইসেন্স, লোন লাইসেন্স (ফর্ম ২৫E) এবং তপশিল T জিএমপি সম্মতির জন্য সম্পূর্ণ আইনি প্রতিনিধিত্ব।",
          tags: ["ফর্ম ২৫D", "লোন লাইসেন্স", "তপশিল T জিএমপি", "রাজ্য ড্রাগ কন্ট্রোলার"],
        },
        {
          title: "পেটেন্ট ফাইলিং ও TKDL প্রতিরক্ষা",
          badge: "পেটেন্ট",
          location: "মুম্বাই ও দিল্লি পেটেন্ট অফিস",
          desc: "পেটেন্ট আইনের ধারা ৩(p) এবং ৩(e) এর অধীনে আপত্তি নিরসন এবং বৈশ্বিক PCT আবেদন প্রস্তুতি।",
          tags: ["ধারা ৩(p)", "পেটেন্ট ড্রাফটিং", "TKDL ক্লিয়ারেন্স", "PCT ফাইলিং"],
        },
        {
          title: "জৈব বৈচিত্র্য ও ABS প্রবিধান",
          badge: "জৈব বৈচিত্র্য",
          location: "চেন্নাই (NBA সদর দফতর)",
          desc: "জৈব বৈচিত্র্য আইনের অধীনে বাণিজ্যিক ব্যবহারের জন্য NBA ফর্ম I এবং রাজ্য বোর্ডের অনুমোদন প্রাপ্তি।",
          tags: ["NBA ফর্ম I", "ABS চুক্তি", "SBB নোটিশ", "বনাধিকার সম্মতি"],
        },
        {
          title: "লেবেলিং, দাবি ও DMRCA সম্মতি",
          badge: "নিয়ন্ত্রক",
          location: "সর্বভারতীয় কভারেজ",
          desc: "বিজ্ঞাপন সামগ্রী, প্যাকেজিং লেবেল এবং ড্রাগস অ্যান্ড ম্যাজিক রেমেডিজ আইন (DMRCA) সম্মতি পর্যালোচনা।",
          tags: ["DMRCA নিরীক্ষা", "লেবেল পর্যালোচনা", "বিধি ১৬১", "ভোক্তা সুরক্ষা"],
        },
      ],
    },
    about: {
      title: "আইপি শক্তি সহায়ক সম্পর্কে",
      subtitle:
        "আয়ুর্বেদিক ও ঐতিহ্যবাহী চিকিৎসা উদ্যোক্তাদের জন্য ভারতের প্রথম এআই-চালিত আইনি ও নিয়ন্ত্রক সম্মতি প্ল্যাটফর্ম।",
      storyTitle: "আমাদের গল্প",
      storySubtitle: "ঐতিহ্য ও আধুনিক নিয়ন্ত্রণের মেলবন্ধন",
      storyParagraphs: [
        "ভারতের ঐতিহ্যবাহী চিকিৎসা ব্যবস্থা হাজার বছরের জ্ঞানের ভিত্তি ধারণ করে আছে। কিন্তু আজকের আধুনিক যুগে একটি আয়ুর্বেদিক পণ্য বাজারে আনা এক অত্যন্ত জটিল নিয়ন্ত্রক প্রক্রিয়ার মধ্যে দিয়ে যায়।",
        "ড্রাগস অ্যান্ড কসমেটিকস অ্যাক্ট ১৯৪০, ট্রেডিশনাল নলেজ ডিজিটাল লাইব্রেরি (TKDL) এবং জৈব বৈচিত্র্য আইন ২০০২ এর মতো বিধিমালার কারণে বহু উদ্যোক্তা ও গবেষক বিভ্রান্তির সম্মুখীন হন।",
        "আইপি শক্তি সহায়ক এই ব্যবধান দূর করতেই প্রতিষ্ঠিত হয়েছে — যাতে প্রতিটি উদ্ভাবক নির্ভুলভাবে এবং আত্মবিশ্বাসের সাথে নিয়ন্ত্রক প্রক্রিয়া সম্পন্ন করতে পারেন।",
      ],
      whyBuiltTitle: "আমরা কেন এটি তৈরি করেছি",
      whyBuiltIntro: "আয়ুষ খাতের স্টার্টআপ এবং গবেষকদের প্রায়শই যেসব প্রশ্নের সম্মুখীন হতে হয়:",
      whyBuiltQuestions: [
        "আমার ফর্মুলেশন কি শাস্ত্রীয় হিসেবে ছাড় পাবে নাকি এটি পেটেন্ট এবং মালিকানাধীন (P&P) ঔষধ?",
        "আমাদের কি রাজ্য জৈব বৈচিত্র্য বোর্ড (SBB) বা জাতীয় কর্তৃপক্ষের (NBA) অনুমোদন নিতে হবে?",
        "আমাদের পণ্যের মোড়ক কি ড্রাগস অ্যান্ড ম্যাজিক রেমেডিজ অ্যাক্ট (DMRCA) সম্পূর্ণরূপে মেনে চলছে?",
        "আমরা কীভাবে আমাদের মেধা সম্পদ (IP) রক্ষা করব এবং TKDL এর সাথে সংঘাত এড়াব?",
      ],
      whyBuiltConclusion:
        "আইপি শক্তি সহায়ক এই সমস্ত প্রশ্নের উত্তর সেকেন্ডের মধ্যে তথ্যভিত্তিক ও আইনি যুক্তি সহকারে প্রদান করে।",
      visionTitle: "আমাদের লক্ষ্য ও দৃষ্টিভঙ্গি",
      visionSubtitle: "ভারতীয় ভেষজ উদ্ভাবনের বিশ্বব্যাপী উৎকর্ষ",
      visionParagraphs: [
        "আমাদের লক্ষ্য হল ভারতকে বিশ্বমানের প্রমিত এবং আইনসম্মত প্রাকৃতিক চিকিৎসার কেন্দ্রবিন্দু হিসেবে প্রতিষ্ঠিত করা।",
        "আমরা বিশ্বাস করি প্রতিটি গুণমানসম্পন্ন আয়ুর্বেদিক পণ্যের আন্তর্জাতিক স্বীকৃতি পাওয়ার পূর্ণ অধিকার রয়েছে।",
      ],
      missionTitle: "আমাদের মিশন",
      missionSubtitle: "স্বচ্ছতা, গতি ও প্রযুক্তিগত সহায়তা",
      missionIntro: "আমাদের দৈনন্দিন প্রতিশ্রুতি তিনটি মূল স্তম্ভের উপর প্রতিষ্ঠিত:",
      pillars: [
        {
          title: "প্রামাণ্য আইনি ভিত্তি",
          desc: "প্রতিটি ফলাফল মূল সংবিধিবদ্ধ আইন ও সরকারি বিজ্ঞপ্তির সাথে সংযুক্ত থাকে।",
        },
        {
          title: "সম্পূর্ণ স্বচ্ছতা",
          desc: "কোনো অস্পষ্টতা নেই — প্রতিটি ঝুঁকি ও সম্মতি স্পষ্ট ভাষায় ব্যাখ্যা করা হয়।",
        },
        {
          title: "সহজ প্রবেশাধিকার",
          desc: "ছোট কৃষক থেকে শুরু করে আন্তর্জাতিক ব্র্যান্ড — সকলের জন্য সহজবোধ্য ইন্টারফেস।",
        },
      ],
      differentiatorsTitle: "আইপি শক্তি সহায়ক কেন অনন্য",
      differentiators: [
        {
          title: "বিশেষজ্ঞ RAG আর্কিটেকচার",
          content:
            "আমাদের সিস্টেম কেবল সাধারণ এআই নয়; এটি ভারতের সমস্ত আয়ুষ আইন, ড্রাগ রুলস এবং কোর্টের নজির দ্বারা বিশেষভাবে প্রশিক্ষিত।",
        },
        {
          title: "৫-মডিউল স্মার্ট প্রফিলিং",
          content:
            "উপাদান, উৎপাদন, উৎস, লেবেলিং এবং লক্ষ্য বাজারের সম্পূর্ণ সামগ্রিক মূল্যায়ন।",
        },
        {
          title: "বাস্তব বিশেষজ্ঞ সহায়তা",
          content:
            "প্রয়োজনে তাৎক্ষণিকভাবে বার কাউন্সিল নিবন্ধিত আইনজীবীদের সাথে সরাসরি যোগাযোগের সুযোগ।",
        },
      ],
      howItWorksTitle: "এটি কীভাবে কাজ করে",
      howItWorksSubtitle: "সহজ তিনটি পদক্ষেপে আইনি প্রস্তুতি",
      steps: [
        {
          title: "১. পণ্য তথ্য প্রদান করুন",
          desc: "আপনার উপাদান, উৎস ও উৎপাদন পদ্ধতি নির্বাচন করুন।",
        },
        {
          title: "২. এআই আইনি বিশ্লেষণ",
          desc: "আমাদের সিস্টেম সাথে সাথে হাজার হাজার আইন ও বিধিমালার সাথে মিলিয়ে দেখে।",
        },
        {
          title: "৩. সম্মতি প্রতিবেদন লাভ করুন",
          desc: "লাইসেন্সিং পথ, প্রয়োজনীয় নথি ও ঝুঁকি বিশ্লেষণের বিস্তারিত প্রতিবেদন ডাউনলোড করুন।",
        },
      ],
    },
    privacy: {
      title: "গোপনীয়তা নীতি",
      subtitle:
        "ডেটা সার্বভৌমত্ব, সেশন বিচ্ছিন্নতা এবং অপারেশনাল গোপনীয়তা পরিচালনার সামগ্রিক রূপরেখা।",
      tldrLabel: "সংক্ষিপ্ত বিবরণ (TL;DR)",
      sections: [
        {
          id: "introduction",
          title: "ভূমিকা",
          tldr: "আইপি শক্তি সহায়ক কঠোর শিক্ষাগত ও গোপনীয়তা সুরক্ষার মাধ্যমে সংবেদনশীল বুদ্ধিবৃত্তিক সম্পত্তি ও ঐতিহ্যগত জ্ঞান পরিচালনা করে।",
          tags: ["সারসংক্ষেপ", "প্রতিশ্রুতি"],
          metadata: { "কার্যকরী তারিখ": "সেপ্টেম্বর ২০২৬", "সুরক্ষা স্তর": "স্ট্যান্ডার্ড" },
          paragraphs: [
            "আয়ুর্বেদ, বুদ্ধিবৃত্তিক সম্পত্তি অধিকার (IPR), জৈব বৈচিত্র্য ও সুবিধা ভাগাভাগি (ABS) এবং নিয়ন্ত্রক কাঠামোর নির্দেশনার উন্নত এআই প্ল্যাটফর্ম আইপি শক্তি সহায়কে আপনাকে স্বাগতম। সর্বোচ্চ গোপনীয়তা নিশ্চিত করে নির্ভরযোগ্য শিক্ষাগত তথ্য প্রদানের জন্য আমাদের পরিকাঠামো প্রস্তুত করা হয়েছে।",
            "আমরা শুধুমাত্র সঠিক ও আইনি প্রতিক্রিয়া তৈরির উদ্দেশ্যে আপনার অনুসন্ধান প্রক্রিয়া করি। আপনার কথোপকথন নিরাপদ সেশনে সম্পূর্ণরূপে বিচ্ছিন্ন থাকে এবং কখনোই বাইরের বিপণন সংস্থার কাছে বিক্রি বা প্রকাশ করা হয় না।",
          ],
        },
        {
          id: "data-privacy",
          title: "ডেটা ও গোপনীয়তা",
          tldr: "বুদ্ধিবৃত্তিক সম্পত্তি সংক্রান্ত ডেটা সুরক্ষার জন্য প্রতিটি ব্যবহারকারীর সেশন সম্পূর্ণভাবে বিচ্ছিন্ন রাখা হয়।",
          tags: ["সেশন বিচ্ছিন্নতা", "গোপনীয়তা অগ্রাধিকার"],
          metadata: { "পর্যালোচনা স্থিতি": "অডিটকৃত", "কাঠামো": "জিরো-ট্রাস্ট" },
          paragraphs: [
            "ব্যবহারকারীর তথ্যের দায়িত্বশীল প্রক্রিয়াকরণ নিশ্চিত করতে আইপি শক্তি সহায়ক একটি গোপনীয়তা-প্রথম স্থাপত্যের সাথে ডিজাইন করা হয়েছে। যেহেতু প্ল্যাটফর্মটি বুদ্ধিবৃত্তিক সম্পত্তি এবং নিয়ন্ত্রক নির্দেশিকা নিয়ে কাজ করে, তাই ডেটা সুরক্ষা আমাদের সিস্টেমের প্রধান স্তম্ভ।",
            "আমরা বুঝি যে এই প্ল্যাটফর্মে উপস্থাপিত অনুসন্ধানগুলিতে উদ্ভাবনী ও গোপনীয় ধারণার ইঙ্গিত থাকতে পারে। তাই আমাদের ডেটা পাইপলাইন বিভিন্ন ব্যবহারকারীর অ্যাকাউন্টের মধ্যে ডেটা ক্রস-ওভার সম্পূর্ণভাবে প্রতিরোধ করে। সমস্ত প্রসেসিং সুরক্ষিত বিচ্ছিন্ন পরিবেশে সম্পন্ন হয়।",
            "আমাদের নিরাপত্তা দল ক্রমাগত প্রোটোকল পর্যালোচনা করে নিশ্চিত করে যে আপনার ইতিহাস কোনো অননুমোদিত ব্যক্তি বা সংস্থার কাছে প্রকাশ পাবে না।",
          ],
        },
        {
          id: "data-minimization",
          title: "ন্যূনতম ডেটা সংগ্রহ",
          tldr: "আইনি ও নিয়ন্ত্রক অনুসন্ধান প্রক্রিয়াকরণের জন্য কঠোরভাবে প্রয়োজনীয় ডেটা ছাড়া অতিরিক্ত কিছু সংগ্রহ করা হয় না।",
          tags: ["ন্যূনতম সংগ্রহ", "স্বয়ংক্রিয় শুদ্ধি"],
          metadata: { "ডেটার পরিধি": "সীমিত", "শুদ্ধি চক্র": "স্বয়ংক্রিয়" },
          paragraphs: [
            "আমাদের সিস্টেম প্রাসঙ্গিক আয়ুর্বেদিক, আইপিআর এবং নিয়ন্ত্রক দিকনির্দেশনা প্রদানের জন্য কেবল অপরিহার্য তথ্য সংগ্রহ করে। অপ্রয়োজনীয় ব্যক্তিগত বা সংবেদনশীল তথ্য কখনোই চাওয়া হয় না।",
            "ব্যবহার চলাকালীন কোনো অতিরিক্ত মেটাডেটা অপ্রয়োজনে সংরক্ষণ করা হয় না এবং স্বয়ংক্রিয় প্রক্রিয়ায় নিয়মিতভাবে অপ্রয়োজনীয় ডেটা মুছে ফেলা হয়।",
            "এই কঠোর তথ্য হ্রাস নীতি আমাদের ডিজিটাল পদচিহ্ন কম রাখে এবং ব্যবহারকারীর গোপনীয়তা সুরক্ষিত রাখে।",
          ],
        },
        {
          id: "user-data-protection",
          title: "ব্যবহারকারী ডেটা সুরক্ষা",
          tldr: "সমস্ত ব্যবহারকারী ডেটা শক্তিশালী এনক্রিপশন এবং রিয়েল-টাইম অনুপ্রবেশ পর্যবেক্ষণের মাধ্যমে সুরক্ষিত থাকে।",
          tags: ["এনক্রিপশন", "সক্রিয় নজরদারি"],
          metadata: { "এনক্রিপশন": "AES-256", "নজরদারি": "২৪/৭ সক্রিয়" },
          paragraphs: [
            "ব্যক্তিগত তথ্য ও উপকরণ অননুমোদিত অ্যাক্সেস, প্রকাশ বা অপব্যবহার থেকে রক্ষা করতে উপযুক্ত নিরাপত্তা ব্যবস্থা প্রয়োগ করা হয়েছে। ডেটা স্থানান্তর এবং সঞ্চয় উভয় ক্ষেত্রেই আমরা আধুনিক এনক্রিপশন ব্যবহার করি।",
            "আমাদের পরিকাঠামোতে বিস্তারিত অ্যাক্সেস লগ এবং রিয়েল-টাইম মনিটরিং সিস্টেম অন্তর্ভুক্ত রয়েছে, যা যে কোনো অননুমোদিত অ্যাক্সেস প্রচেষ্টা তাৎক্ষণিকভাবে প্রতিরোধ করে।",
            "আপনার ডেটার অখণ্ডতা রক্ষা করা আমাদের দল ও প্রযুক্তির সর্বোচ্চ অগ্রাধিকার।",
          ],
        },
        {
          id: "confidential-information",
          title: "গোপনীয় তথ্যের সুরক্ষা",
          tldr: "অপ্রকাশিত বাণিজ্যিক গোপনীয়তা বা রাসায়নিক অনুপাত সিস্টেমে ইনপুট না করার জন্য ব্যবহারকারীদের পরামর্শ দেওয়া হচ্ছে।",
          tags: ["বাণিজ্যিক গোপনীয়তা", "সতর্কতা"],
          metadata: { "ঝুঁকি স্তর": "উচ্চ", "নির্দেশনা": "সাধারণ প্রশ্ন করুন" },
          paragraphs: [
            "অপ্রকাশিত উদ্ভাবন, ট্রেড সিক্রেট এবং সংবেদনশীল ব্যবসায়িক তথ্য প্ল্যাটফর্মে প্রবেশ করানোর কোনো প্রয়োজন নেই।",
            "সংবেদনশীল ফর্মুলেশনের ক্ষেত্রে ব্যবহারকারীদের সাধারণ নিয়ন্ত্রক নীতির ভিত্তিতে প্রশ্ন করার পরামর্শ দেওয়া হচ্ছে, যাতে ফর্মুলার উপর আপনার পূর্ণ নিয়ন্ত্রণ বজায় থাকে।",
            "এই প্ল্যাটফর্মটি আইন ব্যাখ্যার জন্য তৈরি, অপ্রকাশিত বুদ্ধিবৃত্তিক সম্পত্তির ভল্ট হিসেবে নয়। এই পার্থক্যের কারণে আপনার স্বত্বাধিকার অক্ষুণ্ণ থাকে।",
          ],
        },
        {
          id: "secure-transmission",
          title: "নিরাপদ ডেটা স্থানান্তর",
          tldr: "সমস্ত যোগাযোগ উন্নত HTTPS এবং TLS ক্রিপ্টোগ্রাফিক প্রোটোকলের মাধ্যমে সুরক্ষিত।",
          tags: ["HTTPS", "TLS 1.3"],
          metadata: { "প্রোটোকল": "কঠোর TLS", "সার্টিফিকেট": "স্বয়ংক্রিয় নবায়ন" },
          paragraphs: [
            "ব্যবহারকারী এবং প্ল্যাটফর্মের মধ্যবর্তী সমস্ত যোগাযোগ নিরাপদ প্রোটোকল ব্যবহার করে। এই প্রোটোকলগুলি আপনার ব্রাউজার এবং আমাদের সার্ভারের মধ্যে একটি সুরক্ষিত টানেল তৈরি করে।",
            "আমরা শুধুমাত্র নিরাপদ সংযোগ গ্রহণ করি এবং কোনো অনিরাপদ বা পুরনো সংযোগের প্রচেষ্টা প্রত্যাখ্যান করি।",
            "আধুনিক সাইবার হুমকির বিরুদ্ধে নিরাপত্তা বজায় রাখতে সার্টিফিকেটসমূহ নিয়মিত নবায়ন করা হয়।",
          ],
        },
        {
          id: "user-control",
          title: "ব্যবহারকারী নিয়ন্ত্রণ ও সম্মতি",
          tldr: "অতিরিক্ত কোনো ডেটা প্রক্রিয়াকরণের জন্য ব্যবহারকারীর স্পষ্ট সম্মতি প্রয়োজন, যা যে কোনো সময় প্রত্যাহারযোগ্য।",
          tags: ["সম্মতি", "নিয়ন্ত্রণ"],
          metadata: { "ডিফল্ট স্থিতি": "অপ্ট-আউট", "প্রত্যাহার": "তাৎক্ষণিক" },
          paragraphs: [
            "ব্যবহারকারীরা তাদের তথ্য ও অনুমতির উপর সম্পূর্ণ নিয়ন্ত্রণ বজায় রাখেন। প্রাথমিক পরিষেবার বাইরে যেকোনো প্রক্রিয়াকরণের পূর্বে স্পষ্ট সম্মতি নেওয়া হয়।",
            "অনুমতি প্রত্যাহার করা অত্যন্ত সহজ এবং স্বচ্ছ। ব্যবহারকারীরা যে কোনো মুহূর্তে তাদের পছন্দ পরিবর্তন বা প্রত্যাহার করতে পারেন।",
            "আমরা সক্রিয় সম্মতির নীতিতে কাজ করি এবং অতিরিক্ত ডেটা ব্যবহারের ফিচার ডিফল্টরূপে নিষ্ক্রিয় থাকে।",
          ],
        },
        {
          id: "access-deletion",
          title: "ডেটা অ্যাক্সেস ও মুছে ফেলা",
          tldr: "ব্যবহারকারীরা তাদের ইতিহাস পর্যালোচনা, ডাউনলোড বা স্থায়ীভাবে মুছে ফেলার পূর্ণ স্বাধীনতা ভোগ করেন।",
          tags: ["মুছে ফেলা", "বহনযোগ্যতা"],
          metadata: { "প্রক্রিয়াকরণ সময়": "তাৎক্ষণিক", "মুছে ফেলা": "স্থায়ী" },
          paragraphs: [
            "প্ল্যাটফর্ম ব্যবহারকারীদের তাদের সংরক্ষিত তথ্য পর্যালোচনা, সংশোধন বা সম্পূর্ণ ডেটা মুছে ফেলার সুবিধা প্রদান করে।",
            "আপনি যদি প্ল্যাটফর্ম ব্যবহার বন্ধ করতে চান, তবে একটি অনুরোধের মাধ্যমে আপনার অ্যাকাউন্ট এবং প্রশ্ন ইতিহাস ডাটাবেস থেকে স্থায়ীভাবে সরিয়ে ফেলতে পারেন।",
            "আমরা বিশ্বাস করি ডেটার আসল মালিক ব্যবহারকারী। তাই আমরা উন্মুক্ত ফরম্যাটে ডেটা এক্সপোর্টের সুযোগও প্রদান করি।",
          ],
        },
        {
          id: "third-party-audits",
          title: "তৃতীয় পক্ষের নিরীক্ষা ও সম্মতি",
          tldr: "নিয়ন্ত্রক সম্মতি ও সিস্টেমের নিরাপত্তা নিশ্চিত করতে নিয়মিত স্বাধীন মূল্যায়ন সম্পন্ন করা হয়।",
          tags: ["অডিট", "সম্মতি"],
          metadata: { "ফ্রিকোয়েন্সি": "ত্রৈমাসিক", "মানদণ্ড": "ISO 27001" },
          paragraphs: [
            "আমাদের নিরাপত্তা ও নির্ভরযোগ্যতা নিশ্চিত করতে আমরা নিয়মিত স্বাধীন তৃতীয় পক্ষের মাধ্যমে সিস্টেম অডিট পরিচালনা করি।",
            "এই মূল্যায়নগুলি আন্তর্জাতিক নিরাপত্তা মানদণ্ড অনুসারে আমাদের এনক্রিপশন প্রোটোকল ও ডেটা বিচ্ছিন্নকরণ ব্যবস্থা পুঙ্খানুপুঙ্খ পরীক্ষা করে।",
            "বহিরাগত পর্যালোচনার মাধ্যমে আমরা ব্যবহারকারীদের প্রযুক্তিগত উৎকর্ষ এবং নির্ভরযোগ্যতার স্পষ্ট নিশ্চয়তা প্রদান করি।",
          ],
        },
        {
          id: "policy-updates",
          title: "নীতিমালা আপডেট ও বিজ্ঞপ্তি",
          tldr: "গোপনীয়তা নীতিতে যে কোনো পরিবর্তন প্ল্যাটফর্মের ভেতরে আগাম বিজ্ঞপ্তির মাধ্যমে জানানো হয়।",
          tags: ["স্বচ্ছতা", "ধারাবাহিকতা"],
          metadata: { "বিজ্ঞপ্তির সময়": "৩০ দিন", "প্রেরণ": "অ্যাপের ভেতরে" },
          paragraphs: [
            "প্রাসঙ্গিক আইন ও নিয়ন্ত্রক কাঠামোর বিবর্তনের সাথে সাথে এই গোপনীয়তা নীতি সময়ে সময়ে আপডেট হতে পারে।",
            "আমরা সম্পূর্ণ স্বচ্ছতায় বিশ্বাস করি। ডেটা ব্যবস্থাপনাকে প্রভাবিত করে এমন যে কোনো পরিবর্তনের ক্ষেত্রে অ্যাপের ভেতরে আগাম নোটিশ দেওয়া হবে।",
            "সংশোধিত নীতিমালা প্রকাশের পর প্ল্যাটফর্মের অব্যাহত ব্যবহার সেই শর্তাবলীর গ্রহণযোগ্যতা নির্দেশ করে।",
          ],
        },
      ],
    },
    terms: {
      title: "শর্তাবলী ও নিয়মাবলী",
      subtitle: "আইপি শক্তি সহায়ক ব্যবহারের আইনি শর্তাবলী",
      items: [
        {
          id: 1,
          title: "সেবার সুযোগ",
          content:
            "আইপি শক্তি সহায়ক একটি তথ্য ও নিয়ন্ত্রক বিশ্লেষণ প্ল্যাটফর্ম। এটি আনুষ্ঠানিক সরকারি সিদ্ধান্ত নয় বরং সহায়ক বিশ্লেষণমূলক সরঞ্জাম।",
        },
        {
          id: 2,
          title: "আইনি পরামর্শের বিকল্প নয়",
          content:
            "প্ল্যাটফর্মের সুপারিশসমূহ আইনি নির্দেশনা হিসেবে বিবেচিত হলেও এটি কোনো যোগ্যতাসম্পন্ন আইনজীবীর আনুষ্ঠানিক পরামর্শের বিকল্প নয়।",
        },
        {
          id: 3,
          title: "ব্যবহারকারীর তথ্যের যথার্থতা",
          content:
            "সঠিক মূল্যায়ন নিশ্চিত করার জন্য ব্যবহারকারীকে তার ফর্মুলেশন এবং উপাদানের সঠিক তথ্য প্রদান করতে হবে।",
        },
        {
          id: 4,
          title: "মেধা সম্পদ অধিকার",
          content:
            "প্ল্যাটফর্মের সমস্ত সফ্টওয়্যার, কোড, ইন্টারফেস এবং লোগো আইপি শক্তি সহায়কের বুদ্ধিবৃত্তিক সম্পত্তি হিসেবে সুরক্ষিত।",
        },
        {
          id: 5,
          title: "ব্যবহারকারীর ডেটা গোপনীয়তা",
          content:
            "আমরা আপনার জমা দেওয়া ফর্মুলেশন তথ্য তৃতীয় পক্ষের কাছে বিক্রি করি না এবং গোপনীয়তা নীতি মেনে চলি।",
        },
        {
          id: 6,
          title: "সরকারী প্রবিধানের পরিবর্তন",
          content:
            "আইন ও প্রবিধানের পরিবর্তনের সাথে সাথে প্ল্যাটফর্মের ডাটাবেস আপডেট করা হয়; তবে সাম্প্রতিক পরিবর্তনের জন্য অফিসিয়াল গেজেট যাচাই বাঞ্ছনীয়।",
        },
        {
          id: 7,
          title: "দায়বদ্ধতার সীমাবদ্ধতা",
          content:
            "প্ল্যাটফর্ম ব্যবহারের ফলে উদ্ভূত কোনো পরোক্ষ বা আনুষঙ্গিক ক্ষতির জন্য কর্তৃপক্ষ দায়ী থাকবে না।",
        },
        {
          id: 8,
          title: "ন্যায্য ব্যবহার নীতি",
          content:
            "প্ল্যাটফর্মের কোনো তথ্য অননুমোদিতভাবে স্ক্র্যাপ করা বা সিস্টেমের কার্যক্ষমতায় বিঘ্ন সৃষ্টি করা কঠোরভাবে নিষিদ্ধ।",
        },
        {
          id: 9,
          title: "তৃতীয় পক্ষের পোর্টাল লিঙ্ক",
          content:
            "প্ল্যাটফর্মে প্রদত্ত সরকারি বা বাইরের ওয়েবসাইটের লিঙ্কের বিষয়বস্তুর জন্য সংশ্লিষ্ট কর্তৃপক্ষ দায়ী।",
        },
        {
          id: 10,
          title: "হিসাব ও পাসওয়ার্ড নিরাপত্তা",
          content:
            "আপনার অ্যাকাউন্টের শংসাপত্রের নিরাপত্তা বজায় রাখা আপনার নিজস্ব দায়িত্ব।",
        },
        {
          id: 11,
          title: "সেবার পরিবর্তন ও অবসান",
          content:
            "আমরা প্রয়োজন অনুসারে সেবার বৈশিষ্ট্য পরিবর্তন বা স্থগিত করার অধিকার সংরক্ষণ করি।",
        },
        {
          id: 12,
          title: "জৈব বৈচিত্র্য সম্মতি সতর্কবার্তা",
          content:
            "জৈব সম্পদ ব্যবহারকারী উদ্যোগগুলিকে নিজ দায়িত্বে এনবিএ/এসবিবি থেকে প্রয়োজনীয় অনুমোদন গ্রহণ করতে হবে।",
        },
        {
          id: 13,
          title: "পেটেন্ট ফাইলিং বিজ্ঞপ্তি",
          content:
            "পেটেন্ট আবেদনের পূর্বে ঐতিহ্যগত জ্ঞান ও ধারা ৩(p) সংশ্লিষ্ট বিধিমালা সম্পূর্ণভাবে যাচাই করুন।",
        },
        {
          id: 14,
          title: "আইনি এখতিয়ার",
          content:
            "এই শর্তাবলীর সাথে সম্পর্কিত যেকোনো বিরোধ ভারতের আদালতের এখতিয়ারাধীন হবে।",
        },
        {
          id: 15,
          title: "শর্তাবলী সংশোধন",
          content:
            "আমরা যে কোনো সময় এই শর্তাবলী সংশোধন করতে পারি এবং প্ল্যাটফর্মে তা প্রকাশ করা হবে।",
        },
        {
          id: 16,
          title: "আন্তর্জাতিক ব্যবহারকারী নির্দেশিকা",
          content:
            "ভারতের বাইরের ব্যবহারকারীদের নিজ নিজ দেশের আমদানি ও স্বাস্থ্যবিধি মেনে চলতে হবে।",
        },
        {
          id: 17,
          title: "ফি এবং অর্থপ্রদান নীতি",
          content:
            "যদি কোনো প্রিমিয়াম পরিষেবা ব্যবহার করা হয়, তবে নির্ধারিত ফি নীতিমালা প্রযোজ্য হবে।",
        },
        {
          id: 18,
          title: "যোগাযোগ ও অভিযোগ নিষ্পত্তি",
          content:
            "যে কোনো আইনি প্রশ্ন বা উদ্বেগের জন্য আমাদের সহায়তা ডেস্কে যোগাযোগ করা যাবে।",
        },
      ],
    },
    team: {
      title: "টিম কোডবেদা",
      desc: "আমাদের প্রতিভাবান প্রকৌশলী ও গবেষকদের দল ঐতিহ্যবাহী চিকিৎসা ক্ষেত্রে প্রযুক্তিগত উৎকর্ষ সাধনে নিবেদিতপ্রাণ।",
    },
    settings: {
      title: "সেটিংস",
      subtitle: "আপনার অ্যাপ্লিকেশন পছন্দসমূহ পরিচালনা করুন",
      themeTitle: "চেহারা ও থিম",
      themes: {
        saffron: {
          name: "গেরুয়া (হিন্দুত্ব)",
          desc: "একটি প্রাণবন্ত ও পবিত্র গেরুয়া ইউজার ইন্টারফেস। পার্থিব মোহ থেকে পরম আত্মিক প্রশান্তির জন্য প্রস্তুত। জয় শ্রী রাম।",
        },
        blue: {
          name: "প্রগতি (ভীম)",
          desc: "জাতীয় সংবিধানের সুমহান চেতনা ও যুক্তিনির্ভর ন্যায়বিচারের রূপ। যেখানে প্রতিটি পিক্সেল সমান অধিকার পায়। জয় ভীম, জয় ভারত।",
        },
        green: {
          name: "সমৃদ্ধি (উম্মাহ)",
          desc: "বিশ্বজনীন ভ্রাতৃত্ব এবং বৈশ্বিক ঐক্যের গভীর প্রশান্তিময় অনুভূতি জাগ্রতকারী থিম। আল্লাহু আকবর।",
        },
        dark: {
          name: "অন্ধকার (ডার্ক)",
          desc: "মহাজাগতিক শান্ত নীরবতাকে আলিঙ্গন করুন। দীর্ঘ গবেষণার সময় চোখের সুরক্ষার জন্য এক আরামদায়ক ডার্ক থিম।",
        },
      },
    },
  },
  kn: {
    dashboard: {
      badge: "ಡೈನಾಮಿಕ್ ಅನಾಲಿಟಿಕ್ಸ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      title: "ಆಯುಷ್ ಅನುಸರಣೆ ಮತ್ತು ಅಪಾಯದ ವಿಶ್ಲೇಷಣೆ",
      subtitle: "ಮೌಲ್ಯಮಾಪನ ಸಲ್ಲಿಕೆಗಳಿಂದ ನವೀಕರಿಸಲಾದ ಲೈವ್ ಅಪಾಯದ ಮೆಟ್ರಿಕ್‌ಗಳು.",
      runAssessment: "ಹೊಸ ಮೌಲ್ಯಮಾಪನವನ್ನು ಚಲಾಯಿಸಿ",
      recentLogsTitle: "ಇತ್ತೀಚಿನ ಮೌಲ್ಯಮಾಪನ ಅಪಾಯದ ಲಾಗ್‌ಗಳು",
      recentLogsSubtitle: "ಮೌಲ್ಯಮಾಪನ ಫಾರ್ಮ್‌ನಿಂದ ಇತ್ತೀಚಿನ ಮೌಲ್ಯಮಾಪನಗಳು.",
      tableHeaders: {
        productName: "ಉತ್ಪನ್ನದ ಹೆಸರು",
        category: "ವರ್ಗ",
        riskScore: "ಅಪಾಯದ ಅಂಕ",
        status: "ಸ್ಥಿತಿ",
        audited: "ಆಡಿಟ್ ಮಾಡಲಾಗಿದೆ"
      },
      totalAudited: "ಒಟ್ಟು ಉತ್ಪನ್ನಗಳನ್ನು ಆಡಿಟ್ ಮಾಡಲಾಗಿದೆ",
      highRisk: "ಹೆಚ್ಚಿನ ಅಪಾಯದ ಧ್ವಜಗಳು",
      clearances: "ನಿಯಂತ್ರಣ ಅನುಮತಿಗಳು",
      avgScore: "ಸರಾಸರಿ ಅನುಸರಣೆ ಅಂಕ",
      liveEvaluation: "ಲೈವ್ ಮೌಲ್ಯಮಾಪನ"
    },
    common: {
      downloadPdf: "ಪಿಡಿಎಫ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
      exporting: "ರಫ್ತು ಮಾಡಲಾಗುತ್ತಿದೆ...",
      startNewAssessment: "ಹೊಸ ಮೌಲ್ಯಮಾಪನ ಪ್ರಾರಂಭಿಸಿ",
      learnMore: "ಹೆಚ್ಚು ತಿಳಿಯಿರಿ",
      tryAgain: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
      accessDatabase: "ಡೇಟಾಬೇಸ್ ಪ್ರವೇಶಿಸಿ",
      accessFile: "ಫೈಲ್ ಪ್ರವೇಶಿಸಿ",
      loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
    },
    search: {
      buttonLabel: "ಹುಡುಕಿ...",
      placeholder: "ಕಾನೂನುಗಳು, ಮೌಲ್ಯಮಾಪನ ಮಾಡ್ಯೂಲ್‌ಗಳು, ತಜ್ಞರು, ಪುಟಗಳನ್ನು ಹುಡುಕಿ...",
      quickLinks: "ಜನಪ್ರಿಯ ವಿಷಯಗಳು ಮತ್ತು ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
      noResultsTitle: "ಯಾವುದೇ ಫಲಿತಾಂಶಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
      noResultsDesc: "ನಿಮ್ಮ ಹುಡುಕಾಟಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುವ ಯಾವುದೇ ಮಾಹಿತಿ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಕಂಡುಬಂದಿಲ್ಲ.",
      askAiCta: "AI ಕಾನೂನು ಸಹಾಯಕನನ್ನು ಕೇಳಿ",
      allCategories: "ಎಲ್ಲಾ",
      pagesCategory: "ಪುಟಗಳು ಮತ್ತು ಪರಿಕರಗಳು",
      lawsCategory: "ಕಾನೂನುಗಳು ಮತ್ತು ಮೂಲಗಳು",
      modulesCategory: "ಮೌಲ್ಯಮಾಪನ ಮಾಡ್ಯೂಲ್‌ಗಳು",
      expertsCategory: "ತಜ್ಞರು ಮತ್ತು ಪೋರ್ಟಲ್‌ಗಳು",
      legalCategory: "ಕಾನೂನು ಮತ್ತು ಗೌಪ್ಯತೆ",
      navigateHint: "ನ್ಯಾವಿಗೇಟ್",
      selectHint: "ಆಯ್ಕೆಮಾಡಿ",
      closeHint: "ಮುಚ್ಚಿ",
    },
    nav: {
      brandName: "ಐಪಿ ಶಕ್ತಿ ಸಹಾಯಕ",
      home: "ಮುಖಪುಟ",
      assessment: "ಮೌಲ್ಯಮಾಪನ",
      legalCorpus: "ಕಾನೂನು ದಾಖಲೆಗಳ ಸಂಗ್ರಹ",
      expertEscalation: "ತಜ್ಞರ ನೆರವು",
      aiAssistant: "ಎಐ ಸಹಾಯಕ",
      aboutUs: "ನಮ್ಮ ಬಗ್ಗೆ",
      privacyPolicy: "ಗೌಪ್ಯತಾ ನೀತಿ",
      termsAndConditions: "ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು",
      teamCodeveda: "ತಂಡ ಕೋಡ್‌ವೇದ",
      selectLanguage: "ಭಾಷೆ",
      english: "English",
      hindi: "हिन्दी (Hindi)",
      marathi: "मराठी (Marathi)",
      tamil: "தமிழ் (Tamil)",
      telugu: "తెలుగు (Telugu)",
      bengali: "বাংলা (Bengali)",
      kannada: "ಕನ್ನಡ (Kannada)",
      sanskrit: "संस्कृतम् (Sanskrit)",
      gujarati: "ગુજરાતી (Gujarati)",
    },
    home: {
      heroBadge: "ಕಾನೂನು ಅನುಸರಣೆಯ ಭವಿಷ್ಯಕ್ಕೆ ಸುಸ್ವಾಗತ",
      heroTitlePrefix: "ಸುಲಭಗೊಳಿಸಿ ನಿಮ್ಮ",
      heroTitleHighlight: "ಆಯುರ್ವೇದ ಪರವಾನಗಿ",
      heroSubtitle:
        "ಐಪಿ ಶಕ್ತಿ ಸಹಾಯಕ ಎಂಬುದು ಆಯುಷ್ (AYUSH) ಕ್ಷೇತ್ರದ ಸಂಕೀರ್ಣ ನಿಯಂತ್ರಕ ನಿಯಮಾವಳಿಗಳ ಮೂಲಕ ನಿಮಗೆ ಸ್ಪಷ್ಟ ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ವಿಶೇಷವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಬುದ್ಧಿವಂತ ಕಾನೂನು ಸಹಾಯಕವಾಗಿದೆ.",
      startAssessment: "ಮೌಲ್ಯಮಾಪನ ಪ್ರಾರಂಭಿಸಿ",
      browseLegalCorpus: "ಕಾನೂನು ದಾಖಲೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
      cards: {
        complianceFirst: {
          title: "ಅನುಸರಣೆಗೆ ಆದ್ಯತೆ",
          desc: "ಆಯುಷ್ ಸಚಿವಾಲಯಕ್ಕೆ ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ಮೊದಲು ಎಲ್ಲಾ ನಿಯಂತ್ರಕ ಅವಶ್ಯಕತೆಗಳನ್ನು ಪೂರೈಸಲಾಗಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ. ನಮ್ಮ ವ್ಯವಸ್ಥೆಯು ಇತ್ತೀಚಿನ ನಿಯಮಗಳ ಪ್ರಕಾರ ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ.",
        },
        regulatoryClarity: {
          title: "ಸ್ಪಷ್ಟ ನಿಯಂತ್ರಣ ಮಾರ್ಗದರ್ಶನ",
          desc: "ಔಷಧಿಗಳು ಮತ್ತು ಸೌಂದರ್ಯವರ್ಧಕಗಳ ಕಾಯ್ದೆ ಹಾಗೂ ಜೈವಿಕ ವೈವಿಧ್ಯತಾ ಕಾಯ್ದೆಯನ್ನು ಸುಲಭವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
        },
        unifiedIntake: {
          title: "ಸಮಗ್ರ ಮೌಲ್ಯಮಾಪನ ಪ್ರಕ್ರಿಯೆ",
          desc: "ನಿಮ್ಮ ಸಂಸ್ಥೆಯ ಮಾದರಿ, ಔಷಧ ಸೂತ್ರೀಕರಣಗಳು ಮತ್ತು ಅಗತ್ಯ ಪರವಾನಗಿಗಳನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡಲು ಒಂದೇ ಸರಳ ಪ್ರಕ್ರಿಯೆ.",
        },
        deepSearch: {
          title: "ಆಳವಾದ ಕಾನೂನು ದಾಖಲೆಗಳ ಹುಡುಕಾಟ",
          desc: "ಸಾವಿರಾರು ಅಧಿಕೃತ ಆಯುಷ್ ಮುನ್ನಿದರ್ಶನಗಳು, ಮಾರ್ಗಸೂಚಿಗಳು ಮತ್ತು ಟಿಕೆಡಿಎಲ್ (TKDL) ಉಲ್ಲೇಖಗಳನ್ನು ತಕ್ಷಣವೇ ಹುಡುಕಿ.",
          cta: "ಹುಡುಕಾಟ ಎಂಜಿನ್ ಬಳಸಿ",
        },
      },
    },
    assessment: {
      step: "ಹಂತ",
      back: "ಹಿಂದಕ್ಕೆ",
      continue: "ಮುಂದುವರಿಯಿರಿ",
      generateReport: "ಅನುಸರಣಾ ವರದಿ ತಯಾರಿಸಿ",
      selectAtLeastOne: "ಮುಂದುವರಿಯಲು ಕನಿಷ್ಠ ಒಂದು ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ",
      analyzingTitle: "ವಿವರಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ",
      analyzingDesc:
        "ಜಾಗತಿಕ ನಿಯಂತ್ರಕ ಚೌಕಟ್ಟುಗಳಲ್ಲಿ ಸಾದೃಶ್ಯ ಹುಡುಕಾಟ ನಡೆಸಲಾಗುತ್ತಿದೆ...",
      failedTitle: "ಮೌಲ್ಯಮಾಪನ ವಿಫಲವಾಗಿದೆ",
      failedDesc: "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವಾಗ ದೋಷ ಸಂಭವಿಸಿದೆ.",
      fieldHelper: {
        title: "ಆಯುಷ್ ನಿಯಂತ್ರಕ ಸಂದರ್ಭ",
        desc: "ಮೊದಲ ವೇಳಾಪಟ್ಟಿ ಗ್ರಂಥಗಳು ಮತ್ತು ಭಾರತೀಯ ಫಾರ್ಮಾಕೋಪಿಯಾ ಆಧಾರಿತ ಮಾರ್ಗಸೂಚಿಗಳು.",
      },
    },
    report: {
      riskLevels: {
        low: "ಕಡಿಮೆ ಅಪಾಯ",
        moderate: "ಮಧ್ಯಮ ಅಪಾಯ",
        high: "ಹೆಚ್ಚಿನ ಅಪಾಯ",
      },
      aiComplete: "ಎಐ ಮೌಲ್ಯಮಾಪನ ಪೂರ್ಣಗೊಂಡಿದೆ",
      legalGroundingTitle: "ಕಾನೂನು ಆಧಾರಗಳು ಮತ್ತು ಉಲ್ಲೇಖಗಳು",
      legalGroundingSubtitle:
        "ಅಧಿಕೃತ ನಿಯಂತ್ರಕ ದಾಖಲೆಗಳಿಂದ ಸಂಗ್ರಹಿಸಲಾದ ನೇರ ಉಲ್ಲೇಖಗಳು",
      noCitations: "ನಿಮ್ಮ ವಿವರಗಳಿಗೆ ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಉಲ್ಲೇಖಗಳು ಹೊಂದಾಣಿಕೆಯಾಗಿಲ್ಲ.",
      actionPlanTitle: "ಕಾರ್ಯ ಯೋಜನೆ",
      actionPlanSubtitle: "ನಿಯಮಗಳ ಅನುಸರಣೆಗಾಗಿ ಶಿಫಾರಸು ಮಾಡಲಾದ ಮುಂದಿನ ಹಂತಗಳು",
      noActions: "ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಕ್ರಮಗಳ ಅಗತ್ಯವಿಲ್ಲ.",
    },
    chat: {
      badge: "ಬುದ್ಧಿವಂತ RAG ಸಹಾಯಕ",
      title: "ಎಐ ಕಾನೂನು ಸಹಾಯಕ",
      subtitle:
        "ತ್ವರಿತ ಮಾಹಿತಿ ಮತ್ತು ನಿಯಂತ್ರಕ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಲು ನಮ್ಮ ಎಐ ಕಾನೂನು ಸಹಾಯಕನೊಂದಿಗೆ ಸಂವಾದ ನಡೆಸಿ.",
      header: "ಎಐ ಕಾನೂನು ಸಹಾಯಕ",
      initialGreeting:
        "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಎಐ ಕಾನೂನು ಸಹಾಯಕ (AI Legal Assistant). ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?",
      inputPlaceholder: "ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...",
      thinking: "ಯೋಚಿಸುತ್ತಿದೆ...",
      errorMessage:
        "ಎಐ ಕಾನೂನು ಸಹಾಯಕರನ್ನು ಸಂಪರ್ಕಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು GEMINI_API_KEY ಸರಿಯಾಗಿ ಕಾನ್ಫಿಗರ್ ಆಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.",
    },
    corpus: {
      title: "ಕಾನೂನು ದಾಖಲೆಗಳ ಸಂಗ್ರಹ",
      subtitle:
        "ಭಾರತದಲ್ಲಿ ಮಾನ್ಯತೆ ಪಡೆದ ಅಧಿಕೃತ ಬೌದ್ಧಿಕ ಆಸ್ತಿ ಡೇಟಾಬೇಸ್‌ಗಳು ಮತ್ತು ಪ್ರಮುಖ ನಿಯಂತ್ರಕ ದಾಖಲೆಗಳನ್ನು ಪ್ರವೇಶಿಸಿ.",
      officialSources: "ಅಧಿಕೃತ ಮೂಲಗಳು",
      robustGroundedDatabase: "ನಮ್ಮ ದೃಢವಾದ ಮೂಲ ಡೇಟಾಬೇಸ್",
      sources: [
        {
          acronym: "TKDL",
          name: "ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಞಾನ ಡಿಜಿಟಲ್ ಲೈಬ್ರರಿ",
          desc: "ಸಾಂಪ್ರದಾಯಿಕ ಭಾರತೀಯ ಔಷಧೀಯ ಜ್ಞಾನದ ದುರುಪಯೋಗ ಮತ್ತು ಸೂಕ್ತವಲ್ಲದ ಪೇಟೆಂಟ್‌ಗಳನ್ನು ತಡೆಗಟ್ಟುವ ಅಧಿಕೃತ ಡೇಟಾಬೇಸ್.",
        },
        {
          acronym: "ಇಂಡಿಯಾ ಕೋಡ್",
          name: "ಕಾಯ್ದೆಗಳು ಮತ್ತು ನಿಯಮಗಳು (ಇಂಡಿಯಾ ಕೋಡ್)",
          desc: "ಎಲ್ಲಾ ಕೇಂದ್ರ ಮತ್ತು ರಾಜ್ಯ ಕಾಯ್ದೆಗಳ ಅಧಿಕೃತ ಡಿಜಿಟಲ್ ಭಂಡಾರ.",
        },
        {
          acronym: "ಐಪಿ ಇಂಡಿಯಾ",
          name: "ಐಪಿ ಇಂಡಿಯಾ ಸಾರ್ವಜನಿಕ ಡೇಟಾಬೇಸ್",
          desc: "ಪೇಟೆಂಟ್‌ಗಳು, ಟ್ರೇಡ್‌ಮಾರ್ಕ್‌ಗಳು, ವಿನ್ಯಾಸಗಳು ಮತ್ತು ಭೌಗೋಳಿಕ ಸೂಚ್ಯಂಕ (GI) ನೋಂದಣಿ ಕಚೇರಿ.",
        },
        {
          acronym: "ದಾಖಲೆ ಡ್ರೈವ್",
          name: "ಆಂತರಿಕ ನಿಯಂತ್ರಕ ದಾಖಲೆಗಳು",
          desc: "ಸರ್ಕಾರಿ ಸುತ್ತೋಲೆಗಳು ಮತ್ತು ನಿಯಂತ್ರಕ ಮಾರ್ಗಸೂಚಿಗಳ ಆಂತರಿಕ ಡೇಟಾಬೇಸ್ ಪ್ರವೇಶ.",
        },
      ],
    },
    expert: {
      badge: "ನೇರ ಸಹಾಯ ನೆಟ್‌ವರ್ಕ್",
      title: "ತಜ್ಞರ ನೆರವು",
      subtitle:
        "ಎಐ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಔಪಚಾರಿಕ ಆಡಳಿತಾತ್ಮಕ ಕ್ರಮಗಳ ನಡುವಿನ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡಿ. ಪರಿಶೀಲಿತ ವಕೀಲರು ಮತ್ತು ನಿಯಂತ್ರಕ ಅಧಿಕಾರಿಗಳೊಂದಿಗೆ ನೇರವಾಗಿ ಸಮಾಲೋಚಿಸಿ.",
      officialPortalsTitle: "ಅಧಿಕೃತ ನಿಯಂತ್ರಕ ಪೋರ್ಟಲ್‌ಗಳು",
      officialPortalsSubtitle: "ಸರ್ಕಾರಿ ಸಂಸ್ಥೆಗಳು, ಶಾಸನಬದ್ಧ ಡೈರೆಕ್ಟರಿಗಳು ಮತ್ತು ಫೈಲಿಂಗ್ ಪೋರ್ಟಲ್‌ಗಳು",
      verifiedSpecialistsTitle: "ಪರಿಶೀಲಿತ ಕಾನೂನು ಮತ್ತು ಐಪಿ ತಜ್ಞರು",
      verifiedSpecialistsSubtitle: "ಪ್ರಮಾಣೀಕೃತ ನಿಯಂತ್ರಕ ಸಲಹೆಗಾರರೊಂದಿಗೆ ನೇರ ಸಮಾಲೋಚನೆ",
      domainsTitle: "ವಿಶೇಷ ಶಾಖೆ ಮತ್ತು ಸೌಲಭ್ಯ ನೆಟ್‌ವರ್ಕ್",
      domainsSubtitle: "ಕಾನೂನು ಪರಿಣಿತಿ ಮತ್ತು ಅಭ್ಯಾಸ ಕ್ಷೇತ್ರಗಳ ಪ್ರಕಾರ ವಕೀಲರನ್ನು ಸಂಪರ್ಕಿಸಿ",
      bookConsultation: "ಸಮಾಲೋಚನೆ ನಿಗದಿಪಡಿಸಿ",
      callDirectly: "ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ",
      verifiedSpecialist: "ಪರಿಶೀಲಿತ ತಜ್ಞರು",
      consultationNotice:
        "ಸಮಾಲೋಚನೆ ಸೂಚನೆ: ಬಾರ್ ಕೌನ್ಸಿಲ್ ಆಫ್ ಇಂಡಿಯಾದಲ್ಲಿ ನೋಂದಾಯಿತ ಪರಿಶೀಲಿತ ವಕೀಲರು, ಪೇಟೆಂಟ್ ಏಜೆಂಟರು ಮತ್ತು ಸ್ವತಂತ್ರ ಸಲಹೆಗಾರರ ಮೂಲಕ ವೃತ್ತಿಪರ ಸಲಹೆ ಸಂಯೋಜಿಸಲ್ಪಟ್ಟಿದೆ.",
      portals: [
        {
          name: "ಬಾರ್ ಕೌನ್ಸಿಲ್ ಆಫ್ ಇಂಡಿಯಾ ಅಡ್ವೋಕೇಟ್ ಹುಡುಕಾಟ",
          acronym: "BCI ಡೈರೆಕ್ಟರಿ",
          desc: "ನೋಂದಾಯಿತ ವಕೀಲರ ಪ್ರಮಾಣಪತ್ರ ಪರಿಶೀಲನೆಗಾಗಿ ಅಧಿಕೃತ ರಾಷ್ಟ್ರವ್ಯಾಪಿ ಡೈರೆಕ್ಟರಿ.",
        },
        {
          name: "ಐಪಿ ಇಂಡಿಯಾ ಸಾರ್ವಜನಿಕ ಪೋರ್ಟಲ್ ಮತ್ತು ಏಜೆಂಟ್ ಹುಡುಕಾಟ",
          acronym: "ಐಪಿ ಇಂಡಿಯಾ ಪೋರ್ಟಲ್",
          desc: "ಪೇಟೆಂಟ್ ಕಂಟ್ರೋಲರ್ ಜನರಲ್ (CGPDTM) ಅವರ ಅಧಿಕೃತ ಪೋರ್ಟಲ್.",
        },
        {
          name: "ಆಯುಷ್ ಸಚಿವಾಲಯದ ಕಾನೂನು ಸಹಾಯವಾಣಿ",
          acronym: "ಆಯುಷ್ ಸಹಾಯವಾಣಿ",
          desc: "ನಿಯಂತ್ರಕ ಸ್ಪಷ್ಟೀಕರಣ, ಎಎಸ್‌ಯು ಔಷಧ ಮಾನದಂಡಗಳು ಮತ್ತು ನೀತಿ ಅನುಸರಣೆಗಾಗಿ ಸಚಿವಾಲಯದ ಪೋರ್ಟಲ್.",
        },
        {
          name: "ರಾಷ್ಟ್ರೀಯ ಜೈವಿಕ ವೈವಿಧ್ಯ ಪ್ರಾಧಿಕಾರ (NBA) ಕೋಶ",
          acronym: "NBA ABS ಕೋಶ",
          desc: "ಜೈವಿಕ ಸಂಪನ್ಮೂಲಗಳ ಬಳಕೆ ಮತ್ತು ಪ್ರಯೋಜನ ಹಂಚಿಕೆ (ABS) ಅನುಮೋದನೆಗಳ ನಿಯಂತ್ರಕ ಸಂಸ್ಥೆ.",
        },
      ],
      experts: [
        {
          name: "ಅಡ್ವೋಕೇಟ್ ರಾಜೇಶ್ ಶರ್ಮಾ",
          role: "ಹಿರಿಯ ಐಪಿ ಮತ್ತು ಪೇಟೆಂಟ್ ವಕೀಲರು",
          desc: "ಆಯುರ್ವೇದ ಸೂತ್ರೀಕರಣಗಳ ಪೇಟೆಂಟ್ ಅರ್ಜಿಗಳು, ಸೆಕ್ಷನ್ 3(p) ಆಕ್ಷೇಪಣೆಗಳು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಞಾನ ರಕ್ಷಣೆಯಲ್ಲಿ 18+ ವರ್ಷಗಳ ಅನುಭವ.",
        },
        {
          name: "ಡಾ. ಅಮೃತಾ ದೇಶ್‌ಮುಖ್",
          role: "ಆಯುಷ್ ನಿಯಂತ್ರಕ ಮತ್ತು ಪರವಾನಗಿ ಸಲಹೆಗಾರರು",
          desc: "ರಾಜ್ಯ ಪರವಾನಗಿ ಪ್ರಾಧಿಕಾರ (SLA) ಉತ್ಪಾದನಾ ಪರವಾನಗಿ (ಫಾರ್ಮ್ 25D) ಮತ್ತು ಶೆಡ್ಯೂಲ್ T ಜಿಎಂಪಿ ಅನುಮೋದನೆಗಳಲ್ಲಿ ಪರಿಣಿತರು.",
        },
        {
          name: "ಅಡ್ವೋಕೇಟ್ ವಿಕ್ರಮ್ ಸೇನ್‌ಗುಪ್ತಾ",
          role: "ಜೈವಿಕ ವೈವಿಧ್ಯತೆ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ವ್ಯಾಪಾರ ತಜ್ಞರು",
          desc: "ರಾಷ್ಟ್ರೀಯ ಜೈವಿಕ ವೈವಿಧ್ಯ ಪ್ರಾಧಿಕಾರ (NBA) ಫಾರ್ಮ್ I/III ಅನುಮೋದನೆ ಮತ್ತು ಯುಎಸ್ ಹಾಗೂ ಯುರೋಪಿಯನ್ ಗಿಡಮೂಲಿಕೆ ರಫ್ತು ಅನುಸರಣೆಯಲ್ಲಿ ಪರಿಣಿತರು.",
        },
      ],
      categories: [
        {
          title: "ಆಯುಷ್ ಉತ್ಪಾದನಾ ಪರವಾನಗಿ",
          badge: "ಪರವಾನಗಿ",
          location: "ಹೊಸ ದೆಹಲಿ ಮತ್ತು ರಾಜ್ಯ ಶಾಖೆಗಳು",
          desc: "ಫಾರ್ಮ್ 25D ಉತ್ಪಾದನಾ ಪರವಾನಗಿ, ಲೋನ್ ಲೈಸೆನ್ಸ್ (ಫಾರ್ಮ್ 25E) ಮತ್ತು ಶೆಡ್ಯೂಲ್ T ಜಿಎಂಪಿ ಅನುಸರಣೆಗಾಗಿ ಸಂಪೂರ್ಣ ಕಾನೂನು ಪ್ರಾತಿನಿಧ್ಯ.",
          tags: ["ಫಾರ್ಮ್ 25D", "ಲೋನ್ ಲೈಸೆನ್ಸ್", "ಶೆಡ್ಯೂಲ್ T ಜಿಎಂಪಿ", "ರಾಜ್ಯ ಡ್ರಗ್ ಕಂಟ್ರೋಲರ್"],
        },
        {
          title: "ಪೇಟೆಂಟ್ ಫೈಲಿಂಗ್ ಮತ್ತು TKDL ರಕ್ಷಣೆ",
          badge: "ಪೇಟೆಂಟ್",
          location: "ಮುಂಬೈ ಮತ್ತು ದೆಹಲಿ ಪೇಟೆಂಟ್ ಕಚೇರಿಗಳು",
          desc: "ಪೇಟೆಂಟ್ ಕಾಯ್ದೆಯ ಸೆಕ್ಷನ್ 3(p) ಮತ್ತು 3(e) ಅಡಿಯಲ್ಲಿ ಆಕ್ಷೇಪಣೆಗಳ ನಿವಾರಣೆ ಮತ್ತು ಜಾಗತಿಕ PCT ಅರ್ಜಿ ಸಿದ್ಧತೆ.",
          tags: ["ಸೆಕ್ಷನ್ 3(p)", "ಪೇಟೆಂಟ್ ಡ್ರಾಫ್ಟಿಂಗ್", "TKDL ಕ್ಲಿಯರೆನ್ಸ್", "PCT ಫೈಲಿಂಗ್"],
        },
        {
          title: "ಜೈವಿಕ ವೈವಿಧ್ಯತೆ ಮತ್ತು ABS ನಿಯಮಗಳು",
          badge: "ಜೈವಿಕ ವೈವಿಧ್ಯತೆ",
          location: "ಚೆನ್ನೈ (NBA ಕೇಂದ್ರ ಕಚೇರಿ)",
          desc: "ಜೈವಿಕ ವೈವಿಧ್ಯತಾ ಕಾಯ್ದೆಯಡಿ ವಾಣಿಜ್ಯ ಬಳಕೆಗಾಗಿ NBA ಫಾರ್ಮ್ I ಮತ್ತು ರಾಜ್ಯ ಮಂಡಳಿಯ ಅನುಮೋದನೆ ಪಡೆಯುವುದು.",
          tags: ["NBA ಫಾರ್ಮ್ I", "ABS ಒಪ್ಪಂದ", "SBB ನೋಟಿಸ್", "ಅರಣ್ಯ ಹಕ್ಕುಗಳ ಅನುಸರಣೆ"],
        },
        {
          title: "ಲೇಬಲಿಂಗ್, ಹಕ್ಕುಗಳು ಮತ್ತು DMRCA ಅನುಸರಣೆ",
          badge: "ನಿಯಂತ್ರಕ",
          location: "ಅಖಿಲ ಭಾರತ ವ್ಯಾಪ್ತಿ",
          desc: "ಜಾಹೀರಾತು ಸಾಮಗ್ರಿಗಳು, ಪ್ಯಾಕೇಜಿಂಗ್ ಲೇಬಲ್‌ಗಳು ಮತ್ತು ಔಷಧಿಗಳು ಮತ್ತು ಮ್ಯಾಜಿಕ್ ಪರಿಹಾರಗಳ ಕಾಯ್ದೆ (DMRCA) ಅನುಸರಣಾ ಪರಿಶೀಲನೆ.",
          tags: ["DMRCA ಆಡಿಟ್", "ಲೇಬಲ್ ಪರಿಶೀಲನೆ", "ರೂಲ್ 161", "ಗ್ರಾಹಕ ಸಂರಕ್ಷಣೆ"],
        },
      ],
    },
    about: {
      title: "ಐಪಿ ಶಕ್ತಿ ಸಹಾಯಕ ಬಗ್ಗೆ",
      subtitle:
        "ಆಯುರ್ವೇದ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ವೈದ್ಯಕೀಯ ಉದ್ಯಮಿಗಳಿಗಾಗಿ ಭಾರತದ ಮೊದಲ ಎಐ-ಚಾಲಿತ ಕಾನೂನು ಮತ್ತು ನಿಯಂತ್ರಕ ಅನುಸರಣಾ ವೇದಿಕೆ.",
      storyTitle: "ನಮ್ಮ ಕಥೆ",
      storySubtitle: "ಸಾಂಪ್ರದಾಯಿಕತೆ ಮತ್ತು ಆಧುನಿಕ ನಿಯಂತ್ರಣಗಳ ಸಮನ್ವಯ",
      storyParagraphs: [
        "ಭಾರತದ ಸಾಂಪ್ರದಾಯಿಕ ವೈದ್ಯಕೀಯ ಪದ್ಧತಿಯು ಸಹಸ್ರಾರು ವರ್ಷಗಳ ಜ್ಞಾನದ ಭಂಡಾರವನ್ನು ಒಳಗೊಂಡಿದೆ. ಆದರೆ ಇಂದಿನ ಆಧುನಿಕ ಯುಗದಲ್ಲಿ ಆಯುರ್ವೇದ ಉತ್ಪನ್ನವನ್ನು ಮಾರುಕಟ್ಟೆಗೆ ತರುವುದು ಅತ್ಯಂತ ಸಂಕೀರ್ಣ ನಿಯಂತ್ರಕ ಪ್ರಕ್ರಿಯೆಯಾಗಿದೆ.",
        "ಔಷಧಿಗಳು ಮತ್ತು ಸೌಂದರ್ಯವರ್ಧಕಗಳ ಕಾಯ್ದೆ 1940, ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಞಾನ ಡಿಜಿಟಲ್ ಲೈಬ್ರರಿ (TKDL) ಮತ್ತು ಜೈವಿಕ ವೈವಿಧ್ಯತಾ ಕಾಯ್ದೆ 2002 ರಂತಹ ನಿಯಮಾವಳಿಗಳಿಂದಾಗಿ ಅನೇಕ ಉದ್ಯಮಿಗಳು ಮತ್ತು ಸಂಶೋಧಕರು ಗೊಂದಲಕ್ಕೆ ಒಳಗಾಗುತ್ತಾರೆ.",
        "ಐಪಿ ಶಕ್ತಿ ಸಹಾಯಕ ಈ ಅಂತರವನ್ನು ನಿವಾರಿಸಲು ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟಿದೆ — ಪ್ರತಿಯೊಬ್ಬ ಆವಿಷ್ಕಾರಕರು ನಿಖರವಾಗಿ ಮತ್ತು ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ನಿಯಂತ್ರಕ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ನೆರವಾಗುತ್ತದೆ.",
      ],
      whyBuiltTitle: "ನಾವು ಇದನ್ನು ಏಕೆ ನಿರ್ಮಿಸಿದೆವು",
      whyBuiltIntro: "ಆಯುಷ್ ವಲಯದ ಸ್ಟಾರ್ಟ್‌ಅಪ್‌ಗಳು ಮತ್ತು ಸಂಶೋಧಕರು ಸಾಮಾನ್ಯವಾಗಿ ಎದುರಿಸುವ ಪ್ರಶ್ನೆಗಳು:",
      whyBuiltQuestions: [
        "ನನ್ನ ಸೂತ್ರೀಕರಣವು ಶಾಸ್ತ್ರೀಯವೆಂದು ವಿನಾಯಿತಿ ಪಡೆಯುತ್ತದೆಯೇ ಅಥವಾ ಇದು ಪೇಟೆಂಟ್ ಮತ್ತು ಸ್ವಾಮ್ಯದ (P&P) ಔಷಧಿಯೇ?",
        "ನಾವು ರಾಜ್ಯ ಜೈವಿಕ ವೈವಿಧ್ಯ ಮಂಡಳಿ (SBB) ಅಥವಾ ರಾಷ್ಟ್ರೀಯ ಪ್ರಾಧಿಕಾರದಿಂದ (NBA) ಅನುಮೋದನೆ ಪಡೆಯಬೇಕೇ?",
        "ನಮ್ಮ ಉತ್ಪನ್ನದ ಪ್ಯಾಕೇಜಿಂಗ್ ಔಷಧಿಗಳು ಮತ್ತು ಮ್ಯಾಜಿಕ್ ಪರಿಹಾರಗಳ ಕಾಯ್ದೆಯನ್ನು (DMRCA) ಸಂಪೂರ್ಣವಾಗಿ ಪಾಲಿಸುತ್ತಿದೆಯೇ?",
        "ನಾವು ನಮ್ಮ ಬೌದ್ಧಿಕ ಆಸ್ತಿಯನ್ನು (IP) ಹೇಗೆ ರಕ್ಷಿಸಿಕೊಳ್ಳಬೇಕು ಮತ್ತು TKDL ನೊಂದಿಗೆ ಸಂಘರ್ಷವನ್ನು ಹೇಗೆ ತಪ್ಪಿಸಬೇಕು?",
      ],
      whyBuiltConclusion:
        "ಐಪಿ ಶಕ್ತಿ ಸಹಾಯಕ ಈ ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳಿಗೆ ಕೆಲವೇ ಸೆಕೆಂಡುಗಳಲ್ಲಿ ನಿಖರ ಮಾಹಿತಿ ಮತ್ತು ಕಾನೂನು ತರ್ಕದೊಂದಿಗೆ ಉತ್ತರವನ್ನು ನೀಡುತ್ತದೆ.",
      visionTitle: "ನಮ್ಮ ದೃಷ್ಟಿಕೋನ",
      visionSubtitle: "ಭಾರತೀಯ ಗಿಡಮೂಲಿಕೆ ನಾವೀನ್ಯತೆಯ ಜಾಗತಿಕ ವಿಸ್ತರಣೆ",
      visionParagraphs: [
        "ಭಾರತವನ್ನು ಜಾಗತಿಕ ಗುಣಮಟ್ಟದ ಮತ್ತು ಕಾನೂನುಬದ್ಧ ನೈಸರ್ಗಿಕ ಚಿಕಿತ್ಸೆಯ ಪ್ರಮುಖ ಕೇಂದ್ರವನ್ನಾಗಿ ರೂಪಿಸುವುದು ನಮ್ಮ ದೃಷ್ಟಿಕೋನವಾಗಿದೆ.",
        "ಪ್ರತಿಯೊಂದು ಗುಣಮಟ್ಟದ ಆಯುರ್ವೇದ ಉತ್ಪನ್ನವು ಅಂತರರಾಷ್ಟ್ರೀಯ ಮನ್ನಣೆ ಪಡೆಯಲು ಅರ್ಹವಾಗಿದೆ ಎಂದು ನಾವು ನಂಬುತ್ತೇವೆ.",
      ],
      missionTitle: "ನಮ್ಮ ಧ್ಯೇಯ",
      missionSubtitle: "ಪಾರದರ್ಶಕತೆ, ವೇಗ ಮತ್ತು ತಾಂತ್ರಿಕ ಬೆಂಬಲ",
      missionIntro: "ನಮ್ಮ ದೈನಂದಿನ ಬದ್ಧತೆಯು ಮೂರು ಮುಖ್ಯ ಸ್ತಂಭಗಳ ಮೇಲೆ ಆಧಾರಿತವಾಗಿದೆ:",
      pillars: [
        {
          title: "ಅಧಿಕೃತ ಕಾನೂನು ಆಧಾರ",
          desc: "ಪ್ರತಿಯೊಂದು ಫಲಿತಾಂಶವು ಮೂಲ ಶಾಸನಬದ್ಧ ಕಾಯ್ದೆಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ಅಧಿಸೂಚನೆಗಳಿಗೆ ಜೋಡಿಸಲ್ಪಟ್ಟಿದೆ.",
        },
        {
          title: "ಸಂಪೂರ್ಣ ಪಾರದರ್ಶಕತೆ",
          desc: "ಯಾವುದೇ ಅಸ್ಪಷ್ಟತೆಯಿಲ್ಲ — ಪ್ರತಿಯೊಂದು ಅಪಾಯ ಮತ್ತು ಅನುಸರಣೆಯನ್ನು ಸ್ಪಷ್ಟ ಭಾಷೆಯಲ್ಲಿ ವಿವರಿಸಲಾಗುತ್ತದೆ.",
        },
        {
          title: "ಸುಲಭ ಪ್ರವೇಶ",
          desc: "ಸಣ್ಣ ರೈತರಿಂದ ಹಿಡಿದು ಜಾಗತಿಕ ಬ್ರ್ಯಾಂಡ್‌ಗಳವರೆಗೆ — ಎಲ್ಲರಿಗೂ ಸುಲಭವಾಗಿ ಅರ್ಥವಾಗುವ ಇಂಟರ್ಫೇಸ್.",
        },
      ],
      differentiatorsTitle: "ಐಪಿ ಶಕ್ತಿ ಸಹಾಯಕ ಏಕೆ ವಿಶಿಷ್ಟ",
      differentiators: [
        {
          title: "ವಿಶೇಷ RAG ಆರ್ಕಿಟೆಕ್ಚರ್",
          content:
            "ನಮ್ಮ ವ್ಯವಸ್ಥೆಯು ಕೇವಲ ಸಾಮಾನ್ಯ ಎಐ ಅಲ್ಲ; ಇದು ಭಾರತದ ಎಲ್ಲಾ ಆಯುಷ್ ಕಾಯ್ದೆಗಳು, ಡ್ರಗ್ ನಿಯಮಗಳು ಮತ್ತು ನ್ಯಾಯಾಲಯದ ತೀರ್ಪುಗಳಿಂದ ವಿಶೇಷವಾಗಿ ತರಬೇತಿ ಪಡೆದಿದೆ.",
        },
        {
          title: "5-ಮಾದರಿ ಸ್ಮಾರ್ಟ್ ಪ್ರೊಫೈಲಿಂಗ್",
          content:
            "ಪದಾರ್ಥಗಳು, ಉತ್ಪಾದನೆ, ಮೂಲ, ಲೇಬಲಿಂಗ್ ಮತ್ತು ಉದ್ದೇಶಿತ ಮಾರುಕಟ್ಟೆಯ ಸಂಪೂರ್ಣ ಸಮಗ್ರ ಮೌಲ್ಯಮಾಪನ.",
        },
        {
          title: "ನೈಜ ತಜ್ಞರ ಬೆಂಬಲ",
          content:
            "ಅಗತ್ಯವಿದ್ದಾಗ ತಕ್ಷಣವೇ ಬಾರ್ ಕೌನ್ಸಿಲ್ ನೋಂದಾಯಿತ ವಕೀಲರೊಂದಿಗೆ ನೇರ ಸಂಪರ್ಕ ಸಾಧಿಸುವ ಅವಕಾಶ.",
        },
      ],
      howItWorksTitle: "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
      howItWorksSubtitle: "ಸರಳ ಮೂರು ಹಂತಗಳಲ್ಲಿ ಕಾನೂನು ಸಿದ್ಧತೆ",
      steps: [
        {
          title: "1. ಉತ್ಪನ್ನದ ಮಾಹಿತಿ ನೀಡಿ",
          desc: "ನಿಮ್ಮ ಪದಾರ್ಥಗಳು, ಮೂಲ ಮತ್ತು ಉತ್ಪಾದನಾ ವಿಧಾನವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
        },
        {
          title: "2. ಎಐ ಕಾನೂನು ವಿಶ್ಲೇಷಣೆ",
          desc: "ನಮ್ಮ ವ್ಯವಸ್ಥೆಯು ತಕ್ಷಣವೇ ಸಾವಿರಾರು ಕಾಯ್ದೆಗಳು ಮತ್ತು ನಿಯಮಾವಳಿಗಳೊಂದಿಗೆ ಹೋಲಿಕೆ ಮಾಡುತ್ತದೆ.",
        },
        {
          title: "3. ಅನುಸರಣಾ ವರದಿ ಪಡೆಯಿರಿ",
          desc: "ಪರವಾನಗಿ ಮಾರ್ಗ, ಅಗತ್ಯ ದಾಖಲೆಗಳು ಮತ್ತು ಅಪಾಯದ ವಿಶ್ಲೇಷಣೆಯ ವಿವರವಾದ ವರದಿಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.",
        },
      ],
    },
    privacy: {
      title: "ಗೌಪ್ಯತಾ ನೀತಿ",
      subtitle:
        "ಡೇಟಾ ಸಾರ್ವಭೌಮತ್ವ, ಅಧಿವೇಶನ ಪ್ರತ್ಯೇಕತೆ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಯ ಗೌಪ್ಯತೆ ನಿರ್ವಹಣೆಯ ಸಮಗ್ರ ಚೌಕಟ್ಟು.",
      tldrLabel: "ಸಂಕ್ಷಿಪ್ತ ಸಾರಾಂಶ (TL;DR)",
      sections: [
        {
          id: "introduction",
          title: "ಪೀಠಿಕೆ",
          tldr: "ಐಪಿ ಶಕ್ತಿ ಸಹಾಯಕ ಕಟ್ಟುನಿಟ್ಟಾದ ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಗೌಪ್ಯತೆ ರಕ್ಷಣೆಯೊಂದಿಗೆ ಸೂಕ್ಷ್ಮ ಬೌದ್ಧಿಕ ಆಸ್ತಿ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಞಾನವನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ.",
          tags: ["ಸಾರಾಂಶ", "ಬದ್ಧತೆ"],
          metadata: { "ಜಾರಿಯ ದಿನಾಂಕ": "ಸೆಪ್ಟೆಂಬರ್ 2026", "ಭದ್ರತಾ ಮಟ್ಟ": "ಪ್ರಮಾಣಿತ" },
          paragraphs: [
            "ಆಯುರ್ವೇದ, ಬೌದ್ಧಿಕ ಆಸ್ತಿ ಹಕ್ಕುಗಳು (IPR), ಜೈವಿಕ ವೈವಿಧ್ಯತೆ ಮತ್ತು ಪ್ರಯೋಜನ ಹಂಚಿಕೆ (ABS) ಹಾಗೂ ನಿಯಂತ್ರಕ ಚೌಕಟ್ಟಿನ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಸುಧಾರಿತ ಎಐ ವೇದಿಕೆಯಾದ ಐಪಿ ಶಕ್ತಿ ಸಹಾಯಕಕ್ಕೆ ಸುಸ್ವಾಗತ. ಗರಿಷ್ಠ ಗೌಪ್ಯತೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಂಡು ವಿಶ್ವಾಸಾರ್ಹ ಶೈಕ್ಷಣಿಕ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸಲು ನಮ್ಮ ಮೂಲಸೌಕರ್ಯವನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.",
            "ನಿಖರವಾದ ಮತ್ತು ಕಾನೂನುಬದ್ಧ ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ತಯಾರಿಸಲು ಮಾತ್ರ ನಾವು ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತೇವೆ. ನಿಮ್ಮ ಸಂವಾದಗಳು ಸುರಕ್ಷಿತ ಅಧಿವೇಶನದಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಿ ಪ್ರತ್ಯೇಕವಾಗಿರುತ್ತವೆ ಮತ್ತು ಹೊರಗಿನ ಮಾರ್ಕೆಟಿಂಗ್ ಸಂಸ್ಥೆಗಳಿಗೆ ಎಂದಿಗೂ ಮಾರಾಟ ಮಾಡುವುದಿಲ್ಲ ಅಥವಾ ಬಹಿರಂಗಪಡಿಸುವುದಿಲ್ಲ.",
          ],
        },
        {
          id: "data-privacy",
          title: "ಡೇಟಾ ಮತ್ತು ಗೌಪ್ಯತೆ",
          tldr: "ಬೌದ್ಧಿಕ ಆಸ್ತಿ ಸಂಬಂಧಿತ ಡೇಟಾ ಸುರಕ್ಷತೆಗಾಗಿ ಪ್ರತಿಯೊಬ್ಬ ಬಳಕೆದಾರರ ಅಧಿವೇಶನವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಪ್ರತ್ಯೇಕವಾಗಿ ಇರಿಸಲಾಗುತ್ತದೆ.",
          tags: ["ಅಧಿವೇಶನ ಪ್ರತ್ಯೇಕತೆ", "ಗೌಪ್ಯತೆಗೆ ಆದ್ಯತೆ"],
          metadata: { "ಪರಿಶೀಲನಾ ಸ್ಥಿತಿ": "ಆಡಿಟ್ ಆಗಿದೆ", "ಚೌಕಟ್ಟು": "ಝೀರೋ-ಟ್ರಸ್ಟ್" },
          paragraphs: [
            "ಬಳಕೆದಾರರ ಮಾಹಿತಿಯ ಜವಾಬ್ದಾರಿಯುತ ಸಂಸ್ಕರಣೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಐಪಿ ಶಕ್ತಿ ಸಹಾಯಕವನ್ನು ಗೌಪ್ಯತೆ-ಆಧಾರಿತ ವಾಸ್ತುಶಿಲ್ಪದೊಂದಿಗೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ವೇದಿಕೆಯು ಬೌದ್ಧಿಕ ಆಸ್ತಿ ಮತ್ತು ನಿಯಂತ್ರಕ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ವ್ಯವಹರಿಸುವುದರಿಂದ, ಡೇಟಾ ರಕ್ಷಣೆಯು ನಮ್ಮ ವ್ಯವಸ್ಥೆಯ ಮುಖ್ಯ ಸ್ತಂಭವಾಗಿದೆ.",
            "ಈ ವೇದಿಕೆಯಲ್ಲಿ ಪ್ರಸ್ತುತಪಡಿಸಲಾದ ವಿಚಾರಣೆಗಳು ನವೀನ ಮತ್ತು ಗೌಪ್ಯ ಆಲೋಚನೆಗಳ ಸುಳಿವುಗಳನ್ನು ಹೊಂದಿರಬಹುದು ಎಂಬುದನ್ನು ನಾವು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇವೆ. ಆದ್ದರಿಂದ ನಮ್ಮ ಡೇಟಾ ಪೈಪ್‌ಲೈನ್ ವಿಭಿನ್ನ ಬಳಕೆದಾರರ ಖಾತೆಗಳ ನಡುವೆ ಡೇಟಾ ಕ್ರಾಸ್-ಓವರ್ ಅನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತಡೆಯುತ್ತದೆ. ಎಲ್ಲಾ ಪ್ರಕ್ರಿಯೆಗಳು ಸುರಕ್ಷಿತ ಪ್ರತ್ಯೇಕ ಪರಿಸರದಲ್ಲಿ ನಡೆಯುತ್ತವೆ.",
            "ನಿಮ್ಮ ಇತಿಹಾಸವು ಯಾವುದೇ ಅನಧಿಕೃತ ವ್ಯಕ್ತಿ ಅಥವಾ ಸಂಸ್ಥೆಗೆ ಬಹಿರಂಗವಾಗುವುದಿಲ್ಲ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ನಮ್ಮ ಭದ್ರತಾ ತಂಡವು ಪ್ರೋಟೋಕಾಲ್‌ಗಳನ್ನು ನಿರಂತರವಾಗಿ ಪರಿಶೀಲಿಸುತ್ತದೆ.",
          ],
        },
        {
          id: "data-minimization",
          title: "ಕನಿಷ್ಠ ಡೇಟಾ ಸಂಗ್ರಹಣೆ",
          tldr: "ಕಾನೂನು ಮತ್ತು ನಿಯಂತ್ರಕ ಪ್ರಶ್ನೆಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಅಗತ್ಯವಿರುವ ಡೇಟಾವನ್ನು ಹೊರತುಪಡಿಸಿ ಹೆಚ್ಚುವರಿ ಏನನ್ನೂ ಸಂಗ್ರಹಿಸಲಾಗುವುದಿಲ್ಲ.",
          tags: ["ಕನಿಷ್ಠ ಸಂಗ್ರಹಣೆ", "ಸ್ವಯಂಚಾಲಿತ ಅಳಿಸುವಿಕೆ"],
          metadata: { "ಡೇಟಾ ವ್ಯಾಪ್ತಿ": "ಸೀಮಿತ", "ಅಳಿಸುವಿಕೆ ಚಕ್ರ": "ಸ್ವಯಂಚಾಲಿತ" },
          paragraphs: [
            "ಪ್ರಸ್ತುತ ಆಯುರ್ವೇದ, ಐಪಿಆರ್ ಮತ್ತು ನಿಯಂತ್ರಕ ನಿರ್ದೇಶನಗಳನ್ನು ಒದಗಿಸಲು ನಮ್ಮ ವ್ಯವಸ್ಥೆಯು ಕೇವಲ ಅಗತ್ಯ ಮಾಹಿತಿಯನ್ನು ಮಾತ್ರ ಸಂಗ್ರಹಿಸುತ್ತದೆ. ಅನಗತ್ಯ ವೈಯಕ್ತಿಕ ಅಥವಾ ಸೂಕ್ಷ್ಮ ಮಾಹಿತಿಯನ್ನು ಎಂದಿಗೂ ಕೇಳಲಾಗುವುದಿಲ್ಲ.",
            "ಬಳಕೆಯ ಸಮಯದಲ್ಲಿ ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ಮೆಟಾಡೇಟಾವನ್ನು ಅನಗತ್ಯವಾಗಿ ಸಂಗ್ರಹಿಸಲಾಗುವುದಿಲ್ಲ ಮತ್ತು ಸ್ವಯಂಚಾಲಿತ ಪ್ರಕ್ರಿಯೆಯ ಮೂಲಕ ನಿಯಮಿತವಾಗಿ ಅನಗತ್ಯ ಡೇಟಾವನ್ನು ಅಳಿಸಲಾಗುತ್ತದೆ.",
            "ಈ ಕಟ್ಟುನಿಟ್ಟಾದ ಮಾಹಿತಿ ಕಡಿತ ನೀತಿಯು ನಮ್ಮ ಡಿಜಿಟಲ್ ಹೆಜ್ಜೆಗುರುತನ್ನು ಕಡಿಮೆ ಇರಿಸುತ್ತದೆ ಮತ್ತು ಬಳಕೆದಾರರ ಗೌಪ್ಯತೆಯನ್ನು ರಕ್ಷಿಸುತ್ತದೆ.",
          ],
        },
        {
          id: "user-data-protection",
          title: "ಬಳಕೆದಾರರ ಡೇಟಾ ರಕ್ಷಣೆ",
          tldr: "ಎಲ್ಲಾ ಬಳಕೆದಾರರ ಡೇಟಾವನ್ನು ಬಲವಾದ ಎನ್‌ಕ್ರಿಪ್ಶನ್ ಮತ್ತು ನೈಜ-ಸಮಯದ ನುಸುಳುವಿಕೆ ಮೇಲ್ವಿಚಾರಣೆಯ ಮೂಲಕ ಸಂರಕ್ಷಿಸಲಾಗಿದೆ.",
          tags: ["ಎನ್‌ಕ್ರಿಪ್ಶನ್", "ಸಕ್ರಿಯ ಕಣ್ಗಾವಲು"],
          metadata: { "ಎನ್‌ಕ್ರಿಪ್ಶನ್": "AES-256", "ಕಣ್ಗಾವಲು": "24/7 ಸಕ್ರಿಯ" },
          paragraphs: [
            "ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ ಮತ್ತು ಸಾಮಗ್ರಿಗಳನ್ನು ಅನಧಿಕೃತ ಪ್ರವೇಶ, ಬಹಿರಂಗಪಡಿಸುವಿಕೆ ಅಥವಾ ದುರುಪಯೋಗದಿಂದ ರಕ್ಷಿಸಲು ಸೂಕ್ತ ಭದ್ರತಾ ಕ್ರಮಗಳನ್ನು ಅಳವಡಿಸಲಾಗಿದೆ. ಡೇಟಾ ವರ್ಗಾವಣೆ ಮತ್ತು ಶೇಖರಣೆ ಎರಡರಲ್ಲೂ ನಾವು ಆಧುನಿಕ ಗೂಢಲಿಪೀಕರಣವನ್ನು ಬಳಸುತ್ತೇವೆ.",
            "ನಮ್ಮ ಮೂಲಸೌಕರ್ಯವು ವಿವರವಾದ ಪ್ರವೇಶ ಲಾಗ್‌ಗಳು ಮತ್ತು ನೈಜ-ಸಮಯದ ಮೇಲ್ವಿಚಾರಣಾ ವ್ಯವಸ್ಥೆಗಳನ್ನು ಒಳಗೊಂಡಿದೆ, ಇದು ಯಾವುದೇ ಅನಧಿಕೃತ ಪ್ರವೇಶದ ಪ್ರಯತ್ನಗಳನ್ನು ತಕ್ಷಣವೇ ತಡೆಯುತ್ತದೆ.",
            "ನಿಮ್ಮ ಡೇಟಾದ ಸಮಗ್ರತೆಯನ್ನು ಕಾಪಾಡುವುದು ನಮ್ಮ ತಂಡ ಮತ್ತು ತಂತ್ರಜ್ಞಾನದ ಅತ್ಯುನ್ನತ ಆದ್ಯತೆಯಾಗಿದೆ.",
          ],
        },
        {
          id: "confidential-information",
          title: "ಗೌಪ್ಯ ಮಾಹಿತಿಯ ರಕ್ಷಣೆ",
          tldr: "ಪ್ರಕಟವಾಗದ ವಾಣಿಜ್ಯ ರಹಸ್ಯಗಳು ಅಥವಾ ರಾಸಾಯನಿಕ ಅನುಪಾತಗಳನ್ನು ಸಿಸ್ಟಮ್‌ಗೆ ಇನ್‌ಪುಟ್ ಮಾಡದಂತೆ ಬಳಕೆದಾರರಿಗೆ ಸೂಚಿಸಲಾಗಿದೆ.",
          tags: ["ವಾಣಿಜ್ಯ ರಹಸ್ಯ", "ಮುನ್ನೆಚ್ಚರಿಕೆ"],
          metadata: { "ಅಪಾಯದ ಮಟ್ಟ": "ಹೆಚ್ಚು", "ಮಾರ್ಗದರ್ಶನ": "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ" },
          paragraphs: [
            "ಪ್ರಕಟವಾಗದ ಆವಿಷ್ಕಾರಗಳು, ಟ್ರೇಡ್ ಸೀಕ್ರೆಟ್‌ಗಳು ಮತ್ತು ಸೂಕ್ಷ್ಮ ವ್ಯವಹಾರ ಮಾಹಿತಿಯನ್ನು ವೇದಿಕೆಯಲ್ಲಿ ನಮೂದಿಸುವ ಅಗತ್ಯವಿಲ್ಲ.",
            "ಸೂಕ್ಷ್ಮ ಸೂತ್ರೀಕರಣಗಳ ಸಂದರ್ಭದಲ್ಲಿ ಸಾಮಾನ್ಯ ನಿಯಂತ್ರಕ ತತ್ವಗಳ ಆಧಾರದ ಮೇಲೆ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಲು ಬಳಕೆದಾರರಿಗೆ ಸಲಹೆ ನೀಡಲಾಗುತ್ತದೆ, ಇದರಿಂದ ಸೂತ್ರದ ಮೇಲೆ ನಿಮ್ಮ ಸಂಪೂರ್ಣ ನಿಯಂತ್ರಣ ಉಳಿಯುತ್ತದೆ.",
            "ಈ ವೇದಿಕೆಯನ್ನು ಕಾನೂನು ವಿವರಣೆಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ, ಪ್ರಕಟವಾಗದ ಬೌದ್ಧಿಕ ಆಸ್ತಿಯ ವಾಲ್ಟ್ ಆಗಿ ಅಲ್ಲ. ಈ ವ್ಯತ್ಯಾಸದಿಂದಾಗಿ ನಿಮ್ಮ ಮಾಲೀಕತ್ವದ ಹಕ್ಕುಗಳು ಅಖಂಡವಾಗಿ ಉಳಿಯುತ್ತವೆ.",
          ],
        },
        {
          id: "secure-transmission",
          title: "ಸುರಕ್ಷಿತ ಡೇಟಾ ವರ್ಗಾವಣೆ",
          tldr: "ಎಲ್ಲಾ ಸಂವಹನಗಳನ್ನು ಸುಧಾರಿತ HTTPS ಮತ್ತು TLS ಕ್ರಿಪ್ಟೋಗ್ರಾಫಿಕ್ ಪ್ರೋಟೋಕಾಲ್‌ಗಳ ಮೂಲಕ ರಕ್ಷಿಸಲಾಗಿದೆ.",
          tags: ["HTTPS", "TLS 1.3"],
          metadata: { "ಪ್ರೋಟೋಕಾಲ್": "ಕಟ್ಟುನಿಟ್ಟಾದ TLS", "ಪ್ರಮಾಣಪತ್ರ": "ಸ್ವಯಂಚಾಲಿತ ನವೀಕರಣ" },
          paragraphs: [
            "ಬಳಕೆದಾರ ಮತ್ತು ವೇದಿಕೆಯ ನಡುವಿನ ಎಲ್ಲಾ ಸಂವಹನಗಳು ಸುರಕ್ಷಿತ ಪ್ರೋಟೋಕಾಲ್‌ಗಳನ್ನು ಬಳಸುತ್ತವೆ. ಈ ಪ್ರೋಟೋಕಾಲ್‌ಗಳು ನಿಮ್ಮ ಬ್ರೌಸರ್ ಮತ್ತು ನಮ್ಮ ಸರ್ವರ್ ನಡುವೆ ಸುರಕ್ಷಿತ ಸುರಂಗವನ್ನು ರಚಿಸುತ್ತವೆ.",
            "ನಾವು ಕೇವಲ ಸುರಕ್ಷಿತ ಸಂಪರ್ಕಗಳನ್ನು ಮಾತ್ರ ಸ್ವೀಕರಿಸುತ್ತೇವೆ ಮತ್ತು ಯಾವುದೇ ಅಸುರಕ್ಷಿತ ಅಥವಾ ಹಳೆಯ ಸಂಪರ್ಕ ಪ್ರಯತ್ನಗಳನ್ನು ತಿರಸ್ಕರಿಸುತ್ತೇವೆ.",
            "ಆಧುನಿಕ ಸೈಬರ್ ಬೆದರಿಕೆಗಳ ವಿರುದ್ಧ ಸುರಕ್ಷತೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ನವೀಕರಿಸಲಾಗುತ್ತದೆ.",
          ],
        },
        {
          id: "user-control",
          title: "ಬಳಕೆದಾರರ ನಿಯಂತ್ರಣ ಮತ್ತು ಸಮ್ಮತಿ",
          tldr: "ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ಡೇಟಾ ಸಂಸ್ಕರಣೆಗೆ ಬಳಕೆದಾರರ ಸ್ಪಷ್ಟ ಸಮ್ಮತಿಯ ಅಗತ್ಯವಿದೆ, ಅದನ್ನು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಹಿಂಪಡೆಯಬಹುದು.",
          tags: ["ಸಮ್ಮತಿ", "ನಿಯಂತ್ರಣ"],
          metadata: { "ಡೀಫಾಲ್ಟ್ ಸ್ಥಿತಿ": "ಆಪ್ಟ್-ಔಟ್", "ಹಿಂಪಡೆಯುವಿಕೆ": "ತಕ್ಷಣವೇ" },
          paragraphs: [
            "ಬಳಕೆದಾರರು ತಮ್ಮ ಮಾಹಿತಿ ಮತ್ತು ಅನುಮತಿಗಳ ಮೇಲೆ ಸಂಪೂರ್ಣ ನಿಯಂತ್ರಣವನ್ನು ಹೊಂದಿರುತ್ತಾರೆ. ಪ್ರಾಥಮಿಕ ಸೇವೆಯ ಹೊರತಾಗಿ ಯಾವುದೇ ಸಂಸ್ಕರಣೆಯ ಮೊದಲು ಸ್ಪಷ್ಟ ಸಮ್ಮತಿಯನ್ನು ಪಡೆಯಲಾಗುತ್ತದೆ.",
            "ಅನುಮತಿಯನ್ನು ಹಿಂಪಡೆಯುವುದು ತುಂಬಾ ಸುಲಭ ಮತ್ತು ಪಾರದರ್ಶಕವಾಗಿದೆ. ಬಳಕೆದಾರರು ಯಾವುದೇ ಕ್ಷಣದಲ್ಲಿ ತಮ್ಮ ಆದ್ಯತೆಗಳನ್ನು ಬದಲಾಯಿಸಬಹುದು ಅಥವಾ ಹಿಂಪಡೆಯಬಹುದು.",
            "ನಾವು ಸಕ್ರಿಯ ಸಮ್ಮತಿಯ ತತ್ವದ ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತೇವೆ ಮತ್ತು ಹೆಚ್ಚುವರಿ ಡೇಟಾ ಬಳಕೆಯ ವೈಶಿಷ್ಟ್ಯಗಳು ಡೀಫಾಲ್ಟ್ ಆಗಿ ನಿಷ್ಕ್ರಿಯವಾಗಿರುತ್ತವೆ.",
          ],
        },
        {
          id: "access-deletion",
          title: "ಡೇಟಾ ಪ್ರವೇಶ ಮತ್ತು ಅಳಿಸುವಿಕೆ",
          tldr: "ಬಳಕೆದಾರರು ತಮ್ಮ ಇತಿಹಾಸವನ್ನು ಪರಿಶೀಲಿಸುವ, ಡೌನ್‌ಲೋಡ್ ಮಾಡುವ ಅಥವಾ ಶಾಶ್ವತವಾಗಿ ಅಳಿಸುವ ಸಂಪೂರ್ಣ ಸ್ವಾತಂತ್ರ್ಯವನ್ನು ಹೊಂದಿದ್ದಾರೆ.",
          tags: ["ಅಳಿಸುವಿಕೆ", "ಪೋರ್ಟಬಿಲಿಟಿ"],
          metadata: { "ಸಂಸ್ಕರಣಾ ಸಮಯ": "ತಕ್ಷಣವೇ", "ಅಳಿಸುವಿಕೆ": "ಶಾಶ್ವತ" },
          paragraphs: [
            "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಬಳಕೆದಾರರಿಗೆ ತಮ್ಮ ಸಂಗ್ರಹಿಸಿದ ಮಾಹಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಲು, ಸರಿಪಡಿಸಲು ಅಥವಾ ಸಂಪೂರ್ಣ ಡೇಟಾವನ್ನು ಅಳಿಸಲು ಸೌಲಭ್ಯವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
            "ನೀವು ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಬಳಸುವುದನ್ನು ನಿಲ್ಲಿಸಲು ಬಯಸಿದರೆ, ಒಂದು ವಿನಂತಿಯ ಮೂಲಕ ನಿಮ್ಮ ಖಾತೆ ಮತ್ತು ಪ್ರಶ್ನೆ ಇತಿಹಾಸವನ್ನು ಡೇಟಾಬೇಸ್‌ನಿಂದ ಶಾಶ್ವತವಾಗಿ ತೆಗೆದುಹಾಕಬಹುದು.",
            "ಡೇಟಾದ ನಿಜವಾದ ಮಾಲೀಕರು ಬಳಕೆದಾರರೆಂದು ನಾವು ನಂಬುತ್ತೇವೆ. ಆದ್ದರಿಂದ ನಾವು ಮುಕ್ತ ಸ್ವರೂಪದಲ್ಲಿ ಡೇಟಾ ರಫ್ತು ಮಾಡುವ ಅವಕಾಶವನ್ನೂ ಒದಗಿಸುತ್ತೇವೆ.",
          ],
        },
        {
          id: "third-party-audits",
          title: "ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಆಡಿಟ್‌ಗಳು ಮತ್ತು ಅನುಸರಣೆ",
          tldr: "ನಿಯಂತ್ರಕ ಅನುಸರಣೆ ಮತ್ತು ಸಿಸ್ಟಮ್ ಸುರಕ್ಷತೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ನಿಯಮಿತ ಸ್ವತಂತ್ರ ಮೌಲ್ಯಮಾಪನಗಳನ್ನು ನಡೆಸಲಾಗುತ್ತದೆ.",
          tags: ["ಆಡಿಟ್", "ಅನುಸರಣೆ"],
          metadata: { "ಆವರ್ತನ": "ತ್ರೈಮಾಸಿಕ", "ಮಾನದಂಡ": "ISO 27001" },
          paragraphs: [
            "ನಮ್ಮ ಸುರಕ್ಷತೆ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ನಾವು ನಿಯಮಿತವಾಗಿ ಸ್ವತಂತ್ರ ಮೂರನೇ ವ್ಯಕ್ತಿಗಳ ಮೂಲಕ ಸಿಸ್ಟಮ್ ಆಡಿಟ್‌ಗಳನ್ನು ನಡೆಸುತ್ತೇವೆ.",
            "ಈ ಮೌಲ್ಯಮಾಪನಗಳು ಅಂತರರಾಷ್ಟ್ರೀಯ ಭದ್ರತಾ ಮಾನದಂಡಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ನಮ್ಮ ಎನ್‌ಕ್ರಿಪ್ಶನ್ ಪ್ರೋಟೋಕಾಲ್‌ಗಳು ಮತ್ತು ಡೇಟಾ ಪ್ರತ್ಯೇಕತೆಯ ವ್ಯವಸ್ಥೆಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಪರೀಕ್ಷಿಸುತ್ತವೆ.",
            "ಬಾಹ್ಯ ಪರಿಶೀಲನೆಗಳ ಮೂಲಕ ನಾವು ಬಳಕೆದಾರರಿಗೆ ತಾಂತ್ರಿಕ ಉತ್ಕೃಷ್ಟತೆ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆಯ ಸ್ಪಷ್ಟ ಭರವಸೆಯನ್ನು ಒದಗಿಸುತ್ತೇವೆ.",
          ],
        },
        {
          id: "policy-updates",
          title: "ನೀತಿ ನವೀಕರಣಗಳು ಮತ್ತು ಪ್ರಕಟಣೆ",
          tldr: "ಗೌಪ್ಯತಾ ನೀತಿಯಲ್ಲಿನ ಯಾವುದೇ ಬದಲಾವಣೆಗಳನ್ನು ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ನ ಒಳಗೆ ಮುಂಚಿತವಾಗಿ ತಿಳಿಸಲಾಗುತ್ತದೆ.",
          tags: ["ಪಾರದರ್ಶಕತೆ", "ಸ್ಥಿರತೆ"],
          metadata: { "ಮುನ್ಸೂಚನಾ ಅವಧಿ": "30 ದಿನಗಳು", "ರವಾನೆ": "ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿ" },
          paragraphs: [
            "ಸಂಬಂಧಿತ ಕಾನೂನುಗಳು ಮತ್ತು ನಿಯಂತ್ರಕ ಚೌಕಟ್ಟುಗಳು ವಿಕಸನಗೊಂಡಂತೆ ಈ ಗೌಪ್ಯತಾ ನೀತಿಯನ್ನು ಕಾಲಕಾಲಕ್ಕೆ ನವೀಕರಿಸಬಹುದು.",
            "ನಾವು ಸಂಪೂರ್ಣ ಪಾರದರ್ಶಕತೆಯಲ್ಲಿ ನಂಬಿಕೆ ಹೊಂದಿದ್ದೇವೆ. ಡೇಟಾ ನಿರ್ವಹಣೆಯ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವ ಯಾವುದೇ ಬದಲಾವಣೆಗಳಿದ್ದಲ್ಲಿ ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿ ಮುಂಚಿತವಾಗಿ ತಿಳಿಸಲಾಗುತ್ತದೆ.",
            "ಪರಿಷ್ಕೃತ ನೀತಿ ಪ್ರಕಟವಾದ ನಂತರ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ನ ನಿರಂತರ ಬಳಕೆಯು ಆ ಷರತ್ತುಗಳ ಅಂಗೀಕಾರವನ್ನು ಸೂಚಿಸುತ್ತದೆ.",
          ],
        },
      ],
    },
    terms: {
      title: "ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು",
      subtitle: "ಐಪಿ ಶಕ್ತಿ ಸಹಾಯಕ ಬಳಕೆಯ ಕಾನೂನು ನಿಯಮಗಳು",
      items: [
        {
          id: 1,
          title: "ಸೇವೆಯ ವ್ಯಾಪ್ತಿ",
          content:
            "ಐಪಿ ಶಕ್ತಿ ಸಹಾಯಕ ಒಂದು ಮಾಹಿತಿ ಮತ್ತು ನಿಯಂತ್ರಕ ವಿಶ್ಲೇಷಣಾ ವೇದಿಕೆಯಾಗಿದೆ. ಇದು ಔಪಚಾರಿಕ ಸರ್ಕಾರಿ ನಿರ್ಧಾರವಲ್ಲ ಬದಲಿಗೆ ಸಹಾಯಕ ವಿಶ್ಲೇಷಣಾತ್ಮಕ ಸಾಧನವಾಗಿದೆ.",
        },
        {
          id: 2,
          title: "ಕಾನೂನು ಸಲಹೆಯ ಪರ್ಯಾಯವಲ್ಲ",
          content:
            "ವೇದಿಕೆಯ ಶಿಫಾರಸುಗಳು ನಿಯಂತ್ರಕ ಮಾರ್ಗದರ್ಶನವಾಗಿದ್ದರೂ, ಇದು ಅರ್ಹ ವಕೀಲರ ಔಪಚಾರಿಕ ಕಾನೂನು ಸಲಹೆಗೆ ಪರ್ಯಾಯವಲ್ಲ.",
        },
        {
          id: 3,
          title: "ಬಳಕೆದಾರರ ಮಾಹಿತಿಯ ನಿಖರತೆ",
          content:
            "ನಿಖರವಾದ ಮೌಲ್ಯಮಾಪನವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಬಳಕೆದಾರರು ತಮ್ಮ ಸೂತ್ರೀಕರಣ ಮತ್ತು ಪದಾರ್ಥಗಳ ಸತ್ಯವಾದ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸಬೇಕು.",
        },
        {
          id: 4,
          title: "ಬೌದ್ಧಿಕ ಆಸ್ತಿ ಹಕ್ಕುಗಳು",
          content:
            "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ನ ಎಲ್ಲಾ ಸಾಫ್ಟ್‌ವೇರ್, ಕೋಡ್, ಇಂಟರ್ಫೇಸ್ ಮತ್ತು ಲೋಗೋಗಳು ಐಪಿ ಶಕ್ತಿ ಸಹಾಯಕದ ಬೌದ್ಧಿಕ ಆಸ್ತಿಯಾಗಿ ಸಂರಕ್ಷಿಸಲ್ಪಟ್ಟಿವೆ.",
        },
        {
          id: 5,
          title: "ಬಳಕೆದಾರರ ಡೇಟಾ ಗೌಪ್ಯತೆ",
          content:
            "ನಾವು ನಿಮ್ಮ ಸೂತ್ರೀಕರಣದ ಮಾಹಿತಿಯನ್ನು ಯಾವುದೇ ಮೂರನೇ ವ್ಯಕ್ತಿಗೆ ಮಾರಾಟ ಮಾಡುವುದಿಲ್ಲ ಮತ್ತು ಗೌಪ್ಯತಾ ನೀತಿಯನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಪಾಲಿಸುತ್ತೇವೆ.",
        },
        {
          id: 6,
          title: "ಸರ್ಕಾರಿ ನಿಯಮಾವಳಿಗಳಲ್ಲಿ ಬದಲಾವಣೆ",
          content:
            "ಕಾನೂನುಗಳು ಮತ್ತು ನಿಯಮಾವಳಿಗಳ ಬದಲಾವಣೆಯೊಂದಿಗೆ ವೇದಿಕೆಯ ಡೇಟಾಬೇಸ್ ಅನ್ನು ನವೀಕರಿಸಲಾಗುತ್ತದೆ; ಇತ್ತೀಚಿನ ತಿದ್ದುಪಡಿಗಳಿಗಾಗಿ ಅಧಿಕೃತ ಗೆಜೆಟ್ ಪರಿಶೀಲಿಸುವುದು ಸೂಕ್ತ.",
        },
        {
          id: 7,
          title: "ಹೊಣೆಗಾರಿಕೆಯ ಮಿತಿ",
          content:
            "ವೇದಿಕೆಯ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ ಕೈಗೊಂಡ ವಾಣಿಜ್ಯ ಅಥವಾ ಕಾನೂನು ನಿರ್ಧಾರಗಳಿಂದ ಉಂಟಾಗುವ ಯಾವುದೇ ನಷ್ಟಕ್ಕೆ ಆಡಳಿತ ಮಂಡಳಿ ಹೊಣೆಯಾಗಿರುವುದಿಲ್ಲ.",
        },
        {
          id: 8,
          title: "ಅನುಮತಿಸಲಾದ ಬಳಕೆ",
          content:
            "ಈ ವೇದಿಕೆಯನ್ನು ಕೇವಲ ಕಾನೂನುಬದ್ಧ ಸಂಶೋಧನೆ, ಪರವಾನಗಿ ಸಿದ್ಧತೆ ಮತ್ತು ನಿಯಂತ್ರಕ ಮೌಲ್ಯಮಾಪನಕ್ಕಾಗಿ ಮಾತ್ರ ಬಳಸಲು ಅನುಮತಿಸಲಾಗಿದೆ.",
        },
        {
          id: 9,
          title: "ನಿಷೇಧಿತ ಚಟುವಟಿಕೆಗಳು",
          content:
            "ಸಿಸ್ಟಮ್‌ಗೆ ಅಡ್ಡಿಪಡಿಸುವುದು, ರಿವರ್ಸ್ ಎಂಜಿನಿಯರಿಂಗ್ ಮಾಡುವುದು ಅಥವಾ ದುರುದ್ದೇಶಪೂರಿತ ಕೋಡ್ ಅನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡುವುದು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧಿಸಲಾಗಿದೆ.",
        },
        {
          id: 10,
          title: "ಖಾತೆ ಮತ್ತು ಪ್ರವೇಶ ಭದ್ರತೆ",
          content:
            "ಬಳಕೆದಾರರು ತಮ್ಮ ಲಾಗಿನ್ ವಿವರಗಳ ಗೌಪ್ಯತೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ಸ್ವತಃ ಜವಾಬ್ದಾರರಾಗಿರುತ್ತಾರೆ.",
        },
        {
          id: 11,
          title: "ಬಾಹ್ಯ ಪೋರ್ಟಲ್ ಲಿಂಕ್‌ಗಳು",
          content:
            "ಸರ್ಕಾರಿ ಅಥವಾ ಅಧಿಕೃತ ಸಂಸ್ಥೆಗಳ ಬಾಹ್ಯ ವೆಬ್‌ಸೈಟ್‌ಗಳ ವಿಷಯ ಮತ್ತು ಲಭ್ಯತೆಗೆ ಆಯಾ ಸಂಸ್ಥೆಗಳೇ ಜವಾಬ್ದಾರರಾಗಿರುತ್ತಾರೆ.",
        },
        {
          id: 12,
          title: "ಸೇವೆಯ ಮುಕ್ತಾಯ ಅಥವಾ ಅಮಾನತು",
          content:
            "ನಿಯಮಗಳನ್ನು ಉಲ್ಲಂಘಿಸುವ ಯಾವುದೇ ಖಾತೆಯನ್ನು ಮುನ್ಸೂಚನೆಯಿಲ್ಲದೆ ಅಮಾನತುಗೊಳಿಸುವ ಹಕ್ಕನ್ನು ನಾವು ಕಾಯ್ದಿರಿಸಿದ್ದೇವೆ.",
        },
        {
          id: 13,
          title: "ಪೇಟೆಂಟ್ ಫೈಲಿಂಗ್ ಮುನ್ನೆಚ್ಚರಿಕೆ",
          content:
            "ಪೇಟೆಂಟ್ ಅರ್ಜಿಯನ್ನು ಸಲ್ಲಿಸುವ ಮೊದಲು ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಞಾನ ಮತ್ತು ಸೆಕ್ಷನ್ 3(p) ನಿಯಮಾವಳಿಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಪರಿಶೀಲಿಸಿ.",
        },
        {
          id: 14,
          title: "ಕಾನೂನು ನ್ಯಾಯವ್ಯಾಪ್ತಿ",
          content:
            "ಈ ನಿಯಮಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಯಾವುದೇ ವಿವಾದಗಳು ಭಾರತದ ನ್ಯಾಯಾಲಯಗಳ ನ್ಯಾಯವ್ಯಾಪ್ತಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತವೆ.",
        },
        {
          id: 15,
          title: "ಷರತ್ತುಗಳ ತಿದ್ದುಪಡಿ",
          content:
            "ನಾವು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಈ ನಿಯಮಗಳನ್ನು ತಿದ್ದುಪಡಿ ಮಾಡಬಹುದು ಮತ್ತು ವೇದಿಕೆಯಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.",
        },
        {
          id: 16,
          title: "ಅಂತರರಾಷ್ಟ್ರೀಯ ಬಳಕೆದಾರರ ಮಾರ್ಗಸೂಚಿಗಳು",
          content:
            "ಭಾರತದ ಹೊರಗಿನ ಬಳಕೆದಾರರು ತಮ್ಮ ದೇಶಗಳ ಆಮದು ಮತ್ತು ಆರೋಗ್ಯ ನಿಯಮಗಳನ್ನು ಕಡ್ಡಾಯವಾಗಿ ಪಾಲಿಸಬೇಕು.",
        },
        {
          id: 17,
          title: "ಶುಲ್ಕ ಮತ್ತು ಪಾವತಿ ನೀತಿ",
          content:
            "ಯಾವುದೇ ಪ್ರೀಮಿಯಂ ಸೇವೆಗಳನ್ನು ಬಳಸಿದರೆ, ನಿಗದಿತ ಶುಲ್ಕ ನಿಯಮಾವಳಿಗಳು ಅನ್ವಯಿಸುತ್ತವೆ.",
        },
        {
          id: 18,
          title: "ಸಂಪರ್ಕ ಮತ್ತು ಕುಂದುಕೊರತೆ ನಿವಾರಣೆ",
          content:
            "ಯಾವುದೇ ಕಾನೂನು ಪ್ರಶ್ನೆಗಳು ಅಥವಾ ಕಾಳಜಿಗಳಿಗಾಗಿ ನಮ್ಮ ಬೆಂಬಲ ಡೆಸ್ಕ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.",
        },
      ],
    },
    team: {
      title: "ತಂಡ ಕೋಡ್‌ವೇದ",
      desc: "ಸಾಂಪ್ರದಾಯಿಕ ವೈದ್ಯಕೀಯ ಕ್ಷೇತ್ರದಲ್ಲಿ ತಾಂತ್ರಿಕ ಉತ್ಕೃಷ್ಟತೆಯನ್ನು ಸಾಧಿಸಲು ಸಮರ್ಪಿತವಾಗಿರುವ ನಮ್ಮ ಪ್ರತಿಭಾವಂತ ಎಂಜಿನಿಯರ್‌ಗಳು ಮತ್ತು ಸಂಶೋಧಕರ ತಂಡ.",
    },
    settings: {
      title: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
      subtitle: "ನಿಮ್ಮ ಅಪ್ಲಿಕೇಶನ್ ಆದ್ಯತೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
      themeTitle: "ನೋಟ ಮತ್ತು ಥೀಮ್",
      themes: {
        saffron: {
          name: "ಕೇಸರಿ (ಹಿಂದುತ್ವ)",
          desc: "ಒಂದು ರೋಮಾಂಚಕ ಮತ್ತು ಪವಿತ್ರ ಕೇಸರಿ ಬಳಕೆದಾರ ಇಂಟರ್ಫೇಸ್. ಲೌಕಿಕ ಗೊಂದಲಗಳಿಂದ ದೂರವಾಗಿ ಆಂತರಿಕ ಆಧ್ಯಾತ್ಮಿಕ ಶಾಂತಿಯನ್ನು ಅನುಭವಿಸಲು ಸಿದ್ಧವಾಗಿದೆ. ಜೈ ಶ್ರೀ ರಾಮ್.",
        },
        blue: {
          name: "ಪ್ರಗತಿ (ಭೀಮ್)",
          desc: "ರಾಷ್ಟ್ರೀಯ ಸಂವಿಧಾನದ ಮಹಾನ್ ಆದರ್ಶಗಳು ಮತ್ತು ತಾರ್ಕಿಕ ನ್ಯಾಯದ ಪ್ರತಿರೂಪ. ಪ್ರತಿಯೊಂದು ಪಿಕ್ಸೆಲ್ ಸಮಾನ ಹಕ್ಕನ್ನು ಪಡೆಯುವ ಥೀಮ್. ಜೈ ಭೀಮ್, ಜೈ ಭಾರತ್.",
        },
        green: {
          name: "ಸಮೃದ್ಧಿ (ಉಮ್ಮಾ)",
          desc: "ವಿಶ್ವವ್ಯಾಪಿ ಭ್ರಾತೃತ್ವ ಮತ್ತು ಐಕ್ಯತೆಯ ಶಾಂತಿಯುತ ಅನುಭವವನ್ನು ನೀಡುವ ಹಸಿರು ಥೀಮ್. ಅಲ್ಲಾಹು ಅಕ್ಬರ್.",
        },
        dark: {
          name: "ಅಂಧಕಾರ (ಡಾರ್ಕ್)",
          desc: "ವಿಶ್ವದ ಪ್ರಶಾಂತ ನೀರವತೆಯನ್ನು ಆಲಿಂಗಿಸಿ. ದೀರ್ಘಕಾಲೀನ ಅಧ್ಯಯನ ಮತ್ತು ಕೆಲಸದ ಸಮಯದಲ್ಲಿ ಕಣ್ಣುಗಳ ರಕ್ಷಣೆಗಾಗಿ ಅತ್ಯಂತ ಆರಾಮದಾಯಕ ಡಾರ್ಕ್ ಥೀಮ್.",
        },
      },
    },
  },
  sa: {
    dashboard: {
      badge: "गतिशील विश्लेषिकी ड्याशबोर्ड",
      title: "आयुष अनुपालन तथा जोखिम विश्लेषिकी",
      subtitle: "मूल्यांकनप्रस्तुतिभ्यः अद्यतनं कृतं सजीवं जोखिममापकम्।",
      runAssessment: "नूतनं मूल्यांकनं चालयन्तु",
      recentLogsTitle: "नूतनतमं मूल्यांकनं जोखिमलॉग्स्",
      recentLogsSubtitle: "मूल्यांकनप्रपत्रात् नूतनतमानि मूल्यांकनानि।",
      tableHeaders: {
        productName: "उत्पादस्य नाम",
        category: "वर्गः",
        riskScore: "जोखिम अङ्कः",
        status: "स्थितिः",
        audited: "परीक्षितम्"
      },
      totalAudited: "आहत्य उत्पादाः परीक्षिताः",
      highRisk: "उच्च जोखिम ध्वजाः",
      clearances: "नियामक अनुमतिः",
      avgScore: "औसत अनुपालन अङ्कः",
      liveEvaluation: "सजीवं मूल्यांकनम्"
    },
    common: {
      downloadPdf: "पीडीएफ-डाउनलोड् कुर्वन्तु",
      exporting: "निर्यातः क्रियते...",
      startNewAssessment: "नूतन-मूल्याङ्कनम् आरभ्यताम्",
      learnMore: "अधिकं ज्ञायताम्",
      tryAgain: "पुनः प्रयतताम्",
      accessDatabase: "दत्तांशकोशं प्रविशन्तु",
      accessFile: "सञ्चिकां प्राप्नुहि",
      loading: "लोड् क्रियते...",
    },
    search: {
      buttonLabel: "अन्वेषणं कुर्वन्तु...",
      placeholder: "विधीन्, मूल्याङ्कन-मॉड्यूल्, तज्ज्ञान्, पृष्ठानि अन्वेषयन्तु...",
      quickLinks: "प्रसिद्धाः विषयाः त्वरित-सम्पर्काश्च",
      noResultsTitle: "कोऽपि परिणामः न लब्धः",
      noResultsDesc: "भवतां पृच्छया सह सङ्गतं किमपि विवरणं वेद्यां न प्राप्‍तम्।",
      askAiCta: "एआई विधि-सहायकं पृच्छन्तु",
      allCategories: "सर्वे",
      pagesCategory: "पृष्ठानि साधनानि च",
      lawsCategory: "अधिनियमाः स्रोतांसि च",
      modulesCategory: "मूल्याङ्कन-मॉड्यूल्",
      expertsCategory: "तज्ज्ञाः पोर्टल् च",
      legalCategory: "विधिक-गोपनीयता च",
      navigateHint: "सञ्चारः",
      selectHint: "चयनम्",
      closeHint: "पिधानम्",
    },
    nav: {
      brandName: "आई.पी. शक्ति सहायकः",
      home: "गृहम्",
      assessment: "मूल्याङ्कनम्",
      legalCorpus: "विधि-कोशः",
      expertEscalation: "विशेषज्ञ-परामर्शः",
      aiAssistant: "एआई सहायकः",
      aboutUs: "अस्मद्विषये",
      privacyPolicy: "गोपनीयता-नीतिः",
      termsAndConditions: "नियमाः शर्ताश्च",
      teamCodeveda: "दल कोडवेद",
      selectLanguage: "भाषा",
      english: "English",
      hindi: "हिन्दी (Hindi)",
      marathi: "मराठी (Marathi)",
      tamil: "தமிழ் (Tamil)",
      telugu: "తెలుగు (Telugu)",
      bengali: "বাংলা (Bengali)",
      kannada: "ಕನ್ನಡ (Kannada)",
      sanskrit: "संस्कृतम् (Sanskrit)",
      gujarati: "ગુજરાતી (Gujarati)",
    },
    home: {
      heroBadge: "विधि-अनुपालनस्य भविष्याय स्वागतम्",
      heroTitlePrefix: "सरलीकुर्वन्तु स्वकीयं",
      heroTitleHighlight: "आयुर्वेदिक-अनुज्ञापत्रम्",
      heroSubtitle:
        "आई.पी. शक्ति सहायकः इति आयुष (AYUSH) क्षेत्रस्य जटिलानां नियामक-नियमानां कृते भवद्भ्यः स्पष्टं मार्गदर्शनं दातुं विशेषतया निर्मितः बुद्धिमान् विधि-सहायकः अस्ति।",
      startAssessment: "मूल्याङ्कनम् आरभ्यताम्",
      browseLegalCorpus: "विधि-प्रलेखान् पश्यन्तु",
      cards: {
        complianceFirst: {
          title: "अनुपालनाय प्राथमिकता",
          desc: "आयुष-मन्त्रालयाय आवेदयितुं पूर्वं सर्वेषां नियामक-नियमानां पूर्तिः अभवत् वा इति सुनिश्चितं कुर्वन्तु। अस्मत्-प्रणाली नूतन-नियमानुसारेण भवतां विवरणं स्वयमेव परीक्षते।",
        },
        regulatoryClarity: {
          title: "स्पष्टं नियामक-मार्गदर्शनम्",
          desc: "औषध-प्रसाधन-अधिनियमं जैवविविधता-अधिनियमं च सुगमतया अवगच्छन्तु।",
        },
        unifiedIntake: {
          title: "एकीकृता मूल्याङ्कन-प्रक्रिया",
          desc: "स्वसंस्थायाः स्वरूपम्, औषध-योगाः, आवश्यक-अनुज्ञापत्राणि च मूल्याङ्कयितुम् एका सरला प्रक्रिया।",
        },
        deepSearch: {
          title: "गहनः विधि-प्रलेख-शोधः",
          desc: "सहस्राणि आधिकारिकाणि आयुष-निदर्शनानि, मार्गदर्शिकाः, टीकेडीएल (TKDL) सन्दर्भान् च तत्क्षणमेव अन्वेषयन्तु।",
          cta: "अन्वेषण-यन्त्रम् उपयुज्यताम्",
        },
      },
    },
    assessment: {
      step: "सोपानम्",
      back: "पृष्ठतः",
      continue: "अग्रे सरतु",
      generateReport: "अनुपालन-प्रतिवेदनं रचयन्तु",
      selectAtLeastOne: "अग्रे गन्तुं न्यूनतया एकं विकल्पं चिनुत",
      analyzingTitle: "विवरणं विश्लेष्यते",
      analyzingDesc:
        "वैश्विक-नियामक-रूपरेखासु सादृश्य-शोधः क्रियते...",
      failedTitle: "मूल्याङ्कनं विफलम्",
      failedDesc: "भवतां निवेदनं प्रक्रमयन् दोषः सञ्जातः।",
      fieldHelper: {
        title: "आयुष-नियामक-प्रसङ्गः",
        desc: "प्रथम-अनुसूची-ग्रन्थाः भारतीय-फार्माकोपिया च आधारीकृत्य मार्गदर्शिकाः।",
      },
    },
    report: {
      riskLevels: {
        low: "न्यून-जोखिमः",
        moderate: "मध्यम-जोखिमः",
        high: "उच्च-जोखिमः",
      },
      aiComplete: "एआई मूल्याङ्कनं सम्पन्नम्",
      legalGroundingTitle: "विधिक-आधारः सन्दर्भाश्च",
      legalGroundingSubtitle:
        "आधिकारिक-नियामक-प्रलेखेभ्यः सङ्गृहीताः साक्षात् सन्दर्भाः",
      noCitations: "भवतां विवरणेन सह कोऽपि विशिष्टः सन्दर्भः न सङ्गतः।",
      actionPlanTitle: "कार्य-योजना",
      actionPlanSubtitle: "नियमानुपालनाय अनुशंसितानि आगामि-सोपानानि",
      noActions: "किञ्चिदपि विशिष्टं कार्यं नावश्यकम्।",
    },
    chat: {
      badge: "एआई विधि-परामर्शकः",
      title: "आई.पी. शक्ति सहायकः",
      subtitle: "आयुर्वेद-बौद्धिक-सम्पदा-नियमेषु साक्षात् प्रश्नोत्तराणि",
      header: "विधिक-परामर्श-मञ्जूषा",
      initialGreeting:
        "नमस्ते! अहम् भवतां एआई विधि-सहायकः अस्मि। आयुर्वेद-अनुज्ञापत्रेषु, ABS-अनुपालने अथवा TKDL-विषये किञ्चित् प्रष्टुम् इच्छन्ति चेत् पृच्छन्तु।",
      inputPlaceholder: "आयुर्वेद-विधि-सम्बद्धं प्रश्नं पृच्छन्तु...",
      thinking: "विचारयति...",
      errorMessage: "दोषः सञ्जातः। कृपया पुनः प्रयतताम्।",
    },
    corpus: {
      title: "विधिक-कोशः",
      subtitle:
        "आयुर्वेद-सम्बद्धाः अधिनियमाः, नियमाः, आधिकारिकाः सन्दर्भाश्च",
      officialSources: "आधिकारिक-स्रोतांसि",
      robustGroundedDatabase: "अस्माकं सुदृढं प्रमाणितं दत्तांशकोशम्",
      sources: [
        {
          acronym: "AYUSH",
          name: "आयुष-मन्त्रालयः",
          desc: "आयुर्वेद-योग-प्राकृतिक-चिकित्सा-यूनानी-सिद्ध-होम्योपैथी-केन्द्रीय-निकायः।",
        },
        {
          acronym: "CDSCO",
          name: "केन्द्रीयौषध-मानक-नियन्त्रण-सङ्गठनम्",
          desc: "औषध-परीक्षण-सुरक्षा-मानकानां राष्ट्रिय-नियामक-प्राधिकरणम्।",
        },
        {
          acronym: "NBA",
          name: "राष्ट्रिय-जैवविविधता-प्राधिकरणम्",
          desc: "जैविक-संसाधनानाम् उपयोगे ABS-अनुपालनस्य नियामक-निकायः।",
        },
        {
          acronym: "TKDL",
          name: "पारम्परिक-ज्ञान-अङ्कीय-पुस्तकालयः",
          desc: "भारतीय-पारम्परिक-चिकित्सा-ज्ञानस्य पेटेण्ट-रक्षकः कोशः।",
        },
        {
          acronym: "India Code",
          name: "भारताधिनियमाः नियमाश्च",
          desc: "केन्द्रीय-राज्य-अधिनियमानाम् आङ्कीय-सङ्ग्रहः।",
        },
        {
          acronym: "IP India",
          name: "आई.पी. इण्डिया सार्वभौम-दत्तांशकोशः",
          desc: "पेटेण्ट्, व्यापार-चिह्न, प्रारूप, जीआई पञ्जिका।",
        },
        {
          acronym: "Drive Database",
          name: "आन्तरिक-प्रलेख-कोशः",
          desc: "नियामक-प्रलेखानां विधिक-सञ्चिकानां च आन्तरिकः कोशः।",
        },
      ],
    },
    expert: {
      badge: "प्रत्यक्ष-सहायता-जालम्",
      title: "विशेषज्ञ-परामर्शः",
      subtitle:
        "एआई-मार्गदर्शनस्य प्रशासनिक-कार्याणां च मध्ये सेतुः। प्रमाणीकृतैः विधिक-अधिवक्तृभिः नियामक-पोर्टलैश्च सह सम्पर्कं कुर्वन्तु।",
      officialPortalsTitle: "आधिकारिक-नियामक-पोर्टल्",
      officialPortalsSubtitle: "सर्वकारीय-संस्थाः, संविधिक-निर्देशिकाः आवेदन-पोर्टल् च",
      verifiedSpecialistsTitle: "सत्यापिताः विधिक-आई.पी.-विशेषज्ञाः",
      verifiedSpecialistsSubtitle: "मान्यताप्राप्तैः नियामक-सल्लाहकारैः सह प्रत्यक्षः संवादः",
      domainsTitle: "कार्यक्षेत्राणि साहाय्य-जालाश्च",
      domainsSubtitle: "विषय-नैपुण्यानुसारं विशिष्ट-विधिक-सल्लाहकारैः सह सम्पर्कं कुर्वन्तु",
      bookConsultation: "परामर्शं पञ्जीकुर्वन्तु",
      callDirectly: "साक्षात् सम्पर्कं कुर्वन्तु",
      verifiedSpecialist: "सत्यापितः विशेषज्ञः",
      consultationNotice:
        "परामर्श-सूचना: विशेषज्ञ-साहाय्यं स्वायत्ततया पञ्जीकृत-विधिक-अधिवक्तृभिः पेटेण्ट-प्रतिनिधिभिः नियामक-सल्लाहकारैश्च सह समन्वितम् अस्ति।",
      portals: [
        {
          acronym: "CDSCO",
          name: "सुगम-पोर्टल्",
          desc: "आयुष तथा औषध-उत्पादनानुज्ञापत्राणां कृते केन्द्रीय-पोर्टल्।",
        },
        {
          acronym: "NBA",
          name: "ई-जैवविविधता-पोर्टल्",
          desc: "जैविक-संसाधनानाम् उपयोग-अनुज्ञापत्राय ABS-स्वीकृति-पोर्टल्।",
        },
        {
          acronym: "IP India",
          name: "आई.पी. इण्डिया पेटेण्ट्-पोर्टल्",
          desc: "पेटेण्ट्, ट्रेडमार्क, जीआई कृते आधिकारिकम् ई-फाइलिंग्-पोर्टल्।",
        },
        {
          acronym: "FSSAI",
          name: "फोस्कोस्-पोर्टल्",
          desc: "आयुर्वेद-आहार-उत्पादानां खाद्य-सुरक्षा-लाइसेंस-पोर्टल्।",
        },
      ],
      experts: [
        {
          name: "अधिवक्ता राजेश शर्मा",
          role: "वरिष्ठ-आई.पी.-अधिवक्ता",
          desc: "पारम्परिक-ज्ञान-संरक्षणे पेटेण्ट-सञ्चालने च १५ वर्षाणाम् अनुभवः।",
        },
        {
          name: "डा. मीनाक्षी अय्यर",
          role: "नियामक-सल्लाहकार",
          desc: "आयुष-मन्त्रालयस्य विनिर्देशेषु क्लिनिकल-डेटा-समीक्षायां च निपुणा।",
        },
        {
          name: "अधिवक्ता विक्रम देसाई",
          role: "जैवविविधता-विशेषज्ञः",
          desc: "NBA-अनुमोदने ABS-अनुपालने च सम्पूर्ण-मार्गदर्शनम्।",
        },
      ],
      categories: [
        {
          title: "आयुर्वेद-पेटेण्ट् तथा TKDL",
          badge: "आई.पी. संरक्षणम्",
          location: "नवी देहली",
          desc: "आयुर्वेदिक-योगानां पेटेण्ट-आवेदनं तथा TKDL-प्रतिबन्धानां समाधानम्।",
          tags: ["पेटेण्ट्", "TKDL", "धारा 3(p)"],
        },
        {
          title: "जैवविविधता तथा ABS अनुपालनम्",
          badge: "पर्यावरण-विधिः",
          location: "चेन्नै / बेङ्गळूरु",
          desc: "राज्य-जैवविविधता-मण्डलैः राष्ट्रिय-प्राधिकरणेन च सह परामर्शः।",
          tags: ["NBA", "ABS", "धारा 7"],
        },
        {
          title: "आयुष-अनुज्ञापत्राणि तथा GMP",
          badge: "नियामक-स्वीकृतिः",
          location: "मुम्बई",
          desc: "फॉर्म 25D अनुज्ञापत्रं, अनुसूची-T जीएमपी तथा परीक्षण-अनुमोदनम्।",
          tags: ["फॉर्म 25D", "अनुसूची T", "GMP"],
        },
        {
          title: "आयुर्वेद-आहार तथा FSSAI",
          badge: "खाद्य-अनुपालनम्",
          location: "हैदराबाद्",
          desc: "आयुर्वेद-आहार-उत्पादानां लेबलिङ्गं खाद्य-सुरक्षा-लाइसेंस-सञ्चालनम्।",
          tags: ["FSSAI", "आयुर्वेद आहार", "लेबलिङ्ग"],
        },
      ],
    },
    about: {
      title: "अस्मद्विषये",
      subtitle:
        "आई.पी. शक्ति सहायकस्य निर्माण-गाथा, दृष्टिकोणः, कार्यपद्धतिश्च",
      storyTitle: "अस्माकं गाथा",
      storySubtitle:
        "पारम्परिक-ज्ञानस्य आधुनिक-विधिक-सुरक्षायाश्च सङ्गमः",
      storyParagraphs: [
        "आई.पी. शक्ति सहायकः इति आयुर्वेद-संशोधकानां, चिकित्सकानां, उद्यमिनां च कृते जटिलानां विधिक-नियमानां सुलभीकरणाय उद्भूतः प्रयासः अस्ति।",
        "भारतस्य सहस्रवर्षीयं पारम्परिक-ज्ञानं विश्व-मञ्चे सुरक्षया सह व्यावसायिक-साफल्यं प्राप्नुयात् इति अस्माकं ध्येयम्।",
      ],
      whyBuiltTitle: "किमर्थं निर्मितः आई.पी. शक्ति सहायकः?",
      whyBuiltIntro:
        "आयुर्वेद-उद्यमिनः प्रतिदिनम् एतान् प्रश्नान् सम्मुखीकुर्वन्ति:",
      whyBuiltQuestions: [
        "अयं योगः पेटेण्ट-योग्यः अस्ति वा पारम्परिक-ज्ञानेन प्रतिषिद्धः?",
        "जैवविविधता-अधिनियमानुसारेण NBA-तः पूर्व-स्वीकृतिः आवश्यकी वा?",
        "अनुसूची-T जीएमपी-अनुपालनं कथं सुगमं कर्तुं शक्यते?",
        "आयुर्वेद-आहार-उत्पादस्य लेबलिङ्ग-नियमाः कीदृशाः सन्ति?",
      ],
      whyBuiltConclusion:
        "एतेषां प्रश्नानां प्रामाणिकम्, आधिकारिक-स्रोतोधारितं समाधानं दातुम् अयं बुद्धिमान् सहायकः निर्मितः।",
      visionTitle: "अस्माकं दृष्टिकोणः",
      visionSubtitle:
        "यत्र प्रत्येकम् आयुर्वेद-उद्भावकः आत्मविश्वासेन स्वज्ञानं संरक्षेत्।",
      visionParagraphs: [
        "विधिक-नियामक-ज्ञानं केवलं धनिकानां परामर्श-संस्थानां च एकाधिकारः न भवेत्।",
        "वैद्यः, शोधकर्ता, कृषकः, स्टार्टअप-संस्थापकः वा सर्वेऽपि स्वकार्यस्य विधिक-सुरक्षां बोद्धुं समर्थाः स्युः।",
      ],
      missionTitle: "अस्माकं ध्येयम्",
      missionSubtitle:
        "जटिलानां विधिक-नियमानां स्पष्टे सुलभ-मार्गदर्शने परिवर्तनम्।",
      missionIntro:
        "एआई, RAG तन्त्रज्ञानं, बहुभाषी-प्रणालीं च उपयुज्य आयुर्वेद-समुदायस्य साहाय्यं करणम्।",
      pillars: [
        {
          title: "अवगमनम्",
          desc: "स्वोत्पादस्य योगस्य च विधिक-स्थितिम् अवगन्तुं साहाय्यम्।",
        },
        {
          title: "मार्गदर्शनम्",
          desc: "उचित-बौद्धिक-सम्पदा-नियामक-क्षेत्रस्य परिज्ञानम्।",
        },
        {
          title: "प्रमाणीकरणम्",
          desc: "आधिकारिक-स्रोतानां सन्दर्भैः सह प्रामाणिक-उत्तराणि प्रदानम्।",
        },
        {
          title: "सशक्तीकरणम्",
          desc: "उपयोक्तॄणां निर्णय-सामर्थ्यस्य वर्धनम्।",
        },
      ],
      differentiatorsTitle: "कथं विशिष्टः अस्ति आई.पी. शक्ति सहायकः?",
      differentiators: [
        {
          title: "उत्तरात् पूर्वम् अन्वेषणम् (RAG)",
          content:
            "केवलं पूर्वनुमानस्य स्थाने आधिकारेभ्यः प्रलेखेभ्यः तत्त्वानि अन्विष्य एव उत्तराणि दीयन्ते।",
        },
        {
          title: "आयुर्वेदाय विशेषतया निर्मितः",
          content:
            "सामान्य-विधिक-सहायकात् भिन्नम्, आयुर्वेद-पारम्परिक-ज्ञान-जैवविविधता-क्षेत्रेषु केन्द्रितम्।",
        },
        {
          title: "बहुभाषी-पारदर्शिता",
          content:
            "भारतस्य प्रमुख-भाषासु प्रामाणिक-विधिक-शब्दकोशेन सह मार्गदर्शनम्।",
        },
      ],
      howItWorksTitle: "कथं कार्यं करोति?",
      howItWorksSubtitle: "त्रिषु सरलेषु सोपानेषु सम्पूर्णं विधिक-मार्गदर्शनम्",
      steps: [
        {
          title: "प्रश्नावलिं पूरयन्तु",
          desc: "स्वोत्पादस्य घटकान्, विनिर्माण-पद्धतिं, लक्ष्य-विपणीं च चिनुत।",
        },
        {
          title: "एआई विश्लेषणम्",
          desc: "यन्त्रं सहस्राधिकान् अधिनियमान् विश्लेष्य जोखिम-स्तरं निर्धारयति।",
        },
        {
          title: "कार्य-योजना प्राप्नुवन्तु",
          desc: "प्रामाणिक-सन्दर्भैः सह आगामि-कार्याणां स्पष्टां सूचीं प्राप्नुवन्तु।",
        },
      ],
    },
    privacy: {
      title: "गोपनीयता-नीतिः",
      subtitle:
        "भवतां दत्तांशस्य विधिक-विचाराणां च कठोर-सुरक्षा-सङ्कल्पः",
      tldrLabel: "संक्षेपः",
      sections: [
        {
          id: "introduction",
          title: "परिचयः तथा सेवा-अवलोकनम्",
          tldr: "आई.पी. शक्ति सहायकः गोपनीयतया शैक्षणिक-विधिक-मार्गदर्शनं प्रदातुं निर्मितः अस्ति।",
          tags: ["अवलोकनम्", "सङ्कल्पः"],
          metadata: { "प्रभावी दिनाङ्कः": "सितम्बर २०२६", "सुरक्षा-स्तरः": "उच्चः" },
          paragraphs: [
            "आई.पी. शक्ति सहायके स्वागतम्। अयं बुद्धिमान् एआई सहायकः आयुर्वेद, बौद्धिक-सम्पदा-अधिकार (IPR), तथा नियामक-नियमेषु मार्गदर्शनं प्रददाति।",
            "वयं भवतां पृच्छाः केवलं प्रामाणिकानि स्रोतोधारितानि उत्तराणि दातुं प्रक्रमयामः। भवतां संवादः पूर्णतया सुरक्षित-सत्रे पृथक्कृतः भवति कस्यापि तृतीय-पक्षाय न विक्रीयते।",
          ],
        },
        {
          id: "data-privacy",
          title: "दत्तांशः गोपनीयता च",
          tldr: "संवेदनशील-बौद्धिक-सम्पदः रक्षणाय प्रत्येकं सत्रं पूर्णतया पृथक्कृतम् अस्ति।",
          tags: ["पृथक्करणम्", "गोपनीयता"],
          metadata: { "समीक्षा": "परीक्षितम्", "रूपरेखा": "Zero-Trust" },
          paragraphs: [
            "आई.पी. शक्ति सहायकः गोपनीयता-प्रथम-सिद्धान्तेन निर्मितः अस्ति येन उपयोक्तृणां सूचनाः उत्तरदायित्वेन संरक्ष्यन्ते।",
            "अस्मत्-प्रणाली प्रत्येकं संवादं पृथक् करोति येन भिन्न-उपयोक्तृणां मध्ये दत्तांश-मिश्रणं न भवेत्।",
            "अस्माकं सुरक्षा-दलं नियमेन प्रणालीं परीक्षते येन आधुनिक-सुरक्षा-मानकाः पालिताः स्युः।",
          ],
        },
        {
          id: "data-minimization",
          title: "न्यूनतम-दत्तांश-सङ्ग्रहः",
          tldr: "वयं केवलं विधिक-प्रश्नानां समाधानाय अत्यावश्यकं दत्तांशमेव सङ्गृह्णीमः।",
          tags: ["न्यूनतम-दत्तांशः", "सुरक्षा"],
          metadata: { "दत्तांश-सीमा": "कठोरा", "शुद्धिकरणम्": "स्वचालितम्" },
          paragraphs: [
            "अस्मत्-प्रणाली केवलं ताम् एव सूचनां स्वीकरोति या आयुर्वेद-विधिक-मार्गदर्शनाय आवश्यकी अस्ति। अनावश्यक-व्यक्तिगत-सूचना नावश्यकी।",
            "संवाद-काले यदि काचित् अनपेक्षिता सूचना सङ्गृहीता भवति तर्हि सा स्वचालित-प्रक्रियया निष्कास्यते।",
          ],
        },
        {
          id: "user-data-protection",
          title: "उपयोक्तृ-दत्तांश-रक्षणम्",
          tldr: "सर्वे दत्तांशाः दृढ-एन्क्रिप्शन-माध्यमेन रक्ष्यन्ते।",
          tags: ["एन्क्रिप्शन", "सक्रिय-निरीक्षणम्"],
          metadata: { "एन्क्रिप्शन": "AES-256", "निरीक्षणम्": "24/7 सक्रियम्" },
          paragraphs: [
            "व्यक्तिगत-सूचनाः अनधिकृत-प्रवेशात् रक्षितुं योग्याः सुरक्षा-उपायः अङ्गीकृताः सन्ति। दत्तांश-सञ्चार-काले सङ्ग्रह-काले च आधुनिक-गूढलिपीकरणम् उपयुज्यते।",
            "अस्माकं व्यवस्थायां विस्तृत-प्रवेश-लेखाः सन्ति ये अनधिकृत-प्रवेश-प्रयत्नान् तत्क्षणमेव प्रतिरुन्धन्ति।",
          ],
        },
        {
          id: "confidential-information",
          title: "गोपनीय-सूचना-संरक्षणम्",
          tldr: "अप्रकाशितानि व्यापार-रहस्यानि प्रणाल्यां न प्रविष्टव्यानि इति उपयोक्तृभ्यः निवेद्यते।",
          tags: ["व्यापार-रहस्यम्", "सावधानी"],
          metadata: { "जोखिम-स्तरः": "उच्चः", "मार्गदर्शनम्": "सामान्यान् प्रश्नान् पृच्छन्तु" },
          paragraphs: [
            "अप्रकाशितानि आविष्काराणि, व्यापार-रहस्यानि च वेद्यां प्रवेष्टुं नावश्यकम्।",
            "संवेदनशील-योगानां विषये सामान्य-नियामक-नियमान् आधारीकृत्य एव प्रश्नान् पृच्छन्तु येन स्वकीय-अधिकारः सुरक्षितः तिष्ठेत्।",
          ],
        },
        {
          id: "secure-transmission",
          title: "सुरक्षित-दत्तांश-सञ्चारः",
          tldr: "सर्वे संवादाः HTTPS तथा TLS 1.3 द्वारा सुरक्षिताः सन्ति।",
          tags: ["HTTPS", "TLS 1.3"],
          metadata: { "प्रोटोकॉल्": "कठोर TLS", "प्रमाणपत्रम्": "स्वचालित-नवीकरणम्" },
          paragraphs: [
            "उपयोक्तुः वेद्याश्च मध्ये सर्वे संवादाः सुरक्षित-प्रोटोकॉल् उपयुञ्जते येन सुरक्षित-सुरङ्गः निर्मीयते।",
            "वयं केवलं सुरक्षितान् सम्पर्कान् स्वीकुर्वन्तः असन्तोषकरान् प्रयत्नान् निरस्यामः।",
          ],
        },
        {
          id: "user-control",
          title: "उपयोक्तुः नियन्त्रणं सम्मतिश्च",
          tldr: "अतिरिक्त-दत्तांश-संस्करणात् पूर्वम् उपयोक्तुः स्पष्टा सम्मतिः आवश्यकी, या कदापि परावर्त्येत।",
          tags: ["सम्मतिः", "नियन्त्रणम्"],
          metadata: { "मूल-स्थितिः": "Opt-Out", "परावर्तनम्": "तत्क्षणम्" },
          paragraphs: [
            "उपयोक्तारः स्वकीय-सूचनासु पूर्णं नियन्त्रणं धारयन्ति। प्राथमिक-सेवायाः बहिः संस्करणात् पूर्वं स्पष्टा सम्मतिः गृह्यते।",
            "सम्मतेः परावर्तनं सुलभं पारदर्शकं च अस्ति। उपयोक्तारः यस्मिन् कस्मिन् अपि क्षणे स्वकीय-विकल्पान् परिवर्तयितुं शक्नुवन्ति।",
          ],
        },
        {
          id: "access-deletion",
          title: "दत्तांश-प्रवेशः विलोपनं च",
          tldr: "उपयोक्तारः स्वकीयम् इतिहासम् अवलोकयितुं, निर्यातुं, निष्कासयितुं वा पूर्णतया स्वतन्त्राः सन्ति।",
          tags: ["विलोपनम्", "निर्यातः"],
          metadata: { "प्रक्रिया-समयः": "तत्क्षणम्", "विलोपनम्": "स्थायि" },
          paragraphs: [
            "वेदी उपयोक्तृभ्यः स्वकीय-सूचनाः समीकर्तुं वा पूर्णतया निष्कासयितुं सुविधाम् अयच्छति।",
            "यदि भवन्तः वेद्याः उपयोगं स्थगयितुम् इच्छन्ति तर्हि एक-निवेदनेन स्वकीयं विवरणं स्थायीरूपेण निष्कासयितुं शक्नुवन्ति।",
          ],
        },
        {
          id: "third-party-audits",
          title: "तृतीय-पक्ष-लेखापरीक्षा अनुपालनं च",
          tldr: "नियामक-अनुपालनं सुरक्षां च सुनिश्चितीकर्तुं नियताः स्वतन्त्राः परीक्षाः क्रियन्ते।",
          tags: ["लेखापरीक्षा", "अनुपालनम्"],
          metadata: { "आवर्तनम्": "त्रैमासिकम्", "मानकः": "ISO 27001" },
          paragraphs: [
            "अस्माकं सुरक्षां विश्वसनीयतां च सुनिश्चितीकर्तुं वयं नियमेन स्वतन्त्र-तृतीय-पक्षैः प्रणाली-परीक्षां कारयामः।",
            "एताः परीक्षाः अन्तर्राष्ट्रिय-सुरक्षा-मानकानुसारेण अस्मत्-सुरक्षा-व्यवस्थां सम्यक् परीक्षन्ते।",
          ],
        },
        {
          id: "policy-updates",
          title: "नीति-अद्यतनीकरणं सूचनाश्च",
          tldr: "गोपनीयता-नीतौ परिवर्तनानि वेद्याम् एव पूर्वं सूच्यन्ते।",
          tags: ["पारदर्शिता", "स्थिरता"],
          metadata: { "सूचना-अवधिः": "३० दिनानि", "वितरणम्": "अनुप्रयोगे" },
          paragraphs: [
            "सम्बद्ध-विधिषु नियामक-रूपरेखासु च परिवर्तनानुसारम् इयं नीतिः कालेन अद्यतनीक्रियते।",
            "वयं पूर्ण-पारदर्शितायां विश्वसिमः। दत्तांश-प्रबन्धन-सम्बद्धानां परिवर्तनानां सूचना अनुप्रयोगे पूर्वमेव दीयते।",
          ],
        },
      ],
    },
    terms: {
      title: "नियमाः शर्ताश्च",
      subtitle:
        "आई.पी. शक्ति सहायकस्य उपयोगाय कानूनी-शर्ताः नियम-सङ्ग्रहश्च",
      items: [
        {
          id: 1,
          title: "स्वीकृतिः उद्देश्यं च",
          content:
            "आई.पी. शक्ति सहायकस्य उपयोगेन भवन्तः एतान् नियमान् अङ्गीकुर्वन्ति। इयं वेदी केवलं सूचना-मार्गदर्शनार्थं च उद्दिष्टा अस्ति।",
        },
        {
          id: 2,
          title: "औपचारिक-विधिक-सल्लाहस्य प्रतिषेधः",
          content:
            "वेद्याः अनुशंसनानि नियामक-मार्गदर्शनं भवन्ति, किन्तु एतत् योग्य-अधिवक्तुः विधिक-परामर्शस्य स्थानं न गृह्णाति।",
        },
        {
          id: 3,
          title: "उपयोक्तृ-विवरणस्य यथार्थता",
          content:
            "सटीक-मूल्याङ्कनाय उपयोक्तारः स्वकीय-योगस्य घटकानां च सत्यं प्रामाणिकं च विवरणं दद्युः।",
        },
        {
          id: 4,
          title: "बौद्धिक-सम्पदा-अधिकारः",
          content:
            "वेद्याः सर्वे कोडाः, तन्त्राणि, चित्राणि, चिह्नानि च आई.पी. शक्ति सहायकस्य बौद्धिक-सम्पत्त्वेन संरक्षितानि सन्ति।",
        },
        {
          id: 5,
          title: "उपयोक्तृ-दत्तांश-गोपनीयता",
          content:
            "वयं भवतां योग-विवरणं कस्मैचिदपि तृतीय-पक्षाय न विक्रिणीमः गोपनीयता-नीतेः दृढं पालनं कुर्मः।",
        },
        {
          id: 6,
          title: "सर्वकारीय-नियमेषु परिवर्तनम्",
          content:
            "विधिषु नियमेषु च परिवर्तनेन सह दत्तांशकोशः अद्यतनीक्रियते; नूतन-संशोधनाय आधिकारिकं राजपत्त्रं द्रष्टव्यम्।",
        },
        {
          id: 7,
          title: "दायित्वस्य मर्यादा",
          content:
            "वेद्याः सूचनाम् आधारीकृत्य कृतेभ्यः वाणिज्यिक-विधिक-निर्णयेभ्यः सम्भूताय कस्मैचिदपि हानये सञ्चालक-मण्डलं दायित्वं न स्वीकरोति।",
        },
        {
          id: 8,
          title: "अनुमतः उपयोगः",
          content:
            "इयं वेदी केवलं वैध-अनुसन्धानाय, अनुज्ञापत्र-सज्जतायै, नियामक-मूल्याङ्कनाय च प्रयोक्तुम् अनुमता अस्ति।",
        },
        {
          id: 9,
          title: "प्रतिषिद्धानि कार्याणि",
          content:
            "प्रणाल्यां बाधा-उत्पादनम्, विपरीत-अभियान्त्रिकीकरणम् (Reverse Engineering) दुर्भावनापूर्ण-कोड-प्रवेशनं वा कठोरतया निषिद्धम्।",
        },
        {
          id: 10,
          title: "तृतीय-पक्ष-सम्पर्काः",
          content:
            "वेद्यां बाह्य-सर्वकारीय-पोर्टल्-सम्पर्काः सन्ति, तेषां बाह्य-सामग्रीणां कृते अयं सहायकः उत्तरदायी न भवति।",
        },
        {
          id: 11,
          title: "खाता-सुरक्षा",
          content:
            "उपयोक्तारः स्वकीय-खाता-विवरणस्य प्रवेश-संकेतस्य (Password) च सुरक्षायै स्वयम् एव उत्तरदायिनः सन्ति।",
        },
        {
          id: 12,
          title: "सेवा-उपलब्धता",
          content:
            "वयं निरन्तर-सेवायै प्रयतते, किन्तु तान्त्रिक-रक्षणाय सेवा कदाचित् तात्कालिकतया स्थगिता भवितुम् अर्हति।",
        },
        {
          id: 13,
          title: "सेवा-समाप्तिः",
          content:
            "नियमानाम् उल्लङ्घने सञ्चालकाः पूर्वसूचनां विना उपयोक्तुः प्रवेश-अधिकारं स्थगयितुं शक्नुवन्ति।",
        },
        {
          id: 14,
          title: "न्यायाधिकार-क्षेत्रम्",
          content:
            "एभिः नियमैः सम्बद्धाः सर्वे विवादाः भारतस्य न्यायाधीनानां न्यायालयानां क्षेत्राधिकार-अन्तर्गताः भविष्यन्ति।",
        },
        {
          id: 15,
          title: "शर्तानां संशोधनम्",
          content:
            "वयं कस्मिन्नपि समये एतान् नियमान् संशोध्य वेद्यां प्रकाशयितुं समर्थाः स्मः।",
        },
        {
          id: 16,
          title: "अन्ताराष्ट्रिय-उपयोक्तृ-मार्गदर्शिकाः",
          content:
            "भारतस्य बहिष्ठाः उपयोक्तारः स्वदेशस्य आयात-स्वास्थ्य-नियमान् अनिवार्यतया पालयन्तु।",
        },
        {
          id: 17,
          title: "शुल्क-भुगतान-नीतिः",
          content:
            "यदा काचित् प्रिमियम्-सेवा उपयुज्यते, तदा निर्धारिताः शुल्क-नियमाः प्रवर्तन्ते।",
        },
        {
          id: 18,
          title: "सम्पर्कः शिकायत-निवारणं च",
          content:
            "कस्मैचिदपि विधिक-प्रश्नाय वा संशयाय अस्माकं सहायता-डेस्कं सम्पर्कं कुर्वन्तु।",
        },
      ],
    },
    team: {
      title: "दल कोडवेद",
      desc: "पारम्परिक-चिकित्सा-क्षेत्रे तान्त्रिक-उत्कृष्टतां साधयितुं समर्पितः अस्माकं प्रतिभावतां सङ्गणक-अभियन्तॄणां शोधकानां च दलः।",
    },
    settings: {
      title: "विन्यासाः",
      subtitle: "स्वकीयान् अनुप्रयोग-विकल्पान् प्रबन्धयन्तु",
      themeTitle: "दृष्टिः विषयवस्तु (थीम्) च",
      themes: {
        saffron: {
          name: "केसरम् (हिन्दुत्वम्)",
          desc: "एकम् अत्यन्तं दीप्तं पावनं च केसरी-उपयोक्तृ-फलकम्। ऐहिक-व्यामोहात् विरक्तौ आध्यात्मिके च मनसः शान्तौ सहायकम्। जय श्री राम।",
        },
        blue: {
          name: "प्रगतिः (भीम्)",
          desc: "राष्ट्रिय-संविधान-निर्माणावश्यक-गम्भीर-तार्किक-बुद्धेः प्रतीकः। यत्र प्रत्येकं पिक्सेल्-अंशः समान-न्यायं लभते। जय भीम, जय भारत।",
        },
        green: {
          name: "समृद्धिः (उम्मा)",
          desc: "विश्व-बन्धुत्वस्य वैश्विक-एकतायाश्च शान्तम् अनुभवं प्रददाति। अल्लाहू अकबर।",
        },
        dark: {
          name: "अन्धकारः (डार्क)",
          desc: "विश्वस्य शान्तां नीरवतां स्वीकुर्वन्तु। दीर्घकालीन-कार्ये नेत्राणां सुरक्षायै अत्यन्तम् आरामप्रदम्।",
        },
      },
    },
  },
  gu: {
    dashboard: {
      badge: "ડાયનેમિક એનાલિટિક્સ ડેશબોર્ડ",
      title: "આયુષ પાલન અને જોખમ વિશ્લેષણ",
      subtitle: "આકારણી સબમિશનમાંથી અપડેટ થયેલ લાઇવ જોખમ મેટ્રિક્સ.",
      runAssessment: "નવી આકારણી ચલાવો",
      recentLogsTitle: "તાજેતરના આકારણી જોખમ લોગ",
      recentLogsSubtitle: "આકારણી ફોર્મમાંથી નવીનતમ મૂલ્યાંકન.",
      tableHeaders: {
        productName: "ઉત્પાદનનું નામ",
        category: "શ્રેણી",
        riskScore: "જોખમ સ્કોર",
        status: "સ્થિતિ",
        audited: "ઓડિટ થયેલ"
      },
      totalAudited: "કુલ ઉત્પાદનો ઓડિટ થયા",
      highRisk: "ઉચ્ચ જોખમ ફ્લેગ્સ",
      clearances: "નિયમનકારી મંજૂરીઓ",
      avgScore: "સરેરાશ પાલન સ્કોર",
      liveEvaluation: "લાઇવ મૂલ્યાંકન"
    },
    common: {
      downloadPdf: "પીડીએફ ડાઉનલોડ કરો",
      exporting: "નિકાસ કરી રહ્યું છે...",
      startNewAssessment: "નવું મૂલ્યાંકન શરૂ કરો",
      learnMore: "વધુ જાણો",
      tryAgain: "ફરી પ્રયાસ કરો",
      accessDatabase: "ડેટાબેઝ ઍક્સેસ કરો",
      accessFile: "ફાઇલ ઍક્સેસ કરો",
      loading: "લોડ થઈ રહ્યું છે...",
    },
    search: {
      buttonLabel: "શોધો...",
      placeholder: "કાયદા, મૂલ્યાંકન મોડ્યુલ્સ, નિષ્ણાતો, પૃષ્ઠો શોધો...",
      quickLinks: "લોકપ્રિય વિષયો અને ઝડપી લિંક્સ",
      noResultsTitle: "કોઈ મેળ ખાતા પરિણામ મળ્યા નથી",
      noResultsDesc: "તમારી શોધ સાથે મેળ ખાતી કોઈ માહિતી વેબસાઇટ પર મળી નથી.",
      askAiCta: "એઆઈ કાનૂની સહાયકને પૂછો",
      allCategories: "બધા",
      pagesCategory: "પૃષ્ઠો અને સાધનો",
      lawsCategory: "કાયદાઓ અને સ્ત્રોતો",
      modulesCategory: "મૂલ્યાંકન મોડ્યુલ્સ",
      expertsCategory: "નિષ્ણાતો અને પોર્ટલ",
      legalCategory: "કાનૂની અને ગોપનીયતા",
      navigateHint: "નેવિગેટ",
      selectHint: "પસંદ કરો",
      closeHint: "બંધ કરો",
    },
    nav: {
      brandName: "આઈપી શક્તિ સહાયક",
      home: "મુખ્ય પૃષ્ઠ",
      assessment: "મૂલ્યાંકન",
      legalCorpus: "કાનૂની સંગ્રહ",
      expertEscalation: "નિષ્ણાત પરામર્શ",
      aiAssistant: "એઆઈ સહાયક",
      aboutUs: "અમારા વિશે",
      privacyPolicy: "ગોપનીયતા નીતિ",
      termsAndConditions: "નિયમો અને શરતો",
      teamCodeveda: "ટીમ કોડવેદ",
      selectLanguage: "ભાષા",
      english: "English",
      hindi: "हिन्दी (Hindi)",
      marathi: "मराठी (Marathi)",
      tamil: "தமிழ் (Tamil)",
      telugu: "తెలుగు (Telugu)",
      bengali: "বাংলা (Bengali)",
      kannada: "ಕನ್ನಡ (Kannada)",
      sanskrit: "संस्कृतम् (Sanskrit)",
      gujarati: "ગુજરાતી (Gujarati)",
    },
    home: {
      heroBadge: "કાનૂની અનુપાલનના ભવિષ્યમાં સ્વાગત છે",
      heroTitlePrefix: "સરળ બનાવો તમારું",
      heroTitleHighlight: "આયુર્વેદિક લાઇસન્સિંગ",
      heroSubtitle:
        "આઈપી શક્તિ સહાયક એ આયુષ (AYUSH) ક્ષેત્રના જટિલ નિયમનકારી કાયદાઓ માટે તમને સ્પષ્ટ માર્ગદર્શન આપવા માટે વિશેષ રૂપે તૈયાર કરાયેલ બુદ્ધિશાળી કાનૂની સહાયક છે.",
      startAssessment: "મૂલ્યાંકન શરૂ કરો",
      browseLegalCorpus: "કાનૂની દસ્તાવેજો જુઓ",
      cards: {
        complianceFirst: {
          title: "અનુપાલનને પ્રાથમિકતા",
          desc: "આયુષ મંત્રાલયમાં અરજી કરતા પહેલા તમામ નિયમનકારી જરૂરિયાતો પૂર્ણ થઈ છે તેની ખાતરી કરો. અમારી સિસ્ટમ નવીનતમ નિયમો અનુસાર તમારા દસ્તાવેજોની આપમેળે ચકાસણી કરે છે.",
        },
        regulatoryClarity: {
          title: "સ્પષ્ટ નિયમનકારી માર્ગદર્શન",
          desc: "ડ્રગ્સ એન્ડ કોસ્મેટિક્સ એક્ટ અને જૈવ વિવિધતા અધિનિયમને સરળતાથી સમજો.",
        },
        unifiedIntake: {
          title: "સંકલિત મૂલ્યાંકન પ્રક્રિયા",
          desc: "તમારી સંસ્થાનું સ્વરૂપ, ઔષધીય ઘટકો અને જરૂરી લાઇસન્સનું મૂલ્યાંકન કરવા માટે એક સરળ પ્રક્રિયા.",
        },
        deepSearch: {
          title: "ઊંડાણપૂર્વક કાનૂની દસ્તાવેજ શોધ",
          desc: "હજારો સત્તાવાર આયુષ માર્ગદર્શિકાઓ, નોટિફિકેશન્સ અને TKDL સંદર્ભો તાત્કાલિક શોધો.",
          cta: "સર્ચ એન્જિનનો ઉપયોગ કરો",
        },
      },
    },
    assessment: {
      step: "પગલું",
      back: "પાછળ",
      continue: "આગળ વધો",
      generateReport: "અનુપાલન અહેવાલ બનાવો",
      selectAtLeastOne: "આગળ વધવા માટે ઓછામાં ઓછો એક વિકલ્પ પસંદ કરો",
      analyzingTitle: "વિગતોનું વિશ્લેષણ થઈ રહ્યું છે",
      analyzingDesc:
        "વૈશ્વિક નિયમનકારી માળખામાં સમાનતા શોધ ચાલુ છે...",
      failedTitle: "મૂલ્યાંકન નિષ્ફળ થયું",
      failedDesc: "તમારી વિનંતી પર પ્રક્રિયા કરતી વખતે ભૂલ આવી.",
      fieldHelper: {
        title: "આયુષ નિયમનકારી સંદર્ભ",
        desc: "પ્રથમ અનુસૂચિ ગ્રંથો અને ભારતીય ફાર્માકોપિયા આધારિત માર્ગદર્શિકા.",
      },
    },
    report: {
      riskLevels: {
        low: "ઓછું જોખમ",
        moderate: "મધ્યમ જોખમ",
        high: "ઉચ્ચ જોખમ",
      },
      aiComplete: "એઆઈ મૂલ્યાંકન પૂર્ણ થયું",
      legalGroundingTitle: "કાનૂની આધાર અને સંદર્ભો",
      legalGroundingSubtitle:
        "સત્તાવાર નિયમનકારી દસ્તાવેજોમાંથી સીધા એકત્રિત સંદર્ભો",
      noCitations: "તમારી વિગતો સાથે કોઈ ચોક્કસ સંદર્ભ મેળ ખાતો નથી.",
      actionPlanTitle: "કાર્ય યોજના",
      actionPlanSubtitle: "નિયમ અનુપાલન માટે ભલામણ કરેલ આગામી પગલાં",
      noActions: "કોઈ વિશેષ પગલાં લેવાની જરૂર નથી.",
    },
    chat: {
      badge: "એઆઈ કાનૂની સલાહકાર",
      title: "આઈપી શક્તિ સહાયક",
      subtitle: "આયુર્વેદ બૌદ્ધિક સંપદા નિયમો પર સીધા પ્રશ્નોત્તરી",
      header: "કાનૂની પરામર્શ બૉક્સ",
      initialGreeting:
        "નમસ્તે! હું તમારો એઆઈ કાનૂની સહાયક છું. આયુર્વેદ લાઇસન્સિંગ, ABS અનુપાલન અથવા TKDL વિશે કંઈપણ પૂછવા માંગતા હોવ તો પૂછો.",
      inputPlaceholder: "આયુર્વેદ કાયદા સંબંધિત પ્રશ્ન પૂછો...",
      thinking: "વિચારી રહ્યું છે...",
      errorMessage: "ભૂલ આવી ગઈ. કૃપા કરીને ફરી પ્રયાસ કરો.",
    },
    corpus: {
      title: "કાનૂની સંગ્રહ",
      subtitle:
        "આયુર્વેદ સંબંધિત અધિનિયમો, નિયમો અને સત્તાવાર સંદર્ભો",
      officialSources: "સત્તાવાર સ્ત્રોતો",
      robustGroundedDatabase: "અમારો મજબૂત પ્રમાણિત ડેટાબેઝ",
      sources: [
        {
          acronym: "AYUSH",
          name: "આયુષ મંત્રાલય",
          desc: "આયુર્વેદ, યોગ, પ્રાકૃતિક ચિકિત્સા, યુનાની, સિદ્ધ અને હોમિયોપેથી માટેની કેન્દ્રીય સંસ્થા.",
        },
        {
          acronym: "CDSCO",
          name: "સેન્ટ્રલ ડ્રગ્સ સ્ટાન્ડર્ડ કંટ્રોલ ઓર્ગેનાઇઝેશન",
          desc: "દવાઓની ગુણવત્તા, સલામતી અને ટ્રાયલ માટેનું રાષ્ટ્રીય નિયમનકારી સત્તામંડળ.",
        },
        {
          acronym: "NBA",
          name: "રાષ્ટ્રીય જૈવ વિવિધતા સત્તામંડળ",
          desc: "જૈવિક સંસાધનોના ઉપયોગ માટે ABS અનુપાલન નિયમનકારી સંસ્થા.",
        },
        {
          acronym: "TKDL",
          name: "પરંપરાગત જ્ઞાન ડિજિટલ લાઈબ્રેરી",
          desc: "ભારતીય પરંપરાગત ઔષધીય જ્ઞાનનું રક્ષણ કરતો પેટન્ટ ડેટાબેઝ.",
        },
        {
          acronym: "India Code",
          name: "ઇન્ડિયા કોડ કાયદા અને નિયમો",
          desc: "કેન્દ્રીય અને રાજ્ય અધિનિયમોનો સત્તાવાર ડિજિટલ સંગ્રહ.",
        },
        {
          acronym: "IP India",
          name: "આઈપી ઇન્ડિયા પબ્લિક સર્ચ ડેટાબેઝ",
          desc: "પેટન્ટ, ટ્રેડમાર્ક, ડિઝાઈન અને જીઓગ્રાફિકલ ઇન્ડિકેશન રજિસ્ટ્રી.",
        },
        {
          acronym: "Drive Database",
          name: "આંતરિક દસ્તાવેજ સંગ્રહ",
          desc: "નિયમનકારી દસ્તાવેજો અને આંતરિક કાનૂની ફાઇલોનો સંગ્રહ.",
        },
      ],
    },
    expert: {
      badge: "સીધો સહાય નેટવર્ક",
      title: "નિષ્ણાત પરામર્શ",
      subtitle:
        "એઆઈ માર્ગદર્શન અને વહીવટી કાર્યવાહી વચ્ચે સેતુ. પ્રમાણિત કાનૂની વકીલો અને નિયમનકારી પોર્ટલ સાથે સંપર્ક કરો.",
      officialPortalsTitle: "સત્તાવાર નિયમનકારી પોર્ટલ",
      officialPortalsSubtitle: "સરકારી સંસ્થાઓ, વૈધાનિક માર્ગદર્શિકા અને અરજી પોર્ટલ",
      verifiedSpecialistsTitle: "પ્રમાણિત કાનૂની અને આઈપી નિષ્ણાતો",
      verifiedSpecialistsSubtitle: "માન્યતા પ્રાપ્ત નિયમનકારી સલાહકારો સાથે સીધો સંવાદ",
      domainsTitle: "કાર્યક્ષેત્રો અને સહાય નેટવર્ક",
      domainsSubtitle: "વિષય નિપુણતા અનુસાર ચોક્કસ કાનૂની સલાહકારો સાથે સંપર્ક કરો",
      bookConsultation: "પરામર્શ બુક કરો",
      callDirectly: "સીધો સંપર્ક કરો",
      verifiedSpecialist: "પ્રમાણિત નિષ્ણાત",
      consultationNotice:
        "પરામર્શ સૂચના: નિષ્ણાત સહાય સ્વતંત્ર નોંધાયેલા કાનૂની વકીલો, પેટન્ટ એજન્ટો અને નિયમનકારી સલાહકારો દ્વારા સંકલિત છે.",
      portals: [
        {
          acronym: "CDSCO",
          name: "સુગમ પોર્ટલ",
          desc: "આયુષ અને દવા ઉત્પાદન લાઇસન્સિંગ માટેનું કેન્દ્રીય ઑનલાઇન પોર્ટલ.",
        },
        {
          acronym: "NBA",
          name: "ઇ-જૈવ વિવિધતા પોર્ટલ",
          desc: "જૈવિક સંસાધનોના ઍક્સેસ અને ઉપયોગ માટે ABS મંજૂરી પોર્ટલ.",
        },
        {
          acronym: "IP India",
          name: "આઈપી ઇન્ડિયા પોર્ટલ",
          desc: "પેટન્ટ, ટ્રેડમાર્ક અને ભૌગોલિક સંકેતો માટે સત્તાવાર ઇ-ફાઇલિંગ પોર્ટલ.",
        },
        {
          acronym: "FSSAI",
          name: "ફોસ્કોસ પોર્ટલ",
          desc: "આયુર્વેદ આહાર ઉત્પાદનો માટે ફૂડ સેફ્ટી લાઇસન્સિંગ પોર્ટલ.",
        },
      ],
      experts: [
        {
          name: "એડવોકેટ રાજેશ શર્મા",
          role: "વરિષ્ઠ આઈપી વકીલ",
          desc: "પરંપરાગત જ્ઞાન સંરક્ષણ અને પેટન્ટ લિટિગેશનમાં ૧૫ વર્ષનો અનુભવ.",
        },
        {
          name: "ડૉ. મીનાક્ષી અય્યર",
          role: "નિયમનકારી સલાહકાર",
          desc: "આયુષ મંત્રાલયના નિર્દેશો અને ક્લિનિકલ ડેટા સમીક્ષામાં નિષ્ણાત.",
        },
        {
          name: "એડવોકેટ વિક્રમ દેસાઈ",
          role: "જૈવ વિવિધતા નિષ્ણાત",
          desc: "NBA મંજૂરીઓ અને ABS અનુપાલન પર સંપૂર્ણ કાનૂની સહાય.",
        },
      ],
      categories: [
        {
          title: "આયુર્વેદ પેટન્ટ અને TKDL",
          badge: "આઈપી સંરક્ષણ",
          location: "નવી દિલ્હી",
          desc: "આયુર્વેદિક ફોર્મ્યુલેશન માટે પેટન્ટ ફાઇલિંગ અને TKDL પ્રતિબંધોનું સમાધાન.",
          tags: ["પેટન્ટ", "TKDL", "કલમ 3(p)"],
        },
        {
          title: "જૈવ વિવિધતા અને ABS અનુપાલન",
          badge: "પર્યાવરણીય કાયદો",
          location: "ચેન્નાઈ / બેંગલુરુ",
          desc: "રાજ્ય જૈવ વિવિધતા બોર્ડ અને રાષ્ટ્રીય સત્તામંડળ સાથે સલાહ અને મંજૂરી.",
          tags: ["NBA", "ABS", "કલમ 7"],
        },
        {
          title: "આયુષ લાઇસન્સ અને GMP",
          badge: "નિયમનકારી મંજૂરી",
          location: "મુંબઈ",
          desc: "ફોર્મ 25D લાઇસન્સિંગ, શેડ્યૂલ T જીએમપી અને લેબ પરીક્ષણ મંજૂરી.",
          tags: ["ફોર્મ 25D", "શેડ્યૂલ T", "GMP"],
        },
        {
          title: "આયુર્વેદ આહાર અને FSSAI",
          badge: "ખાદ્ય અનુપાલન",
          location: "હૈદરાબાદ",
          desc: "આયુર્વેદ આહાર ઉત્પાદનોનું લેબલિંગ અને ફૂડ સેફ્ટી લાઇસન્સિંગ મેનેજમેન્ટ.",
          tags: ["FSSAI", "આયુર્વેદ આહાર", "લેબલિંગ"],
        },
      ],
    },
    about: {
      title: "અમારા વિશે",
      subtitle:
        "આઈપી શક્તિ સહાયકની નિર્માણ યાત્રા, અમારો દ્રષ્ટિકોણ અને કાર્યપદ્ધતિ",
      storyTitle: "અમારી વાર્તા",
      storySubtitle:
        "પરંપરાગત જ્ઞાન અને આધુનિક કાનૂની સંરક્ષણનો સંગમ",
      storyParagraphs: [
        "આઈપી શક્તિ સહાયક એ આયુર્વેદ સંશોધકો, ચિકિત્સકો અને ઉદ્યમીઓ માટે જટિલ કાયદાકીય પ્રક્રિયાઓને સરળ બનાવવા માટે શરૂ થયેલો નવતર પ્રયાસ છે.",
        "ભારતનું હજારો વર્ષ જૂનું પરંપરાગત જ્ઞાન વૈશ્વિક મંચ પર પૂર્ણ સુરક્ષા અને વ્યાવસાયિક સફળતા સાથે પહોંચે તે અમારો મુખ્ય ઉદ્દેશ્ય છે.",
      ],
      whyBuiltTitle: "આઈપી શક્તિ સહાયક શા માટે બનાવવામાં આવ્યો?",
      whyBuiltIntro:
        "આયુર્વેદ ઉદ્યમીઓ દરરોજ આવા કાયદાકીય પ્રશ્નોનો સામનો કરે છે:",
      whyBuiltQuestions: [
        "શું આ ફોર્મ્યુલેશન પેટન્ટ યોગ્ય છે કે પરંપરાગત જ્ઞાન તરીકે બાધિત છે?",
        "જૈવ વિવિધતા અધિનિયમ હેઠળ NBA પાસેથી પૂર્વ મંજૂરી જરૂરી છે?",
        "શેડ્યૂલ T GMP અનુપાલન કેવી રીતે સરળતાથી કરી શકાય?",
        "આયુર્વેદ આહાર ઉત્પાદનો માટે લેબલિંગના નિયમો શું છે?",
      ],
      whyBuiltConclusion:
        "આ પ્રશ્નોના અધિકૃત, સત્તાવાર સ્ત્રોત આધારિત અને વિશ્વસનીય જવાબો આપવા માટે આ બુદ્ધિશાળી સહાયક બનાવવામાં આવ્યો છે.",
      visionTitle: "અમારો દ્રષ્ટિકોણ",
      visionSubtitle:
        "જ્યાં દરેક આયુર્વેદ સંશોધક આત્મવિશ્વાસ સાથે પોતાના જ્ઞાનનું રક્ષણ કરી શકે.",
      visionParagraphs: [
        "કાનૂની અને નિયમનકારી જ્ઞાન માત્ર મોટી ફર્મ્સ કે વકીલો પૂરતું મર્યાદિત ન રહેવું જોઈએ.",
        "વૈદ્ય, સંશોધક, ખેડૂત કે સ્ટાર્ટઅપ સંસ્થાપક—દરેક વ્યક્તિ પોતાના ઉત્પાદનોનું કાનૂની રક્ષણ સરળતાથી સમજી શકે તેવો અમારો સંકલ્પ છે.",
      ],
      missionTitle: "અમારું લક્ષ્ય",
      missionSubtitle:
        "જટિલ કાનૂની નિયમોને સ્પષ્ટ અને સુલભ માર્ગદર્શનમાં રૂપાંતરિત કરવું.",
      missionIntro:
        "એઆઈ, RAG ટેકનોલોજી અને બહુભાષી પ્રણાલીનો ઉપયોગ કરીને આયુર્વેદ સમુદાયને સશક્ત બનાવવો.",
      pillars: [
        {
          title: "સમજણ",
          desc: "તમારા ઉત્પાદન અને ફોર્મ્યુલેશનની ચોક્કસ કાનૂની સ્થિતિ સમજવામાં સહાય.",
        },
        {
          title: "માર્ગદર્શન",
          desc: "યોગ્ય બૌદ્ધિક સંપદા અને નિયમનકારી શ્રેણીની ઓળખ.",
        },
        {
          title: "પ્રમાણીકરણ",
          desc: "સત્તાવાર સ્ત્રોતોના સંદર્ભો સાથે પ્રમાણિત જવાબોની ઉપલબ્ધિ.",
        },
        {
          title: "સશક્તિકરણ",
          desc: "ઉપયોગકર્તાઓની સ્વતંત્ર નિર્ણય લેવાની ક્ષમતામાં વૃદ્ધિ.",
        },
      ],
      differentiatorsTitle: "આઈપી શક્તિ સહાયક શા માટે અનોખો છે?",
      differentiators: [
        {
          title: "જવાબ પહેલાં શોધ (RAG)",
          content:
            "માત્ર કાલ્પનિક જવાબો આપવાને બદલે સત્તાવાર સરકારી દસ્તાવેજોમાંથી તથ્યો શોધીને જ વિશ્લેષણ કરવામાં આવે છે.",
        },
        {
          title: "આયુર્વેદ માટે સમર્પિત",
          content:
            "સામાન્ય એઆઈ સહાયકોથી અલગ, આયુર્વેદ, પરંપરાગત જ્ઞાન અને જૈવ વિવિધતા નિયમો પર વિશેષ લક્ષ્ય.",
        },
        {
          title: "બહુભાષી પારદર્શિતા",
          content:
            "ભારતની પ્રમુખ ભાષાઓમાં અધિકૃત કાનૂની પરિભાષા સાથે સચોટ માર્ગદર્શન.",
        },
      ],
      howItWorksTitle: "તે કેવી રીતે કાર્ય કરે છે?",
      howItWorksSubtitle: "ત્રણ સરળ પગલાંમાં સંપૂર્ણ કાનૂની માર્ગદર્શન",
      steps: [
        {
          title: "પ્રશ્નાવલી પૂર્ણ કરો",
          desc: "તમારા ઉત્પાદનના ઘટકો, ઉત્પાદન પદ્ધતિ અને લક્ષિત બજાર પસંદ કરો.",
        },
        {
          title: "એઆઈ વિશ્લેષણ",
          desc: "અમારું એન્જિન હજારો કાયદાકીય કલમોનું વિશ્લેષણ કરીને જોખમ સ્તર નક્કી કરે છે.",
        },
        {
          title: "કાર્ય યોજના મેળવો",
          desc: "સત્તાવાર સંદર્ભો સાથે આગળની કાર્યવાહીની વિગતવાર યાદી મેળવો.",
        },
      ],
    },
    privacy: {
      title: "ગોપનીયતા નીતિ",
      subtitle:
        "તમારા ડેટા અને કાનૂની પ્રશ્નોની સુરક્ષા માટે અમારો દ્રઢ સંકલ્પ",
      tldrLabel: "ટૂંકસાર",
      sections: [
        {
          id: "introduction",
          title: "પરિચય અને સેવા વિહંગાવલોકન",
          tldr: "આઈપી શક્તિ સહાયક ગોપનીય રીતે શૈક્ષણિક કાનૂની માર્ગદર્શન આપવા માટે રચાયેલ છે.",
          tags: ["વિહંગાવલોકન", "સંકલ્પ"],
          metadata: { "અમલી તારીખ": "સપ્ટેમ્બર ૨૦૨૬", "સુરક્ષા સ્તર": "ઉચ્ચ" },
          paragraphs: [
            "આઈપી શક્તિ સહાયકમાં આપનું સ્વાગત છે. આ બુદ્ધિશાળી એઆઈ સહાયક આયુર્વેદ, બૌદ્ધિક સંપદા અધિકારો (IPR) અને નિયમનકારી કાયદાઓ પર માર્ગદર્શન પૂરું પાડે છે.",
            "અમે તમારા પ્રશ્નો પર માત્ર સત્તાવાર સંદર્ભ આધારિત જવાબો આપવા માટે જ પ્રક્રિયા કરીએ છીએ. તમારો સંવાદ સુરક્ષિત સત્રમાં સીમિત રહે છે અને કોઈ ત્રીજા પક્ષને વેચવામાં આવતો નથી.",
          ],
        },
        {
          id: "data-privacy",
          title: "ડેટા અને ગોપનીયતા",
          tldr: "સંવેદનશીલ બૌદ્ધિક સંપદાના રક્ષણ માટે દરેક સત્ર સંપૂર્ણપણે અલગ રાખવામાં આવે છે.",
          tags: ["અલગીકરણ", "ગોપનીયતા"],
          metadata: { "સમીક્ષા": "ચકાસાયેલ", "માળખું": "Zero-Trust" },
          paragraphs: [
            "આઈપી શક્તિ સહાયક પ્રાઇવસી-ફર્સ્ટ સિદ્ધાંત પર નિર્મિત છે જેથી વપરાશકર્તાઓની માહિતી જવાબદારીપૂર્વક સુરક્ષિત રહે.",
            "અમારી સિસ્ટમ દરેક વાતચીતને અલગ રાખે છે જેથી અન્ય વપરાશકર્તાઓ સાથે ડેટાનું મિશ્રણ ન થાય.",
            "અમારી સુરક્ષા ટીમ આધુનિક સુરક્ષા ધોરણોનું પાલન થાય તે માટે નિયમિતપણે સિસ્ટમનું ઑડિટ કરે છે.",
          ],
        },
        {
          id: "data-minimization",
          title: "ન્યૂનતમ ડેટા સંગ્રહ",
          tldr: "અમે કાનૂની પ્રશ્નોના નિરાકરણ માટે માત્ર અત્યંત આવશ્યક ડેટા જ એકત્રિત કરીએ છીએ.",
          tags: ["ન્યૂનતમ ડેટા", "સુરક્ષા"],
          metadata: { "ડેટા મર્યાદા": "સખત", "શુદ્ધિકરણ": "આપમેળે" },
          paragraphs: [
            "અમારી સિસ્ટમ ફક્ત તે જ માહિતી સ્વીકારે છે જે આયુર્વેદ કાનૂની માર્ગદર્શન માટે જરૂરી હોય. બિનજરૂરી વ્યક્તિગત માહિતી લેવામાં આવતી નથી.",
            "વાતચીત દરમિયાન જો કોઈ અપ્રસ્તુત માહિતી સામેલ થાય, તો તે સ્વયંસંચાલિત પ્રક્રિયા દ્વારા દૂર કરવામાં આવે છે.",
          ],
        },
        {
          id: "user-data-protection",
          title: "વપરાશકર્તા ડેટા સુરક્ષા",
          tldr: "તમામ ડેટા મજબૂત એન્ક્રિપ્શન દ્વારા સુરક્ષિત રાખવામાં આવે છે.",
          tags: ["એન્ક્રિપ્શન", "સક્રિય દેખરેખ"],
          metadata: { "એન્ક્રિપ્શન": "AES-256", "દેખરેખ": "24/7 સક્રિય" },
          paragraphs: [
            "વ્યક્તિગત માહિતીને અનધિકૃત ઍક્સેસથી બચાવવા માટે યોગ્ય સુરક્ષા પગલાં લેવામાં આવ્યા છે. ડેટા ટ્રાન્સમિશન અને સ્ટોરેજ બંને વખતે આધુનિક એન્ક્રિપ્શન વપરાય છે.",
            "અમારી વ્યવસ્થામાં વિગતવાર લોગ રાખવામાં આવે છે જે અનધિકૃત ઍક્સેસ પ્રયાસોને તુરંત જ અટકાવે છે.",
          ],
        },
        {
          id: "confidential-information",
          title: "ગોપનીય માહિતીનું રક્ષણ",
          tldr: "અપ્રકાશિત વેપાર રહસ્યો પ્લેટફોર્મ પર દાખલ ન કરવા વપરાશકર્તાઓને વિનંતી છે.",
          tags: ["વેપાર રહસ્ય", "સાવધાની"],
          metadata: { "જોખમ સ્તર": "ઉચ્ચ", "માર્ગદર્શન": "સામાન્ય પ્રશ્નો પૂછો" },
          paragraphs: [
            "અપ્રકાશિત શોધો, પેટન્ટ એપ્લિકેશન્સ અથવા ગુપ્ત ફોર્મ્યુલેશન પ્લેટફોર્મ પર દાખલ કરવાની જરૂર નથી.",
            "સંવેદનશીલ ફોર્મ્યુલેશન માટે સામાન્ય નિયમનકારી નિયમો પર આધારિત પ્રશ્નો પૂછો જેથી તમારા અધિકારો સુરક્ષિત રહે.",
          ],
        },
        {
          id: "secure-transmission",
          title: "સુરક્ષિત ડેટા ટ્રાન્સમિશન",
          tldr: "તમામ સંવાદો HTTPS અને TLS 1.3 દ્વારા સુરક્ષિત છે.",
          tags: ["HTTPS", "TLS 1.3"],
          metadata: { "પ્રોટોકોલ": "કડક TLS", "પ્રમાણપત્ર": "સ્વચાલિત નવીકરણ" },
          paragraphs: [
            "વપરાશકર્તા અને પ્લેટફોર્મ વચ્ચેના તમામ સંચાર સુરક્ષિત પ્રોટોકોલનો ઉપયોગ કરીને સુરક્ષિત ટનલ બનાવે છે.",
            "અમે ફક્ત સુરક્ષિત જોડાણો સ્વીકારીએ છીએ અને અસુરક્ષિત પ્રયાસોને આપમેળે નકારી કાઢીએ છીએ.",
          ],
        },
        {
          id: "user-control",
          title: "વપરાશકર્તા નિયંત્રણ અને સંમતિ",
          tldr: "વધારાના ડેટા પ્રોસેસિંગ પહેલાં વપરાશકર્તાની સ્પષ્ટ સંમતિ લેવામાં આવે છે, જે કોઈપણ સમયે પાછી ખેંચી શકાય છે.",
          tags: ["સંમતિ", "નિયંત્રણ"],
          metadata: { "મૂળ સ્થિતિ": "Opt-Out", "પાછું ખેંચવું": "તાત્કાલિક" },
          paragraphs: [
            "વપરાશકર્તાઓ પોતાની માહિતી પર સંપૂર્ણ નિયંત્રણ ધરાવે છે. મુખ્ય સેવા બહારના પ્રોસેસિંગ પહેલાં સ્પષ્ટ સંમતિ લેવામાં આવે છે.",
            "સંમતિ પાછી ખેંચવાની પ્રક્રિયા સરળ અને પારદર્શક છે. વપરાશકર્તાઓ કોઈપણ ક્ષણે પોતાની પસંદગીઓ બદલી શકે છે.",
          ],
        },
        {
          id: "access-deletion",
          title: "ડેટા ઍક્સેસ અને નાબૂદી",
          tldr: "વપરાશકર્તાઓને તેમનો ઇતિહાસ જોવાની, નિકાસ કરવાની કે સંપૂર્ણપણે કાઢી નાખવાની સંપૂર્ણ સ્વતંત્રતા છે.",
          tags: ["કાઢી નાખવું", "નિકાસ"],
          metadata: { "પ્રક્રિયા સમય": "તાત્કાલિક", "નાબૂદી": "કાયમી" },
          paragraphs: [
            "પ્લેટફોર્મ વપરાશકર્તાઓને તેમની માહિતીની સમીક્ષા કરવા અથવા તેને કાયમી ધોરણે કાઢી નાખવાની સુવિધા આપે છે.",
            "જો તમે પ્લેટફોર્મનો ઉપયોગ બંધ કરવા માંગતા હોવ, તો એક સરળ વિનંતી દ્વારા તમારી બધી વિગતો કાયમ માટે કાઢી નાખી શકાય છે.",
          ],
        },
        {
          id: "third-party-audits",
          title: "તૃતીય-પક્ષ ઑડિટ અને અનુપાલન",
          tldr: "નિયમનકારી અનુપાલન અને ઉચ્ચ સુરક્ષા સુનિશ્ચિત કરવા માટે નિયમિત સ્વતંત્ર ઑડિટ કરવામાં આવે છે.",
          tags: ["ઑડિટ", "અનુપાલન"],
          metadata: { "આવર્તન": "ત્રિમાસિક", "ધોરણ": "ISO 27001" },
          paragraphs: [
            "અમારી સુરક્ષા અને વિશ્વસનીયતાની પુષ્ટિ કરવા માટે અમે નિયમિતપણે સ્વતંત્ર તૃતીય પક્ષો દ્વારા સિસ્ટમ ઑડિટ કરાવીએ છીએ.",
            "આ ઑડિટ આંતરરાષ્ટ્રીય સુરક્ષા ધોરણો અનુસાર અમારી સુરક્ષા પ્રણાલીની ઊંડાણપૂર્વક ચકાસણી કરે છે.",
          ],
        },
        {
          id: "policy-updates",
          title: "નીતિ અપડેટ્સ અને સૂચનાઓ",
          tldr: "ગોપનીયતા નીતિમાં કોઈપણ ફેરફાર પ્લેટફોર્મ પર અગાઉથી સૂચિત કરવામાં આવે છે.",
          tags: ["પારદર્શિતા", "સ્થિરતા"],
          metadata: { "નોટિસ સમયગાળો": "૩૦ દિવસ", "વિતરણ": "એપમાં" },
          paragraphs: [
            "સંબંધિત કાયદાઓ અને નિયમનકારી માળખામાં ફેરફારો અનુસાર આ નીતિ સમય સમય પર અપડેટ કરવામાં આવે છે.",
            "અમે સંપૂર્ણ પારદર્શિતામાં માનીએ છીએ. ડેટા સંચાલનને લગતા કોઈપણ મહત્વપૂર્ણ ફેરફારની સૂચના એપ્લિકેશનમાં અગાઉથી આપવામાં આવે છે.",
          ],
        },
      ],
    },
    terms: {
      title: "નિયમો અને શરતો",
      subtitle:
        "આઈપી શક્તિ સહાયકના ઉપયોગ માટે કાનૂની શરતો અને નિયમ સંગ્રહ",
      items: [
        {
          id: 1,
          title: "સ્વીકૃતિ અને હેતુ",
          content:
            "આઈપી શક્તિ સહાયકનો ઉપયોગ કરીને તમે આ નિયમો સ્વીકારો છો. આ પ્લેટફોર્મ ફક્ત માહિતી અને નિયમનકારી માર્ગદર્શનના હેતુ માટે છે.",
        },
        {
          id: 2,
          title: "ઔપચારિક કાનૂની સલાહનો અસ્વીકાર",
          content:
            "પ્લેટફોર્મની ભલામણો નિયમનકારી માર્ગદર્શન છે, પરંતુ તે યોગ્ય વકીલ અથવા કાનૂની સલાહકારની અધિકૃત કાનૂની સલાહનો વિકલ્પ નથી.",
        },
        {
          id: 3,
          title: "વપરાશકર્તા વિગતોની ચોકસાઈ",
          content:
            "સચોટ મૂલ્યાંકન મેળવવા માટે વપરાશકર્તાઓએ તેમના ફોર્મ્યુલેશન અને ઘટકોની સાચી અને અધિકૃત માહિતી આપવી આવશ્યક છે.",
        },
        {
          id: 4,
          title: "બૌદ્ધિક સંપદા અધિકારો",
          content:
            "પ્લેટફોર્મના તમામ કોડ, એલ્ગોરિધમ્સ, ડિઝાઈન અને કન્ટેન્ટ આઈપી શક્તિ સહાયકની બૌદ્ધિક સંપદા તરીકે સુરક્ષિત છે.",
        },
        {
          id: 5,
          title: "વપરાશકર્તા ડેટા ગોપનીયતા",
          content:
            "અમે તમારી ફોર્મ્યુલેશન વિગતો કોઈપણ ત્રીજા પક્ષને વેચતા નથી અને અમારી ગોપનીયતા નીતિનું ચુસ્તપણે પાલન કરીએ છીએ.",
        },
        {
          id: 6,
          title: "સરકારી નિયમોમાં ફેરફાર",
          content:
            "કાયદા અને સરકારી નિયમો બદલાતા ડેટાબેઝ અપડેટ કરવામાં આવે છે; નવીનતમ સુધારા માટે સત્તાવાર સરકારી ગેઝેટ ચકાસવું.",
        },
        {
          id: 7,
          title: "જવાબદારીની મર્યાદા",
          content:
            "પ્લેટફોર્મની માહિતી પર આધારિત કોઈપણ વ્યાવસાયિક કે કાનૂની નિર્ણયોથી થતા નુકસાન માટે સંચાલકો જવાબદાર રહેશે નહીં.",
        },
        {
          id: 8,
          title: "માન્ય ઉપયોગ",
          content:
            "આ પ્લેટફોર્મનો ઉપયોગ માત્ર કાયદેસર સંશોધન, લાઇસન્સિંગ તૈયારી અને નિયમનકારી મૂલ્યાંકન માટે જ માન્ય છે.",
        },
        {
          id: 9,
          title: "પ્રતિબંધિત પ્રવૃત્તિઓ",
          content:
            "સિસ્ટમમાં અવરોધ ઊભો કરવો, રિવર્સ એન્જિનિયરિંગ કરવું અથવા દૂષિત કોડ દાખલ કરવો સખત પ્રતિબંધિત છે.",
        },
        {
          id: 10,
          title: "તૃતીય પક્ષ લિંક્સ",
          content:
            "પ્લેટફોર્મ પર બાહ્ય સરકારી પોર્ટલની લિંક્સ છે, પરંતુ તેમની બાહ્ય સામગ્રી માટે આ સહાયક જવાબદાર નથી.",
        },
        {
          id: 11,
          title: "ખાતાની સુરક્ષા",
          content:
            "વપરાશકર્તાઓ તેમના એકાઉન્ટ વિગતો અને પાસવર્ડની સુરક્ષા જાળવવા માટે પોતે સંપૂર્ણ જવાબદાર છે.",
        },
        {
          id: 12,
          title: "સેવા ઉપલબ્ધતા",
          content:
            "અમે સતત સેવા પ્રદાન કરવાનો પ્રયાસ કરીએ છીએ, પરંતુ તકનીકી જાળવણી માટે સેવા ક્યારેક અસ્થાયી રૂપે સ્થગિત થઈ શકે છે.",
        },
        {
          id: 13,
          title: "સેવા સમાપ્તિ",
          content:
            "નિયમોના ઉલ્લંઘન બદલ સંચાલકો પૂર્વસૂચના વિના વપરાશકર્તાનો ઍક્સેસ અધિકાર સમાપ્ત કરી શકે છે.",
        },
        {
          id: 14,
          title: "ન્યાયક્ષેત્ર",
          content:
            "આ નિયમો સંબંધિત કોઈપણ વિવાદ ભારતના અધિકારક્ષેત્ર ધરાવતી અદાલતોને આધીન રહેશે.",
        },
        {
          id: 15,
          title: "શરતોમાં સુધારો",
          content:
            "અમે કોઈપણ સમયે આ નિયમોમાં સુધારો કરીને પ્લેટફોર્મ પર પ્રકાશિત કરવાનો અધિકાર અનામત રાખીએ છીએ.",
        },
        {
          id: 16,
          title: "આંતરરાષ્ટ્રીય વપરાશકર્તાઓ",
          content:
            "ભારત બહારના વપરાશકર્તાઓએ તેમના દેશના સ્થાનિક આયાત અને આરોગ્ય નિયમોનું પાલન સુનિશ્ચિત કરવું જોઈએ.",
        },
        {
          id: 17,
          title: "શુલ્ક અને ચુકવણી નીતિ",
          content:
            "જ્યારે પ્રીમિયમ સેવાઓ લેવામાં આવે, ત્યારે નિર્ધારિત ફી અને ચુકવણીના નિયમો લાગુ થશે.",
        },
        {
          id: 18,
          title: "સંપર્ક અને ફરિયાદ નિવારણ",
          content:
            "કોઈપણ કાનૂની પ્રશ્ન અથવા સ્પષ્ટતા માટે અમારા હેલ્પ ડેસ્કનો સંપર્ક કરો.",
        },
      ],
    },
    team: {
      title: "ટીમ કોડવેદ",
      desc: "પરંપરાગત ચિકિત્સા ક્ષેત્રે તકનીકી શ્રેષ્ઠતા સ્થાપિત કરવા માટે સમર્પિત અમારી પ્રતિભાશાળી સોફ્ટવેર એન્જિનિયરો અને સંશોધકોની ટીમ.",
    },
    settings: {
      title: "સેટિંગ્સ",
      subtitle: "તમારી એપ્લિકેશન પસંદગીઓનું સંચાલન કરો",
      themeTitle: "દેખાવ અને થીમ",
      themes: {
        saffron: {
          name: "કેસરી (હિન્દુત્વ)",
          desc: "એક તેજસ્વી અને પવિત્ર કેસરી ઇન્ટરફેસ. સંસારી મોહમાંથી મુક્તિ અને આધ્યાત્મિક શાંતિમાં સહાયક. જય શ્રી રામ.",
        },
        blue: {
          name: "પ્રગતિ (ભીમ)",
          desc: "રાષ્ટ્રીય બંધારણ નિર્માણ માટે જરૂરી ગહન તાર્કિક વિચારનું પ્રતીક. જ્યાં દરેક પિક્સેલ સમાન ન્યાય મેળવે છે. જય ભીમ, જય ભારત.",
        },
        green: {
          name: "સમૃદ્ધિ (ઉમ્મા)",
          desc: "વિશ્વ બંધુત્વ અને વૈશ્વિક એકતાનો શાંત અનુભવ કરાવે છે. અલ્લાહુ અકબર.",
        },
        dark: {
          name: "અંધકાર (ડાર્ક)",
          desc: "શાંત નીરવતાનો અનુભવ કરો. લાંબા સમય સુધી કામ કરતી વખતે આંખોની સુરક્ષા માટે અત્યંત આરામદાયક.",
        },
      },
    },
  },
};

