import { Question } from "./QuestionType";

export interface Level {
    id?: number | null
    description?: string 
    maxPoints?: number 
    minPoints?: number
    questions?: Question[]
}