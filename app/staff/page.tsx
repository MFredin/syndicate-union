import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SeededAvatar } from "@/components/graphics/seeded-avatar";
import { departments } from "@/data/departments";
import { staff } from "@/data/staff";

export const metadata: Metadata = {
  title: "Staff Directory",
  description: "Meet the leadership behind each Syndicate Union department and how to reach them.",
};

export default function StaffPage() {
  return (
    <>
      <PageHero
        variant="community"
        eyebrow="Leadership"
        crumb="Staff"
        title="Staff Directory"
        description="Department leads, their responsibilities, and how to get in touch."
      />
      <section className="section-y">
        <div className="container flex flex-col gap-16">
          {departments.map((dept) => {
            const lead = staff.find((s) => s.department === dept.name);
            return (
              <div key={dept.id}>
                <SectionHeading eyebrow={dept.name} title={dept.summary} />
                {lead && (
                  <Card className="mt-8">
                    <CardContent className="flex flex-col gap-6 pt-6 sm:flex-row sm:items-start">
                      <div className="size-20 shrink-0 overflow-hidden rounded-md border border-border shadow-soft">
                        <SeededAvatar seed={lead.id} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-lg">{lead.name}</h3>
                        <p className="text-sm text-primary">{lead.role}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{lead.bio}</p>
                        <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                          {lead.responsibilities.map((r) => (
                            <li key={r} className="flex gap-2">
                              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gold" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="outline" className="shrink-0" asChild>
                        <a href="/contact">
                          <MessageCircle />
                          Contact
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
