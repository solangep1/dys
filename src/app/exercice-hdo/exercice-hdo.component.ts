import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/service/crud.service';
import { SHModel } from 'src/models/sh.models';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ResultModel } from 'src/models/result.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-exercice-hdo',
  templateUrl: './exercice-hdo.component.html',
  styleUrls: ['./exercice-hdo.component.css']
})

export class ExerciceHDOComponent implements OnInit {
  histoireText = '';
  idValue = 0;
  inputWords: string[] = [];
  userInputs: string[] = [];
  showScore = false;
  score = 0;
  userId: number = this.authservice.getUserId();

  spellingHistory: SHModel = {
    sh_id: 123,
    exercice_id: 456,
    exercice_title: "Titre de l'exercice",
    exercice_difficulty: 1,
    sh_text: "Texte de l'exercice",
    sh_result: "Résultat de l'exercice",
  };

  spellingHistoryResult: ResultModel = {
    result_id: 0,
    user_id: this.userId,
    result_date: new Date(),
    exercice_id: this.spellingHistory.exercice_id,
    result_score: 0,
    resutl_goodanswer: 0,
    result_badanswer: 0,
    exercice_title: "",
    exercice_type: "",
  };

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private authservice: AuthService
  ) { }

  ngOnInit(): void {
    // Récupérer l'ID de l'exercice depuis les paramètres de l'URL
    this.route.params.subscribe((params) => {
      const exerciceId = params['id'];
      this.idValue = parseInt(exerciceId.replace(/:/g, ''), 10);
      this.histoireText = "Le texte de l'histoire avec l'ID " + this.idValue;

      // Initialiser l'ID de l'historique de l'exercice
      this.spellingHistory.sh_id = 1;
      // Mettre à jour l'ID de l'exercice dans le modèle de résultat
      this.spellingHistoryResult.exercice_id = this.idValue;

      // Récupérer les détails de l'historique de l'exercice depuis le service CRUD
      this.crudService.getSpellingHistory(this.idValue).subscribe(
        (spellingHistorytest) => {
          this.spellingHistory = spellingHistorytest;
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }

  replaceText(text: string): SafeHtml {
    // Extraire les mots entre {}
    this.inputWords = this.extractWords(text);

    const regex = /\{([^}]+)\}/g;
    let inputCounter = 0;
    const replacedText = text.replace(regex, () => {
      const inputId = `input_${inputCounter++}`;
      return `<input type='text' id='${inputId}'>`;
    });
    return this.sanitizer.bypassSecurityTrustHtml(replacedText);
  }

  extractWords(text: string): string[] {
    // Extraire les mots entre {}
    const regex = /\{([^}]+)\}/g;
    const matches = text.match(regex);
    if (matches) {
      return matches.map((match) => match.slice(1, -1).trim());
    }
    return [];
  }

  validateInputs(): void {
    this.userInputs = [];

    for (let i = 0; i < this.inputWords.length; i++) {
      // Récupérer la valeur de chaque champ de saisie
      const inputElement = document.getElementById(
        `input_${i}`
      ) as HTMLInputElement;
      if (inputElement) {
        const userInput = inputElement.value.trim().toLowerCase();
        this.userInputs.push(userInput);
      }
    }

    let goodAnswers = 0;
    for (let i = 0; i < this.userInputs.length; i++) {
      const userInput = this.userInputs[i];
      const wordAtIndexN = this.inputWords[i].toLowerCase();
      if (userInput === wordAtIndexN) {
        // Compter le nombre de bonnes réponses
        this.spellingHistoryResult.resutl_goodanswer++;
      } else {
        // Compter le nombre de mauvaises réponses
        this.spellingHistoryResult.result_badanswer++;
      }
    }

    // Calculer le score
    this.spellingHistoryResult.result_score = (this.spellingHistoryResult.resutl_goodanswer / (this.spellingHistoryResult.resutl_goodanswer + this.spellingHistoryResult.result_badanswer)) * 100;
    this.showScore = true;

    // Ajouter le résultat dans la base de données via le service CRUD
    this.crudService.AddResultat(this.spellingHistoryResult).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
    console.log(this.spellingHistoryResult)
  }
}
