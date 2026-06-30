import { cn } from "@/lib/utils";

export type MarqueeProps = {
  items: string[];
  className?: string;
  /** Accessible label describing the list (rendered for screen readers). */
  srLabel?: string;
};

/**
 * Seamless, pure-CSS infinite marquee of text wordmarks. Pauses on hover, fades
 * at the edges, and exposes the items to screen readers once. Reusable.
 */
export function Marquee({ items, className, srLabel }: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      {srLabel ? <span className="sr-only">{`${srLabel}: ${items.join(", ")}`}</span> : null}

      <div
        aria-hidden="true"
        className="flex shrink-0 animate-marquee items-center gap-14 pr-14 will-change-transform group-hover:[animation-play-state:paused]"
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-xl font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
