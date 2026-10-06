import Link from "next/link";
import type { Service } from "@/data/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ServiceViewTracker } from "@/components/analytics/ServiceViewTracker";

export function ServicePageTemplate({ service, reversed }: { service: Service; reversed: boolean }) {
  return (
    <>
      <ServiceViewTracker slug={service.slug} />
      <section className="border-b border-hair pb-10 pt-28 md:pb-14 md:pt-36">
        <div className="container-fluid">
          <Reveal>
            <Link
              href="/services"
              className="text-[13px] font-medium uppercase tracking-[0.1em] text-ink-secondary hover:text-ink"
            >
              ← All Services
            </Link>
            <div className="mt-7 flex items-baseline gap-4">
              <span className="font-display text-2xl text-accent">{service.number}</span>
              <h1 className="font-display text-[clamp(2.25rem,6.5vw,5rem)] font-semibold uppercase leading-[0.98] tracking-tight text-ink">
                {service.title}
              </h1>
            </div>
            <p className="mt-6 max-w-xl text-lg text-ink-secondary">{service.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hair bg-bg-secondary py-12 md:py-16">
        <div className="container-fluid grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div className={reversed ? "lg:order-2" : "lg:order-1"}>
            <Reveal>
              <SectionLabel index="01" label="The Problem" />
              <p className="mt-5 text-2xl font-medium leading-snug text-ink text-balance md:text-3xl">
                {service.problem}
              </p>
            </Reveal>
          </div>
          <div className={reversed ? "lg:order-1" : "lg:order-2"}>
            <Reveal delay={0.1}>
              <SectionLabel index="02" label="Our Approach" />
              <p className="mt-5 text-lg leading-relaxed text-ink-secondary">{service.approach}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-hair py-12 md:py-16">
        <div className="container-fluid">
          <Reveal>
            <SectionLabel index="03" label="Capabilities" />
          </Reveal>
          <div className="card mt-8 grid gap-px overflow-hidden rounded-sm sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((cap, i) => (
              <Reveal key={cap} delay={i * 0.05} className="bg-bg p-6">
                <span className="font-display text-sm text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 font-display text-lg font-medium uppercase tracking-tight text-ink">{cap}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hair bg-bg-secondary py-12 md:py-16">
        <div className="container-fluid">
          <Reveal>
            <SectionLabel index="04" label="Process" />
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <span className="font-display text-sm text-accent">{step.step}</span>
                <h3 className="mt-3 font-display text-lg font-semibold uppercase tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink-secondary">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hair py-14 md:py-20">
        <div className="container-fluid text-center">
          <Reveal>
            <p className="font-hand text-3xl text-accent md:text-4xl">{service.tagline}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hair py-12 md:py-16">
        <div className="container-fluid max-w-3xl">
          <Reveal>
            <SectionLabel index="05" label="FAQ" />
          </Reveal>
          <div className="mt-8 divide-y divide-hair border-t border-hair">
            {service.faq.map((item, i) => (
              <Reveal key={item.question} delay={i * 0.06} className="py-6">
                <h3 className="font-display text-lg font-medium text-ink">{item.question}</h3>
                <p className="mt-3 text-ink-secondary">{item.answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center md:py-24">
        <div className="container-fluid">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-balance font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold uppercase leading-tight tracking-tight text-ink">
              Ready to build {service.title.toLowerCase()}?
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex justify-center">
            <Button href="/contact">Start a Project →</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
