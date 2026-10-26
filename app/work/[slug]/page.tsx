import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { publishedProjects, getProjectBySlug, projects, KIND_LABEL } from "@/data/projects";
import { ProjectCover } from "@/components/work/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { FinalCTA } from "@/components/contact/FinalCTA";
import { ViewTracker } from "@/components/analytics/ViewTracker";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo/metadata";
import { isPlaceholder } from "@/lib/utils/placeholder";

export function generateStaticParams() {
  return publishedProjects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return buildMetadata({ title: "Work", description: "", path: `/work/${params.slug}`, noIndex: true });
  return buildMetadata({
    title: `${project.title} — ${project.category}`,
    description: project.description,
    path: `/work/${project.slug}`,
    image: project.cover?.src,
  });
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const isStudio = project.kind === "studio";
  const meta = [
    { label: "Type", value: KIND_LABEL[project.kind] },
    { label: "Industry", value: project.industry },
    {
      label: isStudio ? "Services" : project.kind === "campaign" ? "Channels" : "Capabilities",
      value: project.services.join(", "),
    },
    project.timeline && { label: "Timeline", value: isPlaceholder(project.timeline) ? "To be confirmed" : project.timeline },
    project.team && { label: "Team", value: project.team },
  ].filter((m): m is { label: string; value: string } => Boolean(m));

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const chapters = [
    { label: "Challenge", body: project.challenge },
    { label: "Objective", body: project.objective },
    { label: isStudio ? "Strategy" : "Strategy & Execution", body: project.strategy },
    { label: "Creative Direction", body: project.creativeDirection },
    { label: "UX Approach", body: project.uxApproach },
    { label: "Design System", body: project.designSystem },
    { label: "Development", body: project.development },
    { label: "Outcome", body: project.outcomeDetail },
  ].filter((c): c is { label: string; body: string } => Boolean(c.body));

  // Section numbers follow on from the chapters, skipping sections a project doesn't have.
  const showResults = isStudio || Boolean(project.results);
  let counter = chapters.length + 1;
  const nextIndex = () => String(++counter).padStart(2, "0");
  const resultsIndex = showResults ? nextIndex() : "";
  const galleryIndex = project.gallery.length > 0 ? nextIndex() : "";
  const technologyIndex = project.technology.length > 0 ? nextIndex() : "";

  return (
    <>
      <ViewTracker event="project_view" slug={project.slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Work", path: "/work" },
              { name: project.title, path: `/work/${project.slug}` },
            ]),
          ),
        }}
      />

      {/* Hero */}
      <section className="pb-12 pt-28 md:pb-16 md:pt-36">
        <div className="container-fluid">
          <Reveal>
            <Link
              href="/work"
              className="text-[13px] font-medium uppercase tracking-[0.1em] text-ink-secondary hover:text-ink"
            >
              ← All Work
            </Link>
            <p className="mt-8 text-[12px] font-medium uppercase tracking-[0.2em] text-accent">
              {project.number} — {project.category}
            </p>
            <h1
              className={
                project.title.length > 16
                  ? "mt-4 max-w-5xl text-balance font-display text-[clamp(2.25rem,6vw,5.5rem)] font-semibold uppercase leading-[0.95] tracking-tight text-ink"
                  : "mt-4 font-display text-[clamp(3rem,10vw,9rem)] font-semibold uppercase leading-[0.9] tracking-tight text-ink"
              }
            >
              {project.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-secondary md:text-xl">{project.description}</p>
          </Reveal>
        </div>
      </section>

      <Reveal className="container-fluid">
        <div className="relative aspect-[4/3] overflow-hidden border border-hair bg-surface md:aspect-[16/9]">
          {isStudio && project.cover ? (
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              priority
              sizes="(min-width: 1440px) 1312px, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <ProjectCover project={project} priority sizes="(min-width: 1440px) 1312px, 100vw" />
          )}
        </div>
      </Reveal>

      {/* Overview / metadata */}
      <section className="py-14 md:py-20">
        <div className="container-fluid">
          <SectionLabel index="01" label="Project Overview" />
          <dl
            className={`mt-8 grid gap-px overflow-hidden border border-hair bg-[var(--hair)] sm:grid-cols-2 ${
              ({ 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5" } as Record<number, string>)[meta.length] ?? "lg:grid-cols-4"
            }`}
          >
            {meta.map((m) => (
              <div key={m.label} className="bg-bg p-6">
                <dt className="text-[12px] font-medium uppercase tracking-[0.15em] text-ink-muted">{m.label}</dt>
                <dd className="mt-3 text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Story chapters */}
      <section className="border-t border-hair">
        <div className="container-fluid divide-y divide-hair">
          {chapters.map((chapter, i) => (
            <Reveal key={chapter.label} className="grid gap-6 py-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16 md:py-16">
              <SectionLabel index={String(i + 2).padStart(2, "0")} label={chapter.label} />
              <p className="max-w-3xl text-balance font-display text-[clamp(1.35rem,2.6vw,2rem)] font-medium leading-snug text-ink">
                {chapter.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Results — as reported, never estimated */}
      {showResults && (
        <section className="border-t border-hair bg-bg-secondary py-14 md:py-20">
          <div className="container-fluid grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
            <SectionLabel index={resultsIndex} label="Results" />
            <div>
              {project.metric && (
                <p className="mb-6 flex items-baseline gap-5">
                  <span className="font-sans text-[clamp(4rem,10vw,8rem)] font-bold leading-none tracking-[-0.06em] text-accent">
                    {project.metric.value}
                  </span>
                  <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                    {project.metric.label}
                  </span>
                </p>
              )}
              <p className="font-display text-[clamp(1.35rem,2.6vw,2rem)] font-medium leading-snug text-ink-secondary">
                {project.results ?? "Results will be published after launch."}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="border-t border-hair py-14 md:py-20">
          <div className="container-fluid">
            <SectionLabel index={galleryIndex} label="Gallery" />
            <div className="mt-10 grid items-center gap-8 md:grid-cols-12">
              {project.gallery.map((image, i) => (
                <Reveal
                  key={image.src}
                  delay={i * 0.08}
                  className={
                    image.height > image.width
                      ? "md:col-span-4"
                      : i % 2 === 0
                        ? "md:col-span-8"
                        : "md:col-span-7 md:col-start-6"
                  }
                >
                  <div className="overflow-hidden border border-hair bg-surface">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="(min-width: 768px) 60vw, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technology */}
      {project.technology.length > 0 && (
        <section className="border-t border-hair py-14 md:py-20">
          <div className="container-fluid grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
            <SectionLabel index={technologyIndex} label="Technology" />
            <ul className="flex flex-wrap gap-3">
              {project.technology.map((tech) => (
                <li key={tech} className="border border-hair px-4 py-2 text-sm text-ink-secondary">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Next case study */}
      <section className="border-t border-hair">
        <Link
          href={`/work/${next.slug}`}
          className="group container-fluid flex flex-col gap-4 py-14 md:flex-row md:items-end md:justify-between md:py-20"
        >
          <span>
            <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-ink-muted">Next — {KIND_LABEL[next.kind]}</span>
            <span className="mt-4 block font-display text-[clamp(1.75rem,4.5vw,3.75rem)] font-semibold uppercase leading-[1] tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
              {next.title}
            </span>
          </span>
          <span aria-hidden className="font-display text-3xl text-ink-muted transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent">
            →
          </span>
        </Link>
      </section>

      <FinalCTA />
    </>
  );
}
