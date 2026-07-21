"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { GalleryArt } from "@/components/graphics/gallery-art";
import type { GalleryItem } from "@/data/gallery";

export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = React.useState<GalleryItem | null>(null);

  if (items.length === 0) {
    return <p className="py-8 text-center text-muted-foreground">No items match your filters.</p>;
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item)}
            className="group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={`Open ${item.title} by ${item.creator}`}
          >
            <div className="overflow-hidden rounded-md border border-border shadow-soft transition-shadow group-hover:shadow-elevated">
              <GalleryArt item={item} className="transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-2 flex items-center justify-between gap-2">
              <p className="truncate text-sm font-medium">{item.title}</p>
              <Badge variant="outline" className="shrink-0">
                {item.category}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">by {item.creator}</p>
          </button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-2xl p-0">
          {active && (
            <div>
              <GalleryArt item={active} className="aspect-video w-full" />
              <div className="p-6">
                <DialogTitle>{active.title}</DialogTitle>
                <p className="mt-1 text-sm text-primary">by {active.creator}</p>
                <p className="mt-3 text-sm text-muted-foreground">{active.description}</p>
                <Badge variant="outline" className="mt-4">
                  {active.category}
                </Badge>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
