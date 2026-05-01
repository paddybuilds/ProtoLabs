export interface Owner {
  id: string;
  discordId: string;
  communityName: string;
  logo: string | null;
  primaryColor: string;
  accentColor: string;
}

export interface Team {
  id: string;
  ownerId: string;
  name: string;
  expiresAt: string | null;
  createdAt: string;
  players: Player[];
}

export interface Player {
  id: string;
  ownerId: string;
  name: string;
  teamId: string | null;
}

export interface LeagueEntry {
  teamId: string;
  teamName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  points: number;
}

export interface Contract {
  id: string;
  playerId: string;
  playerName: string;
  teamId: string;
  totalGames: number;
  gamesRemaining: number;
  signedAt: string;
}

export interface Application {
  id: string;
  playerName: string;
  status: 'pending' | 'accepted' | 'rejected';
  timestamp: string;
}

export interface InviteLink {
  id: string;
  code: string;
  status: 'pending' | 'accepted' | 'expired';
  createdAt: string;
}

export interface ActivityLogEntry {
  id: string;
  message: string;
  timestamp: string;
}

export interface DevKitState {
  owner: Owner;
  teams: Team[];
  players: Player[];
  leagueTable: LeagueEntry[];
  contracts: Contract[];
  applications: Application[];
  inviteLinks: InviteLink[];
  activityLog: ActivityLogEntry[];
}