import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ExerciceHdoListComponent } from './exercice-hdo-list/exercice-hdo-list.component';



const routes: Routes = [
  { path: "header", component: HeaderComponent },
  { path: 'exerciceHdoList', component: ExerciceHdoListComponent },
  { path: "footer", component: FooterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
