import { cn } from "@/lib/utils";

export type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

/** Reusable, theme-aware section header (eyebrow + title + optional lead). */
export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      <p className={cn("eyebrow", centered && "justify-center")}>{eyebrow}</p>
      <h2 className="h2 mt-5 text-gradient">{title}</h2>
      {description ? (
        <p className={cn("lead mt-5 max-w-xl", centered && "mx-auto")}>{description}</p>
      ) : null}
    </div>
  );
}
