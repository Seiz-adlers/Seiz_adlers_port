import { studioProjects, campaignProjects, solutionProjects } from "@/data/projects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard, SolutionRow } from "@/components/work/ProjectCard";
import { ProofBand } from "@/components/work/ProofBand";
import { Testimonials } from "@/components/work/Testimonials";
import { FinalCTA } from "@/components/contact/FinalCTA";
import { ThreadLines } from "@/components/hero/ThreadLines";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Work",
  description:
    "Selected work by Seiz Adlers — brand and digital experience, performance campaign results, and technology solutions.",
  path: "/work",
});

/** Masked line reveal — the word slides up from behind its own baseline (CSS, see globals.css). */
function RiseLine({ children, ms }: { children: string; ms: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <span className="hero-rise block" style={{ animationDelay: `${ms}ms` }}>
        {children}
      </span>
    </span>
  );
}

function GroupHeading({ index, label, title, intro }: { index: string; label: string; title: string; intro: string }) {
  return (
    <Reveal className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-end md:gap-16">
      <div>
        <SectionLabel index={index} label={label} />
        <h2 className="mt-5 font-sans text-[clamp(2rem,4vw,3.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.045em] text-ink">
          {title}
        </h2>
      </div>
      <p className="max-w-xl text-ink-secondary md:justify-self-end">{intro}</p>
    </Reveal>
  );
}

export default function WorkPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-hair pb-12 pt-28 md:pb-16 md:pt-36">
        {/* the hero's hairline threads, parting around the cursor */}
        <ThreadLines className="-z-10" color="rgba(255,255,255,0.07)" />
        <div className="container-fluid grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <div>
            <div className="hero-fade" style={{ animationDelay: "80ms" }}>
              <SectionLabel index="01" label="Work" />
            </div>
            <h1 className="mt-8 font-sans text-[clamp(3.25rem,10vw,9rem)] font-bold uppercase leading-[0.86] tracking-[-0.055em] text-ink">
              <RiseLine ms={150}>Selected</RiseLine>
              <RiseLine ms={260}>Work.</RiseLine>
            </h1>
          </div>

          <div className="hero-fade lg:pb-3" style={{ animationDelay: "550ms" }}>
            <p className="max-w-md text-lg leading-relaxed text-ink-secondary">
              Campaign results, technology solutions and our own brand — the work that shows how we think.
            </p>
            <nav aria-label="Work categories" className="mt-8 grid grid-cols-3 border-t border-hair">
              {[
                { n: studioProjects.length, label: "Brand", href: "#studio" },
                { n: campaignProjects.length, label: "Campaigns", href: "#campaigns" },
                { n: solutionProjects.length, label: "Technology", href: "#technology" },
              ].map((c) => (
                <a key={c.href} href={c.href} className="group pt-4 pr-4">
                  <span className="block font-sans text-3xl font-bold tabular-nums tracking-[-0.04em] text-ink transition-colors group-hover:text-accent">
                    {String(c.n).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted transition-colors group-hover:text-ink">
                    {c.label} ↓
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Studio */}
      <section id="studio" className="scroll-mt-24 py-14 md:py-20">
        <div className="container-fluid">
          {studioProjects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} featured priority headingLevel="h2" />
            </Reveal>
          ))}
        </div>
      </section>

      <ProofBand />

      {/* Campaign results */}
      <section id="campaigns" className="scroll-mt-24 border-t border-hair py-16 md:py-24">
        <div className="container-fluid">
          <GroupHeading
            index="02"
            label="Campaign Results"
            title="Performance, measured."
            intro="Paid acquisition, audience growth and lead generation across six industries. Client names are withheld; results are as reported."
          />
          <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2">
            {campaignProjects.map((project, i) => (
              // Offset alternate cards so the index reads editorial, not as a grid.
              <Reveal key={project.slug} delay={(i % 2) * 0.08} className={i % 2 === 1 ? "md:mt-24" : undefined}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology solutions */}
      <section id="technology" className="scroll-mt-24 border-t border-hair bg-bg-secondary py-16 md:py-24">
        <div className="container-fluid">
          <GroupHeading
            index="03"
            label="Technology"
            title="Technology & digital solutions."
            intro="Websites, applications, integrations and measurement — the systems we build behind the campaigns."
          />
          <div className="mt-12 border-t border-hair">
            {solutionProjects.map((project) => (
              <Reveal key={project.slug}>
                <SolutionRow project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials index="04" />
      <FinalCTA />
    </>
  );
}
