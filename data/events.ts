export interface Event {
  id: string;
  title: string;
  category: "Operation" | "Social" | "Training" | "Diplomacy" | "Broadcast";
  startsAtUTC: string; // ISO 8601, UTC
  durationMinutes: number;
  description: string;
  location: string;
}

export const events: Event[] = [
  {
    id: "war-night-42",
    title: "War Night 42: Contested Reaches",
    category: "Operation",
    startsAtUTC: "2026-07-24T19:00:00Z",
    durationMinutes: 120,
    description:
      "Fleet Command leads a coordinated push into the contested reaches. All ranks welcome — sign up for a squadron in #fleet-ops.",
    location: "Discord — Bridge Voice",
  },
  {
    id: "onboarding-session-18",
    title: "New Unionist Onboarding — Session 18",
    category: "Training",
    startsAtUTC: "2026-07-26T17:00:00Z",
    durationMinutes: 60,
    description:
      "A guided walkthrough of the Union for new members: departments, etiquette, and how to find your first mentor.",
    location: "Discord — Onboarding Hall",
  },
  {
    id: "strategy-roundtable-9",
    title: "Monthly Strategy Roundtable",
    category: "Training",
    startsAtUTC: "2026-07-29T18:00:00Z",
    durationMinutes: 90,
    description:
      "Research & Industry hosts an open roundtable on economy priorities heading into the next patch.",
    location: "Discord — Research Hall",
  },
  {
    id: "diplomacy-summit-5",
    title: "Cross-Syndicate Diplomacy Summit",
    category: "Diplomacy",
    startsAtUTC: "2026-08-02T20:00:00Z",
    durationMinutes: 90,
    description:
      "The Diplomatic Corps hosts allied organization envoys to discuss the upcoming sector treaty renewal.",
    location: "Discord — Council Chamber",
  },
  {
    id: "community-social-14",
    title: "Founding Day Celebration",
    category: "Social",
    startsAtUTC: "2026-08-09T18:00:00Z",
    durationMinutes: 150,
    description:
      "An evening of games, giveaways, and a look back at the Union's founding — hosted by Media & Culture.",
    location: "Discord — Common Hall",
  },
  {
    id: "creator-broadcast-3",
    title: "Creator Spotlight Livestream",
    category: "Broadcast",
    startsAtUTC: "2026-08-14T21:00:00Z",
    durationMinutes: 90,
    description:
      "Featured Unionist creators showcase builds, artwork, and gameplay highlights live on the SU stream.",
    location: "Twitch — twitch.tv/syndicateunion",
  },
  {
    id: "war-night-41",
    title: "War Night 41: Outpost Defense",
    category: "Operation",
    startsAtUTC: "2026-07-10T19:00:00Z",
    durationMinutes: 120,
    description:
      "Three fleets defended a contested outpost against a rival syndicate's coordinated push.",
    location: "Discord — Bridge Voice",
  },
  {
    id: "onboarding-session-17",
    title: "New Unionist Onboarding — Session 17",
    category: "Training",
    startsAtUTC: "2026-07-05T17:00:00Z",
    durationMinutes: 60,
    description: "Twenty-two new Unionists completed onboarding and were matched with mentors.",
    location: "Discord — Onboarding Hall",
  },
  {
    id: "diplomacy-summit-4",
    title: "Frontier Council Session",
    category: "Diplomacy",
    startsAtUTC: "2026-06-21T20:00:00Z",
    durationMinutes: 90,
    description: "SU's Chief Diplomat presented the Union's position on shared trade lane access.",
    location: "Discord — Council Chamber",
  },
  {
    id: "community-social-13",
    title: "Mid-Season Social Night",
    category: "Social",
    startsAtUTC: "2026-06-14T18:00:00Z",
    durationMinutes: 150,
    description: "Casual voice hangout, community trivia, and the season 6 recap.",
    location: "Discord — Common Hall",
  },
  {
    id: "strategy-roundtable-8",
    title: "Monthly Strategy Roundtable",
    category: "Training",
    startsAtUTC: "2026-06-28T18:00:00Z",
    durationMinutes: 90,
    description: "Discussion of research priorities and fleet composition ahead of Season 6.",
    location: "Discord — Research Hall",
  },
  {
    id: "war-night-40",
    title: "War Night 40: Rally at the Reach",
    category: "Operation",
    startsAtUTC: "2026-06-05T19:00:00Z",
    durationMinutes: 120,
    description: "Season 5 closing operation — the largest coordinated fleet turnout to date.",
    location: "Discord — Bridge Voice",
  },
];
