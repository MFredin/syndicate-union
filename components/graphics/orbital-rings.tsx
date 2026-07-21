import { cn } from "@/lib/utils";

export function OrbitalRings({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("absolute", className)}
      aria-hidden="true"
      fill="none"
    >
      <ellipse cx="200" cy="200" rx="190" ry="70" stroke="#C9A227" strokeOpacity="0.35" strokeWidth="1" />
      <ellipse
        cx="200"
        cy="200"
        rx="150"
        ry="55"
        stroke="#C9A227"
        strokeOpacity="0.25"
        strokeWidth="1"
        transform="rotate(18 200 200)"
      />
      <ellipse
        cx="200"
        cy="200"
        rx="110"
        ry="40"
        stroke="#93AEEA"
        strokeOpacity="0.3"
        strokeWidth="1"
        transform="rotate(-14 200 200)"
      />
      <circle cx="200" cy="200" r="26" fill="#1E3F8F" stroke="#C9A227" strokeWidth="2" />
      <circle cx="200" cy="200" r="10" fill="#C9A227" />
      <circle cx="366" cy="185" r="3" fill="#F1E1AC" />
      <circle cx="52" cy="222" r="2.4" fill="#F1E1AC" />
    </svg>
  );
}
