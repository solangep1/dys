import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExerciceHDOComponent } from './exercice-hdo/exercice-hdo.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciceHDOComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
