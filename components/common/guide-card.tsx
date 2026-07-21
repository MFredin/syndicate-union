import Link from "next/link";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ContentEntry } from "@/lib/content";

const difficultyVariant: Record<string, "default" | "gold" | "secondary" | "outline"> = {
  Beginner: "secondary",
  Intermediate: "outline",
  Advanced: "gold",
};

export function GuideCard({ guide }: { guide: ContentEntry<"guides"> }) {
  return (
    <Link href={`/guides/${guide.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
        <CardContent className="flex flex-1 flex-col gap-3 pt-6">
          <div className="flex items-center gap-2">
            <Badge variant={difficultyVariant[guide.difficulty]}>{guide.difficulty}</Badge>
            <Badge variant="outline">{guide.category}</Badge>
          </div>
          <h3 className="font-heading text-lg leading-snug transition-colors group-hover:text-primary">
            {guide.title}
          </h3>
          <p className="flex-1 text-sm text-muted-foreground">{guide.excerpt}</p>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="size-3.5 text-gold" />
            {guide.readingTime} min read
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
