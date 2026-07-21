import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllContent } from "@/lib/content";

const staticRoutes = [
  "",
  "/about",
  "/lore",
  "/news",
  "/recruitment",
  "/wiki",
  "/guides",
  "/faq",
  "/events",
  "/gallery",
  "/members",
  "/staff",
  "/downloads",
  "/roadmap",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
  }));

  const [newsContent, guidesContent, wikiContent] = await Promise.all([
    getAllContent("news"),
    getAllContent("guides"),
    getAllContent("wiki"),
  ]);

  const news = newsContent.map((a) => ({
    url: `${SITE.url}/news/${a.slug}`,
    lastModified: new Date(a.date),
  }));

  const guides = guidesContent.map((g) => ({
    url: `${SITE.url}/guides/${g.slug}`,
    lastModified: new Date(g.updated),
  }));

  const wiki = wikiContent.map((w) => ({
    url: `${SITE.url}/wiki/${w.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...news, ...guides, ...wiki];
}
