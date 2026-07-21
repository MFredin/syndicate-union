"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Event } from "@/data/events";

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

/** Compact month calendar for a sidebar — shows a dot on days with events
 * instead of the full-width grid's inline title previews. */
export function MiniCalendar({ events }: { events: Event[] }) {
  const [cursor, setCursor] = React.useState(() => new Date());
  const today = new Date();

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const total = daysInMonth(year, month);
  const firstWeekday = new Date(year, month, 1).getDay();
  const monthLabel = new Intl.DateTimeFormat(undefined, { month: "long", year: "numeric" }).format(cursor);

  const eventDays = new Set<number>();
  events.forEach((e) => {
    const d = new Date(e.startsAtUTC);
    if (d.getFullYear() === year && d.getMonth() === month) {
      eventDays.add(d.getDate());
    }
  });

  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: total }, (_, i) => i + 1),
  ];

  const isToday = (day: number) =>
    day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  return (
    <div className="rounded-md border border-border bg-card p-4 shadow-soft">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-sm">{monthLabel}</h3>
        <div className="flex gap-1">
          <button
            type="button"
            aria-label="Previous month"
            onClick={() => setCursor(new Date(year, month - 1, 1))}
            className="flex size-6 items-center justify-center rounded-sm text-muted-foreground hover:bg-secondary hover:text-primary"
          >
            <ChevronLeft className="size-3.5" />
          </button>
          <button
            type="button"
            aria-label="Next month"
            onClick={() => setCursor(new Date(year, month + 1, 1))}
            className="flex size-6 items-center justify-center rounded-sm text-muted-foreground hover:bg-secondary hover:text-primary"
          >
            <ChevronRight className="size-3.5" />
          </button>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-y-1 text-center text-[11px]">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={i} className="text-muted-foreground">
            {d}
          </div>
        ))}
        {cells.map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5 py-1">
            {day && (
              <>
                <span
                  className={cn(
                    "flex size-6 items-center justify-center rounded-full text-xs",
                    isToday(day) && "bg-primary text-primary-foreground"
                  )}
                >
                  {day}
                </span>
                <span className={cn("size-1 rounded-full", eventDays.has(day) ? "bg-gold" : "bg-transparent")} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
