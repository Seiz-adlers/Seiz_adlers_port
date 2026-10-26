import Link from "next/link";
import { studioProjects, campaignProjects } from "@/data/projects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";

/** Homepage highlight: our own studio work plus the two strongest campaign results. */
export function SelectedWork({ index }: { index: string }) {
  const featured = studioProjects[0];
  const highlights = campaignProjects.filter((p) => p.metric).slice(0, 2);

  return (
    <section id="selected-work" className="border-t border-hair py-16 md:py-24">
      <div className="container-fluid">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionLabel index={index} label="Selected Work" />
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold uppercase leading-[1.05] tracking-tight text-ink">
              Selected Work
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-secondary">Good work speaks for itself.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/work"
              className="inline-flex min-h-[44px] items-center gap-2 text-[13px] font-medium uppercase tracking-[0.1em] text-ink transition-colors hover:text-accent"
            >
              View All Work →
            </Link>
          </Reveal>
        </div>

        {featured && (
          <Reveal className="mt-14">
            <ProjectCard project={featured} featured />
          </Reveal>
        )}

        {highlights.length > 0 && (
          <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
            {highlights.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08} className={i === 1 ? "md:mt-24" : undefined}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
