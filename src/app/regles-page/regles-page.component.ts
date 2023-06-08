import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regles-page',
  templateUrl: './regles-page.component.html',
  styleUrls: ['./regles-page.component.css']
})
export class ReglesPageComponent {
  constructor(
    private readonly router: Router,
  ) { }

  navigateReglesJeux() {
    this.router.navigateByUrl("reglesExo")
  }

  navigateReglesOrtho() {
    this.router.navigateByUrl("reglesOrtho")
  }
}
