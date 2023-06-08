import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/service/crud.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})




export class AuthComponent {

  constructor(private http: HttpClient,
    private crudService: CrudService,
    ) {}

  email: string = '';
  password: string = '';


  authentification (){
    this.crudService.VerificationConnexion(this.email,this.password).subscribe(
      response => {
        console.log('Connexion établis :', response);
      },
      error => {
        console.error('identifiant invalide:', error);
      }
    );

    console.log("test bouton connexion")
  }
  
}
