export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineEvent[] = [
  {
    id: "founding",
    year: "2024",
    title: "The Union is Founded",
    description:
      "A small group of commanders, tired of scattered and short-lived alliances, drafted the Union Charter and opened Syndicate Union's doors to the frontier.",
  },
  {
    id: "first-charter",
    year: "2024",
    title: "First Council Elected",
    description:
      "The founding membership elected its first Council of Elders, establishing the governance structure the Union still uses today.",
  },
  {
    id: "fleet-command-formed",
    year: "2024",
    title: "Fleet Command Established",
    description:
      "Rapid growth led to the creation of Fleet Command, formalizing what had been ad-hoc squad coordination into structured doctrine.",
  },
  {
    id: "first-treaty",
    year: "2025",
    title: "First Allied Treaty Signed",
    description:
      "The newly formed Diplomatic Corps negotiated SU's first non-aggression pact, marking the start of the Union's alliance network.",
  },
  {
    id: "wiki-launch",
    year: "2025",
    title: "Wiki & Guide Library Launched",
    description:
      "Research & Industry consolidated years of scattered notes into a structured wiki and guide library for the whole community.",
  },
  {
    id: "thousandth-member",
    year: "2025",
    title: "1,000th Unionist Welcomed",
    description: "Syndicate Union crossed one thousand members, celebrated with the first Founding Day event.",
  },
  {
    id: "season-five",
    year: "2026",
    title: "Season 5 Sector Campaign",
    description:
      "SU led the largest coordinated fleet campaign in its history, culminating in War Night 40's record turnout.",
  },
  {
    id: "today",
    year: "2026",
    title: "The Union Today",
    description:
      "With six active departments and a growing alliance network, Syndicate Union continues to welcome new commanders every week.",
  },
];
