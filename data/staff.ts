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
    department: "Command Division",
    bio: "Elected twice by the Union membership, A. Reyes has led SU's governance since Season 3, focused on keeping the Council transparent and responsive to every division.",
    responsibilities: ["Chairs the Council of Elders", "Casts tie-breaking votes", "Represents SU externally"],
    discord: "areyes#0001",
  },
  {
    id: "m-oduya",
    name: "M. Oduya",
    role: "Fleet Marshal",
    department: "Defence Division",
    bio: "M. Oduya designs the Union's operation doctrine and has led fleet coordination through three major sector campaigns.",
    responsibilities: ["Leads the Defence Division", "Plans war-night operations", "Owns formation doctrine"],
    discord: "oduya#0002",
  },
  {
    id: "s-linwood",
    name: "S. Linwood",
    role: "Chief Diplomat",
    department: "Diplomacy Division",
    bio: "S. Linwood negotiated the Union's current non-aggression pacts and represents SU in the frontier's cross-community council.",
    responsibilities: ["Leads the Diplomacy Division", "Negotiates treaties", "Chairs alliance summits"],
    discord: "linwood#0003",
  },
  {
    id: "r-castellan",
    name: "R. Castellan",
    role: "Chief Surveyor",
    department: "Exploration Division",
    bio: "R. Castellan has personally charted more unclaimed systems than any other Unionist and now trains the scouting wings that keep the Union's maps current.",
    responsibilities: ["Leads the Exploration Division", "Coordinates system surveys", "Maintains the shared star charts"],
    discord: "castellan#0007",
  },
  {
    id: "t-vasquez",
    name: "T. Vasquez",
    role: "Director of Research",
    department: "Science Division",
    bio: "T. Vasquez maintains the guide library and wiki, and runs the monthly strategy roundtable open to all Unionists.",
    responsibilities: ["Leads the Science Division", "Reviews guide submissions", "Runs strategy roundtables"],
    discord: "vasquez#0004",
  },
  {
    id: "d-marchetti",
    name: "D. Marchetti",
    role: "Industry Director",
    department: "Industry Division",
    bio: "D. Marchetti models the Union's economy and keeps shared infrastructure projects funded and on schedule.",
    responsibilities: ["Leads the Industry Division", "Models economy and production priorities", "Manages infrastructure projects"],
    discord: "marchetti#0008",
  },
  {
    id: "k-ilyanova",
    name: "K. Ilyanova",
    role: "Chief Intelligence Officer",
    department: "Intelligence Division",
    bio: "K. Ilyanova built the Union's threat-assessment process from scratch and briefs Command ahead of every major campaign.",
    responsibilities: ["Leads the Intelligence Division", "Briefs Command and Defence on threats", "Verifies allied intelligence"],
    discord: "ilyanova#0009",
  },
  {
    id: "p-nakamura",
    name: "P. Nakamura",
    role: "Logistics Director",
    department: "Logistics Division",
    bio: "P. Nakamura runs the gallery, the weekly news dispatch, and the Union's social calendar.",
    responsibilities: ["Leads the Logistics Division", "Publishes news dispatches", "Curates the gallery"],
    discord: "nakamura#0006",
  },
];
