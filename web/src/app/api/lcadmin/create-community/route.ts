import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/db";

export async function POST(req: NextRequest) {
  try {
    const { name, slug, description, gameId, createdByUserId } = await req.json();
    if (!name || !gameId) return NextResponse.json({ error: "Name and game required" }, { status: 400 });
    const community = await prisma.community.create({
      data: {
        name,
        slug: slug ?? name.toLowerCase().replace(/\s+/g, "-"),
        description: description ?? "",
        gameId,
        createdByUserId: createdByUserId ?? "clx00000000000000000000000000",
      },
    });
    await prisma.activityLog.create({ data: { userId: community.createdByUserId, action: "COMMUNITY_CREATED", details: `Created ${name}` } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to create community" }, { status: 500 });
  }
}