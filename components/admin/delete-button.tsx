"use client";

import { Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { deleteRecord } from "@/lib/admin/actions";

export function DeleteButton({
  slug,
  idParam,
  label,
}: {
  slug: string;
  idParam: string;
  label: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="ghost" size="icon" aria-label={`Delete ${label}`}>
          <Trash2 className="size-4 text-destructive" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Delete {label}?</DialogTitle>
        <p className="text-sm text-muted-foreground">
          This permanently removes this record. This can&rsquo;t be undone.
        </p>
        <div className="flex justify-end gap-3">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <form action={deleteRecord.bind(null, slug, idParam)}>
            <Button
              type="submit"
              variant="outline"
              className="border-destructive text-destructive hover:bg-destructive/10"
            >
              Delete
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
