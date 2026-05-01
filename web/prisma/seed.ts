import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import bcrypt from "bcryptjs";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.activityLog.deleteMany();
  await prisma.teamMember.deleteMany();
  await prisma.inviteLink.deleteMany();
  await prisma.communityRole.deleteMany();
  await prisma.teamArea.deleteMany();
  await prisma.tournamentOrganizerGame.deleteMany();
  await prisma.community.deleteMany();
  await prisma.user.deleteMany();
  await prisma.game.deleteMany();

  const passwordHash = await bcrypt.hash("password123", 10);

  const sysAdmin = await prisma.user.create({
    data: { email: "sysadmin@elolabs.com", passwordHash, role: "SYS_ADMIN" },
  });

  const toF1 = await prisma.user.create({
    data: { email: "to_f1@elolabs.com", passwordHash, role: "TO" },
  });

  const caFc26 = await prisma.user.create({
    data: { email: "ca_fc26@elolabs.com", passwordHash, role: "COMMUNITY_ADMIN" },
  });

  const tmPga = await prisma.user.create({
    data: { email: "tm_pga@elolabs.com", passwordHash, role: "TEAM_MANAGER" },
  });

  const player = await prisma.user.create({
    data: { email: "player1@elolabs.com", role: "PLAYER" },
  });

  const f1 = await prisma.game.create({ data: { slug: "f1", name: "Formula 1", accentColor: "#ef4444" } });
  const ufc = await prisma.game.create({ data: { slug: "ufc", name: "UFC", accentColor: "#fbbf24" } });
  const fc26 = await prisma.game.create({ data: { slug: "fc26", name: "FC26", accentColor: "#10b981" } });
  const pga = await prisma.game.create({ data: { slug: "pga", name: "PGA", accentColor: "#22c55e" } });
  const nba2k = await prisma.game.create({ data: { slug: "nba-2k", name: "NBA 2K", accentColor: "#f97316" } });

  await prisma.tournamentOrganizerGame.createMany({
    data: [
      { userId: toF1.id, gameId: f1.id, grantedByUserId: sysAdmin.id },
      { userId: toF1.id, gameId: ufc.id, grantedByUserId: sysAdmin.id },
    ],
  });

  const f1Community = await prisma.community.create({
    data: {
      name: "F1 Championship Series",
      slug: "f1-championship-series",
      description: "The premier F1 competitive league.",
      accentColor: "#ef4444",
      gameId: f1.id,
      createdByUserId: toF1.id,
    },
  });

  const fc26Community = await prisma.community.create({
    data: {
      name: "FC26 Pro League",
      slug: "fc26-pro-league",
      description: "Elite FC26 competitive community.",
      accentColor: "#10b981",
      gameId: fc26.id,
      createdByUserId: toF1.id,
    },
  });

  await prisma.communityRole.create({
    data: { userId: caFc26.id, communityId: fc26Community.id, role: "COMMUNITY_ADMIN" },
  });

  const teamArea = await prisma.teamArea.create({
    data: {
      name: "Red Bull Racing",
      title: "Red Bull Racing — F1 Championship",
      description: "Join the reigning constructors' champions.",
      applyOpen: true,
      communityId: f1Community.id,
      teamManagerId: tmPga.id,
    },
  });

  await prisma.inviteLink.create({
    data: { code: "join-f1-championship", type: "COMMUNITY_JOIN", communityId: f1Community.id, createdByUserId: toF1.id },
  });

  await prisma.inviteLink.create({
    data: { code: "invite-red-bull", type: "TEAM_INVITE", communityId: f1Community.id, teamAreaId: teamArea.id, createdByUserId: tmPga.id },
  });

  await prisma.teamMember.create({
    data: { userId: player.id, teamAreaId: teamArea.id, status: "PENDING" },
  });

  await prisma.activityLog.createMany({
    data: [
      { userId: sysAdmin.id, action: "USER_CREATED", details: "Created sysadmin@elolabs.com" },
      { userId: sysAdmin.id, action: "TO_CREATED", details: "Created to_f1@elolabs.com" },
      { userId: sysAdmin.id, action: "GAME_ACCESS_GRANTED", details: "F1 access granted to to_f1@elolabs.com" },
      { userId: toF1.id, action: "COMMUNITY_CREATED", details: "Created F1 Championship Series" },
      { userId: toF1.id, action: "TO_CREATED", details: "Created ca_fc26@elolabs.com" },
      { userId: tmPga.id, action: "TEAM_CREATED", details: "Created Red Bull Racing team area" },
    ],
  });

  console.log("Seed complete.");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });