import type { Service } from "@/types/content";
import {
  Bolt,
  Cloud,
  Code,
  Cpu,
  Layout,
  MessageSquare,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
} from "@/components/shared/icons";

export const services: Service[] = [
  {
    icon: Code,
    title: "Laravel & PHP Platforms",
    description:
      "Custom Laravel, PHP, HTML, CSS, and JavaScript applications with clean admin flows, APIs, and maintainable modules.",
    href: "#contact",
  },
  {
    icon: Layout,
    title: "React, Vue & Angular Frontends",
    description:
      "Modern interfaces in React.js, Vue.js, AngularJS, and plain JavaScript that connect smoothly to Laravel or Node.js backends.",
    href: "#contact",
  },
  {
    icon: Bolt,
    title: "Node.js, WebSockets & Jobs",
    description:
      "Realtime dashboards, WebSocket updates, background jobs, queues, and Supervisor-managed workers for production workloads.",
    href: "#contact",
  },
  {
    icon: Cpu,
    title: "Databases & Cache Layers",
    description:
      "MySQL, SQLite, MongoDB, Redis, and Memcached design for fast reads, reliable writes, reporting, and commerce scale.",
    href: "#contact",
  },
  {
    icon: ShieldCheck,
    title: "Secure App Foundations",
    description:
      "CSRF protection, Argon2 password hashing, encryption, secure sessions, and permission-aware workflows built in from day one.",
    href: "#contact",
  },
  {
    icon: Cloud,
    title: "Cloud Server Implementation",
    description:
      "Deployments and server operations on Linode, AWS, DigitalOcean, and Google Cloud with monitoring and release support.",
    href: "#contact",
  },
  {
    icon: MessageSquare,
    title: "AI Chat, Dashboards & Prediction",
    description:
      "AI chat, business dashboards, sentiment analysis, stock prediction, and stock alert workflows connected to your data.",
    href: "#contact",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Themes & Apps",
    description:
      "Shopify theme setup and custom apps for SocialFeedAI, inventory alerts, banners, order import, gift cards, BOGO, and call for price.",
    href: "#contact",
  },
  {
    icon: TrendingUp,
    title: "Custom Ecommerce Projects",
    description:
      "Commerce builds like Mechmart, a custom ecommerce platform, plus domain-specific projects such as Anil Caterers.",
    href: "#contact",
  },
];
