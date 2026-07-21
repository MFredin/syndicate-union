import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { WikiSidebar } from "@/components/common/wiki-sidebar";
import { Badge } from "@/components/ui/badge";
import { mdxComponents, mdxOptions } from "@/components/mdx-components";
import { getAllContent, getContentBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllContent("wiki").map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getContentBySlug("wiki", params.slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default function WikiArticlePage({ params }: { params: { slug: string } }) {
  const article = getContentBySlug("wiki", params.slug);
  if (!article) notFound();

  const allArticles = getAllContent("wiki");

  return (
    <section className="section-y pt-32">
      <div className="container grid gap-10 lg:grid-cols-[240px_1fr]">
        <WikiSidebar articles={allArticles} activeSlug={article.slug} />
        <article className="max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Wiki", href: "/wiki" },
              { label: article.category, href: "/wiki" },
              { label: article.title },
            ]}
          />
          <Badge variant="outline" className="mt-6">
            {article.category}
          </Badge>
          <h1 className="mt-4 text-balance font-heading text-3xl sm:text-4xl">{article.title}</h1>
          <div className="mt-8 border-t border-border pt-8">
            <MDXRemote source={article.content} components={mdxComponents} options={mdxOptions} />
          </div>
        </article>
      </div>
    </section>
  );
}
