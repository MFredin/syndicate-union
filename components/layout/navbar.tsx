"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";
import { LogoHorizontal } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const HERO_ROUTES = new Set(["/", "/about", "/lore", "/recruitment", "/events", "/contact"]);

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const hasHero = HERO_ROUTES.has(pathname);
  const transparent = hasHero && !scrolled;

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "border-b border-white/10 bg-transparent"
          : "glass-solid border-b shadow-soft"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="shrink-0">
          <LogoHorizontal
            className={cn(transparent ? "text-white" : "text-foreground")}
          />
        </Link>

        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              {SITE.nav.map((item) =>
                "children" in item && item.children ? (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger
                      className={cn(
                        "bg-transparent",
                        transparent && "text-white hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[22rem] gap-1 p-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block rounded-md px-3 py-2.5 transition-colors hover:bg-secondary"
                              >
                                <span className="font-heading text-sm tracking-wide text-primary">
                                  {child.label}
                                </span>
                                <span className="mt-0.5 block text-xs text-muted-foreground">
                                  {child.description}
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "inline-flex h-10 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-secondary",
                          transparent && "text-white hover:bg-white/10 hover:text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className={transparent ? "text-white hover:bg-white/10 hover:text-white" : ""} />
          <Button asChild variant="gold" className="hidden sm:inline-flex">
            <Link href="/recruitment">Join the Union</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("lg:hidden", transparent && "text-white hover:bg-white/10 hover:text-white")}
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6">
              <SheetClose asChild>
                <Link href="/">
                  <LogoHorizontal />
                </Link>
              </SheetClose>
              <nav className="flex flex-col gap-1">
                {SITE.nav.map((item) => (
                  <div key={item.label} className="border-b border-border py-2">
                    <SheetClose asChild>
                      <Link href={item.href} className="block py-2 font-heading text-base tracking-wide">
                        {item.label}
                      </Link>
                    </SheetClose>
                    {"children" in item && item.children && (
                      <div className="ml-3 flex flex-col gap-1 pb-2">
                        {item.children.map((child) => (
                          <SheetClose asChild key={child.href}>
                            <Link
                              href={child.href}
                              className="py-1.5 text-sm text-muted-foreground hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <Button asChild variant="gold" size="lg">
                <SheetClose asChild>
                  <Link href="/recruitment">Join the Union</Link>
                </SheetClose>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
