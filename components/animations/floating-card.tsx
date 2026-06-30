import { cn } from "@/lib/utils";

export type FloatingCardProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode;
  label: string;
  value: string;
  trend?: string;
};

/**
 * Compact glass stat card used to float around an illustration. Presentational
 * and reusable; animate it externally (e.g. via the GSAP timeline in the hero).
 */
export function FloatingCard({
  icon,
  label,
  value,
  trend,
  className,
  ...props
}: FloatingCardProps) {
  return (
    <div
      className={cn(
        "glass flex items-center gap-3 rounded-card px-4 py-3 shadow-elevated",
        className,
      )}
      {...props}
    >
      {icon ? (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-field bg-primary/15 text-primary">
          {icon}
        </span>
      ) : null}
      <div className="leading-tight">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-lg font-bold text-foreground">{value}</p>
        {trend ? <p className="text-[0.7rem] font-semibold text-success">{trend}</p> : null}
      </div>
    </div>
  );
}
