import { siteConfig } from "@/config/site";
import type { FAQItem } from "@/types/content";

/**
 * JSON-LD (schema.org) builders. Each returns a node WITHOUT `@context`;
 * combine them with `graph()` so a single linked `@graph` is emitted.
 */

const ORG_ID = `${siteConfig.url}/#organization`;
const SITE_ID = `${siteConfig.url}/#website`;
const logoUrl = `${siteConfig.url}${siteConfig.ogImage}`;

export function organizationSchema() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: siteConfig.foundingYear,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      width: 1200,
      height: 630,
    },
    image: logoUrl,
    sameAs: Object.values(siteConfig.links),
    areaServed: { "@type": "Place", name: "Worldwide" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Remote-first",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      contactType: "sales",
      availableLanguage: ["English"],
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "Product Design",
      "Automation",
      "Cloud Computing",
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: { "@id": ORG_ID },
  };
}

export type BreadcrumbEntry = { name: string; url: string };

export function breadcrumbSchema(items: BreadcrumbEntry[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.url}/#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: FAQItem[]) {
  return {
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** Wrap one or more schema nodes into a single linked graph document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
