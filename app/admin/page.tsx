import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getAdminSession } from "@/lib/admin-auth";
import { contentTypes } from "@/lib/admin/content-types";

export default async function AdminDashboardPage() {
  const session = await getAdminSession();

  return (
    <div>
      <h1 className="font-heading text-2xl">Welcome{session ? `, ${session.name}` : ""}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Choose a content type below to review, add, edit, or remove entries. Changes go live on
        the public site immediately after saving.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contentTypes.map((config) => (
          <Link
            key={config.slug}
            href={`/admin/${config.slug}`}
            prefetch={false}
            className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-elevated"
          >
            <div>
              <h2 className="font-heading text-base">{config.label}</h2>
              <p className="mt-1 text-xs text-muted-foreground">{config.fields.length} fields</p>
            </div>
            <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
          </Link>
        ))}
      </div>
    </div>
  );
}
