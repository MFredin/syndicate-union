export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export const stats: Stat[] = [
  { label: "Unionists", value: "2,451+", icon: "Users" },
  { label: "Departments", value: "24", icon: "FolderKanban" },
  { label: "Systems Controlled", value: "148", icon: "Star" },
  { label: "Allied Organisations", value: "85+", icon: "ShieldCheck" },
  { label: "Events Hosted", value: "312", icon: "CalendarDays" },
];
