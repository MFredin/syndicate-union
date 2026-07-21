import { cn } from "@/lib/utils";

interface CouncilChamberProps {
  className?: string;
  tone?: "dark" | "light";
}

/** Radial council-chamber motif: symmetric pillars around a central dais. */
export function CouncilChamber({ className, tone = "dark" }: CouncilChamberProps) {
  const seats = Array.from({ length: 10 }, (_, i) => (i / 10) * 360);
  const ringGold = tone === "light" ? "#A9791E" : "#C9A227";
  const ringOpacity = tone === "light" ? 0.45 : 0.25;
  const pillarFill = tone === "light" ? "#2447B5" : "#93AEEA";
  const pillarOpacity = tone === "light" ? 0.55 : 0.35;
  const daisOuter = tone === "light" ? "#1E3F8F" : "#0F1B3D";

  return (
    <svg viewBox="0 0 300 300" className={cn("absolute", className)} aria-hidden="true" fill="none">
      <circle cx="150" cy="150" r="120" stroke={ringGold} strokeOpacity={ringOpacity} />
      {seats.map((angle) => (
        <rect
          key={angle}
          x="146"
          y="18"
          width="8"
          height="26"
          rx="1"
          fill={pillarFill}
          opacity={pillarOpacity}
          transform={`rotate(${angle} 150 150)`}
        />
      ))}
      <circle cx="150" cy="150" r="46" fill={daisOuter} stroke="#C9A227" strokeWidth="2" />
      <circle cx="150" cy="150" r="18" fill="#1E3F8F" stroke="#C9A227" strokeWidth="1.5" />
    </svg>
  );
}
