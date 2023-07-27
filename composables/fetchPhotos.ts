// import { usePhotosStore } from "@/stores/photos";

// const photosStore = usePhotosStore()



export const fetchAuthPagePhotos = async (fetchLinks: string[], setPhotos: string) => {
    const config = useRuntimeConfig();
    const fetchRequests = fetchLinks.map((url) =>
        fetch(url, {
            headers: {
                Authorization: `Client-ID ${config.public.unsplash}`,
            },
        })
    );
    //wait for fetched photos
    const responses = await Promise.all(fetchRequests);

    //  convert each response to json
    const photoDataArray = await Promise.all(responses.map((response) => response.json()));

    //find the array in reactive object coming from store, by matching prop
    // const findWhereUpdate = Object.keys(photosStore.photoLinks).find((link) => link === setPhotos) as string

    //swallow the reactive object, as it doesnt allow index reactive object using string
    // const photoLinks: Record<string, string[]> = photosStore.photoLinks;

    //update the array in swallow reactive object
    // photoLinks[findWhereUpdate] = photoDataArray.map((data) => data.urls.regular)

    //then update reactive object
    // photosStore.photoLinks = { ...photosStore.photoLinks, ...photoLinks }

    return photoDataArray.map((data) => data.urls.regular)
}