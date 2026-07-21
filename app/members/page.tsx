import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { MembersExplorer } from "@/components/common/members-explorer";
import { members } from "@/data/members";

export const metadata: Metadata = {
  title: "Member Directory",
  description: "Search and browse the Unionists across every department of Syndicate Union.",
};

export default function MembersPage() {
  return (
    <>
      <PageHero
        variant="community"
        eyebrow="Directory"
        crumb="Members"
        title="Member Directory"
        description="A searchable roster of the Unionists building Syndicate Union, one department at a time."
      />
      <section className="section-y">
        <div className="container">
          <MembersExplorer members={members} />
        </div>
      </section>
    </>
  );
}
