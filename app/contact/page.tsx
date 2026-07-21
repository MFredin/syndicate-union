import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Youtube, Twitch, Heart, Twitter, Mail, UserPlus, LifeBuoy } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { ContactForm } from "@/components/common/contact-form";
import { LogoVertical } from "@/components/brand/logo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Syndicate Union — general enquiries, Discord, and social links.",
};

const infoBlocks = [
  {
    label: "General Inquiries",
    icon: Mail,
    description: "Questions about the Union, press, or anything not covered elsewhere.",
    action: { label: "hello@syndicateunion.example", href: "mailto:hello@syndicateunion.example" },
  },
  {
    label: "Join the Union",
    icon: UserPlus,
    description: "Ready to sign up? Head to Recruitment to submit an application.",
    action: { label: "Start your application", href: "/recruitment" },
  },
  {
    label: "Support",
    icon: LifeBuoy,
    description: "Technical issues, account questions, or something urgent — Discord support gets the fastest response.",
    action: { label: "Open a support ticket", href: SITE.social.discord },
  },
  {
    label: "Discord",
    icon: MessageCircle,
    description: "The Union's day-to-day home. Coordination, announcements, and casual chat happen here.",
    action: { label: "Join the Discord", href: SITE.social.discord },
  },
];

const socials = [
  { label: "YouTube", href: SITE.social.youtube, icon: Youtube },
  { label: "Twitch", href: SITE.social.twitch, icon: Twitch },
  { label: "Patreon", href: SITE.social.patreon, icon: Heart },
  { label: "X", href: SITE.social.x, icon: Twitter },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="contact"
        eyebrow="Get in Touch"
        crumb="Contact"
        title="Contact Syndicate Union"
        description="For general enquiries, use the form below. For anything urgent, Discord is always fastest."
      />

      <section className="section-y">
        <div className="container grid gap-12 lg:grid-cols-2">
          {infoBlocks.map(({ label, icon: Icon, description, action }) => {
            const isExternal = action.href.startsWith("http");
            return (
              <div key={label} className="flex items-start gap-4 rounded-md border border-border bg-card p-6 shadow-soft">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base">{label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                  {isExternal ? (
                    <a
                      href={action.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                    >
                      {action.label} →
                    </a>
                  ) : (
                    <Link href={action.href} className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
                      {action.label} →
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <SectionHeading eyebrow="General Enquiries" title="Send us a message" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 rounded-md bg-navy p-8 text-center text-navy-foreground shadow-elevated">
            <LogoVertical dark className="mx-auto" />
            <p className="text-sm text-navy-foreground/70">
              Find Syndicate Union across the frontier and beyond.
            </p>
            <div className="flex justify-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-navy-foreground/80 transition-colors hover:border-gold-vivid hover:text-gold-vivid"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
