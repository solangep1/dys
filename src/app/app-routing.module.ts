import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './partials/header/header.component';
import { ResultatsComponent } from './resultats/resultats.component';





const routes: Routes = [
  { path: "header", component: HeaderComponent },
  { path: 'resultats', component: ResultatsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
