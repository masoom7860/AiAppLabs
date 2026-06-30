"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import type { NavItem } from "@/types/content";
import { cn } from "@/lib/utils";
import { ChevronDown } from "@/components/shared/icons";

export type NavDropdownProps = {
  item: NavItem;
  active: boolean;
};

/** Desktop nav item with an animated dropdown panel (hover + keyboard). */
export function NavDropdown({ item, active }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link
        href={item.href}
        aria-haspopup="menu"
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-1 text-sm font-medium transition-colors",
          active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        {item.label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")}
        />
      </Link>

      <AnimatePresence>
        {open && item.children ? (
          <m.div
            role="menu"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3"
          >
            <div className="glass rounded-card p-2 shadow-elevated">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  role="menuitem"
                  className="group block rounded-field px-3 py-2.5 transition-colors hover:bg-muted"
                >
                  <span className="flex items-center justify-between text-sm font-semibold text-foreground">
                    {child.label}
                    <span className="translate-x-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100">
                      →
                    </span>
                  </span>
                  {child.description ? (
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                      {child.description}
                    </span>
                  ) : null}
                </Link>
              ))}
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
