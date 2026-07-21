import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { OrbitalRings } from "@/components/graphics/orbital-rings";
import { FleetScene } from "@/components/graphics/fleet-scene";
import { CouncilChamber } from "@/components/graphics/council-chamber";
import { Skyline } from "@/components/graphics/skyline";
import { LibertyEmblem } from "@/components/brand/liberty-emblem";
import { mdxComponents } from "@/components/mdx-components";
import { getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Lore",
  description: "The story of Syndicate Union — from a fractured frontier to a community six departments strong.",
};

const chapterArt = [OrbitalRings, FleetScene, CouncilChamber, Skyline, LibertyEmblem];

export default function LorePage() {
  const chapters = getAllContent("lore").sort((a, b) => a.chapter - b.chapter);

  return (
    <>
      <PageHero
        variant="lore"
        eyebrow="The Chronicle"
        title="The Story of Syndicate Union"
        description="From a fractured frontier to a community six departments strong — told in seven chapters."
      />

      <section className="section-y">
        <div className="container grid gap-12 lg:grid-cols-[220px_1fr]">
          <nav aria-label="Chapter navigation" className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-1 border-l border-border pl-4">
              {chapters.map((chapter) => (
                <a
                  key={chapter.slug}
                  href={`#chapter-${chapter.chapter}`}
                  className="py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="mr-2 text-gold">{String(chapter.chapter).padStart(2, "0")}</span>
                  {chapter.title}
                </a>
              ))}
            </div>
          </nav>

          <div>
            <SectionHeading eyebrow="Seven Chapters" title="Expand a chapter to read on" className="mb-8" />
            <Accordion type="multiple" defaultValue={["chapter-1"]}>
              {chapters.map((chapter, i) => {
                const Art = chapterArt[i % chapterArt.length];
                return (
                  <AccordionItem key={chapter.slug} value={`chapter-${chapter.chapter}`} id={`chapter-${chapter.chapter}`}>
                    <AccordionTrigger>
                      <div className="flex items-center gap-4 text-left">
                        <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-navy">
                          <Art className="size-16 opacity-90" />
                        </span>
                        <span>
                          <span className="block text-xs uppercase tracking-[0.2em] text-gold">
                            Chapter {chapter.chapter} — {chapter.era}
                          </span>
                          <span className="block font-heading text-lg tracking-wide text-foreground">
                            {chapter.title}
                          </span>
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-16">
                        <MDXRemote source={chapter.content} components={mdxComponents} />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
