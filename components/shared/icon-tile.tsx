import { cn } from "@/lib/utils";

export type IconTileProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Brand icon badge shared by feature / service / product / process cards.
 * Fills with the brand gradient on hover — the parent must be a `group`.
 */
export function IconTile({ children, className }: IconTileProps) {
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-field bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-brand group-hover:text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
