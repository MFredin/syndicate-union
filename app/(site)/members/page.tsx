import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { MembersExplorer } from "@/components/common/members-explorer";
import { getMembers, getDepartments, getBadges } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Member Directory",
  description: "Search and browse the Unionists across every department of Syndicate Union.",
};

export default async function MembersPage() {
  const [members, departments, badges] = await Promise.all([
    getMembers(),
    getDepartments(),
    getBadges(),
  ]);
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
          <MembersExplorer members={members} departments={departments} badges={badges} />
        </div>
      </section>
    </>
  );
}
