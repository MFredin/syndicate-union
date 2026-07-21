import { seededRandom } from "@/lib/prng";
import { cn } from "@/lib/utils";

interface CloudsProps {
  seed?: string;
  count?: number;
  className?: string;
}

/** Soft scattered cloud/haze wisps for bright daylight hero backgrounds. */
export function Clouds({ seed = "su-clouds", count = 10, className }: CloudsProps) {
  const rand = seededRandom(seed);
  const puffs = Array.from({ length: count }, () => ({
    cx: rand() * 100,
    cy: rand() * 60,
    rx: 8 + rand() * 14,
    ry: 2.5 + rand() * 3,
    o: 0.15 + rand() * 0.25,
  }));

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={cn("absolute inset-0 size-full", className)}
      aria-hidden="true"
    >
      {puffs.map((p, i) => (
        <ellipse key={i} cx={p.cx} cy={p.cy} rx={p.rx} ry={p.ry} fill="white" opacity={p.o} />
      ))}
    </svg>
  );
}
