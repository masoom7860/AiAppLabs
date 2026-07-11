import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { testimonials } from "@/data/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <Section id="testimonials" tone="muted" spacing="lg">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted for commerce, backend, and AI implementation."
        description="Collaborators who needed clean Shopify apps, Laravel foundations, realtime workflows, and maintainable delivery."
      />

      <RevealGroup inView stagger={0.12} className="mt-12 grid gap-6 lg:grid-cols-2">
        {testimonials.map((t) => (
          <RevealItem key={t.author} className="h-full">
            <figure className="flex h-full flex-col rounded-card-lg border border-border bg-card p-8 shadow-card">
              <blockquote className="text-lg leading-8 text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white">
                  {initials(t.author)}
                </span>
                <span>
                  <span className="block font-semibold text-foreground">{t.author}</span>
                  <span className="block text-sm text-muted-foreground">
                    {t.role} · {t.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
