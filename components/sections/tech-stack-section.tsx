import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { techStack } from "@/data/tech";

export function TechStackSection() {
  return (
    <Section id="tech" spacing="lg">
      <SectionHeading
        eyebrow="Technology"
        title="The stack we use for real implementation work."
        description="Laravel, PHP, JavaScript frameworks, Node.js, SQL and NoSQL data stores, cache, security, Shopify, AI, and cloud deployment."
      />

      <RevealGroup
        inView
        stagger={0.08}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {techStack.map((category) => (
          <RevealItem key={category.name} className="h-full">
            <div className="h-full rounded-card border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {category.name}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-pill border border-border bg-muted/50 px-3 py-1 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
