import { SectionHeading } from "@/components/common/section-heading";
import { ProfileCard } from "@/components/common/profile-card";
import { members } from "@/data/members";

export function CommunityHighlights() {
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
          {highlighted.map((member) => (
            <ProfileCard
              key={member.id}
              seed={member.id}
              name={member.callsign}
              role={member.role}
              department={member.department}
              badgeIds={member.badges}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
