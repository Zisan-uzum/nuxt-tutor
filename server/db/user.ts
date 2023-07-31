import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = (userData: { id: string }) => {
    return prisma.user.create({
        data: userData
    })
}

