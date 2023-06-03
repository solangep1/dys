import { ExerciceModel } from "./exercice.models";
export interface SHModel extends ExerciceModel {
    sh_id : number;
    sh_title : string;
    sh_text : string;
    sh_world : string;
    sh_difficulty : Date;  
}
