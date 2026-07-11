import type { PortfolioItem } from "@/types/content";

// `gradient` strings are full Tailwind class pairs so the scanner generates them.
export const portfolio: PortfolioItem[] = [
  {
    title: "SocialFeedAI",
    category: "Shopify App",
    description:
      "A Shopify social feed app with AI-assisted content flows, embedded admin screens, and reliable queue-based publishing.",
    technologies: ["Shopify", "Laravel", "React.js", "Node.js", "Redis"],
    result: "Faster social content ops",
    gradient: "from-blue-600 to-violet-600",
    liveUrl: "#contact",
    caseUrl: "#contact",
  },
  {
    title: "Low Inventory Manage",
    category: "Shopify App",
    description:
      "Inventory alerting, low-stock rules, and background jobs that help Shopify teams act before a product goes unavailable.",
    technologies: ["Shopify", "Laravel", "MySQL", "Jobs", "Supervisor"],
    result: "Earlier stock decisions",
    gradient: "from-cyan-500 to-blue-600",
    liveUrl: "#contact",
    caseUrl: "#contact",
  },
  {
    title: "Shopify Conversion Apps",
    category: "Shopify Apps",
    description:
      "Banner, checkout notice, Buy One Get One, call for price, and gift card app patterns for high-converting storefronts.",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS", "Redis"],
    result: "More flexible promotions",
    gradient: "from-violet-600 to-fuchsia-600",
    liveUrl: "#contact",
    caseUrl: "#contact",
  },
  {
    title: "Order Import & Metaobject Forms",
    category: "Shopify Operations",
    description:
      "Operational apps for order import, forms for metaobjects, and structured merchant workflows inside Shopify admin.",
    technologies: ["Shopify Admin API", "Laravel", "Vue.js", "MySQL"],
    result: "Cleaner merchant workflows",
    gradient: "from-sky-500 to-indigo-600",
    liveUrl: "#contact",
    caseUrl: "#contact",
  },
  {
    title: "Anil Caterers",
    category: "Commerce Website",
    description:
      "A service-commerce build for catering orders, inquiry flows, admin updates, and customer-facing content management.",
    technologies: ["Laravel", "PHP", "HTML", "CSS", "JavaScript"],
    result: "Simpler catering orders",
    gradient: "from-emerald-500 to-cyan-600",
    liveUrl: "#contact",
    caseUrl: "#contact",
  },
  {
    title: "Mechmart",
    category: "Custom Ecommerce",
    description:
      "A custom ecommerce platform with catalog, orders, secure checkout foundations, caching, and cloud-ready deployment.",
    technologies: ["Laravel", "PHP", "MySQL", "Redis", "AWS"],
    result: "Custom commerce platform",
    gradient: "from-indigo-600 to-purple-600",
    liveUrl: "#contact",
    caseUrl: "#contact",
  },
  {
    title: "AI Stock Alert Dashboard",
    category: "AI Implementation",
    description:
      "A dashboard for sentiment signals, stock prediction, stock alerts, and realtime notifications through WebSocket channels.",
    technologies: ["Node.js", "React.js", "MongoDB", "WebSocket", "AI"],
    result: "Realtime alert workflow",
    gradient: "from-rose-500 to-orange-500",
    liveUrl: "#contact",
    caseUrl: "#contact",
  },
];
