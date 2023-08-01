<script setup lang="ts">
import { usePhotosStore } from '@/stores/photos';
import { photoUrls } from '@/types/photos'

definePageMeta({
    middleware: "auth"
})
useHead({
    title: "Cuisines"
})
const cuisineNameList = ref<string[]>(['Italian', 'Turkish', 'German', 'American', 'Asian', 'Chinese'])
//composables
const { addCuisine } = useCuisines()
const { user } = useAuth()
//store
// const photosStore = usePhotosStore()
// await photosStore.cuisineIndexPhotos()

// const cuisinePhotos: photoUrls[] = photosStore.photoLinks.cuisineIndexPhotoLinks

//it waits so much for photos thats why I commented out 
const handleSubmit = async (cuisineName: string) => {
    try {
        await addCuisine({ title: cuisineName, userId: user.value?.id as string })
    } catch (error) {
        console.log("couldn't add cuisine chefbot", error)
    }
}
</script>

<template>
    <div>
        <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
            <li v-for="(cuisine, index) in cuisineNameList">
                <NuxtLink :to="`/cuisines/${cuisine}Cuisine`">
                    <div class="card w-48 bg-base-100 shadow-xl h-96">
                        <!-- <figure class="px-10 pt-10">
                            <img :src="cuisinePhotos[index]['regular']" :alt="`${cuisine}`" class="rounded w-full h-full" />
                        </figure> -->
                        <div class="card-body items-center text-center justify-end">
                            <h2 class="card-title">{{ cuisine }}</h2>
                            <div class="card-actions">
                                <button class="btn btn-primary" @click="handleSubmit(cuisine)">Add to my list</button>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>