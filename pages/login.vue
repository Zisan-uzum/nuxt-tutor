<template>
    <AuthPage buttonField="Sign in" :userExists="true" @sendInfo="handleSendInfo" />
</template>

<script setup lang="ts">
import { UserCredentials } from 'types/auth';

// import { createClient } from '@supabase/supabase-js'

// const config = useRuntimeConfig()
// // Create a single supabase client for interacting with your database
// const supabase = createClient(config.supabaseUrl, config.supabaseKey)

const info = ref<UserCredentials>({
    email: '',
    password: ''
})
const errorMsg = ref('');

function handleSendInfo(payload: UserCredentials) {
    info.value = payload
    console.log("info value is ", info.value.email)
    userLogin()
}

const { isAuthenticated } = useAuth()

watchEffect(() => {
    if (isAuthenticated.value) {
        return navigateTo('/');
    }
});

const userLogin = async () => {
    console.log("inside user login")
    try {
        console.log(info.value.email, info.value.password)

        const user = await useAuth().login(info.value)

        console.log("user is ", user.email)

    } catch (error: any) {
        console.log(error)
        errorMsg.value = error.message;
        setTimeout(() => {
            errorMsg.value = '';
        }, 3000);
    }
};
</script>