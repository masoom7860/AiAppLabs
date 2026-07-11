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
    title: "Stock & Market Tools",
    description: "AI dashboards, sentiment analysis, stock prediction, and stock alert workflows for data-heavy products.",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Commerce",
    description: "Theme setup and custom apps for inventory, banners, checkout notices, gift cards, BOGO, and call for price.",
  },
  {
    icon: Truck,
    title: "Custom Ecommerce",
    description: "Laravel commerce platforms like Mechmart with catalog, checkout, orders, cache, and server deployment.",
  },
  {
    icon: Building,
    title: "Business Dashboards",
    description: "React, Vue, AngularJS, and Node.js dashboards connected to MySQL, MongoDB, Redis, and AI insights.",
  },
  {
    icon: Heart,
    title: "Service Businesses",
    description: "Operational websites and inquiry flows for service brands, including projects like Anil Caterers.",
  },
  {
    icon: GraduationCap,
    title: "Internal Tools",
    description: "Secure admin portals with CSRF protection, Argon2 hashing, encryption, jobs, Supervisor, and permissions.",
  },
];
