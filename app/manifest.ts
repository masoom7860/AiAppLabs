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
    background_color: "#0b1029",
    theme_color: "#0b1029",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: siteConfig.logoMark,
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
