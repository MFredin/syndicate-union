"use client";

import * as React from "react";
import { DownloadCard } from "@/components/common/download-card";
import { cn } from "@/lib/utils";
import type { DownloadAsset } from "@/data/downloads";

const CATEGORIES = ["All", "Wallpapers", "Brand Kit", "Guides", "Templates"] as const;
const SORTS = ["Recently updated", "Name (A–Z)"] as const;

export function DownloadsExplorer({ assets }: { assets: DownloadAsset[] }) {
  const [category, setCategory] = React.useState<(typeof CATEGORIES)[number]>("All");
  const [sort, setSort] = React.useState<(typeof SORTS)[number]>("Recently updated");

  const filtered = assets
    .filter((a) => category === "All" || a.category === category)
    .sort((a, b) =>
      sort === "Name (A–Z)"
        ? a.title.localeCompare(b.title)
        : new Date(b.updated).getTime() - new Date(a.updated).getTime()
    );

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-sm px-3 py-1.5 text-xs font-medium transition-colors",
                category === c ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/70"
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}
          aria-label="Sort downloads"
          className="h-9 rounded-md border border-input bg-background px-3 text-sm"
        >
          {SORTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 grid gap-4">
        {filtered.map((asset) => (
          <DownloadCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
}
