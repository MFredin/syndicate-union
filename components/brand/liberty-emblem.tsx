import { cn } from "@/lib/utils";

/**
 * Ceremonial emblem used for milestones, achievements, and badges:
 * a radiant liberty star inside a laurel-like ring of angular ticks.
 */
export function LibertyEmblem({ className }: { className?: string }) {
  const ticks = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * 360;
    return angle;
  });

  return (
    <svg viewBox="0 0 100 100" className={cn("size-12", className)} role="img" aria-label="Liberty emblem">
      <circle cx="50" cy="50" r="46" fill="none" stroke="hsl(var(--gold-vivid))" strokeWidth="1" opacity="0.5" />
      {ticks.map((angle) => (
        <line
          key={angle}
          x1="50"
          y1="6"
          x2="50"
          y2="11"
          stroke="hsl(var(--gold-vivid))"
          strokeWidth="1.5"
          opacity="0.7"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="34" fill="hsl(var(--primary))" stroke="hsl(var(--gold-vivid))" strokeWidth="2" />
      <path
        d="M50 28 L55.5 42 L70 43 L58.5 52 L62.5 66 L50 58 L37.5 66 L41.5 52 L30 43 L44.5 42 Z"
        fill="hsl(var(--gold-vivid))"
      />
    </svg>
  );
}
