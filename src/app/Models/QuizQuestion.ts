import { Question } from "./QuestionType";
import { Quiz } from "./Quiz";

export default class Questionofquiz {
    id: number = 0;
    timed: boolean = false;
    question: Question | undefined
    quiz: Quiz | undefined
}