"use client";

import * as React from "react";
import { CalendarPlus, Check, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Event } from "@/data/events";

const categoryVariant: Record<Event["category"], "default" | "gold" | "secondary" | "outline"> = {
  Operation: "default",
  Diplomacy: "secondary",
  Training: "outline",
  Social: "gold",
  Broadcast: "secondary",
};

export function EventCard({ event, isPast = false }: { event: Event; isPast?: boolean }) {
  const [rsvp, setRsvp] = React.useState(false);
  const [count, setCount] = React.useState(() => 8 + (event.id.charCodeAt(0) % 40));

  const date = new Date(event.startsAtUTC);
  const localDate = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(date);
  const localTime = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(date);

  return (
    <Card className={isPast ? "opacity-70" : "transition-shadow hover:shadow-elevated"}>
      <CardContent className="flex flex-col gap-3 pt-6">
        <div className="flex items-start justify-between gap-3">
          <Badge variant={categoryVariant[event.category]}>{event.category}</Badge>
          {!isPast && (
            <span className="text-xs text-muted-foreground">{count} attending</span>
          )}
        </div>
        <h3 className="font-heading text-lg">{event.title}</h3>
        <p className="text-sm text-muted-foreground">{event.description}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5 text-gold" />
            {localDate}, {localTime}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-gold" />
            {event.location}
          </span>
        </div>
        {!isPast && (
          <div className="flex gap-2 pt-2">
            <Button
              size="sm"
              variant={rsvp ? "primary" : "outline"}
              onClick={() => {
                setRsvp((r) => !r);
                setCount((c) => (rsvp ? c - 1 : c + 1));
              }}
            >
              {rsvp ? <Check /> : null}
              {rsvp ? "You're going" : "RSVP"}
            </Button>
            <Button size="sm" variant="ghost">
              <CalendarPlus />
              Add to calendar
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
