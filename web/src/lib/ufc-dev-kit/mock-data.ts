import { UFCDevKitState, Fighter, FightCard, RankingSettings, FighterStanding, WeightClassStanding, Contract, Application, InviteLink, ActivityLogEntry } from './types';

export const ufcColorPalette = [
  { name: 'Classic UFC', primary: '#b45f0d', accent: '#fbbf24' },
  { name: 'Neon UFC', primary: '#1a1a2e', accent: '#e94560' },
  { name: 'Legacy', primary: '#2d1f00', accent: '#f59e0b' },
];

export const smallUFCColorPalette = ufcColorPalette;

const mockFighters: Fighter[] = [
  { id: 'fighter-1', ownerId: 'owner-1', name: 'Alexander Volkanovski', weightClass: 'Featherweight', record: { wins: 26, losses: 1, draws: 0 }, ranking: 1, status: 'active' },
  { id: 'fighter-2', ownerId: 'owner-1', name: 'Islam Makhachev', weightClass: 'Lightweight', record: { wins: 26, losses: 0, draws: 0 }, ranking: 1, status: 'active' },
  { id: 'fighter-3', ownerId: 'owner-1', name: 'Sean O\'Malley', weightClass: 'Bantamweight', record: { wins: 20, losses: 1, draws: 0 }, ranking: 1, status: 'active' },
  { id: 'fighter-4', ownerId: 'owner-1', name: 'Brandon Moreno', weightClass: 'Flyweight', record: { wins: 22, losses: 6, draws: 2 }, ranking: 1, status: 'active' },
  { id: 'fighter-5', ownerId: 'owner-1', name: 'Jon Jones', weightClass: 'Heavyweight', record: { wins: 27, losses: 1, draws: 0 }, ranking: 1, status: 'active' },
  { id: 'fighter-6', ownerId: 'owner-1', name: 'Leon Edwards', weightClass: 'Welterweight', record: { wins: 22, losses: 3, draws: 0 }, ranking: 1, status: 'active' },
  { id: 'fighter-7', ownerId: 'owner-1', name: 'Illeana Tuco', weightClass: 'Women\'s Flyweight', record: { wins: 16, losses: 0, draws: 0 }, ranking: 1, status: 'active' },
  { id: 'fighter-8', ownerId: 'owner-1', name: 'Julianna Pena', weightClass: 'Women\'s Bantamweight', record: { wins: 12, losses: 5, draws: 0 }, ranking: 2, status: 'active' },
];

const mockFightCards: FightCard[] = [
  { id: 'card-1', name: 'UFC 315: Edwards vs Della Maddalena', date: '2026-07-12T22:00:00Z', venue: 'T-Mobile Arena, Las Vegas, NV', delayMinutes: 0, fights: [
    { id: 'fight-5', fighter1: { id: 'fighter-2', name: 'Islam Makhachev' }, fighter2: { id: 'fighter-w', name: 'Dustin Poirier' }, winnerId: null, method: null, round: null, cardType: 'prelim', isTitleFight: false, titleImageUrl: null, scheduledTime: '22:00' },
    { id: 'fight-6', fighter1: { id: 'fighter-5', name: 'Jon Jones' }, fighter2: { id: 'fighter-v', name: 'Stipe Miocic' }, winnerId: null, method: null, round: null, cardType: 'prelim', isTitleFight: false, titleImageUrl: null, scheduledTime: '22:05' },
    { id: 'fight-1', fighter1: { id: 'fighter-6', name: 'Leon Edwards' }, fighter2: { id: 'fighter-x', name: 'Jack Della Maddalena' }, winnerId: null, method: null, round: null, cardType: 'main', isTitleFight: true, titleImageUrl: null, scheduledTime: '22:10' },
    { id: 'fight-2', fighter1: { id: 'fighter-7', name: 'Illeana Tuco' }, fighter2: { id: 'fighter-y', name: 'Manon Fiorot' }, winnerId: null, method: null, round: null, cardType: 'main', isTitleFight: false, titleImageUrl: null, scheduledTime: '22:15' },
  ] },
  { id: 'card-2', name: 'UFC 314: Volkanovski vs Lopes', date: '2026-07-19T22:00:00Z', venue: 'Crypto.com Arena, Los Angeles, CA', delayMinutes: 0, fights: [
    { id: 'fight-4', fighter1: { id: 'fighter-3', name: "Sean O'Malley" }, fighter2: { id: 'fighter-u', name: 'Merab Dvalishvili' }, winnerId: null, method: null, round: null, cardType: 'prelim', isTitleFight: false, titleImageUrl: null, scheduledTime: '22:00' },
    { id: 'fight-3', fighter1: { id: 'fighter-1', name: 'Alexander Volkanovski' }, fighter2: { id: 'fighter-z', name: 'Diego Lopes' }, winnerId: null, method: null, round: null, cardType: 'main', isTitleFight: true, titleImageUrl: null, scheduledTime: '22:05' },
  ] },
];

const mockRankingSettings: RankingSettings = {
  pointSystem: '10-9',
  titleFights: true,
  weightMonitoring: true,
};

const mockFighterStandings: FighterStanding[] = [
  { position: 1, fighterId: 'fighter-1', fighterName: 'Alexander Volkanovski', weightClass: 'Featherweight', record: '26-1-0', points: 450 },
  { position: 2, fighterId: 'fighter-3', fighterName: 'Sean O\'Malley', weightClass: 'Bantamweight', record: '20-1-0', points: 380 },
  { position: 3, fighterId: 'fighter-6', fighterName: 'Leon Edwards', weightClass: 'Welterweight', record: '22-3-0', points: 320 },
  { position: 4, fighterId: 'fighter-2', fighterName: 'Islam Makhachev', weightClass: 'Lightweight', record: '26-0-0', points: 500 },
];

const mockWeightClasses: WeightClassStanding[] = [
  { class: 'Heavyweight', limit: 265, champion: 'Jon Jones', topFighters: 15 },
  { class: 'Light Heavyweight', limit: 205, champion: null, topFighters: 15 },
  { class: 'Middleweight', limit: 185, champion: null, topFighters: 15 },
  { class: 'Welterweight', limit: 170, champion: 'Leon Edwards', topFighters: 15 },
  { class: 'Lightweight', limit: 155, champion: 'Islam Makhachev', topFighters: 15 },
  { class: 'Featherweight', limit: 145, champion: 'Alexander Volkanovski', topFighters: 15 },
  { class: 'Bantamweight', limit: 135, champion: 'Sean O\'Malley', topFighters: 15 },
  { class: 'Flyweight', limit: 125, champion: 'Brandon Moreno', topFighters: 15 },
];

const mockContracts: Contract[] = [
  { id: 'contract-1', fighterId: 'fighter-6', fighterName: 'Leon Edwards', eventId: 'card-1', status: 'signed', signedAt: '2026-05-01T10:00:00Z' },
  { id: 'contract-2', fighterId: 'fighter-x', fighterName: 'Jack Della Maddalena', eventId: 'card-1', status: 'signed', signedAt: '2026-05-02T10:00:00Z' },
];

const mockApplications: Application[] = [
  { id: 'app-1', fighterName: 'Paddy Pimblett', weightClass: 'Lightweight', status: 'pending', timestamp: '2026-04-28T14:30:00Z', discordUsername: 'paddythebaddy' },
  { id: 'app-2', fighterName: 'Ciryl Gane', weightClass: 'Heavyweight', status: 'pending', timestamp: '2026-04-29T09:15:00Z', discordUsername: 'cirylgane_official' },
];

const mockInviteLinks: InviteLink[] = [
  { id: 'invite-1', code: 'UFC-VOL2026', status: 'accepted', createdAt: '2026-04-20T10:00:00Z' },
  { id: 'invite-2', code: 'UFC-OMA2026', status: 'pending', createdAt: '2026-04-25T12:00:00Z' },
];

const mockActivityLog: ActivityLogEntry[] = [
  { id: 'log-1', message: 'Leon Edwards vs Della Maddalena booked - UFC 315', timestamp: '2026-05-01T18:30:00Z' },
  { id: 'log-2', message: 'Volkanovski vs Lopes booked - UFC 314', timestamp: '2026-04-30T19:15:00Z' },
  { id: 'log-3', message: 'Islam Makhachev contract renewed', timestamp: '2026-04-28T10:00:00Z' },
  { id: 'log-4', message: 'Sean O\'Malley title defense confirmed', timestamp: '2026-04-25T14:30:00Z' },
];

export const initialUFCDevKitState: UFCDevKitState = {
  ownerId: 'owner-1',
  communityName: 'UFC 2026 Season',
  primaryColor: '#b45f0d',
  accentColor: '#fbbf24',
  rankingSettings: mockRankingSettings,
  fighters: mockFighters,
  fightCards: mockFightCards,
  fighterStandings: mockFighterStandings,
  weightClasses: mockWeightClasses,
  contracts: mockContracts,
  applications: mockApplications,
  inviteLinks: mockInviteLinks,
  activityLog: mockActivityLog,
};