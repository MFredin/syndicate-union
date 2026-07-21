/**
 * One-time (repeatable) migration of the site's placeholder content — the
 * `data/*.ts` arrays and `content/**\/*.mdx` files — into the database, so
 * admins see real content immediately instead of an empty CMS. Safe to
 * re-run: rows are upserted on their natural key (id or slug).
 *
 * Usage: npm run db:seed
 */
import { config } from "dotenv";
config({ path: ".env.local" });

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

async function main() {
  console.log("Seeding departments...");
  for (const [i, d] of departments.entries()) {
    await db
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
      });
  }

  console.log("Seeding staff...");
  for (const [i, s] of staff.entries()) {
    await db
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
      });
  }

  console.log("Seeding members...");
  for (const m of members) {
    await db
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
      });
  }

  console.log("Seeding badges...");
  for (const b of badges) {
    await db
      .insert(schema.badges)
      .values({ id: b.id, name: b.name, description: b.description, icon: b.icon })
      .onConflictDoUpdate({
        target: schema.badges.id,
        set: { name: b.name, description: b.description, icon: b.icon },
      });
  }

  console.log("Seeding stats (replace-all — no natural key)...");
  await db.delete(schema.stats);
  if (stats.length > 0) {
    await db.insert(schema.stats).values(
      stats.map((s, i) => ({ label: s.label, value: s.value, icon: s.icon, sortOrder: i }))
    );
  }

  console.log("Seeding events...");
  for (const e of events) {
    await db
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
      });
  }

  console.log("Seeding downloads...");
  for (const d of downloads) {
    await db
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
      });
  }

  console.log("Seeding roadmap...");
  for (const r of roadmap) {
    await db
      .insert(schema.roadmap)
      .values({
        id: r.id,
        title: r.title,
        description: r.description,
        status: r.status,
        quarter: r.quarter,
      })
      .onConflictDoUpdate({
        target: schema.roadmap.id,
        set: { title: r.title, description: r.description, status: r.status, quarter: r.quarter },
      });
  }

  console.log("Seeding gallery...");
  for (const g of galleryItems) {
    await db
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
      });
  }

  console.log("Seeding FAQ...");
  for (const f of faqs) {
    await db
      .insert(schema.faq)
      .values({
        id: f.id,
        question: f.question,
        answer: f.answer,
        category: f.category,
        popular: f.popular ?? false,
      })
      .onConflictDoUpdate({
        target: schema.faq.id,
        set: {
          question: f.question,
          answer: f.answer,
          category: f.category,
          popular: f.popular ?? false,
        },
      });
  }

  console.log("Seeding allies...");
  for (const a of allies) {
    await db
      .insert(schema.allies)
      .values({ id: a.id, name: a.name, relationship: a.relationship })
      .onConflictDoUpdate({
        target: schema.allies.id,
        set: { name: a.name, relationship: a.relationship },
      });
  }

  console.log("Seeding timeline...");
  for (const [i, t] of timeline.entries()) {
    await db
      .insert(schema.timelineEvents)
      .values({ id: t.id, year: t.year, title: t.title, description: t.description, sortOrder: i })
      .onConflictDoUpdate({
        target: schema.timelineEvents.id,
        set: { year: t.year, title: t.title, description: t.description, sortOrder: i },
      });
  }

  console.log("Seeding news...");
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
    await db
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
      });
  }

  console.log("Seeding lore...");
  for (const l of readSourceMdx("lore")) {
    const d = l.data as { title: string; chapter: number; era: string; excerpt: string };
    await db
      .insert(schema.lore)
      .values({
        slug: l.slug,
        title: d.title,
        chapter: d.chapter,
        era: d.era,
        excerpt: d.excerpt,
        body: l.content,
      })
      .onConflictDoUpdate({
        target: schema.lore.slug,
        set: { title: d.title, chapter: d.chapter, era: d.era, excerpt: d.excerpt, body: l.content },
      });
  }

  console.log("Seeding guides...");
  for (const g of readSourceMdx("guides")) {
    const d = g.data as {
      title: string;
      category: string;
      difficulty: string;
      excerpt: string;
      updated: string;
    };
    await db
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
      });
  }

  console.log("Seeding wiki...");
  for (const w of readSourceMdx("wiki")) {
    const d = w.data as { title: string; category: string; order?: number; excerpt: string };
    await db
      .insert(schema.wiki)
      .values({
        slug: w.slug,
        title: d.title,
        category: d.category,
        order: d.order ?? 0,
        excerpt: d.excerpt,
        body: w.content,
      })
      .onConflictDoUpdate({
        target: schema.wiki.slug,
        set: {
          title: d.title,
          category: d.category,
          order: d.order ?? 0,
          excerpt: d.excerpt,
          body: w.content,
        },
      });
  }

  console.log("Seed complete.");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
