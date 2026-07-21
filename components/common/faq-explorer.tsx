"use client";

import * as React from "react";
import { SearchBar } from "@/components/common/search-bar";
import { FaqAccordion } from "@/components/common/faq-accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import type { FaqItem } from "@/data/faq";

const CATEGORIES = ["All", "General", "Membership", "Departments", "Events", "Technical"] as const;

export function FaqExplorer({ faqs }: { faqs: FaqItem[] }) {
  const [query, setQuery] = React.useState("");
  const popular = faqs.filter((f) => f.popular);

  function filterByCategory(category: (typeof CATEGORIES)[number]) {
    return faqs.filter((f) => {
      const matchesCategory = category === "All" || f.category === category;
      const matchesQuery =
        query.trim() === "" ||
        f.question.toLowerCase().includes(query.toLowerCase()) ||
        f.answer.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} placeholder="Search frequently asked questions..." className="max-w-md" />

      {query.trim() === "" && (
        <div className="mt-8">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
            Popular Questions
          </div>
          <div className="flex flex-wrap gap-2">
            {popular.map((f) => (
              <Badge key={f.id} variant="outline">
                {f.question}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <Tabs defaultValue="All" className="mt-10">
        <TabsList className="flex-wrap">
          {CATEGORIES.map((c) => (
            <TabsTrigger key={c} value={c}>
              {c}
            </TabsTrigger>
          ))}
        </TabsList>
        {CATEGORIES.map((c) => (
          <TabsContent key={c} value={c}>
            <FaqAccordion items={filterByCategory(c)} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
