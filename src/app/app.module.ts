import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './partials/header/header.component';

import { FooterComponent } from './partials/footer/footer.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExerciceHDOComponent } from './exercice-hdo/exercice-hdo.component';
import { ExerciceHdoListComponent } from './exercice-hdo-list/exercice-hdo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ResultatsComponent,
    ExerciceHDOComponent,
    ExerciceHdoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
