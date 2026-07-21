import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { MiniCalendar } from "@/components/common/mini-calendar";
import { EventCard } from "@/components/common/event-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
        crumb="Events"
        title="Union Events"
        description="Every time shown converts automatically to your device's local timezone."
      />

      <section className="section-y">
        <div className="container grid gap-10 lg:grid-cols-[300px_1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <MiniCalendar events={events} />
          </div>

          <Tabs defaultValue="upcoming">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming ({upcoming.length})</TabsTrigger>
              <TabsTrigger value="past">Past ({past.length})</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              <div className="flex flex-col gap-4">
                {upcoming.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="past">
              <div className="flex flex-col gap-4">
                {past.map((event) => (
                  <EventCard key={event.id} event={event} isPast />
                ))}
              </div>
            </TabsContent>
          </Tabs>
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
