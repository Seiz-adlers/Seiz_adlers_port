import { isPlaceholder } from "@/lib/utils/placeholder";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialization: string;
  initials: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
  };
  statement?: string;
}

/**
 * No photographs, by the team's choice — each member is shown as a
 * typographic monogram. Order is alphabetical by first name — intentionally, so array position
 * never reads as a ranking. Visual treatment in <TeamGrid> is identical
 * for every entry regardless of role. Confirmed data only; unverified
 * fields use "[INSERT ...]" placeholders rather than invented content.
 */
export const team: TeamMember[] = [
  {
    id: "dinesh-boopathi",
    name: "Dinesh Boopathi",
    role: "[INSERT ROLE]",
    bio: "[INSERT BIO]",
    specialization: "[INSERT SPECIALIZATION]",
    initials: "DB",
    statement: "[INSERT STATEMENT]",
  },
  {
    id: "elumalai-kumar",
    name: "Elumalai Kumar",
    role: "[INSERT ROLE]",
    bio: "[INSERT BIO]",
    specialization: "[INSERT SPECIALIZATION]",
    initials: "EK",
    statement: "[INSERT STATEMENT]",
  },
  {
    id: "mugesh-muniyappan",
    name: "Mugesh Muniyappan",
    role: "Founder & Managing Director",
    bio: "[INSERT BIO]",
    specialization: "[INSERT SPECIALIZATION]",
    initials: "MM",
    statement: "[INSERT STATEMENT]",
  },
  {
    id: "nitheesh-chinnusamy",
    name: "Nitheesh Chinnusamy",
    role: "[INSERT ROLE]",
    bio: "[INSERT BIO]",
    specialization: "[INSERT SPECIALIZATION]",
    initials: "NC",
    statement: "[INSERT STATEMENT]",
  },
  {
    id: "soundhar",
    name: "Soundhar",
    role: "[INSERT ROLE]",
    bio: "[INSERT BIO]",
    specialization: "[INSERT SPECIALIZATION]",
    initials: "S",
    statement: "[INSERT STATEMENT]",
  },
];

/**
 * Roles are shown only once every member's role is confirmed. Showing one
 * real title beside four "to be confirmed" placeholders would read as a
 * hierarchy — exactly what the team presentation must avoid.
 */
export const rolesConfirmed = team.every((m) => !isPlaceholder(m.role));
