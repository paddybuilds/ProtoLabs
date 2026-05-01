export interface Owner {
  id: string;
  discordId: string;
  communityName: string;
  logo: string | null;
  primaryColor: string;
  accentColor: string;
}

export interface SeasonSettings {
  name: string;
  rounds: number;
  pointSystem: 'standard' | 'sprint';
  weather: 'realistic' | 'fixed';
}

export interface DriverStanding {
  position: number;
  driverId: string;
  driverName: string;
  teamName: string;
  points: number;
  wins: number;
  podiums: number;
  fastestLaps: number;
}

export interface ConstructorStanding {
  position: number;
  constructorId: string;
  constructorName: string;
  points: number;
  drivers: { name: string; points: number; wins: number }[];
}

export interface DriverContract {
  id: string;
  driverId: string;
  driverName: string;
  teamId: string;
  teamName: string;
  races: number;
  racesRemaining: number;
  signedAt: string;
}

export interface DriverApplication {
  id: string;
  driverName: string;
  teamName: string;
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

export interface F1DevKitState {
  owner: Owner;
  seasonSettings: SeasonSettings;
  driverStandings: DriverStanding[];
  constructorStandings: ConstructorStanding[];
  contracts: DriverContract[];
  applications: DriverApplication[];
  inviteLinks: InviteLink[];
  activityLog: ActivityLogEntry[];
}