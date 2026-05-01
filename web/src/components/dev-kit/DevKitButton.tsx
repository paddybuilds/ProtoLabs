'use client';

import { Monitor } from 'lucide-react';

interface DevKitButtonProps {
  onClick: () => void;
}

export function DevKitButton({ onClick }: DevKitButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] font-medium text-sm hover:bg-[#10b981]/20 transition-colors"
    >
      <Monitor size={16} />
      Preview Dev Kit
    </button>
  );
}