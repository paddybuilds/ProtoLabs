import { ArrowRight, Globe, Trophy, Users, Target, Calendar, Shield } from "lucide-react";

const features = [
  { icon: Calendar, title: "Event Scheduling", copy: "Schedule tournaments, set times, and manage multiple events across different sports." },
  { icon: Target, title: "Player Management", copy: "Collect registrations, track rosters, and manage divisions for any sport." },
  { icon: Trophy, title: "Brackets & Results", copy: "Generate brackets automatically, track scores, and publish results instantly." },
  { icon: Users, title: "Community Building", copy: "Create branded tournament pages for your community with live rankings." },
];

const sports = [
  { name: "F1", href: "/f1", color: "red", accent: "#ef4444", desc: "Formula 1 Tournaments", icon: "🏎️" },
  { name: "UFC", href: "/ufc", color: "amber", accent: "#fbbf24", desc: "Fighting Championships", icon: "🥊" },
  { name: "FC26", href: "/fc26", color: "emerald", accent: "#10b981", desc: "Football Leagues", icon: "⚽" },
  { name: "NBA 2K", href: "/nba-2k", color: "orange", accent: "#f97316", desc: "Basketball Events", icon: "🏀" },
  { name: "PGA", href: "/pga", color: "green", accent: "#22c55e", desc: "Golf Tournaments", icon: "⛳" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0e10] text-[#efeff1]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex h-16 sm:h-20 max-w-5xl items-center justify-between px-4 sm:px-5 lg:px-8">
          <a href="#" className="flex items-center gap-2 sm:gap-3" aria-label="Elo Labs home">
            <span className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-md border border-white/10 bg-[#18181b] text-[#a855f7]">
              <Globe size={16} className="sm:w-[19px] sm:h-[19px]" strokeWidth={2.2} />
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">Elo Labs</span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#a855f7] drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] animate-pulse">Tournament Platform</span>
            </div>
          </a>
          <div className="flex items-center gap-2">
            <a href="/lcadmin" className="flex sm:hidden items-center justify-center h-9 w-9 rounded-md border border-white/10 text-white/40 hover:text-white/70 hover:border-white/20 transition-colors">
              <Shield size={14} />
            </a>
            <a href="/lcadmin" className="hidden sm:flex items-center gap-1.5 h-9 px-3 rounded-md border border-white/10 text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 hover:text-white/70 hover:border-white/20 transition-colors">
              <Shield size={12} />
              Sys Admin
            </a>
            <a href="#" className="relative flex h-9 sm:h-10 items-center gap-2 rounded-md bg-gradient-to-b from-[#6b21a8] to-[#581c87] px-3 sm:px-4 text-xs sm:text-sm font-semibold text-white border border-[#9333ea] transition hover:from-[#9333ea] hover:to-[#6b21a8] overflow-hidden">
              <span className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 1px, transparent 2px)', backgroundSize: '4px 100%' }} />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="relative z-10 sm:w-4 sm:h-4"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#d8b4fe"/></svg>
              <span className="relative z-10 hidden sm:inline">Login with Discord</span>
              <span className="relative z-10 sm:hidden">Login</span>
              <ArrowRight size={14} className="text-[#d8b4fe] relative z-10 sm:w-4 sm:h-4" />
            </a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#0e0e10] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0e0e10_0%,#1a0f1f_50%,#100818_100%)]" />
          
          <div className="absolute top-0 left-[5%] w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute top-0 right-[5%] w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-3xl" />
          
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 50% 0%, rgba(168,85,247,0.08) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 20% 50%, rgba(168,85,247,0.04) 0%, transparent 40%),
              radial-gradient(ellipse 60% 40% at 80% 50%, rgba(168,85,247,0.04) 0%, transparent 40%)
            `
          }} />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Host tournaments for any sport
            </h1>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
              Elo Labs brings together competitive communities with sport-specific tournament platforms. 
              FromFormula 1 to UFC, football to basketball — run your events with ease.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-12">
            {sports.map((sport) => (
              <a
                key={sport.name}
                href={sport.href}
                className="relative group rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: sport.color === 'red' ? '#1a0a0a' : sport.color === 'amber' ? '#1a1505' : sport.color === 'emerald' ? '#0a1510' : sport.color === 'orange' ? '#150a05' : '#0a1510' }}
              >
                <div className="absolute inset-0" style={{
                  background: `radial-gradient(circle at 50% 100%, ${sport.accent}15 0%, transparent 60%)`
                }} />
                
                {sport.color === 'red' && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#ef4444]/60 to-transparent" />
                )}
                {sport.color === 'amber' && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#fbbf24]/60 to-transparent" />
                )}
                {sport.color === 'emerald' && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#10b981]/60 to-transparent" />
                )}
                {sport.color === 'orange' && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#f97316]/60 to-transparent" />
                )}
                {sport.color === 'green' && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#22c55e]/60 to-transparent" />
                )}
                
                <div className="relative p-4 sm:p-6 flex flex-col items-center justify-center h-full min-h-[140px] sm:min-h-[180px]">
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{sport.icon}</div>
                  <div className="text-lg sm:text-xl font-extrabold text-white tracking-widest">{sport.name}</div>
                  <div className="text-[10px] sm:text-xs text-white/60 mt-1">{sport.desc}</div>
                  
                  <div 
                    className="absolute bottom-2 w-6 sm:w-8 h-0.5 sm:h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: sport.accent }}
                  />
                </div>
                
                <div className="absolute inset-0 border border-white/5 group-hover:border-white/20 transition-colors rounded-xl" />
              </a>
            ))}
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <div 
                key={feature.title}
                className="relative bg-[#1a1a1f] border border-white/10 p-4 sm:p-5 rounded-xl hover:border-purple-500/30 transition-colors group"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <feature.icon size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-white/60 mt-1 leading-relaxed">{feature.copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold text-sm sm:text-base hover:from-purple-500 hover:to-purple-600 transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              Start your tournament
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <p className="text-xs text-white/40 mt-3">No credit card required • Free to get started</p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0a0a0d] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-5 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-3">
            Built for competitive communities
          </h2>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto">
            Whether you're running a local gaming league, a fantasy sports competition, 
            or an esports tournament — Elo Labs scales with your community.
          </p>
        </div>
      </section>
    </main>
  );
}