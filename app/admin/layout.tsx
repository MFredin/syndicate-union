import type { Metadata } from "next";
import Link from "next/link";
import { getAdminSession } from "@/lib/admin-auth";
import { adminLogout } from "@/app/admin/login/actions";
import { Button } from "@/components/ui/button";
import { LogoHorizontal } from "@/components/brand/logo";

export const metadata: Metadata = {
  title: { default: "Admin", template: "%s — Admin — Syndicate Union" },
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getAdminSession();

  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="glass-solid sticky top-0 z-40 border-b shadow-soft">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/admin" prefetch={false} className="flex items-center gap-3">
            <LogoHorizontal className="scale-90" />
          </Link>
          {session && (
            <div className="flex items-center gap-3 text-sm">
              <span className="text-muted-foreground">
                Signed in as <span className="font-medium text-foreground">{session.name}</span>
              </span>
              <form action={adminLogout}>
                <Button type="submit" variant="outline" size="sm">
                  Sign out
                </Button>
              </form>
            </div>
          )}
        </div>
      </header>
      <main className="container py-10">{children}</main>
    </div>
  );
}
