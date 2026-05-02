"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

interface SportLink {
  href: string;
  label: string;
  isActive?: boolean;
  accentColor?: string;
}

interface MobileNavProps {
  sportLinks: SportLink[];
  accentColor: string;
}

export function MobileNav({ sportLinks, accentColor }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      drawerRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        className="sm:hidden flex flex-col gap-[3px] p-1"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <span className="block w-4 h-[1.5px] bg-white/80" />
        <span className="block w-4 h-[1.5px] bg-white/80" />
        <span className="block w-4 h-[1.5px] bg-white/80" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] sm:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="absolute inset-0 bg-black/70" onClick={() => setIsOpen(false)} />
          <div
            ref={drawerRef}
            tabIndex={-1}
            className="absolute right-0 top-0 bottom-0 w-64 bg-[#0e0e10] border-l border-white/10 p-6 flex flex-col focus:outline-none"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Navigate</span>
              <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="text-white/60 hover:text-white">
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {sportLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded text-sm font-semibold tracking-wider ${
                    link.isActive
                      ? `text-white bg-white/10`
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                  style={link.isActive ? { color: accentColor, backgroundColor: accentColor + '15' } : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}