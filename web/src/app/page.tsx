import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Globe,
  Shield,
  Trophy,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

const hostFeatures = [
  {
    title: "Build your tournament page",
    copy: "Customize your community hub with your branding, upcoming events, rules, and standings.",
  },
  {
    title: "Manage registrations",
    copy: "Collect player signups, track team rosters, and handle waitlists in one place.",
  },
  {
    title: "Run brackets automatically",
    copy: "Generate knockout or league brackets, track scores, and let players report their own results.",
  },
  {
    title: "Keep players updated",
    copy: "Push updates to Discord, display schedules, and show bracket progress in real-time.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0e10] text-[#efeff1]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex h-20 max-w-5xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Elo Labs home">
            <LogoMark />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">Elo Labs</span>
          </a>

<div className="flex items-center gap-2">
            <a
              href="#"
              className="relative flex h-10 items-center gap-2 rounded-md bg-gradient-to-b from-[#2d5a2d] to-[#1e4a1e] px-4 text-sm font-semibold text-white border border-[#3d7a3d] transition hover:from-[#3d7a3d] hover:to-[#2d5a2d] overflow-hidden group"
            >
              <span className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 1px, transparent 2px)', backgroundSize: '4px 100%' }} />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="relative z-10"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#8fd98f"/></svg>
              <span className="relative z-10">Login with Discord</span>
              <ArrowRight size={16} className="text-[#8fd98f] relative z-10" />
            </a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#0e0e10] pt-40 pb-24 min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0e0e10_0%,#0d1a12_40%,#0a1f0d_100%)]" />
          
          <div className="absolute inset-x-0 top-0 h-40" />
          
          <div className="absolute top-0 left-[10%] w-[120px] h-[120px] rounded-b-[60px] bg-gradient-to-b from-amber-300/30 to-transparent blur-3xl" />
          <div className="absolute top-0 left-[25%] w-[80px] h-[80px] rounded-b-[40px] bg-gradient-to-b from-amber-200/20 to-transparent blur-2xl" />
          <div className="absolute top-0 right-[25%] w-[80px] h-[80px] rounded-b-[40px] bg-gradient-to-b from-amber-200/20 to-transparent blur-2xl" />
          <div className="absolute top-0 right-[10%] w-[120px] h-[120px] rounded-b-[60px] bg-gradient-to-b from-amber-300/30 to-transparent blur-3xl" />
          
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `
                linear-gradient(rgba(50, 130, 50, 0.6) 1px, transparent 1px),
                linear-gradient(90deg, rgba(50, 130, 50, 0.6) 1px, transparent 1px)
              `,
              backgroundSize: '100px 60px, 100px 60px',
              transform: 'perspective(600px) rotateX(30deg)',
              transformOrigin: 'center bottom',
              bottom: '0',
              top: 'auto',
              height: '64%',
            }}
          />
          
          
          
<div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[400px] h-[80px] bg-amber-200/10 rounded-full blur-3xl" />
          <div className="absolute top-[5%] left-[25%] w-[200px] h-[60px] bg-amber-200/8 rounded-full blur-2xl" />
          <div className="absolute top-[5%] right-[25%] w-[200px] h-[60px] bg-amber-200/8 rounded-full blur-2xl" />
          
          
          
          <div className="absolute bottom-0 left-0 right-0 h-[380px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1408] via-[#1a3d1a] to-[#0f290f]" />
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `
                  repeating-linear-gradient(180deg, 
                    rgba(30,90,30,0.4) 0px, 
                    rgba(30,90,30,0.4) 30px, 
                    rgba(45,120,45,0.3) 30px, 
                    rgba(45,120,45,0.3) 60px
                  ),
                  repeating-linear-gradient(90deg, 
                    rgba(25,80,25,0.3) 0px, 
                    rgba(25,80,25,0.3) 50px,
                    transparent 50px,
                    transparent 100px
                  )
                `,
                backgroundSize: '100% 60px, 100px 100%',
              }}
            />
            <div className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(90deg, transparent 0px, rgba(34,139,34,0.15) 1px, transparent 2px),
                  repeating-linear-gradient(0deg, transparent 0px, rgba(34,139,34,0.1) 1px, transparent 2px)
                `,
                backgroundSize: '4px 100%, 100% 4px',
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#0a1408] to-transparent" />
<div className="absolute inset-0 shadow-[inset_0_50px_100px_rgba(0,0,0,0.5)]" />
          </div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[900px] h-[35vh]" style={{ bottom: '7%' }}>
              <div className="absolute inset-0 border-4 border-white/50 shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[55%] h-[45%] border-x-4 border-b-4 border-white/50 shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
              <div className="absolute left-1/2 -translate-x-1/2 top-[65%] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            </div>
          
          <div className="absolute inset-x-0 top-[15%] flex justify-center">
            <div className="relative" style={{ width: '780px', height: '390px' }}>
              <div className="absolute left-0 bottom-0 w-[10px] h-[370px] bg-gradient-to-t from-[#1a2e1a] via-[#2d4a2d] to-[#1a2e1a] rounded-l-sm" />
              <div className="absolute right-0 bottom-0 w-[10px] h-[370px] bg-gradient-to-t from-[#1a2e1a] via-[#2d4a2d] to-[#1a2e1a] rounded-r-sm" />
              <div className="absolute left-0 right-0 top-[20px] h-[10px] bg-gradient-to-r from-[#1a2e1a] via-[#3d5a3d] to-[#1a2e1a] rounded-sm" />
              
              <div className="absolute left-[10px] top-[20px] bottom-0 w-[760px]" 
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(90deg, rgba(40,60,40,0.4) 0px, rgba(40,60,40,0.4) 1px, transparent 1px, transparent 14px),
                    repeating-linear-gradient(0deg, rgba(40,60,40,0.3) 0px, rgba(40,60,40,0.3) 1px, transparent 1px, transparent 14px)
                  `,
                  backgroundSize: '14px 14px',
                }}
              />
              
              <div className="absolute left-[10px] right-[10px] top-[26px] h-px bg-gradient-to-r from-transparent via-[#2d4a2d]/30 to-transparent" />
              <div className="absolute left-[10px] right-[10px] top-[60px] h-px bg-gradient-to-r from-transparent via-[#2d4a2d]/20 to-transparent" />
              <div className="absolute left-[10px] right-[10px] top-[110px] h-px bg-gradient-to-r from-transparent via-[#2d4a2d]/15 to-transparent" />
              <div className="absolute left-[10px] right-[10px] top-[170px] h-px bg-gradient-to-r from-transparent via-[#2d4a2d]/10 to-transparent" />
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
<div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4ade80] drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">
              Tournament Platform
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
              Host and manage your own FC tournaments.
            </h1>
            <p className="mt-6 text-lg leading-7 text-white/80 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
              Create your tournament page, manage signups, run brackets, and keep
              your community updated — all in one place.
            </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="relative flex h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-b from-[#2d5a2d] to-[#1e4a1e] px-6 text-sm font-semibold text-white border border-[#3d7a3d] transition hover:from-[#3d7a3d] hover:to-[#2d5a2d] overflow-hidden shadow-[0_0_30px_rgba(45,90,45,0.4)]"
              >
                <span className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 1px, transparent 2px)', backgroundSize: '4px 100%' }} />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="relative z-10"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#8fd98f"/></svg>
                <span className="relative z-10">Login with Discord</span>
                <ArrowRight size={17} className="text-[#8fd98f] relative z-10" />
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-4">
            <StatBox label="Tournaments hosted" value="0" />
            <StatBox label="Active players" value="0" />
            <StatBox label="Communities" value="0" />
            <StatBox label="Matches played" value="0" />
          </div>
        </div>
      </section>

      <section id="features" className="relative bg-[#0f1a12] py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 100, 34, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 100, 34, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[3px] bg-[#22c55e]" />
            <h2 className="text-2xl font-semibold sm:text-3xl text-white">
              Everything you need to run a tournament
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {hostFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#0a0c0d] py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
          }}
        />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[3px] bg-[#22c55e]" />
            <h2 className="text-2xl font-semibold sm:text-3xl text-white">
              Built for FC community hosts
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <AudienceCard
              title="Community admins"
              copy="Run weekly cups, seasonal leagues, and competitive events for your members."
            />
            <AudienceCard
              title="Tournament organizers"
              copy="Collect signups, manage brackets, and publish results without spreadsheets."
            />
            <AudienceCard
              title="Content creators"
              copy="Stream tournaments with integrated brackets and real-time match tracking."
            />
          </div>
        </div>
      </section>

      <section className="relative bg-[#0d1a12] px-5 py-20 lg:px-8 overflow-hidden">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative mx-auto max-w-5xl gap-8 border border-[#22c55e]/20 bg-[#0f2218] p-8 text-white lg:grid-cols-[1fr_auto] lg:flex shadow-[0_0_40px_rgba(34,197,94,0.1)]">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Ready to host your first tournament?
            </h2>
            <p className="mt-3 text-[#adadb8]">
              Set up your community page and start accepting signups in minutes.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 lg:mt-0 lg:flex-row">
            <a
              href="#"
              className="flex h-12 items-center justify-center gap-2 rounded-md bg-[#efeff1] px-6 text-sm font-semibold text-[#0e0e10]"
            >
              Get started
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function LogoMark() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-[#18181b] text-[#c4b5fd]">
      <Globe size={19} strokeWidth={2.2} />
    </span>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/8 pt-4">
      <p className="text-2xl font-semibold text-[#efeff1]">{value}</p>
      <p className="mt-2 text-xs font-semibold uppercase text-[#adadb8]">{label}</p>
    </div>
  );
}

function FeatureCard({
  feature,
}: {
  feature: { title: string; copy: string };
}) {
  return (
    <div className="relative bg-[#142a1c] border border-[#22c55e]/10 p-6 rounded-lg hover:border-[#22c55e]/30 transition-colors group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#22c55e]/60 to-transparent rounded-t-lg" />
      <h3 className="text-lg font-semibold text-white group-hover:text-[#22c55e] transition-colors">{feature.title}</h3>
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
    <div className="relative bg-[#151c1a] border border-white/5 p-6 rounded-lg hover:bg-[#1a2420] transition-colors">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#22c55e]/10 border border-[#22c55e]/20">
        <Users size={22} className="text-[#22c55e]" />
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-[#8ba892]">{copy}</p>
    </div>
  );
}
