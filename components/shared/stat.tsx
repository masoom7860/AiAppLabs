import { cn } from "@/lib/utils";
import type { Stat as StatType } from "@/types/content";

export type StatProps = StatType & { className?: string };

/** Single value + label statistic. Reusable in heroes, strips, and cards. */
export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={cn("flex min-w-[7rem] flex-col-reverse gap-1", className)}>
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {value}
      </dd>
    </div>
  );
}

export type StatGridProps = {
  items: StatType[];
  className?: string;
};

/** A row/grid of `Stat`s. */
export function StatGrid({ items, className }: StatGridProps) {
  return (
    <dl className={cn("flex flex-wrap gap-x-10 gap-y-6", className)}>
      {items.map((stat) => (
        <Stat key={stat.label} {...stat} />
      ))}
    </dl>
  );
}
