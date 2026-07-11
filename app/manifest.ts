import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} | Laravel, Shopify, Cloud & AI Implementation`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    id: "/",
    start_url: "/",
    scope: "/",
    lang: siteConfig.language,
    display: "standalone",
    orientation: "portrait",
    background_color: "#020617",
    theme_color: "#020617",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
