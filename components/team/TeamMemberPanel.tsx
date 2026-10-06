"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { TeamMember } from "@/data/team";
import { isPlaceholder } from "@/lib/utils/placeholder";

interface TeamMemberPanelProps {
  member: TeamMember;
  isActive: boolean;
  isAnyActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

export function TeamMemberPanel({ member, isActive, isAnyActive, onActivate, onDeactivate }: TeamMemberPanelProps) {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      aria-pressed={isActive}
      aria-label={`${member.name}${!isPlaceholder(member.role) ? `, ${member.role}` : ""}`}
      className="group relative h-full min-h-[420px] overflow-hidden border-r border-hair text-left last:border-r-0 focus-visible:z-10"
      style={{
        flexGrow: isActive ? 2.3 : isAnyActive ? 0.82 : 1,
        flexBasis: 0,
        transition: "flex-grow 700ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div
        className="absolute inset-0 bg-surface transition-[filter,opacity] duration-700 ease-premium"
        style={{
          filter: isAnyActive && !isActive ? "saturate(0.5) brightness(0.55)" : "none",
        }}
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(min-width: 768px) 22vw, 80vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(0,140,255,0.16),transparent_60%)]">
            <span className="font-display text-6xl font-semibold text-ink-muted/50">{member.initials}</span>
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
        <motion.h3
          animate={{ scale: isActive ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left font-display text-lg font-semibold uppercase tracking-tight text-ink md:text-xl"
        >
          {member.name}
        </motion.h3>

        <motion.div
          initial={false}
          animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          {!isPlaceholder(member.role) && (
            <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.08em] text-blue-bright">
              {member.role}
            </p>
          )}
          {!isPlaceholder(member.specialization) && (
            <p className="mt-1 text-[13px] text-ink-secondary">{member.specialization}</p>
          )}
          {!isPlaceholder(member.statement) && (
            <p className="mt-3 max-w-[26ch] text-sm italic text-ink-secondary">&ldquo;{member.statement}&rdquo;</p>
          )}
        </motion.div>
      </div>
    </button>
  );
}
