import { eq } from "drizzle-orm";
import { db } from "./db/client";
import * as schema from "./db/schema";
import { readingTime } from "./utils";

export type ContentType = "news" | "lore" | "guides" | "wiki";

interface NewsFields {
  title: string;
  date: string;
  excerpt: string;
  category: "Community" | "Events" | "Guides" | "Announcements" | "Diplomacy";
  tags: string[];
  pinned: boolean;
  author: string;
}

interface LoreFields {
  title: string;
  chapter: number;
  era: string;
  excerpt: string;
}

interface GuideFields {
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  excerpt: string;
  updated: string;
}

interface WikiFields {
  title: string;
  category: string;
  order: number;
  excerpt: string;
}

type FieldsFor<T extends ContentType> = T extends "news"
  ? NewsFields
  : T extends "lore"
    ? LoreFields
    : T extends "guides"
      ? GuideFields
      : WikiFields;

export type ContentEntry<T extends ContentType> = FieldsFor<T> & {
  slug: string;
  content: string;
  readingTime: number;
};

export async function getAllContent<T extends ContentType>(type: T): Promise<ContentEntry<T>[]> {
  switch (type) {
    case "news": {
      const rows = await db.select().from(schema.news);
      return rows.map((r) => ({
        title: r.title,
        date: r.date,
        excerpt: r.excerpt,
        category: r.category as NewsFields["category"],
        tags: r.tags,
        pinned: r.pinned,
        author: r.author,
        slug: r.slug,
        content: r.body,
        readingTime: readingTime(r.body),
      })) as unknown as ContentEntry<T>[];
    }
    case "lore": {
      const rows = await db.select().from(schema.lore);
      return rows.map((r) => ({
        title: r.title,
        chapter: r.chapter,
        era: r.era,
        excerpt: r.excerpt,
        slug: r.slug,
        content: r.body,
        readingTime: readingTime(r.body),
      })) as unknown as ContentEntry<T>[];
    }
    case "guides": {
      const rows = await db.select().from(schema.guides);
      return rows.map((r) => ({
        title: r.title,
        category: r.category,
        difficulty: r.difficulty as GuideFields["difficulty"],
        excerpt: r.excerpt,
        updated: r.updated,
        slug: r.slug,
        content: r.body,
        readingTime: readingTime(r.body),
      })) as unknown as ContentEntry<T>[];
    }
    case "wiki": {
      const rows = await db.select().from(schema.wiki);
      return rows.map((r) => ({
        title: r.title,
        category: r.category,
        order: r.order,
        excerpt: r.excerpt,
        slug: r.slug,
        content: r.body,
        readingTime: readingTime(r.body),
      })) as unknown as ContentEntry<T>[];
    }
    default:
      return [];
  }
}

export async function getContentBySlug<T extends ContentType>(
  type: T,
  slug: string
): Promise<ContentEntry<T> | null> {
  switch (type) {
    case "news": {
      const [r] = await db.select().from(schema.news).where(eq(schema.news.slug, slug)).limit(1);
      if (!r) return null;
      return {
        title: r.title,
        date: r.date,
        excerpt: r.excerpt,
        category: r.category as NewsFields["category"],
        tags: r.tags,
        pinned: r.pinned,
        author: r.author,
        slug: r.slug,
        content: r.body,
        readingTime: readingTime(r.body),
      } as unknown as ContentEntry<T>;
    }
    case "lore": {
      const [r] = await db.select().from(schema.lore).where(eq(schema.lore.slug, slug)).limit(1);
      if (!r) return null;
      return {
        title: r.title,
        chapter: r.chapter,
        era: r.era,
        excerpt: r.excerpt,
        slug: r.slug,
        content: r.body,
        readingTime: readingTime(r.body),
      } as unknown as ContentEntry<T>;
    }
    case "guides": {
      const [r] = await db.select().from(schema.guides).where(eq(schema.guides.slug, slug)).limit(1);
      if (!r) return null;
      return {
        title: r.title,
        category: r.category,
        difficulty: r.difficulty as GuideFields["difficulty"],
        excerpt: r.excerpt,
        updated: r.updated,
        slug: r.slug,
        content: r.body,
        readingTime: readingTime(r.body),
      } as unknown as ContentEntry<T>;
    }
    case "wiki": {
      const [r] = await db.select().from(schema.wiki).where(eq(schema.wiki.slug, slug)).limit(1);
      if (!r) return null;
      return {
        title: r.title,
        category: r.category,
        order: r.order,
        excerpt: r.excerpt,
        slug: r.slug,
        content: r.body,
        readingTime: readingTime(r.body),
      } as unknown as ContentEntry<T>;
    }
    default:
      return null;
  }
}
