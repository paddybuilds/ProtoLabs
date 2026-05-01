'use client';

import { DevKitState } from '@/lib/dev-kit/types';
import { Users, Trophy, Calendar, Gamepad2 } from 'lucide-react';

interface AdminDashboardProps {
  state: DevKitState;
  onStateChange: (updates: Partial<DevKitState>) => void;
}

export function AdminDashboard({ state, onStateChange }: AdminDashboardProps) {
  const p = state.owner.primaryColor;
  const a = state.owner.accentColor;
  
  const stats = [
    { label: 'Teams', value: state.teams.length, icon: Users },
    { label: 'Players', value: state.players.length, icon: Gamepad2 },
    { label: 'Matches', value: 24, icon: Trophy },
    { label: 'Tournaments', value: 3, icon: Calendar },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-white">Admin Dashboard</h3>

      <div className="grid grid-cols-2 gap-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-3 bg-[#1a2a1a] border border-white/10 rounded-lg"
          >
            <div className="flex items-center gap-2 mb-1">
              <stat.icon size={14} style={{ color: a }} />
              <span className="text-xs text-white/60">{stat.label}</span>
            </div>
            <span className="text-lg font-bold" style={{ color: a }}>{stat.value}</span>
          </div>
        ))}
      </div>

      <div>
        <h4 className="text-sm font-medium text-white mb-2">League Table</h4>
        <div className="rounded-lg overflow-hidden" style={{ backgroundColor: p }}>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-2 py-2 text-left text-white/60 font-medium">Pos</th>
                <th className="px-2 py-2 text-left text-white/60 font-medium">Team</th>
                <th className="px-2 py-2 text-center text-white/60 font-medium">P</th>
                <th className="px-2 py-2 text-center text-white/60 font-medium">W</th>
                <th className="px-2 py-2 text-center text-white/60 font-medium">D</th>
                <th className="px-2 py-2 text-center text-white/60 font-medium">L</th>
                <th className="px-2 py-2 text-center text-white/60 font-medium">Pts</th>
              </tr>
            </thead>
            <tbody>
              {state.leagueTable.map((entry, index) => (
                <tr
                  key={entry.teamId}
                  className="border-b border-white/10 hover:bg-white/10"
                >
                  <td className="px-2 py-2 text-white/80">{index + 1}</td>
                  <td className="px-2 py-2 text-white font-medium">{entry.teamName}</td>
                  <td className="px-2 py-2 text-center text-white/60">{entry.played}</td>
                  <td className="px-2 py-2 text-center text-white/60">{entry.won}</td>
                  <td className="px-2 py-2 text-center text-white/60">{entry.drawn}</td>
                  <td className="px-2 py-2 text-center text-white/60">{entry.lost}</td>
                  <td className="px-2 py-2 text-center font-bold" style={{ color: a }}>{entry.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button 
          className="px-3 py-2 border border-white/10 rounded-md text-sm font-medium hover:opacity-80 transition-colors"
          style={{ backgroundColor: p, color: 'white' }}
        >
          Manage Teams
        </button>
        <button className="px-3 py-2 bg-[#1a2a1a] border border-white/10 rounded-md text-white/60 text-sm hover:text-white transition-colors">
          Manage Players
        </button>
      </div>
    </div>
  );
}