import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SeededAvatar } from "@/components/graphics/seeded-avatar";
import { getAllies } from "@/lib/db/queries";

export async function AlliesBand() {
  const allies = await getAllies();
  return (
    <section className="bg-navy py-14 text-navy-foreground">
      <div className="container flex flex-wrap items-center justify-between gap-8">
        <h2 className="font-heading text-xl">Allies &amp; Partners</h2>
        <div className="flex flex-wrap items-center gap-6">
          {allies.map((ally) => (
            <div key={ally.id} className="flex flex-col items-center gap-2 text-center" title={ally.relationship}>
              <div className="size-11 overflow-hidden rounded-full border border-white/15">
                <SeededAvatar seed={ally.id} />
              </div>
              <span className="max-w-[6rem] text-[11px] text-navy-foreground/60">{ally.name}</span>
            </div>
          ))}
        </div>
        <Link
          href="/wiki/alliance-types"
          className="flex items-center gap-1.5 text-sm text-gold-vivid transition-colors hover:text-gold-vivid/80"
        >
          Our Alliances
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
