import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CrudService } from 'src/service/crud.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent{
  searchText : any ;
  exercices = ['Dooble','Histoire d&#39orthographe']
  results: any[] = [];
  categories:any[] =[];

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
      data: [3, 6, 7, 10]
    },{
      name: 'Histoire d&#39orthographe',
      color:'#bad7e9',
      data: [11, 8, 12, 15]
    },{
      name : 'Calcul malin',
      color : '#2b3467',
      data : [0, 9, 6, 5]
    }]
  
  }


  constructor(/*private categoryService: CategoryService*/) { }
  ngOnInit() {
    Highcharts.chart('container', this.options)
    this.getCategories();
  }
  getCategories() {
    /*this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });*/
  }


}
