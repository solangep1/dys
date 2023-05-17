import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exercice-hdo',
  templateUrl: './exercice-hdo.component.html',
  styleUrls: ['./exercice-hdo.component.css']
})
export class ExerciceHDOComponent implements OnInit {
  texteDeLaBaseDeDonnees!: string;
  titleValue!: string;
  motsManquantsValue!: string;
  champs: { valeurInitiale: string, valeurModifiee: string }[] = [];
  texteRemplace: string = '';

  constructor(private http: HttpClient) { }

  title() {
    this.http.get<any>('url_de_votre_api').subscribe(data => {
      this.titleValue = data.title; // "texte" est le champ que vous voulez afficher
    });
  }

  ngOnInit() {
    this.http.get<any>('url_de_votre_api').subscribe(data => {
      this.texteDeLaBaseDeDonnees = data.texte; // "texte" est le champ que vous voulez afficher
      const champRegex = /{([^}]*)}/g;
      const matches = this.texteDeLaBaseDeDonnees.match(champRegex) || [];
      this.champs = matches.map(match => {
        return { valeurInitiale: match, valeurModifiee: match };
      });
      this.texteRemplace = this.texteDeLaBaseDeDonnees.replace(champRegex, (match, champ) => {
        const champModifie = this.champs.find(c => c.valeurInitiale === match);
        return champModifie ? champModifie.valeurModifiee : champ;
      });
    });
  }

  motsManquants() {
    this.http.get<any>('url_de_votre_api').subscribe(data => {
      this.motsManquantsValue = data.motsManquants;
    });
  }

  validerInputs() {
    const valeursInputs = this.champs.map(champ => champ.valeurModifiee);
    const totalChamps = valeursInputs.length;
    let bonnesReponses = 0;

    for (let i = 0; i < totalChamps; i++) {
      const valeurInput = valeursInputs[i];
      const valeurInitiale = this.champs[i].valeurInitiale;

      if (valeurInput === valeurInitiale) {
        bonnesReponses++;
      }
    }

    const pourcentageBonnesReponses = (bonnesReponses / totalChamps) * 100;
    console.log('Pourcentage de bonnes réponses :', pourcentageBonnesReponses);
  }

}