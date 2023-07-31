<script setup lang="ts">
const props = defineProps({
    route: {
        type: String

    }
})

</script>
<template>
    <NuxtLink :to="props.route" class="flex flex-row items-center justify-start gap-4">
        <div class="w-6 h-6 text-primary">
            <slot name="icon" />
        </div>
        <div class="font-bold text-lg">
            <slot name="name" />
        </div>
    </NuxtLink>
</template>

