import { createUser } from "../../db/user";

export default defineEventHandler(async (event) => {

    const { id } = await readBody(event);

    const user = await createUser({ id })

    return {
        user
    }
})