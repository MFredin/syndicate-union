import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { GuidesExplorer } from "@/components/common/guides-explorer";
import { getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Guides",
  description: "Strategy guides covering economy, combat, fleet composition, diplomacy, and onboarding.",
};

export default function GuidesPage() {
  const guides = getAllContent("guides").sort(
    (a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime()
  );

  return (
    <>
      <PageHero
        variant="recruitment"
        eyebrow="Guide Library"
        title="Strategy, written by the people who use it"
        description="Filter by difficulty and category to find exactly what you need, from newcomer basics to advanced fleet doctrine."
      />
      <section className="section-y">
        <div className="container">
          <GuidesExplorer guides={guides} />
        </div>
      </section>
    </>
  );
}
