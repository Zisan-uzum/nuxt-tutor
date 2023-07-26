import { useSystemMessage } from "@/composables/systemMessage";
import { defineStore } from "pinia";
import { Cuisine } from "types/cuisine";



export const useCuisinesStore = defineStore('cuisines', () => {
    const cuisineList = ref<Cuisine[]>([
        {
            name: "Italian",
        },
        {
            name: "Mexico",
        },
        {
            name: "Thailand",
        },
        {
            name: "Greece",
        },
        {
            name: "Japan",
        }

    ])
    return {
        cuisineList
    }
})