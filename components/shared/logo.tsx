import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export type LogoProps = {
  className?: string;
  imageClassName?: string;
  type: "logo" | "mark";
};

export function Logo({ className, imageClassName, type }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-1.5 py-1",
        className,
      )}
    >
      <Image
        src={type === "logo" ? siteConfig.logo : siteConfig.logoMark}
        alt={siteConfig.logoAlt}
        width={312}
        height={72}
        className={cn("h-10 w-auto", imageClassName)}
      />
    </span>
  );
}
