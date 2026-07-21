/**
 * Type definitions only — the live data now lives in Postgres
 * (see lib/db/schema.ts + lib/db/queries.ts), seeded from this file's
 * original placeholder content by scripts/seed.ts.
 */
export interface Ally {
  id: string;
  name: string;
  relationship: string;
}
