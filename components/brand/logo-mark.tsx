import { cn } from "@/lib/utils";

export interface LogoMarkProps {
  className?: string;
  /** color: brand blue+gold. mono: single currentColor. */
  variant?: "color" | "mono";
  title?: string;
}

/**
 * The Syndicate Union emblem: a hexagonal union crest with three ascending
 * bars (unity rising together / progress) capped by a liberty star.
 */
export function LogoMark({ className, variant = "color", title = "Syndicate Union emblem" }: LogoMarkProps) {
  const hexPoints = "50,10 84.64,30 84.64,70 50,90 15.36,70 15.36,30";
  const isMono = variant === "mono";

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("size-8", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <polygon
        points={hexPoints}
        fill={isMono ? "none" : "hsl(var(--primary))"}
        stroke={isMono ? "currentColor" : "hsl(var(--gold-vivid))"}
        strokeWidth={3}
        strokeLinejoin="round"
      />
      <g fill={isMono ? "currentColor" : "hsl(var(--gold-vivid))"}>
        <rect x="34" y="44" width="8" height="22" />
        <rect x="46" y="34" width="8" height="32" />
        <rect x="58" y="44" width="8" height="22" />
      </g>
      <path
        d="M50 20 L53 26 L59 26.5 L54.5 30.5 L56 36.5 L50 33 L44 36.5 L45.5 30.5 L41 26.5 L47 26 Z"
        fill={isMono ? "currentColor" : "hsl(var(--gold-vivid))"}
      />
    </svg>
  );
}
