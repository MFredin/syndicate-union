"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { FieldConfig } from "@/lib/admin/content-types";
import type { RecordFormState } from "@/lib/admin/actions";

interface RecordFormProps {
  fields: FieldConfig[];
  initialValues?: Record<string, unknown>;
  action: (prevState: RecordFormState, formData: FormData) => Promise<RecordFormState>;
  submitLabel: string;
}

function toInputValue(field: FieldConfig, value: unknown): string {
  if (value === null || value === undefined) return "";
  if (field.type === "tags" && Array.isArray(value)) return value.join(", ");
  if (field.type === "datetime") {
    const d = value instanceof Date ? value : new Date(String(value));
    return Number.isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 16);
  }
  return String(value);
}

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="gold" disabled={pending}>
      {pending ? "Saving..." : label}
    </Button>
  );
}

export function RecordForm({ fields, initialValues = {}, action, submitLabel }: RecordFormProps) {
  const [state, formAction] = useFormState(action, {});
  const isEditing = initialValues && Object.keys(initialValues).length > 0;

  return (
    <form action={formAction} className="grid gap-5 rounded-lg border border-border bg-card p-6 shadow-soft">
      {fields.map((field) => {
        const value = toInputValue(field, initialValues[field.key]);
        const locked = Boolean(field.lockOnEdit && isEditing);
        return (
          <div key={field.key} className="grid gap-1.5">
            <Label htmlFor={field.key}>
              {field.label}
              {field.required && <span className="text-destructive"> *</span>}
            </Label>

            {field.type === "textarea" || field.type === "markdown" ? (
              <Textarea
                id={field.key}
                name={field.key}
                defaultValue={value}
                required={field.required}
                className={field.type === "markdown" ? "min-h-[320px] font-mono text-sm" : "min-h-[100px]"}
              />
            ) : field.type === "boolean" ? (
              <input
                id={field.key}
                name={field.key}
                type="checkbox"
                defaultChecked={Boolean(initialValues[field.key])}
                className="size-4 self-start"
              />
            ) : field.type === "select" ? (
              <select
                id={field.key}
                name={field.key}
                defaultValue={value}
                required={field.required}
                className="h-10 rounded-md border border-input bg-background px-3 text-sm"
              >
                {!field.required && <option value="">—</option>}
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <Input
                id={field.key}
                name={field.key}
                type={
                  field.type === "number"
                    ? "number"
                    : field.type === "date"
                      ? "date"
                      : field.type === "datetime"
                        ? "datetime-local"
                        : "text"
                }
                defaultValue={value}
                required={field.required}
                readOnly={locked}
                className={locked ? "bg-secondary/50" : undefined}
              />
            )}
            {field.helpText && <p className="text-xs text-muted-foreground">{field.helpText}</p>}
          </div>
        );
      })}
      {state?.error && <p className="text-sm text-destructive">{state.error}</p>}
      <SubmitButton label={submitLabel} />
    </form>
  );
}
