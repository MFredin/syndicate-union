/**
 * Type definitions only — the live data now lives in Postgres
 * (see lib/db/schema.ts + lib/db/queries.ts), seeded from this file's
 * original placeholder content by scripts/seed.ts.
 */
export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: "Planned" | "In Progress" | "Complete";
  quarter: string;
}
