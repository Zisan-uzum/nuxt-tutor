<script setup lang="ts">
import { getAnswer } from '@/repositories/chat'
import { useSystemMessage } from "@/composables/systemMessage";
import { useCuisines } from '@/composables/cuisines';
import { useCuisinesStore } from '@/stores/cuisines'
import { useAuth } from "@/composables/auth"
import { chatMessage } from 'types/chat';

const messageText = ref<string>('')
const answer = ref<string>('');
const usefetchedMessages = ref<chatMessage[]>()

const route = useRoute()

const store = useCuisinesStore()

const { selectedCuisineIndex, messages } = useSystemMessage(route.params.cuisineName as string)
const { updateMessages, fetchMessages } = useCuisines()

//fix afterward because we sure userid exists if it is login

//also always give error for pinia getactivepinia?


async function setFetchedMessages() {

    const response = await fetchMessages({ userId: useAuth().user.value?.id as string, chefBotTitle: store.cuisineList[selectedCuisineIndex].name })

    usefetchedMessages.value = response.messages
}
async function sendMessage() {

    //convert computed while altering the array

    store.cuisineList[selectedCuisineIndex].messages = [...messages.value, { role: "user", content: messageText.value }]

    messageText.value = ''

    const stream = await getAnswer({ messages: store.cuisineList[selectedCuisineIndex].messages })

    useChatStream({
        stream,
        onChunk: ({ data }: any) => {
            answer.value += data;
        },
        onReady: () => {
            store.cuisineList[selectedCuisineIndex].messages.push({ role: "assistant", content: answer.value })
            answer.value = '';
        },
    });

    await updateMessages({ messages: store.cuisineList[selectedCuisineIndex].messages, userId: useAuth().user.value?.id as string, title: store.cuisineList[selectedCuisineIndex].name })
}

setFetchedMessages()
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
