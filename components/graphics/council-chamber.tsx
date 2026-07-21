import { cn } from "@/lib/utils";

/** Radial council-chamber motif: symmetric pillars around a central dais. */
export function CouncilChamber({ className }: { className?: string }) {
  const seats = Array.from({ length: 10 }, (_, i) => (i / 10) * 360);

  return (
    <svg viewBox="0 0 300 300" className={cn("absolute", className)} aria-hidden="true" fill="none">
      <circle cx="150" cy="150" r="120" stroke="#C9A227" strokeOpacity="0.25" />
      {seats.map((angle) => (
        <rect
          key={angle}
          x="146"
          y="18"
          width="8"
          height="26"
          rx="1"
          fill="#93AEEA"
          opacity="0.35"
          transform={`rotate(${angle} 150 150)`}
        />
      ))}
      <circle cx="150" cy="150" r="46" fill="#0F1B3D" stroke="#C9A227" strokeWidth="2" />
      <circle cx="150" cy="150" r="18" fill="#1E3F8F" stroke="#C9A227" strokeWidth="1.5" />
    </svg>
  );
}
