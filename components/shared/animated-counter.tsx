"use client";

import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap";

export type AnimatedCounterProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

function format(v: number, decimals: number, prefix: string, suffix: string) {
  return `${prefix}${v.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}${suffix}`;
}

/**
 * Counts up to `value` when scrolled into view, driven by lazy-loaded GSAP +
 * ScrollTrigger. The final value is server-rendered (SEO-friendly, no-JS-safe);
 * the count-up only overwrites the text on the client and is skipped under
 * reduced motion.
 */
export function AnimatedCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.8,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    loadGsap().then(({ gsap, ScrollTrigger }) => {
      if (cancelled || !ref.current) return;
      ctx = gsap.context(() => {
        const counter = { val: 0 };
        node.textContent = format(0, decimals, prefix, suffix);

        const tween = gsap.to(counter, {
          val: value,
          duration,
          ease: "power2.out",
          paused: true,
          onUpdate: () => {
            node.textContent = format(counter.val, decimals, prefix, suffix);
          },
        });

        ScrollTrigger.create({
          trigger: node,
          start: "top 85%",
          once: true,
          onEnter: () => tween.play(),
        });
      }, node);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [value, decimals, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {format(value, decimals, prefix, suffix)}
    </span>
  );
}
