import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/service/crud.service';
import { ResultModel } from 'src/models/result.models';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
  public Results?: ResultModel[];

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
  }
}
