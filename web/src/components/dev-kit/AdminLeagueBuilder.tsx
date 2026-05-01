'use client';

import { useState } from 'react';
import { Plus, Pencil, Trash2, X, Calendar } from 'lucide-react';
import { DevKitState, Team, Player } from '@/lib/dev-kit/types';
import { smallColorPalette } from '@/lib/dev-kit/mock-data';

interface AdminLeagueBuilderProps {
  state: DevKitState;
  onStateChange: (updates: Partial<DevKitState>) => void;
}

export function AdminLeagueBuilder({ state, onStateChange }: AdminLeagueBuilderProps) {
  const [showAddTeam, setShowAddTeam] = useState(false);
  const [showEditTeam, setShowEditTeam] = useState<string | null>(null);
  const [newTeamName, setNewTeamName] = useState('');
  const [newTeamExpiry, setNewTeamExpiry] = useState('');
  const [newPlayerName, setNewPlayerName] = useState('');

  const p = state.owner.primaryColor;
  const a = state.owner.accentColor;

  const handleAddTeam = () => {
    if (!newTeamName.trim()) return;
    
    const team: Team = {
      id: `team-${Date.now()}`,
      ownerId: state.owner.id,
      name: newTeamName.trim(),
      expiresAt: newTeamExpiry || null,
      createdAt: new Date().toISOString(),
      players: [],
    };

    onStateChange({
      teams: [...state.teams, team],
    });

    setNewTeamName('');
    setNewTeamExpiry('');
    setShowAddTeam(false);
  };

  const handleDeleteTeam = (teamId: string) => {
    onStateChange({
      teams: state.teams.filter((t) => t.id !== teamId),
    });
  };

  const handleAddPlayerToTeam = (teamId: string) => {
    if (!newPlayerName.trim()) return;

    const player: Player = {
      id: `player-${Date.now()}`,
      ownerId: state.owner.id,
      name: newPlayerName.trim(),
      teamId: teamId,
    };

    const updatedTeams = state.teams.map((t) => {
      if (t.id === teamId) {
        return { ...t, players: [...t.players, player] };
      }
      return t;
    });

    onStateChange({
      teams: updatedTeams,
      players: [...state.players, player],
    });

    setNewPlayerName('');
    setShowEditTeam(null);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-white">League Builder</h3>

      <div className="space-y-3">
        <div>
          <label className="block text-xs text-white/60 mb-1">Community Name</label>
          <input
            type="text"
            value={state.owner.communityName}
            onChange={(e) => onStateChange({ owner: { ...state.owner, communityName: e.target.value } })}
            className="w-full px-3 py-2 bg-[#1a2a1a] border border-white/10 rounded-md text-white text-sm focus:outline-none focus:border-white/30"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs text-white/60 mb-1">Table Background</label>
            <div className="flex flex-wrap gap-1">
              {smallColorPalette.map((color) => (
                <button
                  key={`primary-${color.name}`}
                  onClick={() => onStateChange({ owner: { ...state.owner, primaryColor: color.primary } })}
                  className={`w-6 h-6 rounded border ${
                    state.owner.primaryColor === color.primary ? 'border-white' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: color.primary }}
                />
              ))}
            </div>
            <span className="text-[10px] text-white/40">more colours on the full dev kit</span>
          </div>
          <div>
            <label className="block text-xs text-white/60 mb-1">Accents</label>
            <div className="flex flex-wrap gap-1">
              {smallColorPalette.map((color) => (
                <button
                  key={`accent-${color.name}`}
                  onClick={() => onStateChange({ owner: { ...state.owner, accentColor: color.accent } })}
                  className={`w-6 h-6 rounded border ${
                    state.owner.accentColor === color.accent ? 'border-white' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: color.accent }}
                />
              ))}
            </div>
            <span className="text-[10px] text-white/40">more colours on the full dev kit</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-xs text-white/60 mb-1">Logo Preview</label>
            <span className="text-[10px] text-white/40">ELO Labs</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-[#1a2a1a] border border-white/10 rounded-md">
            <div 
              className="grid h-10 w-10 place-items-center rounded-md border border-white/10"
              style={{ backgroundColor: '#18181b', color: a }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">Community Logo</span>
              <span className="text-[10px] text-white/40">Appears on league tables</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs text-white/60">Teams</label>
          <button
            onClick={() => setShowAddTeam(true)}
            className="flex items-center gap-1 text-xs hover:opacity-80"
            style={{ color: p }}
          >
            <Plus size={12} />
            Add Team
          </button>
        </div>

        {showAddTeam && (
          <div className="mb-3 p-3 bg-[#1a2a1a] border border-white/10 rounded-md">
            <input
              type="text"
              placeholder="Team name"
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
              className="w-full mb-2 px-3 py-2 bg-[#0a1408] border border-white/10 rounded-md text-white text-sm focus:outline-none focus:border-white/30"
            />
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={newTeamExpiry}
                onChange={(e) => setNewTeamExpiry(e.target.value)}
                className="flex-1 px-3 py-2 bg-[#0a1408] border border-white/10 rounded-md text-white text-sm focus:outline-none focus:border-white/30"
              />
              <button
                onClick={handleAddTeam}
                className="px-3 py-2 text-white text-sm rounded-md hover:opacity-80"
                style={{ backgroundColor: p }}
              >
                Add
              </button>
              <button
                onClick={() => setShowAddTeam(false)}
                className="p-2 text-white/60 hover:text-white"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        )}

        <div className="space-y-1">
          {state.teams.map((team) => (
            <div
              key={team.id}
              className="flex items-center justify-between px-3 py-2 bg-[#1a2a1a] rounded-md group"
            >
              <div>
                <span className="text-sm text-white">{team.name}</span>
                {team.expiresAt && (
                  <span className="ml-2 text-xs text-amber-400">
                    <Calendar size={10} className="inline" /> {new Date(team.expiresAt).toLocaleDateString()}
                  </span>
                )}
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setShowEditTeam(team.id)}
                  className="p-1 text-white/60 hover:text-white"
                >
                  <Pencil size={12} />
                </button>
                <button
                  onClick={() => handleDeleteTeam(team.id)}
                  className="p-1 text-white/60 hover:text-red-400"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {showEditTeam && (
          <div className="mt-3 p-3 bg-[#1a2a1a] border border-white/10 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white font-medium">Edit Team</span>
              <button onClick={() => setShowEditTeam(null)} className="text-white/60 hover:text-white">
                <X size={14} />
              </button>
            </div>
            <div className="mb-2">
              <span className="text-xs text-white/60">Players</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {state.teams
                  .find((t) => t.id === showEditTeam)
                  ?.players.map((p) => (
                    <span
                      key={p.id}
                      className="px-2 py-1 bg-[#0a1408] rounded text-xs text-white"
                    >
                      {p.name}
                    </span>
                  ))}
                {state.teams.find((t) => t.id === showEditTeam)?.players.length === 0 && (
                  <span className="text-xs text-white/40">No players yet</span>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add player"
                value={newPlayerName}
                onChange={(e) => setNewPlayerName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddPlayerToTeam(showEditTeam)}
                className="flex-1 px-3 py-2 bg-[#0a1408] border border-white/10 rounded-md text-white text-sm focus:outline-none focus:border-white/30"
              />
              <button
                onClick={() => handleAddPlayerToTeam(showEditTeam)}
                className="px-3 py-2 text-white text-sm rounded-md hover:opacity-80"
                style={{ backgroundColor: p }}
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}