import Link from "next/link";
import { notFound } from "next/navigation";
import { RecordForm } from "@/components/admin/record-form";
import { getContentType } from "@/lib/admin/content-types";
import { createRecord } from "@/lib/admin/actions";

export default function NewRecordPage({ params }: { params: { type: string } }) {
  const config = getContentType(params.type);
  if (!config) notFound();

  return (
    <div>
      <Link href={`/admin/${config.slug}`} prefetch={false} className="text-sm text-muted-foreground hover:text-primary">
        ← {config.label}
      </Link>
      <h1 className="mt-1 font-heading text-2xl">New {config.singularLabel}</h1>
      <div className="mt-6 max-w-2xl">
        <RecordForm fields={config.fields} action={createRecord.bind(null, config.slug)} submitLabel="Create" />
      </div>
    </div>
  );
}
