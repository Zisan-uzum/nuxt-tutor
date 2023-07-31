<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    loading: {
        type: Boolean,
        required: true
    }
})
</script>
<template>
    <div>
        <h1>{{ props.title }}</h1>
        <div v-if="props.loading">
            <span class="loading loading-ball loading-lg"></span>
        </div>
        <div v-else="props.loading">
            <slot />
        </div>
    </div>
</template>
