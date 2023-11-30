export interface SubjectType {
    id?: number;
    title: string;
    subject?: SubjectType;
    questions?: any;
};

export interface createSubjectType {
    title: string;
    subject: number | null;
};