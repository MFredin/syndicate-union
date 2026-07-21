import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { DownloadsExplorer } from "@/components/common/downloads-explorer";
import { downloads } from "@/data/downloads";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Wallpapers, brand kit assets, printable guides, and templates for Unionists.",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        variant="contact"
        eyebrow="Asset Library"
        title="Downloads"
        description="Wallpapers, brand assets, printable guides, and templates — free to use as a Unionist."
      />
      <section className="section-y">
        <div className="container">
          <DownloadsExplorer assets={downloads} />
        </div>
      </section>
    </>
  );
}
