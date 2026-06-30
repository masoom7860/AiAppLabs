"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import type { NavItem } from "@/types/content";
import { cn, isActivePath } from "@/lib/utils";
import { ChevronDown } from "@/components/shared/icons";
import { staggerContainer, staggerItem } from "@/lib/animations";

export type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  pathname: string;
  cta: { label: string; href: string };
};

export function MobileNav({ open, onClose, items, pathname, cta }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open ? (
        <m.div
          key="mobile-menu"
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
        >
          <m.nav
            variants={staggerContainer(0.06)}
            initial="hidden"
            animate="visible"
            className="container-page flex flex-col gap-1 py-4"
          >
            {items.map((item) => (
              <MobileNavItem
                key={item.href}
                item={item}
                pathname={pathname}
                onNavigate={onClose}
              />
            ))}

            <m.div variants={staggerItem} className="pt-3">
              <Link href={cta.href} onClick={onClose} className="btn-primary w-full">
                {cta.label}
              </Link>
            </m.div>
          </m.nav>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}

function MobileNavItem({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const active = isActivePath(pathname, item.href);

  if (!item.children) {
    return (
      <m.div variants={staggerItem}>
        <Link
          href={item.href}
          onClick={onNavigate}
          aria-current={active ? "page" : undefined}
          className={cn(
            "block rounded-field px-3 py-2.5 text-sm font-medium transition-colors",
            active ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          {item.label}
        </Link>
      </m.div>
    );
  }

  return (
    <m.div variants={staggerItem}>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className={cn(
          "flex w-full items-center justify-between rounded-field px-3 py-2.5 text-sm font-medium transition-colors",
          active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        {item.label}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", expanded && "rotate-180")} />
      </button>

      <AnimatePresence initial={false}>
        {expanded ? (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3 pt-1">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onNavigate}
                  className="rounded-field px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </m.div>
  );
}
