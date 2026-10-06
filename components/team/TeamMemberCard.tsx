import Image from "next/image";
import type { TeamMember } from "@/data/team";
import { isPlaceholder } from "@/lib/utils/placeholder";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="relative aspect-[3/4] w-[78vw] max-w-[320px] shrink-0 snap-center overflow-hidden border border-hair">
      <div className="absolute inset-0 bg-surface">
        {member.image ? (
          <Image src={member.image} alt={member.name} fill sizes="80vw" className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(0,140,255,0.16),transparent_60%)]">
            <span className="font-display text-6xl font-semibold text-ink-muted/50">{member.initials}</span>
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-ink">{member.name}</h3>
        {!isPlaceholder(member.role) && (
          <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.08em] text-blue-bright">{member.role}</p>
        )}
        {!isPlaceholder(member.specialization) && (
          <p className="mt-1 text-[13px] text-ink-secondary">{member.specialization}</p>
        )}
      </div>
    </div>
  );
}
