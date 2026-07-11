export type CaseStudy = {
  client: string;
  category: string;
  title: string;
  summary: string;
  metrics: { value: string; label: string }[];
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    client: "Mechmart",
    category: "Custom Ecommerce",
    title: "A Laravel commerce platform for catalog, orders, and scalable checkout",
    summary:
      "We shaped a custom ecommerce foundation with Laravel, PHP, MySQL, Redis caching, CSRF protection, encrypted data handling, and cloud-ready deployment.",
    metrics: [
      { value: "Laravel", label: "core platform" },
      { value: "Redis", label: "cache layer" },
      { value: "Argon2", label: "password hashing" },
    ],
    href: "#contact",
  },
  {
    client: "Shopify Suite",
    category: "Apps & Themes",
    title: "Shopify apps for inventory, notices, promotions, and merchant forms",
    summary:
      "We implemented apps and storefront features across SocialFeedAI, low inventory management, banners, checkout notices, order import, gift cards, BOGO, call for price, and metaobject forms.",
    metrics: [
      { value: "10+", label: "app workflows" },
      { value: "Admin", label: "embedded UX" },
      { value: "Jobs", label: "background sync" },
    ],
    href: "#contact",
  },
  {
    client: "AI Ops",
    category: "Prediction & Alerts",
    title: "AI dashboards for chat, sentiment, stock prediction, and stock alerts",
    summary:
      "We combined Node.js, WebSocket updates, MongoDB, Redis, and AI workflows to support realtime dashboards and alerting experiences.",
    metrics: [
      { value: "Live", label: "WebSocket updates" },
      { value: "AI", label: "sentiment signals" },
      { value: "24/7", label: "alert jobs" },
    ],
    href: "#contact",
  },
];
