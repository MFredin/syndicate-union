export interface Member {
  id: string;
  callsign: string;
  department: string;
  role: string;
  joined: string;
  badges: string[];
}

export const members: Member[] = [
  { id: "m1", callsign: "Vantage", department: "Fleet Command", role: "Wing Leader", joined: "2024-02-11", badges: ["founding-unionist", "war-veteran"] },
  { id: "m2", callsign: "Halcyon", department: "Diplomatic Corps", role: "Envoy", joined: "2024-03-02", badges: ["diplomat"] },
  { id: "m3", callsign: "Ferrowatt", department: "Research & Industry", role: "Analyst", joined: "2024-01-29", badges: ["guide-author", "founding-unionist"] },
  { id: "m4", callsign: "Solmarch", department: "Recruitment & Onboarding", role: "Mentor", joined: "2024-04-18", badges: ["mentor"] },
  { id: "m5", callsign: "Driftline", department: "Media & Culture", role: "Content Creator", joined: "2024-05-06", badges: ["artist"] },
  { id: "m6", callsign: "Ashgale", department: "Fleet Command", role: "Squadron Pilot", joined: "2024-06-14", badges: ["war-veteran", "perfect-attendance"] },
  { id: "m7", callsign: "Corvine", department: "Fleet Command", role: "Tactical Officer", joined: "2024-02-27", badges: ["war-veteran"] },
  { id: "m8", callsign: "Vellum", department: "Research & Industry", role: "Economy Planner", joined: "2024-07-01", badges: ["guide-author"] },
  { id: "m9", callsign: "Nightshade", department: "Recruitment & Onboarding", role: "Onboarding Host", joined: "2024-03-22", badges: ["mentor", "event-host"] },
  { id: "m10", callsign: "Pale Comet", department: "Media & Culture", role: "Gallery Curator", joined: "2024-08-09", badges: ["artist", "event-host"] },
  { id: "m11", callsign: "Ironquill", department: "Diplomatic Corps", role: "Treaty Analyst", joined: "2024-09-15", badges: ["diplomat"] },
  { id: "m12", callsign: "Brightwake", department: "Fleet Command", role: "Squadron Pilot", joined: "2024-10-03", badges: [] },
  { id: "m13", callsign: "Cassian Vale", department: "Council of Elders", role: "Council Secretary", joined: "2024-01-15", badges: ["founding-unionist", "diplomat"] },
  { id: "m14", callsign: "Windrow", department: "Research & Industry", role: "Guide Writer", joined: "2024-11-20", badges: ["guide-author"] },
  { id: "m15", callsign: "Emberlyn", department: "Media & Culture", role: "Dispatch Writer", joined: "2024-12-04", badges: ["event-host"] },
  { id: "m16", callsign: "Quietstorm", department: "Fleet Command", role: "Fleet Pilot", joined: "2025-01-10", badges: ["war-veteran"] },
  { id: "m17", callsign: "Talonreach", department: "Recruitment & Onboarding", role: "Mentor", joined: "2025-02-06", badges: ["mentor"] },
  { id: "m18", callsign: "Glasswing", department: "Media & Culture", role: "Artist", joined: "2025-03-19", badges: ["artist"] },
  { id: "m19", callsign: "Starmason", department: "Research & Industry", role: "Analyst", joined: "2025-04-02", badges: [] },
  { id: "m20", callsign: "Redounce", department: "Fleet Command", role: "Squadron Pilot", joined: "2025-05-28", badges: ["perfect-attendance"] },
  { id: "m21", callsign: "Thornevale", department: "Diplomatic Corps", role: "Envoy", joined: "2025-06-11", badges: [] },
  { id: "m22", callsign: "Lucid Fold", department: "Media & Culture", role: "Streamer", joined: "2025-07-01", badges: ["artist", "event-host"] },
  { id: "m23", callsign: "Marrow Finch", department: "Recruitment & Onboarding", role: "Onboarding Host", joined: "2025-08-14", badges: ["mentor"] },
  { id: "m24", callsign: "Greywake", department: "Fleet Command", role: "Wing Leader", joined: "2025-09-09", badges: ["war-veteran", "founding-unionist"] },
];
