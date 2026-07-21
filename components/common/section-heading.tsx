import { cn } from "@/lib/utils";
import { Reveal } from "@/components/common/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <div
          className={cn(
            "mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance font-heading text-3xl tracking-wide text-foreground md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-balance text-muted-foreground">{description}</p>}
    </Reveal>
  );
}
