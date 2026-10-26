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

const channels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { label: "Instagram", value: siteConfig.instagramHandle, href: siteConfig.instagram, external: true },
];

const steps = ["We read every message ourselves.", "We reply to set up a short call.", "We shape a plan around your goals."];

export default function ContactPage() {
  return (
    <section className="pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="container-fluid grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-20">
        <div className="flex flex-col">
          <Reveal>
            <SectionLabel index="01" label="Contact" />
            <h1 className="mt-6 text-balance font-display text-[clamp(2.25rem,5.5vw,4rem)] font-semibold uppercase leading-[1.02] tracking-tight text-ink">
              Let&rsquo;s Build
              <br />
              Something Great.
            </h1>
            <p className="mt-6 max-w-sm text-lg text-ink-secondary">
              Tell us what you&rsquo;re building, where you&rsquo;re stuck, or where you want to go.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <ol className="space-y-4">
              {steps.map((step, i) => (
                <li key={step} className="flex items-baseline gap-4 text-ink-secondary">
                  <span className="font-display text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 border-t border-hair">
            <ul>
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex min-h-[56px] items-center justify-between gap-6 border-b border-hair"
                  >
                    <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">{c.label}</span>
                    <span className="flex items-center gap-3 text-ink transition-colors group-hover:text-accent">
                      {c.value}
                      <span aria-hidden className="text-ink-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">
                        →
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-auto hidden pt-12 lg:block">
            <Image src="/logo-mark.png" alt="" width={417} height={379} className="w-12 opacity-60" />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="card relative rounded-sm p-6 sm:p-8 md:p-12">
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Start a project</p>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
