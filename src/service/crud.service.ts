import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//@Injectable({
//  providedIn: 'root'
//})

export class CrudService {
  // Node/Express API
  private url = 'http://localhost:3000';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }
  optsCat = [];
  optsGroupe = [];

 
//get all result
getCategories(){
  //return this.httpClient.get(`${this.url}/categories`).pipe(tap((_)=> console.log('categories fetched')))

  return this.optsCat.length 
  ? of(this.optsCat) 
  : this.httpClient
      .get<any>(`${this.url}/result`)
      .pipe(tap((data) => (this.optsCat = data)));

}  

  

}
