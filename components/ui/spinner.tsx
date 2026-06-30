import { cn } from "@/lib/utils";

const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-5 w-5 border-2",
  lg: "h-8 w-8 border-[3px]",
  xl: "h-12 w-12 border-4",
};

export type SpinnerProps = {
  size?: keyof typeof sizes;
  className?: string;
  /** Accessible label; defaults to "Loading". */
  label?: string;
};

export function Spinner({ size = "md", className, label = "Loading" }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn(
        "inline-block animate-spin rounded-full border-current border-t-transparent align-[-0.125em]",
        sizes[size],
        className,
      )}
    />
  );
}
