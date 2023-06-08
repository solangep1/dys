import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/service/crud.service';
import { UserModel } from 'src/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  prenom: string = '';
  nom: string = '';
  email: string = '';
  dateNaissance: Date = new Date('1990-01-01');
  motDePasse: string = '';
  confirmationMotDePasse: string = '';



  constructor(private http: HttpClient,
    private crudService: CrudService,
    private readonly router: Router,
  ) { }


  submitForm() {
    console.log('Soumission du formulaire');

    if (this.motDePasse !== this.confirmationMotDePasse) {
      const errorMessage = 'Les mots de passe ne correspondent pas';
      alert(errorMessage);
      console.error('Les mots de passe ne correspondent pas');
      return;
    }

    const newUser: UserModel = {
      user_id: 1,
      user_lastname: this.prenom,
      user_firstname: this.prenom,
      user_email: this.email,
      user_dateofbirth: this.dateNaissance,
      user_mdp: this.motDePasse,
      user_type: 1
    };

    this.crudService.Inscription(newUser)
      .subscribe(
        response => {
          console.log('Utilisateur créé avec succès :', response);
          this.router.navigateByUrl("exerciceList")
        },
        error => {
          console.error('Erreur lors de la création de l\'utilisateur :', error);
        }
      );
  }
}