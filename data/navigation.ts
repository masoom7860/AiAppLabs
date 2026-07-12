import type { NavItem } from "@/types/content";

// Single-page site: nav targets are in-page section anchors.
export const navigation: NavItem[] = [
  {
    label: "Services",
    href: "#services",
    children: [
      {
        label: "Laravel, PHP & JS",
        href: "#services",
        description: "Laravel, PHP, Node.js, React.js, Vue.js, AngularJS, HTML, CSS, and JavaScript.",
      },
      {
        label: "Shopify apps",
        href: "#products",
        description: "Theme setup, SocialFeedAI, inventory, banners, checkout notices, forms, and offers.",
      },
      {
        label: "AI implementation",
        href: "#products",
        description: "Chat, dashboards, sentiment, stock prediction, and stock alerts.",
      },
    ],
  },
  { label: "Stack", href: "#tech" },
  { label: "Work", href: "#portfolio" },
  // { label: "Pricing", href: "#pricing" },
  // { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
