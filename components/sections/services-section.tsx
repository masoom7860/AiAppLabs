import Link from "next/link";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { ServiceCard } from "@/components/sections/services/service-card";
import { ArrowRight } from "@/components/shared/icons";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <Section id="services" spacing="lg">
      <SectionHeading
        eyebrow="Services"
        title="Everything you need to build and scale."
        description="One partner across the full product stack — from intelligent systems to the interfaces and growth engines around them."
      />

      <RevealGroup
        inView
        stagger={0.07}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map(({ icon: Icon, title, description, href }, i) => (
          <ServiceCard
            key={title}
            index={i + 1}
            icon={<Icon className="h-6 w-6" />}
            title={title}
            description={description}
            href={href}
          />
        ))}

        {/* CTA tile completes the grid */}
        <RevealItem className="h-full">
          <Link
            href="#contact"
            className="group flex h-full flex-col justify-between rounded-card-lg bg-gradient-brand p-7 text-white shadow-glow transition-transform duration-300 hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <p className="text-lg font-semibold leading-snug">
              Need something custom?
            </p>
            <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold">
              Let&rsquo;s talk
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </RevealItem>
      </RevealGroup>
    </Section>
  );
}
