import { cn } from "@/lib/utils";

/** Abstract faceted starship silhouettes on ascending trails. */
export function FleetScene({ className }: { className?: string }) {
  const ships = [
    { x: 60, y: 260, scale: 1, opacity: 0.9 },
    { x: 220, y: 150, scale: 0.7, opacity: 0.75 },
    { x: 340, y: 80, scale: 0.5, opacity: 0.6 },
  ];

  return (
    <svg viewBox="0 0 400 300" className={cn("absolute", className)} aria-hidden="true" fill="none">
      {ships.map((s, i) => (
        <g key={i} transform={`translate(${s.x} ${s.y}) scale(${s.scale})`} opacity={s.opacity}>
          <line x1="-70" y1="20" x2="-4" y2="4" stroke="#C9A227" strokeWidth="1" strokeOpacity="0.5" />
          <polygon points="0,0 34,8 10,14 0,26 -10,14 -34,8" fill="#1E3F8F" stroke="#C9A227" strokeWidth="1.5" />
          <circle cx="0" cy="8" r="2.4" fill="#F1E1AC" />
        </g>
      ))}
    </svg>
  );
}
