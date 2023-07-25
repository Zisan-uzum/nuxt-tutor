<template>
    <div class="flex flex-col items-center">
        <CreateRecipe />
        <FeedComponent title="Home" :loading="loading">
            <h1 class="text-black">heyyyy</h1>
        </FeedComponent>
    </div>
</template>

<script setup>
import FeedComponent from './FeedComponent.vue';
import CreateRecipe from './createRecipe.vue';


const loading = ref(false)

</script>