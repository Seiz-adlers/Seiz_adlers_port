"use client";

import { useState } from "react";
import { team } from "@/data/team";
import { TeamMemberPanel } from "@/components/team/TeamMemberPanel";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";

export function TeamGrid() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div>
      <div className="card hidden h-[520px] overflow-hidden rounded-sm md:flex">
        {team.map((member) => (
          <TeamMemberPanel
            key={member.id}
            member={member}
            isActive={activeId === member.id}
            isAnyActive={activeId !== null}
            onActivate={() => setActiveId(member.id)}
            onDeactivate={() => setActiveId(null)}
          />
        ))}
      </div>

      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 no-scrollbar md:hidden">
        {team.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
