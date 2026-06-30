import { cn } from "@/lib/utils";
import { IconTile } from "@/components/shared/icon-tile";

export type FeatureCardProps = {
  /** Pre-rendered icon node. */
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

/**
 * Generic icon + title + description card. Reusable for mission, vision, and
 * values. Presentational (CSS hover only) — wrap in a reveal for entrance.
 */
export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group h-full rounded-card border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated",
        className,
      )}
    >
      <IconTile>{icon}</IconTile>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
