'use client';

import { useState } from 'react';
import { X, Flag, Users, User, Settings } from 'lucide-react';
import { F1DevKitState } from '@/lib/f1-dev-kit/types';
import { initialF1DevKitState } from '@/lib/f1-dev-kit/mock-data';
import { SeasonSetup } from './SeasonSetup';
import { DriverStandings } from './DriverStandings';
import { ConstructorStandings } from './ConstructorStandings';
import { DriverManagement } from './DriverManagement';

interface F1DevKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabId = 'season' | 'drivers' | 'constructors' | 'management';

export function F1DevKitModal({ isOpen, onClose }: F1DevKitModalProps) {
  const [activeTab, setActiveTab] = useState<TabId>('season');
  const [state, setState] = useState<F1DevKitState>(initialF1DevKitState);

  if (!isOpen) return null;

  const p = state.owner.primaryColor;
  const a = state.owner.accentColor;

  const tabs: { id: TabId; label: string; icon: typeof Settings }[] = [
    { id: 'season', label: 'Season Setup', icon: Flag },
    { id: 'drivers', label: 'Driver Standings', icon: Users },
    { id: 'constructors', label: 'Constructor Standings', icon: Users },
    { id: 'management', label: 'Driver Management', icon: User },
  ];

  const updateState = (updates: Partial<F1DevKitState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      <div
        className="relative w-full max-w-[1400px] max-h-[90vh] rounded-xl overflow-hidden flex flex-col"
        style={{ backgroundColor: p + '10', borderColor: a + '30', borderWidth: '1px' }}
      >
        <style>{`
          .f1-scroll::-webkit-scrollbar { width: 5px; }
          .f1-scroll::-webkit-scrollbar-track { background: rgba(26, 21, 21, 0.3); border-radius: 3px; }
          .f1-scroll::-webkit-scrollbar-thumb { background: rgba(239, 68, 68, 0.35); border-radius: 3px; }
          .f1-scroll::-webkit-scrollbar-thumb:hover { background: rgba(239, 68, 68, 0.6); }
        `}</style>

        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">F1 Dev Kit Preview</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="lg:hidden border-b border-white/10">
          <div className="flex overflow-x-auto py-1 px-2 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-colors"
                style={{
                  backgroundColor: activeTab === tab.id ? a + '30' : 'transparent',
                  color: activeTab === tab.id ? a : 'rgba(255,255,255,0.6)',
                }}
              >
                <tab.icon size={14} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 lg:p-6 f1-scroll">
          <div className="hidden lg:grid lg:grid-cols-4 gap-4">
            <div className="min-w-[300px] bg-[#1a1515] border border-white/10 rounded-lg p-4 overflow-y-auto f1-scroll">
              <SeasonSetup state={state} onStateChange={updateState} />
            </div>
            <div className="min-w-[300px] bg-[#1a1515] border border-white/10 rounded-lg p-4 overflow-y-auto f1-scroll">
              <DriverStandings state={state} onStateChange={updateState} />
            </div>
            <div className="min-w-[300px] bg-[#1a1515] border border-white/10 rounded-lg p-4 overflow-y-auto f1-scroll">
              <ConstructorStandings state={state} onStateChange={updateState} />
            </div>
            <div className="min-w-[300px] bg-[#1a1515] border border-white/10 rounded-lg p-4 overflow-y-auto f1-scroll">
              <DriverManagement state={state} />
            </div>
          </div>

          <div className="lg:hidden">
            {activeTab === 'season' && <SeasonSetup state={state} onStateChange={updateState} />}
            {activeTab === 'drivers' && <DriverStandings state={state} onStateChange={updateState} />}
            {activeTab === 'constructors' && <ConstructorStandings state={state} onStateChange={updateState} />}
            {activeTab === 'management' && <DriverManagement state={state} />}
          </div>
        </div>
      </div>
    </div>
  );
}