export interface Member {
  id: string;
  callsign: string;
  department: string;
  role: string;
  joined: string;
  badges: string[];
}

export const members: Member[] = [
  { id: "m1", callsign: "Vantage", department: "Defence Division", role: "Wing Leader", joined: "2024-02-11", badges: ["founder", "veteran", "commander"] },
  { id: "m2", callsign: "Halcyon", department: "Diplomacy Division", role: "Envoy", joined: "2024-03-02", badges: ["diplomat"] },
  { id: "m3", callsign: "Ferrowatt", department: "Science Division", role: "Analyst", joined: "2024-01-29", badges: ["strategist", "founder"] },
  { id: "m4", callsign: "Solmarch", department: "Command Division", role: "Mentor", joined: "2024-04-18", badges: ["officer"] },
  { id: "m5", callsign: "Driftline", department: "Logistics Division", role: "Content Creator", joined: "2024-05-06", badges: ["artist"] },
  { id: "m6", callsign: "Ashgale", department: "Defence Division", role: "Squadron Pilot", joined: "2024-06-14", badges: ["veteran", "unionist"] },
  { id: "m7", callsign: "Corvine", department: "Intelligence Division", role: "Intelligence Officer", joined: "2024-02-27", badges: ["veteran"] },
  { id: "m8", callsign: "Vellum", department: "Industry Division", role: "Economy Planner", joined: "2024-07-01", badges: ["strategist", "developer"] },
  { id: "m9", callsign: "Nightshade", department: "Command Division", role: "Onboarding Host", joined: "2024-03-22", badges: ["officer", "contributor"] },
  { id: "m10", callsign: "Pale Comet", department: "Logistics Division", role: "Gallery Curator", joined: "2024-08-09", badges: ["artist", "contributor"] },
  { id: "m11", callsign: "Ironquill", department: "Diplomacy Division", role: "Treaty Analyst", joined: "2024-09-15", badges: ["diplomat"] },
  { id: "m12", callsign: "Brightwake", department: "Defence Division", role: "Squadron Pilot", joined: "2024-10-03", badges: ["recruit"] },
  { id: "m13", callsign: "Cassian Vale", department: "Command Division", role: "Council Secretary", joined: "2024-01-15", badges: ["founder", "diplomat", "director"] },
  { id: "m14", callsign: "Windrow", department: "Science Division", role: "Guide Writer", joined: "2024-11-20", badges: ["strategist"] },
  { id: "m15", callsign: "Emberlyn", department: "Logistics Division", role: "Dispatch Writer", joined: "2024-12-04", badges: ["contributor"] },
  { id: "m16", callsign: "Quietstorm", department: "Defence Division", role: "Fleet Pilot", joined: "2025-01-10", badges: ["veteran"] },
  { id: "m17", callsign: "Talonreach", department: "Command Division", role: "Mentor", joined: "2025-02-06", badges: ["officer"] },
  { id: "m18", callsign: "Glasswing", department: "Logistics Division", role: "Artist", joined: "2025-03-19", badges: ["artist"] },
  { id: "m19", callsign: "Starmason", department: "Science Division", role: "Analyst", joined: "2025-04-02", badges: [] },
  { id: "m20", callsign: "Redounce", department: "Exploration Division", role: "Scout Pilot", joined: "2025-05-28", badges: ["unionist"] },
  { id: "m21", callsign: "Thornevale", department: "Diplomacy Division", role: "Envoy", joined: "2025-06-11", badges: [] },
  { id: "m22", callsign: "Lucid Fold", department: "Logistics Division", role: "Streamer", joined: "2025-07-01", badges: ["artist", "contributor"] },
  { id: "m23", callsign: "Marrow Finch", department: "Command Division", role: "Onboarding Host", joined: "2025-08-14", badges: ["officer"] },
  { id: "m24", callsign: "Greywake", department: "Defence Division", role: "Wing Leader", joined: "2025-09-09", badges: ["veteran", "founder"] },
];
