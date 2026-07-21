/**
 * Placeholder content migrated from the old data/*.ts arrays — this is
 * the permanent home for that seed content now that data/*.ts holds only
 * type definitions. Used exclusively by scripts/seed.ts.
 */
import type { Department } from "../data/departments";
import type { StaffMember } from "../data/staff";
import type { Member } from "../data/members";
import type { Badge } from "../data/badges";
import type { Stat } from "../data/stats";
import type { Event } from "../data/events";
import type { DownloadAsset } from "../data/downloads";
import type { RoadmapItem } from "../data/roadmap";
import type { GalleryItem } from "../data/gallery";
import type { FaqItem } from "../data/faq";
import type { Ally } from "../data/allies";
import type { TimelineEvent } from "../data/timeline";

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

export const staff: StaffMember[] = [
  {
    id: "a-reyes",
    name: "A. Reyes",
    role: "Union Chancellor",
    department: "Command Division",
    bio: "Elected twice by the Union membership, A. Reyes has led SU's governance since Season 3, focused on keeping the Council transparent and responsive to every division.",
    responsibilities: ["Chairs the Council of Elders", "Casts tie-breaking votes", "Represents SU externally"],
    discord: "areyes#0001",
  },
  {
    id: "m-oduya",
    name: "M. Oduya",
    role: "Fleet Marshal",
    department: "Defence Division",
    bio: "M. Oduya designs the Union's operation doctrine and has led fleet coordination through three major sector campaigns.",
    responsibilities: ["Leads the Defence Division", "Plans war-night operations", "Owns formation doctrine"],
    discord: "oduya#0002",
  },
  {
    id: "s-linwood",
    name: "S. Linwood",
    role: "Chief Diplomat",
    department: "Diplomacy Division",
    bio: "S. Linwood negotiated the Union's current non-aggression pacts and represents SU in the frontier's cross-community council.",
    responsibilities: ["Leads the Diplomacy Division", "Negotiates treaties", "Chairs alliance summits"],
    discord: "linwood#0003",
  },
  {
    id: "r-castellan",
    name: "R. Castellan",
    role: "Chief Surveyor",
    department: "Exploration Division",
    bio: "R. Castellan has personally charted more unclaimed systems than any other Unionist and now trains the scouting wings that keep the Union's maps current.",
    responsibilities: ["Leads the Exploration Division", "Coordinates system surveys", "Maintains the shared star charts"],
    discord: "castellan#0007",
  },
  {
    id: "t-vasquez",
    name: "T. Vasquez",
    role: "Director of Research",
    department: "Science Division",
    bio: "T. Vasquez maintains the guide library and wiki, and runs the monthly strategy roundtable open to all Unionists.",
    responsibilities: ["Leads the Science Division", "Reviews guide submissions", "Runs strategy roundtables"],
    discord: "vasquez#0004",
  },
  {
    id: "d-marchetti",
    name: "D. Marchetti",
    role: "Industry Director",
    department: "Industry Division",
    bio: "D. Marchetti models the Union's economy and keeps shared infrastructure projects funded and on schedule.",
    responsibilities: ["Leads the Industry Division", "Models economy and production priorities", "Manages infrastructure projects"],
    discord: "marchetti#0008",
  },
  {
    id: "k-ilyanova",
    name: "K. Ilyanova",
    role: "Chief Intelligence Officer",
    department: "Intelligence Division",
    bio: "K. Ilyanova built the Union's threat-assessment process from scratch and briefs Command ahead of every major campaign.",
    responsibilities: ["Leads the Intelligence Division", "Briefs Command and Defence on threats", "Verifies allied intelligence"],
    discord: "ilyanova#0009",
  },
  {
    id: "p-nakamura",
    name: "P. Nakamura",
    role: "Logistics Director",
    department: "Logistics Division",
    bio: "P. Nakamura runs the gallery, the weekly news dispatch, and the Union's social calendar.",
    responsibilities: ["Leads the Logistics Division", "Publishes news dispatches", "Curates the gallery"],
    discord: "nakamura#0006",
  },
];

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

export const stats: Stat[] = [
  { label: "Unionists", value: "2,451+", icon: "Users" },
  { label: "Departments", value: "24", icon: "FolderKanban" },
  { label: "Systems Controlled", value: "148", icon: "Star" },
  { label: "Allied Organisations", value: "85+", icon: "ShieldCheck" },
  { label: "Events Hosted", value: "312", icon: "CalendarDays" },
];

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

export const downloads: DownloadAsset[] = [
  {
    id: "wallpaper-orbital",
    title: "Orbital City Wallpaper Pack",
    category: "Wallpapers",
    version: "v2.0",
    fileType: "ZIP",
    sizeLabel: "18 MB",
    updated: "2026-05-12",
    description: "Desktop and mobile wallpapers featuring the Union's orbital cityscape motif.",
  },
  {
    id: "wallpaper-fleet",
    title: "Fleet Formation Wallpaper Pack",
    category: "Wallpapers",
    version: "v1.3",
    fileType: "ZIP",
    sizeLabel: "14 MB",
    updated: "2026-03-02",
    description: "A set of wallpapers celebrating Fleet Command's signature formations.",
  },
  {
    id: "brand-kit-logo",
    title: "Syndicate Union Logo Kit",
    category: "Brand Kit",
    version: "v3.1",
    fileType: "ZIP",
    sizeLabel: "6 MB",
    updated: "2026-06-30",
    description: "Full lockup, icon-only, monochrome, and watermark versions of the SU emblem.",
  },
  {
    id: "brand-kit-colors",
    title: "Brand Colour & Type Guide",
    category: "Brand Kit",
    version: "v1.2",
    fileType: "PDF",
    sizeLabel: "2 MB",
    updated: "2026-04-18",
    description: "Palette values, typography pairings, and usage guidance for community creators.",
  },
  {
    id: "guide-newcomer-pdf",
    title: "New Unionist Roadmap (PDF)",
    category: "Guides",
    version: "v4.0",
    fileType: "PDF",
    sizeLabel: "1 MB",
    updated: "2026-07-01",
    description: "A printable version of the 14-day newcomer roadmap for offline reference.",
  },
  {
    id: "guide-fleet-comp-pdf",
    title: "Fleet Composition Cheat Sheet",
    category: "Guides",
    version: "v2.4",
    fileType: "PDF",
    sizeLabel: "1 MB",
    updated: "2026-06-11",
    description: "Quick-reference formations and counters for common fleet engagements.",
  },
  {
    id: "template-application",
    title: "Department Application Template",
    category: "Templates",
    version: "v1.0",
    fileType: "DOCX",
    sizeLabel: "0.4 MB",
    updated: "2026-02-20",
    description: "The standard template used when applying to lead a Union department.",
  },
  {
    id: "template-event-brief",
    title: "Event Planning Brief Template",
    category: "Templates",
    version: "v1.1",
    fileType: "DOCX",
    sizeLabel: "0.3 MB",
    updated: "2026-01-15",
    description: "The planning template Media & Culture uses to schedule community events.",
  },
];

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

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Orbital City at Dawn",
    creator: "Driftline",
    category: "Artwork",
    variant: "orbital",
    featured: true,
    description: "Part of Driftline's ongoing orbital cityscape series, first featured in July's creator spotlight.",
  },
  {
    id: "g2",
    title: "Fleet Formation Over the Reach",
    creator: "Ashgale",
    category: "Artwork",
    variant: "fleet",
    featured: true,
    description: "A study of Fleet Command's standard vanguard formation during War Night 41.",
  },
  {
    id: "g3",
    title: "Council Chamber Session",
    creator: "Glasswing",
    category: "Artwork",
    variant: "council",
    description: "An illustrated impression of a quarterly Council of Elders session.",
  },
  {
    id: "g4",
    title: "Outpost Skyline",
    creator: "Pale Comet",
    category: "Screenshots",
    variant: "skyline",
    description: "A captured view of one of the Union's border outposts at shift change.",
  },
  {
    id: "g5",
    title: "Founding Day Emblem",
    creator: "Lucid Fold",
    category: "Artwork",
    variant: "emblem",
    featured: true,
    description: "The commemorative emblem designed for this year's Founding Day celebration.",
  },
  {
    id: "g6",
    title: "War Night 41 Recap",
    creator: "P. Nakamura",
    category: "Videos",
    variant: "fleet",
    description: "Highlights reel from the outpost defense operation.",
  },
  {
    id: "g7",
    title: "Second Orbital Ring",
    creator: "Driftline",
    category: "Artwork",
    variant: "orbital",
    description: "A companion piece to Orbital City at Dawn, viewed from the transit ring.",
  },
  {
    id: "g8",
    title: "Contested Reach Screenshot",
    creator: "Corvine",
    category: "Screenshots",
    variant: "fleet",
    description: "A quiet moment before the sixth wave during War Night 41.",
  },
  {
    id: "g9",
    title: "Creator Spotlight Livestream",
    creator: "Media & Culture",
    category: "Videos",
    variant: "council",
    description: "Recording from the August creator spotlight broadcast.",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "what-is-su",
    question: "What is Syndicate Union?",
    answer:
      "Syndicate Union (SU) is a player-driven community within Foundation: Galactic Frontier, built around five core values: liberty, unity, honour, progress, and service. We coordinate fleet operations, publish guides, and run a full calendar of community events.",
    category: "General",
    popular: true,
  },
  {
    id: "is-su-official",
    question: "Is Syndicate Union affiliated with the developers of Foundation: Galactic Frontier?",
    answer:
      "No. SU is an independent, player-run community. We're not affiliated with or endorsed by the game's publisher or developers.",
    category: "General",
  },
  {
    id: "how-to-join",
    question: "How do I join Syndicate Union?",
    answer:
      "Head to the Recruitment page and follow the application process — it takes about five minutes. Once submitted, a member of Recruitment & Onboarding will reach out on Discord within 48 hours.",
    category: "Membership",
    popular: true,
  },
  {
    id: "membership-cost",
    question: "Does it cost anything to join?",
    answer: "Membership in Syndicate Union is completely free. We're a volunteer-run community.",
    category: "Membership",
    popular: true,
  },
  {
    id: "age-requirement",
    question: "Is there an age requirement?",
    answer: "Yes — in line with Discord's terms of service, members must be at least 13 years old.",
    category: "Membership",
  },
  {
    id: "multiple-departments",
    question: "Can I join more than one department?",
    answer:
      "Most members focus on one department, but cross-department contributions are welcome and common — for example, a Fleet Command pilot who also writes guides for Research & Industry.",
    category: "Departments",
  },
  {
    id: "no-experience",
    question: "Do I need prior experience with the game to join?",
    answer:
      "Not at all. Many of our best contributors joined as complete newcomers. Onboarding pairs every new member with a mentor to help you get oriented.",
    category: "Membership",
    popular: true,
  },
  {
    id: "how-departments-chosen",
    question: "How do I choose which department to join?",
    answer:
      "The Recruitment page describes each department's focus and current open positions. If you're unsure, mention your interests during onboarding and your mentor will help you find the right fit.",
    category: "Departments",
  },
  {
    id: "leadership-elected",
    question: "How is Union leadership chosen?",
    answer:
      "Department leads are appointed by the Council of Elders based on demonstrated contribution and peer nomination. The Chancellor and Council seats are elected by the general membership each season.",
    category: "Departments",
  },
  {
    id: "event-timezone",
    question: "I'm not sure what time events are in my timezone. Help?",
    answer:
      "Every event on the Events page automatically converts to your device's local timezone. You can also add events directly to your calendar from the event detail view.",
    category: "Events",
    popular: true,
  },
  {
    id: "missed-event",
    question: "What happens if I can't make a scheduled event?",
    answer:
      "Nothing bad — RSVPs help us plan, but they're not mandatory. Recordings and recaps of major operations are posted to the News page afterward.",
    category: "Events",
  },
  {
    id: "how-to-rsvp",
    question: "How do RSVPs work?",
    answer:
      "Open any upcoming event and select RSVP. You'll see a live headcount, and you can change your response any time before the event starts.",
    category: "Events",
  },
  {
    id: "discord-required",
    question: "Do I need Discord to participate?",
    answer:
      "Yes — Discord is where the Union coordinates day to day. The website is our public hub for news, guides, and events, but membership itself happens on Discord.",
    category: "Technical",
    popular: true,
  },
  {
    id: "wiki-vs-guides",
    question: "What's the difference between the Wiki and the Guides library?",
    answer:
      "The Wiki is our structured knowledge base — foundational reference material organized by category. Guides are longer-form, opinionated strategy write-ups aimed at a specific goal or playstyle.",
    category: "Technical",
  },
  {
    id: "submit-guide",
    question: "Can I submit my own guide?",
    answer:
      "Yes. Research & Industry reviews community-submitted guides for accuracy each month. Reach out in the guides channel on Discord to get started.",
    category: "Departments",
  },
  {
    id: "report-issue",
    question: "I found a bug on the website. How do I report it?",
    answer:
      "Use the Contact page's general enquiries form, or post in the #website-feedback channel on Discord. Include the page and a short description of what happened.",
    category: "Technical",
  },
  {
    id: "leave-union",
    question: "How do I leave the Union if I need to?",
    answer:
      "You're free to leave at any time — just let your department lead or anyone on the Council know, or simply leave the Discord server. No hard feelings, and you're always welcome back.",
    category: "Membership",
  },
  {
    id: "inactive-policy",
    question: "What's the inactivity policy?",
    answer:
      "We understand life gets busy. Members are moved to an inactive role after 60 days of no Discord activity, but this is easily reversed — just say hello when you're back.",
    category: "Membership",
  },
  {
    id: "allied-orgs",
    question: "What are 'Allied Organizations'?",
    answer:
      "These are other player communities SU maintains formal non-aggression pacts or cooperative agreements with, negotiated and maintained by the Diplomatic Corps.",
    category: "General",
  },
  {
    id: "content-creators",
    question: "I stream or make content — is there a program for that?",
    answer:
      "Media & Culture runs regular Creator Spotlights, and a more formal Creator Program with Patreon-supported perks is on our public roadmap.",
    category: "General",
  },
];

export const allies: Ally[] = [
  { id: "ally-1", name: "Ironvale Consortium", relationship: "Cooperative agreement" },
  { id: "ally-2", name: "The Wayfinder Concord", relationship: "Non-aggression pact" },
  { id: "ally-3", name: "Ashglass Syndicate", relationship: "Non-aggression pact" },
  { id: "ally-4", name: "Meridian Compact", relationship: "Cooperative agreement" },
  { id: "ally-5", name: "The Longwatch", relationship: "Non-aggression pact" },
];

export const timeline: TimelineEvent[] = [
  {
    id: "founding",
    year: "2024",
    title: "The Union is Founded",
    description:
      "A small group of commanders, tired of scattered and short-lived alliances, drafted the Union Charter and opened Syndicate Union's doors to the frontier.",
  },
  {
    id: "first-charter",
    year: "2024",
    title: "First Council Elected",
    description:
      "The founding membership elected its first Council of Elders, establishing the governance structure the Union still uses today.",
  },
  {
    id: "fleet-command-formed",
    year: "2024",
    title: "Fleet Command Established",
    description:
      "Rapid growth led to the creation of Fleet Command, formalizing what had been ad-hoc squad coordination into structured doctrine.",
  },
  {
    id: "first-treaty",
    year: "2025",
    title: "First Allied Treaty Signed",
    description:
      "The newly formed Diplomatic Corps negotiated SU's first non-aggression pact, marking the start of the Union's alliance network.",
  },
  {
    id: "wiki-launch",
    year: "2025",
    title: "Wiki & Guide Library Launched",
    description:
      "Research & Industry consolidated years of scattered notes into a structured wiki and guide library for the whole community.",
  },
  {
    id: "thousandth-member",
    year: "2025",
    title: "1,000th Unionist Welcomed",
    description: "Syndicate Union crossed one thousand members, celebrated with the first Founding Day event.",
  },
  {
    id: "season-five",
    year: "2026",
    title: "Season 5 Sector Campaign",
    description:
      "SU led the largest coordinated fleet campaign in its history, culminating in War Night 40's record turnout.",
  },
  {
    id: "today",
    year: "2026",
    title: "The Union Today",
    description:
      "With six active departments and a growing alliance network, Syndicate Union continues to welcome new commanders every week.",
  },
];
