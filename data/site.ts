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
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;

export const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;
