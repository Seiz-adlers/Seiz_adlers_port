import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";

const inputs = ["Code", "Design", "Data", "Performance", "Automation", "Analytics"];

export function CreativeEngineering({ index = "06" }: { index?: string }) {
  return (
    <section className="border-t border-hair bg-bg-secondary py-16 md:py-24">
      <div className="container-fluid">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionLabel index={index} label="How We Work" />
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold uppercase leading-[1.05] tracking-tight text-ink text-balance">
              Creative thinking.
              <br />
              Engineering discipline.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-secondary">
              Great digital experiences live where creative thinking meets engineering precision.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col items-center">
              <div className="card grid w-full grid-cols-2 gap-px overflow-hidden rounded-sm sm:grid-cols-3">
                {inputs.map((item) => (
                  <div
                    key={item}
                    className="flex aspect-square items-center justify-center border-hair bg-bg p-4 text-center"
                  >
                    <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-ink-secondary">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="my-6 h-10 w-px bg-blueline" aria-hidden />

              <div className="border border-blueline bg-surface px-10 py-6 text-center">
                <span className="font-display text-lg font-semibold uppercase tracking-[0.1em] text-blue-bright">
                  Business Growth
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
