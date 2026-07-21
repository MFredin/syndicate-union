export interface GalleryItem {
  id: string;
  title: string;
  creator: string;
  category: "Artwork" | "Screenshots" | "Videos";
  variant: "orbital" | "fleet" | "council" | "skyline" | "emblem";
  featured?: boolean;
  description: string;
}

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
