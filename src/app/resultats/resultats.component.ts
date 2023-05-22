import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent{
  public options: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Graphique d évolution'
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
    series: [{
      name: 'Dooble',
      data: [11, 8, 12, 15]
  }]
  }
  public options2: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Graphique d&#39évolution'
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
    series: [{
      name: 'Histoire d&#39orthographe',
      data: [3, 6, 7, 10]
  }]
  }

  constructor() { }
  ngOnInit() {
    Highcharts.chart('container2', this.options),
    Highcharts.chart('container1', this.options2);
  }



}
