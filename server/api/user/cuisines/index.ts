
import { createChefBot } from "../../../db/cuisines"
export default defineEventHandler(async (event) => {

    const { title, userId } = await readBody(event);

    const chefBot = await createChefBot({ title, userId })
    return {
        chefBot
    }
})