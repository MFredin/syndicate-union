import { useId } from "react";
import { cn } from "@/lib/utils";

/** Soft radial daylight glow used behind the bright hero skylines. */
export function SunGlow({ className }: { className?: string }) {
  const id = useId();
  const gradientId = `su-sun-glow-${id}`;

  return (
    <svg viewBox="0 0 400 400" className={cn("absolute", className)} aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF6DC" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#F6DFA0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F6DFA0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="200" fill={`url(#${gradientId})`} />
    </svg>
  );
}
