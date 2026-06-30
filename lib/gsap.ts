type GsapBundle = {
  gsap: typeof import("gsap").gsap;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
};

let bundle: Promise<GsapBundle> | null = null;

/**
 * Lazily load gsap + ScrollTrigger exactly once, registering the plugin on
 * first load. Keeps the (~115KB gzip) gsap payload out of the initial bundle —
 * every consumer awaits this inside an effect, so it streams in after hydration
 * and is shared across all animations.
 */
export function loadGsap(): Promise<GsapBundle> {
  if (!bundle) {
    bundle = Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([gsapMod, stMod]) => {
        const gsap = gsapMod.gsap;
        const ScrollTrigger = stMod.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        return { gsap, ScrollTrigger };
      },
    );
  }
  return bundle;
}
