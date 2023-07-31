
import { fetchMessages } from "../../../db/cuisines"
import { parse } from 'url';
export default defineEventHandler(async (event) => {


    const urlObj = parse(event.node.req.url || '', true);

    const queryParams = urlObj.query;

    const messages = await fetchMessages({
        where: {
            title: queryParams.chefBotTitle,
            userId: queryParams.userId
        },
        select: {
            messages: true,
        }
    })

    return {
        messages
    }
})