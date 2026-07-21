import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function AboutTeaser() {
  return (
    <section className="section-y">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          eyebrow="Who We Are"
          title="A community built to last, not just to win a season"
          description="Syndicate Union exists because the frontier deserved somewhere steady — a place where new commanders get a real welcome, guides stay current, and leadership answers to the membership it serves."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SITE.values.slice(0, 4).map((value) => (
            <div key={value.name} className="rounded-md border border-border bg-card p-5 shadow-soft">
              <h3 className="font-heading text-base tracking-wide text-primary">{value.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-10">
        <Button asChild variant="link">
          <Link href="/about">
            More about Syndicate Union
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
