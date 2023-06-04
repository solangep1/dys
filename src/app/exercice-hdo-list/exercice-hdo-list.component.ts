import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ExerciceModel } from 'src/models/exercice.models';
import { CrudService } from 'src/service/crud.service';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-exercice-hdo-list',
  templateUrl: './exercice-hdo-list.component.html',
  styleUrls: ['./exercice-hdo-list.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
})

export class ExerciceHdoListComponent implements OnInit {

  exerciceList: ExerciceModel[] = [];
  dataSource = new MatTableDataSource<any>;
  displayedColumns: string[] = ['title', 'difficulty', 'score'];
  resultList: string[] = [];
  listExerciceWithScore: string[][] = [];

  constructor(private crudService: CrudService, private readonly router: Router) { }

  ngOnInit(): void {
    this.crudService.getExerciceList("SpellingHistory")
      .subscribe(
        exercices => {
          this.exerciceList = exercices;
        },
        error => {
          console.error(error);
        });

    this.crudService.getListLastResultOfUser(1, 'SpellingHistory')
      .subscribe(
        (data) => {
          this.resultList = data;
          this.concatenList(); // Ajouter les parenthèses ici
        },
        (error) => {
          console.error(error);
        }
      );
  }


  concatenList() {
    for (let i = 0; i < this.exerciceList.length; i++) {
      const ligne = [this.exerciceList[i].exercice_title, this.exerciceList[i].exercice_difficulty.toString(), this.resultList[i]];
      this.listExerciceWithScore.push(ligne);
    }
    console.log(this.listExerciceWithScore); // Vérifier le contenu dans la console
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  hdoExercice(exercice_id: number) {
    this.router.navigateByUrl("exerciceHDO/:" + exercice_id);
  }

}
