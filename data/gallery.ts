/**
 * Type definitions only — the live data now lives in Postgres
 * (see lib/db/schema.ts + lib/db/queries.ts), seeded from this file's
 * original placeholder content by scripts/seed.ts.
 */
export interface GalleryItem {
  id: string;
  title: string;
  creator: string;
  category: "Artwork" | "Screenshots" | "Videos";
  variant: "orbital" | "fleet" | "council" | "skyline" | "emblem";
  featured?: boolean;
  description: string;
}
