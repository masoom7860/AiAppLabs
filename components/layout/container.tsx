import { cn } from "@/lib/utils";

const widths = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  full: "max-w-none",
} as const;

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: keyof typeof widths;
};

export function Container({ className, size = "lg", ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-6 lg:px-8", widths[size], className)}
      {...props}
    />
  );
}
