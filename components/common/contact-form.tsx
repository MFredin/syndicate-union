"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="size-10 text-gold" />
        <h3 className="font-heading text-xl tracking-wide">Message sent</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out — we typically respond within two business days.
        </p>
        <p className="text-xs text-muted-foreground">(This is a demo form — no data was actually submitted.)</p>
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
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" required placeholder="What's this about?" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required placeholder="How can we help?" />
      </div>
      <Button type="submit" size="lg" variant="gold" className="mt-2">
        Send Message
      </Button>
    </form>
  );
}
