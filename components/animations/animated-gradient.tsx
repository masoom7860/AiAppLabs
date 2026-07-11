import { cn } from "@/lib/utils";

export type AnimatedGradientProps = {
  className?: string;
  /** Show the animated grid overlay. */
  grid?: boolean;
  /** Show a soft central glow. */
  glow?: boolean;
};

// Soft glows via radial-gradients (no expensive blur() filter); drift + grid
// pan via transform animations (GPU-composited). Cheap to paint even on mobile.
const blob = (color: string) =>
  ({ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }) as const;

/**
 * Decorative animated backdrop: dark base, drifting brand glows, a panning grid,
 * and an optional central glow. Pure-CSS server component — no per-frame JS, no
 * blur filter. Honors reduced motion via the global media query.
 */
export function AnimatedGradient({ className, grid = true, glow = true }: AnimatedGradientProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden bg-gradient-dark",
        className,
      )}
    >
      {grid ? (
        <div className="absolute -inset-12 animate-grid bg-grid opacity-[0.14] will-change-transform" />
      ) : null}

      {glow ? (
        <div
          className="absolute left-1/2 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2"
          style={blob("rgba(36,104,216,0.18)")}
        />
      ) : null}

      <div
        className="absolute -left-32 top-[-15%] h-[36rem] w-[36rem] animate-drift-1 rounded-full will-change-transform"
        style={blob("rgba(33,183,243,0.32)")}
      />
      <div
        className="absolute right-[-15%] top-1/4 h-[34rem] w-[34rem] animate-drift-2 rounded-full will-change-transform"
        style={blob("rgba(139,43,226,0.32)")}
      />
      <div
        className="absolute bottom-[-20%] left-1/3 h-[32rem] w-[32rem] animate-drift-3 rounded-full will-change-transform"
        style={blob("rgba(36,104,216,0.26)")}
      />
    </div>
  );
}
