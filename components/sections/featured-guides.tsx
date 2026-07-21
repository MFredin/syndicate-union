import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { GuideCard } from "@/components/common/guide-card";
import { Button } from "@/components/ui/button";
import { getAllContent } from "@/lib/content";

export function FeaturedGuides() {
  const guides = getAllContent("guides")
    .sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime())
    .slice(0, 3);

  return (
    <section className="section-y">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Featured Guides" title="Strategy, written by the people who use it" />
          <Button asChild variant="outline">
            <Link href="/guides">
              Browse guides
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </div>
    </section>
  );
}
