export type Language = "en" | "hi" | "mr";

export interface TranslationSchema {
  common: {
    downloadPdf: string;
    exporting: string;
    startNewAssessment: string;
    learnMore: string;
    tryAgain: string;
    accessDatabase: string;
    loading: string;
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
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    common: {
      downloadPdf: "Download PDF",
      exporting: "Exporting...",
      startNewAssessment: "Start New Assessment",
      learnMore: "Learn more",
      tryAgain: "Try Again",
      accessDatabase: "Access Database",
      loading: "Loading...",
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
    common: {
      downloadPdf: "पीडीएफ डाउनलोड करें",
      exporting: "निर्यात हो रहा है...",
      startNewAssessment: "नया मूल्यांकन शुरू करें",
      learnMore: "अधिक जानें",
      tryAgain: "पुनः प्रयास करें",
      accessDatabase: "डेटाबेस खोलें",
      loading: "लोड हो रहा है...",
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
    common: {
      downloadPdf: "पीडीएफ डाउनलोड करा",
      exporting: "निर्यात होत आहे...",
      startNewAssessment: "नवीन मूल्यांकन सुरू करा",
      learnMore: "अधिक जाणून घ्या",
      tryAgain: "पुन्हा प्रयत्न करा",
      accessDatabase: "डेटाबेस उघडा",
      loading: "लोड होत आहे...",
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
};
