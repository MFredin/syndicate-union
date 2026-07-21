import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { demoLogin } from "./actions";

export const metadata: Metadata = {
  title: "Member Sign In",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <section className="section-y flex min-h-screen items-center pt-32">
      <div className="container flex justify-center">
        <div className="w-full max-w-sm rounded-lg border border-border bg-card p-8 shadow-elevated">
          <h1 className="font-heading text-2xl tracking-wide">Member Sign In</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter any callsign to preview the protected Departments area.
          </p>
          <div className="mt-4 flex items-start gap-2 rounded-md border border-gold/30 bg-gold/10 p-3 text-xs text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-gold" />
            This is a demo authentication flow illustrating the architecture for future
            role-gated Department areas — it is not connected to a real account system.
          </div>
          <form action={demoLogin} className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="callsign">Callsign</Label>
              <Input id="callsign" name="callsign" required placeholder="Vantage" autoFocus />
            </div>
            <Button type="submit" size="lg" variant="gold">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
