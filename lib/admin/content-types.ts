import * as schema from "@/lib/db/schema";

export type FieldType =
  | "text"
  | "textarea"
  | "markdown"
  | "number"
  | "boolean"
  | "tags"
  | "select"
  | "date"
  | "datetime";

export interface FieldConfig {
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  helpText?: string;
  /** Disabled on edit (still shown, read-only) — for natural keys used in URLs. */
  lockOnEdit?: boolean;
}

export interface ContentTypeConfig {
  /** URL segment: /admin/{slug} */
  slug: string;
  label: string;
  singularLabel: string;
  table: (typeof schema)[keyof typeof schema];
  /** Column used as the natural key in URLs (/admin/{slug}/{idColumn value}). */
  idColumn: string;
  idType: "text" | "number";
  fields: FieldConfig[];
  listColumns: { key: string; label: string }[];
  /** Public routes to revalidate after any create/update/delete. */
  revalidatePaths: string[];
  sortColumn?: string;
}

const departmentIconHelp = "Lucide icon name (see components/common/icon-map.ts), e.g. Landmark, ShieldCheck.";

export const contentTypes: ContentTypeConfig[] = [
  {
    slug: "departments",
    label: "Departments",
    singularLabel: "Department",
    table: schema.departments,
    idColumn: "id",
    idType: "text",
    sortColumn: "sortOrder",
    fields: [
      { key: "id", label: "ID (slug)", type: "text", required: true, lockOnEdit: true },
      { key: "name", label: "Name", type: "text", required: true },
      { key: "icon", label: "Icon", type: "text", required: true, helpText: departmentIconHelp },
      { key: "summary", label: "Summary", type: "text", required: true },
      { key: "description", label: "Description", type: "textarea", required: true },
      { key: "responsibilities", label: "Responsibilities", type: "tags", helpText: "Comma-separated." },
      { key: "openPositions", label: "Open Positions", type: "number" },
      { key: "sortOrder", label: "Sort Order", type: "number" },
    ],
    listColumns: [
      { key: "name", label: "Name" },
      { key: "summary", label: "Summary" },
      { key: "openPositions", label: "Open" },
    ],
    revalidatePaths: ["/", "/recruitment", "/staff", "/departments"],
  },
  {
    slug: "staff",
    label: "Staff",
    singularLabel: "Staff Member",
    table: schema.staff,
    idColumn: "id",
    idType: "text",
    sortColumn: "sortOrder",
    fields: [
      { key: "id", label: "ID (slug)", type: "text", required: true, lockOnEdit: true },
      { key: "name", label: "Name", type: "text", required: true },
      { key: "role", label: "Role", type: "text", required: true },
      { key: "department", label: "Department (exact name)", type: "text", required: true },
      { key: "bio", label: "Bio", type: "textarea", required: true },
      { key: "responsibilities", label: "Responsibilities", type: "tags", helpText: "Comma-separated." },
      { key: "discord", label: "Discord handle", type: "text" },
      { key: "sortOrder", label: "Sort Order", type: "number" },
    ],
    listColumns: [
      { key: "name", label: "Name" },
      { key: "role", label: "Role" },
      { key: "department", label: "Department" },
    ],
    revalidatePaths: ["/about", "/staff"],
  },
  {
    slug: "members",
    label: "Members",
    singularLabel: "Member",
    table: schema.members,
    idColumn: "id",
    idType: "text",
    fields: [
      { key: "id", label: "ID", type: "text", required: true, lockOnEdit: true },
      { key: "callsign", label: "Callsign", type: "text", required: true },
      { key: "department", label: "Department (exact name)", type: "text", required: true },
      { key: "role", label: "Role", type: "text", required: true },
      { key: "joined", label: "Joined (YYYY-MM-DD)", type: "date", required: true },
      { key: "badges", label: "Badge IDs", type: "tags", helpText: "Comma-separated badge IDs." },
    ],
    listColumns: [
      { key: "callsign", label: "Callsign" },
      { key: "department", label: "Department" },
      { key: "role", label: "Role" },
    ],
    revalidatePaths: ["/", "/members"],
  },
  {
    slug: "badges",
    label: "Badges",
    singularLabel: "Badge",
    table: schema.badges,
    idColumn: "id",
    idType: "text",
    fields: [
      { key: "id", label: "ID", type: "text", required: true, lockOnEdit: true },
      { key: "name", label: "Name", type: "text", required: true },
      { key: "description", label: "Description", type: "textarea", required: true },
      {
        key: "icon",
        label: "Icon filename (no extension)",
        type: "text",
        required: true,
        helpText: "Matches a file in public/assets/04-badges/.",
      },
    ],
    listColumns: [
      { key: "name", label: "Name" },
      { key: "description", label: "Description" },
    ],
    revalidatePaths: ["/", "/members"],
  },
  {
    slug: "stats",
    label: "Stats",
    singularLabel: "Stat",
    table: schema.stats,
    idColumn: "id",
    idType: "number",
    sortColumn: "sortOrder",
    fields: [
      { key: "label", label: "Label", type: "text", required: true },
      { key: "value", label: "Value", type: "text", required: true },
      { key: "icon", label: "Icon", type: "text", required: true, helpText: departmentIconHelp },
      { key: "sortOrder", label: "Sort Order", type: "number" },
    ],
    listColumns: [
      { key: "label", label: "Label" },
      { key: "value", label: "Value" },
    ],
    revalidatePaths: ["/", "/about"],
  },
  {
    slug: "events",
    label: "Events",
    singularLabel: "Event",
    table: schema.events,
    idColumn: "id",
    idType: "text",
    fields: [
      { key: "id", label: "ID (slug)", type: "text", required: true, lockOnEdit: true },
      { key: "title", label: "Title", type: "text", required: true },
      {
        key: "category",
        label: "Category",
        type: "select",
        required: true,
        options: ["Operation", "Social", "Training", "Diplomacy", "Broadcast"],
      },
      { key: "startsAtUtc", label: "Starts At (UTC)", type: "datetime", required: true },
      { key: "durationMinutes", label: "Duration (minutes)", type: "number", required: true },
      { key: "description", label: "Description", type: "textarea", required: true },
      { key: "location", label: "Location", type: "text", required: true },
    ],
    listColumns: [
      { key: "title", label: "Title" },
      { key: "category", label: "Category" },
      { key: "location", label: "Location" },
    ],
    revalidatePaths: ["/", "/events"],
  },
  {
    slug: "downloads",
    label: "Downloads",
    singularLabel: "Download",
    table: schema.downloads,
    idColumn: "id",
    idType: "text",
    fields: [
      { key: "id", label: "ID (slug)", type: "text", required: true, lockOnEdit: true },
      { key: "title", label: "Title", type: "text", required: true },
      {
        key: "category",
        label: "Category",
        type: "select",
        required: true,
        options: ["Wallpapers", "Brand Kit", "Guides", "Templates"],
      },
      { key: "version", label: "Version", type: "text", required: true },
      { key: "fileType", label: "File Type", type: "text", required: true, helpText: "e.g. ZIP, PDF, DOCX" },
      { key: "sizeLabel", label: "Size Label", type: "text", required: true, helpText: "e.g. 18 MB" },
      { key: "updated", label: "Updated (YYYY-MM-DD)", type: "date", required: true },
      { key: "description", label: "Description", type: "textarea", required: true },
    ],
    listColumns: [
      { key: "title", label: "Title" },
      { key: "category", label: "Category" },
      { key: "version", label: "Version" },
    ],
    revalidatePaths: ["/downloads"],
  },
  {
    slug: "roadmap",
    label: "Roadmap",
    singularLabel: "Roadmap Item",
    table: schema.roadmap,
    idColumn: "id",
    idType: "text",
    fields: [
      { key: "id", label: "ID (slug)", type: "text", required: true, lockOnEdit: true },
      { key: "title", label: "Title", type: "text", required: true },
      { key: "description", label: "Description", type: "textarea", required: true },
      {
        key: "status",
        label: "Status",
        type: "select",
        required: true,
        options: ["Planned", "In Progress", "Complete"],
      },
      { key: "quarter", label: "Quarter", type: "text", required: true, helpText: "e.g. Q3 2026" },
    ],
    listColumns: [
      { key: "title", label: "Title" },
      { key: "status", label: "Status" },
      { key: "quarter", label: "Quarter" },
    ],
    revalidatePaths: ["/roadmap"],
  },
  {
    slug: "gallery",
    label: "Gallery",
    singularLabel: "Gallery Item",
    table: schema.gallery,
    idColumn: "id",
    idType: "text",
    fields: [
      { key: "id", label: "ID (slug)", type: "text", required: true, lockOnEdit: true },
      { key: "title", label: "Title", type: "text", required: true },
      { key: "creator", label: "Creator", type: "text", required: true },
      {
        key: "category",
        label: "Category",
        type: "select",
        required: true,
        options: ["Artwork", "Screenshots", "Videos"],
      },
      {
        key: "variant",
        label: "Art variant",
        type: "select",
        required: true,
        options: ["orbital", "fleet", "council", "skyline", "emblem"],
      },
      { key: "featured", label: "Featured", type: "boolean" },
      { key: "description", label: "Description", type: "textarea", required: true },
    ],
    listColumns: [
      { key: "title", label: "Title" },
      { key: "creator", label: "Creator" },
      { key: "category", label: "Category" },
    ],
    revalidatePaths: ["/", "/gallery"],
  },
  {
    slug: "faq",
    label: "FAQ",
    singularLabel: "FAQ Item",
    table: schema.faq,
    idColumn: "id",
    idType: "text",
    fields: [
      { key: "id", label: "ID (slug)", type: "text", required: true, lockOnEdit: true },
      { key: "question", label: "Question", type: "text", required: true },
      { key: "answer", label: "Answer", type: "textarea", required: true },
      {
        key: "category",
        label: "Category",
        type: "select",
        required: true,
        options: ["General", "Membership", "Departments", "Events", "Technical"],
      },
      { key: "popular", label: "Popular", type: "boolean" },
    ],
    listColumns: [
      { key: "question", label: "Question" },
      { key: "category", label: "Category" },
    ],
    revalidatePaths: ["/faq", "/recruitment"],
  },
  {
    slug: "allies",
    label: "Allies",
    singularLabel: "Ally",
    table: schema.allies,
    idColumn: "id",
    idType: "text",
    fields: [
      { key: "id", label: "ID (slug)", type: "text", required: true, lockOnEdit: true },
      { key: "name", label: "Name", type: "text", required: true },
      { key: "relationship", label: "Relationship", type: "text", required: true },
    ],
    listColumns: [
      { key: "name", label: "Name" },
      { key: "relationship", label: "Relationship" },
    ],
    revalidatePaths: ["/"],
  },
  {
    slug: "timeline",
    label: "Timeline",
    singularLabel: "Timeline Event",
    table: schema.timelineEvents,
    idColumn: "id",
    idType: "text",
    sortColumn: "sortOrder",
    fields: [
      { key: "id", label: "ID (slug)", type: "text", required: true, lockOnEdit: true },
      { key: "year", label: "Year", type: "text", required: true },
      { key: "title", label: "Title", type: "text", required: true },
      { key: "description", label: "Description", type: "textarea", required: true },
      { key: "sortOrder", label: "Sort Order", type: "number" },
    ],
    listColumns: [
      { key: "year", label: "Year" },
      { key: "title", label: "Title" },
    ],
    revalidatePaths: ["/about"],
  },
  {
    slug: "news",
    label: "News",
    singularLabel: "News Article",
    table: schema.news,
    idColumn: "slug",
    idType: "text",
    fields: [
      { key: "slug", label: "Slug", type: "text", required: true, lockOnEdit: true },
      { key: "title", label: "Title", type: "text", required: true },
      { key: "date", label: "Date (YYYY-MM-DD)", type: "date", required: true },
      { key: "excerpt", label: "Excerpt", type: "textarea", required: true },
      {
        key: "category",
        label: "Category",
        type: "select",
        required: true,
        options: ["Community", "Events", "Guides", "Announcements", "Diplomacy"],
      },
      { key: "tags", label: "Tags", type: "tags", helpText: "Comma-separated." },
      { key: "pinned", label: "Pinned", type: "boolean" },
      { key: "author", label: "Author", type: "text", required: true },
      { key: "body", label: "Body (Markdown/MDX)", type: "markdown", required: true },
    ],
    listColumns: [
      { key: "title", label: "Title" },
      { key: "category", label: "Category" },
      { key: "date", label: "Date" },
    ],
    revalidatePaths: ["/", "/news"],
  },
  {
    slug: "lore",
    label: "Lore",
    singularLabel: "Lore Chapter",
    table: schema.lore,
    idColumn: "slug",
    idType: "text",
    sortColumn: "chapter",
    fields: [
      { key: "slug", label: "Slug", type: "text", required: true, lockOnEdit: true },
      { key: "title", label: "Title", type: "text", required: true },
      { key: "chapter", label: "Chapter #", type: "number", required: true },
      {
        key: "era",
        label: "Era",
        type: "select",
        required: true,
        options: ["Before the Union", "Founding", "Growth", "Expansion", "Present Day"],
      },
      { key: "excerpt", label: "Excerpt", type: "textarea", required: true },
      { key: "body", label: "Body (Markdown/MDX)", type: "markdown", required: true },
    ],
    listColumns: [
      { key: "chapter", label: "Ch." },
      { key: "title", label: "Title" },
      { key: "era", label: "Era" },
    ],
    revalidatePaths: ["/lore"],
  },
  {
    slug: "guides",
    label: "Guides",
    singularLabel: "Guide",
    table: schema.guides,
    idColumn: "slug",
    idType: "text",
    fields: [
      { key: "slug", label: "Slug", type: "text", required: true, lockOnEdit: true },
      { key: "title", label: "Title", type: "text", required: true },
      { key: "category", label: "Category", type: "text", required: true },
      {
        key: "difficulty",
        label: "Difficulty",
        type: "select",
        required: true,
        options: ["Beginner", "Intermediate", "Advanced"],
      },
      { key: "excerpt", label: "Excerpt", type: "textarea", required: true },
      { key: "updated", label: "Updated (YYYY-MM-DD)", type: "date", required: true },
      { key: "body", label: "Body (Markdown/MDX)", type: "markdown", required: true },
    ],
    listColumns: [
      { key: "title", label: "Title" },
      { key: "category", label: "Category" },
      { key: "difficulty", label: "Difficulty" },
    ],
    revalidatePaths: ["/", "/guides"],
  },
  {
    slug: "wiki",
    label: "Wiki",
    singularLabel: "Wiki Article",
    table: schema.wiki,
    idColumn: "slug",
    idType: "text",
    sortColumn: "order",
    fields: [
      { key: "slug", label: "Slug", type: "text", required: true, lockOnEdit: true },
      { key: "title", label: "Title", type: "text", required: true },
      { key: "category", label: "Category", type: "text", required: true },
      { key: "order", label: "Order", type: "number" },
      { key: "excerpt", label: "Excerpt", type: "textarea", required: true },
      { key: "body", label: "Body (Markdown/MDX)", type: "markdown", required: true },
    ],
    listColumns: [
      { key: "title", label: "Title" },
      { key: "category", label: "Category" },
    ],
    revalidatePaths: ["/wiki"],
  },
];

export function getContentType(slug: string): ContentTypeConfig | undefined {
  return contentTypes.find((c) => c.slug === slug);
}
