import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Node/Express API
  private url = 'http://localhost:3000';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }
  optsCat = [];
  optsGroupe = [];

/////////////////////
/////   User    /////
////////////////////
  //Récupération des données d'un utilisateur
  getUser(userId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/user/${userId}`).pipe(
      tap((data) => {
        this.optsCat = data;
      }),
      catchError(this.handleError)
    );
  }

//Vérification des identifiants de connexion. Si correcter alors on renvoie id utilisateur sinon 0
VerificationConnexion(user_email: string, user_mdp:string ): Observable<any> {
      return this.httpClient.get<any>(`${this.url}/connexion/${user_email}/${user_mdp}`).pipe(
        tap((data) => {
          this.optsCat = data;
        }),
        catchError(this.handleError)
      );
    }
  



///////////////////////
/////   Result    /////
//////////////////////

  //Récupération des résultats d'un utilisateur
  getUserResult(userId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/user/result/${userId}`).pipe(
      tap((data) => {
        this.optsCat = data;
      }),
      catchError(this.handleError)
    );
  }

//Récupération des résultats d'un utilisateur en fonction de l'exercice
getUserResultOfExercice(userId: number, exerciceId: number): Observable<any> {
  return this.httpClient.get<any>(`${this.url}/user/result/${userId}/${exerciceId}`).pipe(
    tap((data) => {
      this.optsCat = data;
    }),
    catchError(this.handleError)
  );
}

///////////////////////
/////   Autre    /////
//////////////////////
//Message d'erreur
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Erreur côté client :', error.error.message);
    } else {
      console.error(
        `Code d'erreur renvoyé par le backend : ${error.status}, ` +
        `message d'erreur : ${error.error}`
      );
    }
    return throwError('Une erreur est survenue. Service indisponible.');
  }
}
