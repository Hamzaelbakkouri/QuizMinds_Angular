import { Question } from "./QuestionType";

export interface SubjectType {
    id?: number | null
    name?: string;
    top?: SubjectTypeNative;
    questions?: Question[];
};
export interface SubjectTypeNative {
    id: number;
    name: string;
};

export interface createSubjectType {
    name: string;
    top: { id: number } | null;
};
export interface updateSubjectType {
    id?: number;
    name: string;
    top: { id: number };
};