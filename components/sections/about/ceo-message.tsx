import { cn } from "@/lib/utils";

export type CeoMessageProps = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  className?: string;
};

/** Leadership message: a quote with a signed attribution. Reusable. */
export function CeoMessage({ quote, name, role, initials, className }: CeoMessageProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-card-lg border border-border bg-card p-8 shadow-card sm:p-10",
        className,
      )}
    >
      {/* decorative gradient wash */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-brand opacity-10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="text-gradient block font-serif text-7xl leading-none"
      >
        &ldquo;
      </span>

      <blockquote className="-mt-4 text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
        {quote}
      </blockquote>

      <figcaption className="mt-8 flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white">
          {initials}
        </span>
        <span>
          <span className="block font-semibold text-foreground">{name}</span>
          <span className="block text-sm text-muted-foreground">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
