import { defineStore } from "pinia";
import { photoLinks, photoFetchUrls } from "types/photos";


export const usePhotosStore = defineStore('photos', () => {

    const photoFetchList: photoFetchUrls = {
        // authPagePhotoFetchUrls: ["https://api.unsplash.com/photos/vA1L1jRTM70"]
        authPagePhotoFetchUrls: ["https://api.unsplash.com/photos/atzWFItRHy8"]
    }

    const photoLinks: photoLinks = reactive({
        authPagePhotoLinks: []
    })

    const authPagePhotos = computed(() => {
        if (photoLinks.authPagePhotoLinks.length === 0) {
            fetchAuthPagePhotos(photoFetchList.authPagePhotoFetchUrls)
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