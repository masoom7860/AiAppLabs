import type { Feature } from "@/types/content";
import { Bolt, Cpu, Gauge, ShieldCheck, Sparkles, Target } from "@/components/shared/icons";

export const whyChooseUs: Feature[] = [
  {
    icon: Sparkles,
    title: "Full-stack implementation",
    description: "Laravel, PHP, Node.js, React.js, Vue.js, AngularJS, HTML, CSS, and JavaScript handled as one product stack.",
  },
  {
    icon: Target,
    title: "Commerce experience",
    description: "Hands-on Shopify theme setup, custom Shopify apps, and custom ecommerce work like Mechmart.",
  },
  {
    icon: Bolt,
    title: "Realtime and background systems",
    description: "WebSockets, queues, jobs, Supervisor workers, Redis, and Memcached where speed and reliability matter.",
  },
  {
    icon: ShieldCheck,
    title: "Security built into the base",
    description: "CSRF protection, Argon2 password hashing, encryption, session hardening, and role-aware flows.",
  },
  {
    icon: Cpu,
    title: "Practical AI features",
    description: "AI chat, dashboards, sentiment, stock prediction, and stock alerts connected to real business data.",
  },
  {
    icon: Gauge,
    title: "Cloud deployment support",
    description: "Linode, AWS, DigitalOcean, and Google Cloud implementation with production-minded operations.",
  },
];
