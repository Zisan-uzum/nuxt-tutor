import { updateCuisineMessages } from "../../../db/cuisines";

export default defineEventHandler(async (event) => {

    const { messages, userId, title } = await readBody(event);

    const updatedBot = await updateCuisineMessages(messages, userId, title)

    return {
        updatedBot
    }
})