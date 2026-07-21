import { HeroScene, type HeroVariant } from "@/components/graphics/hero-scene";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  variant: HeroVariant;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHero({ variant, eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn("relative flex min-h-[50vh] items-end overflow-hidden pt-20", className)}>
      <HeroScene variant={variant} />
      <div className="container relative py-16 text-white">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-vivid">
            <span className="h-px w-8 bg-gold-vivid" />
            {eyebrow}
          </div>
          <h1 className="text-balance font-display text-4xl tracking-wide sm:text-5xl">{title}</h1>
          {description && <p className="mt-5 max-w-xl text-balance text-white/80">{description}</p>}
        </div>
      </div>
    </section>
  );
}
