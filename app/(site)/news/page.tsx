import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { NewsExplorer } from "@/components/common/news-explorer";
import { getAllContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "News",
  description: "Announcements, event recaps, and community dispatches from across Syndicate Union.",
};

export default async function NewsPage() {
  const articles = (await getAllContent("news")).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <PageHero
        variant="news"
        eyebrow="Dispatches"
        crumb="News"
        title="News from the Union"
        description="Announcements, operation recaps, and community stories — updated weekly."
      />
      <section className="section-y">
        <div className="container">
          <NewsExplorer articles={articles} />
        </div>
      </section>
    </>
  );
}
