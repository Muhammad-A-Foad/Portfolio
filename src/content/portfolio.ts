export const profile = {
  name: "Muhammad",
  title: "Full-Stack Software Engineer",
  email: "muhammad.a.foad@gmail.com",
  github: "https://github.com/Muhammad-A-Foad",
  linkedin: "https://www.linkedin.com/in/muhammad-a-foad/",
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  theme: "restaurant" | "learning" | "geo" | "erp";
  status: string;
  stack: string[];
  context: string;
  requirements: string[];
  approach: string;
  focus: { title: string; body: string }[];
  contribution: string;
  outcome: string;
  limitations: string;
};

export const projects: Project[] = [
  {
    slug: "restaurant-operations",
    number: "01",
    title: "Restaurant Operations",
    category: "Business software / Multi-application system",
    theme: "restaurant",
    summary:
      "One connected workflow. From the first tap at the kiosk to the last order leaving the kitchen.",
    status: "Reported deployed pilot · current status unverified",
    stack: ["React / Next.js", "NestJS", "PostgreSQL", "Node.js"],
    context:
      "Restaurant service spans several interfaces, people, and physical devices. This project brings customer ordering, cashier operations, kitchen preparation, and order collection into a shared software workflow.",
    requirements: [
      "Connect kiosk, cashier, kitchen display, and order notification applications.",
      "Represent the order lifecycle consistently across interfaces.",
      "Integrate POS terminals, receipt printing, and cash drawer hardware.",
    ],
    approach:
      "Multiple user-facing applications communicate with shared backend services. The engineering scope brings together interface development, APIs, relational data, operational updates, and physical hardware integrations.",
    focus: [
      {
        title: "A shared order lifecycle",
        body: "The central engineering concern is consistency: a customer, cashier, and kitchen team need different views of the same order. A useful case study must explain how those views are coordinated.",
      },
      {
        title: "Software meets hardware",
        body: "Payment terminals, receipt printers, and cash drawers introduce device behavior into application workflows. Integration boundaries and failure handling are important areas for the technical walkthrough.",
      },
      {
        title: "Interfaces with a purpose",
        body: "Each application serves a different operational context, from customer self-service to quick cashier input and kitchen visibility.",
      },
    ],
    contribution:
      "This is a project in my portfolio. The precise split between my implementation work and team contributions is pending confirmation; this overview does not claim sole authorship.",
    outcome:
      "The supplied project brief describes a live pilot / deployed system. Its current deployment and implemented scope need verification before stronger outcome claims can be made.",
    limitations:
      "Public screenshots, a demonstrable environment, implementation decisions, and detailed contribution attribution are not yet available here. The accompanying visual is an illustrative workflow, not a product screenshot.",
  },
  {
    slug: "learning-platform",
    number: "02",
    title: "A platform for learning",
    category: "Education / Learning management",
    theme: "learning",
    summary:
      "The application and infrastructure behind an online academy’s learning experience.",
    status: "Running system reported · public demonstration pending",
    stack: ["NestJS", "Bun", "PostgreSQL", "Cloudflare"],
    context:
      "An online academy needs software to organize its courses and learning workflows. This learning management project combines backend functionality, relational data, and deployment infrastructure.",
    requirements: [
      "Support course and learning management through backend APIs.",
      "Model learning-related information in a relational database.",
      "Configure VPS infrastructure and the deployment environment.",
    ],
    approach:
      "The project brief identifies a NestJS backend, Bun, PostgreSQL, and Cloudflare. The case-study focus is the relationship between application behavior, database design, and the infrastructure needed to run the system.",
    focus: [
      {
        title: "Model the learning domain",
        body: "Course and learning management need clear relationships in the data model. The eventual technical walkthrough will connect those relationships to the workflows they support.",
      },
      {
        title: "Design useful API boundaries",
        body: "Backend endpoints translate learning workflows into application behavior. Detailed API examples will be included only after the implemented functionality is reviewed.",
      },
      {
        title: "Take the application beyond local development",
        body: "VPS configuration and deployment are part of the project scope, connecting the backend implementation to its operating environment.",
      },
    ],
    contribution:
      "The brief identifies backend API development and deployment as engineering areas. Individual responsibilities and any collaborators still need to be confirmed.",
    outcome:
      "The project is described as a running system in the brief. Publicly demonstrable functionality and current deployment status have not been verified for this portfolio.",
    limitations:
      "The academy’s name, branding, screenshots, and private data are withheld pending publication permission. The visual illustrates a learning structure and does not reproduce the application.",
  },
  {
    slug: "geobasira",
    number: "03",
    title: "GeoBasira",
    category: "NASA Space Apps Cairo 2025 / Environmental intelligence",
    theme: "geo",
    summary:
      "Bringing environmental data into a map-based experience that makes it easier to explore.",
    status: "Competition project · 2025",
    stack: ["React", "FastAPI", "Leaflet", "External data APIs"],
    context:
      "Developed for NASA Space Apps Cairo 2025, GeoBasira explores how environmental and Earth observation data can be brought together to provide useful insights.",
    requirements: [
      "Integrate external environmental and Earth observation data.",
      "Present geospatial information through a map-based interface.",
      "Explore AI-assisted recommendations alongside environmental insights.",
    ],
    approach:
      "The project brief lists a React and Leaflet interface with FastAPI, alongside NASA TEMPO, Open-Meteo, OpenAQ, and Gemini. The technical story centers on external data integration, geographic presentation, and the limitations of a competition project.",
    focus: [
      {
        title: "Bring different sources together",
        body: "Environmental datasets have different meanings and coverage. A careful implementation needs to preserve source context rather than treating every value as interchangeable.",
      },
      {
        title: "Make geography readable",
        body: "A map gives environmental information a location. The interface challenge is helping a visitor connect a place with the information available about it.",
      },
      {
        title: "Keep recommendations in context",
        body: "AI-assisted recommendations are part of the project brief. Their implemented scope and evaluation need documentation before any accuracy claims are appropriate.",
      },
    ],
    contribution:
      "This was a competition project. My individual responsibilities and the contributions of teammates are pending detailed attribution; no sole-authorship claim is made.",
    outcome:
      "GeoBasira was developed for NASA Space Apps Cairo 2025. No award, competition ranking, or production-readiness claim is made.",
    limitations:
      "The current demo, repository, implemented data coverage, and team breakdown still need confirmation. The topographic illustration is conceptual and contains no measured environmental data.",
  },
  {
    slug: "retail-erp",
    number: "04",
    title: "Retail, understood as a system",
    category: "Business analysis / ERP planning",
    theme: "erp",
    summary:
      "Mapping the people, inventory, and financial workflows of a multi-branch retail business.",
    status: "Planning & prototyping",
    stack: ["Requirements engineering", "Domain modeling", "Database design"],
    context:
      "A multi-branch retail business has interconnected inventory, cashier, finance, and staff workflows. This engagement is focused on understanding those operations and planning a suitable business management system.",
    requirements: [
      "Analyze inventory, batch, barcode, and point-of-sale requirements.",
      "Explore finance, vault, HR, and attendance workflows.",
      "Plan relationships between branches and reporting requirements.",
    ],
    approach:
      "Begin with requirements analysis and domain modeling, then use database design and prototypes to explore the proposed system. These activities describe planning work, not a completed ERP implementation.",
    focus: [
      {
        title: "Start with the business process",
        body: "Understanding how work happens across branches is the starting point for deciding what the software should represent.",
      },
      {
        title: "Find the domain boundaries",
        body: "Inventory, sales, finance, and staff processes intersect. Modeling those relationships helps expose questions before implementation.",
      },
      {
        title: "Separate plans from delivery",
        body: "A proposed module is a requirement to explore, not a shipped capability. Project communication should preserve that distinction.",
      },
    ],
    contribution:
      "The engagement covers business requirements, domain modeling, database design, and planning. Specific artifacts and individual ownership require review before publication.",
    outcome:
      "Development planning and prototyping. Inventory, POS, finance, HR, and reporting remain proposed scope and are not presented as completed functionality.",
    limitations:
      "The client identity, operational documents, and prototype artifacts are withheld pending permission. No completed product or live deployment is claimed.",
  },
];

export const experience = [
  {
    organization: "Digify Solution",
    role: "Founder & CEO",
    area: "Entrepreneurship & software delivery",
    body: "Client communication, requirements gathering, business analysis, project coordination, and quality assurance at an early-stage software company.",
  },
  {
    organization: "AWS Cloud Club · Zewail City",
    role: "President / AWS Cloud Captain",
    area: "Community & leadership",
    body: "Organizing educational workshops and introducing students to AWS technologies.",
  },
  {
    organization: "Zewail City",
    role: "Junior Teaching Assistant",
    area: "Academic support",
    body: "Supporting students through teaching and academic assistance.",
  },
  {
    organization: "EG Bank",
    role: "Internship",
    area: "Business operations",
    body: "Exposure to customer service and banking operations.",
  },
];

export const skills = [
  {
    number: "01",
    title: "Interfaces",
    text: "React, Next.js, HTML, CSS",
    note: "User-facing applications and connected workflows.",
  },
  {
    number: "02",
    title: "Application logic",
    text: "Node.js, NestJS, Express, FastAPI",
    note: "APIs and the behavior behind the interface.",
  },
  {
    number: "03",
    title: "Data & modeling",
    text: "PostgreSQL, SQL, relational design",
    note: "Structured data and clear domain relationships.",
  },
  {
    number: "04",
    title: "Delivery",
    text: "Docker, Linux, Dokploy, Cloudflare",
    note: "Deployment, infrastructure, and operating environments.",
  },
];
