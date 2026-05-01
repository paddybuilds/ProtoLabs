'use client';

import { useState } from 'react';
import { X, Calendar, Users, Trophy, User, Settings } from 'lucide-react';
import { UFCDevKitState } from '@/lib/ufc-dev-kit/types';
import { initialUFCDevKitState } from '@/lib/ufc-dev-kit/mock-data';
import { FightCardSetup } from './FightCardSetup';
import { FighterRankings } from './FighterRankings';
import { WeightClasses } from './WeightClasses';
import { FighterProfile } from './FighterProfile';

interface UFCDevKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabId = 'fightcard' | 'rankings' | 'weightclasses' | 'profile';

export function UFCDevKitModal({ isOpen, onClose }: UFCDevKitModalProps) {
  const [activeTab, setActiveTab] = useState<TabId>('fightcard');
  const [state, setState] = useState<UFCDevKitState>(initialUFCDevKitState);

  if (!isOpen) return null;

  const a = state.accentColor;

  const tabs: { id: TabId; label: string; icon: typeof Settings }[] = [
    { id: 'fightcard', label: 'Fight Card Setup', icon: Calendar },
    { id: 'rankings', label: 'Fighter Rankings', icon: Trophy },
    { id: 'weightclasses', label: 'Weight Classes', icon: Users },
    { id: 'profile', label: 'Fighter Profile', icon: User },
  ];

  const updateState = (updates: Partial<UFCDevKitState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      <div
        className="relative w-full max-w-[1400px] max-h-[90vh] rounded-xl overflow-hidden flex flex-col"
        style={{ backgroundColor: '#1a1505', borderColor: a + '30', borderWidth: '1px' }}
      >
        <style>{`
          .ufc-scroll::-webkit-scrollbar { width: 5px; }
          .ufc-scroll::-webkit-scrollbar-track { background: rgba(26, 21, 5, 0.3); border-radius: 3px; }
          .ufc-scroll::-webkit-scrollbar-thumb { background: rgba(251, 191, 36, 0.35); border-radius: 3px; }
          .ufc-scroll::-webkit-scrollbar-thumb:hover { background: rgba(251, 191, 36, 0.6); }
        `}</style>

        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">UFC Dev Kit Preview</h2>
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

        <div className="hidden lg:flex border-b border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors"
              style={{
                backgroundColor: activeTab === tab.id ? a + '20' : 'transparent',
                color: activeTab === tab.id ? a : 'rgba(255,255,255,0.6)',
                borderBottom: activeTab === tab.id ? `2px solid ${a}` : '2px solid transparent',
              }}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto ufc-scroll p-4">
          {activeTab === 'fightcard' && <FightCardSetup state={state} onStateChange={updateState} />}
          {activeTab === 'rankings' && <FighterRankings state={state} />}
          {activeTab === 'weightclasses' && <WeightClasses state={state} />}
          {activeTab === 'profile' && <FighterProfile state={state} onStateChange={updateState} />}
        </div>
      </div>
    </div>
  );
}