import type { IconComponent } from "@/types/content";
import { BarChart, Bolt, Eye, MessageSquare } from "@/components/shared/icons";

export type Product = {
  icon: IconComponent;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
};

export const products: Product[] = [
  {
    icon: MessageSquare,
    name: "AI Chat & Support Hub",
    tagline: "AI chat",
    description:
      "Add AI chat to Laravel, Shopify, or custom dashboards with data-aware answers, escalation paths, and conversation history.",
    features: ["Laravel or Node.js APIs", "Streaming UI", "Admin review tools"],
    href: "#contact",
  },
  {
    icon: BarChart,
    name: "Dashboard Intelligence",
    tagline: "Analytics",
    description:
      "Turn sales, inventory, sentiment, and operational data into practical dashboards with alerts and decision support.",
    features: ["Role-based dashboards", "Sentiment views", "Redis-backed speed"],
    href: "#contact",
  },
  {
    icon: Eye,
    name: "Stock Prediction & Alerts",
    tagline: "Forecasting",
    description:
      "Forecast demand, detect inventory risk, and notify teams before stockouts or price-sensitive moments hurt revenue.",
    features: ["Prediction models", "Stock alerts", "Queue-based jobs"],
    href: "#contact",
  },
  {
    icon: Bolt,
    name: "Shopify App Suite",
    tagline: "Commerce",
    description:
      "Reusable patterns for Shopify apps including SocialFeedAI, low inventory management, checkout notices, forms, BOGO, and call for price.",
    features: ["Theme setup", "Admin embedded apps", "Order and gift card tools"],
    href: "#contact",
  },
];
