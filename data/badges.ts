export interface Badge {
  id: string;
  name: string;
  description: string;
  tier: "bronze" | "silver" | "gold";
}

export const badges: Badge[] = [
  {
    id: "founding-unionist",
    name: "Founding Unionist",
    description: "Joined Syndicate Union during its founding season.",
    tier: "gold",
  },
  {
    id: "war-veteran",
    name: "War Veteran",
    description: "Served in ten or more coordinated fleet operations.",
    tier: "gold",
  },
  {
    id: "mentor",
    name: "Mentor",
    description: "Onboarded and mentored five or more new Unionists.",
    tier: "silver",
  },
  {
    id: "guide-author",
    name: "Guide Author",
    description: "Published a guide accepted into the official library.",
    tier: "silver",
  },
  {
    id: "diplomat",
    name: "Envoy",
    description: "Represented SU in a diplomatic summit or negotiation.",
    tier: "silver",
  },
  {
    id: "artist",
    name: "Featured Creator",
    description: "Had original artwork featured in the community gallery.",
    tier: "bronze",
  },
  {
    id: "event-host",
    name: "Event Host",
    description: "Organized and hosted a community event.",
    tier: "bronze",
  },
  {
    id: "perfect-attendance",
    name: "Ever Present",
    description: "Attended every scheduled war night for a full season.",
    tier: "silver",
  },
];
