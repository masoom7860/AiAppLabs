import type { IconComponent } from "@/types/content";
import { Code, Gauge, Layout, Rocket, Search } from "@/components/shared/icons";

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: IconComponent;
};

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "We align on goals, constraints, and the highest-leverage AI opportunity.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design",
    description: "We shape the experience, data flows, and architecture before a line of code.",
    icon: Layout,
  },
  {
    step: "03",
    title: "Build",
    description: "We ship in focused cycles with evaluations and quality gates throughout.",
    icon: Code,
  },
  {
    step: "04",
    title: "Launch",
    description: "We harden, instrument, and roll out to production with confidence.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "Scale",
    description: "We tune performance, cost, and quality so adoption keeps compounding.",
    icon: Gauge,
  },
];
