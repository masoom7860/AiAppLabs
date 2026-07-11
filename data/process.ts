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
    title: "Map the product",
    description: "We define the Laravel, Shopify, AI, or dashboard workflow and identify the data, roles, and integrations.",
    icon: Search,
  },
  {
    step: "02",
    title: "Plan the stack",
    description: "We choose the right mix of PHP, Node.js, JavaScript frameworks, databases, cache, WebSockets, and cloud servers.",
    icon: Layout,
  },
  {
    step: "03",
    title: "Build the modules",
    description: "We implement apps, themes, APIs, dashboards, jobs, Shopify flows, and AI features in focused releases.",
    icon: Code,
  },
  {
    step: "04",
    title: "Harden and launch",
    description: "We add CSRF protection, Argon2 hashing, encryption, worker supervision, monitoring, and deployment steps.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "Scale",
    description: "We tune MySQL, MongoDB, Redis, Memcached, server capacity, queue throughput, and alert reliability.",
    icon: Gauge,
  },
];
