import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultModel } from 'src/models/result.models';
import { CrudService } from 'src/service/crud.service';




@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})


export class ResultatsComponent implements OnInit{
  searchText : any ;
  public Results: ResultModel[] = [];
  public ScoreList?: Number[];
  myArray = [{name:"a"}, {name:""}, {name:"b"}, {name:"c"}];


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


  constructor(private crudService : CrudService) { }
  ngOnInit():void {
    const userId = 2; // ID de l'utilisateur
    const exerciceId = 3; // ID de l'exercice
    
    
    this.crudService.getUserResultOfExercice(userId,exerciceId)
      .subscribe(
        results => {
          this.Results = results;
        },
        error => {
          console.error(error); // Gérer l'erreur de manière appropriée
        }
      );


    this.initTableValue();
    Highcharts.chart('container', this.options)

  }



  initTableValue():void{
    this.Results.forEach((tmpResult:ResultModel) => {
      this.ScoreList?.push(tmpResult.result_goodanswer)
    });
  }
  
}
