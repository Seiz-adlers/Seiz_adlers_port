import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";

const principles = [
  {
    title: "One team, no handoffs",
    body: "Strategy, creative, growth and technology sit together, so ideas move from brief to launch without getting lost between departments.",
  },
  {
    title: "Equal weight, shared ownership",
    body: "Every discipline carries equal weight in how a project turns out. Everyone owns the result, not just their part of it.",
  },
  {
    title: "Complementary strengths",
    body: "We are a compact group with different skills and one standard, built around the work rather than around titles.",
  },
  {
    title: "Close to your business",
    body: "You work with the people doing the work, with clear communication and measurable outcomes at every step.",
  },
];

export function TeamPhilosophy({ index = "03" }: { index?: string }) {
  return (
    <section className="border-b border-hair bg-bg-secondary py-14 md:py-20">
      <div className="container-fluid grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <SectionLabel index={index} label="Team Philosophy" />
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-secondary">
            Titles describe responsibility, not standing. Every discipline here - creative,
            growth, engineering, execution - carries equal weight in how a project turns out.
            That&rsquo;s a working philosophy, not an org chart.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="divide-y divide-hair border-t border-hair">
            {principles.map((p) => (
              <li key={p.title} className="py-5">
                <span className="font-display text-lg font-medium text-ink">{p.title}</span>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{p.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
