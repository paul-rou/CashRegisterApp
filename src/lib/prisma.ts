import { PrismaClient } from '@prisma/client';


declare global {
    namespace NodeJS {
      interface Global {
        prisma: PrismaClient;
      }
    }
  }

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
    const globalValue = global as any
  if (!globalValue.prisma) {
    globalValue.prisma = new PrismaClient();
  }
  prisma = globalValue.prisma;
}

export default prisma;