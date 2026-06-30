"use client";

import { LazyMotion } from "framer-motion";

// Async-load the Framer feature bundle after hydration; `m` components stay lean
// in the initial chunk. `strict` ensures we never accidentally use heavy `motion`.
const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
