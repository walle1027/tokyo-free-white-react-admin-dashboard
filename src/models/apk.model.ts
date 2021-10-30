export interface ApkModel {
    id?: number
    appId?: string
    appName?: string
    type?: 'game' | 'app'
    category?: string
    icon?: string
    description?: string
    pictures?: string[]
    video?: string
    publishDate?: Date
    googlePlay?: string
    author?: string
    originUrl?: string
    tags?: string[]
    appVersion?: number
    appVersionName?: string
    updateLog?: string
    downdloads?: number
    reviews?: number
    requirements?: string
    isDeleted?: number
}
