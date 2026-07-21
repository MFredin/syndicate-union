"use client";

import * as React from "react";
import Link from "next/link";
import { SearchBar } from "@/components/common/search-bar";
import { EmptyState } from "@/components/common/empty-state";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ContentEntry } from "@/lib/content";

export function WikiExplorer({ articles }: { articles: ContentEntry<"wiki">[] }) {
  const [query, setQuery] = React.useState("");

  const filtered = articles.filter(
    (a) =>
      query.trim() === "" ||
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} placeholder="Search the wiki..." className="max-w-md" />
      <div className="mt-8">
        {filtered.length === 0 ? (
          <EmptyState title="No articles found" description="Try a different search term." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {filtered
              .sort((a, b) => a.order - b.order)
              .map((article) => (
                <Link key={article.slug} href={`/wiki/${article.slug}`}>
                  <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                    <CardContent className="pt-6">
                      <Badge variant="outline">{article.category}</Badge>
                      <h3 className="mt-3 font-heading text-base tracking-wide">{article.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{article.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
