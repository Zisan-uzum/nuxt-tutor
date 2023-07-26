<script setup lang="ts">
import { useCuisinesStore } from '@/stores/cuisines';


const cuisineStore = useCuisinesStore()

</script>

<template>
    <div>
        <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
            <li v-for="cuisine in cuisineStore.cuisineList ">
                <NuxtLink :to="`/cuisines/${cuisine.name}Cuisine`">{{ cuisine.name }}</NuxtLink>
            </li>

        </ul>
    </div>
</template>