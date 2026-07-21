import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { EventCard } from "@/components/common/event-card";
import { Button } from "@/components/ui/button";
import { events } from "@/data/events";

export function UpcomingEvents() {
  const upcoming = events
    .filter((e) => new Date(e.startsAtUTC).getTime() > Date.now())
    .sort((a, b) => new Date(a.startsAtUTC).getTime() - new Date(b.startsAtUTC).getTime())
    .slice(0, 3);

  return (
    <section className="section-y bg-secondary/40">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="What's On" title="Upcoming Events" />
          <Button asChild variant="outline">
            <Link href="/events">
              Full calendar
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
