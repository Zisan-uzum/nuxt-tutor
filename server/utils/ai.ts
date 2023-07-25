import { Configuration, OpenAIApi } from "openai";

const config = useRuntimeConfig();

const configuration = new Configuration({
    apiKey: config.openAi.secretKey,
});
const openai = new OpenAIApi(configuration);

export const getChatStream = async ({ messages }: any) => {
    let chatHistory = [{ role: 'system', content: "You are a italian chef and please give answer to users only about italian cuisine. If they ask about anything else answer as yo ask me about only italian cuisine" }
        , ...messages
    ]

    const response = await openai.createChatCompletion(
        {
            model: "gpt-3.5-turbo", // or `gpt-3.5-turbo`
            temperature: 0.7,
            messages: chatHistory,
            stream: true,
        },
        { responseType: "stream" }
    );

    return response.data;
};