import Link from "next/link";
import { BookOpen, Library, CalendarDays, UserPlus, Trophy, Images, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/common/reveal";

interface QuickLink {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const links: QuickLink[] = [
  { label: "Guides", description: "Learn and master the frontier.", href: "/guides", icon: BookOpen },
  { label: "Wiki", description: "Knowledge for every Unionist.", href: "/wiki", icon: Library },
  { label: "Events", description: "Join events and make memories.", href: "/events", icon: CalendarDays },
  { label: "Recruitment", description: "Find your place. Make a difference.", href: "/recruitment", icon: UserPlus },
  { label: "Leaderboard", description: "Recognize top Unionists.", href: "/members", icon: Trophy },
  { label: "Gallery", description: "Art by Unionists. For Unionists.", href: "/gallery", icon: Images },
];

export function QuickLinks() {
  return (
    <section className="section-y bg-secondary/40">
      <div className="container">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {links.map(({ label, description, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="font-heading text-sm">{label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
