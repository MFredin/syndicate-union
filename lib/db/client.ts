import postgres from "postgres";
import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

/**
 * Lazily initialized so importing this module (e.g. transitively, via a
 * server action) never throws or opens a connection until a query actually
 * runs. That keeps Next's build-time page-data collection working even when
 * DATABASE_URL isn't configured for the current environment.
 */
let _db: PostgresJsDatabase<typeof schema> | null = null;

function getDb(): PostgresJsDatabase<typeof schema> {
  if (_db) return _db;
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set — see .env.local.example for setup.");
  }
  // A pool of 1 serializes every concurrent query onto a single connection —
  // fine for a single request, but the admin dashboard's link prefetching
  // fires several authenticated queries in parallel and starves under that.
  const client = postgres(url, { max: 10 });
  _db = drizzle(client, { schema });
  return _db;
}

export const db: PostgresJsDatabase<typeof schema> = new Proxy({} as PostgresJsDatabase<typeof schema>, {
  get(_target, prop, receiver) {
    return Reflect.get(getDb(), prop, receiver);
  },
});
