import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { FeatureCard } from "@/components/sections/about/feature-card";
import { industries } from "@/data/industries";

export function IndustriesSection() {
  return (
    <Section id="industries" tone="muted" spacing="lg">
      <SectionHeading
        eyebrow="Industries"
        title="Deep expertise across regulated and high-growth sectors."
        description="We bring domain context — and the guardrails each industry demands — to every engagement."
      />

      <RevealGroup
        inView
        stagger={0.08}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {industries.map(({ icon: Icon, title, description }) => (
          <RevealItem key={title} className="h-full">
            <FeatureCard
              icon={<Icon className="h-6 w-6" />}
              title={title}
              description={description}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
