import Link from "next/link";
import { Pin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { ContentEntry } from "@/lib/content";

const categoryVariant: Record<string, "default" | "gold" | "secondary" | "outline"> = {
  Community: "secondary",
  Events: "default",
  Guides: "outline",
  Announcements: "gold",
  Diplomacy: "secondary",
};

export function NewsCard({ article }: { article: ContentEntry<"news"> }) {
  return (
    <Link href={`/news/${article.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
        <CardContent className="flex flex-1 flex-col gap-3 pt-6">
          <div className="flex items-center justify-between gap-2">
            <Badge variant={categoryVariant[article.category] ?? "outline"}>{article.category}</Badge>
            {article.pinned && <Pin className="size-3.5 text-gold" aria-label="Pinned" />}
          </div>
          <h3 className="font-heading text-lg leading-snug tracking-wide transition-colors group-hover:text-primary">
            {article.title}
          </h3>
          <p className="flex-1 text-sm text-muted-foreground">{article.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{formatDate(article.date, { month: "short", day: "numeric", year: "numeric" })}</span>
            <span>{article.readingTime} min read</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
