import { absoluteUrl, siteConfig } from "@/config/site";
import type { FAQItem, PortfolioItem, Service } from "@/types/content";

/**
 * JSON-LD (schema.org) builders. Each returns a node WITHOUT `@context`;
 * combine them with `graph()` so a single linked `@graph` is emitted.
 */

const ORG_ID = `${siteConfig.url}/#organization`;
const SITE_ID = `${siteConfig.url}/#website`;
const PAGE_ID = `${siteConfig.url}/#webpage`;
const SERVICES_ID = `${siteConfig.url}/#services`;
const PORTFOLIO_ID = `${siteConfig.url}/#portfolio`;
const BREADCRUMB_ID = `${siteConfig.url}/#breadcrumb`;
const FAQ_ID = `${siteConfig.url}/#faq`;
const imageUrl = absoluteUrl(siteConfig.ogImage);
const logoUrl = absoluteUrl(siteConfig.logo);
const sameAs = Object.values(siteConfig.links).filter((href) => href.length > 0);

export function organizationSchema() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      width: 312,
      height: 72,
      caption: siteConfig.logoAlt,
    },
    image: imageUrl,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    areaServed: { "@type": "Place", name: "Worldwide" },
    ...(siteConfig.email || siteConfig.phone
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            ...(siteConfig.email ? { email: siteConfig.email } : {}),
            ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
            contactType: "sales",
            availableLanguage: [siteConfig.language],
          },
        }
      : {}),
    knowsAbout: [
      "Laravel",
      "PHP",
      "JavaScript",
      "Node.js",
      "React.js",
      "Vue.js",
      "AngularJS",
      "Shopify Apps",
      "Shopify Theme Setup",
      "MySQL",
      "SQLite",
      "MongoDB",
      "Redis",
      "Memcached",
      "WebSockets",
      "Supervisor Jobs",
      "CSRF Protection",
      "Argon2 Password Hashing",
      "Encryption",
      "Linode",
      "AWS",
      "DigitalOcean",
      "Google Cloud",
      "AI Chat",
      "AI Dashboards",
      "Sentiment Analysis",
      "Stock Prediction",
      "Stock Alerts",
    ],
    hasOfferCatalog: { "@id": SERVICES_ID },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": ORG_ID },
  };
}

export function webPageSchema() {
  return {
    "@type": "WebPage",
    "@id": PAGE_ID,
    url: siteConfig.url,
    name: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    mainEntity: { "@id": ORG_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
      caption: siteConfig.ogImageAlt,
    },
    breadcrumb: { "@id": BREADCRUMB_ID },
    dateModified: siteConfig.lastModified,
  };
}

export function serviceCatalogSchema(items: Service[]) {
  return {
    "@type": "OfferCatalog",
    "@id": SERVICES_ID,
    name: "AiAppLabs implementation services",
    url: `${siteConfig.url}/#services`,
    itemListElement: items.map((item) => ({
      "@type": "Offer",
      url: `${siteConfig.url}/#services`,
      itemOffered: {
        "@type": "Service",
        name: item.title,
        description: item.description,
        serviceType: item.title,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Place", name: "Worldwide" },
      },
    })),
  };
}

export function portfolioItemListSchema(items: PortfolioItem[]) {
  return {
    "@type": "ItemList",
    "@id": PORTFOLIO_ID,
    name: "AiAppLabs selected apps and projects",
    url: `${siteConfig.url}/#portfolio`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}/#portfolio`,
      item: {
        "@type": "CreativeWork",
        name: item.title,
        description: item.description,
        about: item.category,
        keywords: item.technologies.join(", "),
        provider: { "@id": ORG_ID },
      },
    })),
  };
}

export type BreadcrumbEntry = { name: string; url: string };

export function breadcrumbSchema(items: BreadcrumbEntry[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": BREADCRUMB_ID,
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
    "@id": FAQ_ID,
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
