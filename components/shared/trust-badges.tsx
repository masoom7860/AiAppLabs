import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { trustedBy } from "@/data/trust";

export type TrustBadgesProps = {
  heading?: string;
  items?: string[];
  className?: string;
};

/** "Trusted by …" eyebrow + a row of company badges. Reusable. */
export function TrustBadges({
  heading = "Trusted by teams building with AI",
  items = trustedBy,
  className,
}: TrustBadgesProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {heading}
      </p>
      <ul className="flex flex-wrap items-center gap-2">
        {items.map((name) => (
          <li key={name}>
            <Badge variant="outline" size="md" className="tracking-normal normal-case">
              {name}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
