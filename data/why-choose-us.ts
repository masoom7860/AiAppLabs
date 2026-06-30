import type { Feature } from "@/types/content";
import { Bolt, Cpu, Gauge, ShieldCheck, Sparkles, Target } from "@/components/shared/icons";

export const whyChooseUs: Feature[] = [
  {
    icon: Sparkles,
    title: "Senior team, end to end",
    description: "Strategy, design, and applied ML in one accountable team — no handoffs, no juniors learning on your dime.",
  },
  {
    icon: Target,
    title: "Outcome-driven delivery",
    description: "We commit to measurable product outcomes, not billable hours or disconnected experiments.",
  },
  {
    icon: Bolt,
    title: "Ship in weeks, not quarters",
    description: "Fast, focused cycles get a production-grade first release live in weeks.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade by default",
    description: "Security, evaluations, and reliability built in — SOC 2-ready practices from day one.",
  },
  {
    icon: Cpu,
    title: "Model-agnostic engineering",
    description: "We pick the right model and architecture for the job, and keep you portable.",
  },
  {
    icon: Gauge,
    title: "Built to scale with you",
    description: "Performance, cost, and quality tuned so your AI compounds instead of stalling.",
  },
];
