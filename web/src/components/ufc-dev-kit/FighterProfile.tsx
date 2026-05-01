"use client";

import { UFCDevKitState } from "@/lib/ufc-dev-kit/types";

interface Props {
  state: UFCDevKitState;
  onStateChange: (updates: Partial<UFCDevKitState>) => void;
}

function DiscordIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function FighterProfile({ state, onStateChange }: Props) {
  const pendingApps = state.applications.filter((a) => a.status === "pending");

  const handleAccept = (appIndex: number) => {
    const app = pendingApps[appIndex];
    if (!app) return;
    onStateChange({
      applications: state.applications.map((a) =>
        a.id === app.id ? { ...a, status: "accepted" as const } : a
      ),
    });
  };

  const handleReject = (appIndex: number) => {
    const app = pendingApps[appIndex];
    if (!app) return;
    onStateChange({
      applications: state.applications.map((a) =>
        a.id === app.id ? { ...a, status: "rejected" as const } : a
      ),
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-[#fbbf24]">Applications ({pendingApps.length})</h3>
      <div className="flex flex-col gap-2">
        {state.applications.map((app) => (
          <div
            key={app.id}
            className={`rounded-lg border p-2.5 flex flex-col gap-1.5 ${
              app.status === "accepted"
                ? "bg-green-500/10 border-green-500/20"
                : app.status === "rejected"
                ? "bg-red-500/10 border-red-500/20 opacity-50"
                : "bg-[#fbbf24]/[0.05] border-white/10"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-medium text-white">{app.fighterName}</span>
                    <a
                      href={`https://discord.com/users/${app.discordUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5865F2] hover:text-[#7289da] transition-colors"
                    >
                      <DiscordIcon size={12} />
                    </a>
                  </div>
                  <div className="text-[10px] text-white/30 font-mono">@&lt;Discord ID&gt;</div>
                  <div className="text-[10px] text-white/40">{app.weightClass}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                {app.status === "pending" ? (
                  <>
                    <button
                      onClick={() => handleAccept(state.applications.findIndex((a) => a.id === app.id))}
                      className="flex items-center justify-center w-5 h-5 rounded bg-green-500/20 border border-green-500/40 text-green-400 text-[10px] font-bold hover:bg-green-500/30 transition-colors"
                    >
                      A
                    </button>
                    <span className="text-white/20 text-[10px]">|</span>
                    <button
                      onClick={() => handleReject(state.applications.findIndex((a) => a.id === app.id))}
                      className="flex items-center justify-center w-5 h-5 rounded bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] font-bold hover:bg-red-500/30 transition-colors"
                    >
                      R
                    </button>
                  </>
                ) : app.status === "accepted" ? (
                  <span className="text-[10px] font-bold text-green-400 bg-green-500/20 border border-green-500/40 rounded px-1.5 py-0.5">Accepted</span>
                ) : (
                  <span className="text-[10px] font-bold text-red-400 bg-red-500/20 border border-red-500/40 rounded px-1.5 py-0.5">Rejected</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}