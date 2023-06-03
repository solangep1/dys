/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/service/crud.service';
import { SHModel } from 'src/models/sh.models';

@Component({
  selector: 'app-exercice-hdo',
  templateUrl: './exercice-hdo.component.html',
  styleUrls: ['./exercice-hdo.component.css']
})
export class ExerciceHDOComponent {
  histoireText: string = "";
  idValue: number = 0;
  exercice: SHModel = {
    sh_id: 123,
    exercice_id: 456,
    exercice_title: "Titre de l'exercice",
    exercice_difficulty: 1,
    sh_text: "Texte de l'exercice",
    sh_result: "Résultat de l'exercice",
  };

  constructor(private crudService: CrudService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const exerciceId = params['id'];
      this.idValue = parseInt(exerciceId.replace(/:/g, ""));
      this.histoireText = "Le texte de l'histoire avec l'ID " + this.idValue;
      console.log(this.exercice);
      this.exercice.sh_id = 1;
      console.log(this.exercice);


      this.crudService.getSpellingHistory(this.idValue)
        .subscribe(
          (spellingHistorytest) => {
            console.log(spellingHistorytest);
            this.exercice = spellingHistorytest;
            // Traiter les données de spellingHistory
          },
          (error) => {
            console.error(error);
            // Gérer les erreurs
          }
        );
    });
  }

}*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/service/crud.service';
import { SHModel } from 'src/models/sh.models';

@Component({
  selector: 'app-exercice-hdo',
  templateUrl: './exercice-hdo.component.html',
  styleUrls: ['./exercice-hdo.component.css']
})

export class ExerciceHDOComponent implements OnInit {

  public spellingHistory: SHModel = {
    sh_id: 123,
    exercice_id: 456,
    exercice_title: "Titre de l'exercice",
    exercice_difficulty: 1,
    sh_text: "Texte de l'exercice",
    sh_result: "Résultat de l'exercice",
  };

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {

    this.crudService.getSpellingHistory(1).subscribe(
      (spellingHistorytest) => {
        this.spellingHistory = spellingHistorytest;
        console.log(spellingHistorytest);

      },
      (error) => {
        console.error(error);
      }
    );
  }
}

