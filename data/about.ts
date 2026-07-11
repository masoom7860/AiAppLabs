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
  title: "We build practical web, commerce, cloud, and AI systems.",
  paragraphs: [
    "AiAppLabs works across the real implementation layer: Laravel, PHP, HTML, CSS, JavaScript, Node.js, React.js, Vue.js, AngularJS, databases, cache, workers, and cloud servers.",
    "Our work spans Shopify theme setup and apps, custom ecommerce platforms like Mechmart, service projects like Anil Caterers, and AI implementations for chat, dashboards, sentiment, stock prediction, and stock alerts.",
  ],
};

export const counters: Counter[] = [
  { value: 10, suffix: "+", label: "Shopify app workflows" },
  { value: 5, suffix: "+", label: "Core stack areas covered" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "Client satisfaction" },
  { value: 4, suffix: "+", label: "Cloud platforms supported" },
];

export const mission: Feature = {
  icon: Target,
  title: "Our mission",
  description:
    "To help teams ship dependable Laravel, Shopify, JavaScript, cloud, and AI products that solve real operational problems.",
};

export const vision: Feature = {
  icon: Eye,
  title: "Our vision",
  description:
    "A product studio where ecommerce, dashboards, realtime systems, secure backends, and AI features come together cleanly.",
};

export const values: Feature[] = [
  {
    icon: Sparkles,
    title: "Implementation over buzzwords",
    description: "We focus on working modules, reliable jobs, usable dashboards, and maintainable code.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    description: "CSRF protection, Argon2 hashing, encryption, and permission-aware flows are part of the foundation.",
  },
  {
    icon: Bolt,
    title: "Fast feedback cycles",
    description: "We ship usable releases for Laravel apps, Shopify apps, dashboards, and AI features in focused increments.",
  },
  {
    icon: Cpu,
    title: "Right tool for the job",
    description: "PHP, Node.js, MySQL, SQLite, MongoDB, Redis, Memcached, and cloud services are selected around the workload.",
  },
  {
    icon: BarChart,
    title: "Data-backed AI",
    description: "AI chat, sentiment, prediction, and alerts are grounded in application data and dashboard feedback.",
  },
  {
    icon: Target,
    title: "Commerce context",
    description: "We understand Shopify apps, custom ecommerce, order workflows, promotions, and admin operations.",
  },
];

export const timeline: Milestone[] = [
  {
    year: "2021",
    title: "Laravel and PHP roots",
    description: "AiAppLabs starts by building practical PHP, Laravel, HTML, CSS, and JavaScript web systems.",
  },
  {
    year: "2022",
    title: "Commerce projects",
    description: "Expanded into Shopify theme setup, custom Shopify apps, and ecommerce workflows.",
  },
  {
    year: "2023",
    title: "Realtime and cloud",
    description: "Added Node.js, WebSockets, jobs, Supervisor workers, Redis, Memcached, and cloud deployment support.",
  },
  {
    year: "2024",
    title: "AI implementation",
    description: "Built AI chat, dashboards, sentiment analysis, stock prediction, and stock alert workflows.",
  },
  {
    year: "2025",
    title: "Named products",
    description: "Delivered Shopify apps including SocialFeedAI, low inventory management, and conversion tools.",
  },
  {
    year: "2026",
    title: "Today",
    description: "Building across Mechmart-style custom ecommerce, Shopify apps, secure backends, and AI dashboards.",
  },
];

export const ceoMessage = {
  quote:
    "The strongest products usually come from getting the fundamentals right: secure Laravel foundations, clear JavaScript interfaces, reliable jobs, stable servers, and AI that is connected to the actual business workflow.",
  name: "AiAppLabs Team",
  role: "Full-stack AI and commerce studio",
  initials: "AL",
};
