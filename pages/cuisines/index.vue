<script setup lang="ts">
import { useCuisinesStore } from '@/stores/cuisines';
import { useCuisines } from '@/composables/cuisines'
import { useAuth } from '@/composables/auth';


const cuisineStore = useCuisinesStore()
const { addCuisine } = useCuisines()
const { user } = useAuth()

const handleSubmit = async (cuisineName: string) => {

    try {
        const response = await addCuisine({ title: cuisineName, userId: user.value?.id as string })
    } catch (error) {
        console.log("couldnt add cuisine chefbot", error)
    }
}
</script>

<template>
    <div>
        <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
            <li v-for="cuisine in cuisineStore.cuisineList ">
                <NuxtLink :to="`/cuisines/${cuisine.name}Cuisine`">{{ cuisine.name }}</NuxtLink>
                <button class="btn" @click="handleSubmit(cuisine.name)">Add to my list</button>
            </li>

        </ul>
    </div>
</template>