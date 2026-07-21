import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { GalleryExplorer } from "@/components/common/gallery-explorer";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Original artwork, screenshots, and videos from Syndicate Union's creator community.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        variant="lore"
        eyebrow="Creator Community"
        title="Gallery"
        description="Artwork, screenshots, and highlight reels from Unionists across the frontier."
      />
      <section className="section-y">
        <div className="container">
          <GalleryExplorer items={galleryItems} />
        </div>
      </section>
    </>
  );
}
