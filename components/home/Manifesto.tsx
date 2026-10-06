import { Reveal } from "@/components/motion/Reveal";

const lines = [
  "Brands should mean something.",
  "Websites should do more than exist.",
  "Design should have purpose.",
  "Technology should simplify complexity.",
  "Marketing should be measurable.",
  "Growth should be intentional.",
];

export function Manifesto() {
  return (
    <section className="relative flex min-h-[90vh] items-center border-t border-hair bg-bg py-28">
      <div className="container-fluid">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.25em] text-blue-bright">We Believe</p>
        </Reveal>

        <div className="mt-10 max-w-3xl space-y-3 md:space-y-4">
          {lines.map((line, i) => (
            <Reveal key={line} delay={i * 0.1} duration={0.8}>
              <p className="font-display text-[clamp(1.5rem,4vw,2.75rem)] font-medium leading-[1.15] text-ink-secondary text-balance">
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={lines.length * 0.1 + 0.2} duration={0.9} className="mt-14">
          <p className="font-display text-[clamp(2rem,5.5vw,4rem)] font-semibold uppercase leading-[1.05] tracking-tight text-ink text-balance">
            We build what comes next.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
