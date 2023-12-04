import { Level } from "./Level"
import { Media } from "./Media"
import { SubjectType } from "./SubjectType"

export interface Question {
    id?: number | null
    question: string | null
    numberOfAnswers: number | null
    numberOfCorrectAnswers: number | null
    questionType: QuestionType | null
    points: number | null
    time: number | null
    level: Level
    subject: SubjectType
    media?: Media[]
}

export interface QuestionToUseOnMedia {
    id: number | null
}


export enum QuestionType {
    MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
    SINGLE_CHOICE = "SINGLE_CHOICE",
}