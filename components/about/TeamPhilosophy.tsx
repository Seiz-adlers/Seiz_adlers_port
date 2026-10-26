import { team, rolesConfirmed } from "@/data/team";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";

export function TeamPhilosophy({ index = "03" }: { index?: string }) {
  return (
    <section className="border-b border-hair bg-bg-secondary py-14 md:py-20">
      <div className="container-fluid grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>  
          <SectionLabel index={index} label="Team Philosophy" />
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-secondary">
            Titles describe responsibility, not standing. Every discipline here — creative,
            growth, engineering, execution — carries equal weight in how a project turns out.
            That&rsquo;s a working philosophy, not an org chart.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="divide-y divide-hair border-t border-hair">
            {team.map((member) => (
              <li key={member.id} className="flex items-center justify-between gap-6 py-5">
                <span className="font-display text-lg font-medium text-ink">{member.name}</span>
                {rolesConfirmed && (
                  <span className="text-right text-sm text-ink-secondary">{member.role}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
