import { asc } from "drizzle-orm";
import { db } from "./client";
import * as schema from "./schema";
import type { Department } from "@/data/departments";
import type { StaffMember } from "@/data/staff";
import type { Member } from "@/data/members";
import type { Badge } from "@/data/badges";
import type { Stat } from "@/data/stats";
import type { Event } from "@/data/events";
import type { DownloadAsset } from "@/data/downloads";
import type { RoadmapItem } from "@/data/roadmap";
import type { GalleryItem } from "@/data/gallery";
import type { FaqItem } from "@/data/faq";
import type { Ally } from "@/data/allies";
import type { TimelineEvent } from "@/data/timeline";

export async function getDepartments(): Promise<Department[]> {
  const rows = await db.select().from(schema.departments).orderBy(asc(schema.departments.sortOrder));
  return rows.map((r) => ({
    id: r.id,
    name: r.name,
    icon: r.icon,
    summary: r.summary,
    description: r.description,
    responsibilities: r.responsibilities,
    openPositions: r.openPositions,
  }));
}

export async function getStaff(): Promise<StaffMember[]> {
  const rows = await db.select().from(schema.staff).orderBy(asc(schema.staff.sortOrder));
  return rows.map((r) => ({
    id: r.id,
    name: r.name,
    role: r.role,
    department: r.department,
    bio: r.bio,
    responsibilities: r.responsibilities,
    discord: r.discord ?? undefined,
  }));
}

export async function getMembers(): Promise<Member[]> {
  const rows = await db.select().from(schema.members);
  return rows.map((r) => ({
    id: r.id,
    callsign: r.callsign,
    department: r.department,
    role: r.role,
    joined: r.joined,
    badges: r.badges,
  }));
}

export async function getBadges(): Promise<Badge[]> {
  const rows = await db.select().from(schema.badges);
  return rows.map((r) => ({ id: r.id, name: r.name, description: r.description, icon: r.icon }));
}

export async function getStats(): Promise<Stat[]> {
  const rows = await db.select().from(schema.stats).orderBy(asc(schema.stats.sortOrder));
  return rows.map((r) => ({ label: r.label, value: r.value, icon: r.icon }));
}

export async function getEvents(): Promise<Event[]> {
  const rows = await db.select().from(schema.events);
  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    category: r.category as Event["category"],
    startsAtUTC: r.startsAtUtc.toISOString(),
    durationMinutes: r.durationMinutes,
    description: r.description,
    location: r.location,
  }));
}

export async function getDownloads(): Promise<DownloadAsset[]> {
  const rows = await db.select().from(schema.downloads);
  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    category: r.category as DownloadAsset["category"],
    version: r.version,
    fileType: r.fileType,
    sizeLabel: r.sizeLabel,
    updated: r.updated,
    description: r.description,
  }));
}

export async function getRoadmap(): Promise<RoadmapItem[]> {
  const rows = await db.select().from(schema.roadmap);
  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    description: r.description,
    status: r.status as RoadmapItem["status"],
    quarter: r.quarter,
  }));
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  const rows = await db.select().from(schema.gallery);
  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    creator: r.creator,
    category: r.category as GalleryItem["category"],
    variant: r.variant as GalleryItem["variant"],
    featured: r.featured,
    description: r.description,
  }));
}

export async function getFaqs(): Promise<FaqItem[]> {
  const rows = await db.select().from(schema.faq);
  return rows.map((r) => ({
    id: r.id,
    question: r.question,
    answer: r.answer,
    category: r.category as FaqItem["category"],
    popular: r.popular,
  }));
}

export async function getAllies(): Promise<Ally[]> {
  const rows = await db.select().from(schema.allies);
  return rows.map((r) => ({ id: r.id, name: r.name, relationship: r.relationship }));
}

export async function getTimeline(): Promise<TimelineEvent[]> {
  const rows = await db.select().from(schema.timelineEvents).orderBy(asc(schema.timelineEvents.sortOrder));
  return rows.map((r) => ({ id: r.id, year: r.year, title: r.title, description: r.description }));
}
