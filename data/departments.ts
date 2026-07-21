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
    id: "command",
    name: "Command Division",
    icon: "Landmark",
    summary: "Strategic coordination and governance.",
    description:
      "Command sets the Union's overall direction — chairing the Council of Elders, coordinating every other division's leads, and running the onboarding pipeline that brings new Unionists up to speed.",
    responsibilities: [
      "Chair the Council of Elders and set Union-wide policy",
      "Coordinate priorities across all eight divisions",
      "Run onboarding sessions and mentor pairings for new members",
      "Publish quarterly state-of-the-Union addresses",
    ],
    openPositions: 2,
  },
  {
    id: "defence",
    name: "Defence Division",
    icon: "ShieldCheck",
    summary: "Protect the Union and its allies.",
    description:
      "Defence plans and leads every coordinated operation the Union undertakes — from weekly war nights to large-scale sector defense. They set doctrine, run drills, and make sure every Unionist knows their role before the fighting starts.",
    responsibilities: [
      "Plan and run weekly fleet operations and war nights",
      "Maintain fleet composition doctrine and formation guides",
      "Coordinate sector defense during contested events",
      "Debrief operations and publish after-action reports",
    ],
    openPositions: 4,
  },
  {
    id: "diplomacy",
    name: "Diplomacy Division",
    icon: "Handshake",
    summary: "Build durable relationships and alliances.",
    description:
      "Diplomacy represents Syndicate Union to the wider frontier — negotiating non-aggression pacts, coordinating joint operations with allied organisations, and resolving disputes before they become conflicts.",
    responsibilities: [
      "Negotiate and maintain treaties with allied organisations",
      "Represent SU in cross-community councils and summits",
      "Mediate disputes between members and external groups",
      "Track alliance standing and relationship history",
    ],
    openPositions: 2,
  },
  {
    id: "exploration",
    name: "Exploration Division",
    icon: "Compass",
    summary: "Chart new systems and opportunities.",
    description:
      "Exploration scouts the frontier ahead of the fleet — surveying unclaimed systems, evaluating expansion targets, and keeping the Union's star charts current for every other division to plan against.",
    responsibilities: [
      "Survey unclaimed and contested systems",
      "Maintain the Union's shared star charts",
      "Evaluate expansion and outpost opportunities",
      "Report frontier conditions back to Command and Defence",
    ],
    openPositions: 3,
  },
  {
    id: "industry",
    name: "Industry Division",
    icon: "Factory",
    summary: "Build the infrastructure of progress.",
    description:
      "Industry keeps the Union's production and economy running — modelling resource priorities, managing shared infrastructure projects, and making sure other divisions have what they need to operate.",
    responsibilities: [
      "Model economy and production priorities Union-wide",
      "Manage shared infrastructure and outpost projects",
      "Coordinate resource allocation between divisions",
      "Track industrial output against Union goals",
    ],
    openPositions: 3,
  },
  {
    id: "intelligence",
    name: "Intelligence Division",
    icon: "Radar",
    summary: "Turn information into advantage.",
    description:
      "Intelligence gathers and analyses everything happening beyond the Union's borders — tracking rival movements, assessing threats, and briefing Command and Defence before decisions get made.",
    responsibilities: [
      "Monitor rival and neutral faction activity",
      "Assess threats and brief Command and Defence",
      "Verify intelligence shared by allied organisations",
      "Maintain the Union's threat-assessment archive",
    ],
    openPositions: 2,
  },
  {
    id: "logistics",
    name: "Logistics Division",
    icon: "Route",
    summary: "Keep people, resources and operations moving.",
    description:
      "Logistics is the glue that keeps day-to-day Union life running — organising events, curating the gallery, publishing news dispatches, and managing the Discord presence every Unionist relies on.",
    responsibilities: [
      "Organise social events and the Union calendar",
      "Curate the gallery and run creator spotlights",
      "Write and publish news dispatches",
      "Manage the Union's Discord structure and channels",
    ],
    openPositions: 3,
  },
  {
    id: "science",
    name: "Science Division",
    icon: "FlaskConical",
    summary: "Research, analyse and improve.",
    description:
      "Science keeps the Union's collective knowledge sharp — authoring the guide library and wiki, researching the tech tree, and answering the deep technical questions other divisions bring to them.",
    responsibilities: [
      "Author and update the guide library and wiki",
      "Research tech-tree and strategy priorities",
      "Review community-submitted guides for accuracy",
      "Run the monthly strategy roundtable",
    ],
    openPositions: 3,
  },
];
