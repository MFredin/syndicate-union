"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { admins } from "@/lib/db/schema";
import { createAdminSessionToken, setAdminSessionCookie, clearAdminSessionCookie } from "@/lib/admin-auth";

export interface LoginState {
  error?: string;
}

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 60_000;
const attemptsByEmail = new Map<string, { count: number; lockedUntil: number }>();

function checkAndRecordAttempt(email: string): string | null {
  const now = Date.now();
  const entry = attemptsByEmail.get(email);
  if (entry && entry.lockedUntil > now) {
    const seconds = Math.ceil((entry.lockedUntil - now) / 1000);
    return `Too many failed attempts. Try again in ${seconds}s.`;
  }
  return null;
}

function recordFailedAttempt(email: string) {
  const now = Date.now();
  const entry = attemptsByEmail.get(email);
  // A previous lockout that has since expired starts the counter over; a
  // fresh (never-locked) entry just keeps accumulating.
  const previousCount = !entry || (entry.lockedUntil > 0 && entry.lockedUntil <= now) ? 0 : entry.count;
  const count = previousCount + 1;
  attemptsByEmail.set(email, {
    count,
    lockedUntil: count >= MAX_ATTEMPTS ? now + LOCKOUT_MS : 0,
  });
}

function clearAttempts(email: string) {
  attemptsByEmail.delete(email);
}

export async function adminLogin(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const lockoutError = checkAndRecordAttempt(email);
  if (lockoutError) {
    return { error: lockoutError };
  }

  const [admin] = await db.select().from(admins).where(eq(admins.email, email)).limit(1);
  if (!admin) {
    recordFailedAttempt(email);
    return { error: "Invalid email or password." };
  }

  const valid = await bcrypt.compare(password, admin.passwordHash);
  if (!valid) {
    recordFailedAttempt(email);
    return { error: "Invalid email or password." };
  }

  clearAttempts(email);

  const token = await createAdminSessionToken({ adminId: admin.id, name: admin.name, email: admin.email });
  setAdminSessionCookie(token);
  redirect("/admin");
}

export async function adminLogout() {
  clearAdminSessionCookie();
  redirect("/admin/login");
}
