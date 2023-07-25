<template>
    <!-- <div>{{ messages }}</div> -->
    <div v-for="message in messages">
        <div class="chat chat-start" v-if='message.role === "assistant"'>
            <div class="chat-bubble">{{ message.content }}</div>
        </div>
        <div class="chat chat-end" v-if='message.role === "user"'>
            <div class="chat-bubble">{{ message.content }}</div>
        </div>
    </div>
    <form @submit.prevent="sendMessage" class="chat chat-end">
        <input type="text" class="chat-bubble" v-model="messageText" />
        <button type="submit" class="btn">click send</button>
    </form>
</template>
<script setup lang="ts">

// Access the runtimeConfig using useContext

// Access the OpenAI secret key from runtimeConfig


const messageText = ref<string>('')
const messages = ref([
    { role: "assistant", content: "Hello, how can I help you" },
    { role: "assistant", content: "You can ask about italian cuisine" }
])

async function sendMessage() {

    messages.value = [...messages.value, { role: "user", content: messageText.value }]

    try {
        await $fetch("/api/sendMessage", {
            method: "POST",
            body: JSON.stringify({ messages: messages.value })
        }).then(res => {
            console.log(res.message);
            if (res.message.content) {
                messages.value = [...messages.value, { role: "assistant", content: res.message.content }]

            }
            messageText.value = ''
        })

    } catch (error) {
        console.log("error is", error)
    }

    console.log("after returning")
}
</script>