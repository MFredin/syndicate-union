import Link from "next/link";
import { notFound } from "next/navigation";
import { Plus, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "@/components/admin/delete-button";
import { getContentType } from "@/lib/admin/content-types";
import { getRecords } from "@/lib/admin/actions";

export default async function ContentListPage({ params }: { params: { type: string } }) {
  const config = getContentType(params.type);
  if (!config) notFound();

  const records = await getRecords(config);

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <Link href="/admin" prefetch={false} className="text-sm text-muted-foreground hover:text-primary">
            ← All content
          </Link>
          <h1 className="mt-1 font-heading text-2xl">{config.label}</h1>
        </div>
        <Button asChild variant="gold">
          <Link href={`/admin/${config.slug}/new`} prefetch={false}>
            <Plus className="size-4" />
            New {config.singularLabel}
          </Link>
        </Button>
      </div>

      <div className="mt-6 overflow-x-auto rounded-lg border border-border bg-card shadow-soft">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-secondary/40">
            <tr>
              {config.listColumns.map((col) => (
                <th key={col.key} className="px-4 py-3 font-heading font-medium">
                  {col.label}
                </th>
              ))}
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.length === 0 && (
              <tr>
                <td colSpan={config.listColumns.length + 1} className="px-4 py-8 text-center text-muted-foreground">
                  No {config.label.toLowerCase()} yet.
                </td>
              </tr>
            )}
            {records.map((record) => {
              const idValue = String(record[config.idColumn]);
              return (
                <tr key={idValue} className="border-b border-border last:border-0">
                  {config.listColumns.map((col) => (
                    <td key={col.key} className="max-w-xs truncate px-4 py-3">
                      {String(record[col.key] ?? "")}
                    </td>
                  ))}
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Button asChild variant="ghost" size="icon" aria-label="Edit">
                        <Link href={`/admin/${config.slug}/${idValue}`} prefetch={false}>
                          <Pencil className="size-4" />
                        </Link>
                      </Button>
                      <DeleteButton slug={config.slug} idParam={idValue} label={idValue} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
