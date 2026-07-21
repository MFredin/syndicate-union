export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const badges: Badge[] = [
  {
    id: "founder",
    name: "Founder",
    description: "Joined Syndicate Union during its founding season.",
    icon: "founder",
  },
  {
    id: "veteran",
    name: "Veteran",
    description: "Served in ten or more coordinated fleet operations.",
    icon: "veteran",
  },
  {
    id: "commander",
    name: "Commander",
    description: "Led a wing or squadron through a major campaign.",
    icon: "commander",
  },
  {
    id: "officer",
    name: "Officer",
    description: "Onboarded and mentored five or more new Unionists.",
    icon: "officer",
  },
  {
    id: "diplomat",
    name: "Diplomat",
    description: "Represented SU in a diplomatic summit or negotiation.",
    icon: "diplomat",
  },
  {
    id: "strategist",
    name: "Strategist",
    description: "Published a guide accepted into the official library.",
    icon: "strategist",
  },
  {
    id: "artist",
    name: "Artist",
    description: "Had original artwork featured in the community gallery.",
    icon: "artist",
  },
  {
    id: "contributor",
    name: "Contributor",
    description: "Organised and hosted a community event.",
    icon: "contributor",
  },
  {
    id: "developer",
    name: "Developer",
    description: "Built or maintains a tool used by the Union.",
    icon: "developer",
  },
  {
    id: "director",
    name: "Director",
    description: "Sits on the Council of Elders as a division lead.",
    icon: "director",
  },
  {
    id: "recruit",
    name: "Recruit",
    description: "Completed onboarding and joined a division roster.",
    icon: "recruit",
  },
  {
    id: "unionist",
    name: "Unionist",
    description: "Attended every scheduled war night for a full season.",
    icon: "unionist",
  },
];
