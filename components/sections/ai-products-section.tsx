import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { ProductCard } from "@/components/sections/products/product-card";
import { products } from "@/data/products";

export function AIProductsSection() {
  return (
    <Section id="products" spacing="lg">
      <SectionHeading
        eyebrow="AI & Shopify Products"
        title="Reusable patterns for chat, dashboards, stock alerts, and Shopify apps."
        description="Practical building blocks adapted to your Laravel, Node.js, Shopify, or custom ecommerce product."
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
