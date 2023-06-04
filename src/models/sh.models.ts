import { ExerciceModel } from "./exercice.models";
export interface SHModel {
    sh_id : number;
    exercice_id:number
    exercice_title:string
    exercice_difficulty: number
    sh_text : string;
    sh_result: string;
}