import type { PricingPlan } from "@/types/content";

export const pricing: PricingPlan[] = [
  {
    name: "Launch",
    price: "$8k",
    description: "Best for early-stage AI experiments and MVPs.",
    features: ["Discovery sprint", "Core experience", "Analytics setup"],
    href: "#contact",
  },
  {
    name: "Scale",
    price: "$24k",
    description: "For companies building serious AI products with real usage.",
    features: ["Advanced workflows", "Integrations", "Performance tuning"],
    featured: true,
    href: "#contact",
  },
];
