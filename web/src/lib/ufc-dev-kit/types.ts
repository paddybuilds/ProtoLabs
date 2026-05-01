export interface Fighter {
  id: string;
  ownerId: string;
  name: string;
  weightClass: string;
  record: { wins: number; losses: number; draws: number };
  ranking: number;
  status: 'active' | 'injured' | 'suspended';
}

export interface FightCard {
  id: string;
  name: string;
  date: string;
  venue: string;
  delayMinutes: number;
  fights: FightMatch[];
}

export interface FightMatch {
  id: string;
  fighter1: { id: string; name: string };
  fighter2: { id: string; name: string };
  winnerId: string | null;
  method: 'KO' | 'Submission' | 'Decision' | 'Draw' | null;
  round: number | null;
  cardType: 'main' | 'prelim';
  isTitleFight: boolean;
  titleImageUrl: string | null;
  scheduledTime: string;
}

export interface RankingSettings {
  pointSystem: '10-9' | 'MMA_scoring';
  titleFights: boolean;
  weightMonitoring: boolean;
}

export interface FighterStanding {
  position: number;
  fighterId: string;
  fighterName: string;
  weightClass: string;
  record: string;
  points: number;
}

export interface WeightClassStanding {
  class: string;
  limit: number;
  champion: string | null;
  topFighters: number;
}

export interface Contract {
  id: string;
  fighterId: string;
  fighterName: string;
  eventId: string;
  status: 'pending' | 'signed' | 'declined';
  signedAt: string;
}

export interface Application {
  id: string;
  fighterName: string;
  weightClass: string;
  status: 'pending' | 'accepted' | 'rejected';
  timestamp: string;
  discordUsername: string;
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

export interface UFCDevKitState {
  ownerId: string;
  communityName: string;
  primaryColor: string;
  accentColor: string;
  rankingSettings: RankingSettings;
  fighters: Fighter[];
  fightCards: FightCard[];
  fighterStandings: FighterStanding[];
  weightClasses: WeightClassStanding[];
  contracts: Contract[];
  applications: Application[];
  inviteLinks: InviteLink[];
  activityLog: ActivityLogEntry[];
}