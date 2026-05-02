"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";

type FontSize = "default" | "large" | "larger" | "xl";

interface AccessibilitySettings {
  fontSize: FontSize;
  highContrast: boolean;
  reducedMotion: boolean;
  largerTargets: boolean;
  focusVisible: boolean;
}

interface AccessibilityContextValue extends AccessibilitySettings {
  setFontSize: (size: FontSize) => void;
  setHighContrast: (on: boolean) => void;
  setReducedMotion: (on: boolean) => void;
  setLargerTargets: (on: boolean) => void;
  setFocusVisible: (on: boolean) => void;
  resetAll: () => void;
}

const STORAGE_KEY = "elolabs-a11y";

const defaults: AccessibilitySettings = {
  fontSize: "default",
  highContrast: false,
  reducedMotion: false,
  largerTargets: false,
  focusVisible: false,
};

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) {
    return {
      fontSize: "default" as FontSize,
      highContrast: false,
      reducedMotion: false,
      largerTargets: false,
      focusVisible: false,
      setFontSize: () => {},
      setHighContrast: () => {},
      setReducedMotion: () => {},
      setLargerTargets: () => {},
      setFocusVisible: () => {},
      resetAll: () => {},
    };
  }
  return ctx;
}

function loadSettings(): AccessibilitySettings {
  if (typeof window === "undefined") return defaults;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    return { ...defaults, ...JSON.parse(raw) };
  } catch {
    return defaults;
  }
}

function saveSettings(s: AccessibilitySettings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {}
}

const fontSizeMap: Record<FontSize, string> = {
  default: "100%",
  large: "112.5%",
  larger: "125%",
  xl: "150%",
};

function applyClasses(s: AccessibilitySettings) {
  const html = document.documentElement;
  html.style.fontSize = fontSizeMap[s.fontSize];

  html.classList.toggle("a11y-high-contrast", s.highContrast);
  html.classList.toggle("a11y-reduced-motion", s.reducedMotion);
  html.classList.toggle("a11y-larger-targets", s.largerTargets);
  html.classList.toggle("a11y-focus-visible", s.focusVisible);
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaults);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setSettings(loadSettings());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyClasses(settings);
    saveSettings(settings);
  }, [settings, mounted]);

  const setFontSize = useCallback((fontSize: FontSize) => setSettings((s) => ({ ...s, fontSize })), []);
  const setHighContrast = useCallback((highContrast: boolean) => setSettings((s) => ({ ...s, highContrast })), []);
  const setReducedMotion = useCallback((reducedMotion: boolean) => setSettings((s) => ({ ...s, reducedMotion })), []);
  const setLargerTargets = useCallback((largerTargets: boolean) => setSettings((s) => ({ ...s, largerTargets })), []);
  const setFocusVisible = useCallback((focusVisible: boolean) => setSettings((s) => ({ ...s, focusVisible })), []);
  const resetAll = useCallback(() => setSettings(defaults), []);

  if (!mounted) return <>{children}</>;

  return (
    <AccessibilityContext.Provider
      value={{
        ...settings,
        setFontSize,
        setHighContrast,
        setReducedMotion,
        setLargerTargets,
        setFocusVisible,
        resetAll,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}