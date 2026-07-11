import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { FeatureCard } from "@/components/sections/about/feature-card";
import { whyChooseUs } from "@/data/why-choose-us";

export function WhyChooseUsSection() {
  return (
    <Section id="why" spacing="lg">
      <SectionHeading
        eyebrow="Why AiAppLabs"
        title="A practical build partner for full-stack product work."
        description="We connect backend, frontend, cloud, data, security, Shopify, and AI implementation into one delivery flow."
      />

      <RevealGroup
        inView
        stagger={0.08}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {whyChooseUs.map(({ icon: Icon, title, description }) => (
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
