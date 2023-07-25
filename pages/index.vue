<template>
    <h1>this is an index</h1>
    <div>{{ messages }}</div>
    <form @submit.prevent="sendMessage">
        <input type="text" v-model="messageText" />
        <button type="submit">click send</button>
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
            body: { messages: messages.value }
        }).then(res => {
            console.log(res.message);
        })

    } catch (error) {
        console.log("error is", error)
    }

    console.log("after returning")
}
</script>