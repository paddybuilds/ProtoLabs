'use client';

import { Monitor } from 'lucide-react';

interface UFCDevKitButtonProps {
  onClick: () => void;
}

export function UFCDevKitButton({ onClick }: UFCDevKitButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#fbbf24]/10 border border-[#fbbf24]/30 text-[#fbbf24] font-medium text-sm hover:bg-[#fbbf24]/20 transition-colors"
    >
      <Monitor size={16} />
      Preview Dev Kit
    </button>
  );
}