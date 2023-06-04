import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  prenom: string = '';
  nom: string = '';
  email: string = '';
  dateNaissance: string = '';
  motDePasse: string = '';
  confirmationMotDePasse: string = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    console.log('Soumission du formulaire');
    // Crée un objet contenant les données à envoyer
    const userData = {
      prenom: this.prenom,
      nom: this.nom,
      email: this.email,
      dateNaissance: this.dateNaissance,
      motDePasse: this.motDePasse
    };

    // Envoie les données à ton serveur en utilisant une requête HTTP
    this.http.post('http://localhost:3000/user', userData)
      .subscribe(
        response => {
          console.log('Inscription réussie !');
          // Gère la réponse du serveur après l'inscription réussie, si nécessaire
        },
        error => {
          console.error('Erreur lors de l\'inscription :', error);
          // Gère les erreurs lors de l'inscription, si nécessaire
        }
      );
  }
}