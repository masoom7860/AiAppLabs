import Link from "next/link";
import { ArrowRight } from "@/components/shared/icons";
import { cn } from "@/lib/utils";

export type CardLinkProps = {
  href: string;
  children: React.ReactNode;
  /** Visually-hidden context appended for screen readers (e.g. the item title). */
  srText?: string;
  className?: string;
};

/**
 * "Learn more →"-style card link: brand color, focus ring, and an arrow that
 * slides on parent-card hover (the parent card must be a `group`). Reusable.
 */
export function CardLink({ href, children, srText, className }: CardLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {children}
      {srText ? <span className="sr-only"> {srText}</span> : null}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
