"use client";

import dynamic from "next/dynamic";

/**
 * Client wrapper that defers the GSAP-powered illustration (and its ~28KB gzip
 * gsap chunk) out of the initial bundle. It's decorative (aria-hidden), so
 * `ssr: false` costs no SEO. Space is reserved by the parent wrapper to avoid CLS.
 */
const AIIllustration = dynamic(
  () => import("@/components/animations/ai-illustration").then((m) => m.AIIllustration),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="h-full min-h-[420px] w-full animate-pulse rounded-card-lg bg-muted/40"
      />
    ),
  },
);

export function AIIllustrationLazy({ className }: { className?: string }) {
  return <AIIllustration className={className} />;
}
