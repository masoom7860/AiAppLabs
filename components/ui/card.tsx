import { cn } from "@/lib/utils";

const variants = {
  default: "border border-border bg-card text-card-foreground shadow-card",
  elevated: "border border-border bg-card text-card-foreground shadow-elevated",
  glass: "glass text-card-foreground",
  gradient: "bg-gradient-brand text-white border border-white/10",
  outline: "border border-border bg-transparent text-foreground",
} as const;

export type CardVariant = keyof typeof variants;

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  /** Adds hover lift + elevated shadow for interactive cards. */
  interactive?: boolean;
};

export function Card({
  className,
  variant = "default",
  interactive = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card",
        variants[variant],
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-1.5 p-6", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg font-semibold leading-tight tracking-tight", className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center gap-3 p-6 pt-0", className)} {...props} />;
}
