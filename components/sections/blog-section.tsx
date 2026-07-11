import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { CardLink } from "@/components/shared/card-link";
import { blogPosts } from "@/data/blog";

export function BlogSection() {
  return (
    <Section id="blog" spacing="lg">
      <SectionHeading
        eyebrow="Blog"
        title="Notes on Laravel, Shopify, realtime systems, and AI dashboards."
        description="Practical perspectives on implementation, app architecture, worker queues, cache, and AI alert workflows."
      />

      <RevealGroup inView stagger={0.12} className="mt-12 grid gap-6 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <RevealItem key={post.title} className="h-full">
            <article className="group flex h-full flex-col rounded-card-lg border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
              <Badge variant="accent" size="sm" className="self-start tracking-normal normal-case">
                {post.category}
              </Badge>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                {post.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{post.excerpt}</p>

              <div className="mt-auto flex items-center justify-between border-t border-border pt-5 text-sm">
                <time className="text-muted-foreground">{post.date}</time>
                <CardLink href={post.href} srText={post.title}>
                  Read more
                </CardLink>
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
