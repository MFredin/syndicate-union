import { seededRandom } from "@/lib/prng";
import { cn } from "@/lib/utils";

const HUES = [222, 42, 200, 215, 190];

interface SeededAvatarProps {
  seed: string;
  className?: string;
}

/** Deterministic geometric "callsign crest" placeholder avatar. */
export function SeededAvatar({ seed, className }: SeededAvatarProps) {
  const rand = seededRandom(seed);
  const hue = HUES[Math.floor(rand() * HUES.length)];
  const bg = `hsl(${hue} 55% 22%)`;
  const fg = rand() > 0.5 ? "#C9A227" : "#93AEEA";
  const rotation = Math.floor(rand() * 4) * 90;
  const shapeType = Math.floor(rand() * 3);

  return (
    <svg viewBox="0 0 40 40" className={cn("size-full", className)} role="img" aria-hidden="true">
      <rect width="40" height="40" fill={bg} />
      <g transform={`rotate(${rotation} 20 20)`}>
        {shapeType === 0 && <polygon points="20,10 30,20 20,30 10,20" fill={fg} />}
        {shapeType === 1 && <polygon points="20,9 31,29 9,29" fill={fg} />}
        {shapeType === 2 && <circle cx="20" cy="20" r="9" fill="none" stroke={fg} strokeWidth="3" />}
      </g>
    </svg>
  );
}
