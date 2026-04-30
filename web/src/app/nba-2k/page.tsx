import Link from "next/link";
import { ArrowRight, Globe, Shield, Trophy, Users } from "lucide-react";

const hostFeatures = [
  { title: "Build your league", copy: "Create a custom tournament page for your basketball community with seasons and playoffs." },
  { title: "Manage players", copy: "Collect player registrations, track team rosters, and manage divisions." },
  { title: "Season scheduling", copy: "Schedule games, track scores, and publish league standings." },
  { title: "Player stats", copy: "Track player statistics, per-game averages, and career totals." },
];

function LogoMark() {
  return (
    <span className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-md border border-white/10 bg-[#18181b] text-[#f97316]">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M2 12h20" />
      </svg>
    </span>
  );
}

export default function NBA2KPage() {
  return (
    <main className="min-h-screen bg-[#0e0e10] text-[#efeff1]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex h-16 sm:h-20 max-w-5xl items-center justify-between px-4 sm:px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-2 sm:gap-3" aria-label="Elo Labs home">
            <LogoMark />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">Elo Labs</span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316] drop-shadow-[0_0_10px_rgba(249,115,22,0.5)] animate-pulse">Tournament Platform</span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <a href="#" className="relative flex h-9 sm:h-10 items-center gap-2 rounded-md bg-gradient-to-b from-[#c2410c] to-[#9a3412] px-3 sm:px-4 text-xs sm:text-sm font-semibold text-white border border-[#ea580c] transition hover:from-[#ea580c] hover:to-[#c2410c] overflow-hidden">
              <span className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 1px, transparent 2px)', backgroundSize: '4px 100%' }} />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="relative z-10 sm:w-4 sm:h-4"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#fdba74"/></svg>
              <span className="relative z-10 hidden sm:inline">Login with Discord</span>
              <span className="relative z-10 sm:hidden">Login</span>
              <ArrowRight size={14} className="text-[#fdba74] relative z-10 sm:w-4 sm:h-4" />
            </a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#0e0e10] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 min-h-[calc(100vh+50px)] sm:min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0e0e10_0%,#1a1208_40%,#0f0a04_100%)]" />
          
          <div className="absolute top-0 left-[10%] w-24 sm:w-[180px] h-24 sm:h-[180px] rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute top-0 right-[10%] w-24 sm:w-[180px] h-24 sm:h-[180px] rounded-full bg-purple-500/20 blur-3xl" />
          
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 60%),
              radial-gradient(ellipse 40% 30% at 80% 20%, rgba(168,85,247,0.08) 0%, transparent 50%)
            `
          }} />
          
          <div className="absolute bottom-[20%] sm:bottom-[25%] left-0 right-0 h-64 sm:h-96 flex items-end justify-center">
            <div className="relative w-[90%] sm:w-[70%] max-w-3xl aspect-[2/1]">
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <pattern id="wood" x="0" y="0" width="20" height="10" patternUnits="userSpaceOnUse">
                    <rect width="20" height="10" fill="#3d2814"/>
                    <line x1="0" y1="5" x2="20" y2="5" stroke="#4a3020" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect x="0" y="0" width="400" height="200" rx="2" fill="url(#wood)"/>
                <rect x="10" y="10" width="380" height="180" rx="1" fill="none" stroke="#f97316" strokeWidth="2"/>
                <circle cx="200" cy="100" r="25" fill="none" stroke="#f97316" strokeWidth="2"/>
                <circle cx="200" cy="100" r="3" fill="#f97316"/>
                <line x1="10" y1="60" x2="390" y2="60" stroke="#f97316" strokeWidth="1.5" opacity="0.4"/>
                <line x1="10" y1="140" x2="390" y2="140" stroke="#f97316" strokeWidth="1.5" opacity="0.4"/>
                <rect x="10" y="70" width="60" height="60" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.6"/>
                <rect x="330" y="70" width="60" height="60" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.6"/>
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent" />
          </div>
          
          <div className="absolute bottom-[5%] sm:bottom-[8%] left-1/2 -translate-x-1/2 flex gap-6 sm:gap-10 md:gap-14 px-4">
            <div className="text-center"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">0</div><div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Leagues</div></div>
            <div className="text-center"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">0</div><div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Games</div></div>
            <div className="text-center"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">0</div><div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Players</div></div>
          </div>
          
          <div className="absolute inset-x-0 top-[5%] sm:top-[8%] lg:top-[10%] flex justify-center">
            <div className="text-center px-4">
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3">
                <a href="/f1" className="px-3 sm:px-4 py-1.5 rounded text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest text-white/50 hover:text-white transition-colors">F1</a>
                <span className="text-white/30 text-sm">|</span>
                <a href="/ufc" className="px-3 sm:px-4 py-1.5 rounded text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest text-white/50 hover:text-white transition-colors">UFC</a>
                <span className="text-white/30 text-sm">|</span>
                <a href="/fc26" className="px-3 sm:px-4 py-1.5 rounded text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest text-white/50 hover:text-white transition-colors">FC26</a>
                <span className="text-white/30 text-sm">|</span>
                <a href="/nba-2k" className="px-3 sm:px-4 py-1.5 rounded text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest text-[#f97316]">NBA 2K</a>
                <span className="text-white/30 text-sm">|</span>
                <a href="/pga" className="px-3 sm:px-4 py-1.5 rounded text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest text-white/50 hover:text-white transition-colors">PGA</a>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">NBA 2K Tournaments</h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/70 max-w-md mx-auto">Compete in NBA 2K tournaments. Build your legacy, climb the rankings, and become the champion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1a1208] py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(249,115,22,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.05) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8"><div className="w-8 sm:w-12 h-[3px] bg-[#f97316]" /><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Run your own league</h2></div>
          <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2">{hostFeatures.map((f) => <div key={f.title} className="relative bg-[#251810] border border-white/5 p-5 sm:p-6 rounded-lg hover:bg-[#2d1f12] transition-colors"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#f97316]/10 border border-[#f97316]/20"><Trophy size={18} className="sm:w-[22px] sm:h-[22px] text-[#f97316]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">{f.title}</h3><p className="mt-2 text-sm text-[#8ba892]">{f.copy}</p></div>)}</div>
        </div>
      </section>

      <section className="relative bg-[#0f0a04] py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(circle at 30% 50%, rgba(249,115,22,0.2) 0%, transparent 50%)` }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8"><div className="w-8 sm:w-12 h-[3px] bg-[#f97316]" /><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">For basketball communities</h2></div>
          <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#251810] border border-white/5 p-5 sm:p-6 rounded-lg"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#f97316]/10 border border-[#f97316]/20"><Globe size={18} className="sm:w-[22px] sm:h-[22px] text-[#f97316]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">Season stats</h3><p className="mt-2 text-sm text-[#8ba892]">Track points, assists, rebounds, and more.</p></div>
            <div className="bg-[#251810] border border-white/5 p-5 sm:p-6 rounded-lg"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#f97316]/10 border border-[#f97316]/20"><Shield size={18} className="sm:w-[22px] sm:h-[22px] text-[#f97316]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">Divisions</h3><p className="mt-2 text-sm text-[#8ba892]">Organize teams by skill level and conferences.</p></div>
            <div className="bg-[#251810] border border-white/5 p-5 sm:p-6 rounded-lg"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#f97316]/10 border border-[#f97316]/20"><Users size={18} className="sm:w-[22px] sm:h-[22px] text-[#f97316]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">Player profiles</h3><p className="mt-2 text-sm text-[#8ba892]">Build player stats and career history.</p></div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1a1208] py-16 sm:py-20 lg:px-8">
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(249,115,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.03) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="relative mx-auto max-w-5xl gap-6 sm:gap-8 border border-[#f97316]/20 bg-[#201510] p-6 sm:p-8 text-white lg:grid-cols-[1fr_auto] lg:flex shadow-[0_0_40px_rgba(249,115,22,0.1)]">
          <div><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Start your season</h2><p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#adadb8]">Set up your basketball league and invite players.</p></div>
          <div className="mt-4 sm:mt-6 flex flex-col gap-3 lg:mt-0 lg:flex-row"><a href="#" className="flex h-10 sm:h-12 items-center justify-center gap-2 rounded-md bg-[#efeff1] px-5 sm:px-6 text-sm font-semibold text-[#0e0e10]">Get started<ArrowRight size={16} className="sm:w-[17px] sm:h-[17px]" /></a></div>
        </div>
      </section>
    </main>
  );
}