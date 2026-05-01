import { PrismaClient } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

function createPrismaClient() {
  const url = process.env.DATABASE_URL;
  if (url && url.startsWith("prisma+postgres://")) {
    return new PrismaClient({ accelerateUrl: url, log: ["error"] });
  }
  const pool = new pg.Pool({ connectionString: url });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter, log: ["error"] });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}