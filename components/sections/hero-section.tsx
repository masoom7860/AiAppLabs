import Link from "next/link";
import { Container } from "@/components/layout/container";
import { AnimatedGradient } from "@/components/animations/animated-gradient";
import { AIIllustrationLazy } from "@/components/animations/ai-illustration-lazy";
import { MouseParallax } from "@/components/animations/mouse-parallax";
import { HeroReveal } from "@/components/animations/hero-reveal";
import { StatGrid } from "@/components/shared/stat";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "@/components/shared/icons";
import { stats } from "@/data/stats";
import { companies } from "@/data/companies";

export type HeroSectionProps = {
  eyebrow?: string;
  titleLead?: string;
  titleHighlight?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

/**
 * Flagship hero. Fully server-rendered, SEO-friendly content with a single
 * <h1> that paints immediately (LCP-safe transform-only entrance). Decorative
 * layers — animated gradient + grid + glow, GSAP illustration, and cursor
 * parallax — are CSS/lazy/client so they never gate the LCP.
 */
export function HeroSection({
  eyebrow = "Enterprise AI platform",
  titleLead = "Ship AI products that feel as smart as they look.",
  titleHighlight = "as smart as they look.",
  description = "AiAppLabs partners with ambitious teams to design, build, and scale production-grade AI products, copilots, and automations — from strategy to launch.",
  primaryCta = { label: "Book a demo", href: "#contact" },
  secondaryCta = { label: "Explore our work", href: "#portfolio" },
}: HeroSectionProps) {
  const [lead, highlight] = titleLead.includes(titleHighlight)
    ? [titleLead.slice(0, titleLead.indexOf(titleHighlight)), titleHighlight]
    : [titleLead, ""];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden border-b border-border"
    >
      <AnimatedGradient />

      <Container className="relative z-10 grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        {/* Text column — GSAP hero reveal (LCP-safe) */}
        <HeroReveal className="max-w-2xl">
          <div data-hero className="hero-reveal">
            <Badge variant="primary" size="md" className="tracking-normal normal-case">
              <Sparkles className="h-4 w-4" />
              {eyebrow}
            </Badge>
          </div>

          <h1
            id="hero-heading"
            data-hero
            className="hero-reveal mt-6 text-balance text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
          >
            {lead}
            {highlight ? <span className="text-gradient">{highlight}</span> : null}
          </h1>

          <p
            data-hero
            className="hero-reveal mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            {description}
          </p>

          <div data-hero className="hero-reveal mt-8 flex flex-wrap items-center gap-4">
            <Link href={primaryCta.href} className="btn-primary group">
              {primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href={secondaryCta.href} className="btn-outline">
              {secondaryCta.label}
            </Link>
          </div>

          <div data-hero className="hero-reveal mt-12 border-t border-border pt-8">
            <StatGrid items={stats} />
          </div>

          {/* Client logos */}
          <div data-hero className="hero-reveal mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Trusted by teams at
            </p>
            <ul className="mt-3 flex flex-wrap items-center gap-x-7 gap-y-2">
              {companies.slice(0, 5).map((name) => (
                <li
                  key={name}
                  className="text-sm font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </HeroReveal>

        {/* Illustration column — background glow + cursor parallax + lazy GSAP */}
        <div className="relative mx-auto flex min-h-[460px] w-full max-w-md items-center justify-center lg:min-h-[560px] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(circle at center, rgba(37,99,235,0.28) 0%, transparent 62%)",
            }}
          />
          <MouseParallax className="w-full">
            <AIIllustrationLazy className="w-full" />
          </MouseParallax>
        </div>
      </Container>
    </section>
  );
}
