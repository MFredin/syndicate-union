/**
 * Type definitions only — the live data now lives in Postgres
 * (see lib/db/schema.ts + lib/db/queries.ts), seeded from this file's
 * original placeholder content by scripts/seed.ts.
 */
export interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  responsibilities: string[];
  discord?: string;
}
