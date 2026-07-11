import Link from "next/link";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { Check } from "@/components/shared/icons";
import { cn } from "@/lib/utils";
import { pricing } from "@/data/pricing";

export function PricingSection() {
  return (
    <Section id="pricing" spacing="lg">
      <SectionHeading
        eyebrow="Pricing"
        title="Flexible scopes for feature builds and full products."
        description="Choose a focused implementation sprint or a complete product build across web, Shopify, cloud, and AI."
      />

      <RevealGroup inView stagger={0.12} className="mt-12 grid gap-6 lg:grid-cols-2">
        {pricing.map((plan) => (
          <RevealItem key={plan.name} className="h-full">
            <div
              className={cn(
                "flex h-full flex-col rounded-card-lg border p-8 shadow-card transition-all duration-300",
                plan.featured
                  ? "border-primary/50 bg-card shadow-glow"
                  : "border-border bg-card hover:border-primary/30",
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                {plan.featured ? <Badge variant="primary" size="sm">Popular</Badge> : null}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>
              <p className="mt-6 text-4xl font-bold tracking-tight text-foreground">
                {plan.price}
                <span className="text-base font-normal text-muted-foreground"> / scope</span>
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={cn("mt-8", plan.featured ? "btn-primary" : "btn-outline")}
              >
                Start this scope
              </Link>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
