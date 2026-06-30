import type { Feature } from "@/types/content";
import {
  Building,
  GraduationCap,
  Heart,
  ShoppingCart,
  TrendingUp,
  Truck,
} from "@/components/shared/icons";

export const industries: Feature[] = [
  {
    icon: TrendingUp,
    title: "Fintech",
    description: "Risk, fraud, and underwriting AI built for regulated environments.",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Clinical copilots and document automation with privacy by design.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Personalization, search, and support that lift conversion and LTV.",
  },
  {
    icon: Building,
    title: "Enterprise SaaS",
    description: "AI-native features and copilots embedded into your product.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Forecasting, routing, and operations intelligence at scale.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Adaptive tutoring and content generation that scales learning.",
  },
];
