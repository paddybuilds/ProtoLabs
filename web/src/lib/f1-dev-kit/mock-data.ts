import { F1DevKitState, Owner, DriverStanding, ConstructorStanding, DriverContract, DriverApplication, InviteLink, ActivityLogEntry } from './types';

export const smallF1ColorPalette = [
  { name: 'Platform Red', primary: '#1a1515', accent: '#ef4444' },
  { name: 'Classic F1', primary: '#1a0a0a', accent: '#e10600' },
  { name: 'Carbon', primary: '#151515', accent: '#ffffff' },
  { name: 'Night Mode', primary: '#0a0a0a', accent: '#ef4444' },
];

export const f1ColorPalette = [
  { name: 'Platform Red', primary: '#1a1515', accent: '#ef4444' },
  { name: 'Classic F1', primary: '#1a0a0a', accent: '#e10600' },
  { name: 'Carbon', primary: '#151515', accent: '#ffffff' },
  { name: 'Night Mode', primary: '#0a0a0a', accent: '#ef4444' },
  { name: 'Mercury', primary: '#1a1a25', accent: '#a0a0b0' },
  { name: 'Sapphire', primary: '#0a1020', accent: '#4488ff' },
  { name: 'Amber', primary: '#1a1510', accent: '#ffaa00' },
  { name: 'Midnight', primary: '#0a0a15', accent: '#8844ff' },
];

const mockOwner: Owner = {
  id: 'owner-1',
  discordId: 'discord-123',
  communityName: 'F1 2026 Season',
  logo: null,
  primaryColor: '#1a1515',
  accentColor: '#ef4444',
};

const mockSeasonSettings = {
  name: 'F1 2026 Championship',
  rounds: 24,
  pointSystem: 'standard' as const,
  weather: 'realistic' as const,
};

const mockDriverStandings: DriverStanding[] = [
  { position: 1, driverId: 'd-1', driverName: 'Max Verstappen', teamName: 'Red Bull Racing', points: 285, wins: 9, podiums: 14, fastestLaps: 5 },
  { position: 2, driverId: 'd-2', driverName: 'Lando Norris', teamName: 'McLaren', points: 241, wins: 4, podiums: 11, fastestLaps: 3 },
  { position: 3, driverId: 'd-3', driverName: 'Oscar Piastri', teamName: 'McLaren', points: 207, wins: 2, podiums: 9, fastestLaps: 2 },
  { position: 4, driverId: 'd-4', driverName: 'Charles Leclerc', teamName: 'Ferrari', points: 198, wins: 3, podiums: 8, fastestLaps: 4 },
  { position: 5, driverId: 'd-5', driverName: 'George Russell', teamName: 'Mercedes', points: 183, wins: 2, podiums: 7, fastestLaps: 1 },
  { position: 6, driverId: 'd-6', driverName: 'Lewis Hamilton', teamName: 'Ferrari', points: 171, wins: 1, podiums: 6, fastestLaps: 0 },
];

const mockConstructorStandings: ConstructorStanding[] = [
  { position: 1, constructorId: 'c-1', constructorName: 'Red Bull Racing', points: 412, drivers: [{ name: 'Max Verstappen', points: 285, wins: 9 }, { name: 'Sergio Perez', points: 127, wins: 1 }] },
  { position: 2, constructorId: 'c-2', constructorName: 'McLaren', points: 448, drivers: [{ name: 'Lando Norris', points: 241, wins: 4 }, { name: 'Oscar Piastri', points: 207, wins: 2 }] },
  { position: 3, constructorId: 'c-3', constructorName: 'Ferrari', points: 369, drivers: [{ name: 'Charles Leclerc', points: 198, wins: 3 }, { name: 'Lewis Hamilton', points: 171, wins: 1 }] },
  { position: 4, constructorId: 'c-4', constructorName: 'Mercedes', points: 312, drivers: [{ name: 'George Russell', points: 183, wins: 2 }, { name: 'Andrea Kimi Antonelli', points: 129, wins: 0 }] },
  { position: 5, constructorId: 'c-5', constructorName: 'Aston Martin', points: 86, drivers: [{ name: 'Fernando Alonso', points: 54, wins: 0 }, { name: 'Lance Stroll', points: 32, wins: 0 }] },
];

const mockContracts: DriverContract[] = [
  { id: 'contract-1', driverId: 'd-1', driverName: 'Max Verstappen', teamId: 'c-1', teamName: 'Red Bull Racing', races: 50, racesRemaining: 47, signedAt: '2026-01-10T10:00:00Z' },
  { id: 'contract-2', driverId: 'd-2', driverName: 'Lando Norris', teamId: 'c-2', teamName: 'McLaren', races: 50, racesRemaining: 44, signedAt: '2026-01-10T10:00:00Z' },
];

const mockApplications: DriverApplication[] = [
  { id: 'app-1', driverName: 'Franco Colapinto', teamName: 'Reserve Driver', status: 'pending', timestamp: '2026-04-28T14:30:00Z' },
  { id: 'app-2', driverName: 'Felipe Drugovich', teamName: 'Aston Martin', status: 'pending', timestamp: '2026-04-29T09:15:00Z' },
  { id: 'app-3', driverName: 'Marcus Armstrong', teamName: 'IndyCar Move', status: 'pending', timestamp: '2026-04-30T16:45:00Z' },
];

const mockInviteLinks: InviteLink[] = [
  { id: 'invite-1', code: 'F1-ABC123', status: 'accepted', createdAt: '2026-04-20T10:00:00Z' },
  { id: 'invite-2', code: 'F1-DEF456', status: 'pending', createdAt: '2026-04-25T12:00:00Z' },
  { id: 'invite-3', code: 'F1-GHI789', status: 'pending', createdAt: '2026-04-28T15:30:00Z' },
];

const mockActivityLog: ActivityLogEntry[] = [
  { id: 'log-1', message: 'Max Verstappen signs 3-year extension with Red Bull Racing', timestamp: '2026-05-01T18:30:00Z' },
  { id: 'log-2', message: 'Oscar Piastri rookie test confirmed — Bahrain International Circuit', timestamp: '2026-04-30T19:15:00Z' },
  { id: 'log-3', message: 'Lewis Hamilton podium clause updated in Ferrari contract', timestamp: '2026-04-28T10:00:00Z' },
  { id: 'log-4', message: 'Aston Martin aero upgrade package approved for Miami GP', timestamp: '2026-04-25T14:30:00Z' },
];

export const initialF1DevKitState: F1DevKitState = {
  owner: mockOwner,
  seasonSettings: mockSeasonSettings,
  driverStandings: mockDriverStandings,
  constructorStandings: mockConstructorStandings,
  contracts: mockContracts,
  applications: mockApplications,
  inviteLinks: mockInviteLinks,
  activityLog: mockActivityLog,
};