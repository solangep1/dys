import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercice-list',
  templateUrl: './exercice-list.component.html',
  styleUrls: ['./exercice-list.component.css']
})

export class ExerciceListComponent {
  constructor(
    private readonly router: Router,
  ) { }

  navigateToHdoList() {
    this.router.navigateByUrl("exerciceHdoList")
  }
}
