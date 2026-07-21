import Link from "next/link";
import { notFound } from "next/navigation";
import { RecordForm } from "@/components/admin/record-form";
import { getContentType } from "@/lib/admin/content-types";
import { getRecord, getRecordAuditInfo, updateRecord } from "@/lib/admin/actions";

export default async function EditRecordPage({ params }: { params: { type: string; id: string } }) {
  const config = getContentType(params.type);
  if (!config) notFound();

  const record = await getRecord(config, params.id);
  if (!record) notFound();

  const audit = await getRecordAuditInfo(record);

  return (
    <div>
      <Link href={`/admin/${config.slug}`} prefetch={false} className="text-sm text-muted-foreground hover:text-primary">
        ← {config.label}
      </Link>
      <h1 className="mt-1 font-heading text-2xl">Edit {config.singularLabel}</h1>
      {audit && (
        <p className="mt-1 text-sm text-muted-foreground">
          Last edited by <span className="font-medium text-foreground">{audit.editorName}</span> at{" "}
          {audit.updatedAt.toLocaleString()}
        </p>
      )}
      <div className="mt-6 max-w-2xl">
        <RecordForm
          fields={config.fields}
          initialValues={record}
          action={updateRecord.bind(null, config.slug, params.id)}
          submitLabel="Save Changes"
        />
      </div>
    </div>
  );
}
