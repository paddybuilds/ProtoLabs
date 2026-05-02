"use client";

import { useState, useEffect, useRef } from "react";
import { useAccessibility } from "@/lib/accessibility-context";
import { Accessibility, X, Type, Contrast, Minimize2, MousePointerClick, Focus, RotateCcw } from "lucide-react";

const fontSizeOptions: { value: "default" | "large" | "larger" | "xl"; label: string }[] = [
  { value: "default", label: "Default" },
  { value: "large", label: "Large" },
  { value: "larger", label: "Larger" },
  { value: "xl", label: "Extra Large" },
];

interface ToggleProps {
  label: string;
  description: string;
  enabled: boolean;
  onToggle: (v: boolean) => void;
  icon: React.ReactNode;
}

function Toggle({ label, description, enabled, onToggle, icon }: ToggleProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/50 a11y-panel-icon">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-white/90">{label}</div>
        <div className="text-xs text-white/50 mt-0.5">{description}</div>
      </div>
      <button
        onClick={() => onToggle(!enabled)}
        role="switch"
        aria-checked={enabled}
        aria-label={`${label}: ${enabled ? "on" : "off"}`}
        className={`relative flex-shrink-0 w-10 h-6 rounded-full transition-colors ${
          enabled ? "bg-purple-600" : "bg-white/10"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
            enabled ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

export function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const {
    fontSize,
    highContrast,
    reducedMotion,
    largerTargets,
    focusVisible,
    setFontSize,
    setHighContrast,
    setReducedMotion,
    setLargerTargets,
    setFocusVisible,
    resetAll,
  } = useAccessibility();

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      const firstFocusable = panelRef.current?.querySelector<HTMLElement>(
        'button, [role="switch"], [tabindex]'
      );
      firstFocusable?.focus();
    }
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        aria-label="Accessibility settings"
        className="fixed bottom-4 right-4 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a1f] border border-white/10 text-white/70 shadow-lg hover:text-white hover:border-purple-500/50 hover:bg-purple-900/40 transition-colors a11y-trigger"
      >
        <Accessibility size={22} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Accessibility settings"
        >
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div
            ref={panelRef}
            className="relative w-full sm:max-w-md bg-[#141416] border border-white/10 rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="sticky top-0 z-10 bg-[#141416] border-b border-white/10 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Accessibility size={18} className="text-purple-400" />
                <h2 className="text-base font-semibold text-white">Accessibility</h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close accessibility settings"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="px-5 py-4 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Type size={14} className="text-white/50" />
                  <span className="text-sm font-medium text-white/90">Text Size</span>
                </div>
                <div className="grid grid-cols-4 gap-2" role="radiogroup" aria-label="Text size">
                  {fontSizeOptions.map((opt) => (
                    <button
                      key={opt.value}
                      role="radio"
                      aria-checked={fontSize === opt.value}
                      onClick={() => setFontSize(opt.value)}
                      className={`px-2 py-2 rounded-lg text-xs font-medium border transition-colors ${
                        fontSize === opt.value
                          ? "bg-purple-600/30 border-purple-500/50 text-purple-300"
                          : "bg-white/5 border-white/10 text-white/50 hover:border-white/20 hover:text-white/70"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Toggle
                  label="High Contrast"
                  description="Increase text contrast and border visibility"
                  enabled={highContrast}
                  onToggle={setHighContrast}
                  icon={<Contrast size={16} />}
                />
                <Toggle
                  label="Reduced Motion"
                  description="Minimize animations and transitions"
                  enabled={reducedMotion}
                  onToggle={setReducedMotion}
                  icon={<Minimize2 size={16} />}
                />
                <Toggle
                  label="Larger Tap Targets"
                  description="Increase minimum size of buttons and links"
                  enabled={largerTargets}
                  onToggle={setLargerTargets}
                  icon={<MousePointerClick size={16} />}
                />
                <Toggle
                  label="Visible Focus Rings"
                  description="Add prominent outlines to focused elements"
                  enabled={focusVisible}
                  onToggle={setFocusVisible}
                  icon={<Focus size={16} />}
                />
              </div>

              <button
                onClick={resetAll}
                className="flex items-center gap-2 text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                <RotateCcw size={12} />
                Reset to defaults
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}