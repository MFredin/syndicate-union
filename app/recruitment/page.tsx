import type { Metadata } from "next";
import { CheckCircle2, MessagesSquare, ClipboardList, Users2 } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { DepartmentCard } from "@/components/common/department-card";
import { FaqAccordion } from "@/components/common/faq-accordion";
import { ApplicationForm } from "@/components/common/application-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { iconMap } from "@/components/common/icon-map";
import { departments } from "@/data/departments";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "Recruitment",
  description: "Join Syndicate Union — explore our departments, open positions, and application process.",
};

const whyJoin = [
  {
    icon: Users2,
    title: "A real welcome",
    description: "Every new Unionist gets a mentor and a structured first two weeks — you're never left to figure it out alone.",
  },
  {
    icon: ClipboardList,
    title: "Structure that respects your time",
    description: "Clear doctrine, maintained guides, and a governance model you can actually read and understand.",
  },
  {
    icon: MessagesSquare,
    title: "A voice that matters",
    description: "The Council of Elders is elected by the membership, and department leadership is earned through contribution.",
  },
];

const requirements = [
  "Active Discord account (13+ per Discord's terms of service)",
  "Willingness to review and follow the Union Charter",
  "No prior experience with Foundation: Galactic Frontier required",
  "A mentor will be assigned regardless of your starting skill level",
];

const steps = [
  { title: "Submit an application", description: "Takes about five minutes — no essay required." },
  { title: "Hear back within 48 hours", description: "Recruitment & Onboarding reviews every application personally." },
  { title: "Meet your mentor", description: "A structured first session to get you oriented." },
  { title: "Choose your path", description: "Pick a department once you've had time to explore." },
];

export default function RecruitmentPage() {
  return (
    <>
      <PageHero
        variant="recruitment"
        eyebrow="Recruitment"
        crumb="Recruitment"
        title="Report for Duty"
        description="Whether you're brand new to the frontier or a seasoned commander looking for a better home, there's a place for you here."
      />

      <section className="section-y">
        <div className="container">
          <SectionHeading eyebrow="Why Join" title="What membership actually feels like" align="center" className="mx-auto" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyJoin.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-md border border-border bg-card p-6 text-center shadow-soft">
                <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-base">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container">
          <SectionHeading eyebrow="Departments" title="Eight divisions, one union" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <DepartmentCard key={d.id} department={d} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Open Roles" title="Where we need you right now" />
          <div className="mt-10 flex flex-col gap-3">
            {departments
              .filter((d) => d.openPositions > 0)
              .sort((a, b) => b.openPositions - a.openPositions)
              .map((d) => {
                const Icon = iconMap[d.icon];
                return (
                  <div
                    key={d.id}
                    className="flex items-center gap-4 rounded-md border border-border bg-card p-5 shadow-soft"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {Icon && <Icon className="size-5" />}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-base">{d.name}</h3>
                      <p className="text-sm text-muted-foreground">{d.summary}</p>
                    </div>
                    <Badge variant="gold" className="shrink-0">
                      {d.openPositions} open
                    </Badge>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Requirements" title="What we ask of every Unionist" />
            <ul className="mt-6 space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Application Process" title="Four simple steps" />
            <ol className="mt-6 space-y-5">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-heading text-sm">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container max-w-2xl">
          <SectionHeading eyebrow="Apply Now" title="Start your application" align="center" className="mx-auto" />
          <div className="mt-10">
            <ApplicationForm />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Common Questions" title="Recruitment FAQ" />
          <div className="mt-8">
            <FaqAccordion items={faqs.filter((f) => f.category === "Membership" || f.category === "Departments")} />
          </div>
          <Button asChild variant="link" className="mt-4">
            <a href="/faq">See the full FAQ</a>
          </Button>
        </div>
      </section>
    </>
  );
}
