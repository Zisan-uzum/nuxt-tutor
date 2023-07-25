<template>
    <div class="flex flex-row ">
        <img src="https://clipground.com/images/chef-png-cartoon-8.jpg" class="w-1/4 h-screen" />


        <div class="flex justify-center items-center w-3/4">
            <div class="w-full max-w-md">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="handleEmit">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="email" placeholder="Username" v-model="info.email">
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input
                            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="*************" v-model="info.password">
                        <p class="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div class="flex flex-col items-center justify-between gap-2">
                        <button class="btn" type="submit">
                            {{ buttonField }}
                        </button>
                        <p v-if="userExists" @click="() => navigateTo('/register')" class="cursor-pointer font-semibold">You
                            dont
                            have an
                            account then register babe
                        </p>
                        <p v-else @click="() => navigateTo('/login')" class="cursor-pointer font-semibold">
                            If you have an account sign in babe
                        </p>

                    </div>
                </form>
                <p class="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>


    </div>
</template>
<script setup lang="ts">
import { UserCredentials } from 'types/auth';


const info = ref<UserCredentials>({
    email: '',
    password: ''
})

defineProps<{
    buttonField: string
    userExists?: boolean
}>()

const emit = defineEmits<{
    (e: 'sendInfo', payload: UserCredentials): void
}>()

function handleEmit() {
    emit('sendInfo', info.value)
}
</script>