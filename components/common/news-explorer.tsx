"use client";

import * as React from "react";
import { SearchBar } from "@/components/common/search-bar";
import { NewsCard } from "@/components/common/news-card";
import { CategoryRail } from "@/components/common/category-rail";
import { EmptyState } from "@/components/common/empty-state";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ContentEntry } from "@/lib/content";

const CATEGORIES = ["All", "Community", "Events", "Guides", "Announcements", "Diplomacy"] as const;

export function NewsExplorer({ articles }: { articles: ContentEntry<"news">[] }) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<(typeof CATEGORIES)[number]>("All");

  const counts = Object.fromEntries(
    CATEGORIES.map((c) => [c, c === "All" ? articles.length : articles.filter((a) => a.category === c).length])
  );

  const pinned = articles.filter((a) => a.pinned);

  const filtered = articles.filter((a) => {
    const matchesCategory = category === "All" || a.category === category;
    const matchesQuery =
      query.trim() === "" ||
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      a.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
      <CategoryRail label="Categories" categories={CATEGORIES} active={category} onChange={setCategory} counts={counts} />

      <div>
        <SearchBar value={query} onChange={setQuery} placeholder="Search news..." className="max-w-sm" />

        {query.trim() === "" && category === "All" && pinned.length > 0 && (
          <div className="mt-8">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
              Pinned
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {pinned.map((a) => (
                <NewsCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          {filtered.length === 0 ? (
            <EmptyState title="No articles found" description="Try a different search term or category." />
          ) : (
            <div className="flex flex-col gap-4">
              {filtered.map((a) => (
                <NewsCard key={a.slug} article={a} variant="row" />
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {Array.from(new Set(articles.flatMap((a) => a.tags))).map((tag) => (
            <button
              key={tag}
              type="button"
              className={cn(badgeVariants({ variant: query === tag ? "gold" : "outline" }), "cursor-pointer")}
              onClick={() => setQuery(query === tag ? "" : tag)}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
