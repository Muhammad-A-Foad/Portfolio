export const profile = {
  name: "Muhammad",
  fullName: "Muhammad Ahmad Foad",
  title: "Full-Stack Software Engineer",
  location: "Egypt",
  email: "muhammad.a.foad@gmail.com",
  github: "https://github.com/Muhammad-A-Foad",
  linkedin: "https://www.linkedin.com/in/muhammad-a-foad/",
  resumeUrl: "/resume/Muhammad-Ahmad-Foad-CV-Nov-2026.pdf",
  resumeFilename: "Muhammad-Ahmad-Foad-CV-Nov-2026.pdf",
  resumeEdition: "November 2026",
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  theme: "restaurant" | "learning" | "academy" | "geo" | "erp";
  status: string;
  period: string;
  role: string;
  website?: string;
  screenshot?: string;
  stack: string[];
  context: string;
  requirements: string[];
  approach: string;
  architecture: { label: string; detail: string }[];
  focus: { title: string; body: string }[];
  contribution: string;
  outcome: string;
  limitations: string;
};

export const projects: Project[] = [
  {
    slug: "restaurant-operations",
    number: "01",
    title: "Mama Fattoum",
    category: "Restaurant operations · Web, mobile & desktop",
    theme: "restaurant",
    summary:
      "A production restaurant platform connecting the customer, the cashier, and the kitchen—across web, mobile, and desktop.",
    status: "Production platform",
    period: "Apr 2026 — Present",
    role: "Full-stack development",
    website: "https://fattoumfoods.com",
    screenshot: "/projects/mama-fattoum.webp",
    stack: ["Next.js / React", "React Native", "Tauri", "NestJS", "PostgreSQL"],
    context:
      "A restaurant’s software supports the whole service: placing an order, managing it, preparing food, and notifying the customer. Mama Fattoum connects ordering, administration, kiosk, cashier, notifier, and central-kitchen workflows through a shared backend.",
    requirements: [
      "Connect customer and operational applications through NestJS and PostgreSQL.",
      "Build web, mobile, and desktop interfaces for different workflows.",
      "Integrate Bluetooth barcode scanning with the iPad cashier app.",
      "Support administrator-defined subscriptions with customer customization.",
    ],
    approach:
      "The platform combines Next.js/React web apps, React Native mobile apps, and a Tauri ordering kiosk. NestJS and PostgreSQL provide the shared backend for the ordering and operational workflows.",
    architecture: [
      { label: "EXPERIENCES", detail: "Web · Mobile · Kiosk" },
      { label: "SERVICES", detail: "NestJS backend" },
      { label: "DATA", detail: "PostgreSQL" },
    ],
    focus: [
      {
        title: "Different interfaces, a connected operation",
        body: "Customer ordering, administration, the cashier, and the kitchen have different needs. I developed applications around those roles while connecting them through the shared backend.",
      },
      {
        title: "Bring physical input into the workflow",
        body: "I integrated Bluetooth barcode scanning with the React Native iPad cashier application, connecting a physical input device to cashier operations.",
      },
      {
        title: "Subscriptions with room for choice",
        body: "I built configurable subscriptions so administrators could define packages and customers could customize their selections.",
      },
    ],
    contribution:
      "I built the NestJS/PostgreSQL backend, Next.js/React web apps, React Native mobile apps, and Tauri ordering kiosk. My implementation work also includes iPad barcode scanning and configurable subscriptions. These are my software contributions; restaurant operations and business ownership belong to the client.",
    outcome:
      "A production platform spanning ordering, administration, kiosk, cashier, notifier, and central-kitchen workflows. Development is ongoing, as listed in my November 2026 CV.",
    limitations:
      "The public homepage is shown with permission. Private administration screens, operational records, and payment details are excluded. The system diagram is a simplified overview.",
  },
  {
    slug: "learning-platform",
    number: "02",
    title: "Nooran Land",
    category: "Education · Learning management",
    theme: "learning",
    summary:
      "A live learning platform for Arabic and Islamic studies, from the public website to administration and PayPal payments.",
    status: "Live LMS",
    period: "Jun 2026",
    role: "Full-stack development",
    website: "https://nooranland.com",
    screenshot: "/projects/nooran-land.webp",
    stack: ["Next.js", "React", "NestJS", "PostgreSQL", "PayPal"],
    context:
      "An online academy needs a clear public experience and the software behind its learning operations. Nooran Land brings the website, administration, backend, database, and payments together in one LMS project.",
    requirements: [
      "Build the academy’s Next.js website.",
      "Provide a React administration dashboard.",
      "Develop the backend with NestJS and PostgreSQL.",
      "Integrate PayPal payments.",
    ],
    approach:
      "A Next.js website serves the academy’s public presence, while a React dashboard supports administration. NestJS and PostgreSQL provide the backend and data layer, with PayPal integrated for payments.",
    architecture: [
      { label: "INTERFACES", detail: "Next.js · React admin" },
      { label: "BACKEND", detail: "NestJS · PostgreSQL" },
      { label: "PAYMENTS", detail: "PayPal integration" },
    ],
    focus: [
      {
        title: "Public experience and administration",
        body: "I built the Next.js website and React admin dashboard, giving the academy distinct interfaces for visitors and administration.",
      },
      {
        title: "Connect behavior to structured data",
        body: "I developed the backend using NestJS and PostgreSQL, connecting LMS functionality to its application and data layers.",
      },
      {
        title: "Include the payment workflow",
        body: "I integrated PayPal payments as part of the live LMS. Transaction and learner information remain outside the public case study.",
      },
    ],
    contribution:
      "I built the Next.js website, React admin dashboard, NestJS/PostgreSQL backend, and PayPal integration. Academy teaching, educational content, and business operations are the client’s responsibilities.",
    outcome:
      "A live LMS delivered in June 2026 for an academy offering Arabic and Islamic studies. This portfolio describes the delivered software without claiming enrollment or revenue metrics.",
    limitations:
      "The screenshot shows the public homepage with permission. Private learner records, administrative screens, and payment data are not shared.",
  },
  {
    slug: "al-malik-academy",
    number: "03",
    title: "Al Malik Academy",
    category: "Education · A separate LMS delivery",
    theme: "academy",
    summary:
      "A separate academy platform with a Next.js website, a React admin dashboard, and an integrated backend and payment flow.",
    status: "Live LMS",
    period: "Jun 2026",
    role: "Full-stack development",
    website: "https://almalikacademyedu.com",
    screenshot: "/projects/al-malik-academy.webp",
    stack: ["Next.js", "React", "NestJS", "PostgreSQL", "PayPal"],
    context:
      "Al Malik Academy is a separate learning management project. Its scope covers the public website, administration, backend services, relational data, and PayPal payments.",
    requirements: [
      "Create the academy’s Next.js website.",
      "Build a React administration dashboard.",
      "Implement a NestJS and PostgreSQL backend.",
      "Integrate PayPal payments.",
    ],
    approach:
      "The platform uses Next.js for the website, React for administration, and NestJS with PostgreSQL for the backend. PayPal provides the payment integration. This is a separate academy project, rather than an additional module of Nooran Land.",
    architecture: [
      { label: "INTERFACES", detail: "Website · Admin" },
      { label: "APPLICATION", detail: "NestJS · PostgreSQL" },
      { label: "INTEGRATION", detail: "PayPal payments" },
    ],
    focus: [
      {
        title: "Deliver the full application surface",
        body: "I built the public website and administration interface alongside the backend behind them.",
      },
      {
        title: "Connect services and data",
        body: "NestJS and PostgreSQL form the backend and data layer, matching the full-stack scope of the delivery.",
      },
      {
        title: "Complete the payment integration",
        body: "I integrated PayPal into the LMS delivery, keeping payment and customer information out of public portfolio materials.",
      },
    ],
    contribution:
      "I built the Next.js website, React admin dashboard, NestJS/PostgreSQL backend, and PayPal integration for this separate academy. This describes software implementation, not ownership of the academy or its educational content.",
    outcome:
      "A separate live LMS delivered in June 2026, documented in my November 2026 CV. The public website is linked from this case study.",
    limitations:
      "The screenshot shows the public homepage with permission. Administrative screens, learner information, and payment records are excluded.",
  },
  {
    slug: "geobasira",
    number: "04",
    title: "GeoBasira",
    category: "NASA Space Apps Cairo 2025 · Environmental intelligence",
    theme: "geo",
    summary:
      "An environmental intelligence exploration combining external data, geospatial visualization, and AI-assisted recommendations.",
    status: "Competition project",
    period: "2025",
    role: "Team project · detailed attribution pending",
    stack: ["React", "FastAPI", "Leaflet", "Environmental data APIs"],
    context:
      "Developed for NASA Space Apps Cairo 2025, GeoBasira explores how environmental and Earth observation data can be brought together to provide useful insights.",
    requirements: [
      "Integrate environmental and Earth observation data.",
      "Present geospatial information through a map-based interface.",
      "Explore AI-assisted recommendations alongside environmental insights.",
    ],
    approach:
      "The project combines React, Leaflet, and FastAPI with external sources including NASA TEMPO, Open-Meteo, OpenAQ, and Gemini. Its scope is a competition project, rather than a production environmental monitoring service.",
    architecture: [
      { label: "SOURCES", detail: "Environmental APIs" },
      { label: "PROCESSING", detail: "FastAPI" },
      { label: "EXPERIENCE", detail: "React · Leaflet" },
    ],
    focus: [
      {
        title: "Connect external sources",
        body: "Environmental sources differ in coverage and meaning. Preserving that context is a core consideration when combining them.",
      },
      {
        title: "Make geography readable",
        body: "A map gives information a location and connects a place with the data available about it.",
      },
      {
        title: "Communicate the limits",
        body: "The project explores AI-assisted recommendations. No measured accuracy or production-readiness claim is made.",
      },
    ],
    contribution:
      "I participated in NASA Space Apps Challenge Cairo in 2025. The detailed split between my GeoBasira work and teammates’ contributions remains to be documented; this project is not presented as solely authored by me.",
    outcome:
      "A competition project developed for NASA Space Apps Cairo 2025. No award or competition ranking is claimed.",
    limitations:
      "The topographic artwork is conceptual and contains no measured environmental data. A public demo, repository, and detailed team attribution have not been added.",
  },
  {
    slug: "retail-erp",
    number: "05",
    title: "Retail, understood as a system",
    category: "Business analysis · ERP planning",
    theme: "erp",
    summary:
      "Understanding inventory, sales, finance, and staff workflows before translating a multi-branch business into a software model.",
    status: "Planning & prototyping",
    period: "Planning study",
    role: "Requirements & domain modeling",
    stack: ["Requirements engineering", "Domain modeling", "Database design"],
    context:
      "A multi-branch retail business has interconnected inventory, cashier, finance, and staff workflows. This engagement focuses on understanding those operations and planning a suitable business management system.",
    requirements: [
      "Analyze inventory, batch, barcode, and point-of-sale requirements.",
      "Explore finance, vault, HR, and attendance workflows.",
      "Plan relationships between branches and reporting requirements.",
    ],
    approach:
      "Requirements analysis and domain modeling come first, followed by database design and prototypes to explore the proposed system. The listed modules describe planned scope, not a completed ERP implementation.",
    architecture: [
      { label: "DISCOVERY", detail: "Operational requirements" },
      { label: "MODELING", detail: "Domains · Data" },
      { label: "EXPLORATION", detail: "Prototypes" },
    ],
    focus: [
      {
        title: "Start with the process",
        body: "Understanding how work happens across branches provides the basis for deciding what the software should represent.",
      },
      {
        title: "Find domain boundaries",
        body: "Inventory, sales, finance, and staff processes intersect. Modeling their relationships exposes questions before implementation.",
      },
      {
        title: "Distinguish scope from delivery",
        body: "Proposed modules remain requirements to explore, not shipped capabilities.",
      },
    ],
    contribution:
      "The engagement covers requirements analysis, domain modeling, database design, and planning. Individual ownership of specific prototype artifacts remains to be detailed.",
    outcome:
      "Planning and prototyping. Inventory, POS, finance, HR, and reporting remain proposed functionality.",
    limitations:
      "The client identity, operational documents, and prototypes are withheld pending permission. No completed product or live deployment is claimed.",
  },
];

export const experience = [
  {
    organization: "Dewan Soft",
    role: "Software Engineer",
    type: "Contract",
    period: "Oct 2026 — Present",
    current: true,
    area: "AI integrations & application engineering",
    body: "Developing a confidential AI-powered technical-support integration, with documentation ingestion for RAG, LLM API integration, and WhatsApp messaging through incoming webhooks and outgoing API calls.",
    detail: "Employer and client implementation details remain confidential.",
  },
  {
    organization: "Dewan Soft",
    role: "Software Engineering Intern",
    type: "Internship",
    period: "May — Sep 2026",
    current: false,
    area: "ERP development & maintenance",
    body: "Diagnosed and resolved issues in existing ERP modules from client support tickets. Developed club-management ERP modules from requirements gathered by the technical consultation team.",
    detail:
      "Implementation and issue resolution within the engineering team; requirements were gathered by technical consultants.",
  },
];

export const education = {
  institution: "University of Science and Technology in Zewail City",
  degree: "B.Sc. in Computer Science",
  major: "Software Development Major",
  period: "Aug 2024 — Expected Sep 2028",
};
export const leadership = {
  role: "AWS Student Builder Group Leader",
  period: "Oct 2025 — Oct 2026",
  body: "Led student cloud-computing activities and organized introductory AWS and AWS Lambda workshops.",
  activities:
    "NASA Space Apps Challenge Cairo (2025) · Egyptian Collegiate Programming Contest (ECPC)",
};
export const skills = [
  {
    number: "01",
    title: "Web & cross-platform",
    text: "React, Next.js, React Native, Tauri, Tailwind CSS",
    note: "Web, mobile, and desktop interfaces backed by practical project work.",
  },
  {
    number: "02",
    title: "Services & data",
    text: "Node.js, NestJS, PostgreSQL, REST APIs, authentication",
    note: "Application logic, API integrations, and relational data.",
  },
  {
    number: "03",
    title: "AI integrations",
    text: "LLM APIs, RAG document ingestion, webhooks",
    note: "Current work connecting documentation, messaging, and AI services.",
  },
  {
    number: "04",
    title: "Delivery & tooling",
    text: "Docker, Linux, Git, GitHub, Postman",
    note: "Building, testing, and deploying complete applications.",
  },
];
