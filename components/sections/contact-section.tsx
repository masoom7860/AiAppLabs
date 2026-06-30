import Link from "next/link";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <Section id="contact" spacing="lg">
      <div className="relative overflow-hidden rounded-card-lg border border-border bg-card p-8 shadow-card lg:p-12">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-brand opacity-15 blur-3xl"
        />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Let&rsquo;s turn your AI idea into a product people love.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Tell us what you&rsquo;re building and the constraints you&rsquo;re solving against —
              we&rsquo;ll scope the right next steps with you.
            </p>
          </div>

          <div className="rounded-card border border-border bg-muted/50 p-6">
            <p className="text-sm text-muted-foreground">Start here</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 block text-xl font-semibold text-foreground transition-colors hover:text-primary"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {siteConfig.phone}
            </a>
            <Link href={`mailto:${siteConfig.email}`} className="btn-primary mt-6 w-full">
              Book a discovery call
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
