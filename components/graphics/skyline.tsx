import { seededRandom } from "@/lib/prng";
import { cn } from "@/lib/utils";

interface SkylineProps {
  className?: string;
  seed?: string;
  towers?: number;
  /** "dark": tuned for navy/dark surfaces. "light": tuned for the bright
   * daylight hero backgrounds. */
  tone?: "dark" | "light";
}

/** Abstract geometric orbital cityscape silhouette. */
export function Skyline({ className, seed = "su-skyline", towers = 14, tone = "dark" }: SkylineProps) {
  const rand = seededRandom(seed);
  const bars = Array.from({ length: towers }, (_, i) => {
    const width = 3 + rand() * 4.5;
    const height = 10 + rand() * 42;
    return { width, height, spire: rand() > 0.7 };
  });

  let x = 0;
  const total = bars.reduce((acc, b) => acc + b.width + 1.5, 0);
  const scale = 100 / total;
  const fill = tone === "light" ? "#1E3F8F" : "#0F1B3D";
  const fillOpacity = tone === "light" ? 1 : 0.85;

  return (
    <svg
      viewBox="0 0 100 50"
      preserveAspectRatio="none"
      className={cn("absolute inset-x-0 bottom-0 w-full", className)}
      aria-hidden="true"
    >
      {bars.map((b, i) => {
        const w = b.width * scale;
        const h = (b.height / 60) * 50;
        const rectX = x * scale;
        x += b.width + 1.5;
        return (
          <g key={i}>
            <rect x={rectX} y={50 - h} width={w} height={h} fill={fill} opacity={fillOpacity} />
            {b.spire && (
              <>
                <line
                  x1={rectX + w / 2}
                  x2={rectX + w / 2}
                  y1={50 - h}
                  y2={50 - h - 6}
                  stroke="#C9A227"
                  strokeWidth={0.5}
                />
                <circle cx={rectX + w / 2} cy={50 - h - 6} r="0.7" fill="#F1E1AC" />
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}
