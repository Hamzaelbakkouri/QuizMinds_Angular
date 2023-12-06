import { Question } from "./QuestionType";

export interface Level {
    id?: number | null
    description?: string 
    maxPoints?: number | null
    minPoints?: number | null
    questions?: Question[]
}