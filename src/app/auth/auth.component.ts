import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/service/crud.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})




export class AuthComponent {

  constructor(private http: HttpClient,
    private crudService: CrudService,
    public authService: AuthService,
    private readonly router: Router 
    ) {}

  email: string = '';
  password: string = '';


  login (){
    this.authService.login(this.email, this.password);
    
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl("exerciceList");
    }
  }
  
  logout() {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  inscription(){
    this.router.navigateByUrl('inscription');
  }
}
