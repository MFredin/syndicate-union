import { cn } from "@/lib/utils";

export type HeroVariant =
  | "home"
  | "about"
  | "lore"
  | "recruitment"
  | "events"
  | "contact"
  | "gallery"
  | "wiki"
  | "news"
  | "downloads"
  | "roadmap"
  | "community";

interface HeroSceneProps {
  variant: HeroVariant;
  className?: string;
}

/**
 * Renders the v2 design system's production-raster hero photography via
 * <picture> art-direction (mobile/desktop crops). Desktop gets a
 * left-to-right white gradient so copy sits on a readable surface while the
 * ship/city stays visible on the right, per 09-claude-code/VISUAL-FIDELITY.md.
 * The gradient is intentionally omitted on mobile — the consuming shell
 * (Hero/PageHero) moves copy into a solid panel below the image there
 * instead of overlaying it.
 */
export function HeroScene({ variant, className }: HeroSceneProps) {
  return (
    <div className={cn("absolute inset-0 size-full", className)} aria-hidden="true">
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={`/assets/05-artwork/production-raster/heroes-mobile/${variant}-hero-1080x1920.jpg`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/assets/05-artwork/production-raster/heroes-desktop/${variant}-hero-2560x1440.jpg`}
          alt=""
          className="size-full object-cover"
        />
      </picture>
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-background via-background/55 to-transparent md:block" />
    </div>
  );
}
