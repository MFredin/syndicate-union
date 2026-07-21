"use client";

import * as React from "react";
import { RoadmapBoard } from "@/components/common/roadmap-board";
import { cn } from "@/lib/utils";
import type { RoadmapItem } from "@/data/roadmap";

export function RoadmapExplorer({ items }: { items: RoadmapItem[] }) {
  const quarters = ["All", ...Array.from(new Set(items.map((i) => i.quarter))).sort()];
  const [quarter, setQuarter] = React.useState("All");

  const filtered = items.filter((i) => quarter === "All" || i.quarter === quarter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {quarters.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => setQuarter(q)}
            className={cn(
              "rounded-sm px-3 py-1.5 text-xs font-medium transition-colors",
              quarter === q ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/70"
            )}
          >
            {q}
          </button>
        ))}
      </div>
      <div className="mt-8">
        <RoadmapBoard items={filtered} />
      </div>
    </div>
  );
}
