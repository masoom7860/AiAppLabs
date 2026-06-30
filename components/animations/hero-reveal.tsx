"use client";

import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap";

export type HeroRevealProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * GSAP intro for the hero. Children marked `data-hero` (and given the
 * `.hero-reveal` class) start 20px low but fully opaque, so the LCP heading
 * paints immediately; GSAP (lazy-loaded) eases them up in a gentle stagger.
 * Reduced motion settles them instantly without loading GSAP.
 */
export function HeroReveal({ children, className }: HeroRevealProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.querySelectorAll<HTMLElement>("[data-hero]").forEach((node) => {
        node.style.transform = "none";
      });
      return;
    }

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    loadGsap().then(({ gsap }) => {
      if (cancelled || !root.current) return;
      ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>("[data-hero]");
        if (!items.length) return;
        gsap.fromTo(
          items,
          { y: 20 },
          { y: 0, duration: 0.9, ease: "expo.out", stagger: 0.08, delay: 0.05 },
        );
      }, root.current);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
