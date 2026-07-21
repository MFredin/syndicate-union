/**
 * Type definitions only — the live data now lives in Postgres
 * (see lib/db/schema.ts + lib/db/queries.ts), seeded from this file's
 * original placeholder content by scripts/seed.ts.
 */
export interface Department {
  id: string;
  name: string;
  icon: string;
  summary: string;
  description: string;
  responsibilities: string[];
  openPositions: number;
}
