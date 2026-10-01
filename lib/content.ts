export type Profile = {
  name: string;
  monogram: string;
  location: string;
  linkedin: string;
  linkedinLabel: string;
  githubHandle: string;
  githubUrl: string;
  x: string;
  xLabel: string;
  title: string;
  subtitle: string;
  pitch: readonly string[];
  tracks: readonly { label: string; text: string }[];
  heroChips: readonly string[];
  availability: string;
  photo: string;
  photoAlt: string;
  cvHref: string;
  cvFileName: string;
};

export type NavLink = {
  href: string;
  label: string;
};

export type ProofPoint = {
  id: string;
  context: string;
  figures: readonly { value: string; caption: string }[];
};

export type SkillGroup = {
  title: string;
  items: readonly string[];
};

export type Role = {
  id: string;
  organisation: string;
  title: string;
  dates: string;
  location?: string;
  note?: string;
  foundation: boolean;
  bullets: readonly string[];
};

export type CaseStudy = {
  id: string;
  title: string;
  context: string;
  summary: string;
  bullets: readonly string[];
  tags: readonly string[];
};

export type Project = {
  name: string;
  url: string;
  summary: string;
  mark: string;
};

export type EducationContent = {
  credential: string;
  school: string;
  years: string;
  languages: readonly { name: string; level: string }[];
  courses: readonly string[];
};

export const profile: Profile = {
  name: "Tor Borgen",
  monogram: "TB",
  location: "Norway",
  linkedin: "https://linkedin.com/in/torborgen",
  linkedinLabel: "LinkedIn",
  githubHandle: "torbor0x",
  githubUrl: "https://github.com/torbor0x",
  x: "https://x.com/torbor0x",
  xLabel: "@torbor0x",
  title: "CTO · Product & Technical Lead · Web3",
  subtitle:
    "Hands-on technology leader. Architecture and delivery across Solana products, enterprise integrations, and cloud platforms.",
  pitch: [
    "He sits between the customer and the codebase: discovery, documentation, data mapping, roadmap, cost, and delivery, and he stays on the line when something breaks.",
    "As CTO at CVM Solutions he owns architecture for Solana transaction platforms processing 10,000+ daily transactions. At Keystone.no he was Product Owner and Technical Project Manager for WITSML and enterprise API integrations serving 10+ clients.",
    "Earlier he led cloud migration and product recovery at Muuh AS, across Azure, Google Cloud, and a React Native rewrite.",
  ],
  tracks: [
    {
      label: "Product, TAM, stakeholders",
      text: "Product owner, technical project manager, and Scrum lead for enterprise integrations.",
    },
    {
      label: "Hands-on technical lead",
      text: "Architecture and delivery for Solana products, APIs, and cloud platforms.",
    },
  ],
  heroChips: [
    "Product ownership",
    "Technical project management",
    "Solana",
    "WITSML",
    "Azure",
    "Kubernetes",
    "React",
  ],
  availability:
    "Open to remote and hybrid conversations for product, TAM, technical lead, and Web3 CTO-shaped roles.",
  photo: "/img/tor.png",
  photoAlt: "Tor Borgen at the CVM office",
  cvHref: "/cv/CV_General_Eng_Updated.pdf",
  cvFileName: "Tor_Borgen_CV.pdf",
};

export const navigation: readonly NavLink[] = [
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export const proof: readonly ProofPoint[] = [
  {
    id: "daily-transactions",
    context: "CVM Solutions",
    figures: [{ value: "10,000+", caption: "Daily transactions" }],
  },
  {
    id: "distribution-cost",
    context: "CVM Solutions",
    figures: [{ value: "30%", caption: "Lower distribution costs" }],
  },
  {
    id: "keystone-reach",
    context: "Keystone.no",
    figures: [
      { value: "5+", caption: "Enterprise integrations" },
      { value: "10+", caption: "Enterprise clients" },
    ],
  },
  {
    id: "platforms",
    context: "Keystone.no · Muuh AS",
    figures: [
      { value: "React rewrite", caption: "Legacy app toward micro-apps" },
      { value: "Kubernetes", caption: "Deployment scalability" },
      { value: "Azure + GCP", caption: "Cloud migration" },
    ],
  },
];

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Leadership & delivery",
    items: [
      "Technology strategy",
      "Product ownership",
      "Technical project management",
      "Scrum / agile",
      "Roadmaps",
      "Stakeholder alignment",
      "Jira automation",
      "Cross-functional delivery",
    ],
  },
  {
    title: "Customer / TAM",
    items: [
      "Technical discovery",
      "Requirements from sales and client meetings",
      "Incident communication",
      "Implementation ownership",
      "Service operations",
    ],
  },
  {
    title: "Integrations & APIs",
    items: [
      "REST",
      "Azure APIM",
      "WITSML",
      "oData",
      "Enterprise data hubs",
      "Azure Data Lake",
      "Azure Functions",
      "API documentation",
      "Data validation and retention",
    ],
  },
  {
    title: "Engineering",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PHP/Laravel",
      "REST APIs",
      "MySQL/SQL",
      "Jest",
      "Git",
    ],
  },
  {
    title: "Web3",
    items: [
      "Solana",
      "Web3.js",
      "Solana Pay",
      "Token-2022",
      "RPC",
      "On-chain analysis",
      "Smart-contract integrations",
      "Wallet / checkout flows",
    ],
  },
  {
    title: "Cloud & platform",
    items: [
      "Azure",
      "Google Cloud",
      "Kubernetes",
      "Cloud migration",
      "Serverless functions",
      "Key Vault–style secret handling",
    ],
  },
  {
    title: "Foundation",
    items: [
      "Complex troubleshooting",
      "QA",
      "Workflow improvement",
      "xDSL, fibre, VoIP, IPTV, and networking",
      "Active Directory, Exchange, and Office",
    ],
  },
];

export const experience: readonly Role[] = [
  {
    id: "cvm-cto",
    organisation: "CVM Solutions",
    title: "Chief Technology Officer",
    dates: "Oct 2023 – Present",
    location: "Norway",
    foundation: false,
    bullets: [
      "Lead full-stack development and technology strategy for high-performance Solana-based transaction platforms; own architecture, delivery, and technical decisions across products and infrastructure.",
      "Platforms process 10,000+ daily transactions with emphasis on reliability, security, performance, and decentralised product delivery.",
      "Built and deployed on-chain tools: transaction automation, trading and rank/transaction tooling, token and native-token airdrop systems, Token-2022 tax distribution, and Solana Pay storefronts.",
      "Designed backend infrastructure and automation pipelines; 30% reduction in token-distribution costs through scalable automation.",
      "Own technical investigation from requirements through implementation; bridge product, operations, and engineering.",
    ],
  },
  {
    id: "keystone-po",
    organisation: "Keystone.no",
    title: "Product Owner",
    dates: "Jul 2024 – Feb 2025",
    location: "Norway",
    note: "Concurrent with CVM Solutions",
    foundation: false,
    bullets: [
      "Owned product vision, delivery roadmap, and stakeholder alignment for API-driven integrations across WITSML, a central data hub, and enterprise APIs.",
      "Led scoping and development coordination for 5+ integrations delivered on time; improved data accessibility for 10+ enterprise clients.",
      "Translated client and technical needs into requirements with focus on interoperability, data integrity, security, and scalability.",
      "Hands-on contribution to solution architecture and delivery.",
    ],
  },
  {
    id: "keystone-tpm",
    organisation: "Keystone.no",
    title: "Technical Project Manager",
    dates: "Nov 2023 – Sep 2024",
    location: "Norway",
    note: "Concurrent with CVM Solutions",
    foundation: false,
    bullets: [
      "Led cross-functional planning, delivery, and coordination across engineering, data, and client teams.",
      "Scoped, estimated, and kept multi-stakeholder technical work aligned on priorities, dependencies, and delivery expectations.",
    ],
  },
  {
    id: "keystone-tl",
    organisation: "Keystone.no",
    title: "Technical Lead and Scrum Master",
    dates: "Aug 2021 – Nov 2023",
    location: "Norway",
    foundation: false,
    bullets: [
      "Led engineering delivery and Scrum across teams; introduced Jira automation and workflow improvements for predictability and code quality.",
      "Directed a React legacy rewrite toward a scalable micro-app architecture; introduced Jest and E2E testing.",
      "Drove Kubernetes adoption for maintainability and deployment scalability.",
    ],
  },
  {
    id: "muuh",
    organisation: "Muuh AS",
    title: "Technical Lead and Full Stack Developer",
    dates: "May 2019 – Aug 2021",
    location: "Norway",
    foundation: false,
    bullets: [
      "Progressed from React development into technical leadership for core applications, customer-facing integrations, and knowledge transfer.",
      "Led legacy-system modernisation and cloud migration across Azure and Google Cloud: Azure Functions, APIM, oData, PHP, Node.js, SQL.",
      "Led a React Native rewrite to address critical NFC issues and recover the product.",
    ],
  },
  {
    id: "opensource-uia",
    organisation: "OpenSource UiA",
    title: "Leadership Team",
    dates: "2018 – Jan 2021",
    foundation: false,
    bullets: [
      "Open-source initiatives and technical collaboration alongside the IT and information systems degree.",
    ],
  },
  {
    id: "nextgentel-back-office",
    organisation: "NextGenTel",
    title: "Back Office / Advanced Technical Support",
    dates: "Sep 2010 – Oct 2014",
    location: "Norway",
    foundation: true,
    bullets: [
      "Advanced troubleshooting: xDSL, fibre, VoIP, IPTV, networking, webmail, mobile broadband.",
      "Complex chat and premium-support cases; technical advisor for frontline colleagues.",
    ],
  },
  {
    id: "nextgentel-support",
    organisation: "NextGenTel",
    title: "Customer Support",
    dates: "Sep 2009 – Sep 2010",
    location: "Norway",
    foundation: true,
    bullets: [
      "High-volume diagnosis of connectivity, webmail, and home-network issues.",
    ],
  },
  {
    id: "ibm-lead",
    organisation: "IBM, Ireland",
    title: "Assistant Team Lead",
    dates: "Jan 2009 – Aug 2009",
    location: "Ireland",
    foundation: true,
    bullets: [
      "Queue monitoring, reporting, workflow coordination, team support, process improvement for Nordea service operations.",
    ],
  },
  {
    id: "ibm-support",
    organisation: "IBM, Ireland",
    title: "Technical Support / Quality Assurance",
    dates: "Sep 2007 – Aug 2009",
    location: "Ireland",
    foundation: true,
    bullets: [
      "Support for Nordea users: Active Directory, Exchange, Microsoft Office, mainframe, ATM-related systems; QA contribution.",
    ],
  },
];

export const caseStudies: readonly CaseStudy[] = [
  {
    id: "cvm-solana-platform",
    title: "Solana transaction and distribution platform",
    context: "CVM Solutions",
    summary:
      "At CVM Solutions, Tor owns architecture and delivery for a full-stack Solana transaction suite. The surface covers trading and transaction automation, rank and transaction tooling, token and native-token airdrops, Token-2022 tax distribution, and Solana Pay storefronts. Platforms process 10,000+ daily transactions. Reliability, security, performance, and decentralised delivery are design constraints, held from the first architecture pass. Backend automation cut token-distribution costs by 30%. The system is built for secure on-chain execution and for automation that keeps pace with volume. He runs technical investigation from requirements through implementation, and bridges product, operations, and engineering on the same line.",
    bullets: [
      "Secure on-chain execution with automation sized for real transaction volume",
      "Trading and transaction tooling, airdrops, and Token-2022 tax distribution",
      "Solana Pay storefronts with wallet and checkout flows",
      "10,000+ daily transactions, with reliability and security in the product requirements",
      "30% lower token-distribution cost through backend automation",
      "Ownership from requirements through implementation across product, operations, and engineering",
    ],
    tags: ["Solana", "Token-2022", "Solana Pay", "Automation"],
  },
  {
    id: "keystone-witsml",
    title: "Enterprise data hub and WITSML integrations",
    context: "Keystone.no",
    summary:
      "As Product Owner at Keystone.no, Tor owned the path from product vision to delivery for WITSML, a central data hub, and custom enterprise APIs. Stakeholder alignment, the roadmap, and feasibility sat with him, then implementation across engineering, data, and client teams. The work opened real-time exchange and clearer operational visibility, with interoperability, data integrity, security, and scalability written into the requirements. Five or more integrations shipped on time. Data accessibility improved for 10+ enterprise clients. He stayed hands-on in the solution architecture. The stack behind that delivery included Node.js, Azure APIM, WITSML, REST, and Azure Data Lake.",
    bullets: [
      "Product vision, delivery roadmap, and stakeholder alignment for API-driven integrations",
      "WITSML, a central data hub, and custom enterprise APIs in one lifecycle",
      "Node.js, Azure APIM, WITSML, REST, and Azure Data Lake",
      "5+ integrations delivered on time",
      "Broader data access for 10+ enterprise clients",
      "Hands-on architecture with interoperability, integrity, security, and scale in scope",
    ],
    tags: ["WITSML", "Azure APIM", "Data hub", "REST"],
  },
  {
    id: "keystone-modernisation",
    title: "Application and infrastructure modernisation",
    context: "Keystone.no",
    summary:
      "As Technical Lead and Scrum Master at Keystone.no, Tor led engineering delivery while a legacy React application was rewritten toward a scalable micro-app architecture. Jest and end-to-end testing arrived with the rewrite, so quality moved with the code. Kubernetes adoption improved maintainability and gave deployment a path to scale. Jira automation and workflow changes made planning more predictable and raised the bar on code quality. Scrum ran at team scale. Priorities, dependencies, and delivery expectations stayed visible across the teams doing the work, with the lead still close to the architecture.",
    bullets: [
      "React legacy rewrite toward a scalable micro-app architecture",
      "Jest and end-to-end testing introduced with the rewrite",
      "Kubernetes for maintainability and deployment scalability",
      "Jira automation and workflow improvements for predictability and code quality",
      "Scrum across teams, with delivery and quality in the same cadence",
    ],
    tags: ["React", "Jest", "Kubernetes", "Scrum"],
  },
  {
    id: "muuh-cloud",
    title: "Cloud migration and product recovery",
    context: "Muuh AS",
    summary:
      "At Muuh AS, Tor progressed from React development into technical leadership for core applications, customer-facing integrations, and knowledge transfer. He led legacy modernisation onto Azure and Google Cloud: Azure Functions, API Management, oData, PHP, Node.js, and SQL. In operational terms, SQL workloads moved toward Azure, and Linux servers were lifted onto cloud instances. A React Native rewrite then addressed critical NFC failures and recovered the product for customers. Knowledge transfer was part of the lead role, so the team could run the migrated systems and the recovered app with a clear picture of how they were built.",
    bullets: [
      "Technical leadership for core applications, integrations, and knowledge transfer",
      "Cloud migration across Azure and Google Cloud",
      "Azure Functions, APIM, oData, PHP, Node.js, and SQL",
      "SQL workloads moved toward Azure, and Linux servers lifted onto cloud instances",
      "React Native rewrite that addressed critical NFC failures and recovered the product",
    ],
    tags: ["Azure", "Google Cloud", "React Native", "APIM"],
  },
  {
    id: "integrations-lifecycle",
    title: "Integrations from conception to delivery",
    context: "How the work actually runs",
    summary:
      "Tor takes an integration from the sales conversation to a system people can run. He joins client meetings while requirements are still forming, then reads the documentation and the systems already in place. Data is mapped before scope hardens. That picture becomes a roadmap, a cost, a timeline, and a task breakdown the team can staff. He follows the work through delivery. When the technical reality changes, the plan is adjusted in front of the client, with cost and sequence updated to match. He spars with engineers on the implementation and on the operational work the integration will ask of the people who keep it running.",
    bullets: [
      "Requirements gathered in sales and client meetings",
      "Documentation and live systems explored before scope is fixed",
      "Data mapping turned into roadmap, cost, timeline, and tasks",
      "Delivery followed through, with the plan adjusted when the technical picture changes",
      "Engineering sparring on implementation and on day-to-day operations",
    ],
    tags: ["Discovery", "Data mapping", "Roadmap", "Delivery"],
  },
  {
    id: "stakeholder-tam",
    title: "Stakeholder / TAM ownership",
    context: "Keystone.no · CVM Solutions",
    summary:
      "Requests, incidents, and decisions have to stay intelligible as they cross organisations. Tor holds that line for product and technical work. Progress is reported so stakeholders can see it, and critical incidents are communicated while there is still time to act. Commercial promises are translated into engineering capacity. Engineering constraints are translated back into language a client can use. The same ownership shows up at Keystone, across client and data teams, and at CVM, where product, operations, and engineering share one technical owner. Service-operations habits from earlier support leadership sit underneath the product work.",
    bullets: [
      "Requests, incidents, and communication carried across organisations",
      "Progress and critical incidents kept visible to the people who need them",
      "Translation between commercial commitments and engineering capacity",
      "Stakeholder alignment across Keystone client, data, and engineering teams",
      "The same ownership across CVM product, operations, and engineering",
    ],
    tags: ["Stakeholders", "Incidents", "TAM", "Service operations"],
  },
  {
    id: "regulated-apis",
    title: "APIs, documentation, regulated data",
    context: "Enterprise and government-adjacent delivery",
    summary:
      "On this work, an API includes its documentation, its critical data requirements, its retention rules, and its validation. Those are specified with the interface and checked as the build proceeds. The setting is enterprise and government-adjacent data handling, where access, integrity, and retention matter as much as the payload. Deliveries are designed with information-security discipline aligned with ISO 27001 practices: documented behaviour, validated data, controlled retention, and a traceable line from the requirement to what production does. Reviewers can see what is stored, how long it is kept, and how a change is validated before it ships.",
    bullets: [
      "API documentation treated as part of the deliverable",
      "Critical data requirements captured with the design",
      "Validation and retention designed into the flow",
      "Enterprise and government-adjacent data handling",
      "Information-security practices aligned with ISO 27001",
      "A traceable line from requirement to production behaviour",
    ],
    tags: ["Documentation", "Retention", "Validation", "ISO 27001 practices"],
  },
  {
    id: "apim-rotation",
    title: "Azure serverless and APIM key rotation",
    context: "Azure Functions",
    summary:
      "Small, reliable API jobs belong in Azure Functions. One production pattern is API Management key renewal. When a subscription key must rotate, a function generates the new key, pushes it to the applications that consume the API, and stores it in a secure vault. The workflow stays short and repeatable, inside the platform identity model, with a clear trigger and a clear place for the secret. The same shape fits other narrow API jobs where a timer or an event is enough. Each job stays observable, and the operational surface stays a function the team can reason about on its own.",
    bullets: [
      "Azure Functions for small, reliable API jobs",
      "APIM key renewal as a single, repeatable workflow",
      "New key generated and pushed to consuming applications",
      "Secret stored in a Key Vault–style secure store",
      "Trigger, distribution, and storage kept in one observable function",
    ],
    tags: ["Azure Functions", "APIM", "Key rotation", "Key Vault"],
  },
  {
    id: "vercel-serverless",
    title: "Serverless product architecture on Vercel",
    context: "Vercel",
    summary:
      "Some products are a family of small server functions. On Vercel, Tor shapes that family as incremental functions, each one inside the platform’s serverless limits, composed into a system a team can still explain. Wallet integration follows the same rule. Connection, checkout, and verification each have a place in the flow. The payment path is tightened: fewer round trips, and failure states a user can understand. The surrounding architecture stays intact while that path is optimised. New behaviour is added as another function, with a boundary the next change can respect.",
    bullets: [
      "Multi-function product systems hosted on Vercel",
      "Incremental functions, each kept inside serverless limits",
      "Wallet integration laid out across connection, checkout, and verification",
      "Payment path optimised while the surrounding architecture stays intact",
      "New behaviour added as its own function, with a clear boundary",
    ],
    tags: ["Vercel", "Serverless", "Wallets", "Checkout"],
  },
  {
    id: "solana-pay",
    title: "Custom Solana Pay",
    context: "Multiple implementations",
    summary:
      "Solana Pay is in more than one product Tor has shipped. The flagship pattern pairs the SDK with an on-chain memo, so a payment can be verified afterwards as untampered. The memo rides in the transaction, where the proof can be read again later. Checkout scans a QR code automatically for wallets that support it, and offers a send-to-wallet path when they do not. CVM storefronts use this so commerce stays checkable on-chain, with the same record a reviewer and a customer can both inspect. The flow is reused where a product needs a branded payment step on top of an existing wallet connection.",
    bullets: [
      "Several Solana Pay implementations, with one flagship pattern",
      "SDK plus an on-chain memo so payment can be verified as untampered",
      "Automatic QR scan for wallets that support it",
      "Send-to-wallet fallback when a wallet cannot scan",
      "CVM storefronts using the same checkable checkout",
    ],
    tags: ["Solana Pay", "On-chain memo", "QR checkout", "Wallets"],
  },
];

export const projects: readonly Project[] = [
  {
    name: "CVM Solutions",
    url: "https://www.cvmsolutions.xyz",
    mark: "CVM",
    summary:
      "On-chain services studio: Token-2022 tax distribution, custom Solana development, Solana Pay and wallet-connect storefronts, and operational tooling. Tor is CTO and builder of the product surface.",
  },
  {
    name: "$TREMP",
    url: "https://www.tremp.xyz",
    mark: "TR",
    summary:
      "Branded meme-coin landing with a satirical Tremp narrative, a how-to-buy path, and a disclaimer. A fast Web3 front end.",
  },
  {
    name: "JackpotEx",
    url: "https://www.jackpotex.fun",
    mark: "JX",
    summary:
      "Transparent on-chain lottery. Hourly draws, top-100 holder snapshots published to a gist, ORAO VRF, prize transfer with a memo proof, burn-triggered jackpots, and a public history.",
  },
  {
    name: "Chibis",
    url: "https://www.chibis.fun",
    mark: "CH",
    summary:
      "Brand and community site for $CHIBIS. Gallery, contract-address handling, and a pastel identity.",
  },
  {
    name: "Chibimon",
    url: "https://www.chibimon.fun",
    mark: "CM",
    summary:
      "Pokémon-inspired chibi dex on Solana, the Chibimondex, plus a strip of related projects.",
  },
  {
    name: "ORCA / The Killer Whale",
    url: "https://www.thekillerwhale.fun",
    mark: "KW",
    summary:
      "High-atmosphere brand landing for The Killer Whale, built on a dark ocean visual system.",
  },
  {
    name: "Skeletor Coin",
    url: "https://www.skeletorcoin.fun",
    mark: "SK",
    summary:
      "Character-driven campaign site: a video hero, tokenomics, technology, about, and a gallery.",
  },
  {
    name: "Terminal",
    url: "https://terminal-next-henna.vercel.app",
    mark: "TM",
    summary:
      "Terminal-styled Web3 utility interface. A Next.js front end deployed on Vercel.",
  },
  {
    name: "MaxSol Lotto",
    url: "https://maxsol-site.vercel.app",
    mark: "MS",
    summary:
      "Hourly lottery product: weights, a Token-2022 transfer fee into tax distribution and a jackpot wallet, with fairness copy. Powered by the CVM tax engine.",
  },
  {
    name: "Avatool",
    url: "https://avatool.vercel.app",
    mark: "AV",
    summary:
      "In-browser avatar and meme compositor with layers, z-index, upload, and download. Signed @TORBOR. Also a CVM custom meme-generator example.",
  },
  {
    name: "VegA$$",
    url: "https://vegass.vercel.app",
    mark: "VG",
    summary:
      "Vegas-themed token and rewards explainer: reflection, a jackpot slice, and LP and treasury splits. Tax engine via CVM.",
  },
];

export const education: EducationContent = {
  credential: "Bachelor of IT and Information Systems",
  school: "University of Agder (UiA)",
  years: "2016–2019",
  languages: [
    { name: "Norwegian", level: "Native" },
    { name: "English", level: "Full professional" },
  ],
  courses: [
    "Java Essential Training",
    "Foundations of Programming",
    "Android Development Essential Training",
    "Object-Oriented Design",
  ],
};

export const copy = {
  metadataTitle: "Tor Borgen — CTO, Product & Technical Lead",
  metadataDescription:
    "Hands-on technology leader. Architecture and delivery across Solana products, enterprise integrations, and cloud platforms.",
  downloadCv: "Download CV",
  letsTalk: "Let's talk",
  fullTimeline: "Full timeline",
  earlierFoundation: "Earlier foundation",
  earlierFoundationLede:
    "NextGenTel and IBM. Support, QA, and service operations before the product roles.",
  projectsLede:
    "Eleven live sites. CVM is an on-chain services and product studio. The other links are shipped product surfaces, kept in the grid with a senior reading of what each one is.",
  notFoundTitle: "This address is unassigned.",
  notFoundLede:
    "The homepage, the timeline, and the project list are ready when you are.",
  backHome: "Back home",
  contactFormTitle: "Contact Me",
  contactFormLede: "Send a message. It is delivered to Tor, and your address is used only to reply.",
  contactSent: "Message sent. Tor will reply to the address you entered.",
  contactError: "The message was not sent. LinkedIn is still open.",
  footerLine: "CTO, product, integrations, and Web3 engineering.",
} as const;

const savedThumbs: Readonly<Record<string, string>> = {
  "https://www.cvmsolutions.xyz": "/img/projects/cvm.jpg",
  "https://www.jackpotex.fun": "/img/projects/jackpotex.jpg",
};

export function projectThumbSrc(url: string): string {
  return savedThumbs[url] ?? `https://image.thum.io/get/width/1200/crop/800/noanimate/${url}`;
}

export function projectHost(url: string): string {
  return new URL(url).host.replace(/^www\./, "");
}
