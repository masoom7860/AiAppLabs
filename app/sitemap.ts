import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Single-page site — only the homepage is a crawlable URL.
  return [
    {
      url: siteConfig.url,
      lastModified: siteConfig.lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
