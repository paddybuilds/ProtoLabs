import {
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardList,
  Eye,
  Gamepad2,
  Layers,
  MessageCircle,
  Network,
  Palette,
  Search,
  ShieldCheck,
  Trophy,
  UsersRound,
} from "lucide-react";
import type { ReactNode } from "react";

const featuredEvents = [
  {
    game: "Valorant",
    title: "Neon Circuit Open",
    community: "Northside Arena",
    time: "Fri 19:30",
    format: "5v5 double elim",
    players: "28 / 32",
    status: "Registration open",
  },
  {
    game: "Rocket League",
    title: "Creator Cup Qualifier",
    community: "Boost League",
    time: "Sat 16:00",
    format: "3v3 swiss",
    players: "44 / 64",
    status: "Check-in soon",
  },
  {
    game: "Tekken 8",
    title: "Friday Fight Local",
    community: "Arcade Quarter",
    time: "Tonight",
    format: "1v1 bracket",
    players: "16 / 24",
    status: "Schedule live",
  },
];

const platformPillars = [
  {
    icon: <Layers size={20} />,
    title: "Website builder",
    copy: "Build and publish a tournament community website without starting from a blank canvas.",
  },
  {
    icon: <ClipboardList size={20} />,
    title: "Organizer control",
    copy: "The operational pieces communities already manage, packaged into one repeatable workflow.",
  },
  {
    icon: <Network size={20} />,
    title: "One public hub",
    copy: "Registrations, schedules, rules, streams, standings, and community updates stay in one place.",
  },
];

const builderBlocks = [
  ["Hero", "Community intro and next event CTA"],
  ["Events", "Live registration and check-in state"],
  ["Rules", "Format, eligibility, disputes, stream links"],
  ["Rankings", "Season table and past winners"],
];

const featureCards = [
  {
    icon: <CalendarDays size={22} />,
    title: "Events people can actually follow",
    copy: "Start times, check-in windows, rules, stream links, and bracket state sit together on one public page.",
  },
  {
    icon: <UsersRound size={22} />,
    title: "A hub for each community",
    copy: "Every scene gets a home for upcoming events, rankings, past winners, updates, and organizer info.",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Works with existing Discords",
    copy: "Keep Discord as the hangout space while BracketHub becomes the source of truth for tournament operations.",
  },
  {
    icon: <Trophy size={22} />,
    title: "Reasons to return",
    copy: "Season points, standings, achievements, and event archives turn weekly play into community identity.",
  },
];

const communityActivity = [
  ["#announcements", "Rules updated for tonight's Tekken bracket", "2m"],
  ["#match-day", "Check-in opens at 18:45 for all registered players", "14m"],
  ["#rankings", "Kairo moves to first after Friday Fight Local", "1h"],
];

const organizerTools = [
  "Solo and team registration",
  "Rules, format, prizes, and eligibility",
  "Check-in, brackets, and score reporting",
  "Updates for Discord and social posts",
  "Community rankings and past winners",
  "Organizer profiles and support contacts",
];

const rankings = [
  ["01", "Kairo", "18-3", "2,840", "+2"],
  ["02", "Mira", "16-4", "2,610", "-"],
  ["03", "Jettson", "15-6", "2,390", "+5"],
  ["04", "Aster", "14-7", "2,120", "-1"],
];
const bracketMatches = [
  ["Upper final", "Kairo", "Mira", "20:20"],
  ["Lower R3", "Aster", "Nova", "20:35"],
  ["On stream", "Jettson", "Raze", "Live"],
];
const setupSteps = [
  ["Registration form", "Solo, team, waitlist"],
  ["Discord post", "Check-in reminders and updates"],
  ["Bracket tool", "Match state and score reporting"],
  ["Spreadsheet", "Rankings, history, and winners"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0e10] text-[#efeff1]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="BracketHub home">
            <LogoMark />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">BracketHub</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-[#adadb8] md:flex">
            {[
              ["Builder", "#builder"],
              ["Events", "#events"],
              ["Community", "#community"],
              ["Organizers", "#organizers"],
              ["Rankings", "#rankings"],
            ].map(([label, href], index) => (
              <a
                key={label}
                href={href}
                className={`transition hover:text-white ${index === 0 ? "text-white" : ""}`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#events"
              className="hidden h-9 items-center gap-2 text-xs font-semibold text-[#c8c8d0] transition hover:text-white sm:flex"
            >
              <Search size={16} />
              Demo
            </a>
            <a
              href="#organizers"
              className="flex h-9 items-center gap-2 rounded-md bg-[#efeff1] px-3 text-xs font-semibold text-[#0e0e10] transition hover:bg-white"
            >
              Create site
              <ArrowRight size={16} />
            </a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#0e0e10]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#141417_0%,#0e0e10_64%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-16 px-5 pb-20 pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-40">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[0.98] sm:text-5xl lg:text-6xl">
              Build the home base for your tournament scene.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#c8c8d0]">
              BracketHub gives community organizers a website builder and
              tournament infrastructure for signups, schedules, rules,
              brackets, streams, standings, and updates without replacing where
              players already hang out.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#organizers"
                className="flex h-11 items-center justify-center gap-2 rounded-md bg-[#efeff1] px-5 text-xs font-semibold uppercase text-[#0e0e10] transition hover:bg-white sm:min-w-[214px]"
              >
                Create a community site
                <ArrowRight size={17} />
              </a>
              <a
                href="#events"
                className="flex h-11 items-center justify-center gap-2 rounded-md bg-[#2a2a30] px-5 text-xs font-semibold uppercase text-white transition hover:bg-[#34343b] sm:min-w-[196px]"
              >
                Explore demo events
                <Search size={17} />
              </a>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 border-t border-white/8 pt-8 sm:grid-cols-4">
              <HeroMetric value="1" label="Community home" />
              <HeroMetric value="8" label="Page blocks" />
              <HeroMetric value="0" label="Buried links" />
              <HeroMetric value="∞" label="Weekly play" />
            </div>
          </div>

          <CommunityAppMock />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-4 px-5 pb-20 lg:grid-cols-3 lg:px-8">
          {platformPillars.map((pillar) => (
            <div key={pillar.title} className="border-t border-white/8 pt-5">
              <IconBadge>{pillar.icon}</IconBadge>
              <h2 className="mt-4 text-lg font-semibold">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#adadb8]">{pillar.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="builder" className="bg-[#111114] py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Web Builder"
              title="Create a polished tournament site from community-ready blocks."
              copy="The builder is the publishing layer for every community. Organizers choose the sections they need, connect tournament data, and publish a site players can understand immediately."
            />
            <div className="mt-8 grid gap-3">
              {[
                "Theme, logo, socials, and community identity",
                "Drag in events, standings, rules, streams, and sponsors",
                "Preview the player-facing site before publishing",
                "Keep every page updated from tournament operations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-white/8 py-4 text-sm font-semibold last:border-b-0"
                >
                  <Check size={18} className="text-[#a78bfa]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <WebsiteBuilderDemo />
        </div>
      </section>

      <section id="events" className="bg-[#18181b] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Event Discovery"
            title="Make every community event feel alive."
            copy="Use Twitch-style browsing patterns: bold event tiles, clear status, visible communities, and immediate actions. The page should feel active before someone signs in."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <EventRow key={event.title} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="bg-[#0e0e10] py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Community First"
              title="Tournament tools that feel native to gaming communities."
              copy="Discord works because it feels like a place. BracketHub should borrow that mental model: channels, live activity, members, alerts, shared history, and clean event surfaces."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {featureCards.slice(0, 4).map((feature) => (
                <div key={feature.title} className="grid grid-cols-[34px_1fr] gap-3">
                  <span className="text-[#a78bfa]">{feature.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#adadb8]">{feature.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CommunityHubDemo />
        </div>
      </section>

      <section className="bg-[#111114] py-24 text-[#efeff1] sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8">
          <TournamentPagePreview />
          <div>
            <SectionHeader
              eyebrow="Player Clarity"
              title="Players should not need to dig for tournament basics."
              copy="Community tournament pages need to answer the simple questions immediately: when do I play, where do I check in, what are the rules, where is the stream, and who is running this?"
            />
            <div className="mt-8 grid gap-3">
              {[
                "Local start times and check-in windows",
                "Rules, format, prizes, and eligibility",
                "Bracket status and next match details",
                "Stream links and public announcements",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-white/8 py-4 text-sm font-semibold last:border-b-0"
                >
                  <Check size={18} className="text-[#a78bfa]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="organizers" className="bg-[#0e0e10] py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Organizer Tools"
              title="A clean control panel, not more scattered links."
              copy="Give organizers lightweight infrastructure for the work they already do across forms, Discord posts, bracket tools, and spreadsheets."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {organizerTools.map((tool) => (
                <div
                  key={tool}
                  className="flex gap-3 border-b border-white/8 py-4 text-sm font-semibold text-[#efeff1] last:border-b-0"
                >
                  <Check className="mt-0.5 shrink-0 text-[#a78bfa]" size={18} />
                  {tool}
                </div>
              ))}
            </div>
          </div>
          <OrganizerConsole />
        </div>
      </section>

      <section id="rankings" className="bg-[#18181b] py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Retention"
              title="Turn weekly events into community identity."
              copy="Rankings, seasonal standings, achievements, and past winners give players something to return to between events."
            />
            <div className="mt-8 grid grid-cols-3 gap-3">
              <DarkMetric icon={<Trophy size={18} />} value="Ranks" label="Season tables" />
              <DarkMetric icon={<Bell size={18} />} value="Alerts" label="Updates" />
              <DarkMetric icon={<ShieldCheck size={18} />} value="Trust" label="Rules" />
            </div>
          </div>
          <Leaderboard />
        </div>
      </section>

      <section className="bg-[#0e0e10] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 border border-white/8 bg-[#18181b] p-8 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              Built for community-owned competition
            </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
              Your players already have a place to hang out. Give them a better place to compete.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#organizers"
              className="flex h-12 items-center justify-center gap-2 rounded-md bg-[#18181b] px-5 text-sm font-semibold uppercase text-white"
            >
              Create site
              <ArrowRight size={17} />
            </a>
            <a
              href="#events"
              className="flex h-12 items-center justify-center gap-2 rounded-md bg-[#18181b] px-5 text-sm font-semibold uppercase text-white"
            >
              View demo
              <Search size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function CommunityAppMock() {
  return (
    <div className="justify-self-end overflow-hidden bg-[#18181b] shadow-[0_35px_90px_rgba(0,0,0,0.22)] lg:max-w-[590px]">
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
        <div className="flex items-center gap-3">
          <LogoMark />
          <div>
            <p className="text-sm font-semibold">Northside Arena</p>
            <p className="text-xs text-[#777783]">northside.gg</p>
          </div>
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a78bfa]">
          Published
        </span>
      </div>

      <div className="grid gap-8 p-5 sm:grid-cols-[1.05fr_0.95fr] sm:p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a78bfa]">
            Community site
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight">
            Friday brackets, streams, rules, and rankings.
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#adadb8]">
            A player-facing home generated from the organizer workspace.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-[#c8c8d0]">
            {["Signups", "Schedule", "Rules", "Stream", "Rankings"].map((section) => (
              <span key={section}>{section}</span>
            ))}
          </div>

          <a
            href="#events"
            className="mt-7 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#efeff1] px-4 text-sm font-semibold text-[#0e0e10]"
          >
            Join next event
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="bg-[#101014] p-5">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777783]">
              Live tournament data
            </p>
            <span className="text-xs font-semibold text-[#c4b5fd]">Synced</span>
          </div>

          <div className="space-y-5">
            {[
              ["Registration", "16 / 24 players", "Open"],
              ["Check-in", "18:45 local time", "Queued"],
              ["Next match", "Kairo vs Mira", "20:20"],
              ["Stream", "twitch.tv/northside", "Live soon"],
              ["Season rank", "Winner earns 120 pts", "Tracked"],
            ].map(([label, value, status]) => (
              <div key={label} className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#777783]">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{value}</p>
                </div>
                <span className="text-right text-xs font-semibold text-[#c4b5fd]">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WebsiteBuilderDemo() {
  return (
    <div className="bg-[#18181b] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.16)]">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a78bfa]">
            Site builder
          </p>
          <h3 className="mt-1 text-xl font-semibold">Northside Arena</h3>
        </div>
        <span className="flex items-center gap-2 text-xs font-semibold text-[#c8c8d0]">
          <Eye size={15} />
          Editing player-facing site
        </span>
      </div>

      <div className="mt-9 grid gap-10 lg:grid-cols-[235px_1fr]">
        <aside>
          <div className="mb-7 flex items-center gap-3">
            <IconBadge>
              <Palette size={20} />
            </IconBadge>
            <div>
              <p className="text-sm font-semibold">Midnight theme</p>
              <p className="mt-1 text-xs text-[#adadb8]">Logo, colors, socials</p>
            </div>
          </div>

          <div className="space-y-4">
            {builderBlocks.map(([title, detail], index) => (
              <div key={title} className="grid grid-cols-[24px_1fr] gap-3">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-sm bg-[#2a2a30] text-[10px] font-semibold text-[#c4b5fd]">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold">{title} block</p>
                  <p className="mt-1 text-xs leading-5 text-[#adadb8]">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div className="bg-[#101014] p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <LogoMark />
              <div>
                <p className="text-sm font-semibold">Northside Arena</p>
                <p className="text-xs text-[#777783]">northside.gg</p>
              </div>
            </div>
            <span className="hidden rounded-md bg-[#efeff1] px-3 py-2 text-xs font-semibold text-[#0e0e10] sm:inline-flex">
              Join next event
            </span>
          </div>

          <div className="mt-8 border-b border-white/8 pb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a78bfa]">
              Hero block
            </p>
            <h4 className="mt-3 max-w-xl text-2xl font-semibold leading-tight">
              Friday brackets for the Northside FGC.
            </h4>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#adadb8]">
              Tekken 8, Street Fighter, and weekly locals with one clear place
              to register, check in, and follow results.
            </p>
          </div>

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#777783]">
                Events block
              </p>
              <p className="mt-2 text-sm font-semibold">Friday Fight Local</p>
              <p className="mt-1 text-xs text-[#adadb8]">16 / 24 players · check-in 18:45</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#777783]">
                Rules block
              </p>
              <p className="mt-2 text-sm font-semibold">1v1 double elimination</p>
              <p className="mt-1 text-xs text-[#adadb8]">Eligibility, disputes, stream setup</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#777783]">
                Rankings block
              </p>
              <p className="mt-2 text-sm font-semibold">Spring league standings</p>
              <p className="mt-1 text-xs text-[#adadb8]">Kairo leads by 230 points</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#777783]">
                Stream block
              </p>
              <p className="mt-2 text-sm font-semibold">Main stage goes live at 20:00</p>
              <p className="mt-1 text-xs text-[#adadb8]">Twitch and VOD links connected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommunityHubDemo() {
  return (
    <div className="bg-[#18181b] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
      <div className="flex flex-col justify-between gap-5 border-b border-white/8 pb-6 sm:flex-row sm:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a78bfa]">
            Community hub
          </p>
          <h3 className="mt-2 text-2xl font-semibold">Northside Arena</h3>
          <p className="mt-2 text-sm leading-6 text-[#adadb8]">
            The public source of truth that sits beside the community Discord.
          </p>
        </div>
        <div className="flex gap-6 text-sm font-semibold">
          <InlineStat label="Members" value="1,428" />
          <InlineStat label="Live now" value="86" />
        </div>
      </div>

      <div className="mt-7 grid gap-8 lg:grid-cols-[180px_1fr]">
        <aside>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777783]">
            Spaces
          </p>
          <div className="mt-4 space-y-3 text-sm font-semibold">
            {[
              ["Events", CalendarDays],
              ["Announcements", Bell],
              ["Members", UsersRound],
              ["Rankings", Trophy],
            ].map(([label, Icon]) => (
              <div key={label as string} className="flex items-center gap-3 text-[#c8c8d0]">
                {typeof Icon !== "string" && <Icon size={16} className="text-[#a78bfa]" />}
                <span>{label as string}</span>
              </div>
            ))}
          </div>
        </aside>

        <div>
          <div className="grid gap-5 sm:grid-cols-[1fr_170px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777783]">
                Live activity
              </p>
              <div className="mt-4 space-y-4">
                {communityActivity.map(([channel, update, time]) => (
                  <div key={update} className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                    <div>
                      <p className="text-xs font-semibold text-[#a78bfa]">{channel}</p>
                      <p className="mt-1 text-sm font-semibold">{update}</p>
                    </div>
                    <span className="text-xs font-semibold text-[#777783]">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#101014] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777783]">
                Next up
              </p>
              <p className="mt-3 text-sm font-semibold">Friday Fight Local</p>
              <p className="mt-2 text-xs leading-5 text-[#adadb8]">
                Registration open, rules live, main stream scheduled.
              </p>
              <a
                href="#events"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#efeff1]"
              >
                View event
                <ChevronRight size={15} />
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <InlineStat label="Past winners" value="32 archived" />
            <InlineStat label="Season" value="Spring league" />
            <InlineStat label="Support" value="Organizers online" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoMark() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-[#18181b] text-[#c4b5fd]">
      <Gamepad2 size={19} strokeWidth={2.2} />
    </span>
  );
}

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-[#18181b] text-[#c4b5fd]">
      {children}
    </span>
  );
}

function EventRow({
  event,
}: {
  event: {
    game: string;
    title: string;
    community: string;
    time: string;
    format: string;
    players: string;
    status: string;
  };
}) {
  return (
    <article className="border-t border-white/8 pt-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a78bfa]">
            {event.game}
          </p>
          <h3 className="mt-3 text-xl font-semibold">{event.title}</h3>
          <p className="mt-1 text-sm text-[#adadb8]">Run by {event.community}</p>
        </div>
        <Gamepad2 size={18} className="mt-1 text-[#c4b5fd]" />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-5">
        <InlineStat label="When" value={event.time} />
        <InlineStat label="Players" value={event.players} />
        <InlineStat label="Format" value={event.format} />
      </div>
      <a
        href="#"
        className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#efeff1] transition hover:text-white"
      >
        {event.status}
        <ChevronRight size={16} />
      </a>
    </article>
  );
}

function TournamentPagePreview() {
  return (
    <div className="bg-[#18181b] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.16)] lg:max-w-[560px]">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a78bfa]">
            Public tournament page
          </p>
          <h3 className="mt-2 text-2xl font-semibold">Neon Circuit Open</h3>
          <p className="mt-1 text-sm text-[#c8c8d0]">Run by Northside Arena</p>
        </div>
        <span className="rounded-md bg-[#2a2a30] px-3 py-2 text-xs font-semibold text-[#c4b5fd]">
          Open
        </span>
      </div>

      <div className="mt-7 space-y-5">
        {[
          ["When do I play?", "Fri, May 8 · 19:30 BST"],
          ["Where do I check in?", "Opens 18:45 · roster lock at 19:10"],
          ["What are the rules?", "5v5 double elimination · map veto enabled"],
          ["Where is the stream?", "Main stage linked before round two"],
          ["Who is running this?", "Northside Arena · Discord support live"],
        ].map(([question, answer]) => (
          <div key={question} className="grid gap-2 border-b border-white/8 pb-4 last:border-b-0 sm:grid-cols-[180px_1fr]">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#777783]">
              {question}
            </p>
            <p className="text-sm font-semibold">{answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-[#101014] p-5">
        <div className="mb-4 flex justify-between text-xs font-semibold uppercase text-[#adadb8]">
          <span>Bracket state</span>
          <span className="text-[#c4b5fd]">Live</span>
        </div>
        <div className="space-y-4">
          {bracketMatches.map(([round, playerOne, playerTwo, time]) => (
            <div key={round} className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <p className="text-xs text-[#777783]">{round}</p>
                <p className="mt-1 text-sm font-semibold">
                  {playerOne} vs {playerTwo}
                </p>
              </div>
              <span className={time === "Live" ? "text-sm font-semibold text-[#c4b5fd]" : "text-sm text-[#c8c8d0]"}>
                {time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OrganizerConsole() {
  return (
    <div className="justify-self-end bg-[#18181b] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.16)] lg:max-w-[600px]">
      <div className="flex items-center justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#adadb8]">
            Organizer workspace
          </p>
          <h3 className="mt-1 text-2xl font-semibold">One workflow instead of scattered tools</h3>
        </div>
        <ShieldCheck className="text-[#a78bfa]" />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777783]">
            What communities juggle today
          </p>
          <div className="mt-5 space-y-4">
            {setupSteps.map(([source, detail], index) => (
              <div key={source} className="grid grid-cols-[28px_1fr] gap-3">
                <span className="text-xs font-semibold text-[#a78bfa]">0{index + 1}</span>
                <div>
                  <p className="text-sm font-semibold">{source}</p>
                  <p className="mt-1 text-xs leading-5 text-[#adadb8]">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#101014] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777783]">
            BracketHub output
          </p>
          <div className="mt-5 space-y-5">
            {[
              ["Signup page", "Rosters, waitlist, eligibility"],
              ["Player updates", "Discord-ready posts and reminders"],
              ["Live bracket", "Scores, next match, stream state"],
              ["Community site", "Rankings, archive, organizer profile"],
            ].map(([title, detail]) => (
              <div key={title} className="flex gap-3 border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                <Check className="mt-0.5 shrink-0 text-[#a78bfa]" size={17} />
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#adadb8]">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-7 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#efeff1] text-xs font-semibold text-[#0e0e10]">
            Publish hub
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

function Leaderboard() {
  return (
    <div className="bg-[#0e0e10] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] lg:max-w-[640px]">
      <div className="mb-5 flex items-center justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a78bfa]">
            Season ranking
          </p>
          <h3 className="mt-2 text-2xl font-semibold">Northside Spring League</h3>
        </div>
        <span className="rounded-md bg-[#2a2a30] px-3 py-2 text-xs font-semibold uppercase text-[#c4b5fd]">
          Live
        </span>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-2 text-center">
        <div className="bg-[#18181b] p-3">
          <p className="text-sm font-semibold">142</p>
          <p className="mt-1 text-[11px] uppercase text-[#777783]">Players</p>
        </div>
        <div className="bg-[#18181b] p-3">
          <p className="text-sm font-semibold">8</p>
          <p className="mt-1 text-[11px] uppercase text-[#777783]">Events</p>
        </div>
        <div className="bg-[#18181b] p-3">
          <p className="text-sm font-semibold">May</p>
          <p className="mt-1 text-[11px] uppercase text-[#777783]">Season</p>
        </div>
      </div>
      <div className="space-y-2">
        {rankings.map(([rank, player, record, points, movement]) => (
          <div
            key={rank}
            className="grid grid-cols-[34px_minmax(0,1fr)_52px_64px_34px] items-center gap-2 bg-[#2a2a30] px-3 py-3 text-xs sm:grid-cols-[48px_minmax(0,1fr)_72px_86px_42px] sm:text-sm"
          >
            <span className="font-semibold text-[#a78bfa]">{rank}</span>
            <span className="truncate font-semibold">{player}</span>
            <span className="text-[#c8c8d0]">{record}</span>
            <span className="text-right font-semibold">{points}</span>
            <span className="text-right text-xs font-semibold text-[#c4b5fd]">{movement}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-white/12 pl-4">
      <p className="text-2xl font-semibold text-[#efeff1]">{value}</p>
      <p className="mt-2 text-xs font-semibold uppercase leading-5 text-[#adadb8]">{label}</p>
    </div>
  );
}

function InlineStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#777783]">{label}</p>
      <p className="mt-2 text-sm font-semibold text-[#efeff1]">{value}</p>
    </div>
  );
}

function DarkMetric({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-[#0e0e10] p-3 text-center">
      <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-[#2a2a30] text-[#c4b5fd]">
        {icon}
      </div>
      <p className="text-sm font-semibold">{value}</p>
      <p className="mt-1 text-xs text-[#adadb8]">{label}</p>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a78bfa]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.06] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-[#c8c8d0]">{copy}</p>
    </div>
  );
}
