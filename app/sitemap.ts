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

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
  }));

  const news = getAllContent("news").map((a) => ({
    url: `${SITE.url}/news/${a.slug}`,
    lastModified: new Date(a.date),
  }));

  const guides = getAllContent("guides").map((g) => ({
    url: `${SITE.url}/guides/${g.slug}`,
    lastModified: new Date(g.updated),
  }));

  const wiki = getAllContent("wiki").map((w) => ({
    url: `${SITE.url}/wiki/${w.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...news, ...guides, ...wiki];
}
