import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './partials/header/header.component';

import { FooterComponent } from './partials/footer/footer.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExerciceHDOComponent } from './exercice-hdo/exercice-hdo.component';
import { ExerciceListComponent } from './exercice-list/exercice-list.component';
import { NewReglesExoComponent } from './new-regles-exo/regles-exo.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from 'src/service/crud.service';
import { ReglesPageComponent } from './regles-page/regles-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ResultatsComponent,
    ExerciceHDOComponent,
    ExerciceListComponent,
    NewReglesExoComponent,
    ReglesPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    CrudService,
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
