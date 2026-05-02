"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Globe, Shield, Trophy, Users } from "lucide-react";
import { MobileNav } from "@/components/MobileNav";
import { F1DevKitModal } from "@/components/f1-dev-kit";
import { SeasonSetup } from "@/components/f1-dev-kit/SeasonSetup";
import { DriverStandings } from "@/components/f1-dev-kit/DriverStandings";
import { ConstructorStandings } from "@/components/f1-dev-kit/ConstructorStandings";
import { DriverManagement } from "@/components/f1-dev-kit/DriverManagement";
import { initialF1DevKitState } from "@/lib/f1-dev-kit/mock-data";

type TeamId = "ferrari" | "redbull" | "mercedes";

const teams: Record<TeamId, {
  id: TeamId;
  label: string;
  accent: string;
  accentLight: string;
  accentRgb: string;
  darkBg: string;
  darkBgHover: string;
  heroMid: string;
  heroEnd: string;
  btnFrom: string;
  btnTo: string;
  btnBorder: string;
  carImg: string;
  carOffset: string;
  glowClass: string;
}> = {
  ferrari: {
    id: "ferrari",
    label: "Ferrari",
    accent: "#ef4444",
    accentLight: "#fca5a5",
    accentRgb: "220,38,38",
    darkBg: "#251a1a",
    darkBgHover: "#2d1f1f",
    heroMid: "#1a1515",
    heroEnd: "#0f0d0d",
    btnFrom: "#991b1b",
    btnTo: "#7f1d1d",
    btnBorder: "#b91c1c",
    carImg: "/F1/red_F1.png",
    carOffset: "translate-y-2 sm:translate-y-3",
    glowClass: "from-red-500",
  },
  redbull: {
    id: "redbull",
    label: "Red Bull",
    accent: "#3b82f6",
    accentLight: "#93c5fd",
    accentRgb: "59,130,246",
    darkBg: "#1a2030",
    darkBgHover: "#1f2838",
    heroMid: "#151a25",
    heroEnd: "#0d0f18",
    btnFrom: "#1e3a8a",
    btnTo: "#1e40af",
    btnBorder: "#2563eb",
    carImg: "/F1/RedBull_F1.png",
    carOffset: "translate-y-4 sm:translate-y-6",
    glowClass: "from-blue-500",
  },
  mercedes: {
    id: "mercedes",
    label: "Mercedes",
    accent: "#00d2be",
    accentLight: "#5eead4",
    accentRgb: "0,210,190",
    darkBg: "#1a2020",
    darkBgHover: "#1f2a28",
    heroMid: "#151a1a",
    heroEnd: "#0d0f0f",
    btnFrom: "#0d4f47",
    btnTo: "#0a3d37",
    btnBorder: "#00a894",
    carImg: "/F1/Mercedes_F1.png",
    carOffset: "translate-y-4 sm:translate-y-6",
    glowClass: "from-teal-400",
  },
};

const flagWaveStyles = `
  @keyframes flagWave {
    0%, 100% { transform: skewY(0deg) scaleX(1); }
    25% { transform: skewY(2deg) scaleX(0.98); }
    50% { transform: skewY(-1deg) scaleX(1.01); }
    75% { transform: skewY(1.5deg) scaleX(0.99); }
  }
  .animate-flag-cloth {
    animation: flagWave 2.5s ease-in-out infinite;
    transform-origin: left center;
  }
  .animate-flag-cloth-right {
    animation: flagWave 2.8s ease-in-out infinite;
    animation-delay: -0.6s;
    transform-origin: right center;
  }
  @keyframes roadMove {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -80; }
  }
  @keyframes flowLeft {
    0% { transform: translateX(100vw); opacity: 0; }
    10% { opacity: 0.3; }
    90% { opacity: 0.3; }
    100% { transform: translateX(-100px); opacity: 0; }
  }
  .animate-road {
    animation: roadMove 0.4s linear infinite;
  }
  .animate-road-white {
    animation: roadMove 0.4s linear infinite;
    animation-delay: -0.2s;
  }
  .flow-line {
    animation: flowLeft 3s linear infinite;
  }
  .flow-line-delay-1 {
    animation: flowLeft 3s linear infinite;
    animation-delay: -1s;
  }
  .flow-line-delay-2 {
    animation: flowLeft 3s linear infinite;
    animation-delay: -2s;
  }
`;

const hostFeatures = [
  { title: "Build your racing hub", copy: "Create a custom tournament page for your racing community with your branding and events." },
  { title: "Manage drivers", copy: "Collect driver signups, track car setups, and manage race entries easily." },
  { title: "Race scheduling", copy: "Schedule races, track lap times, and publish results to your community." },
  { title: "Live timing", copy: "Display real-time race positions, lap times, and standings during events." },
];

function LogoMark({ accent }: { accent: string }) {
  return (
    <span className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-md border border-white/10 bg-[#18181b]" style={{ color: accent }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" />
      </svg>
    </span>
  );
}

export default function F1Page() {
  const [showDevKit, setShowDevKit] = useState(false);
  const [f1DevKitState, setF1DevKitState] = useState(initialF1DevKitState);
  const [selectedTeam, setSelectedTeam] = useState<TeamId>("ferrari");
  const team = teams[selectedTeam];

  const handleF1DevKitStateChange = (updates: Partial<typeof initialF1DevKitState>) => {
    setF1DevKitState((prev) => ({ ...prev, ...updates }));
  };

  return (
    <main className="min-h-screen bg-[#0e0e10] text-[#efeff1]">
      <style>{`
        .f1-scroll::-webkit-scrollbar { width: 5px; }
        .f1-scroll::-webkit-scrollbar-track { background: rgba(26, 21, 21, 0.3); border-radius: 3px; }
        .f1-scroll::-webkit-scrollbar-thumb { background: rgba(${team.accentRgb}, 0.35); border-radius: 3px; }
        .f1-scroll::-webkit-scrollbar-thumb:hover { background: rgba(${team.accentRgb}, 0.6); }
      `}</style>
      <style>{flagWaveStyles}</style>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-2 sm:gap-3" aria-label="Elo Labs home">
            <LogoMark accent={team.accent} />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">Elo Labs</span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] drop-shadow-[0_0_10px_rgba(${team.accentRgb},0.5)] animate-pulse" style={{ color: team.accent }}>Tournament Platform</span>
            </div>
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <a href="/f1" className="px-2.5 sm:px-3.5 py-1.5 rounded text-sm sm:text-base font-bold tracking-widest" style={{ color: team.accent }}>F1</a>
            <span className="text-white/20 text-xs">|</span>
            <a href="/ufc" className="px-2.5 sm:px-3.5 py-1.5 rounded text-sm sm:text-base font-bold tracking-widest text-white/50 hover:text-white transition-colors">UFC</a>
            <span className="text-white/20 text-xs">|</span>
            <a href="/fc26" className="px-2.5 sm:px-3.5 py-1.5 rounded text-sm sm:text-base font-bold tracking-widest text-white/50 hover:text-white transition-colors">FC26</a>
            <span className="text-white/20 text-xs">|</span>
            <a href="/nba-2k" className="px-2.5 sm:px-3.5 py-1.5 rounded text-sm sm:text-base font-bold tracking-widest text-white/50 hover:text-white transition-colors">NBA 2K</a>
            <span className="text-white/20 text-xs">|</span>
            <a href="/pga" className="px-2.5 sm:px-3.5 py-1.5 rounded text-sm sm:text-base font-bold tracking-widest text-white/50 hover:text-white transition-colors">PGA</a>
          </div>
          <div className="flex items-center gap-2">
            <MobileNav
              sportLinks={[
                { href: "/f1", label: "F1", isActive: true },
                { href: "/ufc", label: "UFC" },
                { href: "/fc26", label: "FC26" },
                { href: "/nba-2k", label: "NBA 2K" },
                { href: "/pga", label: "PGA" },
              ]}
              accentColor={team.accent}
            />
            <a href="#" className="relative flex h-9 sm:h-10 items-center gap-2 rounded-md px-3 sm:px-4 text-xs sm:text-sm font-semibold text-white border overflow-hidden transition-all" style={{ background: `linear-gradient(to bottom, ${team.btnFrom}, ${team.btnTo})`, borderColor: team.btnBorder }}>
              <span className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 1px, transparent 2px)', backgroundSize: '4px 100%' }} />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="relative z-10 sm:w-4 sm:h-4"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill={team.accentLight}/></svg>
              <span className="relative z-10 hidden sm:inline">Login with Discord</span>
              <span className="relative z-10 sm:hidden">Login</span>
              <ArrowRight size={14} className="relative z-10 sm:w-4 sm:h-4" style={{ color: team.accentLight }} />
            </a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 min-h-[calc(100vh+50px)] sm:min-h-screen" style={{ backgroundColor: '#0e0e10' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,#0e0e10_0%,var(--hero-mid)_40%,var(--hero-end)_100%)]" style={{ ['--hero-mid' as string]: team.heroMid, ['--hero-end' as string]: team.heroEnd }} />
          <div className="absolute top-0 left-[10%] w-20 sm:w-[150px] h-20 sm:h-[150px] rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: team.accent, opacity: 0.2 }} />
          <div className="absolute top-0 right-[10%] w-20 sm:w-[150px] h-20 sm:h-[150px] rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: team.accent, opacity: 0.2 }} />
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(${team.accentRgb},0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 30% 20%, rgba(${team.accentRgb},0.1) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 70% 20%, rgba(${team.accentRgb},0.1) 0%, transparent 50%)` }} />
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line className="flow-line" x1="0" y1="220" x2="100" y2="220" stroke={team.accent} strokeWidth="1" opacity="0.2"/>
            <line className="flow-line-delay-1" x1="0" y1="250" x2="80" y2="250" stroke={team.accent} strokeWidth="1" opacity="0.15"/>
            <line className="flow-line-delay-2" x1="0" y1="240" x2="60" y2="240" stroke={team.accent} strokeWidth="1" opacity="0.1"/>
            <line className="flow-line" x1="0" y1="265" x2="120" y2="265" stroke="#fff" strokeWidth="1" opacity="0.1"/>
            <line className="flow-line-delay-1" x1="0" y1="275" x2="90" y2="275" stroke="#fff" strokeWidth="1" opacity="0.08"/>
          </svg>
          <div className="absolute bottom-0 left-0 right-0 h-64 sm:h-96 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
              <defs>
                <pattern id="asphalt" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                  <rect width="40" height="20" fill="#1a1a1a"/><line x1="0" y1="19" x2="40" y2="19" stroke="#2a2a2a" strokeWidth="1"/><line x1="20" y1="0" x2="20" y2="20" stroke="#333" strokeWidth="0.5" strokeDasharray="4 2"/>
                </pattern>
                <pattern id="raceLine" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect width="100" height="100" fill="url(#asphalt)"/><path d="M0 80 Q25 75, 50 80 T100 80" stroke={team.accent} strokeWidth="3" fill="none" opacity="0.6"/><path d="M0 60 Q25 55, 50 60 T100 60" stroke="#fff" strokeWidth="2" fill="none" opacity="0.4"/>
                </pattern>
              </defs>
              <path d="M0 300 Q150 250, 300 280 T600 300 T900 280 Q1050 250, 1200 300 L1200 400 L0 400 Z" fill="url(#raceLine)"/>
              <path d="M0 320 Q150 270, 300 300 T600 320 T900 300 Q1050 270, 1200 320" stroke={team.accent} strokeWidth="4" fill="none"/>
              <path d="M0 350 Q150 300, 300 330 T600 350 T900 330 Q1050 300, 1200 350" stroke="#fff" strokeWidth="2" fill="none" opacity="0.5"/>
              <g className="animate-road"><line x1="0" y1="320" x2="1200" y2="320" stroke={team.accent} strokeWidth="4" strokeDasharray="40 40"/></g>
              <g className="animate-road-white"><line x1="0" y1="350" x2="1200" y2="350" stroke="#fff" strokeWidth="2" strokeDasharray="40 40"/></g>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 flex gap-6 sm:gap-10 md:gap-14 px-4 pointer-events-none">
            <div className="text-center"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">0</div><div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Races</div></div>
            <div className="text-center"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">0</div><div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Drivers</div></div>
            <div className="text-center"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">0</div><div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Teams</div></div>
          </div>

          <div className="absolute inset-x-0 top-[5%] sm:top-[7%] lg:top-[8%] z-10 flex flex-col items-center gap-3 px-4">
            <div className="flex items-center gap-2 sm:gap-3">
              {(["ferrari", "redbull", "mercedes"] as TeamId[]).map((tid) => {
                const t = teams[tid];
                const isActive = selectedTeam === tid;
                return (
                  <button
                    key={tid}
                    onClick={() => setSelectedTeam(tid)}
                    className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 border cursor-pointer hover:opacity-90"
                    style={{
                      backgroundColor: isActive ? t.accent : 'transparent',
                      borderColor: isActive ? t.accent : 'rgba(255,255,255,0.2)',
                      color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                    }}
                  >
                    <span className="inline-block h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full" style={{ backgroundColor: t.accent }} />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="absolute inset-x-0 top-[14%] sm:top-[16%] lg:top-[16%] flex justify-center">
            <div className="text-center px-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">F1 Racing Tournaments</h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/70 max-w-md mx-auto">Compete in Formula 1 tournaments. Track lap times, climb the grid, and become the champion.</p>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="flex flex-col items-center">
              <div className="flex items-end justify-center gap-2">
                <svg className="opacity-40 sm:opacity-50 -rotate-12" width="50" height="100" viewBox="0 0 50 100" fill="none"><defs><pattern id="checker-left-f1" x="0" y="0" width="12.5" height="12.5" patternUnits="userSpaceOnUse"><rect width="12.5" height="12.5" fill="white"/><rect width="6.25" height="6.25" fill="#111"/><rect x="6.25" y="6.25" width="6.25" height="6.25" fill="#111"/></pattern><clipPath id="flag-clip-left"><path d="M48,5 L2,8 L0,75 L46,78 Z"/></clipPath></defs><g className="animate-flag-cloth-right" clipPath="url(#flag-clip-left)"><rect x="0" y="0" width="50" height="80" fill="url(#checker-left-f1)"/></g><line x1="46" y1="0" x2="46" y2="100" stroke="#888" strokeWidth="3" strokeLinecap="round"/><line x1="46" y1="0" x2="46" y2="100" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/><circle cx="46" cy="2" r="4" fill="#888" stroke="#666" strokeWidth="0.5"/></svg>
                <svg className="opacity-40 sm:opacity-50 rotate-12" width="50" height="100" viewBox="0 0 50 100" fill="none"><defs><pattern id="checker-right-f1" x="0" y="0" width="12.5" height="12.5" patternUnits="userSpaceOnUse"><rect width="12.5" height="12.5" fill="white"/><rect width="6.25" height="6.25" fill="#111"/><rect x="6.25" y="6.25" width="6.25" height="6.25" fill="#111"/></pattern><clipPath id="flag-clip-right"><path d="M2,5 L48,8 L50,75 L4,78 Z"/></clipPath></defs><g className="animate-flag-cloth" clipPath="url(#flag-clip-right)"><rect x="0" y="0" width="50" height="80" fill="url(#checker-right-f1)"/></g><line x1="4" y1="0" x2="4" y2="100" stroke="#888" strokeWidth="3" strokeLinecap="round"/><line x1="4" y1="0" x2="4" y2="100" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/><circle cx="4" cy="2" r="4" fill="#888" stroke="#666" strokeWidth="0.5"/></svg>
              </div>
              <img src={team.carImg} alt={`${team.label} F1 Car`} className={`w-48 sm:w-64 md:w-80 h-auto drop-shadow-2xl ${team.carOffset}`} />
              <div className="w-48 sm:w-64 md:w-80 h-6 bg-gradient-to-t to-transparent blur-xl -mt-16 sm:-mt-20" style={{ backgroundImage: `linear-gradient(to top, rgba(${team.accentRgb},0.6), transparent)` }} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-8 lg:py-12 overflow-hidden" style={{ backgroundColor: '#0e0e10' }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/F1/f1_cornerbg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'local',
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-5 lg:px-8">
          <div className="hidden lg:grid lg:grid-cols-4 gap-4">
            <div className="min-w-[300px] border border-white/10 rounded-lg p-4 overflow-y-auto f1-scroll" style={{ backgroundColor: team.darkBg }}>
              <SeasonSetup state={f1DevKitState} onStateChange={handleF1DevKitStateChange} />
            </div>
            <div className="min-w-[300px] border border-white/10 rounded-lg p-4 overflow-y-auto f1-scroll" style={{ backgroundColor: team.darkBg }}>
              <DriverStandings state={f1DevKitState} onStateChange={handleF1DevKitStateChange} />
            </div>
            <div className="min-w-[300px] border border-white/10 rounded-lg p-4 overflow-y-auto f1-scroll" style={{ backgroundColor: team.darkBg }}>
              <ConstructorStandings state={f1DevKitState} onStateChange={handleF1DevKitStateChange} />
            </div>
            <div className="min-w-[300px] border border-white/10 rounded-lg p-4 overflow-y-auto f1-scroll" style={{ backgroundColor: team.darkBg }}>
              <DriverManagement state={f1DevKitState} />
            </div>
          </div>

          <div className="lg:hidden text-center">
            <button
              onClick={() => setShowDevKit(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border font-medium text-base transition-colors"
              style={{ backgroundColor: `rgba(${team.accentRgb},0.1)`, borderColor: `rgba(${team.accentRgb},0.3)`, color: team.accent }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              Preview Dev Kit
            </button>
          </div>
        </div>
      </section>

      <F1DevKitModal isOpen={showDevKit} onClose={() => setShowDevKit(false)} />

      <section className="relative py-16 sm:py-20 lg:py-28" style={{ backgroundColor: team.heroMid }}>
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(${team.accentRgb},0.08) 0%, transparent 70%)` }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8"><div className="w-8 sm:w-12 h-[3px]" style={{ backgroundColor: team.accent }} /><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Run your own races</h2></div>
          <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2">{hostFeatures.map((f) => <div key={f.title} className="relative border border-white/5 p-5 sm:p-6 rounded-lg transition-colors" style={{ backgroundColor: team.darkBg }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = team.darkBgHover }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = team.darkBg }}><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg border" style={{ backgroundColor: `rgba(${team.accentRgb},0.1)`, borderColor: `rgba(${team.accentRgb},0.2)` }}><Trophy size={18} className="sm:w-[22px] sm:h-[22px]" style={{ color: team.accent }} /></div><h3 className="text-sm sm:text-base font-semibold text-white">{f.title}</h3><p className="mt-2 text-sm text-[#8ba892]">{f.copy}</p></div>)}</div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: team.heroEnd }}>
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(${team.accentRgb},0.1) 0%, transparent 70%)` }} />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url('/F1/cockpitview.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'local',
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8"><div className="w-8 sm:w-12 h-[3px]" style={{ backgroundColor: team.accent }} /><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">For racing communities</h2></div>
          <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-white/5 p-5 sm:p-6 rounded-lg" style={{ backgroundColor: team.darkBg }}><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg border" style={{ backgroundColor: `rgba(${team.accentRgb},0.1)`, borderColor: `rgba(${team.accentRgb},0.2)` }}><Globe size={18} className="sm:w-[22px] sm:h-[22px]" style={{ color: team.accent }} /></div><h3 className="text-sm sm:text-base font-semibold text-white">Race day stats</h3><p className="mt-2 text-sm text-[#8ba892]">Track fastest laps, pole positions, and championship points.</p></div>
            <div className="border border-white/5 p-5 sm:p-6 rounded-lg" style={{ backgroundColor: team.darkBg }}><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg border" style={{ backgroundColor: `rgba(${team.accentRgb},0.1)`, borderColor: `rgba(${team.accentRgb},0.2)` }}><Shield size={18} className="sm:w-[22px] sm:h-[22px]" style={{ color: team.accent }} /></div><h3 className="text-sm sm:text-base font-semibold text-white">Fair racing</h3><p className="mt-2 text-sm text-[#8ba892]">Anti-cheat tools and parity settings for fair competition.</p></div>
            <div className="border border-white/5 p-5 sm:p-6 rounded-lg" style={{ backgroundColor: team.darkBg }}><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg border" style={{ backgroundColor: `rgba(${team.accentRgb},0.1)`, borderColor: `rgba(${team.accentRgb},0.2)` }}><Users size={18} className="sm:w-[22px] sm:h-[22px]" style={{ color: team.accent }} /></div><h3 className="text-sm sm:text-base font-semibold text-white">Driver profiles</h3><p className="mt-2 text-sm text-[#8ba892]">Track driver history, stats, and career progression.</p></div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:px-8" style={{ backgroundColor: team.heroMid }}>
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(${team.accentRgb},0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(${team.accentRgb},0.03) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="relative mx-auto max-w-5xl border bg-[#201515] p-6 sm:p-8 text-white" style={{ borderColor: `rgba(${team.accentRgb},0.2)`, boxShadow: `0 0 40px rgba(${team.accentRgb},0.1)` }}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Start your championship</h2><p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#adadb8]">Set up your racing league and invite drivers in minutes.</p></div>
            <a href="#" className="flex h-10 sm:h-12 items-center justify-center gap-2 rounded-md bg-[#efeff1] px-5 sm:px-6 text-sm font-semibold text-[#0e0e10] shrink-0 self-end sm:self-start">Get started<ArrowRight size={16} className="sm:w-[17px] sm:h-[17px]" /></a>
          </div>
        </div>
      </section>
    </main>
  );
}