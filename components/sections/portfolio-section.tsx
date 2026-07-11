import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PortfolioCard } from "@/components/sections/portfolio/portfolio-card";
import { portfolio } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <Section id="portfolio" spacing="lg">
      <SectionHeading
        eyebrow="Portfolio"
        title="Relevant apps, ecommerce builds, and AI dashboards."
        description="A selection of Shopify apps, custom ecommerce platforms, service projects, and AI implementations aligned to the work you listed."
      />

      {/* Responsive masonry (CSS columns). Cards self-reveal (Framer); their
          preview images unmask on scroll (GSAP). */}
      <div className="mt-12 gap-6 [column-fill:_balance] sm:columns-2">
        {portfolio.map((item) => (
          <PortfolioCard key={item.title} item={item} />
        ))}
      </div>
    </Section>
  );
}
