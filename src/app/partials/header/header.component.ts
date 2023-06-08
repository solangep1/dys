import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private readonly router: Router,
    public authService: AuthService
  ) { }

  exercicePage() {
    this.router.navigateByUrl("exerciceList");
  }

  reglesPage() {
    this.router.navigateByUrl("regles");
  }

  navigateToResultats() {
    this.router.navigateByUrl("resultats");
  }
}
