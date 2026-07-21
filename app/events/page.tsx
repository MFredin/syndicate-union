import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { MonthCalendar } from "@/components/common/month-calendar";
import { EventCard } from "@/components/common/event-card";
import { Button } from "@/components/ui/button";
import { events } from "@/data/events";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: "The Syndicate Union events calendar — war nights, onboarding sessions, diplomacy summits, and community socials.",
};

export default function EventsPage() {
  const now = Date.now();
  const upcoming = events
    .filter((e) => new Date(e.startsAtUTC).getTime() > now)
    .sort((a, b) => new Date(a.startsAtUTC).getTime() - new Date(b.startsAtUTC).getTime());
  const past = events
    .filter((e) => new Date(e.startsAtUTC).getTime() <= now)
    .sort((a, b) => new Date(b.startsAtUTC).getTime() - new Date(a.startsAtUTC).getTime());

  return (
    <>
      <PageHero
        variant="events"
        eyebrow="Calendar"
        title="Union Events"
        description="Every time shown converts automatically to your device's local timezone."
      />

      <section className="section-y">
        <div className="container">
          <MonthCalendar events={events} monthDate={new Date()} />
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container">
          <SectionHeading eyebrow="Upcoming" title="What's on the calendar" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container">
          <SectionHeading eyebrow="Past Events" title="What we've already done" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {past.map((event) => (
              <EventCard key={event.id} event={event} isPast />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-navy text-navy-foreground">
        <div className="container flex flex-col items-center gap-4 text-center">
          <MessageCircle className="size-8 text-gold-vivid" />
          <h2 className="font-heading text-2xl">Every event is coordinated on Discord</h2>
          <p className="max-w-xl text-navy-foreground/70">
            RSVP here for planning purposes, then join the voice channel listed on each event when it&rsquo;s time.
          </p>
          <Button asChild variant="gold" size="lg">
            <a href={SITE.social.discord} target="_blank" rel="noreferrer noopener">
              Open Discord
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
