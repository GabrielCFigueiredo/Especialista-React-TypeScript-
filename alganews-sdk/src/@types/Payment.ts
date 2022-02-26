import { AlgaNews } from "./AlgaNews"

export namespace Payment {

    export type PaymentInput = AlgaNews.components['schemas']['PaymentInput']
    export type PaymentPreviewInput = AlgaNews.components['schemas']['PaymentPreviewInput']
    export type PaymentPreview = AlgaNews.components['schemas']['PaymentPreview']
    export type PaymentDetailed = AlgaNews.components['schemas']['PaymentDetailed']
    export type PaymentSummary = AlgaNews.components['schemas']['PaymentSummary']
    export type PaymentEarnings = AlgaNews.components['schemas']['PaymentEarnings']
    export type PaymentsPaginated = AlgaNews.components['schemas']['PaymentsPaginated']
}