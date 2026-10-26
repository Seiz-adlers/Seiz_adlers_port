export interface HeroPortrait {
  /** Path under /public — must be licensed for use and free of baked-in text. */
  src: string;
  alt: string;
  /** Centre of the face, as a CSS position. */
  position?: string;
  scale?: number;
}

export const siteConfig = {
  name: "SEIZ ADLERS",
  legalName: "Seiz Adlers",
  tagline: "SEIZ ADLERS",
  description:
    "We create brands, digital experiences and growth systems that turn ambitious businesses into memorable ones.",
  url: "https://seizadlers.com",
  email: "seizadlers@gmail.com",
  phone: "+91 84289 92402",
  instagram: "https://instagram.com/seizadlers",
  instagramHandle: "@seizadlers",
  linkedin: undefined as string | undefined,
  ogImage: "/logo.jpg",
  /**
   * Portrait for the homepage hero's dark panel (and its small detail crop).
   * Decorative, so alt is empty. `position` is the face centre; `scale` the
   * close-up zoom.
   */
  heroPortrait: {
    src: "/imgg.jpg",
    alt: "",
    position: "50% 45%",
    scale: 1.25,
  } as HeroPortrait,
  keywords: [
    "brand identity",
    "website development",
    "digital agency",
    "growth systems",
    "SEO",
    "performance marketing",
  ],
} as const;

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;

export const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;
