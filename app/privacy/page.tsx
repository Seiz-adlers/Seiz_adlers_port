import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Seiz Adlers handles information submitted through this website.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <section className="border-b border-hair pb-16 pt-28 md:pt-36">
      <div className="container-fluid max-w-2xl">
        <h1 className="font-display text-4xl font-semibold uppercase tracking-tight text-ink">
          Privacy Policy
        </h1>
        <p className="mt-8 text-ink-secondary">
          A full privacy policy is being finalized. In the meantime, information submitted
          through the contact form on this site is used only to respond to your enquiry and is
          not sold or shared with third parties.
        </p>
        <p className="mt-6 text-ink-secondary">
          For questions about your data, contact{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-blue-bright hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
