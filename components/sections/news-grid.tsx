import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { NewsCard } from "@/components/common/news-card";
import { Button } from "@/components/ui/button";
import { getAllContent } from "@/lib/content";

export function NewsGrid() {
  const articles = getAllContent("news")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="section-y bg-secondary/40">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Latest Transmissions" title="From the News Feed" />
          <Button asChild variant="outline">
            <Link href="/news">
              All news
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
