import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Tell us what you're building, where you're stuck, or where you want to go.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="border-b border-hair pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="container-fluid grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <div>
          <Reveal>
            <SectionLabel index="01" label="Contact" />
            <h1 className="mt-6 text-balance font-display text-[clamp(2.25rem,5.5vw,4rem)] font-semibold uppercase leading-[1.02] tracking-tight text-ink">
              Let&rsquo;s Build
              <br />
              Something Great.
            </h1>
            <p className="mt-6 max-w-sm text-lg text-ink-secondary">
              Tell us what you&rsquo;re building, where you&rsquo;re stuck, or where you want to
              go.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 space-y-4 border-t border-hair pt-8 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="block text-ink-secondary hover:text-ink">
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="block text-ink-secondary hover:text-ink">
              {siteConfig.phone}
            </a>
          </Reveal>

          <Reveal delay={0.2} className="mt-12 hidden md:block">
            <div className="relative aspect-[1063/626] w-full max-w-xs -rotate-2 overflow-hidden border border-hair shadow-2xl shadow-black/40 transition-transform duration-500 hover:rotate-0">
              <Image src="/card-details.jpg" alt="Seiz Adlers contact card" fill sizes="320px" className="object-cover" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="border border-hair p-6 md:p-10">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
