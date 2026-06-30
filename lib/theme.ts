export type Theme = "light" | "dark" | "system";

export const THEME_STORAGE_KEY = "aiapplabs-theme";

/** AiAppLabs ships dark-first; light + system are still fully supported. */
export const DEFAULT_THEME: Theme = "dark";

/**
 * Blocking script that applies the persisted theme before paint to avoid a
 * flash of the wrong theme (FOUC). Falls back to DEFAULT_THEME (dark).
 *
 * Wire it into the root layout's <head>:
 *   import { themeInitScript } from "@/lib/theme";
 *   <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
 * and add `suppressHydrationWarning` to the <html> element.
 */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var theme = stored || "${DEFAULT_THEME}";
    var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var dark = theme === "dark" || (theme === "system" && systemDark);
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {}
})();
`;

/** Resolve a Theme to the concrete mode that should be applied. */
export function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    if (typeof window === "undefined") return resolveTheme(DEFAULT_THEME);
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return theme;
}

/** Apply a theme to <html> and persist the user's preference. */
export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", resolveTheme(theme) === "dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // ignore storage failures (private mode, etc.)
  }
}
