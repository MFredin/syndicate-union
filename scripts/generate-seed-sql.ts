/**
 * Generates plain SQL (no live DB connection) for the same seed content that
 * scripts/seed.ts would insert. Used when the target database can't be
 * reached directly (e.g. network-restricted environments) — paste the output
 * into the provider's SQL editor (Neon console, etc.) instead.
 */
import { config } from "dotenv";
config({ path: ".env.local", quiet: true });

import { writeFileSync } from "node:fs";
import { db } from "../lib/db/client";
import * as schema from "../lib/db/schema";
import { readSourceMdx } from "./read-source-mdx";

import {
  departments,
  staff,
  members,
  badges,
  stats,
  events,
  downloads,
  roadmap,
  galleryItems,
  faqs,
  allies,
  timeline,
} from "./seed-data";

function literal(value: unknown): string {
  if (value === null || value === undefined) return "NULL";
  if (typeof value === "boolean") return value ? "true" : "false";
  if (typeof value === "number") return String(value);
  if (value instanceof Date) return `'${value.toISOString()}'`;
  return `'${String(value).replace(/'/g, "''")}'`;
}

function toInlinedSql(query: { toSQL(): { sql: string; params: unknown[] } }): string {
  const { sql, params } = query.toSQL();
  let i = 0;
  const inlined = sql.replace(/\$(\d+)/g, () => literal(params[i++]));
  return inlined + ";";
}

const out: string[] = [];
const log = (label: string) => out.push(`\n-- ${label}`);

log("departments");
for (const [i, d] of departments.entries()) {
  out.push(
    toInlinedSql(
      db
        .insert(schema.departments)
        .values({
          id: d.id,
          name: d.name,
          icon: d.icon,
          summary: d.summary,
          description: d.description,
          responsibilities: d.responsibilities,
          openPositions: d.openPositions,
          sortOrder: i,
        })
        .onConflictDoUpdate({
          target: schema.departments.id,
          set: {
            name: d.name,
            icon: d.icon,
            summary: d.summary,
            description: d.description,
            responsibilities: d.responsibilities,
            openPositions: d.openPositions,
            sortOrder: i,
          },
        })
    )
  );
}

log("staff");
for (const [i, s] of staff.entries()) {
  out.push(
    toInlinedSql(
      db
        .insert(schema.staff)
        .values({
          id: s.id,
          name: s.name,
          role: s.role,
          department: s.department,
          bio: s.bio,
          responsibilities: s.responsibilities,
          discord: s.discord ?? null,
          sortOrder: i,
        })
        .onConflictDoUpdate({
          target: schema.staff.id,
          set: {
            name: s.name,
            role: s.role,
            department: s.department,
            bio: s.bio,
            responsibilities: s.responsibilities,
            discord: s.discord ?? null,
            sortOrder: i,
          },
        })
    )
  );
}

log("members");
for (const m of members) {
  out.push(
    toInlinedSql(
      db
        .insert(schema.members)
        .values({
          id: m.id,
          callsign: m.callsign,
          department: m.department,
          role: m.role,
          joined: m.joined,
          badges: m.badges,
        })
        .onConflictDoUpdate({
          target: schema.members.id,
          set: {
            callsign: m.callsign,
            department: m.department,
            role: m.role,
            joined: m.joined,
            badges: m.badges,
          },
        })
    )
  );
}

log("badges");
for (const b of badges) {
  out.push(
    toInlinedSql(
      db
        .insert(schema.badges)
        .values({ id: b.id, name: b.name, description: b.description, icon: b.icon })
        .onConflictDoUpdate({
          target: schema.badges.id,
          set: { name: b.name, description: b.description, icon: b.icon },
        })
    )
  );
}

log("stats (replace-all)");
out.push(`DELETE FROM "stats";`);
stats.forEach((s, i) => {
  out.push(
    toInlinedSql(
      db.insert(schema.stats).values({ label: s.label, value: s.value, icon: s.icon, sortOrder: i })
    )
  );
});

log("events");
for (const e of events) {
  out.push(
    toInlinedSql(
      db
        .insert(schema.events)
        .values({
          id: e.id,
          title: e.title,
          category: e.category,
          startsAtUtc: new Date(e.startsAtUTC),
          durationMinutes: e.durationMinutes,
          description: e.description,
          location: e.location,
        })
        .onConflictDoUpdate({
          target: schema.events.id,
          set: {
            title: e.title,
            category: e.category,
            startsAtUtc: new Date(e.startsAtUTC),
            durationMinutes: e.durationMinutes,
            description: e.description,
            location: e.location,
          },
        })
    )
  );
}

log("downloads");
for (const d of downloads) {
  out.push(
    toInlinedSql(
      db
        .insert(schema.downloads)
        .values({
          id: d.id,
          title: d.title,
          category: d.category,
          version: d.version,
          fileType: d.fileType,
          sizeLabel: d.sizeLabel,
          updated: d.updated,
          description: d.description,
        })
        .onConflictDoUpdate({
          target: schema.downloads.id,
          set: {
            title: d.title,
            category: d.category,
            version: d.version,
            fileType: d.fileType,
            sizeLabel: d.sizeLabel,
            updated: d.updated,
            description: d.description,
          },
        })
    )
  );
}

log("roadmap");
for (const r of roadmap) {
  out.push(
    toInlinedSql(
      db
        .insert(schema.roadmap)
        .values({ id: r.id, title: r.title, description: r.description, status: r.status, quarter: r.quarter })
        .onConflictDoUpdate({
          target: schema.roadmap.id,
          set: { title: r.title, description: r.description, status: r.status, quarter: r.quarter },
        })
    )
  );
}

log("gallery");
for (const g of galleryItems) {
  out.push(
    toInlinedSql(
      db
        .insert(schema.gallery)
        .values({
          id: g.id,
          title: g.title,
          creator: g.creator,
          category: g.category,
          variant: g.variant,
          featured: g.featured ?? false,
          description: g.description,
        })
        .onConflictDoUpdate({
          target: schema.gallery.id,
          set: {
            title: g.title,
            creator: g.creator,
            category: g.category,
            variant: g.variant,
            featured: g.featured ?? false,
            description: g.description,
          },
        })
    )
  );
}

log("faq");
for (const f of faqs) {
  out.push(
    toInlinedSql(
      db
        .insert(schema.faq)
        .values({ id: f.id, question: f.question, answer: f.answer, category: f.category, popular: f.popular ?? false })
        .onConflictDoUpdate({
          target: schema.faq.id,
          set: { question: f.question, answer: f.answer, category: f.category, popular: f.popular ?? false },
        })
    )
  );
}

log("allies");
for (const a of allies) {
  out.push(
    toInlinedSql(
      db
        .insert(schema.allies)
        .values({ id: a.id, name: a.name, relationship: a.relationship })
        .onConflictDoUpdate({
          target: schema.allies.id,
          set: { name: a.name, relationship: a.relationship },
        })
    )
  );
}

log("timeline");
for (const [i, t] of timeline.entries()) {
  out.push(
    toInlinedSql(
      db
        .insert(schema.timelineEvents)
        .values({ id: t.id, year: t.year, title: t.title, description: t.description, sortOrder: i })
        .onConflictDoUpdate({
          target: schema.timelineEvents.id,
          set: { year: t.year, title: t.title, description: t.description, sortOrder: i },
        })
    )
  );
}

log("news");
for (const n of readSourceMdx("news")) {
  const d = n.data as {
    title: string;
    date: string;
    excerpt: string;
    category: string;
    tags?: string[];
    pinned?: boolean;
    author: string;
  };
  out.push(
    toInlinedSql(
      db
        .insert(schema.news)
        .values({
          slug: n.slug,
          title: d.title,
          date: d.date,
          excerpt: d.excerpt,
          category: d.category,
          tags: d.tags ?? [],
          pinned: d.pinned ?? false,
          author: d.author,
          body: n.content,
        })
        .onConflictDoUpdate({
          target: schema.news.slug,
          set: {
            title: d.title,
            date: d.date,
            excerpt: d.excerpt,
            category: d.category,
            tags: d.tags ?? [],
            pinned: d.pinned ?? false,
            author: d.author,
            body: n.content,
          },
        })
    )
  );
}

log("lore");
for (const l of readSourceMdx("lore")) {
  const d = l.data as { title: string; chapter: number; era: string; excerpt: string };
  out.push(
    toInlinedSql(
      db
        .insert(schema.lore)
        .values({ slug: l.slug, title: d.title, chapter: d.chapter, era: d.era, excerpt: d.excerpt, body: l.content })
        .onConflictDoUpdate({
          target: schema.lore.slug,
          set: { title: d.title, chapter: d.chapter, era: d.era, excerpt: d.excerpt, body: l.content },
        })
    )
  );
}

log("guides");
for (const g of readSourceMdx("guides")) {
  const d = g.data as { title: string; category: string; difficulty: string; excerpt: string; updated: string };
  out.push(
    toInlinedSql(
      db
        .insert(schema.guides)
        .values({
          slug: g.slug,
          title: d.title,
          category: d.category,
          difficulty: d.difficulty,
          excerpt: d.excerpt,
          updated: d.updated,
          body: g.content,
        })
        .onConflictDoUpdate({
          target: schema.guides.slug,
          set: {
            title: d.title,
            category: d.category,
            difficulty: d.difficulty,
            excerpt: d.excerpt,
            updated: d.updated,
            body: g.content,
          },
        })
    )
  );
}

log("wiki");
for (const w of readSourceMdx("wiki")) {
  const d = w.data as { title: string; category: string; order?: number; excerpt: string };
  out.push(
    toInlinedSql(
      db
        .insert(schema.wiki)
        .values({ slug: w.slug, title: d.title, category: d.category, order: d.order ?? 0, excerpt: d.excerpt, body: w.content })
        .onConflictDoUpdate({
          target: schema.wiki.slug,
          set: { title: d.title, category: d.category, order: d.order ?? 0, excerpt: d.excerpt, body: w.content },
        })
    )
  );
}

const outPath = process.argv[2];
if (!outPath) {
  console.error("Usage: tsx scripts/generate-seed-sql.ts <output-file>");
  process.exit(1);
}
writeFileSync(outPath, out.join("\n") + "\n");
console.error(`Wrote ${out.length} statements/comments to ${outPath}`);
process.exit(0);
