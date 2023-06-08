import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/service/crud.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})




export class AuthComponent {

  constructor(private http: HttpClient,
    private crudService: CrudService,
    private authService: AuthService
    ) {}

  email: string = '';
  password: string = '';


  login (){
    this.authService.login(this.email, this.password);
    console.log("test bouton connexion");
  }
  
  logout() {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
