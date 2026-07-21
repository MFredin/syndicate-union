import { cn } from "@/lib/utils";

export interface LogoMarkProps {
  className?: string;
  title?: string;
}

/**
 * The Syndicate Union emblem — supplied source artwork from the design
 * system package (public/assets/01-brand/logos/su-emblem-primary.svg).
 * Transparent background; the blue/gold fill reads on both light and dark
 * surfaces, so no separate light/dark variant is needed for inline use.
 */
export function LogoMark({ className, title = "Syndicate Union emblem" }: LogoMarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/assets/01-brand/logos/su-emblem-primary.svg"
      alt={title}
      className={cn("size-8", className)}
    />
  );
}
