import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { GuideCard } from "@/components/common/guide-card";
import { Badge } from "@/components/ui/badge";
import { mdxComponents } from "@/components/mdx-components";
import { JsonLd } from "@/components/json-ld";
import { formatDate } from "@/lib/utils";
import { getAllContent, getContentBySlug } from "@/lib/content";
import { articleSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return getAllContent("guides").map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getContentBySlug("guides", params.slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.excerpt };
}

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = getContentBySlug("guides", params.slug);
  if (!guide) notFound();

  const related = getAllContent("guides")
    .filter((g) => g.slug !== guide.slug && g.category === guide.category)
    .slice(0, 3);

  return (
    <article className="section-y pt-32">
      <JsonLd
        data={articleSchema({
          title: guide.title,
          excerpt: guide.excerpt,
          date: guide.updated,
          author: SITE.name,
          url: `${SITE.url}/guides/${guide.slug}`,
        })}
      />
      <div className="container max-w-3xl">
        <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: guide.title }]} />
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Badge variant="gold">{guide.difficulty}</Badge>
          <Badge variant="outline">{guide.category}</Badge>
          <span className="text-sm text-muted-foreground">
            {guide.readingTime} min read &middot; Updated {formatDate(guide.updated)}
          </span>
        </div>
        <h1 className="mt-4 text-balance font-heading text-3xl tracking-wide sm:text-4xl">{guide.title}</h1>
        <p className="mt-4 text-muted-foreground">{guide.excerpt}</p>

        <div className="mt-10 border-t border-border pt-8">
          <MDXRemote source={guide.content} components={mdxComponents} />
        </div>
      </div>

      {related.length > 0 && (
        <div className="container mt-20 max-w-5xl">
          <h2 className="font-heading text-xl tracking-wide">Related guides</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
