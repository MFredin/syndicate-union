import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GalleryArt } from "@/components/graphics/gallery-art";
import { getEvents, getGalleryItems } from "@/lib/db/queries";

const joinPoints = [
  "Be part of a strong community",
  "Access exclusive resources",
  "Grow and lead with others",
  "Make a real impact",
];

export async function EventsArtworkJoinRow() {
  const [events, galleryItems] = await Promise.all([getEvents(), getGalleryItems()]);
  const upcoming = events
    .filter((e) => new Date(e.startsAtUTC).getTime() > Date.now())
    .sort((a, b) => new Date(a.startsAtUTC).getTime() - new Date(b.startsAtUTC).getTime())
    .slice(0, 3);
  const featured = galleryItems.find((g) => g.featured) ?? galleryItems[0];

  return (
    <section className="section-y">
      <div className="container grid gap-6 lg:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg">Upcoming Events</h3>
              <Button asChild variant="link" className="px-0">
                <Link href="/events">View Calendar</Link>
              </Button>
            </div>
            <ul className="mt-4 flex flex-col gap-4">
              {upcoming.map((event) => {
                const date = new Date(event.startsAtUTC);
                return (
                  <li key={event.id} className="flex gap-3">
                    <div className="flex size-12 shrink-0 flex-col items-center justify-center rounded-md bg-primary/10 text-primary">
                      <span className="text-[10px] font-semibold uppercase leading-none">
                        {new Intl.DateTimeFormat(undefined, { month: "short" }).format(date)}
                      </span>
                      <span className="font-heading text-base leading-none">{date.getDate()}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{event.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Intl.DateTimeFormat(undefined, {
                          hour: "numeric",
                          minute: "2-digit",
                          timeZoneName: "short",
                        }).format(date)}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="flex items-center justify-between px-6 pt-6">
            <h3 className="font-heading text-lg">Featured Artwork</h3>
            <Button asChild variant="link" className="px-0">
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
          <Link href="/gallery" className="group mt-4 block">
            <GalleryArt item={featured} className="transition-transform duration-500 group-hover:scale-105" />
          </Link>
          <div className="px-6 py-4">
            <p className="font-heading text-sm">{featured.title}</p>
            <p className="text-xs text-muted-foreground">by {featured.creator}</p>
          </div>
        </Card>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6">
            <h3 className="font-heading text-lg">Join the Union</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">
              We are always looking for dedicated Unionists who share our values and vision.
              There is a place for you in SU.
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {joinPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 shrink-0 text-gold-vivid" />
                  {point}
                </li>
              ))}
            </ul>
            <Button asChild variant="gold" className="mt-6 w-full">
              <Link href="/recruitment">Apply Now</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
