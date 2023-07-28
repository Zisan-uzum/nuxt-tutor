interface photoUrls {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string

}

export interface photoFetchUrls {
    authPagePhotoFetchUrls: string[]
}
export interface photoLinks {
    authPagePhotoLinks: photoUrls[]

}