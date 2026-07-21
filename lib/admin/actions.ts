"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq, asc, type SQL } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { admins } from "@/lib/db/schema";
import { getAdminSession } from "@/lib/admin-auth";
import { getContentType, type ContentTypeConfig, type FieldConfig } from "./content-types";

async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return session;
}

function parseFormValue(field: FieldConfig, formData: FormData): unknown {
  const raw = formData.get(field.key);
  switch (field.type) {
    case "number": {
      if (raw === null || raw === "") return field.required ? 0 : null;
      const n = Number(raw);
      return Number.isNaN(n) ? null : n;
    }
    case "boolean":
      return raw === "on";
    case "tags":
      return String(raw ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    case "datetime":
      return raw ? new Date(String(raw)) : null;
    default:
      return raw === null ? "" : String(raw);
  }
}

function buildValues(config: ContentTypeConfig, formData: FormData) {
  const values: Record<string, unknown> = {};
  for (const field of config.fields) {
    values[field.key] = parseFormValue(field, formData);
  }
  return values;
}

function validateRequired(config: ContentTypeConfig, values: Record<string, unknown>): string | null {
  for (const field of config.fields) {
    if (!field.required) continue;
    const v = values[field.key];
    if (v === null || v === undefined || v === "") {
      return `${field.label} is required.`;
    }
  }
  return null;
}

function idColumnOf(config: ContentTypeConfig) {
  return (config.table as any)[config.idColumn];
}

function coerceIdParam(config: ContentTypeConfig, raw: string): string | number {
  return config.idType === "number" ? Number(raw) : raw;
}

function revalidate(config: ContentTypeConfig) {
  for (const path of config.revalidatePaths) {
    revalidatePath(path);
  }
  revalidatePath(`/admin/${config.slug}`);
}

function describeWriteError(config: ContentTypeConfig, err: unknown): string {
  const code = (err as { code?: string } | null)?.code;
  if (code === "23505") {
    return `A ${config.singularLabel.toLowerCase()} with that ID already exists.`;
  }
  if (code === "23502") {
    return "A required field was left empty.";
  }
  return err instanceof Error ? err.message : "Something went wrong saving this record.";
}

export interface RecordFormState {
  error?: string;
}

export async function createRecord(
  slug: string,
  _prevState: RecordFormState,
  formData: FormData
): Promise<RecordFormState> {
  await requireAdmin();
  const config = getContentType(slug);
  if (!config) return { error: "Unknown content type." };

  const values = buildValues(config, formData);
  const missing = validateRequired(config, values);
  if (missing) return { error: missing };

  try {
    await (db.insert(config.table as any) as any).values(values);
  } catch (err) {
    return { error: describeWriteError(config, err) };
  }

  revalidate(config);
  redirect(`/admin/${config.slug}`);
}

export async function updateRecord(
  slug: string,
  idParam: string,
  _prevState: RecordFormState,
  formData: FormData
): Promise<RecordFormState> {
  const session = await requireAdmin();
  const config = getContentType(slug);
  if (!config) return { error: "Unknown content type." };

  const values = buildValues(config, formData);
  const missing = validateRequired(config, values);
  if (missing) return { error: missing };

  // Locked (natural-key) fields aren't editable — keep the URL param's value.
  for (const field of config.fields) {
    if (field.lockOnEdit) values[field.key] = coerceIdParam(config, idParam);
  }
  if ("updatedBy" in ((config.table as unknown as Record<string, unknown>) ?? {})) {
    values.updatedBy = session.adminId;
    values.updatedAt = new Date();
  }

  try {
    await (db as unknown as { update: (t: unknown) => { set: (v: unknown) => { where: (w: SQL) => Promise<unknown> } } })
      .update(config.table)
      .set(values)
      .where(eq(idColumnOf(config), coerceIdParam(config, idParam)));
  } catch (err) {
    return { error: describeWriteError(config, err) };
  }

  revalidate(config);
  redirect(`/admin/${config.slug}`);
}

export async function deleteRecord(slug: string, idParam: string) {
  await requireAdmin();
  const config = getContentType(slug);
  if (!config) return;

  await (db as unknown as { delete: (t: unknown) => { where: (w: SQL) => Promise<unknown> } })
    .delete(config.table)
    .where(eq(idColumnOf(config), coerceIdParam(config, idParam)));

  revalidate(config);
  redirect(`/admin/${config.slug}`);
}

export async function getRecords(config: ContentTypeConfig) {
  await requireAdmin();
  let query = db.select().from(config.table as never);
  if (config.sortColumn) {
    query = (query as any).orderBy(asc((config.table as any)[config.sortColumn]));
  }
  return (await query) as Record<string, unknown>[];
}

export async function getRecord(config: ContentTypeConfig, idParam: string) {
  await requireAdmin();
  const rows = await db
    .select()
    .from(config.table as never)
    .where(eq(idColumnOf(config), coerceIdParam(config, idParam)))
    .limit(1);
  return (rows[0] as Record<string, unknown> | undefined) ?? null;
}

export interface AuditInfo {
  editorName: string;
  updatedAt: Date;
}

export async function getRecordAuditInfo(record: Record<string, unknown>): Promise<AuditInfo | null> {
  const updatedBy = record.updatedBy;
  const updatedAt = record.updatedAt;
  if (typeof updatedBy !== "number" || !updatedAt) return null;

  const [editor] = await db.select({ name: admins.name }).from(admins).where(eq(admins.id, updatedBy)).limit(1);
  if (!editor) return null;

  return { editorName: editor.name, updatedAt: new Date(updatedAt as string | Date) };
}
