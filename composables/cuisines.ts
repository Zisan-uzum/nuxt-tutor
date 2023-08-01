import { chatMessage } from "types/chat"

export const useCuisines = () => {

    const addCuisine = async ({ title, userId }: { title: string, userId: string }) => {
        return await fetch('/api/user/cuisines', {
            method: "POST",
            body: JSON.stringify({
                title,
                userId
            }),
        })

    }

    const updateMessages = async ({ messages, userId, title }: { messages: chatMessage[], userId: string, title: string }) => {

        console.log("in composable side messages are", messages)
        return await fetch('/api/user/cuisines/updateMessages', {
            method: "POST",
            body: JSON.stringify({
                messages,
                userId,
                title
            })
        })
    }

    const fetchMessages = async ({ userId, chefBotTitle }: { userId: string, chefBotTitle: string }) => {
        const response = await fetch(`/api/user/cuisines/fetchMessages?userId=${userId}&chefBotTitle=${chefBotTitle}`, {
            method: 'GET',
        })
        const json = await response.json()
        return json.messages
    }

    return {
        addCuisine,
        updateMessages,
        fetchMessages
    }
}