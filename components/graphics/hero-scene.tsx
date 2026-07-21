import { cn } from "@/lib/utils";
import { Starfield } from "./starfield";
import { OrbitalRings } from "./orbital-rings";
import { Skyline } from "./skyline";
import { FleetScene } from "./fleet-scene";
import { CouncilChamber } from "./council-chamber";

export type HeroVariant = "home" | "about" | "lore" | "recruitment" | "events" | "contact";

const gradients: Record<HeroVariant, string> = {
  home: "from-[#0B1220] via-[#122456] to-[#1E3F8F]",
  about: "from-[#0B1220] via-[#16224a] to-[#233d82]",
  lore: "from-[#0B1220] via-[#1a1f45] to-[#2a2f6b]",
  recruitment: "from-[#0B1220] via-[#122a5e] to-[#245098]",
  events: "from-[#0B1220] via-[#15234e] to-[#1f3f8a]",
  contact: "from-[#0B1220] via-[#131f45] to-[#1c3576]",
};

interface HeroSceneProps {
  variant: HeroVariant;
  className?: string;
}

export function HeroScene({ variant, className }: HeroSceneProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden bg-gradient-to-b",
        gradients[variant],
        className
      )}
      aria-hidden="true"
    >
      <Starfield seed={`hero-${variant}`} count={120} />

      {variant === "home" && (
        <>
          <OrbitalRings className="right-[-10%] top-[-10%] size-[34rem] opacity-80 md:size-[42rem]" />
          <Skyline seed="home-skyline" className="h-32 opacity-90 md:h-44" />
        </>
      )}

      {variant === "about" && (
        <>
          <OrbitalRings className="left-1/2 top-[-14%] size-[38rem] -translate-x-1/2 opacity-70" />
          <Skyline seed="about-skyline" towers={10} className="h-28 opacity-80 md:h-36" />
        </>
      )}

      {variant === "lore" && (
        <>
          <FleetScene className="right-[-4%] top-[6%] size-[30rem] opacity-90 md:size-[38rem]" />
          <CouncilChamber className="left-[-8%] bottom-[-16%] size-[26rem] opacity-40" />
        </>
      )}

      {variant === "recruitment" && (
        <>
          <FleetScene className="left-[-6%] top-[10%] size-[28rem] opacity-90 md:size-[34rem]" />
          <OrbitalRings className="right-[-14%] bottom-[-18%] size-[30rem] opacity-50" />
        </>
      )}

      {variant === "events" && (
        <>
          <OrbitalRings className="right-[-8%] top-[-16%] size-[32rem] opacity-70" />
          <OrbitalRings className="left-[-14%] bottom-[-20%] size-[26rem] opacity-40" />
        </>
      )}

      {variant === "contact" && (
        <>
          <CouncilChamber className="right-[-10%] top-[-10%] size-[28rem] opacity-50" />
          <Skyline seed="contact-skyline" towers={8} className="h-24 opacity-70" />
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
    </div>
  );
}
