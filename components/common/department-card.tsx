import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { iconMap } from "@/components/common/icon-map";
import type { Department } from "@/data/departments";

export function DepartmentCard({ department }: { department: Department }) {
  const Icon = iconMap[department.icon];

  return (
    <Card className="flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <CardHeader>
        <div className="flex items-center justify-between">
          <span className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
            {Icon && <Icon className="size-5" />}
          </span>
          {department.openPositions > 0 && (
            <Badge variant="gold">{department.openPositions} open</Badge>
          )}
        </div>
        <CardTitle className="pt-2">{department.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="text-sm text-muted-foreground">{department.summary}</p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {department.responsibilities.slice(0, 3).map((r) => (
            <li key={r} className="flex gap-2 text-muted-foreground">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gold" />
              {r}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
