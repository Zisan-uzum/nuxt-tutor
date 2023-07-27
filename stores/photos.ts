import { defineStore } from "pinia";
import { photoLinks } from "types/photos";


export const usePhotosStore = defineStore('photos', () => {

    const photoFetchList: photoLinks = {
        authPagePhotoLinks: ["https://api.unsplash.com/photos/vA1L1jRTM70"]
    }

    const photoLinks: photoLinks = reactive({
        authPagePhotoLinks: []
    })

    const authPagePhotos = computed(() => {
        if (photoLinks.authPagePhotoLinks.length === 0) {
            fetchAuthPagePhotos(photoFetchList.authPagePhotoLinks, "authPagePhotoLinks")
                .then((data) => {
                    if (data !== undefined) {
                        photoLinks.authPagePhotoLinks = data;
                    }
                })
                .catch((error) => {
                    console.error('Error fetching auth page photos:', error);
                });
        }
        return photoLinks.authPagePhotoLinks

    })
    return {
        photoFetchList, photoLinks, authPagePhotos
    }
})