<script setup lang="ts">
import { UserCredentials } from 'types/auth';

useHead({
    title: "Register"
})

watchEffect(() => {
    if (useAuth().isAuthenticated.value) {
        return navigateTo('/')
    }
});


const info = ref<UserCredentials>({
    email: '',
    password: ''
})
const errorMsg = ref('');


function handleSendInfo(payload: UserCredentials) {
    info.value = payload
    userRegister()
}




const userRegister = async () => {
    try {
        console.log(info.value.email, info.value.password)
        await useAuth().register(info.value)
    } catch (error: any) {
        errorMsg.value = error.message;
        setTimeout(() => {
            errorMsg.value = '';
        }, 3000);
    }
};

</script>

<template>
    <AuthPage buttonField="Register" @sendInfo="handleSendInfo" />
    <div v-if="errorMsg.length > 0">
        <h1>{{ errorMsg }}</h1>
    </div>
</template>

