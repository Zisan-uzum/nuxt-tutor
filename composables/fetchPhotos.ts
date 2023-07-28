export const fetchAuthPagePhotos = async (fetchLinks: string[]) => {
    const config = useRuntimeConfig();
    const fetchRequests = fetchLinks.map((url) =>
        fetch(url, {
            headers: {
                Authorization: `Client-ID ${config.public.unsplash}`,
            },
        })
    );
    const responses = await Promise.all(fetchRequests);
    const photoDataArray = await Promise.all(responses.map((response) => response.json()));
    // photoDataArray.map((data) => console.log(data.urls))
    return photoDataArray.map((data) => { return data.urls })
}