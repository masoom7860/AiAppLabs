import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
  muted: "bg-muted text-muted-foreground",
  success: "bg-success/10 text-success",
  outline: "border border-border text-foreground",
  gradient: "bg-gradient-brand text-white",
} as const;

const sizes = {
  sm: "px-2.5 py-0.5 text-[0.7rem]",
  md: "px-3 py-1 text-xs",
  lg: "px-4 py-1.5 text-sm",
} as const;

export type BadgeVariant = keyof typeof variants;
export type BadgeSize = keyof typeof sizes;

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
};

export function Badge({
  className,
  variant = "primary",
  size = "md",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill font-semibold uppercase tracking-wide",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
