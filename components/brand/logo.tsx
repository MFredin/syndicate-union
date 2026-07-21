import { cn } from "@/lib/utils";
import { LogoMark } from "./logo-mark";

interface LogoProps {
  className?: string;
}

function Wordmark({ className }: LogoProps) {
  return (
    <span className={cn("font-display tracking-[0.15em]", className)}>
      SYNDICATE <span className="text-gold">UNION</span>
    </span>
  );
}

/** Primary horizontal lockup: mark + wordmark, used in the navbar. */
export function LogoHorizontal({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className="size-8" />
      <Wordmark className="text-lg" />
    </span>
  );
}

/** Stacked lockup: mark above wordmark, used for print/social contexts. */
export function LogoVertical({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex flex-col items-center gap-2 text-center", className)}>
      <LogoMark className="size-14" />
      <Wordmark className="text-base" />
    </span>
  );
}

/** Full lockup with tagline, used on cover/splash contexts. */
export function LogoFull({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex flex-col items-center gap-3 text-center", className)}>
      <LogoMark className="size-16" />
      <Wordmark className="text-xl" />
      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        The Voice of Liberty
      </span>
    </span>
  );
}

/** Single-color lockup for merch/print contexts requiring one ink. */
export function LogoMonochrome({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark variant="mono" className="size-8" />
      <span className="font-heading tracking-[0.15em]">SYNDICATE UNION</span>
    </span>
  );
}

/** Icon-only mark, used for favicon/app-icon/compact contexts. */
export function LogoIcon({ className }: LogoProps) {
  return <LogoMark className={cn("size-8", className)} />;
}

/** Large, low-opacity mark for decorative background watermarking. */
export function LogoWatermark({ className }: LogoProps) {
  return (
    <LogoMark
      variant="mono"
      title=""
      className={cn("pointer-events-none size-[36rem] text-foreground/[0.03]", className)}
    />
  );
}
