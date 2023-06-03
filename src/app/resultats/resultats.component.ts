import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultModel } from 'src/models/result.models';
import { CrudService } from 'src/service/crud.service';

import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { ExerciceModel } from "src/models/exercice.models";




@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
})


export class ResultatsComponent implements OnInit{
  searchText : any ;
  public Results: ResultModel[] = [];
  public ScoreList?: Number[];

  exerciceList: ExerciceModel[] = [];
  dataSource = new MatTableDataSource(this.exerciceList);
  displayedColumns: string[] = ['title', 'difficulty', 'score'];

  public options: any = {

    Chart: {
      type: 'area',
      height: 700,
    },
    title: {
      text: 'Graphique d&#39évolution',
      style:{
        color:'#2b3467'
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
    yAxis:{
      title :{
        text:'Nombre de bonnes réponses',
        style:{
          color:'#2b3467'
        }
      }
        },
    series: [{
      name: 'Dooble',
      color : '#f1baa6',
      data: [7, 7, 8, 13]
    },{
      name:'Histoire d&#39orthographe',
      color:'#bad7e9',
      data: [11, 8, 12, 15]
    },{
      name : 'Calcul malin ' ,
      color : '#2b3467',
      data : [3, 9, 6, 5]
    }]
  }

  constructor(private crudService: CrudService, private readonly router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.crudService.getExerciceList("SpellingHistory")
      .subscribe(
        exercices => {
          this.exerciceList = exercices;
          this.dataSource = new MatTableDataSource(this.exerciceList);
          console.log(exercices);
        },
        error => {
          console.error(error);
        });
    this.route.params.subscribe(params => {
      const histoireId = params['exercice_id'];
    });
    Highcharts.chart('container', this.options)

  }


 applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  hdoExercice(exercice_id: number) {
    this.router.navigateByUrl("exerciceHDO/:" + exercice_id);
  }
  
}
