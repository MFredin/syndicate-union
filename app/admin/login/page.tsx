import type { Metadata } from "next";
import { AdminLoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Admin Sign In",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <section className="section-y flex min-h-screen items-center pt-32">
      <div className="container flex justify-center">
        <div className="w-full max-w-sm rounded-lg border border-border bg-card p-8 shadow-elevated">
          <h1 className="font-heading text-2xl">Admin Sign In</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Syndicate Union content management. Access is limited to named admin accounts.
          </p>
          <AdminLoginForm />
        </div>
      </div>
    </section>
  );
}
