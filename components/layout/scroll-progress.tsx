"use client";

import { m, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export type ScrollProgressProps = {
  className?: string;
  /** Track a specific scroll container instead of the window. */
  target?: React.RefObject<HTMLElement | null>;
};

/**
 * Thin gradient bar that fills as the page (or a target element) scrolls.
 * Reusable on its own; the Navbar renders it along its bottom edge.
 */
export function ScrollProgress({ className, target }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll(target ? { target, offset: ["start start", "end end"] } : undefined);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <m.div
      role="presentation"
      style={{ scaleX }}
      className={cn(
        "absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-brand",
        className,
      )}
    />
  );
}
