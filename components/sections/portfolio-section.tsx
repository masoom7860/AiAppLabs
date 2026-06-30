import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PortfolioCard } from "@/components/sections/portfolio/portfolio-card";
import { portfolio } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <Section id="portfolio" spacing="lg">
      <SectionHeading
        eyebrow="Portfolio"
        title="Award-winning work, measurable outcomes."
        description="A selection of AI products and systems we've designed, built, and scaled for modern teams."
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
