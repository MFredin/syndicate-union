export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: "Planned" | "In Progress" | "Complete";
  quarter: string;
}

export const roadmap: RoadmapItem[] = [
  {
    id: "r1",
    title: "Member Directory & Profile Badges",
    description: "Searchable directory of Unionists with department filters and achievement badges.",
    status: "Complete",
    quarter: "Q1 2026",
  },
  {
    id: "r2",
    title: "Public Wiki Launch",
    description: "A structured, searchable knowledge base covering economy, combat, and diplomacy fundamentals.",
    status: "Complete",
    quarter: "Q1 2026",
  },
  {
    id: "r3",
    title: "Events Calendar with Timezone Conversion",
    description: "Full calendar view of Union events with automatic local-timezone conversion and RSVPs.",
    status: "Complete",
    quarter: "Q2 2026",
  },
  {
    id: "r4",
    title: "Department Application Workflow",
    description: "A structured multi-step application flow for joining a specific department, not just the Union.",
    status: "In Progress",
    quarter: "Q3 2026",
  },
  {
    id: "r5",
    title: "Discord Bot Integration",
    description: "Sync roles, events, and announcements directly between the website and the Union Discord.",
    status: "In Progress",
    quarter: "Q3 2026",
  },
  {
    id: "r6",
    title: "Creator Program & Patreon Perks",
    description: "Formal recognition and support program for Unionist streamers, artists, and writers.",
    status: "Planned",
    quarter: "Q4 2026",
  },
  {
    id: "r7",
    title: "Mobile Companion App",
    description: "A lightweight companion app for event reminders and news on the go.",
    status: "Planned",
    quarter: "Q1 2027",
  },
  {
    id: "r8",
    title: "Allied Organization Portal",
    description: "A shared portal for allied organizations to coordinate joint operations and treaties.",
    status: "Planned",
    quarter: "Q1 2027",
  },
];
