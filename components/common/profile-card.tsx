import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SeededAvatar } from "@/components/graphics/seeded-avatar";
import { badges as allBadges } from "@/data/badges";

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

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <CardContent className="flex flex-col items-center gap-3 pt-6 text-center">
        <div className="size-16 overflow-hidden rounded-md border border-border shadow-soft">
          <SeededAvatar seed={seed} />
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
              <Badge key={badge.id} variant={badge.tier === "gold" ? "gold" : "secondary"} title={badge.description}>
                {badge.name}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
