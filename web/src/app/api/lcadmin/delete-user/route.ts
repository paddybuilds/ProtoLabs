import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/db";
export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
    await prisma.user.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}