import { PrismaClient } from "@prisma/client";

type GlobalWithPrisma = typeof globalThis & {
  prisma?: PrismaClient;
};

export const db = (globalThis as GlobalWithPrisma).prisma || new PrismaClient();

if (process.env.NODE_ENV === "production") {
  (globalThis as GlobalWithPrisma).prisma = db;
}
