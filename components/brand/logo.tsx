import { cn } from "@/lib/utils";
import { LogoMark } from "./logo-mark";

interface LogoProps {
  className?: string;
  /** Set when the lockup sits on a permanently-dark surface (e.g. the navy
   * footer), so the gold text stays the vivid, high-contrast shade instead
   * of the ink shade tuned for light backgrounds. */
  dark?: boolean;
}

function Wordmark({ className, dark }: LogoProps) {
  return (
    <span className={cn("font-script", dark ? "text-white" : "text-foreground", className)}>
      Syndicate <span className={dark ? "text-gold-vivid" : "text-gold"}>Union</span>
    </span>
  );
}

function Tagline({ className, dark }: LogoProps) {
  return (
    <span
      className={cn(
        "block text-[0.5em] font-sans uppercase tracking-[0.25em]",
        dark ? "text-gold-vivid" : "text-gold",
        className
      )}
    >
      The Voice of Liberty
    </span>
  );
}

/** Primary lockup: mark + stacked wordmark/tagline, used in the navbar and footer. */
export function LogoHorizontal({ className, dark }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className="size-9" />
      <span className="flex flex-col leading-tight">
        <Wordmark className="text-2xl" dark={dark} />
        <Tagline />
      </span>
    </span>
  );
}

/** Stacked lockup: mark above wordmark, used for print/social contexts. */
export function LogoVertical({ className, dark }: LogoProps) {
  return (
    <span className={cn("inline-flex flex-col items-center gap-2 text-center", className)}>
      <LogoMark className="size-14" />
      <Wordmark className="text-xl" dark={dark} />
      <Tagline />
    </span>
  );
}

/** Full lockup with tagline, used on cover/splash contexts. */
export function LogoFull({ className, dark }: LogoProps) {
  return (
    <span className={cn("inline-flex flex-col items-center gap-3 text-center", className)}>
      <LogoMark className="size-16" />
      <Wordmark className="text-3xl" dark={dark} />
      <Tagline className="text-xs" />
    </span>
  );
}

/** Single-color lockup for merch/print contexts requiring one ink. */
export function LogoMonochrome({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className="size-9" />
      <span className="font-script text-2xl">Syndicate Union</span>
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
      title=""
      className={cn("pointer-events-none size-[36rem] opacity-[0.04]", className)}
    />
  );
}
