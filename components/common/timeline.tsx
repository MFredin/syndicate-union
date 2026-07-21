import { cn } from "@/lib/utils";

export interface TimelineItemData {
  id: string;
  label: string;
  title: string;
  description: string;
}

export function Timeline({ items, className }: { items: TimelineItemData[]; className?: string }) {
  return (
    <ol className={cn("relative border-l border-border pl-8", className)}>
      {items.map((item) => (
        <li key={item.id} className="mb-10 last:mb-0">
          <span className="absolute -left-[9px] flex size-4 items-center justify-center rounded-full border-2 border-gold bg-background" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{item.label}</span>
          <h3 className="mt-1.5 font-heading text-lg">{item.title}</h3>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
