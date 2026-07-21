/**
 * Seed (or reset the password of) a named admin account.
 *
 * Usage:
 *   npm run admin:create -- --name "Jane Doe" --email jane@example.com --password "correct horse battery staple"
 *
 * Re-running with the same email updates the name/password instead of failing.
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import bcrypt from "bcryptjs";
import { db } from "../lib/db/client";
import { admins } from "../lib/db/schema";

function getArg(flag: string): string | undefined {
  const idx = process.argv.indexOf(flag);
  if (idx === -1 || idx === process.argv.length - 1) return undefined;
  return process.argv[idx + 1];
}

async function main() {
  const name = getArg("--name");
  const email = getArg("--email")?.trim().toLowerCase();
  const password = getArg("--password");

  if (!name || !email || !password) {
    console.error(
      'Usage: npm run admin:create -- --name "Jane Doe" --email jane@example.com --password "..."'
    );
    process.exit(1);
  }

  if (password.length < 8) {
    console.error("Password must be at least 8 characters.");
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await db
    .insert(admins)
    .values({ name, email, passwordHash })
    .onConflictDoUpdate({ target: admins.email, set: { name, passwordHash } });

  console.log(`Admin account ready: ${name} <${email}>`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
