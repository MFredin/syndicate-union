import { useId } from "react";
import { cn } from "@/lib/utils";

/** Subtle dot-grid texture for light section backgrounds. */
export function SectionBackground({ className }: { className?: string }) {
  const id = useId();
  const patternId = `su-dot-grid-${id}`;

  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 size-full opacity-[0.35]", className)}
      aria-hidden="true"
    >
      <defs>
        <pattern id={patternId} width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="hsl(var(--border))" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
