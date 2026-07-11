"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { m, useMotionValueEvent, useScroll } from "framer-motion";
import type { NavItem } from "@/types/content";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { cn, isActivePath } from "@/lib/utils";
import { NavDropdown } from "@/components/layout/nav-dropdown";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { CloseIcon, MenuIcon } from "@/components/shared/icons";

export type NavbarProps = {
  items?: NavItem[];
  logo?: { label: string; href?: string };
  cta?: { label: string; href: string };
  className?: string;
};

/**
 * Premium, fully reusable navbar: sticky + glass on scroll, animated dropdowns,
 * active-route highlight, scroll progress, theme toggle, and a responsive
 * mobile menu. All content is prop-driven (defaults come from site config).
 */
export function Navbar({
  items = navigation,
  logo = { label: siteConfig.name, href: "/" },
  cta = { label: "Book a call", href: "#contact" },
  className,
}: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 16));

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300",
        solid ? "glass border-b border-border shadow-soft" : "border-b border-transparent bg-transparent",
        className,
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center rounded-pill bg-white/95 pr-4 shadow-soft ring-1 ring-border/60">
          <Link
            href={logo.href ?? "/"}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Logo type="logo" imageClassName="h-10 sm:h-11" />
            <span className="logo-text" aria-hidden="true">
              <span>Ai</span>
              <span>App</span>
              <span>Labs</span>
            </span>
          </Link>
        </div>
        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {items.map((item) => {
            const active = isActivePath(pathname, item.href);
            return item.children ? (
              <NavDropdown key={item.href} item={item} active={active} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {active ? (
                  <m.span
                    layoutId="navbar-active"
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gradient-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <Link href={cta.href} className="btn-primary">
              {cta.label}
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-pill border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} items={items} pathname={pathname} cta={cta} />

      <ScrollProgress />
    </header>
  );
}
