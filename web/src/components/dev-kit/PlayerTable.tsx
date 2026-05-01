'use client';

import { useState } from 'react';
import { DevKitState } from '@/lib/dev-kit/types';
import { UserPlus, Link } from 'lucide-react';

interface PlayerTableProps {
  state: DevKitState;
}

export function PlayerTable({ state }: PlayerTableProps) {
  const [showApply, setShowApply] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  
  const p = state.owner.primaryColor;
  const a = state.owner.accentColor;

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-white">Player View</h3>

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

      <div className="space-y-2">
        <button
          onClick={() => setShowApply(!showApply)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-white/10 rounded-md text-sm font-medium hover:opacity-80 transition-colors"
          style={{ backgroundColor: p + '30', color: 'white' }}
        >
          <UserPlus size={14} />
          Apply to Team
        </button>

        {showApply && (
          <div className="p-3 bg-[#1a2a1a] border border-white/10 rounded-md space-y-2">
            <span className="text-xs text-white/60">Select a team to apply to:</span>
            <div className="space-y-1">
              {state.teams.map((team) => (
                <button
                  key={team.id}
                  className="w-full px-3 py-2 bg-[#0a1408] rounded text-sm text-white text-left hover:opacity-80"
                  style={{ backgroundColor: p + '20' }}
                >
                  {team.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="relative">
          <input
            type="text"
            placeholder="Enter invitation link"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-[#1a2a1a] border border-white/10 rounded-md text-white text-sm focus:outline-none focus:border-white/30"
          />
          <Link
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
          />
        </div>
      </div>
    </div>
  );
}