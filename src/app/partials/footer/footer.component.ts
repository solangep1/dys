import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(
    private readonly router: Router,
  ) { }

  navigateToConditions() {
    this.router.navigateByUrl("consitions")
  }
}
