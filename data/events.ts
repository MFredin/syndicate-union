/**
 * Type definitions only — the live data now lives in Postgres
 * (see lib/db/schema.ts + lib/db/queries.ts), seeded from this file's
 * original placeholder content by scripts/seed.ts.
 */
export interface Event {
  id: string;
  title: string;
  category: "Operation" | "Social" | "Training" | "Diplomacy" | "Broadcast";
  startsAtUTC: string; // ISO 8601, UTC
  durationMinutes: number;
  description: string;
  location: string;
}
