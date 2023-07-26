import { useCuisinesStore } from "@/stores/cuisines"
import { chatMessage } from "types/chat"

const store = useCuisinesStore()

export const useSystemMessage = (cuisineName: string) => {
    const systemMessage = `You are a ${cuisineName} chef and please give answer to users only about
         ${cuisineName} cuisine. If they ask about anything else answer as yo ask me about 
         only ${cuisineName} cuisine`

    const assistanMessage = `Hello, I'm ${cuisineName} chef, you can ask about ${cuisineName} cuisine`

    const selectedCuisineIndex = store.cuisineList.findIndex((cuisine) => cuisine.name === cuisineName)


    const systemObject = computed<chatMessage>(() => {
        return { role: "system", content: systemMessage }
    })

    const assistantObject = computed<chatMessage>(() => {
        return { role: "assistant", content: assistanMessage }
    })

    const messages = computed<chatMessage[]>(() => {
        if (store.cuisineList[selectedCuisineIndex] && store.cuisineList[selectedCuisineIndex]?.messages.length > 0) {
            return [...store.cuisineList[selectedCuisineIndex]?.messages]
        } else {
            return [systemObject.value, assistantObject.value]
        }
    })


    return {
        selectedCuisineIndex,
        messages
    }
}