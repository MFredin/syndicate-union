import { FileArchive, FileText, File } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import type { DownloadAsset } from "@/data/downloads";

const fileIcons: Record<string, typeof FileArchive> = {
  ZIP: FileArchive,
  PDF: FileText,
  DOCX: File,
};

export function DownloadCard({ asset }: { asset: DownloadAsset }) {
  const Icon = fileIcons[asset.fileType] ?? File;

  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <CardContent className="flex items-start gap-4 pt-6">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-heading text-base">{asset.title}</h3>
            <Badge variant="outline">{asset.version}</Badge>
          </div>
          <p className="mt-1.5 text-sm text-muted-foreground">{asset.description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>{asset.fileType}</span>
            <span>{asset.sizeLabel}</span>
            <span>Updated {formatDate(asset.updated, { month: "short", day: "numeric", year: "numeric" })}</span>
          </div>
        </div>
        <Button size="sm" variant="outline" className="shrink-0">
          Download
        </Button>
      </CardContent>
    </Card>
  );
}
