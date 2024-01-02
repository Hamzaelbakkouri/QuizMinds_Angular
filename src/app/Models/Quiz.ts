import Questionofquiz from "./QuizQuestion";
import { Teacher } from "./Teacher";

export interface Quiz {
    [x: string]: any;
    id?: number;
    successResult?: number;
    answerAccess?: boolean;
    resultAccess?: boolean;
    numberOfChances?: number;
    comment?: string;
    teacher?: Teacher;
    questionOfQuizs?: Questionofquiz[];
}