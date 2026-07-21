"use client";

import { cn } from "@/lib/utils";

interface CategoryRailProps<T extends string> {
  label: string;
  categories: readonly T[];
  active: T;
  onChange: (category: T) => void;
  counts?: Partial<Record<T, number>>;
}

/** Left-hand category rail used to replace top pill-filter rows on list
 * pages (News, Downloads) — collapses to a horizontal scroller on mobile. */
export function CategoryRail<T extends string>({
  label,
  categories,
  active,
  onChange,
  counts,
}: CategoryRailProps<T>) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <h3 className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-gold lg:block">
        {label}
      </h3>
      <nav
        aria-label={label}
        className="mt-0 flex gap-2 overflow-x-auto pb-2 lg:mt-3 lg:flex-col lg:gap-1 lg:overflow-visible lg:border-l lg:border-border lg:pb-0 lg:pl-4"
      >
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            className={cn(
              "shrink-0 whitespace-nowrap rounded-sm px-3 py-1.5 text-left text-sm font-medium transition-colors",
              "lg:w-full lg:rounded-none lg:px-0 lg:py-1.5",
              active === c
                ? "bg-primary text-primary-foreground lg:bg-transparent lg:font-semibold lg:text-primary"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/70 lg:bg-transparent lg:font-normal lg:text-muted-foreground lg:hover:text-primary"
            )}
          >
            {c}
            {counts?.[c] !== undefined && (
              <span className="ml-1.5 text-xs opacity-70">({counts[c]})</span>
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
}
