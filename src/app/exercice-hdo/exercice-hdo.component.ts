import { Component, OnInit } from '@angular/core';
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

