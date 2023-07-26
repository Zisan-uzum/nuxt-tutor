import { chatMessage } from "./chat"

export interface Cuisine {
    name: string
    systemMessage?: string
    assistantMessage?: string
    messages?: chatMessage[]
}