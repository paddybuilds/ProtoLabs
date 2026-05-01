import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { email, password, role } = await req.json();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });
    const hash = password ? await bcrypt.hash(password, 10) : null;
    const user = await prisma.user.create({ data: { email, passwordHash: hash, role: role ?? "PLAYER" } });
    await prisma.activityLog.create({ data: { userId: user.id, action: "USER_CREATED", details: `Created ${email}` } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}