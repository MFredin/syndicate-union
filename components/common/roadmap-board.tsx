import { Circle, Loader, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { RoadmapItem } from "@/data/roadmap";

const statusConfig: Record<RoadmapItem["status"], { icon: typeof Circle; badge: "outline" | "secondary" | "success" }> = {
  Planned: { icon: Circle, badge: "outline" },
  "In Progress": { icon: Loader, badge: "secondary" },
  Complete: { icon: CheckCircle2, badge: "success" },
};

export function RoadmapBoard({ items }: { items: RoadmapItem[] }) {
  const statuses: RoadmapItem["status"][] = ["Planned", "In Progress", "Complete"];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {statuses.map((status) => {
        const { icon: Icon, badge } = statusConfig[status];
        const columnItems = items.filter((i) => i.status === status);
        return (
          <div key={status}>
            <div className="mb-4 flex items-center gap-2">
              <Icon className="size-4 text-gold" />
              <h3 className="font-heading text-sm">{status}</h3>
              <Badge variant={badge} className="ml-auto">
                {columnItems.length}
              </Badge>
            </div>
            <div className="flex flex-col gap-3">
              {columnItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="pt-5">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-heading text-sm">{item.title}</h4>
                      <Badge variant="outline" className="shrink-0 text-[10px]">
                        {item.quarter}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
