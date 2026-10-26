export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * studio    — built by Seiz Adlers as a company
 * campaign  — performance-marketing work from the team's campaign experience
 * solution  — a technology capability, presented as a solution summary
 */
export type ProjectKind = "studio" | "campaign" | "solution";

export interface ProjectMetric {
  value: string;
  label: string;
}

/** Coded cover art — tone sets the field colour, motif the decoration. */
export interface ProjectVisualSpec {
  tone: "dark" | "blue" | "paper";
  motif: "curve" | "rings" | "bars" | "grid" | "nodes" | "funnel";
}

export interface Project {
  slug: string;
  number: string;
  kind: ProjectKind;
  title: string;
  /** Short line under the title on cards, e.g. the industry or capability. */
  category: string;
  industry: string;
  /** Services for studio work; channels for campaigns; capabilities for solutions. */
  services: string[];
  timeline?: string;
  team?: string;
  description: string;
  challenge: string;
  objective?: string;
  strategy: string;
  creativeDirection?: string;
  uxApproach?: string;
  designSystem?: string;
  development?: string;
  outcomeDetail?: string;
  /** null until real, measured results exist. */
  results: string | null;
  /** One-line outcome shown on cards. */
  outcome: string;
  metric?: ProjectMetric;
  /** Studio work: the brand-system board. Others: a coded visual. */
  coverVisual?: "brand-system";
  visual?: ProjectVisualSpec;
  cover: ProjectImage | null;
  gallery: ProjectImage[];
  technology: string[];
}

export const projects: Project[] = [
  /* ── Studio ─────────────────────────────────────────────────── */
  {
    slug: "seiz-adlers",
    number: "01",
    kind: "studio",
    title: "Seiz Adlers",
    category: "Brand & Digital Experience",
    industry: "Digital Agency",
    services: ["Brand Identity", "Website Development", "SEO"],
    timeline: "[INSERT TIMELINE]",
    team: "Seiz Adlers team",
    description:
      "Our own identity and website — the first public demonstration of how Seiz Adlers thinks, designs and builds.",
    challenge: "Create a premium identity and digital presence for a new digital company.",
    objective:
      "Introduce a new company credibly without borrowed proof — no invented clients, metrics or testimonials, only the work itself.",
    strategy: "Combine branding, technology and growth into one cohesive digital experience.",
    creativeDirection:
      "A near-black system with electric blue used as a deliberate accent, editorial typography at poster scale, and the eagle mark's geometry echoed in fine lines rather than repeated literally.",
    uxApproach:
      "One primary action — start a project — supported by three clear journeys through work, services and the team. Every section reads without animation, works by keyboard, and was laid out for mobile on its own terms rather than compressed from desktop.",
    designSystem:
      "Tokens for surfaces, text and accent; fluid type set with clamp(); a small set of shared primitives reused on every page; and all content held as structured data, ready to move into a CMS.",
    development:
      "A high-performance interactive website designed to demonstrate the capabilities of the company itself — built with Next.js, TypeScript and Tailwind CSS, statically rendered, with optimised images and fonts, motion that never blocks first paint, and structured data on every route.",
    results: null,
    outcome: "Results published after launch",
    coverVisual: "brand-system",
    cover: {
      src: "/work/seiz-adlers/home-hero.jpg",
      alt: "The Seiz Adlers homepage hero: a black-and-white portrait beside a blue panel reading “People remember.”",
      width: 1600,
      height: 1000,
    },
    gallery: [
      {
        src: "/work/seiz-adlers/home-hero-mobile.jpg",
        alt: "The Seiz Adlers homepage on a phone.",
        width: 780,
        height: 1688,
      },
      {
        src: "/logo-full.png",
        alt: "The Seiz Adlers logo: an eagle mark in blue gradients above the wordmark.",
        width: 576,
        height: 500,
      },
    ],
    technology: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },

  /* ── Campaign results ──────────────────────────────────────── */
  {
    slug: "d2c-ecommerce-growth",
    number: "02",
    kind: "campaign",
    title: "D2C E-commerce Growth",
    category: "Direct-to-Consumer",
    industry: "Direct-to-Consumer (D2C)",
    services: ["Meta Ads", "Google Ads", "Analytics", "Conversion Tracking"],
    description: "Paid acquisition for a direct-to-consumer brand, rebuilt around measurement.",
    challenge:
      "Improve online customer acquisition while making paid advertising performance easier to measure and optimize.",
    strategy:
      "Campaign structures were refined around audience segmentation, creative testing, retargeting, and conversion tracking. Performance insights were used to identify campaign elements with stronger purchase potential.",
    outcomeDetail:
      "The campaign approach supported more informed optimization and scalable customer acquisition opportunities.",
    results: "Reported 4× return on advertising spend (ROAS) on D2C campaigns.",
    outcome: "4× ROAS on D2C campaigns",
    metric: { value: "4×", label: "ROAS" },
    visual: { tone: "blue", motif: "curve" },
    cover: null,
    gallery: [],
    technology: ["Meta Ads", "Google Ads", "GA4", "Meta Pixel"],
  },
  {
    slug: "fmcg-product-discovery",
    number: "03",
    kind: "campaign",
    title: "FMCG Product Discovery & Sales",
    category: "FMCG / Consumer Goods",
    industry: "FMCG / Consumer Goods",
    services: ["Meta Ads", "Product Catalogues", "CPAS"],
    description: "Catalogue-led advertising that tied product visibility to purchases.",
    challenge:
      "Improve product visibility and connect digital advertising activity to measurable purchase outcomes.",
    strategy:
      "Product-led creative, catalogue-based advertising, audience refinement, and ongoing campaign analysis were used to improve the relevance of ads and identify optimization opportunities.",
    outcomeDetail:
      "A performance-oriented campaign structure helped focus spend and creative decisions on measurable outcomes.",
    results: "Reported 10× ROAS on selected FMCG campaigns.",
    outcome: "10× ROAS on selected campaigns",
    metric: { value: "10×", label: "ROAS" },
    visual: { tone: "dark", motif: "bars" },
    cover: null,
    gallery: [],
    technology: ["Meta Ads", "Meta Catalogue", "CPAS"],
  },
  {
    slug: "consumer-brand-audience",
    number: "04",
    kind: "campaign",
    title: "Consumer Brand Audience Expansion",
    category: "Consumer / Retail",
    industry: "Consumer / Retail Brand",
    services: ["Social Media", "Paid Campaigns", "Audience Analytics"],
    description: "Audience development that tripled a brand's reachable community.",
    challenge: "Expand the brand's audience and build a broader base for future engagement and promotional activity.",
    strategy:
      "Audience development activity and promotional campaigns were supported by creative planning and performance analysis.",
    outcomeDetail:
      "The brand developed a substantially larger audience base that could support future communication and marketing initiatives.",
    results: "Reported audience growth from 33,000 to 100,000+.",
    outcome: "Audience grown from 33K to 100K+",
    metric: { value: "100K+", label: "Audience, from 33K" },
    visual: { tone: "paper", motif: "nodes" },
    cover: null,
    gallery: [],
    technology: ["Meta Ads", "Audience Analytics"],
  },
  {
    slug: "real-estate-lead-generation",
    number: "05",
    kind: "campaign",
    title: "Real Estate Lead Generation",
    category: "Real Estate",
    industry: "Real Estate",
    services: ["Google Search", "Meta Lead Ads", "Landing Pages", "Analytics"],
    description: "A structured lead-generation framework for property sales teams.",
    challenge:
      "Help property businesses attract relevant prospective buyers and generate enquiries that can be followed up by sales teams.",
    strategy:
      "The campaign framework included location-oriented audience planning, property-specific messaging, lead capture, conversion measurement, and ongoing evaluation of enquiry quality.",
    outcomeDetail:
      "A structured lead-generation process can improve visibility into enquiry sources and provide a basis for optimizing cost and lead quality.",
    results: null,
    outcome: "Structured, measurable enquiry pipeline",
    visual: { tone: "dark", motif: "funnel" },
    cover: null,
    gallery: [],
    technology: ["Google Ads", "Meta Lead Ads", "GA4"],
  },
  {
    slug: "refurbished-electronics-retail",
    number: "06",
    kind: "campaign",
    title: "Refurbished Electronics Retail",
    category: "Technology Retail",
    industry: "Android Devices & Refurbished Electronics",
    services: ["Paid Search", "Social Campaigns", "Remarketing"],
    description: "Building confidence in refurbished devices and matching buyers to offers.",
    challenge:
      "Build confidence in refurbished products and help prospective customers discover relevant device offers.",
    strategy:
      "Campaign messaging was organized around product categories, value propositions, affordability, and purchase intent. Paid search, social campaigns, and remarketing were considered as complementary acquisition channels.",
    outcomeDetail:
      "The approach was designed to connect interested audiences with relevant products and support enquiries or purchases.",
    results: null,
    outcome: "Intent-led acquisition across channels",
    visual: { tone: "blue", motif: "grid" },
    cover: null,
    gallery: [],
    technology: ["Google Ads", "Meta Ads", "Remarketing"],
  },
  {
    slug: "healthcare-skincare",
    number: "07",
    kind: "campaign",
    title: "Healthcare, Clinics & Skincare",
    category: "Healthcare & Aesthetics",
    industry: "Clinics, Skincare & Aesthetic Services",
    services: ["Geo-targeted Campaigns", "Service Messaging", "Enquiry Measurement"],
    description: "Clear, compliant service communication for clinics in India and the USA.",
    challenge:
      "Communicate services clearly, increase awareness, and attract relevant enquiries while respecting advertising and privacy requirements.",
    strategy:
      "Campaign planning combined audience and geographic targeting, service-focused messaging, landing-page considerations, and enquiry measurement — for domestic and USA-focused campaigns where applicable.",
    outcomeDetail:
      "The work supported a more structured digital presence and a measurable approach to audience engagement and enquiry generation.",
    results: null,
    outcome: "Measurable enquiry generation, two markets",
    visual: { tone: "paper", motif: "rings" },
    cover: null,
    gallery: [],
    technology: ["Google Ads", "Meta Ads", "GA4"],
  },

  /* ── Technology & digital solutions ────────────────────────── */
  {
    slug: "business-website-conversion",
    number: "08",
    kind: "solution",
    title: "Business Website & Conversion Experience",
    category: "Websites",
    industry: "Any service business",
    services: ["Responsive Web Design", "UI/UX", "Landing Pages", "Enquiry Forms", "Analytics"],
    description: "A professional presence that makes the next step obvious.",
    challenge:
      "A business needs a professional online presence that communicates its offering clearly and makes the next step easy for potential customers.",
    strategy:
      "Plan a responsive information architecture, clear service pages, conversion-focused calls to action, accessible layouts, enquiry forms, and analytics integration.",
    outcomeDetail: "A cohesive digital experience designed to improve clarity, usability, and measurable customer actions.",
    results: null,
    outcome: "Clarity, usability, measurable actions",
    visual: { tone: "dark", motif: "grid" },
    cover: null,
    gallery: [],
    technology: ["Next.js", "React", "GA4"],
  },
  {
    slug: "custom-web-application",
    number: "09",
    kind: "solution",
    title: "Custom Web Application & API Integration",
    category: "Web Applications",
    industry: "Operations-heavy businesses",
    services: ["Frontend", "Backend Services", "API Integration", "Database Design"],
    description: "Tailored applications for workflows a brochure site can't handle.",
    challenge:
      "A business needs a tailored application or connected digital workflow beyond the capabilities of a standard brochure website.",
    strategy:
      "Define user roles and workflows, design the application architecture, implement frontend and backend components, connect APIs and databases, and test key user journeys.",
    outcomeDetail: "A solution aligned with the business process, designed for maintainability and future enhancement.",
    results: null,
    outcome: "Built around the real business process",
    visual: { tone: "blue", motif: "nodes" },
    cover: null,
    gallery: [],
    technology: ["Next.js", "TypeScript", "Node.js", "REST APIs"],
  },
  {
    slug: "lead-management-whatsapp",
    number: "10",
    kind: "solution",
    title: "Lead Management & WhatsApp Automation",
    category: "Automation",
    industry: "Lead-driven sales teams",
    services: ["Lead Capture", "WhatsApp Business", "CRM Workflows", "Automated Follow-ups"],
    description: "Every enquiry, from every channel, in one followed-up workflow.",
    challenge: "Enquiries arriving from multiple channels can be difficult to organize and follow up consistently.",
    strategy:
      "Connect lead sources to a central workflow, define routing and notification rules, and configure approved messaging integrations where suitable.",
    outcomeDetail:
      "A more structured enquiry process with improved visibility and less repetitive manual administration.",
    results: null,
    outcome: "Less manual follow-up, more visibility",
    visual: { tone: "dark", motif: "funnel" },
    cover: null,
    gallery: [],
    technology: ["WhatsApp Business API", "CRM", "Webhooks"],
  },
  {
    slug: "analytics-reporting-dashboard",
    number: "11",
    kind: "solution",
    title: "Analytics, Tracking & Reporting",
    category: "Measurement",
    industry: "Marketing-led businesses",
    services: ["GA4", "Google Tag Manager", "Meta Pixel", "Event Tracking", "Reporting"],
    description: "One consistent view of campaigns and customer actions.",
    challenge:
      "A business needs a clearer view of campaign performance and the actions users take across its digital properties.",
    strategy:
      "Map key conversion events, configure and validate tracking, consolidate relevant metrics, and create reporting views for business decisions.",
    outcomeDetail: "More consistent measurement and better visibility into marketing and website performance.",
    results: null,
    outcome: "Consistent measurement, clearer decisions",
    visual: { tone: "paper", motif: "bars" },
    cover: null,
    gallery: [],
    technology: ["GA4", "Google Tag Manager", "Meta Pixel", "Microsoft Clarity", "Hotjar"],
  },
  {
    slug: "ecommerce-purchase-journey",
    number: "12",
    kind: "solution",
    title: "E-commerce Store & Purchase Journey",
    category: "E-commerce",
    industry: "Online retail",
    services: ["Storefronts", "Catalogue Structure", "Checkout Integrations", "Conversion Optimization"],
    description: "A storefront built for discovery, confidence and checkout.",
    challenge: "A business wants to sell online with a clear product discovery and purchase experience.",
    strategy:
      "Structure product categories, improve product page information, support mobile usability, integrate appropriate commerce services, and review the purchase journey.",
    outcomeDetail:
      "A digital commerce foundation designed to support product discovery, customer confidence, and online transactions.",
    results: null,
    outcome: "Discovery to checkout, on mobile first",
    visual: { tone: "blue", motif: "rings" },
    cover: null,
    gallery: [],
    technology: ["Shopify", "Payment Gateways", "GA4"],
  },
];

/** Every project has a page. */
export const publishedProjects = projects;

export const studioProjects = projects.filter((p) => p.kind === "studio");
export const campaignProjects = projects.filter((p) => p.kind === "campaign");
export const solutionProjects = projects.filter((p) => p.kind === "solution");

export const KIND_LABEL: Record<ProjectKind, string> = {
  studio: "Studio",
  campaign: "Campaign Results",
  solution: "Technology Solution",
};

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
