import { cookies } from "next/headers";

/**
 * Placeholder auth layer demonstrating the architecture for future
 * role-gated Union Department areas. This is NOT a real authentication
 * system — it sets a plain cookie with no signing/expiry/user database.
 * Swap this module for a real provider (e.g. NextAuth/Auth.js) before
 * handling real credentials.
 */
export const SESSION_COOKIE = "su_demo_session";

export interface DemoSession {
  callsign: string;
  role: "member";
}

export function getDemoSession(): DemoSession | null {
  const value = cookies().get(SESSION_COOKIE)?.value;
  if (!value) return null;
  return { callsign: value, role: "member" };
}
