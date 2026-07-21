"use client";

import * as React from "react";
import { GalleryLightbox } from "@/components/common/gallery-lightbox";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/data/gallery";

const CATEGORIES = ["All", "Artwork", "Screenshots", "Videos"] as const;

export function GalleryExplorer({ items }: { items: GalleryItem[] }) {
  const [category, setCategory] = React.useState<(typeof CATEGORIES)[number]>("All");
  const filtered = items.filter((i) => category === "All" || i.category === category);

  return (
    <div>
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
      <div className="mt-8">
        <GalleryLightbox items={filtered} />
      </div>
    </div>
  );
}
