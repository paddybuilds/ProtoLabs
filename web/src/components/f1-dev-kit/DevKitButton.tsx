'use client';

import { Monitor } from 'lucide-react';

interface F1DevKitButtonProps {
  onClick: () => void;
}

export function F1DevKitButton({ onClick }: F1DevKitButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#ef4444]/10 border border-[#ef4444]/30 text-[#ef4444] font-medium text-sm hover:bg-[#ef4444]/20 transition-colors"
    >
      <Monitor size={16} />
      Preview Dev Kit
    </button>
  );
}