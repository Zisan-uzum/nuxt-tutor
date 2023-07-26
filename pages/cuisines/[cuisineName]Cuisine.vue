<script setup lang="ts">
import { getAnswer } from '@/repositories/chat'
import { useSystemMessage } from "@/composables/systemMessage";
import { chatMessage } from 'types/chat'


const messageText = ref<string>('')
const answer = ref<string>('');

const route = useRoute()

const systemMessage = useSystemMessage(route.params.cuisineName as string).systemObject

const assistantMessage = useSystemMessage(route.params.cuisineName as string).assistantObject

const messages = ref<chatMessage[]>([systemMessage.value, assistantMessage.value])

async function sendMessage() {

    messages.value = [...messages.value, { role: "user", content: messageText.value }]

    messageText.value = ''

    const stream = await getAnswer({ messages: messages.value })

    useChatStream({
        stream,
        onChunk: ({ data }: any) => {
            answer.value += data;
        },
        onReady: () => {
            messages.value = [...messages.value, { role: "assistant", content: answer.value }];
            answer.value = '';
        },
    });

}
</script>
<template>
    <div v-for="message in messages">
        <div class="chat chat-start" v-if='message.role === "assistant"'>
            <div class="chat-bubble">{{ message.content }}</div>
        </div>
        <div class="chat chat-end" v-if='message.role === "user"'>
            <div class="chat-bubble">{{ message.content }}</div>
        </div>
    </div>
    <div class="chat chat-start" v-if='answer.length > 0'>
        <div class="chat-bubble">{{ answer }}</div>
    </div>

    <form @submit.prevent="sendMessage" class="chat chat-end">
        <input type="text" class="chat-bubble" v-model="messageText" />
        <button type="submit" class="btn">click send</button>
    </form>
</template>
