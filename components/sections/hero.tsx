import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroScene } from "@/components/graphics/hero-scene";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-20">
      <HeroScene variant="home" />
      <div className="container relative py-24 text-white">
        <div className="max-w-2xl motion-safe:animate-fade-in">
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-vivid">
            <span className="h-px w-8 bg-gold-vivid" />
            Foundation: Galactic Frontier Community
          </div>
          <h1 className="text-balance font-display text-4xl leading-tight tracking-wide sm:text-5xl md:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg text-white/80">
            Syndicate Union is a player-driven community built on liberty, unity, honour, progress,
            and service — a professional, welcoming home base for commanders across the frontier.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="gold">
              <Link href="/recruitment">
                Join the Union
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about">
                <Compass />
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
