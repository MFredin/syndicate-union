/**
 * Generates plain SQL (no live DB connection) to create/update an admin
 * account — the SQL equivalent of scripts/create-admin.ts, for when the
 * target database can't be reached directly. Paste the output into the
 * provider's SQL editor (Neon console, etc.).
 *
 * Usage:
 *   npx tsx scripts/generate-admin-sql.ts <output-file> --name "Jane Doe" --email jane@example.com --password "..."
 */
import { config } from "dotenv";
config({ path: ".env.local", quiet: true });

import { writeFileSync } from "node:fs";
import bcrypt from "bcryptjs";
import { db } from "../lib/db/client";
import { admins } from "../lib/db/schema";

function getArg(flag: string): string | undefined {
  const idx = process.argv.indexOf(flag);
  if (idx === -1 || idx === process.argv.length - 1) return undefined;
  return process.argv[idx + 1];
}

function literal(value: string): string {
  return `'${value.replace(/'/g, "''")}'`;
}

async function main() {
  const outPath = process.argv[2];
  const name = getArg("--name");
  const email = getArg("--email")?.trim().toLowerCase();
  const password = getArg("--password");

  if (!outPath || !name || !email || !password) {
    console.error(
      'Usage: npx tsx scripts/generate-admin-sql.ts <output-file> --name "Jane Doe" --email jane@example.com --password "..."'
    );
    process.exit(1);
  }
  if (password.length < 8) {
    console.error("Password must be at least 8 characters.");
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const { sql, params } = db
    .insert(admins)
    .values({ name, email, passwordHash })
    .onConflictDoUpdate({ target: admins.email, set: { name, passwordHash } })
    .toSQL();

  let i = 0;
  const inlined = sql.replace(/\$(\d+)/g, () => literal(String(params[i++])));

  writeFileSync(outPath, `${inlined};\n`);
  console.error(`Wrote admin insert for ${email} to ${outPath}`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
