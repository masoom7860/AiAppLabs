import Link from "next/link";
import { Container } from "@/components/layout/container";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/shared/logo";
import { GitHub, LinkedIn, XSocial } from "@/components/shared/icons";

const year = new Date().getFullYear();

const socials = [
  { label: "AiAppLabs on X", href: siteConfig.links.twitter, Icon: XSocial },
  { label: "AiAppLabs on LinkedIn", href: siteConfig.links.linkedin, Icon: LinkedIn },
  { label: "AiAppLabs on GitHub", href: siteConfig.links.github, Icon: GitHub },
].filter(({ href }) => href.length > 0);

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3 rounded-pill bg-white/95 pr-4 shadow-soft ring-1 ring-border/60">
              <Logo type="logo" />
              <span className="logo-text" aria-hidden="true">
                <span>Ai</span>
                <span>App</span>
                <span>Labs</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          {socials.length > 0 ? (
            <ul className="flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-pill border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
