import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChevronDown } from "@/components/shared/icons";
import { faq } from "@/data/faq";

// FAQ structured data is emitted in the consolidated graph in app/layout.tsx.

export function FaqSection() {
  return (
    <Section id="faq" tone="muted" spacing="lg">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions about the stack and project types."
        description="A quick view into the technologies, Shopify apps, cloud deployment, and AI implementation work we handle."
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {faq.map((item) => (
          <details
            key={item.question}
            className="group rounded-card border border-border bg-card px-6 shadow-card"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold text-foreground [&::-webkit-details-marker]:hidden">
              {item.question}
              <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="pb-5 leading-relaxed text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
