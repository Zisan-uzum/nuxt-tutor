import { defineStore } from "pinia";
import { photoLinks, photoFetchUrls } from "types/photos";


export const usePhotosStore = defineStore('photos', () => {

    const photoFetchList: photoFetchUrls = {
        authPagePhotoFetchUrls: ["https://api.unsplash.com/photos/atzWFItRHy8"],
        cuisineIndexFetchUrls: ["https://api.unsplash.com/photos/t8hTmte4O_g",
            "https://api.unsplash.com/photos/iKlu-KxoihI",
            "https://api.unsplash.com/photos/XJLemm9xyb8",
            "https://api.unsplash.com/photos/XHDkktJAv1U",
            "https://api.unsplash.com/photos/zOlQ7lF-3vs",
        ]
    }

    const photoLinks: photoLinks = reactive({
        authPagePhotoLinks: [],
        cuisineIndexPhotoLinks: []
    })

    //would prefer computed but sometimes it returns undefined I coudnt find
    const authPagePhotos = async () => {
        if (photoLinks.authPagePhotoLinks.length === 0) {
            const data = await fetchAuthPagePhotos(photoFetchList.authPagePhotoFetchUrls)

            if (data !== undefined) {
                photoLinks.authPagePhotoLinks = data;
                return photoLinks.authPagePhotoLinks
            }

        }
    }
    const cuisineIndexPhotos = async () => {
        if (photoLinks.cuisineIndexPhotoLinks.length === 0) {
            const data = await fetchAuthPagePhotos(photoFetchList.cuisineIndexFetchUrls)

            if (data !== undefined) {
                photoLinks.cuisineIndexPhotoLinks = data;
                return photoLinks.cuisineIndexPhotoLinks
            }

        }
    }
    return {
        photoFetchList, photoLinks, authPagePhotos, cuisineIndexPhotos
    }
})