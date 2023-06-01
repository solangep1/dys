import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { CrudService } from 'src/service/crud.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResultatsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule 

  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
