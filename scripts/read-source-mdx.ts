/**
 * Reads the original content/{type}/*.mdx files straight off disk — this is
 * the pre-migration filesystem logic lib/content.ts used to have, kept here
 * only so scripts/seed.ts has a source to seed the DB *from*. Every other
 * consumer reads through lib/content.ts (DB-backed) instead.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface SourceMdxEntry {
  slug: string;
  data: Record<string, unknown>;
  content: string;
}

export function readSourceMdx(type: "news" | "lore" | "guides" | "wiki"): SourceMdxEntry[] {
  const dir = path.join(CONTENT_DIR, type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { slug, data, content };
    });
}
