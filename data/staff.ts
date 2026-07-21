export interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  responsibilities: string[];
  discord?: string;
}

export const staff: StaffMember[] = [
  {
    id: "a-reyes",
    name: "A. Reyes",
    role: "Union Chancellor",
    department: "Council of Elders",
    bio: "Elected twice by the Union membership, A. Reyes has led SU's governance since Season 3, focused on keeping the Council transparent and responsive to every department.",
    responsibilities: ["Chairs the Council of Elders", "Casts tie-breaking votes", "Represents SU externally"],
    discord: "areyes#0001",
  },
  {
    id: "m-oduya",
    name: "M. Oduya",
    role: "Fleet Marshal",
    department: "Fleet Command",
    bio: "M. Oduya designs the Union's operation doctrine and has led fleet coordination through three major sector campaigns.",
    responsibilities: ["Leads Fleet Command", "Plans war-night operations", "Owns formation doctrine"],
    discord: "oduya#0002",
  },
  {
    id: "s-linwood",
    name: "S. Linwood",
    role: "Chief Diplomat",
    department: "Diplomatic Corps",
    bio: "S. Linwood negotiated the Union's current non-aggression pacts and represents SU in the frontier's cross-community council.",
    responsibilities: ["Leads the Diplomatic Corps", "Negotiates treaties", "Chairs alliance summits"],
    discord: "linwood#0003",
  },
  {
    id: "t-vasquez",
    name: "T. Vasquez",
    role: "Director of Research",
    department: "Research & Industry",
    bio: "T. Vasquez maintains the guide library and wiki, and runs the monthly strategy roundtable open to all Unionists.",
    responsibilities: ["Leads Research & Industry", "Reviews guide submissions", "Runs strategy roundtables"],
    discord: "vasquez#0004",
  },
  {
    id: "j-okafor",
    name: "J. Okafor",
    role: "Recruitment Lead",
    department: "Recruitment & Onboarding",
    bio: "J. Okafor built the current onboarding pipeline and personally mentors new department leads.",
    responsibilities: ["Leads Recruitment & Onboarding", "Reviews applications", "Coordinates mentor pairings"],
    discord: "okafor#0005",
  },
  {
    id: "p-nakamura",
    name: "P. Nakamura",
    role: "Culture Director",
    department: "Media & Culture",
    bio: "P. Nakamura runs the gallery, the weekly news dispatch, and the Union's social calendar.",
    responsibilities: ["Leads Media & Culture", "Publishes news dispatches", "Curates the gallery"],
    discord: "nakamura#0006",
  },
];
