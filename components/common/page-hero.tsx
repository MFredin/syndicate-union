import { HeroScene, type HeroVariant } from "@/components/graphics/hero-scene";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  variant: HeroVariant;
  eyebrow: string;
  title: string;
  /** Short label for the breadcrumb trail; falls back to `title` if omitted. */
  crumb?: string;
  description?: string;
  className?: string;
  /** "lg" (420-500px desktop) for About/Lore/Recruitment; "md" (320-400px)
   * for every other secondary page, per VISUAL-FIDELITY.md. */
  size?: "lg" | "md";
}

export function PageHero({
  variant,
  eyebrow,
  title,
  crumb,
  description,
  className,
  size = "md",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-20",
        size === "lg" ? "md:min-h-[460px]" : "md:min-h-[360px]",
        className
      )}
    >
      <div className="relative h-52 w-full sm:h-64 md:absolute md:inset-0 md:h-full">
        <HeroScene variant={variant} />
      </div>
      <div className="relative flex flex-col justify-center bg-background md:absolute md:inset-0 md:bg-transparent">
        <div className="container py-8 md:py-16">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: crumb ?? title }]} className="mb-5" />
            <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="h-px w-8 bg-gold" />
              {eyebrow}
            </div>
            <h1 className="text-balance font-display text-4xl text-foreground sm:text-5xl">{title}</h1>
            {description && <p className="mt-5 max-w-xl text-balance text-foreground/70">{description}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
