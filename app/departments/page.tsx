import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { departments } from "@/data/departments";
import { getDemoSession } from "@/lib/auth";
import { demoLogout } from "@/app/login/actions";

export const metadata: Metadata = {
  title: "Union Departments",
  robots: { index: false, follow: false },
};

export default function DepartmentsPage() {
  const session = getDemoSession();
  if (!session) redirect("/login");

  return (
    <section className="section-y pt-32">
      <div className="container max-w-4xl">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-md border border-gold/30 bg-gold/10 p-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5 text-gold" />
            <p className="text-sm">
              Signed in as <strong>{session.callsign}</strong> — this is a demo protected area.
            </p>
          </div>
          <form action={demoLogout}>
            <Button size="sm" variant="outline" type="submit">
              Sign out
            </Button>
          </form>
        </div>

        <h1 className="mt-10 font-heading text-3xl">Union Departments</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          This area demonstrates where role-based, member-only department tools would live —
          internal briefings, rosters, and operation planning docs, gated per department in a
          future release.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {departments.map((d) => (
            <Card key={d.id}>
              <CardContent className="pt-6">
                <h3 className="font-heading text-base">{d.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
