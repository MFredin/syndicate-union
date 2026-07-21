export const SITE = {
  name: "Syndicate Union",
  shortName: "SU",
  tagline: "The Voice of Liberty",
  description:
    "Syndicate Union is a player-driven community within Foundation: Galactic Frontier — professional, welcoming, and built on liberty, unity, honour, progress, and service.",
  url: "https://syndicateunion.example",
  locale: "en_US",
  keywords: [
    "Syndicate Union",
    "Foundation: Galactic Frontier",
    "gaming community",
    "sci-fi guild",
    "Discord community",
  ],
  social: {
    discord: "https://discord.gg/syndicate-union",
    youtube: "https://youtube.com/@syndicateunion",
    twitch: "https://twitch.tv/syndicateunion",
    patreon: "https://patreon.com/syndicateunion",
    x: "https://x.com/syndicateunion",
  },
  values: [
    {
      name: "Liberty",
      description: "We defend the right of every Unionist to chart their own course among the stars.",
    },
    {
      name: "Unity",
      description: "We are stronger as one syndicate than as a thousand scattered pilots.",
    },
    {
      name: "Honour",
      description: "We keep our word, credit our allies, and win with integrity.",
    },
    {
      name: "Progress",
      description: "We build, refine, and push the frontier forward — for every member.",
    },
    {
      name: "Service",
      description: "Leadership here means serving the Union, not standing above it.",
    },
  ],
  nav: [
    { label: "About", href: "/about" },
    { label: "Lore", href: "/lore" },
    {
      label: "Community",
      href: "/news",
      children: [
        { label: "News", href: "/news", description: "Announcements & dispatches" },
        { label: "Events", href: "/events", description: "Calendar & RSVPs" },
        { label: "Gallery", href: "/gallery", description: "Artwork & screenshots" },
        { label: "Members", href: "/members", description: "Directory of Unionists" },
        { label: "Staff", href: "/staff", description: "Leadership & departments" },
      ],
    },
    {
      label: "Resources",
      href: "/guides",
      children: [
        { label: "Guides", href: "/guides", description: "Strategy & how-to library" },
        { label: "Wiki", href: "/wiki", description: "Knowledge base" },
        { label: "FAQ", href: "/faq", description: "Common questions" },
        { label: "Downloads", href: "/downloads", description: "Assets & files" },
        { label: "Roadmap", href: "/roadmap", description: "What's next for SU" },
      ],
    },
    { label: "Recruitment", href: "/recruitment" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type NavItem = (typeof SITE.nav)[number];
