import Link from "next/link";
import { ArrowRight, Globe, Shield, Trophy, Users } from "lucide-react";

const hostFeatures = [
  { title: "Build your tour", copy: "Create a custom tournament page for your golf community with tours and events." },
  { title: "Manage golfers", copy: "Collect golfer registrations, track handicaps, and manage flight groups." },
  { title: "Score tracking", copy: "Track scores, calculate handicaps, and publish leaderboards." },
  { title: "Course layouts", copy: "Set up course layouts with par scores and hole-by-hole tracking." },
];

function LogoMark() {
  return (
    <span className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-md border border-white/10 bg-[#18181b] text-[#10b981]">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 2L12 22M8 22L16 6M8 8L16 8" />
      </svg>
    </span>
  );
}

export default function PGAPage() {
  return (
    <main className="min-h-screen bg-[#0e0e10] text-[#efeff1]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex h-16 sm:h-20 max-w-5xl items-center justify-between px-4 sm:px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-2 sm:gap-3" aria-label="Elo Labs home">
            <LogoMark />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">Elo Labs</span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#10b981] drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse">Tournament Platform</span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <a href="#" className="relative flex h-9 sm:h-10 items-center gap-2 rounded-md bg-gradient-to-b from-[#065f46] to-[#064e3b] px-3 sm:px-4 text-xs sm:text-sm font-semibold text-white border border-[#10b981] transition hover:from-[#10b981] hover:to-[#065f46] overflow-hidden">
              <span className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 1px, transparent 2px)', backgroundSize: '4px 100%' }} />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="relative z-10 sm:w-4 sm:h-4"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#6ee7b7"/></svg>
              <span className="relative z-10 hidden sm:inline">Login with Discord</span>
              <span className="relative z-10 sm:hidden">Login</span>
              <ArrowRight size={14} className="text-[#6ee7b7] relative z-10 sm:w-4 sm:h-4" />
            </a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#0e0e10] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 min-h-[calc(100vh+50px)] sm:min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0e0e10_0%,#081812_40%,#040c08_100%)]" />
          
          <div className="absolute top-0 left-[10%] w-24 sm:w-[180px] h-24 sm:h-[180px] rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute top-0 right-[10%] w-24 sm:w-[180px] h-24 sm:h-[180px] rounded-full bg-emerald-400/15 blur-3xl" />
          
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 50% 0%, rgba(16,185,129,0.12) 0%, transparent 60%),
              radial-gradient(ellipse 50% 30% at 20% 20%, rgba(52,211,153,0.08) 0%, transparent 50%),
              radial-gradient(ellipse 50% 30% at 80% 20%, rgba(16,185,129,0.08) 0%, transparent 50%)
            `
          }} />
          
          <div className="absolute bottom-[20%] sm:bottom-[25%] left-0 right-0 h-32 sm:h-40 flex items-end justify-center">
            <div className="relative w-[50%] sm:w-[35%] max-w-md aspect-[2/1]">
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="usOutline" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34d399"/>
                    <stop offset="100%" stopColor="#059669"/>
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="400" height="200" fill="#052e16"/>
                <path d="M90 45 L95 50 L90 55 L85 50 Z" fill="#10b981" stroke="#34d399" strokeWidth="1.5"/>
                <path d="M95 48 L108 52 L105 55 L95 52 Z" fill="#10b981" stroke="#34d399" strokeWidth="1"/>
                <path d="M105 35 Q130 30, 160 40 Q200 50, 220 45 Q250 40, 280 50 Q320 60, 340 55 Q360 50, 365 45 L370 48 Q360 55, 340 60 Q300 70, 260 65 Q200 55, 160 55 Q120 55, 100 45 Q90 40, 90 45 Z" fill="url(#usOutline)" opacity="0.9"/>
                <path d="M295 60 L300 65 L300 70 L295 72 L292 68 L292 63 Z" fill="#ef4444"/>
                <path d="M298 60 L298 52" stroke="#34d399" strokeWidth="1.5"/>
                <path d="M296 52 L298 48 L300 52" fill="none" stroke="#34d399" strokeWidth="1"/>
                <path d="M220 50 L225 55 L220 60 L215 55 Z" fill="#10b981" stroke="#34d399" strokeWidth="1" opacity="0.5"/>
                <path d="M180 80 L185 85 L180 90 L175 85 Z" fill="#10b981" stroke="#34d399" strokeWidth="1" opacity="0.5"/>
                <path d="M130 65 L135 70 L130 75 L125 70 Z" fill="#10b981" stroke="#34d399" strokeWidth="1" opacity="0.5"/>
                <path d="M260 85 L265 90 L260 95 L255 90 Z" fill="#10b981" stroke="#34d399" strokeWidth="1" opacity="0.5"/>
                <text x="200" y="130" textAnchor="middle" fill="#10b981" fontSize="28" fontWeight="bold" fontFamily="serif" letterSpacing="4">MASTERS</text>
                <text x="200" y="150" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="6">TOURNAMENT</text>
                <text x="200" y="170" textAnchor="middle" fill="#6ee7b7" fontSize="7" fontFamily="sans-serif" letterSpacing="2">A TRADITION UNLIKE ANY OTHER</text>
                <circle className="animate-[golfBall_6s_linear_infinite]" cx="20" cy="185" r="5" fill="white"/>
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent" />
          </div>
          
          <div className="absolute bottom-[5%] sm:bottom-[8%] left-1/2 -translate-x-1/2 flex gap-6 sm:gap-10 md:gap-14 px-4">
            <div className="text-center"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">0</div><div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Events</div></div>
            <div className="text-center"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">0</div><div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Rounds</div></div>
            <div className="text-center"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">0</div><div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">Golfers</div></div>
          </div>
          
          <div className="absolute inset-x-0 top-[8%] sm:top-[12%] lg:top-[14%] flex justify-center">
            <div className="text-center px-4">
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3">
                <a href="/f1" className="px-3 sm:px-4 py-1.5 rounded text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest text-white/50 hover:text-white transition-colors">F1</a>
                <span className="text-white/30 text-sm">|</span>
                <a href="/ufc" className="px-3 sm:px-4 py-1.5 rounded text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest text-white/50 hover:text-white transition-colors">UFC</a>
                <span className="text-white/30 text-sm">|</span>
                <a href="/fc26" className="px-3 sm:px-4 py-1.5 rounded text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest text-white/50 hover:text-white transition-colors">FC26</a>
                <span className="text-white/30 text-sm">|</span>
                <a href="/nba-2k" className="px-3 sm:px-4 py-1.5 rounded text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest text-white/50 hover:text-white transition-colors">NBA 2K</a>
                <span className="text-white/30 text-sm">|</span>
                <a href="/pga" className="px-3 sm:px-4 py-1.5 rounded text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest text-[#10b981]">PGA</a>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">PGA Golf Tournaments</h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/70 max-w-md mx-auto">Compete in PGA golf tournaments. Track your scores, climb the leaderboards, and become a pro.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#081812] py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(16,185,129,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.05) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8"><div className="w-8 sm:w-12 h-[3px] bg-[#10b981]" /><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Run your own tour</h2></div>
          <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2">{hostFeatures.map((f) => <div key={f.title} className="relative bg-[#0a2015] border border-white/5 p-5 sm:p-6 rounded-lg hover:bg-[#0d2618] transition-colors"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#10b981]/10 border border-[#10b981]/20"><Trophy size={18} className="sm:w-[22px] sm:h-[22px] text-[#10b981]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">{f.title}</h3><p className="mt-2 text-sm text-[#8ba892]">{f.copy}</p></div>)}</div>
        </div>
      </section>

      <section className="relative bg-[#040c08] py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16,185,129,0.2) 0%, transparent 50%)` }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8"><div className="w-8 sm:w-12 h-[3px] bg-[#10b981]" /><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">For golf communities</h2></div>
          <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#0a2015] border border-white/5 p-5 sm:p-6 rounded-lg"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#10b981]/10 border border-[#10b981]/20"><Globe size={18} className="sm:w-[22px] sm:h-[22px] text-[#10b981]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">Handicap tracking</h3><p className="mt-2 text-sm text-[#8ba892]">Track handicap index and scoring history.</p></div>
            <div className="bg-[#0a2015] border border-white/5 p-5 sm:p-6 rounded-lg"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#10b981]/10 border border-[#10b981]/20"><Shield size={18} className="sm:w-[22px] sm:h-[22px] text-[#10b981]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">Course ratings</h3><p className="mt-2 text-sm text-[#8ba892]">Set up course par and slope ratings.</p></div>
            <div className="bg-[#0a2015] border border-white/5 p-5 sm:p-6 rounded-lg"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#10b981]/10 border border-[#10b981]/20"><Users size={18} className="sm:w-[22px] sm:h-[22px] text-[#10b981]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">Golfer profiles</h3><p className="mt-2 text-sm text-[#8ba892]">Build golfer stats and career history.</p></div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#081812] py-16 sm:py-20 lg:px-8">
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="relative mx-auto max-w-5xl border border-[#10b981]/20 bg-[#061810] p-6 sm:p-8 text-white shadow-[0_0_40px_rgba(16,185,129,0.1)]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Start your tournament</h2><p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#adadb8]">Set up your golf tour and invite golfers.</p></div>
            <a href="#" className="flex h-10 sm:h-12 items-center justify-center gap-2 rounded-md bg-[#efeff1] px-5 sm:px-6 text-sm font-semibold text-[#0e0e10] shrink-0 self-end sm:self-start">Get started<ArrowRight size={16} className="sm:w-[17px] sm:h-[17px]" /></a>
          </div>
        </div>
      </section>
    </main>
  );
}