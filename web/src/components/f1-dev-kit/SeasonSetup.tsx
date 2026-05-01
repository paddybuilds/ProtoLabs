'use client';

import { useState } from 'react';
import { Plus, Pencil, Trash2, X, Calendar, CloudRain, Sun } from 'lucide-react';
import { F1DevKitState } from '@/lib/f1-dev-kit/types';
import { smallF1ColorPalette } from '@/lib/f1-dev-kit/mock-data';

interface SeasonSetupProps {
  state: F1DevKitState;
  onStateChange: (updates: Partial<F1DevKitState>) => void;
}

export function SeasonSetup({ state, onStateChange }: SeasonSetupProps) {
  const [showAddRound, setShowAddRound] = useState(false);
  const [newRoundName, setNewRoundName] = useState('');

  const p = state.owner.primaryColor;
  const a = state.owner.accentColor;

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-white">Season Setup</h3>

      <div className="space-y-3">
        <div>
          <label className="block text-xs text-white/60 mb-1">Season Name</label>
          <input
            type="text"
            value={state.seasonSettings.name}
            onChange={(e) => onStateChange({ seasonSettings: { ...state.seasonSettings, name: e.target.value } })}
            className="w-full px-3 py-2 bg-[#2d1f1f] border border-white/10 rounded-md text-white text-sm focus:outline-none focus:border-white/30"
          />
        </div>

        <div>
            <label className="block text-xs text-white/60 mb-1">Rounds</label>
            <input
              type="number"
              value={state.seasonSettings.rounds}
              onChange={(e) => onStateChange({ seasonSettings: { ...state.seasonSettings, rounds: parseInt(e.target.value) || 0 } })}
              className="w-full px-3 py-2 bg-[#2d1f1f] border border-white/10 rounded-md text-white text-sm focus:outline-none focus:border-white/30"
            />
          </div>

          <div>
            <label className="block text-xs text-white/60 mb-1">Point System</label>
            <select
              value={state.seasonSettings.pointSystem}
              onChange={(e) => onStateChange({ seasonSettings: { ...state.seasonSettings, pointSystem: e.target.value as 'standard' | 'sprint' } })}
              className="w-full px-3 py-2 bg-[#2d1f1f] border border-white/10 rounded-md text-white text-sm focus:outline-none focus:border-white/30"
            >
              <option value="standard">Standard (25-18-15)</option>
              <option value="sprint">Sprint (25-18-15-12-10)</option>
            </select>
          </div>

        <div>
          <label className="block text-xs text-white/60 mb-1">Weather</label>
          <div className="flex gap-2">
            <button
              onClick={() => onStateChange({ seasonSettings: { ...state.seasonSettings, weather: 'realistic' } })}
              className={`flex flex-1 items-center justify-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${state.seasonSettings.weather === 'realistic' ? 'text-white' : 'text-white/40 hover:text-white/60'}`}
              style={{ backgroundColor: state.seasonSettings.weather === 'realistic' ? a + '20' : '#2d1f1f', borderColor: state.seasonSettings.weather === 'realistic' ? a : 'transparent', borderWidth: '1px' }}
            >
              <CloudRain size={14} style={{ color: a }} />
              Realistic
            </button>
            <button
              onClick={() => onStateChange({ seasonSettings: { ...state.seasonSettings, weather: 'fixed' } })}
              className={`flex flex-1 items-center justify-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${state.seasonSettings.weather === 'fixed' ? 'text-white' : 'text-white/40 hover:text-white/60'}`}
              style={{ backgroundColor: state.seasonSettings.weather === 'fixed' ? a + '20' : '#2d1f1f', borderColor: state.seasonSettings.weather === 'fixed' ? a : 'transparent', borderWidth: '1px' }}
            >
              <Sun size={14} style={{ color: a }} />
              Fixed
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs text-white/60 mb-1">Accent Colour</label>
          <div className="flex flex-wrap gap-1">
            {smallF1ColorPalette.map((color) => (
              <button
                key={`accent-${color.name}`}
                onClick={() => onStateChange({ owner: { ...state.owner, accentColor: color.accent } })}
                className={`w-6 h-6 rounded border ${state.owner.accentColor === color.accent ? 'border-white' : 'border-transparent'}`}
                style={{ backgroundColor: color.accent }}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-white/60">Upcoming Races</span>
          <button
            onClick={() => setShowAddRound(!showAddRound)}
            className="flex items-center gap-1 text-xs hover:opacity-80"
            style={{ color: a }}
          >
            <Plus size={12} />
            Add Round
          </button>
        </div>

        {showAddRound && (
          <div className="mb-3 p-3 bg-[#2d1f1f] border border-white/10 rounded-md">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Race name"
                value={newRoundName}
                onChange={(e) => setNewRoundName(e.target.value)}
                className="flex-1 px-3 py-2 bg-[#251a1a] border border-white/10 rounded-md text-white text-sm focus:outline-none focus:border-white/30"
              />
              <button
                onClick={() => { setNewRoundName(''); setShowAddRound(false); }}
                className="px-3 py-2 text-white text-sm rounded-md hover:opacity-80"
                style={{ backgroundColor: p }}
              >
                Add
              </button>
              <button onClick={() => setShowAddRound(false)} className="p-2 text-white/60 hover:text-white">
                <X size={14} />
              </button>
            </div>
          </div>
        )}

        <div className="space-y-1 max-h-32 overflow-y-auto">
          <div className="flex items-center justify-between px-3 py-2 bg-[#2d1f1f] rounded-md">
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/40 font-mono">R1</span>
              <span className="text-sm text-white">Bahrain Grand Prix</span>
            </div>
            <Calendar size={12} className="text-white/40" />
          </div>
          <div className="flex items-center justify-between px-3 py-2 bg-[#2d1f1f] rounded-md">
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/40 font-mono">R2</span>
              <span className="text-sm text-white">Saudi Arabian GP</span>
            </div>
            <Calendar size={12} className="text-white/40" />
          </div>
          <div className="flex items-center justify-between px-3 py-2 bg-[#2d1f1f] rounded-md">
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/40 font-mono">R3</span>
              <span className="text-sm text-white">Australian GP</span>
            </div>
            <Calendar size={12} className="text-white/40" />
          </div>
        </div>
      </div>
    </div>
  );
}