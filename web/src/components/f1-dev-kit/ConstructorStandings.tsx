'use client';

import { F1DevKitState } from '@/lib/f1-dev-kit/types';
import { Users } from 'lucide-react';

interface ConstructorStandingsProps {
  state: F1DevKitState;
  onStateChange: (updates: Partial<F1DevKitState>) => void;
}

export function ConstructorStandings({ state, onStateChange }: ConstructorStandingsProps) {
  const p = state.owner.primaryColor;
  const a = state.owner.accentColor;

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-white">Constructor Standings</h3>

      <div className="grid grid-cols-2 gap-2">
        <div className="p-3 bg-[#2d1f1f] border border-white/10 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Users size={14} style={{ color: a }} />
            <span className="text-xs text-white/60">Teams</span>
          </div>
          <span className="text-lg font-bold" style={{ color: a }}>
            {state.constructorStandings.length}
          </span>
        </div>
        <div className="p-3 bg-[#2d1f1f] border border-white/10 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Users size={14} className="text-white/40" />
            <span className="text-xs text-white/60">Drivers</span>
          </div>
          <span className="text-lg font-bold text-white">
            {state.driverStandings.length}
          </span>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-white mb-2">Constructor Table</h4>
        <div className="rounded-lg overflow-hidden" style={{ backgroundColor: p }}>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-2 py-2 text-left text-white/60 font-medium">Pos</th>
                <th className="px-2 py-2 text-left text-white/60 font-medium">Team</th>
                <th className="px-2 py-2 text-center text-white/60 font-medium">Pts</th>
              </tr>
            </thead>
            <tbody>
              {state.constructorStandings.map((entry) => (
                <tr key={entry.constructorId} className="border-b border-white/10 hover:bg-white/10">
                  <td className="px-2 py-2 text-white/80">{entry.position}</td>
                  <td className="px-2 py-2">
                    <div className="text-white font-medium">{entry.constructorName}</div>
                    <div className="flex gap-2 mt-0.5 text-[10px] text-white/40">
                      {entry.drivers.map((d) => (
                        <span key={d.name}>{d.name} ({d.points}pts)</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-2 py-2 text-center font-bold" style={{ color: a }}>{entry.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}