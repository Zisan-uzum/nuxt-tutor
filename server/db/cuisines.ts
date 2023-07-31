
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createChefBot = async (chefData: { title: string, userId: string }) => {

    const isExist = await findUserBots(chefData.title, chefData.userId)

    if (isExist) {
        throw new Error(`This ${chefData.title} chef already in your list`)
    } else {
        return await prisma.chefBot.create({
            data: chefData
        })
    }

}
export const findUserBots = async (title: string, userId: string) => {
    const isExist = await prisma.chefBot.findFirst({
        where: {
            userId: userId,
            title: title
        },

    })
    return isExist
}
export const findChefBotId = async (userId: string, chefBotTitle: string) => {
    const find = await prisma.chefBot.findFirst({
        where: {
            userId: userId,
            title: chefBotTitle
        }
    })
    return find

}
export const updateCuisineMessages = async (messages: any, userId: string, chefBotTitle: string) => {

    try {
        const foundBot = await findChefBotId(userId, chefBotTitle)

        if (foundBot) {
            const updateBot = await prisma.chefBot.update({
                where: {
                    id: foundBot.id,
                },

                data: {
                    messages: messages
                }
            })
            return updateBot
        } else {
            throw new Error('ChefBot not found');
        }
    }
    catch (error) {
        console.error('Error updating ChefBot messages:', error);
        throw error;
    }

}
export const fetchMessages = async (params: any) => {
    return await prisma.chefBot.findFirst({
        ...params
    })
}