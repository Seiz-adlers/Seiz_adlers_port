import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms governing the use of this website.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <section className="border-b border-hair pb-16 pt-28 md:pt-36">
      <div className="container-fluid max-w-2xl">
        <h1 className="font-display text-4xl font-semibold uppercase tracking-tight text-ink">
          Terms of Service
        </h1>
        <p className="mt-8 text-ink-secondary">
          Formal terms of service are being finalized. This website and its content are provided
          by Seiz Adlers for informational purposes.
        </p>
        <p className="mt-6 text-ink-secondary">
          For questions, contact{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-blue-bright hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
