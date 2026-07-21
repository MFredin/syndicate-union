import { SectionHeading } from "@/components/common/section-heading";
import { ProfileCard } from "@/components/common/profile-card";
import { getMembers, getDepartments, getBadges } from "@/lib/db/queries";
import type { Badge } from "@/data/badges";

export async function CommunityHighlights() {
  const [members, departments, badges] = await Promise.all([
    getMembers(),
    getDepartments(),
    getBadges(),
  ]);
  const highlighted = members.filter((m) => m.badges.length > 0).slice(0, 4);

  return (
    <section className="section-y bg-secondary/40">
      <div className="container">
        <SectionHeading
          eyebrow="Community Highlights"
          title="Unionists making an impact this season"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {highlighted.map((member) => {
            const dept = departments.find((d) => d.name === member.department);
            const resolvedBadges = member.badges
              .map((id) => badges.find((b) => b.id === id))
              .filter((b): b is Badge => Boolean(b));
            return (
              <ProfileCard
                key={member.id}
                seed={member.id}
                name={member.callsign}
                role={member.role}
                department={member.department}
                departmentIcon={dept?.icon}
                badges={resolvedBadges}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
