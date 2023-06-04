import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './partials/header/header.component';
import { ExerciceListComponent } from './exercice-list/exercice-list.component';
import { ExerciceHdoListComponent } from './exercice-hdo-list/exercice-hdo-list.component';



const routes: Routes = [
  { path: "header", component: HeaderComponent },
  { path: 'exerciceList', component: ExerciceListComponent },
  { path: 'exerciceHdoList', component: ExerciceHdoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
