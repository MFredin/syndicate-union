import type { Metadata } from "next";
import { MessageCircle, Youtube, Twitch, Heart, Twitter, Mail } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { ContactForm } from "@/components/common/contact-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Syndicate Union — general enquiries, Discord, and social links.",
};

const links = [
  { label: "Discord", href: SITE.social.discord, icon: MessageCircle, description: "Fastest way to reach us — day to day coordination happens here." },
  { label: "YouTube", href: SITE.social.youtube, icon: Youtube, description: "Operation recaps and creator spotlights." },
  { label: "Twitch", href: SITE.social.twitch, icon: Twitch, description: "Live broadcasts from Media & Culture." },
  { label: "Patreon", href: SITE.social.patreon, icon: Heart, description: "Support the Union's creator program." },
  { label: "X", href: SITE.social.x, icon: Twitter, description: "Announcements and quick updates." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="contact"
        eyebrow="Get in Touch"
        title="Contact Syndicate Union"
        description="For general enquiries, use the form below. For anything urgent, Discord is always fastest."
      />

      <section className="section-y">
        <div className="container grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <SectionHeading eyebrow="General Enquiries" title="Send us a message" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Elsewhere" title="Find us" />
            <div className="mt-8 flex flex-col gap-4">
              {links.map(({ label, href, icon: Icon, description }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-start gap-4 rounded-md border border-border bg-card p-4 shadow-soft transition-shadow hover:shadow-elevated"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-heading text-sm tracking-wide">{label}</p>
                    <p className="text-xs text-muted-foreground">{description}</p>
                  </div>
                </a>
              ))}
              <div className="flex items-start gap-4 rounded-md border border-border bg-card p-4 shadow-soft">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="font-heading text-sm tracking-wide">Email</p>
                  <p className="text-xs text-muted-foreground">hello@syndicateunion.example</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
