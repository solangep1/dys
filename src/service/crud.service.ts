import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ResultModel } from 'src/models/result.model';
import { UserModel } from 'src/models/user.model';


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
  VerificationConnexion(user_email: string, user_mdp: string): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/connexion/${user_email}/${user_mdp}`).pipe(
      tap((data) => {
        this.optsCat = data;
      }),
      catchError(this.handleError)
    );
  }

  //Création d'un nouvelle utilisateur
  Inscription(user: UserModel): Observable<any> {
    console.log(user)
    let API_URL = `${this.url}/user/create`;
    return this.httpClient.post(API_URL, user)
      .pipe(
        catchError(this.handleError)
      )
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

  //Ajout d'un résultat en base
  AddResultat(result: ResultModel): Observable<any> {
    console.log(result)
    let API_URL = `${this.url}/add_result`;
    return this.httpClient.post(API_URL, result)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Récupération de la liste des exercices avec le dernier résultat obtenus d'un utilisateur pour chaque exercice
  getListLastResultOfUser(userId: number, exercice_type: string): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/result/${userId}/${exercice_type}`).pipe(
      tap((data) => {
        this.optsCat = data;
      }),
      catchError(this.handleError)
    );
  }

  ///////////////////////
  /////   Exercice  /////
  //////////////////////

  //Récupération de la liste des exercices
  getExerciceList(exercice_type: string): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/exercice/${exercice_type}`).pipe(
      tap((data) => {
        this.optsCat = data;
      }),
      catchError(this.handleError)
    );
  }

  ///////////////////////
  /////   SpellingH /////
  //////////////////////

  //Récupération d'un exercice de type spelling history
  getSpellingHistory(sh_id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/spellingh/${sh_id}`).pipe(
      map((data) => data[0]), // Extraction du premier élément du tableau de données
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
