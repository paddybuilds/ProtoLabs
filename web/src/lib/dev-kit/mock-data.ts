import { DevKitState, Owner, Team, Player, LeagueEntry, Contract, Application, InviteLink, ActivityLogEntry } from './types';

export const smallColorPalette = [
  { name: 'Emerald', primary: '#064e3b', accent: '#34d399' },
  { name: 'Red', primary: '#7f1d1d', accent: '#f87171' },
  { name: 'Blue', primary: '#1e3a8a', accent: '#60a5fa' },
  { name: 'Amber', primary: '#78350f', accent: '#fbbf24' },
  { name: 'Purple', primary: '#4c1d95', accent: '#a78bfa' },
  { name: 'Pink', primary: '#831843', accent: '#f472b6' },
];

export const colorPalette = [
  { name: 'Emerald', primary: '#064e3b', accent: '#34d399' },
  { name: 'Red', primary: '#7f1d1d', accent: '#f87171' },
  { name: 'Blue', primary: '#1e3a8a', accent: '#60a5fa' },
  { name: 'Amber', primary: '#78350f', accent: '#fbbf24' },
  { name: 'Purple', primary: '#4c1d95', accent: '#a78bfa' },
  { name: 'Pink', primary: '#831843', accent: '#f472b6' },
  { name: 'Cyan', primary: '#164e63', accent: '#22d3ee' },
  { name: 'Orange', primary: '#7c2d12', accent: '#fb923c' },
  { name: 'Teal', primary: '#134e4a', accent: '#2dd4bf' },
  { name: 'Indigo', primary: '#312e81', accent: '#818cf8' },
  { name: 'Rose', primary: '#881337', accent: '#fb7185' },
  { name: 'Slate', primary: '#1e293b', accent: '#94a3b8' },
];

const mockOwner: Owner = {
  id: 'owner-1',
  discordId: 'discord-123',
  communityName: 'FC26 Community',
  logo: null,
  primaryColor: '#064e3b',
  accentColor: '#34d399',
};

const mockTeams: Team[] = [
  {
    id: 'team-1',
    ownerId: 'owner-1',
    name: 'Thunder FC',
    expiresAt: null,
    createdAt: '2026-01-15T10:00:00Z',
    players: [],
  },
  {
    id: 'team-2',
    ownerId: 'owner-1',
    name: 'Lightning United',
    expiresAt: null,
    createdAt: '2026-01-15T10:00:00Z',
    players: [],
  },
  {
    id: 'team-3',
    ownerId: 'owner-1',
    name: 'Storm Rovers',
    expiresAt: '2026-06-01T00:00:00Z',
    createdAt: '2026-01-15T10:00:00Z',
    players: [],
  },
  {
    id: 'team-4',
    ownerId: 'owner-1',
    name: 'Phoenix FC',
    expiresAt: null,
    createdAt: '2026-01-15T10:00:00Z',
    players: [],
  },
];

const mockPlayers: Player[] = [
  { id: 'player-1', ownerId: 'owner-1', name: 'ProGamer99', teamId: 'team-1' },
  { id: 'player-2', ownerId: 'owner-1', name: 'SoccerStar', teamId: 'team-1' },
  { id: 'player-3', ownerId: 'owner-1', name: 'GoalMachine', teamId: 'team-2' },
  { id: 'player-4', ownerId: 'owner-1', name: 'MidfieldKing', teamId: 'team-2' },
  { id: 'player-5', ownerId: 'owner-1', name: 'DefenderX', teamId: 'team-3' },
  { id: 'player-6', ownerId: 'owner-1', name: 'Speedster', teamId: 'team-4' },
  { id: 'player-7', ownerId: 'owner-1', name: 'NewSignings', teamId: null },
];

const mockLeagueTable: LeagueEntry[] = [
  { teamId: 'team-1', teamName: 'Thunder FC', played: 10, won: 8, drawn: 1, lost: 1, points: 25 },
  { teamId: 'team-2', teamName: 'Lightning United', played: 10, won: 7, drawn: 2, lost: 1, points: 23 },
  { teamId: 'team-3', teamName: 'Storm Rovers', played: 10, won: 5, drawn: 2, lost: 3, points: 17 },
  { teamId: 'team-4', teamName: 'Phoenix FC', played: 10, won: 3, drawn: 1, lost: 6, points: 10 },
  { teamId: 'team-5', teamName: 'Iron Walls', played: 10, won: 2, drawn: 0, lost: 8, points: 6 },
  { teamId: 'team-6', teamName: 'Rapid FC', played: 10, won: 1, drawn: 0, lost: 9, points: 3 },
];

const mockContracts: Contract[] = [
  { id: 'contract-1', playerId: 'player-1', playerName: 'ProGamer99', teamId: 'team-1', totalGames: 50, gamesRemaining: 47, signedAt: '2026-01-10T10:00:00Z' },
];

const mockApplications: Application[] = [
  { id: 'app-1', playerName: 'NewbieFC', status: 'pending', timestamp: '2026-04-28T14:30:00Z' },
  { id: 'app-2', playerName: 'ElitePlayer', status: 'pending', timestamp: '2026-04-29T09:15:00Z' },
  { id: 'app-3', playerName: 'CasualGamer', status: 'pending', timestamp: '2026-04-30T16:45:00Z' },
];

const mockInviteLinks: InviteLink[] = [
  { id: 'invite-1', code: 'FC26-ABC123', status: 'accepted', createdAt: '2026-04-20T10:00:00Z' },
  { id: 'invite-2', code: 'FC26-DEF456', status: 'pending', createdAt: '2026-04-25T12:00:00Z' },
  { id: 'invite-3', code: 'FC26-GHI789', status: 'pending', createdAt: '2026-04-28T15:30:00Z' },
];

const mockActivityLog: ActivityLogEntry[] = [
  { id: 'log-1', message: 'ProGamer99 has joined the team', timestamp: '2026-01-10T10:00:00Z' },
  { id: 'log-2', message: 'SoccerStar has joined the team', timestamp: '2026-01-12T10:00:00Z' },
  { id: 'log-3', message: 'GoalMachine has joined the team', timestamp: '2026-01-08T10:00:00Z' },
  { id: 'log-4', message: 'MidfieldKing has joined the team', timestamp: '2026-01-14T10:00:00Z' },
  { id: 'log-5', message: 'BannedUser unable to join team due to an IP Ban', timestamp: '2026-04-27T11:00:00Z' },
  { id: 'log-6', message: 'SoccerStar contract renewed for 25 games', timestamp: '2026-01-12T10:05:00Z' },
];

export const initialDevKitState: DevKitState = {
  owner: mockOwner,
  teams: mockTeams,
  players: mockPlayers,
  leagueTable: mockLeagueTable,
  contracts: mockContracts,
  applications: mockApplications,
  inviteLinks: mockInviteLinks,
  activityLog: mockActivityLog,
};

export function createEmptyState(): DevKitState {
  return {
    owner: { ...mockOwner, communityName: '', logo: null, primaryColor: '#064e3b', accentColor: '#34d399' },
    teams: [],
    players: [],
    leagueTable: [],
    contracts: [],
    applications: [],
    inviteLinks: [],
    activityLog: [],
  };
}