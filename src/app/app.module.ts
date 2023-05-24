import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResultatsComponent
  ],
  imports: [
    BrowserModule, ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
