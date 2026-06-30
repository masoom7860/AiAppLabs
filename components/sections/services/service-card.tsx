"use client";

import { m } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import { IconTile } from "@/components/shared/icon-tile";
import { CardLink } from "@/components/shared/card-link";
import { cn } from "@/lib/utils";

export type ServiceCardProps = {
  /** Pre-rendered icon node. */
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  index?: number;
  className?: string;
};

/**
 * Premium service card: animated gradient border, hover glow + lift, icon
 * fill, and a numbered corner. Reveals via parent stagger. Reusable.
 */
export function ServiceCard({
  icon,
  title,
  description,
  href,
  index,
  className,
}: ServiceCardProps) {
  return (
    <m.article
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn("group relative h-full", className)}
    >
      {/* hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1 rounded-card-lg bg-gradient-brand opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-25"
      />

      {/* animated gradient border frame */}
      <div className="relative h-full rounded-card-lg bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 p-[1.5px] shadow-card transition-all duration-300 group-hover:from-primary group-hover:via-secondary group-hover:to-accent group-hover:shadow-elevated">
        <div className="relative flex h-full flex-col rounded-[calc(var(--radius-card-lg)-1.5px)] bg-card p-7">
          <div className="flex items-start justify-between">
            <IconTile>{icon}</IconTile>
            {index != null ? (
              <span className="font-heading text-sm font-bold text-muted-foreground/40">
                {String(index).padStart(2, "0")}
              </span>
            ) : null}
          </div>

          <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>

          <CardLink href={href} srText={`about ${title}`} className="relative mt-auto pt-6">
            Learn more
          </CardLink>
        </div>
      </div>
    </m.article>
  );
}
