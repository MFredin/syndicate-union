export interface Ally {
  id: string;
  name: string;
  relationship: string;
}

export const allies: Ally[] = [
  { id: "ally-1", name: "Ironvale Consortium", relationship: "Cooperative agreement" },
  { id: "ally-2", name: "The Wayfinder Concord", relationship: "Non-aggression pact" },
  { id: "ally-3", name: "Ashglass Syndicate", relationship: "Non-aggression pact" },
  { id: "ally-4", name: "Meridian Compact", relationship: "Cooperative agreement" },
  { id: "ally-5", name: "The Longwatch", relationship: "Non-aggression pact" },
];
