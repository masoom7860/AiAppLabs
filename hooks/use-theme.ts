"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import {
  applyTheme,
  DEFAULT_THEME,
  resolveTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";

const THEME_EVENT = "aiapplabs:themechange";

function getPreference(): Theme {
  return (localStorage.getItem(THEME_STORAGE_KEY) as Theme | null) ?? DEFAULT_THEME;
}

function subscribe(callback: () => void) {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener("storage", callback); // other tabs
  window.addEventListener(THEME_EVENT, callback); // same tab
  mql.addEventListener("change", callback); // OS preference
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_EVENT, callback);
    mql.removeEventListener("change", callback);
  };
}

const serverTheme = resolveTheme(DEFAULT_THEME);

/**
 * Read and update the color theme. Backed by `useSyncExternalStore` so it stays
 * in sync across tabs and with the OS preference. Defaults to dark (the site's
 * theme) when no preference is stored.
 */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getPreference, () => DEFAULT_THEME);

  const resolvedTheme = useSyncExternalStore(
    subscribe,
    () => resolveTheme(getPreference()),
    () => serverTheme,
  );

  // Keep <html> in sync when "system" mode tracks an OS change.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  }, [resolvedTheme]);

  const setTheme = useCallback((next: Theme) => {
    applyTheme(next);
    window.dispatchEvent(new Event(THEME_EVENT));
  }, []);

  const toggle = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return { theme, resolvedTheme, setTheme, toggle };
}
