import { AlgaNews } from "./AlgaNews"

export namespace Posts {

    export type PostSummary = AlgaNews.components['schemas']['PostSummary']
    export type PostDetailed = AlgaNews.components['schemas']['PostDetailed']
    export type PostWithEarnings = AlgaNews.components['schemas']['PostWithEarnings']
    export type PostInput = AlgaNews.components['schemas']['PostInput']
    export type PostEarnings = AlgaNews.components['schemas']['PostEarnings']
    export type PostsPaginated = AlgaNews.components['schemas']['PostsPaginated']


    export type Query = {
        
        editorId ?: number,
        page ?: number,
        size ?: number,
        showAll ?: boolean,
        sort ?: [keyof PostSummary, 'asc' | 'desc']
    }
}