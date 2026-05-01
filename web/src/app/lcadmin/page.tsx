"use client";
import { useState, useEffect } from "react";
import {
  Users,
  Globe,
  Gamepad2,
  Activity,
  Shield,
  Settings,
  Search,
  Plus,
  X,
  ChevronDown,
  Edit2,
  Trash2,
  CheckCircle,
  XCircle,
  ExternalLink,
  Link2,
  LayoutDashboard,
  Layers,
  ScrollText,
} from "lucide-react";

interface UserData {
  id: string;
  email: string;
  passwordHash: string | null;
  discordId: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface GameData {
  id: string;
  slug: string;
  name: string;
  accentColor: string;
}

interface CommunityData {
  id: string;
  name: string;
  slug: string;
  logo: string | null;
  banner: string | null;
  description: string | null;
  accentColor: string;
  createdAt: string;
  updatedAt: string;
  gameId: string;
  createdByUserId: string;
  game?: GameData;
  createdBy?: UserData;
}

interface TogAccessData {
  id: string;
  grantedAt: string;
  userId: string;
  gameId: string;
  grantedByUserId: string | null;
  user: UserData;
  game: GameData;
  grantedBy?: UserData | null;
}

interface TeamAreaData {
  id: string;
  name: string;
  banner: string | null;
  logo: string | null;
  title: string | null;
  description: string | null;
  applyOpen: boolean;
  createdAt: string;
  updatedAt: string;
  communityId: string;
  teamManagerId: string;
}

interface ActivityLogData {
  id: string;
  action: string;
  details: string | null;
  createdAt: string;
  userId: string;
  user: UserData;
}

const ROLE_LABELS: Record<string, string> = {
  SYS_ADMIN: "Sys Admin",
  TO: "Tournament Organizer",
  COMMUNITY_ADMIN: "Community Admin",
  TEAM__MANAGER: "Team Manager",
  PLAYER: "Player",
};
const STATUS_COLORS: Record<string, string> = {
  PENDING: "text-amber-400",
  ACCEPTED: "text-emerald-400",
  REJECTED: "text-red-400",
};

type Section = "overview" | "users" | "communities" | "game-access" | "activity";

export default function LcAdminPage() {
  const [section, setSection] = useState<Section>("overview");
  const [dbConnected, setDbConnected] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserData[]>([]);
  const [games, setGames] = useState<GameData[]>([]);
  const [communities, setCommunities] = useState<CommunityData[]>([]);
  const [togAccess, setTogAccess] = useState<TogAccessData[]>([]);
  const [activity, setActivity] = useState<ActivityLogData[]>([]);
  const [teamAreas, setTeamAreas] = useState<TeamAreaData[]>([]);
  const [inviteLinks, setInviteLinks] = useState<{ id: string; code: string; type: string; communityId: string; teamAreaId: string | null; createdByUserId: string; expiresAt: string | null; createdAt: string }[]>([]);
  const [members, setMembers] = useState<{ id: string; userId: string; teamAreaId: string; status: string; joinedAt: string }[]>([]);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("");
  const [showModal, setShowModal] = useState<string | null>(null);
  const [modalData, setModalData] = useState<Record<string, string>>({});
  const [toUsers, setToUsers] = useState<UserData[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const accent = "#a855f7";
  const accentDim = "#7c3aed";

  useEffect(() => { loadData(); }, []);

  async function loadData() {
    setLoading(true);
    try {
      const res = await fetch("/api/lcadmin/data");
      if (res.ok) {
        const d = await res.json();
        setDbConnected(true);
        setUsers(d.users ?? []);
        setGames(d.games ?? []);
        setCommunities(d.communities ?? []);
        setTogAccess(d.togAccess ?? []);
        setActivity(d.activity ?? []);
        setTeamAreas(d.teamAreas ?? []);
        setInviteLinks(d.inviteLinks ?? []);
        setMembers(d.members ?? []);
        setToUsers(d.toUsers ?? []);
      } else {
        setDbConnected(false);
      }
    } catch {
      setDbConnected(false);
    } finally {
      setLoading(false);
    }
  }

  async function action(endpoint: string, body: Record<string, string>, verb = "POST") {
    await fetch(endpoint, {
      method: verb,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setShowModal(null);
    setModalData({});
    await loadData();
  }

  const filteredUsers = users.filter((u) => {
    const matchRole = !roleFilter || u.role === roleFilter;
    const matchSearch = !search || u.email.toLowerCase().includes(search.toLowerCase());
    return matchRole && matchSearch;
  });

  const filteredActivity = activity.filter((a) =>
    !search ||
    a.action.toLowerCase().includes(search.toLowerCase()) ||
    (a.details ?? "").toLowerCase().includes(search.toLowerCase())
  );

  function toggleGameAccess(userId: string, gameId: string, enabled: boolean) {
    action("/api/lcadmin/toggle-game", { userId, gameId, enabled: String(enabled) });
  }

  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "users", label: "Users", icon: Users },
    { id: "communities", label: "Communities", icon: Globe },
    { id: "game-access", label: "TO Game Access", icon: Gamepad2 },
    { id: "activity", label: "Activity Log", icon: ScrollText },
  ] as const;

  return (
    <div className="min-h-screen bg-[#0e0e10] text-[#efeff1] flex">
      <aside className={`${sidebarOpen ? "w-56" : "w-0"} flex-shrink-0 border-r border-white/10 bg-[#14141a] flex flex-col transition-all duration-200 overflow-hidden`}>
        <div className="h-14 flex items-center gap-2 px-4 border-b border-white/10 flex-shrink-0">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-purple-500/20 border border-purple-500/30">
            <Shield size={14} className="text-purple-400" />
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-white">LC Admin</span>
        </div>
        <div className="flex flex-col gap-1 p-3 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSection(item.id)}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors text-left ${
                section === item.id
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon size={15} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        <div className="p-3 border-t border-white/10">
          <a href="/" className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors">
            <ExternalLink size={12} />
            Back to site
          </a>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 flex items-center justify-between px-6 border-b border-white/10 bg-[#14141a] flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white/40 hover:text-white transition-colors md:hidden"
            >
              <Layers size={18} />
            </button>
            <h1 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              {navItems.find((n) => n.id === section)?.label}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                dbConnected === true
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                  : dbConnected === false
                  ? "bg-red-500/10 border-red-500/30 text-red-400"
                  : "bg-white/5 border-white/10 text-white/40 animate-pulse"
              }`}
            >
              {dbConnected === true ? "DB Connected" : dbConnected === false ? "No DB" : "Loading..."}
            </span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-6 h-6 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
            </div>
          ) : dbConnected === false ? (
            <div className="flex flex-col items-center justify-center h-64 gap-4">
              <Globe size={40} className="text-white/20" />
              <div className="text-center">
                <p className="text-white/60 font-semibold mb-1">Database not connected</p>
                <p className="text-xs text-white/40">
                  Run <code className="bg-white/5 px-1.5 py-0.5 rounded text-purple-300">npx prisma dev</code> to start the Prisma dev server, then migrate.
                </p>
              </div>
            </div>
          ) : section === "overview" ? (
            <OverviewPanel users={users} games={games} communities={communities} activity={activity} accent={accent} />
          ) : section === "users" ? (
            <UsersPanel
              users={filteredUsers}
              communities={communities}
              games={games}
              search={search}
              setSearch={setSearch}
              roleFilter={roleFilter}
              setRoleFilter={setRoleFilter}
              showModal={showModal}
              setShowModal={setShowModal}
              modalData={modalData}
              setModalData={setModalData}
              action={action}
              accent={accent}
            />
          ) : section === "communities" ? (
            <CommunitiesPanel
              communities={communities}
              games={games}
              teamAreas={teamAreas}
              members={members}
              toUsers={toUsers}
              search={search}
              setSearch={setSearch}
              showModal={showModal}
              setShowModal={setShowModal}
              modalData={modalData}
              setModalData={setModalData}
              action={action}
              accent={accent}
            />
          ) : section === "game-access" ? (
            <GameAccessPanel toUsers={toUsers} games={games} togAccess={togAccess} toggleGameAccess={toggleGameAccess} accent={accent} />
          ) : (
            <ActivityPanel activity={filteredActivity} users={users} search={search} setSearch={setSearch} accent={accent} />
          )}
        </main>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md bg-[#1a1a1f] border border-white/10 rounded-xl shadow-2xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <span className="text-sm font-bold uppercase tracking-wider text-white">{showModal}</span>
              <button onClick={() => { setShowModal(null); setModalData({}); }} className="text-white/40 hover:text-white">
                <X size={16} />
              </button>
            </div>
            <ModalForm type={showModal} data={modalData} setData={setModalData} games={games} communities={communities} toUsers={toUsers} />
            <div className="flex gap-2 px-5 py-4 border-t border-white/10">
              <button
                onClick={() => action(`/api/lcadmin/${showModal.toLowerCase().replace(" ", "-")}`, modalData)}
                className="flex-1 h-9 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-colors"
              >
                Save
              </button>
              <button
                onClick={() => { setShowModal(null); setModalData({}); }}
                className="h-9 px-4 rounded-lg border border-white/10 text-white/60 hover:text-white text-sm font-semibold transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function OverviewPanel({ users, games, communities, activity, accent }: {
  users: UserData[]; games: GameData[]; communities: CommunityData[]; activity: ActivityLogData[]; accent: string;
}) {
  const statCards = [
    { label: "Total Users", value: users.length, icon: Users, color: "from-purple-600/20 to-purple-900/20 border-purple-500/20" },
    { label: "Communities", value: communities.length, icon: Globe, color: "from-emerald-600/20 to-emerald-900/20 border-emerald-500/20" },
    { label: "Games", value: games.length, icon: Gamepad2, color: "from-amber-600/20 to-amber-900/20 border-amber-500/20" },
    { label: "Activity Events", value: activity.length, icon: Activity, color: "from-red-600/20 to-red-900/20 border-red-500/20" },
  ];
  const roleCounts = Object.fromEntries(["SYS_ADMIN","TO","COMMUNITY_ADMIN","TEAM_MANAGER","PLAYER"].map((r) => [r, users.filter((u) => u.role === r).length]));
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">Platform Overview</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {statCards.map((card) => (
            <div key={card.label} className={`bg-gradient-to-br ${card.color} border rounded-xl p-4`}>
              <div className="flex items-center gap-2 mb-3">
                <card.icon size={16} className="text-white/60" />
                <span className="text-xs text-white/50 uppercase tracking-wider">{card.label}</span>
              </div>
              <span className="text-2xl font-extrabold text-white">{card.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-[#1a1a1f] border border-white/10 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10">
            <h3 className="text-sm font-bold uppercase tracking-wider">Users by Role</h3>
          </div>
          <div className="p-5 space-y-3">
            {(["SYS_ADMIN","TO","COMMUNITY_ADMIN","TEAM_MANAGER","PLAYER"] as const).map((role) => (
              <div key={role} className="flex items-center gap-3">
                <span className="text-xs text-white/50 uppercase tracking-wider w-32">{role.replace("_", " ")}</span>
                <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${users.length ? (roleCounts[role] / users.length) * 100 : 0}%`, backgroundColor: accent }}
                  />
                </div>
                <span className="text-xs font-bold text-white/80 w-6 text-right">{roleCounts[role]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#1a1a1f] border border-white/10 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10">
            <h3 className="text-sm font-bold uppercase tracking-wider">Games Distribution</h3>
          </div>
          <div className="p-5 space-y-3">
            {games.map((g) => {
              const count = communities.filter((c) => c.gameId === g.id).length;
              return (
                <div key={g.id} className="flex items-center gap-3">
                  <span className="text-xs text-white/50 uppercase tracking-wider w-20">{g.slug}</span>
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${count * 25}%`, backgroundColor: g.accentColor }} />
                  </div>
                  <span className="text-xs font-bold text-white/80 w-6 text-right">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#1a1a1f] border border-white/10 rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider">Recent Activity</h3>
          <span className="text-[10px] text-white/30 uppercase tracking-wider">{activity.length} events</span>
        </div>
        <div className="divide-y divide-white/5">
          {activity.slice(0, 8).map((a) => (
            <div key={a.id} className="px-5 py-3 flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: accent }} />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-white">{a.action.replace(/_/g, " ")}</div>
                <div className="text-[11px] text-white/40 mt-0.5 truncate">{a.details ?? "—"}</div>
              </div>
              <div className="text-[10px] text-white/25 flex-shrink-0">
                {new Date(a.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
          ))}
          {activity.length === 0 && <div className="px-5 py-8 text-center text-xs text-white/30">No activity yet</div>}
        </div>
      </div>
    </div>
  );
}

function UsersPanel({ users, communities, games, search, setSearch, roleFilter, setRoleFilter, showModal, setShowModal, modalData, setModalData, action, accent }: {
  users: UserData[]; communities: CommunityData[]; games: GameData[]; search: string; setSearch: (s: string) => void;
  roleFilter: string; setRoleFilter: (r: string) => void; showModal: string | null; setShowModal: (s: string | null) => void;
  modalData: Record<string, string>; setModalData: (d: Record<string, string>) => void; action: (e: string, b: Record<string, string>) => void;
  accent: string;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 max-w-64">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search users..." className="w-full h-9 pl-9 pr-4 bg-[#1a1a1f] border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/40" />
        </div>
        <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className="h-9 px-3 bg-[#1a1a1f] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-purple-500/40">
          <option value="">All Roles</option>
          {["SYS_ADMIN","TO","COMMUNITY_ADMIN","TEAM_MANAGER","PLAYER"].map((r) => <option key={r} value={r}>{ROLE_LABELS[r]}</option>)}
        </select>
        <button
          onClick={() => { setModalData({ email: "", role: "PLAYER" }); setShowModal("Create User"); }}
          className="h-9 flex items-center gap-2 px-4 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors"
        >
          <Plus size={13} /> Create User
        </button>
      </div>
      <div className="bg-[#1a1a1f] border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              {["Email","Role","Discord ID","Joined"].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-white/30">{h}</th>
              ))}
              <th className="px-4 py-3 text-right text-[10px] font-bold uppercase tracking-wider text-white/30">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-4 py-3.5 text-xs text-white font-medium truncate max-w-48">{u.email}</td>
                <td className="px-4 py-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70">{u.role.replace("_", " ")}</span>
                </td>
                <td className="px-4 py-3.5 text-xs text-white/40">{u.discordId ?? "—"}</td>
                <td className="px-4 py-3.5 text-xs text-white/30">{new Date(u.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</td>
                <td className="px-4 py-3.5 flex items-center justify-end gap-1.5">
                  <button onClick={() => action("/api/lcadmin/delete-user", { id: u.id })} className="p-1.5 rounded text-white/30 hover:text-red-400 hover:bg-red-500/10 transition-colors">
                    <Trash2 size={13} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && <div className="px-4 py-12 text-center text-xs text-white/30">No users found</div>}
      </div>
    </div>
  );
}

function CommunitiesPanel({ communities, games, teamAreas, members, toUsers, search, setSearch, showModal, setShowModal, modalData, setModalData, action, accent }: {
  communities: CommunityData[]; games: GameData[]; teamAreas: TeamAreaData[]; members: { id: string; userId: string; teamAreaId: string; status: string; joinedAt: string }[]; toUsers: UserData[];
  search: string; setSearch: (s: string) => void; showModal: string | null; setShowModal: (s: string | null) => void;
  modalData: Record<string, string>; setModalData: (d: Record<string, string>) => void;
  action: (e: string, b: Record<string, string>, v?: string) => void; accent: string;
}) {
  const filtered = communities.filter((c) => !search || c.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-64">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search communities..." className="w-full h-9 pl-9 pr-4 bg-[#1a1a1f] border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/40" />
        </div>
        <button
          onClick={() => { setModalData({ name: "", slug: "", description: "", gameId: games[0]?.id ?? "", createdByUserId: toUsers[0]?.id ?? "" }); setShowModal("Create Community"); }}
          className="h-9 flex items-center gap-2 px-4 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors"
        >
          <Plus size={13} /> Create Community
        </button>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
        {filtered.map((c) => {
          const game = games.find((g) => g.id === c.gameId);
          const areas = teamAreas.filter((t) => t.communityId === c.id);
          return (
            <div key={c.id} className="bg-[#1a1a1f] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors group">
              <div className="h-20 bg-gradient-to-r relative overflow-hidden" style={{ backgroundColor: c.accentColor + "20" }}>
                {c.banner && <img src={c.banner} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-sm font-bold text-white truncate">{c.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ backgroundColor: (game?.accentColor ?? accent) + "20", color: game?.accentColor ?? accent }}>
                    {game?.name ?? "?"}
                  </span>
                  <span className="text-[10px] text-white/30">{areas.length} teams</span>
                </div>
                <p className="text-xs text-white/40 line-clamp-2">{c.description ?? "No description"}</p>
                <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => action("/api/lcadmin/delete-community", { id: c.id })} className="h-7 flex-1 rounded border border-red-500/30 text-red-400/70 hover:text-red-400 hover:bg-red-500/10 text-[10px] font-semibold transition-colors flex items-center justify-center gap-1">
                    <Trash2 size={11} /> Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {filtered.length === 0 && <div className="bg-[#1a1a1f] border border-white/10 rounded-xl px-4 py-12 text-center text-xs text-white/30">No communities found</div>}
    </div>
  );
}

function GameAccessPanel({ toUsers, games, togAccess, toggleGameAccess, accent }: {
  toUsers: UserData[]; games: GameData[]; togAccess: TogAccessData[];
  toggleGameAccess: (userId: string, gameId: string, enabled: boolean) => void; accent: string;
}) {
  return (
    <div className="space-y-4">
      <p className="text-xs text-white/40">Toggle which games each Tournament Organizer can manage. Unchecked = access revoked.</p>
      <div className="bg-[#1a1a1f] border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-white/30">Tournament Organizer</th>
              {games.map((g) => (
                <th key={g.id} className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider text-white/30">{g.name}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {toUsers.map((u) => (
              <tr key={u.id} className="hover:bg-white/[0.02]">
                <td className="px-4 py-3.5 text-xs text-white truncate">{u.email}</td>
                {games.map((g) => {
                  const has = togAccess.some((t) => t.userId === u.id && t.gameId === g.id);
                  return (
                    <td key={g.id} className="px-4 py-3.5 text-center">
                      <button
                        onClick={() => toggleGameAccess(u.id, g.id, !has)}
                        className={`w-9 h-5 rounded-full flex items-center justify-center border transition-all ${
                          has ? "border-emerald-500/50 bg-emerald-500/20" : "border-white/10 bg-white/5"
                        }`}
                      >
                        <div className={`w-3.5 h-3.5 rounded-full transition-colors ${has ? "bg-emerald-400" : "bg-white/20"}`} />
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        {toUsers.length === 0 && <div className="px-4 py-12 text-center text-xs text-white/30">No TOs found</div>}
      </div>
    </div>
  );
}

function ActivityPanel({ activity, users, search, setSearch, accent }: {
  activity: ActivityLogData[]; users: UserData[]; search: string; setSearch: (s: string) => void; accent: string;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-64">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search activity..." className="w-full h-9 pl-9 pr-4 bg-[#1a1a1f] border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/40" />
        </div>
      </div>
      <div className="bg-[#1a1a1f] border border-white/10 rounded-xl overflow-hidden">
        <div className="divide-y divide-white/5">
          {activity.map((a) => (
            <div key={a.id} className="px-5 py-3.5 flex items-start gap-3 hover:bg-white/[0.02]">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: accent }} />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-white">{a.action.replace(/_/g, " ")}</div>
                <div className="text-[11px] text-white/40 mt-0.5">{a.details ?? "—"}</div>
              </div>
              <div className="text-[10px] text-white/25 flex-shrink-0">
                {new Date(a.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
          ))}
          {activity.length === 0 && <div className="px-4 py-12 text-center text-xs text-white/30">No activity found</div>}
        </div>
      </div>
    </div>
  );
}

function ModalForm({ type, data, setData, games, communities, toUsers }: {
  type: string; data: Record<string, string>; setData: (d: Record<string, string>) => void;
  games: GameData[]; communities: CommunityData[]; toUsers: UserData[];
}) {
  function input(key: string, label: string, type2 = "text", required = true) {
    return (
      <div key={key}>
        <label className="block text-[10px] font-bold uppercase tracking-wider text-white/40 mb-1.5">{label}</label>
        <input
          type={type2}
          value={data[key] ?? ""}
          required={required}
          onChange={(e) => setData({ ...data, [key]: e.target.value })}
          className="w-full h-9 px-3 bg-[#14141a] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-purple-500/40"
        />
      </div>
    );
  }
  function select(key: string, label: string, options: { value: string; label: string }[]) {
    return (
      <div key={key}>
        <label className="block text-[10px] font-bold uppercase tracking-wider text-white/40 mb-1.5">{label}</label>
        <select value={data[key] ?? ""} onChange={(e) => setData({ ...data, [key]: e.target.value })} className="w-full h-9 px-3 bg-[#14141a] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-purple-500/40">
          {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
    );
  }
  return (
    <div className="px-5 py-4 space-y-3">
      {type === "Create User" && (
        <>
          {input("email", "Email", "email")}
          {input("password", "Password", "password")}
          {select("role", "Role", ["SYS_ADMIN","TO","COMMUNITY_ADMIN","TEAM_MANAGER","PLAYER"].map((r) => ({ value: r, label: r.replace("_", " ") })))}
        </>
      )}
      {type === "Create Community" && (
        <>
          {input("name", "Community Name")}
          {input("slug", "Slug")}
          {input("description", "Description")}
          {select("gameId", "Game", games.map((g) => ({ value: g.id, label: g.name })))}
          {select("createdByUserId", "Created By", toUsers.map((u) => ({ value: u.id, label: u.email })))}
        </>
      )}
    </div>
  );
}