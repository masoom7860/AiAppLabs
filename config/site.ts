const DEFAULT_PRODUCTION_URL = "https://aiapplabs.online";
const DEFAULT_DEVELOPMENT_URL = "http://localhost:3000";

function withProtocol(value: string) {
  if (/^https?:\/\//i.test(value)) return value;
  if (/^(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?(?:\/.*)?$/i.test(value)) {
    return `http://${value}`;
  }
  return `https://${value}`;
}

function normalizeSiteUrl(value: string) {
  const url = new URL(withProtocol(value.trim()));
  const pathname = url.pathname.replace(/\/+$/, "");

  return `${url.origin}${pathname === "/" ? "" : pathname}`;
}

function resolveSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.APP_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.NEXT_PUBLIC_VERCEL_URL ||
    process.env.VERCEL_URL ||
    process.env.RENDER_EXTERNAL_URL ||
    process.env.URL ||
    process.env.DEPLOY_URL;

  return normalizeSiteUrl(
    configuredUrl ||
      (process.env.NODE_ENV === "production" ? DEFAULT_PRODUCTION_URL : DEFAULT_DEVELOPMENT_URL),
  );
}

export const siteConfig = {
  name: "AiAppLabs",
  tagline: "Laravel, Shopify, JavaScript, cloud, and AI implementation studio.",
  title: "Laravel, Shopify, Cloud & AI Implementation",
  description:
    "AiAppLabs builds Laravel/PHP platforms, Shopify apps, JavaScript frontends, Node.js backends, cloud deployments, AI dashboards, chat, and stock alerts.",
  url: resolveSiteUrl(),
  logo: "/logo.svg",
  logoMark: "/logo-mark.svg",
  logoAlt: "AiAppLabs logo",
  ogImage: "/opengraph-image",
  ogImageAlt:
    "AiAppLabs Laravel, Shopify, cloud, and AI implementation services preview",
  locale: "en_US",
  language: "en-US",
  lastModified: "2026-07-11",
  keywords: [
    "Laravel development",
    "PHP development",
    "HTML CSS JavaScript development",
    "Shopify apps",
    "Shopify theme setup",
    "React.js",
    "Vue.js",
    "AngularJS",
    "Node.js",
    "cloud deployment",
    "AI chat",
    "AI dashboard",
    "sentiment analysis",
    "stock prediction",
    "stock alert",
    "custom ecommerce platform",
  ],
  email: "tarannum0072003@gmail.com",
  phone: "",
  address: "Remote-first, worldwide",
  twitterHandle: "",
  links: {
    twitter: "",
    linkedin: "",
    github: "",
  },
};

export function absoluteUrl(path = "") {
  return new URL(path.replace(/^\/+/, ""), `${siteConfig.url}/`).toString();
}
