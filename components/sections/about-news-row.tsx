import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { SITE } from "@/lib/site";
import { getAllContent } from "@/lib/content";

const categoryVariant: Record<string, "default" | "gold" | "secondary" | "outline"> = {
  Community: "secondary",
  Events: "default",
  Guides: "outline",
  Announcements: "gold",
  Diplomacy: "secondary",
};

export function AboutNewsRow() {
  const articles = getAllContent("news")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="section-y">
      <div className="container grid gap-8 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <SectionHeading eyebrow="Who We Are" title="About Syndicate Union" />
            <p className="mt-4 text-sm text-muted-foreground">
              Syndicate Union exists because the frontier deserved somewhere steady — a place
              where new commanders get a real welcome, guides stay current, and leadership
              answers to the membership it serves.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {SITE.values.slice(0, 4).map((value) => (
                <div key={value.name} className="rounded-md border border-border bg-secondary/40 p-3">
                  <p className="font-heading text-sm text-primary">{value.name}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="link" className="mt-4 px-0">
              <Link href="/about">
                Our Story
                <ArrowRight />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <SectionHeading eyebrow="Dispatches" title="Latest News" />
              <Button asChild variant="link" className="shrink-0 px-0">
                <Link href="/news">View all</Link>
              </Button>
            </div>
            <ul className="mt-4 divide-y divide-border">
              {articles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/news/${article.slug}`}
                    className="group flex items-center justify-between gap-3 py-3.5"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <Badge variant={categoryVariant[article.category] ?? "outline"} className="text-[10px]">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(article.date, { month: "short", day: "numeric" })}
                        </span>
                      </div>
                      <p className="mt-1 truncate font-heading text-sm transition-colors group-hover:text-primary">
                        {article.title}
                      </p>
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-gold transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
