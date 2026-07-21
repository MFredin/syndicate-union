import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LibertyEmblem } from "@/components/brand/liberty-emblem";

export function RecruitmentCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground">
      <div className="container relative flex flex-col items-center gap-6 text-center">
        <LibertyEmblem className="size-14" />
        <h2 className="max-w-2xl text-balance font-heading text-3xl tracking-wide md:text-4xl">
          Ready to report for duty?
        </h2>
        <p className="max-w-xl text-balance text-navy-foreground/70">
          Join thousands of Unionists across six departments, coordinating fleets, guiding newcomers,
          and building something meant to outlast a single season.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Button asChild size="lg" variant="gold">
            <Link href="/recruitment">
              Join Syndicate Union
              <ArrowRight />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/5 text-navy-foreground hover:bg-white/10"
          >
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
