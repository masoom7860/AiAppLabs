import { Section } from "@/components/layout/section";
import { Marquee } from "@/components/shared/marquee";
import { companies } from "@/data/companies";

export function TrustedCompaniesSection() {
  return (
    <Section id="trusted" tone="muted" spacing="sm" contained={false}>
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by teams building with AI
        </p>
      </div>
      <Marquee items={companies} srLabel="Trusted by" className="mt-8" />
    </Section>
  );
}
