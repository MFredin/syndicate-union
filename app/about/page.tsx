import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, Sparkles } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { Timeline } from "@/components/common/timeline";
import { ProfileCard } from "@/components/common/profile-card";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { timeline } from "@/data/timeline";
import { staff } from "@/data/staff";
import { stats } from "@/data/stats";

export const metadata: Metadata = {
  title: "About",
  description: "Learn who Syndicate Union is, our mission, core values, and the leadership that serves the membership.",
};

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Governance you can read",
    description: "The Union Charter is public. Every policy and treaty is measured against it, in the open.",
  },
  {
    icon: Users,
    title: "Onboarding that's actually structured",
    description: "Every new member gets a mentor and a day-by-day roadmap, not a wall of unread channels.",
  },
  {
    icon: Sparkles,
    title: "Built to outlast a season",
    description: "Guides, wikis, and doctrine are maintained continuously, not abandoned after one patch.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="about"
        eyebrow="About Syndicate Union"
        title="A community built on liberty, unity, and service"
        description="Here's who we are, what we stand for, and how we got here."
      />

      <section className="section-y">
        <div className="container grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Who We Are"
            title="Player-driven, professionally run"
            description="Syndicate Union is an independent community within Foundation: Galactic Frontier, organized into six departments and governed by an elected Council of Elders. We're not affiliated with the game's publisher — we're players who wanted a better way to play together."
          />
          <SectionHeading
            eyebrow="Mission"
            title="A steady home base for the whole frontier"
            description="Our mission is simple: give every commander — new or veteran — a professional, welcoming community that helps them get better, get organized, and get recognized for what they build."
          />
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container">
          <SectionHeading eyebrow="Core Values" title="The five principles behind every decision" align="center" className="mx-auto" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {SITE.values.map((value) => (
              <div key={value.name} className="rounded-md border border-border bg-card p-6 text-center shadow-soft">
                <h3 className="font-heading text-lg tracking-wide text-primary">{value.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container">
          <SectionHeading eyebrow="What Makes Us Different" title="Not your typical guild" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {differentiators.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-md border border-border bg-card p-6 shadow-soft">
                <span className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-base tracking-wide">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-md border border-border bg-card p-6 text-center shadow-soft">
              <p className="font-heading text-2xl tracking-wide text-primary">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Our Story" title="From five founders to a frontier-wide community" />
          <Timeline
            className="mt-10"
            items={timeline.map((t) => ({ id: t.id, label: t.year, title: t.title, description: t.description }))}
          />
          <Button asChild variant="link" className="mt-4">
            <Link href="/lore">
              Read the full story in the Lore archive
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Leadership" title="The Council of Elders" />
            <Button asChild variant="outline">
              <Link href="/staff">
                Full staff directory
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-3">
            {staff.slice(0, 3).map((member) => (
              <ProfileCard
                key={member.id}
                seed={member.id}
                name={member.name}
                role={member.role}
                department={member.department}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
