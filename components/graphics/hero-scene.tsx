import { cn } from "@/lib/utils";

export type HeroVariant =
  | "home"
  | "about"
  | "lore"
  | "recruitment"
  | "events"
  | "contact"
  | "gallery"
  | "wiki";

interface HeroSceneProps {
  variant: HeroVariant;
  className?: string;
}

/**
 * Renders the design system's supplied hero artwork via <picture> art-direction
 * (mobile/desktop crops). The source SVGs bake a caption box into the artwork;
 * that box (and its non-semantic text) is stripped from the copies in
 * public/assets so real, dynamic <h1>/description markup can be overlaid
 * instead — the accessibility exception CLAUDE.md carves out for source assets.
 */
export function HeroScene({ variant, className }: HeroSceneProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden bg-navy", className)}
      aria-hidden="true"
    >
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={`/assets/05-artwork/heroes/${variant}-hero-mobile.svg`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/assets/05-artwork/heroes/${variant}-hero-desktop.svg`}
          alt=""
          className="size-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/0 to-transparent" />
    </div>
  );
}
