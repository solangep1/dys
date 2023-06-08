import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ExerciceModel } from 'src/models/exercice.models';
import { CrudService } from 'src/service/crud.service';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ResultModel } from 'src/models/result.model';
import { AuthService } from '../auth.service';
//import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-resultats-list',
  templateUrl: './resultats-list.component.html',
  styleUrls: ['./resultats-list.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
})

export class ResultatsListComponent implements OnInit {

  resultList: ResultModel[] = [];
  dataSource = new MatTableDataSource(this.resultList);
  displayedColumns: string[] = ['exercice', 'title', 'date', 'score'];


  public options: any = {
    Chart: {
      type: 'area',
      height: 700,
    },
    title: {
      text: 'Graphique d&#39évolution',
      style: {
        color: '#2b3467'
      }
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['janvier', 'février', 'mars', 'avril'],
      tickmarkPlacement: 'on',
      title: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: 'Nombre de bonnes réponses',
        style: {
          color: '#2b3467'
        }
      }
    },
    series: [{
      name: 'Dooble',
      color: '#f1baa6',
      data: [7, 7, 8, 13]
    }, {
      name: 'Histoire d&#39orthographe',
      color: '#bad7e9',
      data: [11, 8, 12, 15]
    }, {
      name: 'Calcul malin ',
      color: '#2b3467',
      data: [3, 9, 6, 5]
    }]
  }

  constructor(private crudService: CrudService, private readonly router: Router, private authservice: AuthService) {

  }

  ngOnInit(): void {
    this.crudService.getUserResult(this.authservice.getUserId())
      .subscribe(
        exercices => {
          this.resultList = exercices;
          this.dataSource = new MatTableDataSource(this.resultList);
          console.log(exercices);
        },
        error => {
          console.error(error);
        });

    //Highcharts.chart('container', this.options)

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }

}
