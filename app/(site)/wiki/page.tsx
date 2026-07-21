import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { WikiSidebar } from "@/components/common/wiki-sidebar";
import { WikiExplorer } from "@/components/common/wiki-explorer";
import { getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Wiki",
  description: "The Syndicate Union knowledge base — foundations, economy, combat, diplomacy, and community reference articles.",
};

export default async function WikiPage() {
  const articles = await getAllContent("wiki");

  return (
    <>
      <PageHero
        variant="wiki"
        eyebrow="Knowledge Base"
        crumb="Wiki"
        title="The Syndicate Union Wiki"
        description="Structured reference articles covering everything from the Union Charter to the current war system."
      />
      <section className="section-y">
        <div className="container grid gap-10 lg:grid-cols-[240px_1fr]">
          <WikiSidebar articles={articles} />
          <WikiExplorer articles={articles} />
        </div>
      </section>
    </>
  );
}
