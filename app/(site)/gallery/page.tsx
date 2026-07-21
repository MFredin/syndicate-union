import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { GalleryExplorer } from "@/components/common/gallery-explorer";
import { GalleryArt } from "@/components/graphics/gallery-art";
import { getGalleryItems } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Original artwork, screenshots, and videos from Syndicate Union's creator community.",
};

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems();
  const spotlight = galleryItems.filter((item) => item.featured);

  return (
    <>
      <PageHero
        variant="gallery"
        eyebrow="Creator Community"
        crumb="Gallery"
        title="Gallery"
        description="Artwork, screenshots, and highlight reels from Unionists across the frontier."
      />

      {spotlight.length > 0 && (
        <section className="section-y">
          <div className="container">
            <SectionHeading eyebrow="Creator Spotlight" title="Featured this season" />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {spotlight.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-md border border-border shadow-soft">
                  <GalleryArt item={item} className="aspect-video" />
                  <div className="p-4">
                    <p className="font-heading text-base">{item.title}</p>
                    <p className="text-sm text-primary">by {item.creator}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-y bg-secondary/40">
        <div className="container">
          <SectionHeading eyebrow="Full Gallery" title="Everything the community has shared" />
          <div className="mt-10">
            <GalleryExplorer items={galleryItems} />
          </div>
        </div>
      </section>
    </>
  );
}
