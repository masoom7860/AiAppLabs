import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { ProductCard } from "@/components/sections/products/product-card";
import { products } from "@/data/products";

export function AIProductsSection() {
  return (
    <Section id="products" spacing="lg">
      <SectionHeading
        eyebrow="AI Products"
        title="Production-ready building blocks for AI products."
        description="Accelerators we've battle-tested across engagements — adapted to your domain, not bolted on."
      />

      <RevealGroup
        inView
        stagger={0.08}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {products.map(({ icon: Icon, ...rest }) => (
          <RevealItem key={rest.name} className="h-full">
            <ProductCard icon={<Icon className="h-6 w-6" />} {...rest} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
