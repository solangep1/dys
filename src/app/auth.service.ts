import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;
  constructor(private http: HttpClient,private crudService: CrudService,) 
  {  }
    private userId: number = 0;

  login(email: string, password: string) {
    this.loggedIn = false;

    this.crudService.VerificationConnexion(email,password).subscribe(
      response => {
        console.log('Connexion établis :', response);
        this.loggedIn = true;
        localStorage.setItem('userId', response.toString());
        localStorage.setItem('userId', response.toString());

        const storedValue: String= localStorage.getItem('userId') || "";
        console.log(storedValue); // Output: null 
      },
      error => {
        console.error('identifiant invalide:', error);
        this.loggedIn = false;

      }
    );
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('userId');

  }

  isLoggedIn() {
    return this.loggedIn;

  }
  getUserId() {
    const storedUserId = localStorage.getItem('userId');
    this.userId = Number(storedUserId);
    return this.userId;
  }
}
