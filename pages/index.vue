<script setup lang="ts">

const userLogout = async () => {
    await useAuth().logout();
};

definePageMeta({
    middleware: "auth"
})
</script>

<template>
    <!-- why I cannot use slots here? imported components inside nested templates doesnt seem as imported? -->
    <div class="flex flex-row">
        <SidebarLeft class="w-1/6" />
        <SidebarMain class="w-4/6" />
        <SidebarRight class="mr-6 mt-4 w-1/6" />
        <button class="btn" @click="userLogout">logout</button>
    </div>
</template>