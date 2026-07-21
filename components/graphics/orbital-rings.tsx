import { cn } from "@/lib/utils";

interface OrbitalRingsProps {
  className?: string;
  /** "dark": tuned for navy/dark surfaces (gallery tiles, lore icons).
   * "light": tuned for the bright daylight hero backgrounds. */
  tone?: "dark" | "light";
}

export function OrbitalRings({ className, tone = "dark" }: OrbitalRingsProps) {
  const ringGold = tone === "light" ? "#A9791E" : "#C9A227";
  const ringBlue = tone === "light" ? "#2447B5" : "#93AEEA";
  const ringOpacity = tone === "light" ? [0.5, 0.4, 0.45] : [0.35, 0.25, 0.3];
  const dotFill = tone === "light" ? "#A9791E" : "#F1E1AC";

  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("absolute", className)}
      aria-hidden="true"
      fill="none"
    >
      <ellipse cx="200" cy="200" rx="190" ry="70" stroke={ringGold} strokeOpacity={ringOpacity[0]} strokeWidth="1" />
      <ellipse
        cx="200"
        cy="200"
        rx="150"
        ry="55"
        stroke={ringGold}
        strokeOpacity={ringOpacity[1]}
        strokeWidth="1"
        transform="rotate(18 200 200)"
      />
      <ellipse
        cx="200"
        cy="200"
        rx="110"
        ry="40"
        stroke={ringBlue}
        strokeOpacity={ringOpacity[2]}
        strokeWidth="1"
        transform="rotate(-14 200 200)"
      />
      <circle cx="200" cy="200" r="26" fill="#1E3F8F" stroke="#C9A227" strokeWidth="2" />
      <circle cx="200" cy="200" r="10" fill="#C9A227" />
      <circle cx="366" cy="185" r="3" fill={dotFill} />
      <circle cx="52" cy="222" r="2.4" fill={dotFill} />
    </svg>
  );
}
