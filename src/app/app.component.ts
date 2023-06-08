import { Component } from '@angular/core';
import { User } from './interfaces/user.interface';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService) { }

  user : User = {
    name : "Solange",
    email : "soso@gmail.com",
    password : "soso",
    typeOfDys : "Dyslexie"



  }
title : any

}
