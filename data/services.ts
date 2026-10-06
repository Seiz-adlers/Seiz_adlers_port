export interface Service {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  approach: string;
  capabilities: string[];
  process: { step: string; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  featured: boolean;
}

export const services: Service[] = [
  {
    slug: "brand-identity",
    number: "01",
    title: "Brand Identity",
    tagline: "Stand out. Be remembered.",
    description:
      "We build the strategic and visual foundation that makes a business recognizable, credible and memorable — before a single pixel of a website exists.",
    problem:
      "Most businesses look like everyone else in their category — same colors, same tone, same forgettable presentation.",
    approach:
      "We start with strategy and positioning, then build a visual and verbal system distinct enough to be remembered on sight.",
    capabilities: [
      "Strategy",
      "Naming",
      "Visual Identity",
      "Typography",
      "Art Direction",
      "Brand Guidelines",
    ],
    process: [
      { step: "01", title: "Discover", description: "We study the business, the market and the audience it needs to reach." },
      { step: "02", title: "Define", description: "We shape positioning and a point of view worth remembering." },
      { step: "03", title: "Design", description: "We translate strategy into a visual and verbal identity system." },
      { step: "04", title: "Deliver", description: "We hand over a guideline that keeps the brand consistent as it grows." },
    ],
    faq: [
      { question: "Do you design logos only?", answer: "No — a logo is one output of a wider identity system covering typography, color, tone of voice and application guidelines." },
      { question: "How involved will we be?", answer: "Strategy and direction checkpoints are collaborative; you review and approve at each defined stage." },
    ],
    featured: true,
  },
  {
    slug: "website-development",
    number: "02",
    title: "Website Development",
    tagline: "Build. Optimize. Scale.",
    description:
      "We engineer fast, accessible, production-grade websites and web products built on modern frameworks — designed to perform, not just to look good.",
    problem:
      "A beautiful website that loads slowly, breaks on mobile or can't be updated is a liability, not an asset.",
    approach:
      "We design and engineer in the same system, so every interface decision is validated against real performance and accessibility constraints.",
    capabilities: [
      "Product Strategy",
      "UX Architecture",
      "Design Systems",
      "Next.js Engineering",
      "CMS Integration",
      "Performance Engineering",
    ],
    process: [
      { step: "01", title: "Discover", description: "We map goals, content and technical requirements." },
      { step: "02", title: "Design", description: "We design interfaces around clarity, hierarchy and conversion." },
      { step: "03", title: "Develop", description: "We build with modern, maintainable, type-safe code." },
      { step: "04", title: "Deploy", description: "We launch, monitor and hand over a scalable foundation." },
    ],
    faq: [
      { question: "What do you build on?", answer: "Next.js and TypeScript for the frontend, with a CMS-ready architecture so content can scale independently of code." },
      { question: "Do you handle hosting?", answer: "We can advise and configure hosting, but final infrastructure ownership is agreed per project." },
    ],
    featured: true,
  },
  {
    slug: "seo",
    number: "03",
    title: "SEO",
    tagline: "Rank higher. Grow faster.",
    description:
      "We build technical and content foundations that help the right audience find the business through search — measured, not guessed.",
    problem:
      "Traffic that doesn't convert, or an audience that can't find the business at all, both point to the same root cause: weak search foundations.",
    approach:
      "We fix the technical foundation first, then build the content and structure that search engines and real people both trust.",
    capabilities: [
      "Technical SEO",
      "Site Architecture",
      "Content Strategy",
      "On-Page Optimization",
      "Structured Data",
      "Performance Audits",
    ],
    process: [
      { step: "01", title: "Audit", description: "We assess technical health, content gaps and competitive position." },
      { step: "02", title: "Plan", description: "We prioritize the fixes and content that move the needle." },
      { step: "03", title: "Implement", description: "We execute technical, on-page and structural improvements." },
      { step: "04", title: "Measure", description: "We track rankings and traffic against defined goals." },
    ],
    faq: [
      { question: "How fast will we see results?", answer: "SEO compounds over time; timelines depend on the site's current state and competitive landscape." },
      { question: "Do you guarantee rankings?", answer: "No ethical SEO practice can guarantee specific rankings — we focus on sustainable, measurable growth." },
    ],
    featured: true,
  },
  {
    slug: "performance-marketing",
    number: "04",
    title: "Performance Marketing",
    tagline: "Drive. Convert. Grow.",
    description:
      "We plan and run paid acquisition built around measurable outcomes — every rupee spent tied back to a business result.",
    problem:
      "Ad spend without a clear link to business outcomes is just an expense — not growth.",
    approach:
      "We build every campaign around a defined outcome, then optimize continuously against that number, not vanity metrics.",
    capabilities: [
      "Paid Search",
      "Paid Social",
      "Funnel Strategy",
      "Landing Page Design",
      "Conversion Tracking",
      "Budget Optimization",
    ],
    process: [
      { step: "01", title: "Strategy", description: "We define channels, audiences and success metrics." },
      { step: "02", title: "Launch", description: "We build campaigns and the assets that support them." },
      { step: "03", title: "Optimize", description: "We test, refine and reallocate spend toward what works." },
      { step: "04", title: "Report", description: "We report clearly against agreed business outcomes." },
    ],
    faq: [
      { question: "What's the minimum budget?", answer: "Budgets are scoped per business and goal — discussed directly during the project conversation." },
      { question: "Which platforms do you run?", answer: "Platform selection depends on where the target audience actually spends attention." },
    ],
    featured: true,
  },
  {
    slug: "content-creation",
    number: "05",
    title: "Content Creation",
    tagline: "Create. Captivate. Convert.",
    description:
      "We produce the visual and written content that gives a brand a consistent voice across every channel it shows up in.",
    problem:
      "Inconsistent content across channels makes even a strong brand feel scattered and forgettable.",
    approach:
      "We build a content system tied to the brand strategy, so every piece — big or small — reinforces the same identity.",
    capabilities: [
      "Content Strategy",
      "Copywriting",
      "Visual Content",
      "Social Content",
      "Video Direction",
      "Editorial Systems",
    ],
    process: [
      { step: "01", title: "Strategy", description: "We define voice, themes and channel priorities." },
      { step: "02", title: "Produce", description: "We create content aligned to the brand system." },
      { step: "03", title: "Publish", description: "We deploy content on the channels that matter." },
      { step: "04", title: "Refine", description: "We learn from performance and adjust direction." },
    ],
    faq: [
      { question: "Do you handle photography and video?", answer: "Production capability is scoped per project based on the specific deliverables required." },
    ],
    featured: true,
  },
  {
    slug: "marketing-automation",
    number: "06",
    title: "Marketing Automation",
    tagline: "Automate. Nurture. Scale.",
    description:
      "We connect the systems that turn manual marketing effort into repeatable, scalable growth infrastructure.",
    problem:
      "Manual, one-off marketing effort doesn't scale with the business — it just adds more work per lead.",
    approach:
      "We connect the tools already in use into workflows that run without constant manual input.",
    capabilities: [
      "Lifecycle Mapping",
      "Email & CRM Systems",
      "Lead Nurturing",
      "Workflow Automation",
      "Analytics Integration",
      "Systems Documentation",
    ],
    process: [
      { step: "01", title: "Map", description: "We map the customer journey and where automation adds value." },
      { step: "02", title: "Build", description: "We configure the tools and workflows behind the journey." },
      { step: "03", title: "Connect", description: "We integrate data across marketing and business systems." },
      { step: "04", title: "Improve", description: "We monitor and refine as the business scales." },
    ],
    faq: [
      { question: "Which tools do you work with?", answer: "Tooling is selected based on the business's existing stack and scale requirements." },
    ],
    featured: true,
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
