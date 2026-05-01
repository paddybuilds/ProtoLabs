'use client';

import { useState } from 'react';
import { DevKitState, Contract, Application, InviteLink, ActivityLogEntry } from '@/lib/dev-kit/types';
import { Check, X, UserPlus, Link as LinkIcon, FileText, UserMinus, Clock, Users } from 'lucide-react';

interface ManagerViewProps {
  state: DevKitState;
  onStateChange: (updates: Partial<DevKitState>) => void;
}

export function ManagerView({ state, onStateChange }: ManagerViewProps) {
  const p = state.owner.primaryColor;
  const a = state.owner.accentColor;

  const addActivityLog = (message: string) => {
    const newEntry: ActivityLogEntry = {
      id: `log-${Date.now()}`,
      message,
      timestamp: new Date().toISOString(),
    };
    onStateChange({
      activityLog: [newEntry, ...state.activityLog],
    });
  };

  const handleAcceptApplication = (appId: string, playerName: string) => {
    if (isSquadFull) return;
    
    const updatedApps = state.applications.map((app) =>
      app.id === appId ? { ...app, status: 'accepted' as const } : app
    );
    onStateChange({ applications: updatedApps });
    addActivityLog(`${playerName} application accepted`);
    
    const matchedContract = state.contracts.find((c) => c.playerName === playerName);
    if (matchedContract) {
      const updatedContracts = state.contracts.map((c) =>
        c.playerName === playerName
          ? { ...c, gamesRemaining: c.gamesRemaining - 1 }
          : c
      );
      onStateChange({ contracts: updatedContracts });
    }
  };

  const handleRejectApplication = (appId: string, playerName: string) => {
    const updatedApps = state.applications.map((app) =>
      app.id === appId ? { ...app, status: 'rejected' as const } : app
    );
    onStateChange({ applications: updatedApps });
    addActivityLog(`${playerName} application rejected`);
  };

  const handleReleaseContract = (contractId: string, playerName: string) => {
    const updatedContracts = state.contracts.filter((c) => c.id !== contractId);
    onStateChange({ contracts: updatedContracts });
    addActivityLog(`${playerName} has been released from contract`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted': return 'text-green-400 bg-green-400/10';
      case 'pending': return 'text-yellow-400 bg-yellow-400/10';
      case 'rejected': case 'expired': return 'text-red-400 bg-red-400/10';
      default: return 'text-white/60 bg-white/10';
    }
  };

  const MAX_SQUAD_SIZE = 24;
  const currentSquadSize = state.contracts.length + state.applications.filter((a) => a.status === 'accepted').length + state.players.filter((pl) => pl.teamId).length;
  const isSquadFull = currentSquadSize >= MAX_SQUAD_SIZE;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Manager View</h3>
        <div className="flex items-center gap-2">
          <Users size={14} style={{ color: a }} />
          <span className="text-sm">
            <span style={{ color: isSquadFull ? a : 'rgba(255,255,255,0.6)' }}>{currentSquadSize}</span>
            <span className="text-white/40">/{MAX_SQUAD_SIZE}</span>
          </span>
        </div>
      </div>

      {/* Applications */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <UserPlus size={14} style={{ color: a }} />
          <span className="text-sm font-medium text-white">Applications</span>
          <span className="text-xs text-white/40">
            ({state.applications.filter((a) => a.status === 'pending').length} pending)
          </span>
        </div>
        <div className="space-y-2 overflow-y-auto custom-scrollbar">
          {state.applications.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between p-2 bg-[#1a2a1a] rounded-md"
            >
              <div>
                <span className="text-sm text-white">{app.playerName}</span>
                <span className="ml-2 text-[10px] text-white/40">
                  {new Date(app.timestamp).toLocaleDateString()}
                </span>
              </div>
              {app.status === 'pending' ? (
                <div className="flex gap-1">
                  <button
                    onClick={() => handleAcceptApplication(app.id, app.playerName)}
                    disabled={isSquadFull}
                    className={`p-1 rounded ${isSquadFull ? 'opacity-30 cursor-not-allowed' : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'}`}
                  >
                    <Check size={12} />
                  </button>
                  <button
                    onClick={() => handleRejectApplication(app.id, app.playerName)}
                    className="p-1 rounded bg-red-500/20 text-red-400 hover:bg-red-500/30"
                  >
                    <X size={12} />
                  </button>
                </div>
              ) : (
                <span className={`text-[10px] px-2 py-0.5 rounded ${getStatusColor(app.status)}`}>
                  {app.status}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Invite Links */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <LinkIcon size={14} style={{ color: a }} />
          <span className="text-sm font-medium text-white">Invite Links</span>
        </div>
        <div className="space-y-2">
          {state.inviteLinks.map((invite) => (
            <div
              key={invite.id}
              className="flex items-center justify-between p-2 bg-[#1a2a1a] rounded-md"
            >
              <span className="text-sm text-white font-mono">{invite.code}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded ${getStatusColor(invite.status)}`}>
                {invite.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Log */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <FileText size={14} style={{ color: a }} />
          <span className="text-sm font-medium text-white">Activity Log</span>
        </div>
        <div className="space-y-1 max-h-28 overflow-y-auto bg-[#1a2a1a] rounded-md p-2 custom-scrollbar">
          {state.activityLog.map((entry) => (
            <div key={entry.id} className="text-xs">
              <span className="text-white/60">{entry.message}</span>
              <span className="ml-2 text-white/30">
                {new Date(entry.timestamp).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contracts */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Clock size={14} style={{ color: a }} />
          <span className="text-sm font-medium text-white">Contracts</span>
        </div>
        <div className="space-y-2">
          {state.contracts.map((contract) => (
            <div
              key={contract.id}
              className="flex items-center justify-between p-2 bg-[#1a2a1a] rounded-md"
            >
              <div>
                <span className="text-sm text-white">{contract.playerName}</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <Clock size={10} className="text-white/40" />
                  <span className="text-xs" style={{ color: a }}>
                    {contract.gamesRemaining}/{contract.totalGames} games
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleReleaseContract(contract.id, contract.playerName)}
                className="p-1.5 rounded bg-red-500/10 text-red-400 hover:bg-red-500/20"
              >
                <UserMinus size={12} />
              </button>
            </div>
          ))}
          {state.contracts.length === 0 && (
            <div className="text-xs text-white/40 p-2">No active contracts</div>
          )}
        </div>
      </div>
    </div>
  );
}