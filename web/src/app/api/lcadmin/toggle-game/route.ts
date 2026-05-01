import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/db";

export async function POST(req: NextRequest) {
  try {
    const { userId, gameId, enabled } = await req.json();
    if (!userId || !gameId) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    if (enabled) {
      await prisma.tournamentOrganizerGame.upsert({
        where: { userId_gameId: { userId, gameId } },
        create: { userId, gameId, grantedByUserId: "clx00admin" },
        update: { grantedAt: new Date() },
      });
    } else {
      await prisma.tournamentOrganizerGame.deleteMany({ where: { userId, gameId } });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}