import type { Milestone } from "@/types/content";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

export type TimelineProps = {
  items: Milestone[];
  className?: string;
};

/** Vertical, scroll-revealed milestone timeline. Reusable. */
export function Timeline({ items, className }: TimelineProps) {
  return (
    <RevealGroup inView stagger={0.12} className={cn("relative", className)}>
      {/* connecting line */}
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-3 top-2 w-px bg-gradient-to-b from-primary/50 via-border to-transparent"
      />
      <ol className="space-y-8">
        {items.map((m) => (
          <RevealItem as="li" key={m.year} className="relative pl-12">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-background"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-brand" />
            </span>
            <p className="text-sm font-semibold text-accent">{m.year}</p>
            <h3 className="mt-1 text-lg font-semibold text-foreground">{m.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
          </RevealItem>
        ))}
      </ol>
    </RevealGroup>
  );
}
