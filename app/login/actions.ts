"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE } from "@/lib/auth";

export async function demoLogin(formData: FormData) {
  const callsign = String(formData.get("callsign") ?? "").trim();
  if (!callsign) return;

  cookies().set(SESSION_COOKIE, callsign, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 4,
  });

  redirect("/departments");
}

export async function demoLogout() {
  cookies().delete(SESSION_COOKIE);
  redirect("/login");
}
