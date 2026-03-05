import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findAll = async () => {
  return prisma.user.findMany({ orderBy: { id: 'asc' } });
};

export const create = async (data) => {
  return prisma.user.create({ data });
};
