import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/service/crud.service';
import { ResultModel } from 'src/models/result.models';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
  public Results?: ResultModel[];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getUserResult("1")
      .subscribe(
        results => {
          this.Results = results;
        },
        error => {
          console.error(error); // Gérer l'erreur de manière appropriée
        }
      );
  }
}
