# AiAppLabs Design System

A token-driven, reusable system built on **Tailwind CSS v4** (CSS-first config in
[`app/globals.css`](app/globals.css)) and **Framer Motion**. Everything is themeable and
supports light + dark mode out of the box.

## Brand palette

| Token        | Hex       | Utilities                                        |
| ------------ | --------- | ------------------------------------------------ |
| Primary      | `#2563EB` | `bg-primary` `text-primary` `border-primary` `ring-primary` |
| Secondary    | `#7C3AED` | `bg-secondary` `text-secondary` …                |
| Accent       | `#06B6D4` | `bg-accent` `text-accent` …                      |
| Dark         | `#0F172A` | `bg-brand-dark`                                  |
| Background   | `#F8FAFC` (light) / `#0F172A` (dark) | `bg-background`            |

Each brand color also has `-soft`, `-strong`, and `-foreground` variants (e.g.
`bg-primary-strong` for hovers, `text-primary-foreground` for text on a primary fill).
Status colors: `success`, `warning`, `danger`. Opacity modifiers work everywhere:
`bg-primary/10`, `text-accent/80`, etc.

### Semantic tokens (flip automatically in dark mode)

`background` · `foreground` · `surface` · `card` · `muted` · `muted-foreground` ·
`border` · `ring`. Build UI with these (not raw slate colors) and it themes for free —
e.g. `bg-surface text-foreground border-border`.

## Typography

Font tokens `--font-sans` (Geist) and `--font-mono`. Reusable text classes:

`.h1` `.h2` `.h3` `.h4` · `.lead` · `.body-text` · `.eyebrow` · `.text-gradient` ·
`.text-gradient-accent`

```html
<p class="eyebrow">AI product studio</p>
<h2 class="h2">We build AI systems <span class="text-gradient">that ship</span></h2>
<p class="lead">Strategy, design, and engineering under one roof.</p>
```

## Spacing & layout

- Semantic spacing scale: `--spacing-gutter`, `--spacing-section-sm`, `--spacing-section`,
  `--spacing-section-lg` → utilities like `py-section`, `gap-gutter`.
- `.container-page` — centered max-w-7xl wrapper with responsive gutters.
- `.section` — vertical section rhythm.
- React: [`<Container>`](components/layout/container.tsx) (`size`: sm/md/lg/full) and
  [`<Section>`](components/layout/section.tsx) (`tone`: default/muted/surface/dark/gradient,
  `spacing`: sm/md/lg, `contained`).

## Border radius

`rounded-field` (0.625rem) · `rounded-card` (1.25rem) · `rounded-card-lg` (1.75rem) ·
`rounded-pill`. Default Tailwind radii are untouched.

## Shadows

`shadow-soft` · `shadow-card` · `shadow-elevated` · `shadow-glow` (primary) ·
`shadow-glow-accent`.

## Gradients

Utilities: `bg-gradient-brand` (primary→secondary), `bg-gradient-accent` (accent→primary),
`bg-gradient-dark`, `bg-gradient-subtle`, `bg-radial-glow`, `bg-grid`, plus the text
gradients above.

## Glassmorphism

`.glass` and `.glass-strong` — translucent background, blur, hairline border, and inner
highlight. Theme-aware (lighter in light mode, darker in dark mode).

## Components (React)

| Component | File | Notes |
| --------- | ---- | ----- |
| `Button`  | [components/ui/button.tsx](components/ui/button.tsx) | `variant`: primary/secondary/accent/gradient/outline/ghost · `size`: sm/md/lg · `isLoading` (shows spinner) · `fullWidth` · `leftIcon`/`rightIcon` |
| `Badge`   | [components/ui/badge.tsx](components/ui/badge.tsx) | `variant`: primary/secondary/accent/muted/success/outline/gradient · `size`: sm/md/lg |
| `Card`    | [components/ui/card.tsx](components/ui/card.tsx) | `variant`: default/elevated/glass/gradient/outline · `interactive` · sub-parts `CardHeader/Title/Description/Content/Footer` |
| `Spinner` | [components/ui/spinner.tsx](components/ui/spinner.tsx) | `size`: sm/md/lg/xl |
| `ThemeToggle` | [components/ui/theme-toggle.tsx](components/ui/theme-toggle.tsx) | light/dark switch |

Equivalent plain-HTML classes also exist: `.btn`/`.btn-primary`…, `.badge`/`.badge-primary`…,
`.card`/`.card-interactive`, `.spinner`.

```tsx
<Button variant="gradient" size="lg" leftIcon={<Icon/>}>Start your roadmap</Button>
<Button isLoading>Saving…</Button>
<Badge variant="accent">New</Badge>
<Card variant="glass" interactive>
  <CardHeader><CardTitle>AI strategy</CardTitle><CardDescription>…</CardDescription></CardHeader>
  <CardContent>…</CardContent>
</Card>
```

## Animation variants

Reusable Framer Motion presets in [`lib/animations.ts`](lib/animations.ts):
`fadeIn` `fadeInUp` `fadeInDown` `fadeInLeft` `fadeInRight` `scaleIn` `blurIn`,
`staggerContainer(stagger, delay)` + `staggerItem`, transitions `transitionSmooth` /
`transitionSpring`, interaction presets `hoverLift` / `tapShrink`, and `viewportOnce`.

```tsx
"use client";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

<motion.ul variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
  {items.map((i) => <motion.li key={i.id} variants={staggerItem}>{i.label}</motion.li>)}
</motion.ul>
```

CSS keyframe utilities: `animate-spin-slow`, `animate-float`, `animate-shimmer`,
`animate-pulse-glow`, `animate-fade-in`, `animate-fade-in-up`. All motion respects
`prefers-reduced-motion`.

## Dark mode

Strategy is **class-based** (`.dark` on `<html>`). The site **ships dark-first**
(`DEFAULT_THEME = "dark"`); light and system are fully supported via the toggle. Tools in
[`lib/theme.ts`](lib/theme.ts) + [`hooks/use-theme.ts`](hooks/use-theme.ts):

```tsx
const { theme, resolvedTheme, setTheme, toggle } = useTheme(); // "light" | "dark" | "system"
```

This is already wired in [`app/layout.tsx`](app/layout.tsx): `<html className="dark" suppressHydrationWarning>`,
the no-flash `themeInitScript` in `<head>`, and a token-driven `body` (`bg-background text-foreground`).
Use [`<ThemeToggle />`](components/ui/theme-toggle.tsx) anywhere (it's in the navbar).

> Build new pages with the semantic tokens (`bg-background`, `bg-surface`, `text-foreground`, …)
> and they theme automatically. The existing homepage sections still use hardcoded `slate`
> colors, so they only look correct in dark mode until migrated to tokens.

## Navbar

[`components/layout/navbar.tsx`](components/layout/navbar.tsx) — premium, fully prop-driven
(`items`, `logo`, `cta`). Features: sticky + glass-on-scroll, animated dropdowns
([nav-dropdown.tsx](components/layout/nav-dropdown.tsx)), active-route highlight (shared
`isActivePath` + a `layoutId` underline), animated mobile menu with accordion dropdowns
([mobile-nav.tsx](components/layout/mobile-nav.tsx)), integrated theme toggle, CTA, and a
reusable scroll-progress bar ([scroll-progress.tsx](components/layout/scroll-progress.tsx)).
Dropdown content is driven by `NavItem.children` in [data/navigation.ts](data/navigation.ts).

```tsx
<Navbar />                                   {/* defaults from site config */}
<Navbar items={customNav} cta={{ label: "Get started", href: "/signup" }} />
```
