import { cn } from "@/lib/utils";
import { Clouds } from "./clouds";
import { SunGlow } from "./sun-glow";
import { OrbitalRings } from "./orbital-rings";
import { Skyline } from "./skyline";
import { FleetScene } from "./fleet-scene";
import { CouncilChamber } from "./council-chamber";

export type HeroVariant = "home" | "about" | "lore" | "recruitment" | "events" | "contact";

const gradients: Record<HeroVariant, string> = {
  home: "from-[#6E97E2] via-[#CBDCF6] to-[#FBF3DE]",
  about: "from-[#7CA2E6] via-[#CFDEF6] to-[#F8EFDD]",
  lore: "from-[#5F86D6] via-[#C9D9F2] to-[#F7EAD4]",
  recruitment: "from-[#6E97E2] via-[#CEDDF5] to-[#FAF1DC]",
  events: "from-[#6B93DE] via-[#C6D8F3] to-[#F5EEDB]",
  contact: "from-[#7CA2E6] via-[#D2E0F6] to-[#F9F1DE]",
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
      <SunGlow className="right-[-6%] top-[-14%] size-[30rem] md:size-[36rem]" />
      <Clouds seed={`hero-${variant}`} count={9} />

      {variant === "home" && (
        <>
          <OrbitalRings tone="light" className="right-[-10%] top-[-10%] size-[34rem] opacity-80 md:size-[42rem]" />
          <Skyline tone="light" seed="home-skyline" className="h-32 opacity-90 md:h-44" />
        </>
      )}

      {variant === "about" && (
        <>
          <OrbitalRings tone="light" className="left-1/2 top-[-14%] size-[38rem] -translate-x-1/2 opacity-70" />
          <Skyline tone="light" seed="about-skyline" towers={10} className="h-28 opacity-80 md:h-36" />
        </>
      )}

      {variant === "lore" && (
        <>
          <FleetScene className="right-[-4%] top-[6%] size-[30rem] opacity-90 md:size-[38rem]" />
          <CouncilChamber tone="light" className="left-[-8%] bottom-[-16%] size-[26rem] opacity-50" />
        </>
      )}

      {variant === "recruitment" && (
        <>
          <FleetScene className="left-[-6%] top-[10%] size-[28rem] opacity-90 md:size-[34rem]" />
          <OrbitalRings tone="light" className="right-[-14%] bottom-[-18%] size-[30rem] opacity-55" />
        </>
      )}

      {variant === "events" && (
        <>
          <OrbitalRings tone="light" className="right-[-8%] top-[-16%] size-[32rem] opacity-75" />
          <OrbitalRings tone="light" className="left-[-14%] bottom-[-20%] size-[26rem] opacity-45" />
        </>
      )}

      {variant === "contact" && (
        <>
          <CouncilChamber tone="light" className="right-[-10%] top-[-10%] size-[28rem] opacity-55" />
          <Skyline tone="light" seed="contact-skyline" towers={8} className="h-24 opacity-75" />
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/0 to-transparent" />
    </div>
  );
}
