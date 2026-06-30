"use client";

import { m, type Variants } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const MOTION = {
  div: m.div,
  h1: m.h1,
  h2: m.h2,
  h3: m.h3,
  p: m.p,
  span: m.span,
  ul: m.ul,
  li: m.li,
} as const;

export type RevealGroupProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds between each child reveal. */
  stagger?: number;
  /** Delay before the first child reveals. */
  delayChildren?: number;
  /** Trigger on scroll-into-view instead of on mount. */
  inView?: boolean;
};

/**
 * Orchestrates a staggered reveal of its `RevealItem` children using the shared
 * Framer Motion variants. Reusable anywhere a sequenced entrance is needed.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0,
  inView = false,
}: RevealGroupProps) {
  return (
    <m.div
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      animate={inView ? undefined : "visible"}
      whileInView={inView ? "visible" : undefined}
      viewport={inView ? viewportOnce : undefined}
    >
      {children}
    </m.div>
  );
}

export type RevealItemProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof typeof MOTION;
  variants?: Variants;
  id?: string;
};

/** A single staggered child. Render semantic tags via `as` (e.g. `as="h1"`). */
export function RevealItem({
  children,
  className,
  as = "div",
  variants = staggerItem,
  id,
}: RevealItemProps) {
  const Comp = MOTION[as];
  return (
    <Comp id={id} className={className} variants={variants}>
      {children}
    </Comp>
  );
}
