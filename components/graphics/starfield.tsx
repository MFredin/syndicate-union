import { seededRandom } from "@/lib/prng";
import { cn } from "@/lib/utils";

interface StarfieldProps {
  seed?: string;
  count?: number;
  className?: string;
}

export function Starfield({ seed = "su-starfield", count = 90, className }: StarfieldProps) {
  const rand = seededRandom(seed);
  const stars = Array.from({ length: count }, () => ({
    cx: rand() * 100,
    cy: rand() * 100,
    r: rand() * 0.9 + 0.2,
    o: rand() * 0.6 + 0.25,
  }));

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={cn("absolute inset-0 size-full", className)}
      aria-hidden="true"
    >
      {stars.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="white" opacity={s.o} />
      ))}
    </svg>
  );
}
