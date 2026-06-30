"use client";

import { useRef } from "react";
import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export type MouseParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  tilt?: number;
  /** Max translate in px. */
  shift?: number;
};

/**
 * Wraps content in a cursor-driven 3D tilt + parallax (Framer Motion springs).
 * Motion values write directly to the transform — no re-renders. Disabled under
 * prefers-reduced-motion and inert on touch (no pointer move). Reusable.
 */
export function MouseParallax({ children, className, tilt = 8, shift = 14 }: MouseParallaxProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0); // -0.5 .. 0.5
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 150, damping: 18, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 150, damping: 18, mass: 0.4 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-tilt, tilt]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [tilt, -tilt]);
  const x = useTransform(sx, [-0.5, 0.5], [-shift, shift]);
  const y = useTransform(sy, [-0.5, 0.5], [-shift, shift]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className={cn("[perspective:1200px]", className)}
    >
      <m.div
        style={{ rotateX, rotateY, x, y, transformStyle: "preserve-3d" }}
        className="h-full w-full"
      >
        {children}
      </m.div>
    </div>
  );
}
