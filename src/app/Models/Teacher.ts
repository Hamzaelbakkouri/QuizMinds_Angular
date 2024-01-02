import { Quiz } from "./Quiz"

export interface Teacher {
    id: number 
    lastName: string 
    firstName: string 
    dateOfBirth: Date 
    address: string 
    speciality: string 
    quizs: Quiz[]
}