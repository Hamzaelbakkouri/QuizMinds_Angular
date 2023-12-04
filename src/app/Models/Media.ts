import { Question, QuestionToUseOnMedia } from "./QuestionType"

export interface Media {
    id?: number
    src?: string | null
    type: MediaType | null
    question: QuestionToUseOnMedia 
}

export enum MediaType {
    MP4 = "MP4",
    MP3 = "MP3",
    PNG = "PNG",
    JPG = "JPG",
    JPEG = "JPEG",
    GIF = "GIF",
}