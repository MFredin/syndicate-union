import Link from "next/link";
import { MessageCircle, Youtube, Twitch, Heart, Twitter } from "lucide-react";
import { SITE } from "@/lib/site";
import { LogoHorizontal } from "@/components/brand/logo";
import { NewsletterForm } from "@/components/layout/newsletter-form";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Lore", href: "/lore" },
      { label: "News", href: "/news" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Events", href: "/events" },
      { label: "Members", href: "/members" },
      { label: "Staff", href: "/staff" },
      { label: "Recruitment", href: "/recruitment" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Guides", href: "/guides" },
      { label: "Wiki", href: "/wiki" },
      { label: "FAQ", href: "/faq" },
      { label: "Downloads", href: "/downloads" },
    ],
  },
  {
    title: "Union",
    links: [
      { label: "Roadmap", href: "/roadmap" },
      { label: "Contact", href: "/contact" },
      { label: "Departments", href: "/departments" },
    ],
  },
];

const socials = [
  { label: "Discord", href: SITE.social.discord, icon: MessageCircle },
  { label: "YouTube", href: SITE.social.youtube, icon: Youtube },
  { label: "Twitch", href: SITE.social.twitch, icon: Twitch },
  { label: "Patreon", href: SITE.social.patreon, icon: Heart },
  { label: "X", href: SITE.social.x, icon: Twitter },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <LogoHorizontal className="text-navy-foreground" dark />
          <p className="mt-4 max-w-sm text-sm text-navy-foreground/70">{SITE.description}</p>
          <div className="mt-6 flex gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-white/10 text-navy-foreground/80 transition-colors hover:border-gold-vivid hover:text-gold-vivid"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-heading text-sm text-gold-vivid">{col.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2">
          <h4 className="font-heading text-sm text-gold-vivid">Newsletter</h4>
          <p className="mt-4 text-sm text-navy-foreground/70">
            Monthly dispatch: news, guides, and events — straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-foreground/60 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Fan-run community — not affiliated with or endorsed by the publisher of Foundation: Galactic Frontier.</span>
        </div>
      </div>
    </footer>
  );
}
