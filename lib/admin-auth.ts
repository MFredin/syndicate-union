import { cookies } from "next/headers";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE,
  createAdminSessionToken,
  verifyAdminSessionToken,
  type AdminSessionPayload,
} from "./admin-session";

export { ADMIN_SESSION_COOKIE, ADMIN_SESSION_MAX_AGE, createAdminSessionToken };
export type { AdminSessionPayload };

/** Node-only helpers — safe in Server Components, Route Handlers, and Server
 * Actions, but NOT in middleware (see admin-session.ts for the edge-safe half). */
export async function getAdminSession(): Promise<AdminSessionPayload | null> {
  const token = cookies().get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifyAdminSessionToken(token);
}

export function setAdminSessionCookie(token: string) {
  cookies().set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    // NODE_ENV is "production" for local `next start` testing too, which
    // serves plain HTTP — gate on an actual Vercel deployment instead so the
    // cookie isn't silently dropped by the browser during local testing.
    secure: Boolean(process.env.VERCEL),
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE,
  });
}

export function clearAdminSessionCookie() {
  cookies().set(ADMIN_SESSION_COOKIE, "", { path: "/", maxAge: 0 });
}
