<script setup lang="ts">
import { getAnswer } from '@/repositories/chat'
import { useSystemMessage } from "@/composables/systemMessage";
import { useCuisines } from '@/composables/cuisines';
import { useAuth } from "@/composables/auth"
import { chatMessage } from 'types/chat';

definePageMeta({
    middleware: "auth"
})

const messageText = ref<string>('')
const answer = ref<string>('');
const usefetchedMessages = ref<chatMessage[]>([])

const route = useRoute()

//dynamic title
const title = computed(() => `${route.params.cuisineName}Cuisine`)

useHead({
    title: title
})

//composables
const { messages } = useSystemMessage(route.params.cuisineName as string)
const { updateMessages, fetchMessages } = useCuisines()

const cuisineName = route.params.cuisineName as string
const response = await fetchMessages({ userId: useAuth().user.value?.id as string, chefBotTitle: cuisineName })

//set returned data from composable to ref
usefetchedMessages.value = response.messages

async function sendMessage() {
    if (usefetchedMessages.value.length > 0) {
        usefetchedMessages.value.push({ role: "user", content: messageText.value })
    }
    else {
        usefetchedMessages.value = [...messages.value, { role: "user", content: messageText.value }]
    }
    messageText.value = ''
    const stream = await getAnswer({ messages: usefetchedMessages.value })
    console.log("stream is ", stream)
    useChatStream({
        stream,
        onChunk: ({ data }: any) => {
            answer.value += data;
        },
        onReady: () => {
            usefetchedMessages.value.push({ role: "assistant", content: answer.value })

            answer.value = '';
        },
    });
    await updateMessages({ messages: usefetchedMessages.value, userId: useAuth().user.value?.id as string, title: cuisineName })
}

</script>
<template>
    <div v-for="message in usefetchedMessages">
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
