/**
 * Headline proof points, as reported by the team. Edit or remove entries
 * here — the homepage band renders whatever this list contains.
 */
export const proofPoints = [
  { value: "₹30L+", label: "Monthly ad spend managed" },
  { value: "12", label: "Ad accounts — 4 Google, 8 Meta" },
  { value: "4×", label: "ROAS on D2C campaigns" },
  { value: "10×", label: "ROAS on selected FMCG campaigns" },
  { value: "100K+", label: "Audience grown, from 33K" },
] as const;

export const industries = [
  { name: "D2C E-commerce", slug: "d2c-ecommerce-growth" },
  { name: "FMCG", slug: "fmcg-product-discovery" },
  { name: "Real Estate", slug: "real-estate-lead-generation" },
  { name: "Technology Retail", slug: "refurbished-electronics-retail" },
  { name: "Healthcare & Skincare", slug: "healthcare-skincare" },
  { name: "Consumer Brands", slug: "consumer-brand-audience" },
] as const;

/** How Seiz Adlers works — brand statements, not client quotes. */
export const approachPrinciples = [
  {
    title: "Brand & Digital Experience",
    body: "A strong digital presence starts with a clear strategy, purposeful creative, and a website experience designed around the customer.",
  },
  {
    title: "Performance Marketing",
    body: "We connect campaign execution with measurement, using tracking and performance insights to guide smarter optimization decisions.",
  },
  {
    title: "Automation & Digital Operations",
    body: "From lead capture to follow-up workflows, we look for practical ways to reduce manual effort and make business processes easier to manage.",
  },
] as const;

export const servicePillars = [
  {
    title: "Creative & Marketing",
    description: "Identity, content and campaigns that make a brand recognisable — and remembered.",
    services: ["brand-identity", "content-creation", "performance-marketing"],
  },
  {
    title: "Technology & Automation",
    description: "Websites, applications and workflows engineered to perform and to scale.",
    services: ["website-development", "marketing-automation"],
  },
  {
    title: "Business Growth",
    description: "Search, measurement and optimisation that turn attention into revenue.",
    services: ["seo", "performance-marketing"],
  },
] as const;

export const additionalServices = [
  { title: "Website Performance & Technical Optimization", body: "Responsive behaviour, page speed, image optimization, accessibility and technical quality checks." },
  { title: "Marketing Attribution & Funnel Analysis", body: "Campaign sources, landing-page actions, lead stages and conversions measured together." },
  { title: "CRM & Third-party Integrations", body: "Forms, messaging services, CRM tools and business platforms connected to cut manual data handling." },
  { title: "AI-assisted Business Workflows", body: "Scoped uses like reporting assistance and content workflow support — with human review." },
  { title: "Ongoing Website Maintenance", body: "Updates, backups, monitoring, bug fixes and dependency maintenance." },
  { title: "E-commerce Optimization", body: "Product pages, checkout friction, catalogue structure, analytics and experimentation." },
  { title: "Executive Dashboards & Reporting", body: "Key business and campaign indicators organised into practical reporting views." },
] as const;
