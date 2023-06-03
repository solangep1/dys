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

    this.crudService.getUserResultOfExercice(userId, exerciceId)
      .subscribe(
        results => {
          this.Results = results;
        },
        error => {
          console.error(error); 
        }
      );


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



  }
}
