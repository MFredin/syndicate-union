"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  const [subscribed, setSubscribed] = React.useState(false);

  if (subscribed) {
    return (
      <p className="mt-4 flex items-center gap-2 text-sm text-navy-foreground/80">
        <Check className="size-4 text-gold" />
        Thanks — check your inbox to confirm.
      </p>
    );
  }

  return (
    <form
      className="mt-4 flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSubscribed(true);
      }}
      aria-label="Newsletter signup"
    >
      <Input
        type="email"
        required
        placeholder="you@example.com"
        className="border-white/15 bg-white/5 text-navy-foreground placeholder:text-navy-foreground/40"
        aria-label="Email address"
      />
      <Button type="submit" variant="gold" className="shrink-0">
        Subscribe
      </Button>
    </form>
  );
}
