'use client';

import { F1DevKitState } from '@/lib/f1-dev-kit/types';
import { Trophy, Clock, Flag } from 'lucide-react';

interface DriverStandingsProps {
  state: F1DevKitState;
  onStateChange: (updates: Partial<F1DevKitState>) => void;
}

export function DriverStandings({ state, onStateChange }: DriverStandingsProps) {
  const p = state.owner.primaryColor;
  const a = state.owner.accentColor;

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-white">Driver Standings</h3>

      <div className="grid grid-cols-2 gap-2">
        <div className="p-3 bg-[#2d1f1f] border border-white/10 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Trophy size={14} style={{ color: a }} />
            <span className="text-xs text-white/60">Championship Leader</span>
          </div>
          <span className="text-lg font-bold" style={{ color: a }}>
            {state.driverStandings[0]?.points || 0} pts
          </span>
        </div>
        <div className="p-3 bg-[#2d1f1f] border border-white/10 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Flag size={14} style={{ color: a }} />
            <span className="text-xs text-white/60">Wins</span>
          </div>
          <span className="text-lg font-bold" style={{ color: a }}>
            {state.driverStandings.reduce((sum, d) => sum + d.wins, 0)}
          </span>
        </div>
        <div className="p-3 bg-[#2d1f1f] border border-white/10 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Trophy size={14} className="text-white/40" />
            <span className="text-xs text-white/60">Teams</span>
          </div>
          <span className="text-lg font-bold text-white">
            {state.constructorStandings.length}
          </span>
        </div>
        <div className="p-3 bg-[#2d1f1f] border border-white/10 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Clock size={14} className="text-white/40" />
            <span className="text-xs text-white/60">Fastest Laps</span>
          </div>
          <span className="text-lg font-bold text-white">
            {state.driverStandings.reduce((sum, d) => sum + d.fastestLaps, 0)}
          </span>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-white mb-2">Driver Table</h4>
        <div className="rounded-lg overflow-hidden" style={{ backgroundColor: p }}>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-2 py-2 text-left text-white/60 font-medium">Pos</th>
                <th className="px-2 py-2 text-left text-white/60 font-medium">Driver</th>
                <th className="px-2 py-2 text-center text-white/60 font-medium">Pts</th>
                <th className="px-2 py-2 text-center text-white/60 font-medium">W</th>
                <th className="px-2 py-2 text-center text-white/60 font-medium">FL</th>
              </tr>
            </thead>
            <tbody>
              {state.driverStandings.map((entry) => (
                <tr key={entry.driverId} className="border-b border-white/10 hover:bg-white/10">
                  <td className="px-2 py-2 text-white/80">{entry.position}</td>
                  <td className="px-2 py-2">
                    <div className="text-white font-medium">{entry.driverName}</div>
                    <div className="text-white/40 text-[10px]">{entry.teamName}</div>
                  </td>
                  <td className="px-2 py-2 text-center font-bold" style={{ color: a }}>{entry.points}</td>
                  <td className="px-2 py-2 text-center text-white/60">{entry.wins}</td>
                  <td className="px-2 py-2 text-center text-white/60">{entry.fastestLaps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}