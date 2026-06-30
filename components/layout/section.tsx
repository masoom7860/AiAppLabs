import { cn } from "@/lib/utils";
import { Container, type ContainerProps } from "@/components/layout/container";

const tones = {
  default: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
  surface: "bg-surface text-surface-foreground",
  dark: "bg-brand-dark text-slate-100",
  gradient: "bg-gradient-dark text-slate-100",
} as const;

export type SectionProps = React.HTMLAttributes<HTMLElement> & {
  tone?: keyof typeof tones;
  /** Vertical rhythm. */
  spacing?: "sm" | "md" | "lg";
  /** Wrap children in a <Container>. Set false to control layout yourself. */
  contained?: boolean;
  containerSize?: ContainerProps["size"];
};

const spacings = {
  sm: "py-section-sm",
  md: "py-section-sm sm:py-section",
  lg: "py-section sm:py-section-lg",
} as const;

export function Section({
  className,
  tone = "default",
  spacing = "md",
  contained = true,
  containerSize = "lg",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative scroll-mt-20", tones[tone], spacings[spacing], className)}
      {...props}
    >
      {contained ? <Container size={containerSize}>{children}</Container> : children}
    </section>
  );
}
