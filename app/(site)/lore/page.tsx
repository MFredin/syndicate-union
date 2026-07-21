import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { OrbitalRings } from "@/components/graphics/orbital-rings";
import { FleetScene } from "@/components/graphics/fleet-scene";
import { CouncilChamber } from "@/components/graphics/council-chamber";
import { Skyline } from "@/components/graphics/skyline";
import { LibertyEmblem } from "@/components/brand/liberty-emblem";
import { mdxComponents, mdxOptions } from "@/components/mdx-components";
import { getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Lore",
  description: "The story of Syndicate Union — from a fractured frontier to a community eight divisions strong.",
};

const chapterArt = [OrbitalRings, FleetScene, CouncilChamber, Skyline, LibertyEmblem];

const ERAS = ["Our Origins", "Early Days", "Expansion", "Today & Beyond"] as const;

const ERA_MAP: Record<string, (typeof ERAS)[number]> = {
  "Before the Union": "Our Origins",
  Founding: "Our Origins",
  Growth: "Early Days",
  Expansion: "Expansion",
  "Present Day": "Today & Beyond",
};

export default async function LorePage() {
  const chapters = (await getAllContent("lore")).sort((a, b) => a.chapter - b.chapter);
  const byEra = ERAS.map((era) => ({
    era,
    chapters: chapters.filter((c) => ERA_MAP[c.era] === era),
  })).filter((group) => group.chapters.length > 0);

  return (
    <>
      <PageHero
        variant="lore"
        size="lg"
        eyebrow="The Chronicle"
        crumb="Lore"
        title="The Story of Syndicate Union"
        description="From a fractured frontier to a community eight divisions strong — told across four eras."
      />

      <section className="section-y">
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Four Eras" title="Choose an era to read on" className="mb-8" />
          <Tabs defaultValue={byEra[0]?.era}>
            <TabsList className="h-auto flex-wrap">
              {byEra.map(({ era }) => (
                <TabsTrigger key={era} value={era}>
                  {era}
                </TabsTrigger>
              ))}
            </TabsList>

            {byEra.map(({ era, chapters: eraChapters }) => (
              <TabsContent key={era} value={era}>
                <Accordion type="multiple" defaultValue={[`chapter-${eraChapters[0]?.chapter}`]}>
                  {eraChapters.map((chapter) => {
                    const Art = chapterArt[(chapter.chapter - 1) % chapterArt.length];
                    return (
                      <AccordionItem
                        key={chapter.slug}
                        value={`chapter-${chapter.chapter}`}
                        id={`chapter-${chapter.chapter}`}
                      >
                        <AccordionTrigger>
                          <div className="flex items-center gap-4 text-left">
                            <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-navy">
                              <Art className="size-16 opacity-90" />
                            </span>
                            <span>
                              <span className="block text-xs uppercase tracking-[0.2em] text-gold">
                                Chapter {chapter.chapter} — {chapter.era}
                              </span>
                              <span className="block font-heading text-lg text-foreground">
                                {chapter.title}
                              </span>
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-16">
                            <MDXRemote source={chapter.content} components={mdxComponents} options={mdxOptions} />
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
}
