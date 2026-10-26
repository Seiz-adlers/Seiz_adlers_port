import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { approachPrinciples } from "@/data/proof";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Real client quotes from data/testimonials.ts. Until one exists, the
 * section shows how we work — written as our principles, never styled as
 * a client's words.
 */
export function Testimonials({ index }: { index: string }) {
  if (testimonials.length > 0) {
    return (
      <section className="border-t border-hair py-16 md:py-24">
        <div className="container-fluid">
          <Reveal>
            <SectionLabel index={index} label="Testimonials" />
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {testimonials.map((t) => (
              <Reveal key={`${t.name}-${t.company}`}>
                <figure>
                  <blockquote className="font-display text-xl font-medium leading-snug text-ink md:text-2xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    {t.photo && (
                      <Image src={t.photo} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                    )}
                    <span className="text-sm text-ink-secondary">
                      <span className="block text-ink">{t.name}</span>
                      {t.role}, {t.company}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-hair py-16 md:py-24">
      <div className="container-fluid">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel index={index} label="Our Approach" />
            <h2 className="mt-5 font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-semibold uppercase leading-[1.05] tracking-tight text-ink">
              What our work focuses on.
            </h2>
          </div>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-muted">
            Client testimonials — coming soon
          </p>
        </Reveal>

        <div className="mt-12 grid border-t border-hair md:grid-cols-3">
          {approachPrinciples.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.08}
              className="border-b border-hair py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
            >
              <span className="font-display text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-tight text-ink">{p.title}</h3>
              <p className="mt-4 text-[clamp(1.05rem,1.5vw,1.25rem)] leading-relaxed text-ink-secondary">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
