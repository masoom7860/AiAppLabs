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
        title="The partner teams trust to ship real AI."
        description="Most AI projects stall between a demo and a product. We're built to close that gap."
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
