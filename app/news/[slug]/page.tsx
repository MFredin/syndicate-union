import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { NewsCard } from "@/components/common/news-card";
import { Badge } from "@/components/ui/badge";
import { mdxComponents, mdxOptions } from "@/components/mdx-components";
import { JsonLd } from "@/components/json-ld";
import { formatDate } from "@/lib/utils";
import { getAllContent, getContentBySlug } from "@/lib/content";
import { articleSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return getAllContent("news").map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getContentBySlug("news", params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, type: "article" },
  };
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getContentBySlug("news", params.slug);
  if (!article) notFound();

  const related = getAllContent("news")
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  return (
    <article className="section-y pt-32">
      <JsonLd
        data={articleSchema({
          title: article.title,
          excerpt: article.excerpt,
          date: article.date,
          author: article.author,
          url: `${SITE.url}/news/${article.slug}`,
        })}
      />
      <div className="container max-w-3xl">
        <Breadcrumbs items={[{ label: "News", href: "/news" }, { label: article.title }]} />
        <div className="mt-6 flex items-center gap-3">
          <Badge variant="gold">{article.category}</Badge>
          <span className="text-sm text-muted-foreground">
            {formatDate(article.date)} &middot; {article.readingTime} min read
          </span>
        </div>
        <h1 className="mt-4 text-balance font-heading text-3xl sm:text-4xl">{article.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">By {article.author}</p>

        <div className="mt-10 border-t border-border pt-8">
          <MDXRemote source={article.content} components={mdxComponents} options={mdxOptions} />
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              #{tag}
            </Badge>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div className="container mt-20 max-w-5xl">
          <h2 className="font-heading text-xl">Related dispatches</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((a) => (
              <NewsCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
