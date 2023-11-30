export interface Question {
    text: string;
    type: questionType,
    "subject": {
        "id": 2
    },
    "level": {
        "id": 1
    }
};

export enum questionType {
    multichoice,
    single,
    direct
}