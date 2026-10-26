import type { Metadata } from "next";
import { Inter, Space_Grotesk, Caveat, Instrument_Serif } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { RouteTheme } from "@/components/motion/RouteTheme";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { siteConfig } from "@/data/site";
import { buildMetadata, organizationSchema, websiteSchema } from "@/lib/seo/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["600"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: siteConfig.tagline,
    description: siteConfig.description,
    path: "/",
  }),
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${caveat.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var p=location.pathname;var l=p.indexOf('/services')===0||p.indexOf('/insights')===0;document.documentElement.dataset.theme=l?'light':'dark';}catch(e){}})()",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-20 rounded bg-blue px-4 py-2 text-sm text-ink transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <PageViewTracker />
        <CustomCursor />
        <RouteTheme />
        <SmoothScroll>
          <Navbar />
          <main id="main-content">{children}</main>
          <div id="site-footer" data-theme="dark" className="bg-bg-secondary">
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
