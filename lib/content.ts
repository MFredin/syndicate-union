import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import { readingTime } from "./utils";

const CONTENT_DIR = path.join(process.cwd(), "content");

const newsSchema = z.object({
  title: z.string(),
  date: z.string(),
  excerpt: z.string(),
  category: z.enum(["Community", "Events", "Guides", "Announcements", "Diplomacy"]),
  tags: z.array(z.string()).default([]),
  pinned: z.boolean().default(false),
  author: z.string(),
});

const loreSchema = z.object({
  title: z.string(),
  chapter: z.number(),
  era: z.string(),
  excerpt: z.string(),
});

const guideSchema = z.object({
  title: z.string(),
  category: z.string(),
  difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]),
  excerpt: z.string(),
  updated: z.string(),
});

const wikiSchema = z.object({
  title: z.string(),
  category: z.string(),
  order: z.number().default(0),
  excerpt: z.string(),
});

const schemas = {
  news: newsSchema,
  lore: loreSchema,
  guides: guideSchema,
  wiki: wikiSchema,
} as const;

export type ContentType = keyof typeof schemas;

export type ContentEntry<T extends ContentType> = z.infer<(typeof schemas)[T]> & {
  slug: string;
  content: string;
  readingTime: number;
};

function readDir(type: ContentType): string[] {
  const dir = path.join(CONTENT_DIR, type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
}

export function getAllContent<T extends ContentType>(type: T): ContentEntry<T>[] {
  const files = readDir(type);
  const schema = schemas[type];

  const entries = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, type, file), "utf8");
    const { data, content } = matter(raw);
    const parsed = schema.parse(data);
    return {
      ...parsed,
      slug,
      content,
      readingTime: readingTime(content),
    } as ContentEntry<T>;
  });

  return entries;
}

export function getContentBySlug<T extends ContentType>(
  type: T,
  slug: string
): ContentEntry<T> | null {
  const filePath = path.join(CONTENT_DIR, type, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const parsed = schemas[type].parse(data);
  return {
    ...parsed,
    slug,
    content,
    readingTime: readingTime(content),
  } as ContentEntry<T>;
}
