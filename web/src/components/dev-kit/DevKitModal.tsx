'use client';

import { useState } from 'react';
import { X, Settings, LayoutDashboard, Users, User } from 'lucide-react';
import { DevKitState } from '@/lib/dev-kit/types';
import { initialDevKitState } from '@/lib/dev-kit/mock-data';
import { AdminLeagueBuilder } from './AdminLeagueBuilder';
import { AdminDashboard } from './AdminDashboard';
import { ManagerView } from './ManagerView';
import { PlayerTable } from './PlayerTable';

interface DevKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabId = 'admin-builder' | 'admin-dashboard' | 'manager' | 'player';

export function DevKitModal({ isOpen, onClose }: DevKitModalProps) {
  const [activeTab, setActiveTab] = useState<TabId>('admin-builder');
  const [state, setState] = useState<DevKitState>(initialDevKitState);

  if (!isOpen) return null;

  const p = state.owner.primaryColor;
  const a = state.owner.accentColor;

  const tabs: { id: TabId; label: string; icon: typeof Settings }[] = [
    { id: 'admin-builder', label: 'League Builder', icon: Settings },
    { id: 'admin-dashboard', label: 'Admin View', icon: LayoutDashboard },
    { id: 'manager', label: 'Manager View', icon: Users },
    { id: 'player', label: 'Player View', icon: User },
  ];

  const updateState = (updates: Partial<DevKitState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      
      <div 
        className="relative w-full max-w-[95vw] lg:max-w-[1400px] max-h-[90vh] rounded-xl overflow-hidden flex flex-col"
        style={{ backgroundColor: p + '10', borderColor: p + '30', borderWidth: '1px' }}
      >
        <style>{`
          .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(10, 20, 8, 0.3); border-radius: 3px; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(34, 197, 94, 0.35); border-radius: 3px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(34, 197, 94, 0.6); }
        `}</style>
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white">FC26 Dev Kit Preview</h2>
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
                  backgroundColor: activeTab === tab.id ? p + '30' : 'transparent',
                  color: activeTab === tab.id ? p : 'rgba(255,255,255,0.6)'
                }}
              >
                <tab.icon size={14} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 lg:p-6 custom-scrollbar">
          <div className="hidden lg:grid lg:grid-cols-4 gap-3 lg:gap-4">
            <div className="lg:col-span-1 min-w-[280px] bg-[#0a1408] border border-white/10 rounded-lg p-4">
              <AdminLeagueBuilder state={state} onStateChange={updateState} />
            </div>
            <div className="lg:col-span-1 min-w-[280px] bg-[#0a1408] border border-white/10 rounded-lg p-4">
              <AdminDashboard state={state} onStateChange={updateState} />
            </div>
            <div className="lg:col-span-1 min-w-[280px] bg-[#0a1408] border border-white/10 rounded-lg p-4">
              <ManagerView state={state} onStateChange={updateState} />
            </div>
            <div className="lg:col-span-1 min-w-[280px] bg-[#0a1408] border border-white/10 rounded-lg p-4">
              <PlayerTable state={state} />
            </div>
          </div>

          <div className="lg:hidden">
            {activeTab === 'admin-builder' && (
              <AdminLeagueBuilder state={state} onStateChange={updateState} />
            )}
            {activeTab === 'admin-dashboard' && (
              <AdminDashboard state={state} onStateChange={updateState} />
            )}
            {activeTab === 'manager' && (
              <ManagerView state={state} onStateChange={updateState} />
            )}
            {activeTab === 'player' && (
              <PlayerTable state={state} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}