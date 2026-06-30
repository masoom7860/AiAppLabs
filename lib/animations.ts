import type { Transition, Variants } from "framer-motion";

/**
 * Reusable Framer Motion presets — tuned for a restrained, premium feel
 * (Apple / Framer): gentle easing, short travel, no bounce.
 *
 *   import { motion } from "framer-motion";
 *   import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
 *   <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce} />
 */

/** easeOutExpo — the signature "settle into place" curve. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
/** easeInOutQuint — for symmetric moves. */
export const EASE_IN_OUT = [0.83, 0, 0.17, 1] as const;

/* ---- Shared transitions ---- */
export const transitionSmooth: Transition = {
  duration: 0.7,
  ease: EASE_OUT,
};

export const transitionSoft: Transition = {
  duration: 0.5,
  ease: EASE_OUT,
};

/** Gentle, non-bouncy spring for hover/tap. */
export const transitionSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 30,
  mass: 0.6,
};

/** Default viewport config for scroll-triggered reveals (animate once). */
export const viewportOnce = { once: true, amount: 0.25 } as const;

/* ---- Entrance variants (subtle travel) ---- */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionSmooth },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: transitionSmooth },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: transitionSmooth },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: transitionSmooth },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: transitionSmooth },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: transitionSmooth },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: transitionSmooth },
};

/* ---- Stagger orchestration ---- */
export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const staggerItem: Variants = fadeInUp;

/* ---- Interaction presets (use on whileHover / whileTap) ---- */
export const hoverLift = { y: -4, transition: transitionSpring } as const;
export const tapShrink = { scale: 0.97 } as const;
