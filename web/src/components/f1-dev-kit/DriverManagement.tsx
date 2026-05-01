'use client';

import { useState } from 'react';
import { F1DevKitState } from '@/lib/f1-dev-kit/types';
import { Check, X, UserPlus, Link as LinkIcon, Clock, UserMinus, FileText } from 'lucide-react';

interface DriverManagementProps {
  state: F1DevKitState;
}

export function DriverManagement({ state }: DriverManagementProps) {
  const [showApply, setShowApply] = useState(false);

  const p = state.owner.primaryColor;
  const a = state.owner.accentColor;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted': return 'text-green-400 bg-green-400/10';
      case 'pending': return 'text-yellow-400 bg-yellow-400/10';
      case 'rejected': case 'expired': return 'text-red-400 bg-red-400/10';
      default: return 'text-white/60 bg-white/10';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-white">Driver Management</h3>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <FileText size={14} style={{ color: a }} />
          <span className="text-sm font-medium text-white">Contracts</span>
          <span className="text-xs text-white/40">({state.contracts.length} active)</span>
        </div>
        <div className="space-y-2 max-h-32 overflow-y-auto">
          {state.contracts.map((contract) => (
            <div key={contract.id} className="flex items-center justify-between p-2 bg-[#2d1f1f] rounded-md">
              <div>
                <span className="text-sm text-white">{contract.driverName}</span>
                <div className="flex items-center gap-1 mt-0.5 text-xs text-white/40">
                  <span>{contract.teamName}</span>
                  <span>·</span>
                  <Clock size={10} />
                  <span style={{ color: a }}>{contract.racesRemaining}/{contract.races}</span>
                </div>
              </div>
            </div>
          ))}
          {state.contracts.length === 0 && (
            <div className="text-xs text-white/40 p-2">No active contracts</div>
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <UserPlus size={14} style={{ color: a }} />
          <span className="text-sm font-medium text-white">Applications</span>
          <span className="text-xs text-white/40">({state.applications.filter((a) => a.status === 'pending').length} pending)</span>
        </div>
        <div className="space-y-2">
          {state.applications.map((app) => (
            <div key={app.id} className="flex items-center justify-between p-2 bg-[#2d1f1f] rounded-md">
              <div>
                <span className="text-sm text-white">{app.driverName}</span>
                <div className="flex items-center gap-2 mt-0.5 text-xs text-white/40">
                  <span>{app.teamName}</span>
                  <span>·</span>
                  <span>{new Date(app.timestamp).toLocaleDateString()}</span>
                </div>
              </div>
              {app.status === 'pending' ? (
                <div className="flex gap-1">
                  <button className="p-1 rounded bg-green-500/20 text-green-400 hover:bg-green-500/30">
                    <Check size={12} />
                  </button>
                  <button className="p-1 rounded bg-red-500/20 text-red-400 hover:bg-red-500/30">
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

      <div>
        <div className="flex items-center gap-2 mb-2">
          <LinkIcon size={14} style={{ color: a }} />
          <span className="text-sm font-medium text-white">Invite Links</span>
        </div>
        <div className="space-y-2">
          {state.inviteLinks.map((invite) => (
            <div key={invite.id} className="flex items-center justify-between p-2 bg-[#2d1f1f] rounded-md">
              <span className="text-sm text-white font-mono">{invite.code}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded ${getStatusColor(invite.status)}`}>
                {invite.status}
              </span>
            </div>
          ))}
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

        <div className="relative">
          <input
            type="text"
            placeholder="Enter invite code"
            className="w-full pl-9 pr-3 py-2 bg-[#2d1f1f] border border-white/10 rounded-md text-white text-sm focus:outline-none focus:border-white/30"
          />
          <LinkIcon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
        </div>
      </div>
    </div>
  );
}