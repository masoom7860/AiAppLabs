import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { CardLink } from "@/components/shared/card-link";
import { caseStudies } from "@/data/case-studies";

export function CaseStudiesSection() {
  return (
    <Section id="case-studies" tone="muted" spacing="lg">
      <SectionHeading
        eyebrow="Case studies"
        title="Outcomes we're proud of."
        description="A closer look at how we turn AI ambition into measurable business results."
      />

      <RevealGroup inView stagger={0.12} className="mt-12 space-y-6">
        {caseStudies.map((study) => (
          <RevealItem key={study.title}>
            <article className="group grid gap-8 rounded-card-lg border border-border bg-card p-8 shadow-card transition-all duration-300 hover:border-primary/40 hover:shadow-elevated lg:grid-cols-[1.4fr_1fr] lg:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" size="sm">
                    {study.client}
                  </Badge>
                  <Badge variant="muted" size="sm" className="tracking-normal normal-case">
                    {study.category}
                  </Badge>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {study.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{study.summary}</p>
                <CardLink href={study.href} srText={study.title} className="mt-6">
                  Read the case study
                </CardLink>
              </div>

              <dl className="grid grid-cols-3 gap-4 self-center rounded-card border border-border bg-muted/40 p-6 lg:grid-cols-1 lg:gap-5">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col-reverse">
                    <dt className="text-xs text-muted-foreground">{metric.label}</dt>
                    <dd className="text-gradient font-heading text-2xl font-bold sm:text-3xl">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
