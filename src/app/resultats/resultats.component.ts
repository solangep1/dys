import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/service/crud.service';
import { ResultModel } from 'src/models/result.models';
import { UserModel } from 'src/models/user.models';

import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
  public Results?: ResultModel[];
  public User?: UserModel;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    const userId = 1; // ID de l'utilisateur
    const exerciceId = 2; // ID de l'exercice
    const user_email = "benjamin.jourdain94@gmail.com";
    const user_mdp = "123"

      this.crudService.getUser(userId).subscribe(
        (data) => {
          // Traitement des données retournées avec succès
          console.log(data); // Afficher les données retournées
        },
        (error) => {
          // Gestion des erreurs
          console.error(error);
        }
      );

      this.crudService.VerificationConnexion(user_email, user_mdp).subscribe(
        (data) => {
          // Traitez les données renvoyées dans la réponse
          console.log(data); // Affichez les données dans la console ou effectuez d'autres opérations nécessaires
        },
        (error) => {
          // Gérez les erreurs
          console.error('Une erreur s\'est produite : ', error);
        }
      );

      this.crudService.getExerciceList().subscribe(
        (data: any) => {
          // Traitement des données retournées
          console.log(data); // Affiche les données retournées par la requête HTTP
        },
        (error: any) => {
          // Gestion des erreurs
          console.error(error); // Affiche l'erreur en cas de problème lors de la requête HTTP
        }
      );

      this.crudService.getSpellingHistory(1).subscribe(
        (data: any) => {
          // Traitement des données retournées
          console.log(data); // Affiche les données retournées par la requête HTTP
        },
        (error: any) => {
          // Gestion des erreurs
          console.error(error); // Affiche l'erreur en cas de problème lors de la requête HTTP
        }
      );



  }
}
