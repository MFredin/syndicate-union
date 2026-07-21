"use client";

import * as React from "react";
import { SearchBar } from "@/components/common/search-bar";
import { GuideCard } from "@/components/common/guide-card";
import { EmptyState } from "@/components/common/empty-state";
import { cn } from "@/lib/utils";
import type { ContentEntry } from "@/lib/content";

const DIFFICULTIES = ["All", "Beginner", "Intermediate", "Advanced"] as const;

export function GuidesExplorer({ guides }: { guides: ContentEntry<"guides">[] }) {
  const [query, setQuery] = React.useState("");
  const [difficulty, setDifficulty] = React.useState<(typeof DIFFICULTIES)[number]>("All");
  const [category, setCategory] = React.useState<string>("All");

  const categories = ["All", ...Array.from(new Set(guides.map((g) => g.category)))];

  const filtered = guides.filter((g) => {
    const matchesDifficulty = difficulty === "All" || g.difficulty === difficulty;
    const matchesCategory = category === "All" || g.category === category;
    const matchesQuery =
      query.trim() === "" ||
      g.title.toLowerCase().includes(query.toLowerCase()) ||
      g.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchesDifficulty && matchesCategory && matchesQuery;
  });

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <SearchBar value={query} onChange={setQuery} placeholder="Search guides..." className="max-w-sm" />
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {DIFFICULTIES.map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={cn(
                  "rounded-sm px-3 py-1.5 text-xs font-medium transition-colors",
                  difficulty === d ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/70"
                )}
              >
                {d}
              </button>
            ))}
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filter by category"
            className="h-9 rounded-md border border-input bg-background px-3 text-sm"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-10">
        {filtered.length === 0 ? (
          <EmptyState title="No guides found" description="Try adjusting your filters." />
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {filtered.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
