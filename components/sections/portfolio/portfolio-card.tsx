"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { m } from "framer-motion";
import type { PortfolioItem } from "@/types/content";
import { cn } from "@/lib/utils";
import { loadGsap } from "@/lib/gsap";
import { fadeInUp, transitionSpring, viewportOnce } from "@/lib/animations";
import { ArrowRight, ArrowUpRight } from "@/components/shared/icons";

export type PortfolioCardProps = {
  item: PortfolioItem;
  className?: string;
};

function monogram(title: string) {
  return title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * Large portfolio card. Card entrance is Framer (fade + slide, hover lift); the
 * preview image unmasks with a GSAP clip-path reveal on scroll. Masonry-friendly.
 */
export function PortfolioCard({ item, className }: PortfolioCardProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    loadGsap().then(({ gsap }) => {
      if (cancelled || !imageRef.current) return;
      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      }, el);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <m.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      whileHover={{ y: -6, transition: transitionSpring }}
      className={cn(
        "group relative mb-6 break-inside-avoid overflow-hidden rounded-card-lg border border-border bg-card shadow-card transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-elevated",
        className,
      )}
    >
      {/* Preview */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div ref={imageRef} className="absolute inset-0">
          {item.image ? (
            <Image
              src={item.image}
              alt={`${item.title} — ${item.category}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
                item.gradient,
              )}
            >
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-6xl font-bold text-white/90">
                  {monogram(item.title)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Category */}
        <span className="absolute left-4 top-4 z-10 inline-flex items-center rounded-pill bg-slate-950/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {item.category}
        </span>

        {/* Animated overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center gap-3 bg-slate-950/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex translate-y-2 items-center gap-1.5 rounded-pill bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-100 group-hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Live preview
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link
            href={item.caseUrl}
            className="inline-flex translate-y-2 items-center gap-1.5 rounded-pill border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition-all delay-75 duration-300 hover:bg-white/20 group-hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Case study
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-pill border border-border bg-muted/50 px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">Result</span>
          <span className="text-gradient font-heading text-sm font-bold">{item.result}</span>
        </div>
      </div>
    </m.article>
  );
}
