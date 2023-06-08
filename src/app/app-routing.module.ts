import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ExerciceListComponent } from './exercice-list/exercice-list.component';
import { ExerciceHDOComponent } from './exercice-hdo/exercice-hdo.component';
import { ExerciceHdoListComponent } from './exercice-hdo-list/exercice-hdo-list.component';
import { ReglesPageComponent } from './regles-page/regles-page.component';
import { NewReglesExoComponent } from './new-regles-exo/regles-exo.component';
import { ReglesOrthoComponent } from './regles-ortho/regles-ortho.component';
import { NewConditionsComponent } from './new-conditions/conditions.component';
import { ResultatsListComponent } from './resultats-list/resultats-list.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path: "", component: AuthComponent },
  { path: "header", component: HeaderComponent },
  {path: "connexion",component: AuthComponent},
  { path: "footer", component: FooterComponent },
  { path: 'exerciceList', component: ExerciceListComponent },
  { path: 'exerciceHdoList', component: ExerciceHdoListComponent },
  { path: 'exerciceHDO/:id', component: ExerciceHDOComponent },
  { path: 'regles', component: ReglesPageComponent },
  { path: 'reglesExo', component: NewReglesExoComponent },
  { path: 'reglesOrtho', component: ReglesOrthoComponent },
  { path: 'conditions', component: NewConditionsComponent },
  { path: 'resultats', component: ResultatsListComponent },
  { path: 'inscription', component: InscriptionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
