import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { MotionProvider } from "@/components/providers/motion-provider";
import { absoluteUrl, siteConfig } from "@/config/site";
import { themeInitScript } from "@/lib/theme";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  organizationSchema,
  portfolioItemListSchema,
  serviceCatalogSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { faq } from "@/data/faq";
import { portfolio } from "@/data/portfolio";
import { services } from "@/data/services";
import "./globals.css";

// Body
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Headings (display)
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const metadataTitle = `${siteConfig.name} | ${siteConfig.title}`;
const metadataImage = {
  url: siteConfig.ogImage,
  width: 1200,
  height: 630,
  alt: siteConfig.ogImageAlt,
};
const twitterAccount =
  siteConfig.twitterHandle.length > 0
    ? { site: siteConfig.twitterHandle, creator: siteConfig.twitterHandle }
    : {};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: metadataTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  classification: "Software development services",
  openGraph: {
    title: metadataTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [metadataImage],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
    ...twitterAccount,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

const structuredData = graph(
  organizationSchema(),
  websiteSchema(),
  webPageSchema(),
  serviceCatalogSchema(services),
  portfolioItemListSchema(portfolio),
  breadcrumbSchema([{ name: "Home", url: siteConfig.url }]),
  faqSchema(faq),
);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <JsonLd data={structuredData} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-glow"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <MotionProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
