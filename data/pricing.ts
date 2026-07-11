import type { PricingPlan } from "@/types/content";

export const pricing: PricingPlan[] = [
  {
    name: "Implementation Sprint",
    price: "Custom",
    description: "Best for a focused Laravel, Shopify, AI, or dashboard feature.",
    features: ["Scope and architecture", "Core module build", "Deployment handoff"],
    href: "#contact",
  },
  {
    name: "Product Build",
    price: "Custom",
    description: "For full products such as Shopify apps, Mechmart-style ecommerce, or AI dashboards.",
    features: ["Frontend and backend", "Jobs, cache, and security", "Cloud launch support"],
    featured: true,
    href: "#contact",
  },
];
