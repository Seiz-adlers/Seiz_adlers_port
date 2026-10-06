import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-hair bg-bg py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,140,255,0.12),transparent_55%)]" />
      <div className="container-fluid relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold uppercase leading-[1.02] tracking-tight text-ink">
            Let&rsquo;s Build
            <br />
            Something Great.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-md text-lg text-ink-secondary">
            Tell us what you&rsquo;re building, where you&rsquo;re stuck, or where you want to go.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <Button href="/contact">Start a Project →</Button>
        </Reveal>
      </div>
    </section>
  );
}
