import { Card, CardContent } from "@/components/ui/card";
import { SeededAvatar } from "@/components/graphics/seeded-avatar";
import { badges as allBadges } from "@/data/badges";
import { departments } from "@/data/departments";
import { iconMap } from "@/components/common/icon-map";

interface ProfileCardProps {
  seed: string;
  name: string;
  role: string;
  department: string;
  badgeIds?: string[];
  meta?: string;
}

export function ProfileCard({ seed, name, role, department, badgeIds = [], meta }: ProfileCardProps) {
  const resolvedBadges = badgeIds
    .map((id) => allBadges.find((b) => b.id === id))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  const dept = departments.find((d) => d.name === department);
  const DeptIcon = dept ? iconMap[dept.icon] : undefined;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <CardContent className="flex flex-col items-center gap-3 pt-6 text-center">
        <div className="relative size-16">
          <div className="size-16 overflow-hidden rounded-md border border-border shadow-soft">
            <SeededAvatar seed={seed} />
          </div>
          {DeptIcon && (
            <span
              className="absolute -bottom-1.5 -right-1.5 flex size-6 items-center justify-center rounded-full border-2 border-card bg-primary text-primary-foreground"
              title={department}
            >
              <DeptIcon className="size-3" />
            </span>
          )}
        </div>
        <div>
          <h3 className="font-heading text-base">{name}</h3>
          <p className="text-sm text-primary">{role}</p>
          <p className="text-xs text-muted-foreground">{department}</p>
        </div>
        {meta && <p className="text-xs text-muted-foreground">{meta}</p>}
        {resolvedBadges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1.5 pt-1">
            {resolvedBadges.map((badge) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={badge.id}
                src={`/assets/04-badges/${badge.icon}.svg`}
                alt={`${badge.name} — ${badge.description}`}
                title={`${badge.name} — ${badge.description}`}
                className="size-7"
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
