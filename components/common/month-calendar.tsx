import { cn } from "@/lib/utils";
import type { Event } from "@/data/events";

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export function MonthCalendar({ events, monthDate }: { events: Event[]; monthDate: Date }) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const total = daysInMonth(year, month);
  const firstWeekday = new Date(year, month, 1).getDay();
  const monthLabel = new Intl.DateTimeFormat(undefined, { month: "long", year: "numeric" }).format(monthDate);

  const eventsByDay = new Map<number, Event[]>();
  events.forEach((e) => {
    const d = new Date(e.startsAtUTC);
    if (d.getFullYear() === year && d.getMonth() === month) {
      const list = eventsByDay.get(d.getDate()) ?? [];
      list.push(e);
      eventsByDay.set(d.getDate(), list);
    }
  });

  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: total }, (_, i) => i + 1),
  ];

  return (
    <div>
      <h3 className="mb-4 font-heading text-lg">{monthLabel}</h3>
      <div className="grid grid-cols-7 gap-px overflow-hidden rounded-md border border-border bg-border text-center text-xs">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="bg-secondary py-2 font-semibold text-muted-foreground">
            {d}
          </div>
        ))}
        {cells.map((day, i) => {
          const dayEvents = day ? eventsByDay.get(day) : undefined;
          return (
            <div
              key={i}
              className={cn(
                "flex min-h-20 flex-col gap-1 bg-card p-1.5 text-left",
                !day && "bg-background"
              )}
            >
              {day && (
                <>
                  <span className="text-xs text-muted-foreground">{day}</span>
                  {dayEvents?.slice(0, 2).map((e) => (
                    <span
                      key={e.id}
                      className="truncate rounded-sm bg-primary/10 px-1 py-0.5 text-[10px] text-primary"
                      title={e.title}
                    >
                      {e.title}
                    </span>
                  ))}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
