export interface photoUrls {
    raw?: string
    full?: string
    regular?: string
    small?: string
    thumb?: string

}

export interface photoFetchUrls {
    authPagePhotoFetchUrls: string[]
    cuisineIndexFetchUrls: string[]
}
export interface photoLinks {
    authPagePhotoLinks: photoUrls[]
    cuisineIndexPhotoLinks: photoUrls[]

}