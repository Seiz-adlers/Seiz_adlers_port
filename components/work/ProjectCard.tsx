import Image from "next/image";
import Link from "next/link";
import { KIND_LABEL, type Project } from "@/data/projects";
import { cn } from "@/lib/utils/cn";
import { BrandSystem, CaseVisual } from "@/components/work/ProjectVisual";

interface ProjectCardProps {
  project: Project;
  /** Featured cards run full-width with a cinematic crop. */
  featured?: boolean;
  /** Mark the cover as LCP when the card is above the fold. */
  priority?: boolean;
  headingLevel?: "h2" | "h3";
}

/** The cover for any project: brand board, coded visual, or image. */
export function ProjectCover({
  project,
  priority,
  sizes,
  compact = false,
}: {
  project: Project;
  priority?: boolean;
  sizes: string;
  compact?: boolean;
}) {
  if (project.coverVisual === "brand-system") return <BrandSystem />;
  if (project.visual)
    return <CaseVisual spec={project.visual} metric={project.metric} label={project.category} compact={compact} />;
  if (project.cover)
    return (
      <Image
        src={project.cover.src}
        alt={project.cover.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.03]"
      />
    );
  return null;
}

export function ProjectCard({ project, featured = false, priority = false, headingLevel = "h3" }: ProjectCardProps) {
  const Heading = headingLevel;

  return (
    <Link href={`/work/${project.slug}`} data-cursor="view" className="group block focus-visible:outline-offset-8">
      <div className={cn("relative overflow-hidden bg-surface", featured ? "aspect-[4/3] md:aspect-[16/9]" : "aspect-[4/3]")}>
        <ProjectCover
          project={project}
          priority={priority}
          sizes={featured ? "(min-width: 1440px) 1312px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
        />
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-10">
        <span className="font-display text-sm text-ink-muted">{project.number}</span>
        <div className="transition-transform duration-500 ease-premium group-hover:translate-x-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">{KIND_LABEL[project.kind]}</p>
          <Heading className="mt-2 font-display text-2xl font-semibold uppercase tracking-tight text-ink md:text-3xl">
            {project.title}
          </Heading>
          <p className="mt-2 text-sm text-ink-secondary">
            {project.industry} · {project.services.slice(0, 3).join(", ")}
          </p>
          <p className="mt-1 text-sm text-ink-muted">{project.outcome}</p>
        </div>
        <span className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.1em] text-ink">
          View Case Study
          <span aria-hidden className="transition-transform duration-300 ease-premium group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

/** Compact editorial row for technology solutions. */
export function SolutionRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="view"
      className="group grid items-center gap-5 border-b border-hair py-6 md:grid-cols-[3rem_minmax(0,1.2fr)_minmax(0,1fr)_7rem_auto] md:gap-8"
    >
      <span className="font-display text-sm text-ink-muted">{project.number}</span>
      <div className="transition-transform duration-500 ease-premium group-hover:translate-x-1">
        <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-ink md:text-2xl">{project.title}</h3>
        <p className="mt-1 text-sm text-ink-secondary">{project.description}</p>
      </div>
      <p className="text-sm text-ink-muted">{project.services.slice(0, 4).join(" · ")}</p>
      <div className="relative hidden aspect-[4/3] overflow-hidden md:block">
        <ProjectCover project={project} sizes="112px" compact />
      </div>
      <span aria-hidden className="text-ink-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
        →
      </span>
    </Link>
  );
}
