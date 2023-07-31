<script setup>

const loading = ref(false)

</script>
<template>
    <div class="flex flex-col items-center">
        <SidebarMainCreateRecipe />
        <SidebarMainFeedComponent title="Home" :loading="loading">
            <h1 class="text-black">heyyyy</h1>
        </SidebarMainFeedComponent>
    </div>
</template>

