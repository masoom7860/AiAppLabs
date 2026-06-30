"use client";

import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export type HorizontalScrollProps = {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
};

/**
 * GSAP horizontal scroll (lazy-loaded). On large screens (non-reduced-motion)
 * the section pins and the track translates sideways as you scroll vertically.
 * On mobile or reduced motion it degrades to a native, snap-scrolling swipe row
 * — no pinning, no scroll hijack. Syncs with Lenis via the shared GSAP ticker.
 */
export function HorizontalScroll({ children, className, trackClassName }: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    loadGsap().then(({ gsap }) => {
      if (cancelled || !sectionRef.current || !trackRef.current) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const distance = () => Math.max(0, track.scrollWidth - section.clientWidth);

        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + distance(),
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });
      cleanup = () => mm.revert();
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={cn(
        "relative snap-x snap-mandatory overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        "lg:flex lg:min-h-screen lg:snap-none lg:items-center lg:overflow-hidden",
        className,
      )}
    >
      <div ref={trackRef} className={cn("flex w-max gap-6 lg:will-change-transform", trackClassName)}>
        {children}
      </div>
    </div>
  );
}
