import { SectionHeading } from "@/components/ui/section-heading";
import { HorizontalScroll } from "@/components/animations/horizontal-scroll";
import { IconTile } from "@/components/shared/icon-tile";
import { process } from "@/data/process";

export function ProcessSection() {
  return (
    <section id="process" className="relative scroll-mt-20 bg-muted text-foreground">
      <div className="container-page py-section-sm sm:py-section lg:pb-0">
        <SectionHeading
          eyebrow="Process"
          title="A clear path from scope to secure production."
          description="A focused delivery flow for Laravel, Shopify, Node.js, databases, jobs, cloud deployment, and AI features."
        />
      </div>

      <HorizontalScroll
        className="px-6 pb-section-sm sm:pb-section lg:px-0 lg:pb-0"
        trackClassName="lg:px-[10vw]"
      >
        {process.map(({ step, title, description, icon: Icon }) => (
          <article
            key={step}
            className="group flex w-[80vw] shrink-0 snap-center flex-col rounded-card-lg border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated sm:w-80 lg:w-[24rem] lg:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="text-gradient font-heading text-4xl font-bold">{step}</span>
              <IconTile>
                <Icon className="h-6 w-6" />
              </IconTile>
            </div>
            <h3 className="mt-8 text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
          </article>
        ))}
      </HorizontalScroll>
    </section>
  );
}
