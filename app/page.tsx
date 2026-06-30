import { HeroSection } from "@/components/sections/hero-section";
import { TrustedCompaniesSection } from "@/components/sections/trusted-companies-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AIProductsSection } from "@/components/sections/ai-products-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { ProcessSection } from "@/components/sections/process-section";
import { StatisticsSection } from "@/components/sections/statistics-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedCompaniesSection />
      <ServicesSection />
      <AIProductsSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <StatisticsSection />
      <TechStackSection />
      <PortfolioSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
