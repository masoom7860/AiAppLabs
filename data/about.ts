import type { Counter, Feature, Milestone } from "@/types/content";
import {
  BarChart,
  Bolt,
  Cpu,
  Eye,
  ShieldCheck,
  Sparkles,
  Target,
} from "@/components/shared/icons";

export const aboutStory = {
  eyebrow: "About AiAppLabs",
  title: "We turn AI ambition into products people trust.",
  paragraphs: [
    "AiAppLabs began with a simple frustration: most AI projects stall in the gap between an impressive demo and a product teams can actually rely on. We set out to close that gap.",
    "Today we work as an embedded partner — pairing strategy, design, and engineering — so ambitious teams can design, ship, and scale AI-native products with confidence, from first prototype to production.",
  ],
};

export const counters: Counter[] = [
  { value: 30, suffix: "+", label: "AI products shipped" },
  { value: 94, suffix: "%", label: "Avg. retention uplift" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "Client satisfaction" },
  { value: 12, suffix: "+", label: "Industries served" },
];

export const mission: Feature = {
  icon: Target,
  title: "Our mission",
  description:
    "To help ambitious teams turn AI potential into production-grade products that earn user trust and compound in value over time.",
};

export const vision: Feature = {
  icon: Eye,
  title: "Our vision",
  description:
    "A world where every team can design, build, and scale AI-native experiences with the same confidence as any mature software product.",
};

export const values: Feature[] = [
  {
    icon: Sparkles,
    title: "Outcomes over output",
    description: "We measure success by the product results we create — not the features we ship.",
  },
  {
    icon: ShieldCheck,
    title: "Trust by design",
    description: "Security, evaluation, and reliability are built in from day one, never bolted on.",
  },
  {
    icon: Bolt,
    title: "Bias for momentum",
    description: "We move in fast, focused cycles that compound into real, measurable progress.",
  },
  {
    icon: Cpu,
    title: "Craft at the core",
    description: "Engineering and design rigor in everything, from prompts and pipelines to pixels.",
  },
  {
    icon: BarChart,
    title: "Evidence over opinion",
    description: "Decisions are grounded in usage signals, evaluations, and honest measurement.",
  },
  {
    icon: Target,
    title: "Partner, not vendor",
    description: "We act as an extension of your team and stay accountable to the same goals.",
  },
];

export const timeline: Milestone[] = [
  {
    year: "2021",
    title: "Founded",
    description: "AiAppLabs starts as a two-person studio betting that AI products live or die on craft.",
  },
  {
    year: "2022",
    title: "First enterprise launch",
    description: "Shipped our first production copilot, cutting a partner's support escalations by 41%.",
  },
  {
    year: "2023",
    title: "A full-stack team",
    description: "Grew into a multidisciplinary team across strategy, product design, and applied ML.",
  },
  {
    year: "2024",
    title: "Automation accelerator",
    description: "Launched our internal accelerator to take AI workflows from idea to launch in weeks.",
  },
  {
    year: "2025",
    title: "Global footprint",
    description: "Partnered with teams across 12+ industries to ship AI-native experiences worldwide.",
  },
  {
    year: "2026",
    title: "Today",
    description: "Building the next generation of AI products with the teams defining their categories.",
  },
];

// NOTE: placeholder leadership details — replace with the real founder/CEO.
export const ceoMessage = {
  quote:
    "We started AiAppLabs because the hardest part of AI isn't the model — it's turning it into something people trust and use every day. Our job is to close that distance, pairing strategy, design, and engineering so your team can ship AI that actually ships.",
  name: "Sara Whitman",
  role: "Founder & CEO",
  initials: "SW",
};
