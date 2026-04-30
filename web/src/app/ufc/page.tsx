import { ArrowRight, Globe, Shield, Trophy, Users } from "lucide-react";

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
  return (
    <main className="min-h-screen bg-[#0e0e10] text-[#efeff1]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex h-16 sm:h-20 max-w-5xl items-center justify-between px-4 sm:px-5 lg:px-8">
          <a href="/" className="flex items-center gap-2 sm:gap-3" aria-label="Elo Labs home">
            <LogoMark />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">Elo Labs</span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#fbbf24] drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] animate-pulse">Tournament Platform</span>
            </div>
          </a>
          <div className="flex items-center gap-2">
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
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0e0e10_0%,#1a1505_40%,#100d03_100%)]" />
          
          <div className="absolute top-0 left-[10%] w-24 sm:w-[180px] h-24 sm:h-[180px] rounded-full bg-amber-500/20 blur-3xl" />
          <div className="absolute top-0 right-[10%] w-24 sm:w-[180px] h-24 sm:h-[180px] rounded-full bg-amber-500/20 blur-3xl" />
          
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 50% 0%, rgba(251,191,36,0.12) 0%, transparent 60%),
              radial-gradient(ellipse 50% 30% at 20% 30%, rgba(251,191,36,0.08) 0%, transparent 50%),
              radial-gradient(ellipse 50% 30% at 80% 30%, rgba(251,191,36,0.08) 0%, transparent 50%)
            `
          }} />
          
          <div className="absolute bottom-[3%] sm:bottom-[4%] left-0 right-0 h-64 sm:h-96 flex items-end justify-center">
            <div className="relative w-[80%] sm:w-[60%] max-w-xl aspect-square">
              <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0"/>
                  </radialGradient>
                  <linearGradient id="glassCanvas" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6b6b6b" stopOpacity="0.9"/>
                    <stop offset="30%" stopColor="#4a4a4a" stopOpacity="0.85"/>
                    <stop offset="70%" stopColor="#3a3a3a" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#2a2a2a" stopOpacity="0.75"/>
                  </linearGradient>
                  <linearGradient id="glassFence" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3a3a3a" stopOpacity="0.6"/>
                    <stop offset="50%" stopColor="#1a1a1a" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.3"/>
                  </linearGradient>
                  <linearGradient id="glassHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="white" stopOpacity="0"/>
                    <stop offset="50%" stopColor="white" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <polygon points="200,10 370,72 370,328 200,390 30,328 30,72" fill="url(#glassCanvas)" stroke="#555" strokeWidth="1"/>
                <polygon points="200,30 340,82 340,318 200,370 60,318 60,82" fill="none" stroke="#fbbf24" strokeWidth="0.5" opacity="0.4"/>
                <polygon points="200,35 330,85 330,315 200,365 70,315 70,85" fill="url(#glassHighlight)" opacity="0.3"/>
                <g>
                  <polygon points="200,30 340,82 340,318 200,370 60,318 60,82" fill="none" stroke="#222" strokeWidth="10" stroke-linejoin="round"/>
                  <polygon points="200,30 340,82 340,318 200,370 60,318 60,82" fill="url(#glassFence)" stroke="#333" strokeWidth="1"/>
                </g>
                <g transform="translate(200, 200)">
                  <circle cx="0" cy="0" r="50" fill="url(#centerGlow)"/>
                  <text x="0" y="8" textAnchor="middle" fill="#fbbf24" fontSize="28" fontWeight="bold" fontFamily="sans-serif">UFC</text>
                </g>
                <g transform="translate(200, 75)">
                  <text x="0" y="-5" textAnchor="middle" fill="#fbbf24" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.5">CURRENT CHAMPIONS</text>
                  <foreignObject x="-80" y="0" width="160" height="40">
                    <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
                      <div className="flex animate-[championRotate_40s_linear_infinite]">
                        <div className="flex-shrink-0 w-full text-center">
                          <span className="text-xs sm:text-sm font-bold text-white">Jon Jones</span>
                          <span className="block text-[10px] sm:text-xs text-[#fbbf24]">Heavyweight</span>
                        </div>
                        <div className="flex-shrink-0 w-full text-center">
                          <span className="text-xs sm:text-sm font-bold text-white">Alex Pereira</span>
                          <span className="block text-[10px] sm:text-xs text-[#fbbf24]">Light Heavyweight</span>
                        </div>
                        <div className="flex-shrink-0 w-full text-center">
                          <span className="text-xs sm:text-sm font-bold text-white">Dricus du Plessis</span>
                          <span className="block text-[10px] sm:text-xs text-[#fbbf24]">Middleweight</span>
                        </div>
                        <div className="flex-shrink-0 w-full text-center">
                          <span className="text-xs sm:text-sm font-bold text-white">Belal Muhammad</span>
                          <span className="block text-[10px] sm:text-xs text-[#fbbf24]">Welterweight</span>
                        </div>
                        <div className="flex-shrink-0 w-full text-center">
                          <span className="text-xs sm:text-sm font-bold text-white">Islam Makhachev</span>
                          <span className="block text-[10px] sm:text-xs text-[#fbbf24]">Lightweight</span>
                        </div>
                        <div className="flex-shrink-0 w-full text-center">
                          <span className="text-xs sm:text-sm font-bold text-white">Alexander Volkanovski</span>
                          <span className="block text-[10px] sm:text-xs text-[#fbbf24]">Featherweight</span>
                        </div>
                        <div className="flex-shrink-0 w-full text-center">
                          <span className="text-xs sm:text-sm font-bold text-white">Sean O'Malley</span>
                          <span className="block text-[10px] sm:text-xs text-[#fbbf24]">Bantamweight</span>
                        </div>
                        <div className="flex-shrink-0 w-full text-center">
                          <span className="text-xs sm:text-sm font-bold text-white">Brandon Moreno</span>
                          <span className="block text-[10px] sm:text-xs text-[#fbbf24]">Flyweight</span>
                        </div>
                      </div>
                    </div>
                  </foreignObject>
                </g>
                <polygon points="200,35 330,85 330,315 200,365 70,315 70,85" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.8"/>
                
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent" />
          </div>
          
          <div className="absolute bottom-[16%] sm:bottom-[18%] left-1/2 -translate-x-1/2 flex gap-3 sm:gap-5 md:gap-8 px-4">
            <div className="text-center px-4 sm:px-6 py-2 rounded-lg bg-[#fbbf24]/10 border border-[#fbbf24]/30 shadow-[0_0_25px_rgba(251,191,36,0.12)]"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#fbbf24]">0</div><div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">Fights</div></div>
            <div className="text-center px-4 sm:px-6 py-2 rounded-lg bg-[#fbbf24]/10 border border-[#fbbf24]/30 shadow-[0_0_25px_rgba(251,191,36,0.12)]"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#fbbf24]">0</div><div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">Fighters</div></div>
            <div className="text-center px-4 sm:px-6 py-2 rounded-lg bg-[#fbbf24]/10 border border-[#fbbf24]/30 shadow-[0_0_25px_rgba(251,191,36,0.12)]"><div className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#fbbf24]">0</div><div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">Events</div></div>
          </div>
          
          <div className="absolute inset-x-0 top-[5%] sm:top-[8%] lg:top-[10%] flex justify-center">
            <div className="text-center px-4">
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3">
                <a href="/f1" className="px-3 sm:px-4 py-1.5 rounded text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest text-white/50 hover:text-white transition-colors">F1</a>
                <span className="text-white/30 text-sm">|</span>
                <a href="/ufc" className="px-3 sm:px-4 py-1.5 rounded text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest text-[#fbbf24]">UFC</a>
                <span className="text-white/30 text-sm">|</span>
                <a href="/fc26" className="px-3 sm:px-4 py-1.5 rounded text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest text-white/50 hover:text-white transition-colors">FC26</a>
                <span className="text-white/30 text-sm">|</span>
                <a href="/nba-2k" className="px-3 sm:px-4 py-1.5 rounded text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest text-white/50 hover:text-white transition-colors">NBA 2K</a>
                <span className="text-white/30 text-sm">|</span>
                <a href="/pga" className="px-3 sm:px-4 py-1.5 rounded text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest text-white/50 hover:text-white transition-colors">PGA</a>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">UFC Fighting Tournaments</h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/70 max-w-md mx-auto">Compete in UFC tournaments. Track your wins, climb the rankings, and become the champion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1a1505] py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(251,191,36,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.05) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8"><div className="w-8 sm:w-12 h-[3px] bg-[#fbbf24]" /><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">Run your own events</h2></div>
          <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2">{hostFeatures.map((f) => <div key={f.title} className="relative bg-[#251a08] border border-white/5 p-5 sm:p-6 rounded-lg hover:bg-[#2d1f08] transition-colors"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#fbbf24]/10 border border-[#fbbf24]/20"><Trophy size={18} className="sm:w-[22px] sm:h-[22px] text-[#fbbf24]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">{f.title}</h3><p className="mt-2 text-sm text-[#8ba892]">{f.copy}</p></div>)}</div>
        </div>
      </section>

      <section className="relative bg-[#100d03] py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(circle at 30% 50%, rgba(251,191,36,0.2) 0%, transparent 50%)` }} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8"><div className="w-8 sm:w-12 h-[3px] bg-[#fbbf24]" /><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">For fighting communities</h2></div>
          <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#251a08] border border-white/5 p-5 sm:p-6 rounded-lg"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#fbbf24]/10 border border-[#fbbf24]/20"><Globe size={18} className="sm:w-[22px] sm:h-[22px] text-[#fbbf24]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">Fight records</h3><p className="mt-2 text-sm text-[#8ba892]">Track wins, losses, KOs, and career statistics.</p></div>
            <div className="bg-[#251a08] border border-white/5 p-5 sm:p-6 rounded-lg"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#fbbf24]/10 border border-[#fbbf24]/20"><Shield size={18} className="sm:w-[22px] sm:h-[22px] text-[#fbbf24]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">Weight classes</h3><p className="mt-2 text-sm text-[#8ba892]">Organize fights by weight class and division.</p></div>
            <div className="bg-[#251a08] border border-white/5 p-5 sm:p-6 rounded-lg"><div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-[#fbbf24]/10 border border-[#fbbf24]/20"><Users size={18} className="sm:w-[22px] sm:h-[22px] text-[#fbbf24]" /></div><h3 className="text-sm sm:text-base font-semibold text-white">Fighter profiles</h3><p className="mt-2 text-sm text-[#8ba892]">Build fighter profiles with stats and history.</p></div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1a1505] py-16 sm:py-20 lg:px-8">
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(251,191,36,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.03) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="relative mx-auto max-w-5xl gap-6 sm:gap-8 border border-[#fbbf24]/20 bg-[#201a05] p-6 sm:p-8 text-white lg:grid-cols-[1fr_auto] lg:flex shadow-[0_0_40px_rgba(251,191,36,0.1)]">
          <div><h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Start fight night</h2><p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#adadb8]">Set up your fight event and start signing up fighters.</p></div>
          <div className="mt-4 sm:mt-6 flex flex-col gap-3 lg:mt-0 lg:flex-row"><a href="#" className="flex h-10 sm:h-12 items-center justify-center gap-2 rounded-md bg-[#efeff1] px-5 sm:px-6 text-sm font-semibold text-[#0e0e10]">Get started<ArrowRight size={16} className="sm:w-[17px] sm:h-[17px]" /></a></div>
        </div>
      </section>
    </main>
  );
}