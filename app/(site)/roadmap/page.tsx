import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { Timeline } from "@/components/common/timeline";
import { RoadmapExplorer } from "@/components/common/roadmap-explorer";
import { getRoadmap } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "What Syndicate Union is building next, tracked publicly by status and quarter.",
};

export default async function RoadmapPage() {
  const roadmap = await getRoadmap();
  return (
    <>
      <PageHero
        variant="roadmap"
        eyebrow="Public Roadmap"
        crumb="Roadmap"
        title="What's Next for SU"
        description="Published transparently, updated every quarter by the Council of Elders."
      />

      <section className="section-y">
        <div className="container">
          <SectionHeading eyebrow="By Status" title="Current priorities" />
          <div className="mt-10">
            <RoadmapExplorer items={roadmap} />
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Timeline View" title="Roadmap by quarter" />
          <Timeline
            className="mt-10"
            items={roadmap
              .sort((a, b) => a.quarter.localeCompare(b.quarter))
              .map((r) => ({ id: r.id, label: r.quarter, title: r.title, description: `${r.status} — ${r.description}` }))}
          />
        </div>
      </section>
    </>
  );
}
