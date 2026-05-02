"use client";

import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Users,
} from "lucide-react";
import { useState } from "react";
import { DevKitModal } from "@/components/dev-kit";
import { AdminLeagueBuilder } from "@/components/dev-kit/AdminLeagueBuilder";
import { AdminDashboard } from "@/components/dev-kit/AdminDashboard";
import { ManagerView } from "@/components/dev-kit/ManagerView";
import { PlayerTable } from "@/components/dev-kit/PlayerTable";
import { MobileNav } from "@/components/MobileNav";
import { initialDevKitState } from "@/lib/dev-kit/mock-data";
import { DevKitState } from "@/lib/dev-kit/types";

const hostFeatures = [
  {
    title: "Weekly cups & leagues",
    copy: "Run weekly knockout cups, seasonal divisions, and competitive leagues for your community.",
  },
  {
    title: "Player registrations",
    copy: "Collect player signups, track team rosters, and manage divisional placements easily.",
  },
  {
    title: "Automated brackets",
    copy: "Generate knockout or round-robin brackets, track scores, and let players report results.",
  },
  {
    title: "Discord integration",
    copy: "Push updates to Discord, display schedules, and show live bracket progress to your community.",
  },
];

export default function FC26() {
  const [showDevKit, setShowDevKit] = useState(false);
  const [devKitState, setDevKitState] = useState(initialDevKitState);
  
  const handleDevKitStateChange = (updates: Partial<typeof initialDevKitState>) => {
    setDevKitState((prev) => ({ ...prev, ...updates }));
  };
  return (
    <>
      <style>{`
        .fc26-scrollbar::-webkit-scrollbar { width: 5px; }
        .fc26-scrollbar::-webkit-scrollbar-track { background: rgba(10, 20, 8, 0.3); border-radius: 3px; }
        .fc26-scrollbar::-webkit-scrollbar-thumb { background: rgba(34, 197, 94, 0.35); border-radius: 3px; }
        .fc26-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(34, 197, 94, 0.6); }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(10, 20, 8, 0.3); border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(34, 197, 94, 0.35); border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(34, 197, 94, 0.6); }
        @media (min-width: 1024px) {
        .hero-corner-glow::before {
          content: '';
          position: absolute;
          top: -120px;
          left: -100px;
          width: 500px;
          height: 400px;
          background: radial-gradient(ellipse at top left, rgba(74,222,128,0.7) 0%, rgba(74,222,128,0.4) 30%, rgba(74,222,128,0.15) 60%, transparent 80%);
          filter: blur(60px);
          transform: rotate(-25deg);
          pointer-events: none;
        }
        .hero-corner-glow::after {
          content: '';
          position: absolute;
          top: -120px;
          right: -100px;
          width: 500px;
          height: 400px;
          background: radial-gradient(ellipse at top right, rgba(74,222,128,0.7) 0%, rgba(74,222,128,0.4) 30%, rgba(74,222,128,0.15) 60%, transparent 80%);
          filter: blur(60px);
          transform: rotate(25deg);
          pointer-events: none;
        }
      }
      `}</style>
      <main className="min-h-screen bg-[#0e0e10] text-[#efeff1]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-2 sm:gap-3" aria-label="Elo Labs home">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#0a150a] border border-[#4ade80]/30 rounded-md px-2 py-1">
              <LogoMark />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">Elo Labs</span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#4ade80] animate-pulse">Tournament Platform</span>
              </div>
            </div>
          </Link>

          <div className="hidden sm:flex items-center gap-2">
            <a href="/f1" className="px-2.5 sm:px-3.5 py-1.5 rounded text-sm sm:text-base font-bold tracking-widest text-white/50 hover:text-white transition-colors">F1</a>
            <span className="text-white/20 text-xs">|</span>
            <a href="/ufc" className="px-2.5 sm:px-3.5 py-1.5 rounded text-sm sm:text-base font-bold tracking-widest text-white/50 hover:text-white transition-colors">UFC</a>
            <span className="text-white/20 text-xs">|</span>
            <a href="/fc26" className="px-2.5 sm:px-3.5 py-1.5 rounded text-sm sm:text-base font-bold tracking-widest text-[#4ade80]">FC26</a>
            <span className="text-white/20 text-xs">|</span>
            <a href="/nba-2k" className="px-2.5 sm:px-3.5 py-1.5 rounded text-sm sm:text-base font-bold tracking-widest text-white/50 hover:text-white transition-colors">NBA 2K</a>
            <span className="text-white/20 text-xs">|</span>
            <a href="/pga" className="px-2.5 sm:px-3.5 py-1.5 rounded text-sm sm:text-base font-bold tracking-widest text-white/50 hover:text-white transition-colors">PGA</a>
          </div>

          <div className="flex items-center gap-2">
            <MobileNav
              sportLinks={[
                { href: "/f1", label: "F1" },
                { href: "/ufc", label: "UFC" },
                { href: "/fc26", label: "FC26", isActive: true },
                { href: "/nba-2k", label: "NBA 2K" },
                { href: "/pga", label: "PGA" },
              ]}
              accentColor="#4ade80"
            />
            <a
              href="#"
              className="relative flex h-9 sm:h-10 items-center gap-2 rounded-md bg-gradient-to-b from-[#2d5a2d] to-[#1e4a1e] px-3 sm:px-4 text-xs sm:text-sm font-semibold text-white border border-[#3d7a3d] transition hover:from-[#3d7a3d] hover:to-[#2d5a2d] overflow-hidden group"
            >
              <span className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 1px, transparent 2px)', backgroundSize: '4px 100%' }} />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="relative z-10 sm:w-4 sm:h-4"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#8fd98f"/></svg>
              <span className="relative z-10 hidden sm:inline">Login with Discord</span>
              <span className="relative z-10 sm:hidden">Login</span>
              <ArrowRight size={14} className="text-[#8fd98f] relative z-10 sm:w-4 sm:h-4" />
            </a>
          </div>
        </nav>
      </header>

<section className="relative overflow-hidden bg-[#0e0e10] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 min-h-[calc(100vh+50px)] sm:min-h-screen">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('/FC26/fieldbg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundAttachment: 'local',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10]/80 via-[#0e0e10]/40 to-transparent" />
          </div>
          <div className="absolute inset-0 hero-corner-glow pointer-events-none" />
          <div className="relative flex items-center justify-center min-h-full px-4">
            <div className="flex flex-col items-center justify-center mt-16 sm:mt-24 lg:mt-32">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)] text-center">
                FC Tournaments
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] text-center max-w-md sm:max-w-lg">
                Compete in the ultimate FC tournaments. Track your stats, climb the leaderboards, and prove you&apos;re the best player.
              </p>
              <div className="flex items-center gap-6 sm:gap-10 md:gap-14 mt-6 sm:mt-8 px-4">
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">0</div>
                  <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">Tournaments</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">0</div>
                  <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">Matches</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">0</div>
                  <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">Communities</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">0</div>
                  <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">Players</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dev Kit Preview Section - Desktop: 4 panels, Mobile: button */}
        <section className="relative py-8 lg:py-12 overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundImage: "url('/FC26/Playerroom.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0 bg-[#0e0e10]/70" />
          <div className="relative mx-auto max-w-[1400px] px-4">
            <div className="hidden lg:block mb-4">
              <div className="flex items-center gap-2 text-[#10b981] text-xs font-semibold uppercase tracking-widest">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                Dev Kit Preview
              </div>
            </div>
            <div className="hidden lg:grid lg:grid-cols-4 gap-4">
              <div className="bg-[#0a1408]/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 overflow-y-auto fc26-scrollbar">
                <AdminLeagueBuilder state={devKitState} onStateChange={handleDevKitStateChange} />
              </div>
              <div className="bg-[#0a1408]/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 overflow-y-auto fc26-scrollbar">
                <AdminDashboard state={devKitState} onStateChange={handleDevKitStateChange} />
              </div>
              <div className="bg-[#0a1408]/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 overflow-y-auto fc26-scrollbar">
                <ManagerView state={devKitState} onStateChange={handleDevKitStateChange} />
              </div>
              <div className="bg-[#0a1408]/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 overflow-y-auto fc26-scrollbar">
                <PlayerTable state={devKitState} />
              </div>
            </div>

            <div className="lg:hidden text-center">
              <button
                onClick={() => setShowDevKit(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] font-medium text-base hover:bg-[#10b981]/20 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Preview Dev Kit
              </button>
            </div>
          </div>
        </section>

        <DevKitModal isOpen={showDevKit} onClose={() => setShowDevKit(false)} />

        <section id="features" className="relative bg-[#0f1a12] py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 100, 34, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 100, 34, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-8 sm:w-12 h-[3px] bg-[#22c55e]" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
              Everything you need to run FC tournaments
            </h2>
          </div>
          <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2">
            {hostFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#0a0c0d] py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-8 sm:w-12 h-[3px] bg-[#22c55e]" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
              Built for FC communities
            </h2>
          </div>
          <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AudienceCard
              title="Community admins"
              copy="Run weekly cups, seasonal divisions, and competitive leagues for your members."
            />
            <AudienceCard
              title="Tournament organizers"
              copy="Collect signups, manage brackets across multiple divisions, and publish results without spreadsheets."
            />
            <AudienceCard
              title="Content creators"
              copy="Stream tournaments with integrated brackets and real-time match tracking for your viewers."
            />
          </div>
        </div>
      </section>

      <section className="relative bg-[#0d1a12] px-4 sm:px-5 py-16 sm:py-20 lg:px-8 overflow-hidden">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative mx-auto max-w-5xl border border-[#22c55e]/20 bg-[#0f2218] p-6 sm:p-8 text-white shadow-[0_0_40px_rgba(34,197,94,0.1)]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                Ready to host your first FC cup?
              </h2>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#adadb8]">
                Set up your community page and start accepting signups in minutes.
              </p>
            </div>
            <a
              href="#"
              className="flex h-10 sm:h-12 items-center justify-center gap-2 rounded-md bg-[#efeff1] px-5 sm:px-6 text-sm font-semibold text-[#0e0e10] shrink-0 self-end sm:self-start"
            >
              Get started
              <ArrowRight size={16} className="sm:w-[17px] sm:h-[17px]" />
            </a>
          </div>
        </div>
      </section>
    </main>
    <DevKitModal isOpen={showDevKit} onClose={() => setShowDevKit(false)} />
  </>
  );
}

function LogoMark() {
  return (
    <span className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-md border border-white/10 bg-[#18181b] text-[#c4b5fd]">
      <Globe size={16} className="sm:w-[19px] sm:h-[19px]" strokeWidth={2.2} />
    </span>
  );
}

function FeatureCard({
  feature,
}: {
  feature: { title: string; copy: string };
}) {
  return (
    <div className="relative bg-[#142a1c] border border-[#22c55e]/10 p-5 sm:p-6 rounded-lg hover:border-[#22c55e]/30 transition-colors group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#22c55e]/60 to-transparent rounded-t-lg" />
      <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#22c55e] transition-colors">{feature.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#8ba892]">{feature.copy}</p>
    </div>
  );
}

function AudienceCard({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) {
  return (
    <div className="relative bg-[#151c1a] border border-white/5 p-5 sm:p-6 rounded-lg hover:bg-[#1a2420] transition-colors">
      <div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#22c55e]/10 border border-[#22c55e]/20">
        <Users size={18} className="sm:w-[22px] sm:h-[22px] text-[#22c55e]" />
      </div>
      <h3 className="text-sm sm:text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-[#8ba892]">{copy}</p>
    </div>
  );
}