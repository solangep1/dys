import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/service/crud.service';
import { ResultModel } from 'src/models/result.models';
import { UserModel } from 'src/models/user.models';
import { throwError } from 'rxjs';

import { SHModel } from 'src/models/sh.models';
import { ExerciceModel } from 'src/models/exercice.models';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
  
  public spellingHistory : SHModel = {
    sh_id: 123,
    exercice_id: 456,
    exercice_title: "Titre de l'exercice",
    exercice_difficulty: 1,
    sh_text: "Texte de l'exercice",
    sh_result: "Résultat de l'exercice",
  };

  constructor(private crudService: CrudService) { }


  public newUser: UserModel = {
    user_id: 10,
    user_lastname: "Doe",
    user_firstname: "John",
    user_email: "johndoe@example.com",
    user_dateofbirth: new Date("1990-01-01"),
    user_mdp: "password123",
    user_type: 1
  };

  public tabInt : number[] = [];

   ngOnInit(): void {
    const userId = 1; // ID de l'utilisateur
    const exerciceId = 2; // ID de l'exercice
    const user_email = "benjamin.jourdain94@gmail.com";
    const user_mdp = "123"
    const exerciceType = 'SpellingHistory'; // Remplacez par le type d'exercice que vous souhaitez tester
    
    this.crudService.getSpellingHistory(1).subscribe(
      (spellingHistorytest) => {
        console.log(spellingHistorytest);
        this.spellingHistory = spellingHistorytest;
        // Traiter les données de spellingHistory
      },
      (error) => {
        console.error(error);
        // Gérer les erreurs
      }
    );

    


    this.crudService.getListLastResultOfUser(userId, exerciceType).subscribe(
      (data) => {
        console.log("je suis le message", data); // Affiche les données retournées par la requête HTTP
        // Faites d'autres opérations avec les données si nécessaire
        this.tabInt = data;
        console.log("je suis le message 2", this.tabInt); // Affiche les données retournées par la requête HTTP
      },
      (error) => {
        console.error(error); // Affiche l'erreur en cas d'échec de la requête HTTP
        // Gérez l'erreur de manière appropriée si nécessaire
      }
    );


    const result: ResultModel = {
      result_id: 1, // Cette valeur n'as pas d'importance
      user_id: 123, 
      result_date: new Date(), //Donne la date actuelle
      exercice_id: 456, 
      result_score: 10, 
      resutl_goodanswer: 5, 
      result_badanswer: 3 
    };
    
    // this.crudService.AddResultat(result).subscribe(
    //   (data) => {
    //     console.log(data); 
    //   },
    //   (error) => {
    //     console.error(error); 
    //   }
    // );
  }

}
