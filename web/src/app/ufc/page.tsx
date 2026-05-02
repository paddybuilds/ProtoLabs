"use client";

import { ArrowRight, Globe, Shield, Trophy, Users } from "lucide-react";
import { useState, useRef } from "react";
import { FightCardSetup, FighterRankings, WeightClasses, FighterProfile, UFCDevKitModal, UFCDevKitButton } from "@/components/ufc-dev-kit";
import { MobileNav } from "@/components/MobileNav";
import { initialUFCDevKitState } from "@/lib/ufc-dev-kit/mock-data";
import type { UFCDevKitState } from "@/lib/ufc-dev-kit/types";

const fighters = [
  { id: "edwards", name: "Leon Edwards", wins: 22, draws: 0, losses: 4, koPercent: 41, img: "/UFC/Leon_Edwards.png", isChampion: false },
  { id: "jdm", name: "Jack Della Maddalena", wins: 18, draws: 0, losses: 2, koPercent: 56, img: "/UFC/Jack Della Maddalena.png", isChampion: true },
  { id: "makhachev", name: "Islam Makhachev", wins: 27, draws: 0, losses: 1, koPercent: 30, img: "/UFC/Islam_Makhachev.png", isChampion: false },
  { id: "pereira", name: "Alex Pereira", wins: 12, draws: 0, losses: 2, koPercent: 83, img: "/UFC/alex_pereira.png", isChampion: false },
] as const;

const mainCardFights = [
  { leftFighterId: "edwards", rightFighterId: "jdm", time: "10:10 PM", venue: "T-Mobile Arena", date: "12th of July" },
  { leftFighterId: "makhachev", rightFighterId: "pereira", time: "10:00 PM", venue: "T-Mobile Arena", date: "19th of July" },
  { leftFighterId: "edwards", rightFighterId: "makhachev", time: "9:00 PM", venue: "O2 Arena", date: "26th of July" },
  { leftFighterId: "pereira", rightFighterId: "jdm", time: "10:30 PM", venue: "Madison Square Garden", date: "2nd of August" },
] as const;

<style>{`
  .ufc-hero-glow::before {
    content: '';
    position: absolute;
    top: -60px;
    left: -60px;
    width: 250px;
    height: 250px;
    background: radial-gradient(ellipse at top left, rgba(251,191,36,0.5) 0%, rgba(251,191,36,0.2) 40%, transparent 70%);
    filter: blur(50px);
    transform: rotate(-20deg);
    pointer-events: none;
  }
  .ufc-hero-glow::after {
    content: '';
    position: absolute;
    top: -60px;
    right: -60px;
    width: 250px;
    height: 250px;
    background: radial-gradient(ellipse at top right, rgba(251,191,36,0.5) 0%, rgba(251,191,36,0.2) 40%, transparent 70%);
    filter: blur(50px);
    transform: rotate(20deg);
    pointer-events: none;
  }
  .ufc-scrollbar::-webkit-scrollbar { width: 5px; }
  .ufc-scrollbar::-webkit-scrollbar-track { background: rgba(26, 21, 5, 0.3); border-radius: 3px; }
  .ufc-scrollbar::-webkit-scrollbar-thumb { background: rgba(251, 191, 36, 0.35); border-radius: 3px; }
  .ufc-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(251, 191, 36, 0.6); }
`}</style>

const hostFeatures = [
  { title: "Build your fight camp", copy: "Create a custom tournament page for your fighting community with events and rankings." },
  { title: "Manage fighters", copy: "Collect fighter registrations, track weight classes, and manage fight cards." },
  { title: "Fight scheduling", copy: "Schedule fights, track results, and publish fight night schedules." },
  { title: "Live rankings", copy: "Display real-time fighter rankings and title contendership." },
];

function LogoMark() {
  return (
    <span className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-md border border-white/10 bg-[#18181b] text-[#fbbf24]">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    </span>
  );
}

export default function UFCPage() {
  const [showDevKit, setShowDevKit] = useState(false);
  const [devKitState, setDevKitState] = useState<UFCDevKitState>(initialUFCDevKitState);
  const [leonImg, setLeonImg] = useState("/UFC/Leon_Edwards.png");
  const [jdmImg, setJdmImg] = useState("/UFC/Jack Della Maddalena.png");
  const [leftFighterId, setLeftFighterId] = useState("edwards");
  const [rightFighterId, setRightFighterId] = useState("jdm");
  const leftFighter = fighters.find((f) => f.id === leftFighterId) ?? fighters[0];
  const rightFighter = fighters.find((f) => f.id === rightFighterId) ?? fighters[1];

  const isTitleFight = leftFighter.isChampion || rightFighter.isChampion;
  const cardLabel = isTitleFight ? "Main Card Title Fight" : "Main Card Fight";
  const fightTitle = `${leftFighter.name} vs ${rightFighter.name}`;

  const matchedFight = mainCardFights.find((f) => f.leftFighterId === leftFighterId && f.rightFighterId === rightFighterId) ?? mainCardFights.find((f) => (f.leftFighterId === rightFighterId && f.rightFighterId === leftFighterId));
  const fightDesc = matchedFight
    ? `Fight starts at ${matchedFight.time} in the ${matchedFight.venue} on the ${matchedFight.date}!`
    : `Live from the T-Mobile Arena!`;
  const leonInputRef = useRef<HTMLInputElement>(null);
  const jdmInputRef = useRef<HTMLInputElement>(null);
  const handleDevKitStateChange = (updates: Partial<UFCDevKitState>) => {
    setDevKitState((prev) => ({ ...prev, ...updates }));
  };
  const handleImageChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setter(URL.createObjectURL(file));
    }
  };
  return (
    <main className="min-h-screen bg-[#0e0e10] text-[#efeff1]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-5 lg:px-8">
          <a href="/" className="flex items-center gap-2 sm:gap-3" aria-label="Elo Labs home">
            <LogoMark />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">Elo Labs</span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#fbbf24] drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] animate-pulse">Tournament Platform</span>
            </div>
          </a>
          <div className="hidden sm:flex items-center gap-2">
            <a href="/f1" className="px-2.5 sm:px-3.5 py-1.5 rounded text-sm sm:text-base font-bold tracking-widest text-white/50 hover:text-white transition-colors">F1</a>
            <span className="text-white/20 text-xs">|</span>
            <a href="/ufc" className="px-2.5 sm:px-3.5 py-1.5 rounded text-sm sm:text-base font-bold tracking-widest text-[#fbbf24]">UFC</a>
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
                { href: "/f1", label: "F1" },
                { href: "/ufc", label: "UFC", isActive: true },
                { href: "/fc26", label: "FC26" },
                { href: "/nba-2k", label: "NBA 2K" },
                { href: "/pga", label: "PGA" },
              ]}
              accentColor="#fbbf24"
            />
            <a href="#" className="relative flex h-9 sm:h-10 items-center gap-2 rounded-md bg-gradient-to-b from-[#b45309] to-[#92400e] px-3 sm:px-4 text-xs sm:text-sm font-semibold text-white border border-[#d97706] transition hover:from-[#d97706] hover:to-[#b45309] overflow-hidden">
              <span className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 1px, transparent 2px)', backgroundSize: '4px 100%' }} />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="relative z-10 sm:w-4 sm:h-4"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#fcd34d"/></svg>
              <span className="relative z-10 hidden sm:inline">Login with Discord</span>
              <span className="relative z-10 sm:hidden">Login</span>
              <ArrowRight size={14} className="text-[#fcd34d] relative z-10 sm:w-4 sm:h-4" />
            </a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#0e0e10] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 min-h-[calc(100vh+50px)] sm:min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/UFC/Octogon.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundAttachment: 'local',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10]/80 via-[#0e0e10]/40 to-transparent ufc-hero-glow" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 mt-8 sm:mt-12">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">UFC Fighting Tournaments</h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/80 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] max-w-md mx-auto">Compete in UFC tournaments. Track your wins, climb the rankings, and become the champion.</p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 md:gap-10 lg:gap-16">
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => leonInputRef.current?.click()}
                  className="relative group cursor-pointer"
                  aria-label="Change left fighter image"
                >
                  <img src={leonImg} alt={leftFighter.name} className="h-[120px] sm:h-[180px] md:h-[240px] object-contain drop-shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-opacity group-hover:opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/80">Click to change</span>
                  </div>
                  <input ref={leonInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange(setLeonImg)} />
                </button>
                <div className="mt-2 sm:mt-3 text-center">
                  <div className="relative">
                    <select
                      value={leftFighterId}
                      onChange={(e) => { setLeftFighterId(e.target.value); setLeonImg(fighters.find((f) => f.id === e.target.value)!.img); }}
                      className="appearance-none bg-[#1a1505] border border-[#fbbf24]/40 text-white text-xs sm:text-sm font-bold rounded-md pl-2 sm:pl-3 pr-6 sm:pr-8 py-1 cursor-pointer focus:outline-none focus:border-[#fbbf24]"
                    >
                      {fighters.map((f) => (
                        <option key={f.id} value={f.id}>{f.name}</option>
                      ))}
                    </select>
                    <svg className="pointer-events-none absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-[#fbbf24]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="mt-1 flex justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-white/60">
                    <span className="text-[#4ade80] font-semibold">{leftFighter.wins}W</span>
                    <span className="text-white/40">{leftFighter.draws}D</span>
                    <span className="text-[#ef4444] font-semibold">{leftFighter.losses}L</span>
                    <span className="text-[#fbbf24] font-semibold">KO {leftFighter.koPercent}%</span>
                  </div>
                </div>
              </div>

              <div className="text-center flex-shrink-0 min-w-[140px] sm:min-w-[200px] md:min-w-[280px]">
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#fbbf24]/80 font-semibold mb-1 animate-pulse">{cardLabel}</div>
                <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">{fightTitle}</h2>
                <p className="mt-2 text-xs sm:text-sm text-white/60">{fightDesc}</p>
              </div>

              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => jdmInputRef.current?.click()}
                  className="relative group cursor-pointer"
                  aria-label="Change right fighter image"
                >
                  <img src={jdmImg} alt={rightFighter.name} className="h-[120px] sm:h-[180px] md:h-[240px] object-contain drop-shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-opacity group-hover:opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/80">Click to change</span>
                  </div>
                  <input ref={jdmInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange(setJdmImg)} />
                </button>
                <div className="mt-2 sm:mt-3 text-center">
                  <div className="relative">
                    <select
                      value={rightFighterId}
                      onChange={(e) => { setRightFighterId(e.target.value); setJdmImg(fighters.find((f) => f.id === e.target.value)!.img); }}
                      className="appearance-none bg-[#1a1505] border border-[#fbbf24]/40 text-white text-xs sm:text-sm font-bold rounded-md pl-2 sm:pl-3 pr-6 sm:pr-8 py-1 cursor-pointer focus:outline-none focus:border-[#fbbf24]"
                    >
                      {fighters.map((f) => (
                        <option key={f.id} value={f.id}>{f.name}</option>
                      ))}
                    </select>
                    <svg className="pointer-events-none absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-[#fbbf24]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="mt-1 flex justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-white/60">
                    <span className="text-[#4ade80] font-semibold">{rightFighter.wins}W</span>
                    <span className="text-white/40">{rightFighter.draws}D</span>
                    <span className="text-[#ef4444] font-semibold">{rightFighter.losses}L</span>
                    <span className="text-[#fbbf24] font-semibold">KO {rightFighter.koPercent}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-5 md:gap-8 px-4">
            <div className="text-center px-4 sm:px-6 py-2 rounded-lg bg-[#fbbf24]/30 border border-[#fbbf24]/50 shadow-[0_0_25px_rgba(251,191,36,0.2)]"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#fbbf24]">0</div><div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">Fights</div></div>
            <div className="text-center px-4 sm:px-6 py-2 rounded-lg bg-[#fbbf24]/30 border border-[#fbbf24]/50 shadow-[0_0_25px_rgba(251,191,36,0.2)]"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#fbbf24]">0</div><div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">Fighters</div></div>
            <div className="text-center px-4 sm:px-6 py-2 rounded-lg bg-[#fbbf24]/30 border border-[#fbbf24]/50 shadow-[0_0_25px_rgba(251,191,36,0.2)]"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#fbbf24]">0</div><div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">Events</div></div>
          </div>
        </div>
      </section>

      {/* Dev Kit Preview Section - Desktop: 4 panels, Mobile: button */}
      <section className="relative py-8 lg:py-12 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/UFC/ufcgym.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'local',
          }}
        />
        <div className="absolute inset-0 bg-[#0e0e10]/80" />
        <div className="relative mx-auto max-w-[1400px] px-4">
          <div className="hidden lg:block mb-4">
            <div className="flex items-center gap-2 text-[#fbbf24] text-xs font-semibold uppercase tracking-widest">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              Dev Kit Preview
            </div>
          </div>
          <div className="hidden lg:grid lg:grid-cols-4 gap-4">
            <div className="bg-[#1a1505]/70 backdrop-blur-sm border border-white/10 rounded-lg p-4 overflow-y-auto ufc-scrollbar">
              <FightCardSetup state={devKitState} onStateChange={handleDevKitStateChange} />
            </div>
            <div className="bg-[#1a1505]/70 backdrop-blur-sm border border-white/10 rounded-lg p-4 overflow-y-auto ufc-scrollbar">
              <FighterRankings state={devKitState} />
            </div>
            <div className="bg-[#1a1505]/70 backdrop-blur-sm border border-white/10 rounded-lg p-4 overflow-y-auto ufc-scrollbar">
              <WeightClasses state={devKitState} />
            </div>
            <div className="bg-[#1a1505]/70 backdrop-blur-sm border border-white/10 rounded-lg p-4 overflow-y-auto ufc-scrollbar">
              <FighterProfile state={devKitState} onStateChange={handleDevKitStateChange} />
            </div>
          </div>

          <div className="lg:hidden text-center">
            <button
              onClick={() => setShowDevKit(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#fbbf24]/10 border border-[#fbbf24]/30 text-[#fbbf24] font-medium text-base hover:bg-[#fbbf24]/20 transition-colors"
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

      <UFCDevKitModal isOpen={showDevKit} onClose={() => setShowDevKit(false)} />

      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #1a1505, #131005)' }}>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/UFC/ufcgym.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundAttachment: 'local',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131005]/90 via-[#131005]/70 to-[#1a1505]/60" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8"><div className="w-8 sm:w-12 h-[3px] bg-[#fbbf24]" /><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Run your own events</h2></div>
          <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2">{hostFeatures.map((f) => <div key={f.title} className="relative bg-[#251a08] border border-white/5 p-5 sm:p-6 rounded-lg hover:bg-[#2d1f08] transition-colors"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#fbbf24]/10 border border-[#fbbf24]/20"><Trophy size={18} className="sm:w-[22px] sm:h-[22px] text-[#fbbf24]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">{f.title}</h3><p className="mt-2 text-sm text-[#8ba892]">{f.copy}</p></div>)}</div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-28" style={{ background: 'linear-gradient(to bottom, #131005, #0e0e10)' }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(circle at 30% 50%, rgba(251,191,36,0.15) 0%, transparent 50%)` }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8"><div className="w-8 sm:w-12 h-[3px] bg-[#fbbf24]" /><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">For fighting communities</h2></div>
          <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#251a08] border border-white/5 p-5 sm:p-6 rounded-lg"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#fbbf24]/10 border border-[#fbbf24]/20"><Globe size={18} className="sm:w-[22px] sm:h-[22px] text-[#fbbf24]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">Fight records</h3><p className="mt-2 text-sm text-[#8ba892]">Track wins, losses, KOs, and career statistics.</p></div>
            <div className="bg-[#251a08] border border-white/5 p-5 sm:p-6 rounded-lg"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#fbbf24]/10 border border-[#fbbf24]/20"><Shield size={18} className="sm:w-[22px] sm:h-[22px] text-[#fbbf24]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">Weight classes</h3><p className="mt-2 text-sm text-[#8ba892]">Organize fights by weight class and division.</p></div>
            <div className="bg-[#251a08] border border-white/5 p-5 sm:p-6 rounded-lg"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#fbbf24]/10 border border-[#fbbf24]/20"><Users size={18} className="sm:w-[22px] sm:h-[22px] text-[#fbbf24]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">Fighter profiles</h3><p className="mt-2 text-sm text-[#8ba892]">Build fighter profiles with stats and history.</p></div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:px-8" style={{ background: 'linear-gradient(to bottom, #0e0e10, #0e0e10)' }}>
        <div className="relative mx-auto max-w-5xl border border-[#fbbf24]/20 bg-[#201a05] p-6 sm:p-8 text-white shadow-[0_0_40px_rgba(251,191,36,0.1)]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Start fight night</h2><p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#adadb8]">Set up your fight event and start signing up fighters.</p></div>
            <a href="#" className="flex h-10 sm:h-12 items-center justify-center gap-2 rounded-md bg-[#efeff1] px-5 sm:px-6 text-sm font-semibold text-[#0e0e10] shrink-0 self-end sm:self-start">Get started<ArrowRight size={16} className="sm:w-[17px] sm:h-[17px]" /></a>
          </div>
        </div>
      </section>
    </main>
  );
}