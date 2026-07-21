"use client";

import * as React from "react";
import { DownloadCard } from "@/components/common/download-card";
import { CategoryRail } from "@/components/common/category-rail";
import { EmptyState } from "@/components/common/empty-state";
import type { DownloadAsset } from "@/data/downloads";

const CATEGORIES = ["All", "Wallpapers", "Brand Kit", "Guides", "Templates"] as const;
const SORTS = ["Recently updated", "Name (A–Z)"] as const;

export function DownloadsExplorer({ assets }: { assets: DownloadAsset[] }) {
  const [category, setCategory] = React.useState<(typeof CATEGORIES)[number]>("All");
  const [sort, setSort] = React.useState<(typeof SORTS)[number]>("Recently updated");

  const counts = Object.fromEntries(
    CATEGORIES.map((c) => [c, c === "All" ? assets.length : assets.filter((a) => a.category === c).length])
  );

  const filtered = assets
    .filter((a) => category === "All" || a.category === category)
    .sort((a, b) =>
      sort === "Name (A–Z)"
        ? a.title.localeCompare(b.title)
        : new Date(b.updated).getTime() - new Date(a.updated).getTime()
    );

  return (
    <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
      <CategoryRail label="Categories" categories={CATEGORIES} active={category} onChange={setCategory} counts={counts} />

      <div>
        <div className="flex justify-end">
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

        <div className="mt-6">
          {filtered.length === 0 ? (
            <EmptyState title="No downloads found" description="Try a different category." />
          ) : (
            <div className="grid gap-4">
              {filtered.map((asset) => (
                <DownloadCard key={asset.id} asset={asset} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
