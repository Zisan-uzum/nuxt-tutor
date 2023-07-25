import { Configuration, OpenAIApi } from "openai"
export default defineEventHandler(async (event) => {

    const { messages } = await readBody(event)

    const runtimeConfig = useRuntimeConfig()

    const configuration = new Configuration({
        apiKey: runtimeConfig.openAi.secretKey
    })
    console.log("api key is ", configuration.apiKey)
    const openai = new OpenAIApi(configuration)

    let chatHistory = [{ role: 'system', content: "You are a italian chef and please give answer to users only about italian cuisine. If they ask about anything else answer as yo ask me about only italian cuisine" }
        , ...messages
    ]

    console.log("chat history is", chatHistory)
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: chatHistory
    })

    const response = completion.data.choices[0].message

    return {
        message: response
    }
})