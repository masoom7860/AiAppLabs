import { Section } from "@/components/layout/section";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { metrics } from "@/data/metrics";

export function StatisticsSection() {
  return (
    <Section id="stats" spacing="md" contained={false}>
      <div className="container-page">
        <div className="relative overflow-hidden rounded-card-lg bg-gradient-dark p-8 shadow-elevated sm:p-12">
          <div className="absolute inset-0 bg-grid opacity-[0.08]" aria-hidden="true" />
          <RevealGroup
            inView
            stagger={0.1}
            className="relative grid grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {metrics.map((m) => (
              <RevealItem key={m.label} className="text-center">
                <AnimatedCounter
                  value={m.value}
                  decimals={m.decimals}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl"
                />
                <p className="mt-2 text-sm text-slate-300">{m.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
