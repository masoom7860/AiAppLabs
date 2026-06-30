import type { Service } from "@/types/content";
import {
  Bolt,
  Cloud,
  Code,
  Cpu,
  Layout,
  Smartphone,
  TrendingUp,
} from "@/components/shared/icons";

export const services: Service[] = [
  {
    icon: Cpu,
    title: "AI Development",
    description: "Custom models, copilots, RAG, and agentic systems engineered for your domain.",
    href: "#contact",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Fast, accessible web apps on a modern React and Next.js foundation.",
    href: "#contact",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native-quality iOS and Android experiences from a single shared codebase.",
    href: "#contact",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable, secure cloud infrastructure with observability and cost control built in.",
    href: "#contact",
  },
  {
    icon: Layout,
    title: "UI / UX",
    description: "Research-driven product design and interfaces that feel effortless to use.",
    href: "#contact",
  },
  {
    icon: Bolt,
    title: "Automation",
    description: "Workflow and process automation that removes busywork and scales with you.",
    href: "#contact",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-informed growth, SEO, and lifecycle campaigns that compound over time.",
    href: "#contact",
  },
];
