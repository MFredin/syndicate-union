import { cn } from "@/lib/utils";
import { Starfield } from "./starfield";
import { OrbitalRings } from "./orbital-rings";
import { Skyline } from "./skyline";
import { FleetScene } from "./fleet-scene";
import { CouncilChamber } from "./council-chamber";
import { LibertyEmblem } from "@/components/brand/liberty-emblem";
import type { GalleryItem } from "@/data/gallery";

const gradients: Record<GalleryItem["variant"], string> = {
  orbital: "from-[#122456] to-[#1E3F8F]",
  fleet: "from-[#0B1220] to-[#16224a]",
  council: "from-[#0F1B3D] to-[#233d82]",
  skyline: "from-[#0B1220] to-[#122456]",
  emblem: "from-[#142a5c] to-[#1E3F8F]",
};

export function GalleryArt({ item, className }: { item: GalleryItem; className?: string }) {
  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br",
        gradients[item.variant],
        className
      )}
    >
      <Starfield seed={item.id} count={50} />
      {item.variant === "orbital" && <OrbitalRings className="size-[80%] opacity-90" />}
      {item.variant === "fleet" && <FleetScene className="size-[95%] opacity-90" />}
      {item.variant === "council" && <CouncilChamber className="size-[75%] opacity-90" />}
      {item.variant === "skyline" && <Skyline seed={item.id} className="h-2/3 opacity-90" />}
      {item.variant === "emblem" && <LibertyEmblem className="size-24 opacity-95" />}
    </div>
  );
}
