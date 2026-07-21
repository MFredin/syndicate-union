export interface Department {
  id: string;
  name: string;
  icon: string;
  summary: string;
  description: string;
  responsibilities: string[];
  openPositions: number;
}

export const departments: Department[] = [
  {
    id: "fleet-command",
    name: "Fleet Command",
    icon: "Rocket",
    summary: "Coordinates fleet operations, war nights, and sector defense.",
    description:
      "Fleet Command plans and leads every coordinated operation the Union undertakes — from weekly war nights to large-scale defensive campaigns. They set doctrine, run drills, and make sure every Unionist knows their role before the fighting starts.",
    responsibilities: [
      "Plan and run weekly fleet operations and war nights",
      "Maintain fleet composition doctrine and formation guides",
      "Coordinate cross-syndicate defense during contested events",
      "Debrief operations and publish after-action reports",
    ],
    openPositions: 3,
  },
  {
    id: "diplomatic-corps",
    name: "Diplomatic Corps",
    icon: "Handshake",
    summary: "Manages alliances, treaties, and relations with allied organizations.",
    description:
      "The Diplomatic Corps represents Syndicate Union to the wider frontier — negotiating non-aggression pacts, coordinating joint operations with allied organizations, and resolving disputes before they become conflicts.",
    responsibilities: [
      "Negotiate and maintain treaties with allied organizations",
      "Represent SU in cross-community councils and summits",
      "Mediate disputes between members and external groups",
      "Track alliance standing and relationship history",
    ],
    openPositions: 2,
  },
  {
    id: "research-industry",
    name: "Research & Industry",
    icon: "FlaskConical",
    summary: "Produces strategy guides, economy planning, and tech-tree research.",
    description:
      "Research & Industry keeps the Union's collective knowledge sharp. They write and maintain the guide library and wiki, model economy and research priorities, and answer the deep technical questions other departments bring to them.",
    responsibilities: [
      "Author and update the guide library and wiki",
      "Model economy, research, and production strategies",
      "Review community-submitted guides for accuracy",
      "Run the monthly strategy roundtable",
    ],
    openPositions: 4,
  },
  {
    id: "recruitment-onboarding",
    name: "Recruitment & Onboarding",
    icon: "UserPlus",
    summary: "Welcomes new Unionists and guides them through their first weeks.",
    description:
      "This department is the first friendly face every new member meets. They run onboarding sessions, pair newcomers with mentors, and make sure nobody is left figuring things out alone.",
    responsibilities: [
      "Screen and welcome new applications",
      "Run onboarding sessions and mentor pairings",
      "Maintain the New Unionist roadmap",
      "Gather feedback to improve the join experience",
    ],
    openPositions: 5,
  },
  {
    id: "media-culture",
    name: "Media & Culture",
    icon: "Palette",
    summary: "Runs community events, the gallery, and creator spotlights.",
    description:
      "Media & Culture keeps the Union feeling like a community, not just a roster. They organize social events, curate the artwork gallery, spotlight creators, and produce the news dispatches you read every week.",
    responsibilities: [
      "Curate the gallery and run creator spotlights",
      "Write and publish news dispatches",
      "Organize social events and celebrations",
      "Manage the Union's Discord presence and channels",
    ],
    openPositions: 2,
  },
  {
    id: "council-of-elders",
    name: "Council of Elders",
    icon: "Landmark",
    summary: "The elected leadership body that sets Union-wide policy.",
    description:
      "The Council of Elders is Syndicate Union's elected governing body — one representative from each department plus the Chancellor. They set policy, ratify treaties, and hold the final word on Union-wide decisions.",
    responsibilities: [
      "Set and ratify Union-wide policy",
      "Approve treaties negotiated by the Diplomatic Corps",
      "Hear appeals and resolve internal disputes",
      "Publish quarterly state-of-the-Union addresses",
    ],
    openPositions: 0,
  },
];
