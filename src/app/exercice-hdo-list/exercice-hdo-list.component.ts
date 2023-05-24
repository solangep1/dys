import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


export interface PeriodicElement {
  title: string;
  difficulty: number;
  score: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { title: 'A Monseigneur le Dauphin', difficulty: 1, score: 100 },
  { title: 'Conseil tenu par les Rats', difficulty: 2, score: 90 },
  { title: 'Contre ceux qui ont le goût difficile', difficulty: 3, score: 80 },
  { title: 'La Cigale et la fourmi', difficulty: 4, score: 70 },
  { title: 'Le Lièvre et la Tortue', difficulty: 5, score: 60 },
  { title: 'Le Corbeau et le Renard', difficulty: 6, score: 50 },
  { title: 'Les deux pigeons', difficulty: 7, score: 40 },

];

@Component({
  selector: 'app-exercice-hdo-list',
  templateUrl: './exercice-hdo-list.component.html',
  styleUrls: ['./exercice-hdo-list.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
})
export class ExerciceHdoListComponent {

  displayedColumns: string[] = ['title', 'difficulty', 'score'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
