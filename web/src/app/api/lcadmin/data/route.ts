import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [users, games, communities, togAccess, activity, teamAreas, inviteLinks, members] = await Promise.all([
      prisma.user.findMany({ orderBy: { createdAt: "desc" } }),
      prisma.game.findMany({ orderBy: { name: "asc" } }),
      prisma.community.findMany({ include: { game: true, createdBy: true }, orderBy: { createdAt: "desc" } }),
      prisma.tournamentOrganizerGame.findMany({ include: { user: true, game: true, grantedBy: true }, orderBy: { grantedAt: "desc" } }),
      prisma.activityLog.findMany({ include: { user: true }, orderBy: { createdAt: "desc" }, take: 100 }),
      prisma.teamArea.findMany(),
      prisma.inviteLink.findMany(),
      prisma.teamMember.findMany(),
    ]);
    const toUsers = users.filter((u: { role: string }) => u.role === "TO");
    return NextResponse.json({ users, games, communities, togAccess, activity, teamAreas, inviteLinks, members, toUsers });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}