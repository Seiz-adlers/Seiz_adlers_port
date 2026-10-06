import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] items-center justify-center bg-grid bg-grain text-center">
      <div className="container-fluid">
        <Reveal>
          <p className="font-display text-[clamp(4rem,14vw,10rem)] font-semibold leading-none text-ink-muted">
            404
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 font-display text-2xl font-semibold uppercase tracking-tight text-ink md:text-3xl">
            Nothing to See Here.
          </h1>
          <p className="mt-4 text-ink-secondary">Looks like this page took a wrong turn.</p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <Button href="/">Back Home →</Button>
        </Reveal>
      </div>
    </section>
  );
}
