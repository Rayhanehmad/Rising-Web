export type Service = {
  slug: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "process-safety",
    title: "Process Safety",
    category: "CORE EXPERTISE",
    description: "Structured hazard identification and process safety studies for higher-risk operations.",
    overview: "Process safety work focuses on understanding credible hazards, causes, consequences and safeguards so organizations can make informed risk-control decisions.",
    deliverables: ["PHA / HAZID support", "HAZOP studies", "LOPA and safeguard reviews", "Safety review documentation"]
  },
  {
    slug: "risk-engineering",
    title: "Risk Engineering",
    category: "RISK ASSESSMENT",
    description: "Risk assessment and consequence-based engineering to support practical decisions.",
    overview: "Risk engineering connects hazard scenarios with consequence assessment and risk evaluation, helping clients prioritize controls and engineering actions.",
    deliverables: ["QRA studies", "FERA studies", "Consequence analysis", "Facility siting and risk reviews", "Bow-tie analysis"]
  },
  {
    slug: "functional-safety",
    title: "Functional Safety",
    category: "SAFETY SYSTEMS",
    description: "Functional safety assessments supporting safety instrumented functions and lifecycle decisions.",
    overview: "Functional safety services can include SIL assessment, SIL verification and review of safety instrumented system requirements, subject to project scope and applicable standards.",
    deliverables: ["SIL assessment", "SIL verification", "SIF review", "Functional safety documentation"]
  },
  {
    slug: "fire-protection",
    title: "Fire Protection",
    category: "LOSS PREVENTION",
    description: "Engineering reviews for fire protection, fire & gas and emergency preparedness.",
    overview: "Fire protection engineering considers credible fire scenarios, protection systems, detection, mitigation and emergency response requirements.",
    deliverables: ["Fire protection review", "Fire & gas mapping", "Fire-water demand review", "Detector mapping", "Emergency planning support"]
  },
  {
    slug: "iso-qhse",
    title: "ISO & QHSE",
    category: "MANAGEMENT SYSTEMS",
    description: "Management-system and compliance support for quality, environment, occupational health and safety.",
    overview: "ISO and QHSE consultancy supports organizations in structuring management systems, documentation, audits and continuous improvement activities.",
    deliverables: ["ISO 9001 support", "ISO 14001 support", "ISO 45001 support", "QHSE documentation", "Compliance audit support"]
  },
  {
    slug: "engineering-assurance",
    title: "Engineering Assurance",
    category: "ASSURANCE",
    description: "Practical assurance activities that connect engineering controls with operational risk.",
    overview: "Engineering assurance services can support management of change, mechanical integrity, operational reviews and compliance assessment.",
    deliverables: ["Management of Change support", "Mechanical integrity review", "Operational safety reviews", "Compliance assessment"]
  }
];

export const industries = [
  { slug: "oil-gas", name: "Oil & Gas", description: "Upstream, midstream and downstream operations." },
  { slug: "petrochemical", name: "Petrochemical", description: "Continuous and high-hazard process facilities." },
  { slug: "chemical", name: "Chemical", description: "Specialty and multi-product chemical operations." },
  { slug: "energy-utilities", name: "Energy & Utilities", description: "Power generation and critical utility assets." },
  { slug: "manufacturing", name: "Manufacturing", description: "Industrial production and operational environments." },
  { slug: "infrastructure", name: "Infrastructure", description: "Complex facilities requiring structured risk control." }
];
