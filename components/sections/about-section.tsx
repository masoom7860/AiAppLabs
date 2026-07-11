import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { FeatureCard } from "@/components/sections/about/feature-card";
import { Timeline } from "@/components/sections/about/timeline";
import { CeoMessage } from "@/components/sections/about/ceo-message";
import {
  aboutStory,
  ceoMessage,
  counters,
  mission,
  timeline,
  values,
  vision,
} from "@/data/about";

const missionVision = [mission, vision];

export function AboutSection() {
  return (
    <Section id="about" tone="muted" spacing="lg">
      {/* Story + animated counters */}
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="max-w-xl">
          <SectionHeading eyebrow={aboutStory.eyebrow} title={aboutStory.title} />
          <div className="mt-6 space-y-4">
            {aboutStory.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-lg leading-8 text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>

        <RevealGroup
          inView
          stagger={0.1}
          className="grid grid-cols-2 gap-4 rounded-card-lg border border-border bg-card p-6 shadow-card sm:p-8"
        >
          {counters.map((c) => (
            <RevealItem key={c.label} className="rounded-card bg-muted/60 p-5">
              <AnimatedCounter
                value={c.value}
                decimals={c.decimals}
                prefix={c.prefix}
                suffix={c.suffix}
                className="text-gradient font-heading text-3xl font-bold tracking-tight sm:text-4xl"
              />
              <p className="mt-1 text-sm text-muted-foreground">{c.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {/* Mission + Vision */}
      <RevealGroup inView stagger={0.12} className="mt-16 grid gap-6 sm:grid-cols-2">
        {missionVision.map(({ icon: Icon, title, description }) => (
          <RevealItem key={title} className="h-full">
            <FeatureCard
              icon={<Icon className="h-6 w-6" />}
              title={title}
              description={description}
            />
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Values */}
      <div className="mt-20">
        <SectionHeading
          eyebrow="Our values"
          title="The principles behind every Laravel, Shopify, cloud, and AI build."
        />
        <RevealGroup
          inView
          stagger={0.08}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map(({ icon: Icon, title, description }) => (
            <RevealItem key={title} className="h-full">
              <FeatureCard
                icon={<Icon className="h-6 w-6" />}
                title={title}
                description={description}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {/* Timeline + CEO message */}
      <div className="mt-20 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Our journey" title="From PHP roots to commerce and AI implementation." />
          <Timeline items={timeline} className="mt-10" />
        </div>
        <CeoMessage
          quote={ceoMessage.quote}
          name={ceoMessage.name}
          role={ceoMessage.role}
          initials={ceoMessage.initials}
          className="lg:mt-2"
        />
      </div>
    </Section>
  );
}
