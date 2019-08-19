import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { PruebaOtroComponent } from './prueba-otro/prueba-otro.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    PruebaOtroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
