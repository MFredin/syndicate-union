import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { GalleryArt } from "@/components/graphics/gallery-art";
import { Button } from "@/components/ui/button";
import { galleryItems } from "@/data/gallery";

export function FeaturedArtwork() {
  const featured = galleryItems.filter((g) => g.featured).slice(0, 3);

  return (
    <section className="section-y">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Featured Artwork" title="Made by Unionists, for Unionists" />
          <Button asChild variant="outline">
            <Link href="/gallery">
              Visit the gallery
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <Link key={item.id} href="/gallery" className="group block overflow-hidden rounded-md border border-border shadow-soft transition-shadow hover:shadow-elevated">
              <GalleryArt item={item} className="transition-transform duration-500 group-hover:scale-105" />
              <div className="p-4">
                <p className="font-heading text-sm tracking-wide">{item.title}</p>
                <p className="text-xs text-muted-foreground">by {item.creator}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
