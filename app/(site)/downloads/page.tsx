import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { DownloadsExplorer } from "@/components/common/downloads-explorer";
import { getDownloads } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Wallpapers, brand kit assets, printable guides, and templates for Unionists.",
};

export default async function DownloadsPage() {
  const downloads = await getDownloads();
  return (
    <>
      <PageHero
        variant="downloads"
        eyebrow="Asset Library"
        crumb="Downloads"
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
