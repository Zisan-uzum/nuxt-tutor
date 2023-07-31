import { chatMessage } from "types/chat"

export const useSystemMessage = (cuisineName: string) => {
    const systemMessage = `You are a ${cuisineName} chef and please give answer to users only about
         ${cuisineName} cuisine. If they ask about anything else answer as yo ask me about 
         only ${cuisineName} cuisine`

    const assistanMessage = `Hello, I'm ${cuisineName} chef, you can ask about ${cuisineName} cuisine`

    const systemObject = computed<chatMessage>(() => {
        return { role: "system", content: systemMessage }
    })

    const assistantObject = computed<chatMessage>(() => {
        return { role: "assistant", content: assistanMessage }
    })

    const messages = computed<chatMessage[]>(() => {
        return [systemObject.value, assistantObject.value]
    })


    return {
        messages
    }
}