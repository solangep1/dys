import { Component } from '@angular/core';
import { User } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user : User = {
    name : "Solange",
    email : "soso@gmail.com",
    password : "soso",
    typeOfDys : "Dyslexie"
  }
title : any

}
