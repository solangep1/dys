import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent{
  searchText : any ;
  exercices = ['Dooble','Histoire d&#39orthographe']


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
  }, {
    name: 'Histoire d&#39orthographe',
    color:'#bad7e9',
    data: [11, 8, 12, 15]
}]
  
  }


  constructor() { }
  ngOnInit() {
    Highcharts.chart('container', this.options)
  }



}
