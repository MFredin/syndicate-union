import { SignJWT, jwtVerify } from "jose";

/**
 * Edge-safe session primitives — no `next/headers`, no bcrypt, no DB access.
 * This is the only admin-session module `middleware.ts` may import, since
 * middleware runs on the Edge runtime.
 */
export const ADMIN_SESSION_COOKIE = "su_admin_session";
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days, in seconds

export interface AdminSessionPayload {
  adminId: number;
  name: string;
  email: string;
}

function getSecretKey() {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error("SESSION_SECRET is not set — see .env.local.example.");
  }
  return new TextEncoder().encode(secret);
}

export async function createAdminSessionToken(payload: AdminSessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${ADMIN_SESSION_MAX_AGE}s`)
    .sign(getSecretKey());
}

export async function verifyAdminSessionToken(token: string): Promise<AdminSessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    if (
      typeof payload.adminId !== "number" ||
      typeof payload.name !== "string" ||
      typeof payload.email !== "string"
    ) {
      return null;
    }
    return { adminId: payload.adminId, name: payload.name, email: payload.email };
  } catch {
    return null;
  }
}
