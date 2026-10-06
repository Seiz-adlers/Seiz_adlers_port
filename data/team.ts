export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialization: string;
  image: string | null;
  initials: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
  };
  statement?: string;
}

/**
 * Order is alphabetical by first name — intentionally, so array position
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
    image: "/team/dinesh.jpg",
    initials: "DB",
    statement: "[INSERT STATEMENT]",
  },
  {
    id: "elumalai-kumar",
    name: "Elumalai Kumar",
    role: "[INSERT ROLE]",
    bio: "[INSERT BIO]",
    specialization: "[INSERT SPECIALIZATION]",
    image: null,
    initials: "EK",
    statement: "[INSERT STATEMENT]",
  },
  {
    id: "mugesh-muniyappan",
    name: "Mugesh Muniyappan",
    role: "Founder & Managing Director",
    bio: "[INSERT BIO]",
    specialization: "[INSERT SPECIALIZATION]",
    image: null,
    initials: "MM",
    statement: "[INSERT STATEMENT]",
  },
  {
    id: "nitheesh-chinnusamy",
    name: "Nitheesh Chinnusamy",
    role: "[INSERT ROLE]",
    bio: "[INSERT BIO]",
    specialization: "[INSERT SPECIALIZATION]",
    image: "/team/nitheesh.jpg",
    initials: "NC",
    statement: "[INSERT STATEMENT]",
  },
  {
    id: "soundhar",
    name: "Soundhar",
    role: "[INSERT ROLE]",
    bio: "[INSERT BIO]",
    specialization: "[INSERT SPECIALIZATION]",
    image: null,
    initials: "S",
    statement: "[INSERT STATEMENT]",
  },
];
