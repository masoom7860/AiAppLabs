import type { NavItem } from "@/types/content";

// Single-page site: nav targets are in-page section anchors.
export const navigation: NavItem[] = [
  {
    label: "Services",
    href: "#services",
    children: [
      {
        label: "AI & Web Development",
        href: "#services",
        description: "Full-stack capabilities across the product surface.",
      },
      {
        label: "AI Products",
        href: "#products",
        description: "Production-ready accelerators adapted to your domain.",
      },
      {
        label: "How we work",
        href: "#process",
        description: "A clear path from idea to impact.",
      },
    ],
  },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
