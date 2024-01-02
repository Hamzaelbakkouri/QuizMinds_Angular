import { Quiz } from "./Quiz";
import { Student } from "./Student";


export interface AssignQuiz {
    id: number;
    student: Student;
    quiz: Quiz;
    score: number;
    chance: number;
    notes: string;
    date: Date;
}