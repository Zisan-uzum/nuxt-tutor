import { defineStore } from "pinia";
import { Cuisine } from "types/cuisine";



export const useCuisinesStore = defineStore('cuisines', () => {
    const cuisineList = ref<Cuisine[]>([
        {
            name: "Italian",
            messages: []

        },
        {
            name: "Mexico",
            messages: []
        },
        {
            name: "Thailand",
            messages: []
        },
        {
            name: "Greece",
            messages: []
        },
        {
            name: "Japan",
            messages: []
        }

    ])
    return {
        cuisineList
    }
})