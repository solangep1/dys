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
  resultList: any[] = [];

  constructor(private crudService: CrudService, private readonly router: Router) { }

  ngOnInit(): void {

    this.initExerciceList();
    this.initResultList();

  }

  initExerciceList() {
    this.crudService.getExerciceList("SpellingHistory")
      .subscribe(
        exercices => {
          this.exerciceList = exercices;
          this.dataSource = new MatTableDataSource(this.exerciceList);
        },
        error => {
          console.error(error);
        });
  }

  initResultList() {
    this.crudService.getListLastResultOfUser(1, 'SpellingHistory')
      .subscribe(
        (data) => {
          this.resultList = data;
          console.log(this.resultList)
        },
        (error) => {
          console.error(error);
        }
      );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigateToExercice(exercice_id: number) {
    this.router.navigateByUrl("exerciceHDO/:" + exercice_id);
  }

}
