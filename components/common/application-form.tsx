"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { departments } from "@/data/departments";

export function ApplicationForm() {
  const [submitted, setSubmitted] = React.useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="size-10 text-gold" />
        <h3 className="font-heading text-xl">Application received</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thank you for applying to Syndicate Union. Recruitment &amp; Onboarding will reach out on Discord within 48 hours.
        </p>
        <p className="text-xs text-muted-foreground">
          (This is a demo form — no data was actually submitted.)
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5 rounded-lg border border-border bg-card p-8 shadow-soft"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="callsign">In-game callsign</Label>
          <Input id="callsign" name="callsign" required placeholder="Vantage" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="discord">Discord username</Label>
          <Input id="discord" name="discord" required placeholder="yourname" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="department">Department of interest</Label>
        <select
          id="department"
          name="department"
          required
          className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
        >
          <option value="">Not sure yet — match me with a mentor</option>
          {departments.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Tell us a bit about yourself</Label>
        <Textarea id="message" name="message" required placeholder="How did you hear about SU? What are you hoping to get out of the community?" />
      </div>
      <Button type="submit" size="lg" variant="gold" className="mt-2">
        Submit Application
      </Button>
      <p className="text-xs text-muted-foreground">
        This is a demo form for design purposes — submissions are not sent anywhere.
      </p>
    </form>
  );
}
