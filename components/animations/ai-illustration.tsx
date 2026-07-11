"use client";

import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { FloatingCard } from "@/components/animations/floating-card";
import { BarChart, Bolt, Cpu, ShieldCheck } from "@/components/shared/icons";

const BARS = [40, 64, 52, 80, 58, 92, 70];

export type AIIllustrationProps = {
  className?: string;
};

/**
 * Abstract "AI console" visual with a GSAP intro timeline (panel → rows → chart
 * → floating cards) and a continuous gentle float. Decorative (aria-hidden) and
 * reusable; respects prefers-reduced-motion.
 */
export function AIIllustration({ className }: AIIllustrationProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    // Reduced motion: just reveal the (opacity-0) illustration, no GSAP load.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.visibility = "visible";
      return;
    }

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    loadGsap().then(({ gsap }) => {
      if (cancelled || !root.current) return;
      ctx = gsap.context(() => {
        gsap.set(el, { autoAlpha: 1 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-gsap='panel']", { autoAlpha: 0, y: 48, scale: 0.95, duration: 0.9 })
          .from("[data-gsap='row']", { autoAlpha: 0, x: -16, stagger: 0.08, duration: 0.5 }, "-=0.5")
          .from(
            "[data-gsap='bar']",
            { scaleY: 0, transformOrigin: "bottom", stagger: 0.06, duration: 0.6 },
            "-=0.4",
          )
          .from(
            "[data-gsap='float']",
            { autoAlpha: 0, y: 28, scale: 0.8, stagger: 0.15, duration: 0.7 },
            "-=0.5",
          );

        gsap.utils.toArray<HTMLElement>("[data-gsap='float']").forEach((card, i) => {
          gsap.to(card, {
            y: "+=14",
            duration: 3 + i * 0.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 2 + i * 0.2,
          });
        });
      }, el);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={root} aria-hidden="true" className={cn("relative opacity-0", className)}>
      {/* glow */}
      <div className="absolute inset-6 rounded-card-lg bg-gradient-brand opacity-20 blur-3xl" />

      {/* Console panel */}
      <div
        data-gsap="panel"
        className="relative rounded-card-lg border border-white/10 bg-slate-950/70 p-5 shadow-elevated backdrop-blur-xl sm:p-6"
      >
        <div data-gsap="row" className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-field bg-gradient-brand text-white">
              <Cpu className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-xs text-slate-400">Laravel + Shopify + AI</p>
              <p className="text-base font-semibold text-white">Ops Dashboard</p>
            </div>
          </div>
          <Badge variant="success" size="sm" className="tracking-normal normal-case">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Online
          </Badge>
        </div>

        {/* metrics */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div data-gsap="row" className="rounded-field border border-white/10 bg-white/5 p-3">
            <p className="text-xs text-slate-400">Queue health</p>
            <p className="mt-1 text-2xl font-bold text-white">98.4%</p>
          </div>
          <div data-gsap="row" className="rounded-field border border-white/10 bg-white/5 p-3">
            <p className="text-xs text-slate-400">WebSocket latency</p>
            <p className="mt-1 text-2xl font-bold text-white">120ms</p>
          </div>
        </div>

        {/* faux chart */}
        <div data-gsap="row" className="mt-5 rounded-field border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-400">Stock alerts (24h)</p>
            <BarChart className="h-4 w-4 text-accent" />
          </div>
          <div className="mt-3 flex h-24 items-end gap-2">
            {BARS.map((h, i) => (
              <div
                key={i}
                data-gsap="bar"
                className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/40 to-accent"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <FloatingCard
        data-gsap="float"
        icon={<Bolt className="h-5 w-5" />}
        label="Supervisor jobs"
        value="98.4%"
        trend="+12% this week"
        className="absolute -left-4 top-10 w-44 sm:-left-10"
      />
      <FloatingCard
        data-gsap="float"
        icon={<BarChart className="h-5 w-5" />}
        label="Sentiment signal"
        value="+37%"
        className="absolute -right-3 bottom-12 w-44 sm:-right-8"
      />
      <FloatingCard
        data-gsap="float"
        icon={<ShieldCheck className="h-5 w-5" />}
        label="Security"
        value="Argon2"
        className="absolute -right-2 top-2 hidden w-40 sm:flex"
      />
    </div>
  );
}
