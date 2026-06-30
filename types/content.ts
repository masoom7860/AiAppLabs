import type { ComponentType, SVGProps } from "react";

/** Any of the SVG icon components from `components/shared/icons`. */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type Service = {
  icon: IconComponent;
  title: string;
  description: string;
  href: string;
};

export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  result: string;
  /** Tailwind gradient stops for the generated preview, e.g. "from-blue-600 to-violet-600". */
  gradient: string;
  /** Optional real screenshot (rendered via next/image when present). */
  image?: string;
  liveUrl: string;
  caseUrl: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  href: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  date: string;
};

/** Icon + title + description. Used for mission, vision, and values. */
export type Feature = {
  icon: IconComponent;
  title: string;
  description: string;
};

export type Milestone = {
  year: string;
  title: string;
  description: string;
};

/** Numeric stat for animated count-up. */
export type Counter = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export type Stat = {
  value: string;
  label: string;
};
