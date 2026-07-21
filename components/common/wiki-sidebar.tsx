import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ContentEntry } from "@/lib/content";

function groupByCategory(articles: ContentEntry<"wiki">[]) {
  const groups = new Map<string, ContentEntry<"wiki">[]>();
  articles.forEach((a) => {
    const list = groups.get(a.category) ?? [];
    list.push(a);
    groups.set(a.category, list);
  });
  return Array.from(groups.entries()).map(([category, items]) => ({
    category,
    items: items.sort((a, b) => a.order - b.order),
  }));
}

export function WikiSidebar({
  articles,
  activeSlug,
}: {
  articles: ContentEntry<"wiki">[];
  activeSlug?: string;
}) {
  const groups = groupByCategory(articles);

  const content = (
    <nav aria-label="Wiki categories" className="flex flex-col gap-5">
      {groups.map((group) => (
        <div key={group.category}>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{group.category}</h3>
          <ul className="mt-2 flex flex-col gap-1 border-l border-border pl-3">
            {group.items.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/wiki/${item.slug}`}
                  className={cn(
                    "block py-1 text-sm transition-colors hover:text-primary",
                    activeSlug === item.slug ? "font-medium text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      <details className="rounded-md border border-border bg-card p-4 lg:hidden">
        <summary className="flex cursor-pointer items-center justify-between font-heading text-sm tracking-wide">
          Browse categories
          <ChevronDown className="size-4 text-gold" />
        </summary>
        <div className="mt-4">{content}</div>
      </details>
      <aside className="hidden lg:block">
        <div className="sticky top-28">{content}</div>
      </aside>
    </>
  );
}
