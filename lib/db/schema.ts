import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  jsonb,
  timestamp,
} from "drizzle-orm/pg-core";

/** Admin accounts — named logins only, no public self-registration. */
export const admins = pgTable("admins", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/** Shared audit columns every content table carries. */
const audit = {
  updatedBy: integer("updated_by").references(() => admins.id),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
};

export const departments = pgTable("departments", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  icon: text("icon").notNull(),
  summary: text("summary").notNull(),
  description: text("description").notNull(),
  responsibilities: jsonb("responsibilities").$type<string[]>().notNull(),
  openPositions: integer("open_positions").notNull().default(0),
  sortOrder: integer("sort_order").notNull().default(0),
  ...audit,
});

export const staff = pgTable("staff", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  department: text("department").notNull(),
  bio: text("bio").notNull(),
  responsibilities: jsonb("responsibilities").$type<string[]>().notNull(),
  discord: text("discord"),
  sortOrder: integer("sort_order").notNull().default(0),
  ...audit,
});

export const members = pgTable("members", {
  id: text("id").primaryKey(),
  callsign: text("callsign").notNull(),
  department: text("department").notNull(),
  role: text("role").notNull(),
  joined: text("joined").notNull(),
  badges: jsonb("badges").$type<string[]>().notNull().default([]),
  ...audit,
});

export const badges = pgTable("badges", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  ...audit,
});

export const stats = pgTable("stats", {
  id: serial("id").primaryKey(),
  label: text("label").notNull(),
  value: text("value").notNull(),
  icon: text("icon").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  ...audit,
});

export const events = pgTable("events", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  startsAtUtc: timestamp("starts_at_utc", { withTimezone: true }).notNull(),
  durationMinutes: integer("duration_minutes").notNull(),
  description: text("description").notNull(),
  location: text("location").notNull(),
  ...audit,
});

export const downloads = pgTable("downloads", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  version: text("version").notNull(),
  fileType: text("file_type").notNull(),
  sizeLabel: text("size_label").notNull(),
  updated: text("updated").notNull(),
  description: text("description").notNull(),
  ...audit,
});

export const roadmap = pgTable("roadmap", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  status: text("status").notNull(),
  quarter: text("quarter").notNull(),
  ...audit,
});

export const gallery = pgTable("gallery", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  creator: text("creator").notNull(),
  category: text("category").notNull(),
  variant: text("variant").notNull(),
  featured: boolean("featured").notNull().default(false),
  description: text("description").notNull(),
  ...audit,
});

export const faq = pgTable("faq", {
  id: text("id").primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  category: text("category").notNull(),
  popular: boolean("popular").notNull().default(false),
  ...audit,
});

export const allies = pgTable("allies", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  relationship: text("relationship").notNull(),
  ...audit,
});

export const timelineEvents = pgTable("timeline_events", {
  id: text("id").primaryKey(),
  year: text("year").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  ...audit,
});

/** Editorial, MDX-bodied content — `body` holds raw Markdown/MDX. */
export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  date: text("date").notNull(),
  excerpt: text("excerpt").notNull(),
  category: text("category").notNull(),
  tags: jsonb("tags").$type<string[]>().notNull().default([]),
  pinned: boolean("pinned").notNull().default(false),
  author: text("author").notNull(),
  body: text("body").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  ...audit,
});

export const lore = pgTable("lore", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  chapter: integer("chapter").notNull(),
  era: text("era").notNull(),
  excerpt: text("excerpt").notNull(),
  body: text("body").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  ...audit,
});

export const guides = pgTable("guides", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  difficulty: text("difficulty").notNull(),
  excerpt: text("excerpt").notNull(),
  updated: text("updated").notNull(),
  body: text("body").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  ...audit,
});

export const wiki = pgTable("wiki", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  order: integer("order").notNull().default(0),
  excerpt: text("excerpt").notNull(),
  body: text("body").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  ...audit,
});
