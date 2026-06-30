import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { IconTile } from "@/components/shared/icon-tile";
import { CardLink } from "@/components/shared/card-link";
import { Check } from "@/components/shared/icons";

export type ProductCardProps = {
  icon: React.ReactNode;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
  className?: string;
};

/** Rich product card: tagline, icon, description, feature checklist, link. */
export function ProductCard({
  icon,
  name,
  tagline,
  description,
  features,
  href,
  className,
}: ProductCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-card-lg border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-[0.14]" />

      <div className="relative flex items-center justify-between gap-3">
        <IconTile>{icon}</IconTile>
        <Badge variant="muted" size="sm" className="tracking-normal normal-case">
          {tagline}
        </Badge>
      </div>

      <h3 className="relative mt-5 text-xl font-semibold tracking-tight text-foreground">{name}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <ul className="relative mt-5 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <CardLink href={href} srText={name} className="relative mt-6 pt-2">
        Explore
      </CardLink>
    </article>
  );
}
