export const profile = {
  name: "King Rowell Vidal",
  initials: "KV",
  title: "Software Engineer | Backend Developer",
  headline: "Airline Payment Systems & Distributed AWS Cloud Infrastructure",
  location: "Socorro, Cubao, Quezon City, Metro Manila",
  email: "kingrowellvidal@gmail.com",
  phone: "+63 976 205 7187",
  phoneHref: "tel:+639762057187",
  linkedin: "https://www.linkedin.com/in/king-rowell-vidal-323458144/",
  availability: "Open to Senior Backend / Airline Systems Roles",
  summary:
    "Systems-oriented Software Engineer with 5+ years across aviation, SaaS, and enterprise environments. Deep expertise in airline payment systems (Navitaire, SkyPay), AWS cloud infrastructure, and backend API development — with a proven track record integrating GCash, Maya, GrabPay, PayPal, and card rails into internal airline platforms.",
  partners: ["AirAsia", "Cebu Pacific", "Accenture", "Payment Gateways"],
}

export const impactMetrics = [
  {
    value: "5+ Years",
    label: "Backend & Airline Systems",
    detail:
      "Mission-critical payment orchestration, airline PSS integrations, and distributed cloud services.",
    icon: "history" as const,
    accent: "blue",
  },
  {
    value: "2 Carriers",
    label: "Tier-1 Airline Platforms",
    detail:
      "Production work across AirAsia Malaysia and Cebu Pacific booking & payment systems.",
    icon: "plane" as const,
    accent: "emerald",
  },
  {
    value: "4+ Rails",
    label: "E-Wallet Integrations",
    detail:
      "GCash, Maya, GrabPay, and PayPal plus credit/debit card flows into airline payment hubs.",
    icon: "wallet" as const,
    accent: "indigo",
  },
  {
    value: "AWS",
    label: "Cloud & Serverless Focus",
    detail:
      "Lambda, Step Functions, DynamoDB, OpenSearch, and production observability on AWS.",
    icon: "cloud" as const,
    accent: "sky",
  },
]

export const experiences = [
  {
    current: true,
    company: "Getrosoft Sdn Bhd // AirAsia Malaysia",
    role: "Sr. Software Engineer",
    period: "Sep 2026 — November 2026",
    location: "AirAsia Malaysia Project",
    duties: [
      "Provide application support and troubleshoot production issues for AirAsia Malaysia systems.",
      "Develop and deliver new features for airline booking and backend services.",
      "Perform code reviews to maintain quality, consistency, and team standards.",
      "Write and improve unit tests; use Cursor to speed up delivery and strengthen coverage.",
    ],
    tags: ["Node.js", "TypeScript", "Navitaire", "Cursor", "Unit Testing", "Code Review"],
  },
  {
    current: false,
    company: "Ascendion // Cebu Pacific Project",
    role: "Sr. Software Engineer — Airline Systems & Payments",
    period: "Jul 2024 — Sep 2026",
    location: "Cebu Pacific",
    duties: [
      "Build and maintain high-availability airline payment systems with Node.js, Navitaire, and SkyPay.",
      "Integrate GCash, Maya, GrabPay, PayPal, and credit/debit card gateways into passenger payment flows.",
      "Design and secure REST APIs through Apigee for transaction routing between systems and providers.",
      "Lead UAT and regression testing with vendors; run scheduled audits to protect payment data integrity.",
      "Diagnose production incidents and restore payment services to minimize passenger impact.",
    ],
    tags: ["Node.js", "Apigee", "Navitaire", "SkyPay", "Payment Gateways", "UAT"],
  },
  {
    current: false,
    company: "Accenture (Voyage & Origin)",
    role: "Advance App Engineering Sr. Analyst",
    period: "May 2021 — Dec 2023",
    location: "Enterprise AWS Programs",
    duties: [
      "Support and enhance enterprise APIs and backend systems with Node.js and AWS for global clients.",
      "Architect AWS Lambda and Step Functions workflows to automate business processes.",
      "Contribute React.js UI work alongside backend services for end-to-end feature delivery.",
      "Monitor latency and health with CloudWatch and OpenSearch; provide on-call RCA for critical incidents.",
      "Mentor junior developers and uphold SLA commitments across enterprise programs.",
    ],
    tags: ["Node.js", "AWS Lambda", "Step Functions", "OpenSearch", "React.js", "CloudWatch"],
  },
  {
    current: false,
    company: "Feemo Global Solutions",
    role: "Software Engineer (Team Lead)",
    period: "Mar 2019 — Apr 2021",
    location: "Manila, Philippines",
    duties: [
      "Build and maintain Laravel + Vue.js backend systems for the core SaaS product.",
      "Manage AWS deployments across development, staging, and production environments.",
      "Lead a small engineering team through sprint planning, delivery, and client feature requests.",
      "Own database maintenance, configuration, and day-to-day platform reliability.",
    ],
    tags: ["Laravel", "Vue.js", "AWS", "Node.js", "WordPress", "Team Lead"],
  },
]

export const competencies = [
  {
    title: "Airline & Payment Rails",
    icon: "ticket" as const,
    accent: "blue",
    items: [
      { name: "Navitaire PSS", level: "Core Expert", tone: "primary" },
      { name: "SkyPay Engine", level: "Specialist", tone: "primary" },
      { name: "Apigee API Management", level: "Architect", tone: "primary" },
      { name: "GCash / Maya / GrabPay / PayPal", level: "Integrator", tone: "success" },
      { name: "Payment Data Integrity & Audits", level: "Verified", tone: "muted" },
    ],
  },
  {
    title: "AWS Cloud & Serverless",
    icon: "cloud" as const,
    accent: "sky",
    items: [
      { name: "AWS Lambda & Step Functions", level: "Specialist", tone: "sky" },
      { name: "Amazon DynamoDB", level: "Proficient", tone: "sky" },
      { name: "Amazon OpenSearch", level: "Observability", tone: "muted" },
      { name: "EC2, S3, RDS, SES", level: "Advanced", tone: "sky" },
      { name: "Serverless & Microservices", level: "Daily", tone: "muted" },
    ],
  },
  {
    title: "Languages & Runtimes",
    icon: "code" as const,
    accent: "indigo",
    items: [
      { name: "Node.js / TypeScript / JavaScript", level: "Daily Driver", tone: "indigo" },
      { name: "PHP / Laravel Ecosystem", level: "Experienced", tone: "indigo" },
      { name: "Vue.js & React.js", level: "Full-Stack", tone: "indigo" },
      { name: "MySQL & SQL Optimization", level: "Optimization", tone: "indigo" },
      { name: "Git & Cursor (AI-assisted)", level: "Workflow", tone: "muted" },
    ],
  },
]

export const credentials = [
  {
    org: "Amazon Web Services",
    title: "AWS Certified Cloud Practitioner",
    detail:
      "Broad understanding of AWS cloud infrastructure, security, IAM, networking, and resilient architecture patterns.",
    status: "Verified · 2023",
    accent: "blue",
    icon: "shield" as const,
  },
  {
    org: "Professional Accreditation",
    title: "Java Programming Certification",
    detail:
      "Course certification covering object-oriented design, concurrency fundamentals, and enterprise Java practices.",
    status: "Certified · 2023",
    accent: "indigo",
    icon: "code" as const,
  },
  {
    org: "St. Anthony College",
    title: "BS in Information Technology",
    detail:
      "Formal grounding in software engineering, databases, networking protocols, and systems development (2010 – 2014).",
    status: "Graduated",
    accent: "sky",
    icon: "school" as const,
  },
]

export const caseStudies = {
  flagship: {
    tags: ["Airline FinTech", "Navitaire PSS", "Cebu Pacific & AirAsia"],
    title: "Airline Payment Gateway & Settlement Integrations",
    body: "Developed and maintained high-availability airline payment systems connecting passenger booking flows with Navitaire and SkyPay. Integrated third-party wallets and card rails, secured transaction routing through Apigee, and protected payment data integrity with audits and production incident response.",
    highlights: [
      {
        title: "Multi-Wallet Routing",
        detail: "GCash, Maya, GrabPay, PayPal, and card integrations into the airline payment hub.",
      },
      {
        title: "Apigee-Secured APIs",
        detail: "REST APIs for secure transaction routing between internal systems and providers.",
      },
      {
        title: "Production Resilience",
        detail: "Incident diagnosis that cut MTTR and prevented revenue-impacting downtime.",
      },
      {
        title: "UAT & Data Integrity",
        detail: "Led UAT/regression with vendors and scheduled audits against reconciliation drift.",
      },
    ],
    tech: ["Node.js", "Apigee", "Navitaire", "SkyPay", "REST APIs", "Payment Gateways"],
  },
  secondary: [
    {
      badge: "Personal Project",
      org: "Profilio — Portfolio Website",
      title: "Profilio",
      body: "Personal portfolio site showcasing career experience, competencies, and production case studies. Replace this copy with your project story, goals, and outcomes.",
      bullets: [
        "Add what the project does and who it is for.",
        "Add key features, architecture choices, or technical challenges.",
        "Add links, screenshots, or results when ready.",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      badge: "AWS Serverless",
      org: "Accenture — Voyage & Origin",
      title: "Enterprise Serverless Workflows & Observability",
      body: "Architected AWS Lambda and Step Functions pipelines to automate business processes, then monitored latency and health with CloudWatch and OpenSearch while mentoring junior engineers.",
      bullets: [
        "Lambda + Step Functions workflows that cut manual intervention.",
        "Backend services in Node.js with React.js frontend contributions.",
        "On-call production support and root-cause analysis for critical incidents.",
      ],
      tech: ["AWS Lambda", "Step Functions", "DynamoDB", "OpenSearch", "CloudWatch", "React.js"],
    },
    {
      badge: "Multi-Tenant SaaS",
      org: "Feemo Global Solutions",
      title: "Core SaaS Platform & Team Leadership",
      body: "Led delivery of the company's core SaaS product on Laravel and Vue.js, managed AWS environment parity, and coordinated sprint planning for a small engineering team.",
      bullets: [
        "Backend systems for CRM-style SaaS workflows and client requests.",
        "AWS deployments across development, staging, and production.",
        "Team lead ownership of timelines, config, and database maintenance.",
      ],
      tech: ["Laravel", "Vue.js", "AWS", "Node.js", "WordPress"],
    },
  ],
}

export const inquiryDomains = [
  "Airline Payment Orchestration",
  "AWS Cloud / Serverless Migration",
  "Apigee API Gateway Integration",
  "Senior Backend Engineering Opportunity",
  "Consulting & Advisory",
]

export const timelines = [
  "Immediate / Urgent Priority",
  "Next 30–60 Days",
  "Exploratory / Future Roadmap",
]
