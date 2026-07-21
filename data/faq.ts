/**
 * Type definitions only — the live data now lives in Postgres
 * (see lib/db/schema.ts + lib/db/queries.ts), seeded from this file's
 * original placeholder content by scripts/seed.ts.
 */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Membership" | "Departments" | "Events" | "Technical";
  popular?: boolean;
}
