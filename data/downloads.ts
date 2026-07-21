export interface DownloadAsset {
  id: string;
  title: string;
  category: "Wallpapers" | "Brand Kit" | "Guides" | "Templates";
  version: string;
  fileType: string;
  sizeLabel: string;
  updated: string;
  description: string;
}

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
