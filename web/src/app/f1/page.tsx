"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Globe, Shield, Trophy, Users } from "lucide-react";
import { MobileNav } from "@/components/MobileNav";

type TeamId = "free" | "ferrari" | "redbull" | "mercedes" | "mclaren" | "astonmartin" | "alpine" | "williams" | "haas" | "audi" | "cadillac" | "rb";

const teamOrder: TeamId[] = [
  "free",
  "ferrari", "redbull", "mercedes", "mclaren", "astonmartin",
  "alpine", "williams", "haas", "audi", "cadillac", "rb"
];

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
  carImg: string;
  carOffset: string;
  carWidth: string;
  logoImg: string;
  premium: boolean;
}> = {
  free: {
    id: "free",
    label: "Free",
    accent: "#a0a0b0",
    accentLight: "#c0c0d0",
    accentRgb: "160,160,176",
    darkBg: "#18181b",
    darkBgHover: "#222226",
    heroMid: "#131315",
    heroEnd: "#0e0e10",
    carImg: "",
    carOffset: "",
    carWidth: "",
    logoImg: "/F1/Logos/f1-logo-png-red-large-900x231.png",
    premium: false,
  },
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
    carImg: "/F1/red_F1.png",
    carOffset: "translate-y-6 sm:translate-y-7",
    carWidth: "w-52 sm:w-72 md:w-[22rem]",
    logoImg: "/F1/Logos/Ferrari_logo.png",
    premium: true,
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
    carImg: "/F1/RedBull_F1.png",
    carOffset: "translate-y-6 sm:translate-y-8",
    carWidth: "w-56 sm:w-72 md:w-[22rem]",
    logoImg: "/F1/Logos/red-bull-racing-logo.png",
    premium: true,
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
    carImg: "/F1/Mercedes_F1.png",
    carOffset: "translate-y-6 sm:translate-y-8",
    carWidth: "w-56 sm:w-72 md:w-[22rem]",
    logoImg: "/F1/Logos/Mercedes_F1_Logo.png",
    premium: true,
  },
  mclaren: {
    id: "mclaren",
    label: "McLaren",
    accent: "#ff8000",
    accentLight: "#ffb366",
    accentRgb: "255,128,0",
    darkBg: "#251e15",
    darkBgHover: "#2d2419",
    heroMid: "#1a1510",
    heroEnd: "#0f0d0a",
    carImg: "/F1/red_F1.png",
    carOffset: "translate-y-6 sm:translate-y-7",
    carWidth: "w-52 sm:w-72 md:w-[22rem]",
    logoImg: "/F1/Logos/McLaren_Racing_logo.png",
    premium: true,
  },
  astonmartin: {
    id: "astonmartin",
    label: "Aston Martin",
    accent: "#006f62",
    accentLight: "#4db8a4",
    accentRgb: "0,111,98",
    darkBg: "#151e1c",
    darkBgHover: "#1a2624",
    heroMid: "#101a17",
    heroEnd: "#0a0f0e",
    carImg: "/F1/red_F1.png",
    carOffset: "translate-y-6 sm:translate-y-7",
    carWidth: "w-52 sm:w-72 md:w-[22rem]",
    logoImg: "/F1/Logos/aston-martin-logo-png_seeklogo-238549.png",
    premium: true,
  },
  alpine: {
    id: "alpine",
    label: "Alpine",
    accent: "#0090ff",
    accentLight: "#66b8ff",
    accentRgb: "0,144,255",
    darkBg: "#151a28",
    darkBgHover: "#1a2030",
    heroMid: "#101520",
    heroEnd: "#0a0d16",
    carImg: "/F1/red_F1.png",
    carOffset: "translate-y-6 sm:translate-y-7",
    carWidth: "w-52 sm:w-72 md:w-[22rem]",
    logoImg: "/F1/Logos/alpine-f1-team-logo.png",
    premium: true,
  },
  williams: {
    id: "williams",
    label: "Williams",
    accent: "#00a3e0",
    accentLight: "#66ccf0",
    accentRgb: "0,163,224",
    darkBg: "#151c22",
    darkBgHover: "#1a2228",
    heroMid: "#10161c",
    heroEnd: "#0a0e14",
    carImg: "/F1/red_F1.png",
    carOffset: "translate-y-6 sm:translate-y-7",
    carWidth: "w-52 sm:w-72 md:w-[22rem]",
    logoImg: "/F1/Logos/Williams_F1_logo_2026.png",
    premium: true,
  },
  haas: {
    id: "haas",
    label: "Haas",
    accent: "#e8002d",
    accentLight: "#ff6680",
    accentRgb: "232,0,45",
    darkBg: "#221515",
    darkBgHover: "#281a1a",
    heroMid: "#1a1212",
    heroEnd: "#100a0a",
    carImg: "/F1/red_F1.png",
    carOffset: "translate-y-6 sm:translate-y-7",
    carWidth: "w-52 sm:w-72 md:w-[22rem]",
    logoImg: "/F1/Logos/TGR_Haas_F1_Team_Logo_(2026).svg.png",
    premium: true,
  },
  audi: {
    id: "audi",
    label: "Audi",
    accent: "#b8b8b8",
    accentLight: "#d9d9d9",
    accentRgb: "184,184,184",
    darkBg: "#1a1a1e",
    darkBgHover: "#22222a",
    heroMid: "#141418",
    heroEnd: "#0e0e10",
    carImg: "/F1/red_F1.png",
    carOffset: "translate-y-6 sm:translate-y-7",
    carWidth: "w-52 sm:w-72 md:w-[22rem]",
    logoImg: "/F1/Logos/Audif1.com_logo17_(cropped).svg.png",
    premium: true,
  },
  cadillac: {
    id: "cadillac",
    label: "Cadillac",
    accent: "#8b1a1a",
    accentLight: "#c44d4d",
    accentRgb: "139,26,26",
    darkBg: "#1e1515",
    darkBgHover: "#261a1a",
    heroMid: "#161110",
    heroEnd: "#0e0a0a",
    carImg: "/F1/red_F1.png",
    carOffset: "translate-y-6 sm:translate-y-7",
    carWidth: "w-52 sm:w-72 md:w-[22rem]",
    logoImg: "/F1/Logos/Cadillac_Formula_1_Team_Logo_(2025).svg.png",
    premium: true,
  },
  rb: {
    id: "rb",
    label: "Racing Bulls",
    accent: "#6699ff",
    accentLight: "#99bbff",
    accentRgb: "102,153,255",
    darkBg: "#151a2a",
    darkBgHover: "#1a2035",
    heroMid: "#101525",
    heroEnd: "#0a0d1a",
    carImg: "/F1/red_F1.png",
    carOffset: "translate-y-6 sm:translate-y-7",
    carWidth: "w-52 sm:w-72 md:w-[22rem]",
    logoImg: "/F1/Logos/RacingBulls_allmode.png",
    premium: true,
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

function TeamLogo({ tid, team, isActive, onClick }: { tid: TeamId; team: typeof teams[TeamId]; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-center gap-1.5 cursor-pointer transition-all duration-200"
    >
      <div
        className="rounded-lg overflow-hidden transition-all duration-200"
        style={{
          border: isActive ? `2px solid ${team.accent}` : '2px solid rgba(255,255,255,0.1)',
          boxShadow: isActive ? `0 0 12px rgba(${team.accentRgb},0.5)` : 'none',
          backgroundColor: isActive ? `rgba(${team.accentRgb},0.15)` : '#18181b',
        }}
      >
        {team.logoImg ? (
          <img
            src={team.logoImg}
            alt={team.label}
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain p-1 transition-opacity duration-200"
            style={{ opacity: isActive ? 1 : 0.4 }}
          />
        ) : (
          <div
            className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-[10px] sm:text-xs font-bold transition-opacity duration-200"
            style={{ opacity: isActive ? 1 : 0.4, color: team.accent }}
          >
            {team.label.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>
      <span
        className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider transition-all duration-200"
        style={{ color: isActive ? team.accent : 'rgba(255,255,255,0.35)' }}
      >
        {team.label}
      </span>
    </button>
  );
}

export default function F1Page() {
  const [selectedTeam, setSelectedTeam] = useState<TeamId>("ferrari");
  const team = teams[selectedTeam];
  const isPremium = team.premium;

  const leftTeams = teamOrder.slice(0, 6);
  const rightTeams = teamOrder.slice(6, 12);

  return (
    <main className="min-h-screen bg-[#0e0e10] text-[#efeff1]">
      {isPremium && <style>{flagWaveStyles}</style>}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto grid h-16 sm:h-20 max-w-[1440px] grid-cols-3 items-center px-4 sm:px-5 lg:px-8">
          <div className="flex justify-start">
            <Link href="/" className="flex items-center gap-2 sm:gap-3" aria-label="Elo Labs home">
              <LogoMark accent={team.accent} />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">Elo Labs</span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] drop-shadow-[0_0_10px_rgba(${team.accentRgb},0.5)] animate-pulse" style={{ color: team.accent }}>Tournament Platform</span>
              </div>
            </Link>
          </div>
          <div className="hidden sm:flex items-center justify-center gap-3 whitespace-nowrap">
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
          <div className="flex justify-end">
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
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 min-h-[calc(100vh+50px)] sm:min-h-screen" style={{ backgroundColor: '#0e0e10' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,#0e0e10_0%,var(--hero-mid)_40%,var(--hero-end)_100%)]" style={{ ['--hero-mid' as string]: team.heroMid, ['--hero-end' as string]: team.heroEnd }} />

          {isPremium && (
            <>
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
            </>
          )}

          {isPremium && (
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
          )}

          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 flex gap-6 sm:gap-10 md:gap-14 px-4 pointer-events-none">
            <div className="text-center"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">0</div><div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Races</div></div>
            <div className="text-center"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">0</div><div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Drivers</div></div>
            <div className="text-center"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">0</div><div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Teams</div></div>
          </div>

          <div className="absolute left-3 sm:left-5 lg:left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3 sm:gap-4">
            {leftTeams.map((tid) => (
              <TeamLogo key={tid} tid={tid} team={teams[tid]} isActive={selectedTeam === tid} onClick={() => setSelectedTeam(tid)} />
            ))}
          </div>

          <div className="absolute right-3 sm:right-5 lg:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3 sm:gap-4">
            {rightTeams.map((tid) => (
              <TeamLogo key={tid} tid={tid} team={teams[tid]} isActive={selectedTeam === tid} onClick={() => setSelectedTeam(tid)} />
            ))}
          </div>

          <div className="absolute inset-x-0 top-[14%] sm:top-[16%] lg:top-[16%] flex justify-center">
            <div className="text-center px-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">F1 Racing Tournaments</h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/70 max-w-md mx-auto">Compete in Formula 1 tournaments. Track lap times, climb the grid, and become the champion.</p>
              {!isPremium && (
                <p className="mt-2 text-xs sm:text-sm font-medium" style={{ color: team.accent }}>Free tier — upgrade for team themes, car visuals &amp; more</p>
              )}
            </div>
          </div>

          {isPremium && (
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="flex flex-col items-center">
                <div className="flex items-end justify-center gap-2">
                  <svg className="opacity-40 sm:opacity-50 -rotate-12" width="50" height="100" viewBox="0 0 50 100" fill="none"><defs><pattern id="checker-left-f1" x="0" y="0" width="12.5" height="12.5" patternUnits="userSpaceOnUse"><rect width="12.5" height="12.5" fill="white"/><rect width="6.25" height="6.25" fill="#111"/><rect x="6.25" y="6.25" width="6.25" height="6.25" fill="#111"/></pattern><clipPath id="flag-clip-left"><path d="M48,5 L2,8 L0,75 L46,78 Z"/></clipPath></defs><g className="animate-flag-cloth-right" clipPath="url(#flag-clip-left)"><rect x="0" y="0" width="50" height="80" fill="url(#checker-left-f1)"/></g><line x1="46" y1="0" x2="46" y2="100" stroke="#888" strokeWidth="3" strokeLinecap="round"/><line x1="46" y1="0" x2="46" y2="100" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/><circle cx="46" cy="2" r="4" fill="#888" stroke="#666" strokeWidth="0.5"/></svg>
                  <svg className="opacity-40 sm:opacity-50 rotate-12" width="50" height="100" viewBox="0 0 50 100" fill="none"><defs><pattern id="checker-right-f1" x="0" y="0" width="12.5" height="12.5" patternUnits="userSpaceOnUse"><rect width="12.5" height="12.5" fill="white"/><rect width="6.25" height="6.25" fill="#111"/><rect x="6.25" y="6.25" width="6.25" height="6.25" fill="#111"/></pattern><clipPath id="flag-clip-right"><path d="M2,5 L48,8 L50,75 L4,78 Z"/></clipPath></defs><g className="animate-flag-cloth" clipPath="url(#flag-clip-right)"><rect x="0" y="0" width="50" height="80" fill="url(#checker-right-f1)"/></g><line x1="4" y1="0" x2="4" y2="100" stroke="#888" strokeWidth="3" strokeLinecap="round"/><line x1="4" y1="0" x2="4" y2="100" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/><circle cx="4" cy="2" r="4" fill="#888" stroke="#666" strokeWidth="0.5"/></svg>
                </div>
                <img src={team.carImg} alt={`${team.label} F1 Car`} className={`relative z-10 ${team.carWidth} h-auto drop-shadow-2xl ${team.carOffset}`} />
              </div>
            </div>
          )}
          {!isPremium && (
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <img src="/F1/Logos/f1-logo-png-red-large-900x231.png" alt="F1 Logo" className="relative z-10 w-48 sm:w-64 md:w-80 h-auto opacity-40" />
            </div>
          )}
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-28" style={{ backgroundColor: team.heroMid }}>
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(${team.accentRgb},0.08) 0%, transparent 70%)` }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8"><div className="w-8 sm:w-12 h-[3px]" style={{ backgroundColor: team.accent }} /><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Run your own races</h2></div>
          <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2">{hostFeatures.map((f) => <div key={f.title} className="relative border border-white/5 p-5 sm:p-6 rounded-lg transition-colors" style={{ backgroundColor: team.darkBg }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = team.darkBgHover }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = team.darkBg }}><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg border" style={{ backgroundColor: `rgba(${team.accentRgb},0.1)`, borderColor: `rgba(${team.accentRgb},0.2)` }}><Trophy size={18} className="sm:w-[22px] sm:h-[22px]" style={{ color: team.accent }} /></div><h3 className="text-sm sm:text-base font-semibold text-white">{f.title}</h3><p className="mt-2 text-sm text-[#8ba892]">{f.copy}</p></div>)}</div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: team.heroEnd }}>
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(${team.accentRgb},0.1) 0%, transparent 70%)` }} />
        {isPremium && (
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `url('/F1/cockpitview.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundAttachment: 'local',
            }}
          />
        )}
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