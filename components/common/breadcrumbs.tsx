import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  /** "light" for use over the dark hero art in PageHero; "dark" (default)
   * for use in plain page content on a light background. */
  tone?: "light" | "dark";
  className?: string;
}

export function Breadcrumbs({ items, tone = "dark", className }: BreadcrumbsProps) {
  const light = tone === "light";
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center gap-1.5 text-sm",
        light ? "text-white/70" : "text-muted-foreground",
        className
      )}
    >
      <Link
        href="/"
        aria-label="Home"
        className={cn("flex items-center", light ? "hover:text-white" : "hover:text-primary")}
      >
        <Home className="size-3.5" />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className={cn("size-3.5", light ? "text-gold-vivid" : "text-gold")} />
          {item.href ? (
            <Link href={item.href} className={light ? "hover:text-white" : "hover:text-primary"}>
              {item.label}
            </Link>
          ) : (
            <span className={light ? "text-white" : "text-foreground"}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
