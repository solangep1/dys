import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceHDOComponent } from './exercice-hdo/exercice-hdo.component';


const routes: Routes = [
  { path: "exerciceHDO", component: ExerciceHDOComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
