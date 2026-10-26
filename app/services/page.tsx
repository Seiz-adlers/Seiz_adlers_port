import { services } from "@/data/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServicesAccordion } from "@/components/services/ServicesAccordion";
import { ServicesAtmosphere } from "@/components/services/ServicesAtmosphere";
import { BuiltToPerform } from "@/components/services/BuiltToPerform";
import { ServicePillars, AdditionalServices } from "@/components/services/ServicePillars";
import { Reveal } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description: "Brand identity, website development, SEO, performance marketing, content and automation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesAtmosphere />

      <div className="relative z-10">
        <section className="border-b border-hair pb-10 pt-28 md:pb-14 md:pt-36">
          <div className="container-fluid">
            <Reveal>
              <SectionLabel index="01" label="Services" />
              <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold uppercase leading-[0.98] tracking-tight text-ink">
                What We Build
              </h1>
              <p className="mt-6 max-w-md text-lg text-ink-secondary">
                From the first idea to measurable growth.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container-fluid">
            <Reveal>
              <ServicesAccordion services={services} />
            </Reveal>
          </div>
        </section>

        <ServicePillars index="02" />
        <AdditionalServices index="03" />
        <BuiltToPerform index="04" />
      </div>
    </>
  );
}
