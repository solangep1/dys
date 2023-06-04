import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/service/crud.service';
import { SHModel } from 'src/models/sh.models';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ResultModel } from 'src/models/result.model';


@Component({
  selector: 'app-exercice-hdo',
  templateUrl: './exercice-hdo.component.html',
  styleUrls: ['./exercice-hdo.component.css']
})

export class ExerciceHDOComponent implements OnInit {
  histoireText: string = "";
  idValue: number = 0;
  inputWords: string[] = [];
  userInputs: string[] = [];
  showScore: boolean = false;
  score: number = 0;

  public spellingHistory: SHModel = {
    sh_id: 123,
    exercice_id: 456,
    exercice_title: "Titre de l'exercice",
    exercice_difficulty: 1,
    sh_text: "Texte de l'exercice",
    sh_result: "Résultat de l'exercice",
  };

  public spellingHistoryResult: ResultModel = {
    result_id: 0,
    user_id: 1,
    result_date: new Date,
    exercice_id: this.spellingHistory.exercice_id,
    result_score: 0,
    resutl_goodanswer: 0,
    result_badanswer: 0,
  }

  constructor(private crudService: CrudService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const exerciceId = params['id'];
      this.idValue = parseInt(exerciceId.replace(/:/g, ""));
      this.histoireText = "Le texte de l'histoire avec l'ID " + this.idValue;
      this.spellingHistory.sh_id = 1;
      this.spellingHistoryResult.exercice_id = this.idValue;
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
    this.inputWords = this.extractWords(text); // Extraire les mots entre {}

    const regex = /\{([^}]+)\}/g;
    let inputCounter = 0;
    const replacedText = text.replace(regex, () => {
      const inputId = `input_${inputCounter++}`;
      return `<input type='text' id='${inputId}'>`;
    });
    return this.sanitizer.bypassSecurityTrustHtml(replacedText);
  }


  extractWords(text: string): string[] {
    const regex = /\{([^}]+)\}/g;
    const matches = text.match(regex);
    if (matches) {
      return matches.map(match => match.slice(1, -1).trim()); // Supprimer les {} et trim pour enlever les espaces avant et après le mot
    }
    return [];
  }


  validateInputs(): void {
    this.userInputs = []; // Réinitialise le tableau à chaque validation

    for (let i = 0; i < this.inputWords.length; i++) {
      const inputElement = document.getElementById(`input_${i}`) as HTMLInputElement;
      if (inputElement) {
        const userInput = inputElement.value.trim().toLowerCase();
        this.userInputs.push(userInput);
      }
    }

    // Calculer le score
    let currentScore = 0;
    for (let i = 0; i < this.userInputs.length; i++) {
      const userInput = this.userInputs[i];
      const wordAtIndexN = this.inputWords[i].toLowerCase();
      if (userInput === wordAtIndexN) {
        this.spellingHistoryResult.resutl_goodanswer++;
      } else {
        this.spellingHistoryResult.result_badanswer++;
      }
    }
    this.spellingHistoryResult.result_score = (this.spellingHistoryResult.resutl_goodanswer / (this.spellingHistoryResult.resutl_goodanswer + this.spellingHistoryResult.result_badanswer)) * 100;
    this.showScore = true;

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

